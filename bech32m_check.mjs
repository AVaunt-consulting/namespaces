// Validate and re-encode Radix bech32m addresses for CAIP profile test cases.
const CHARSET = "qpzry9x8gf2tvdw0s3jn54khce6mua7l";
const BECH32M_CONST = 0x2bc830a3;

function polymod(values) {
  const gen = [0x3b6a57b2, 0x26508e6d, 0x1ea119fa, 0x3d4233dd, 0x2a1462b3];
  let chk = 1;
  for (const v of values) {
    const b = chk >>> 25;
    chk = ((chk & 0x1ffffff) << 5) ^ v;
    for (let i = 0; i < 5; i++) if ((b >>> i) & 1) chk ^= gen[i];
  }
  return chk >>> 0;
}

const hrpExpand = (hrp) => [
  ...[...hrp].map((c) => c.charCodeAt(0) >> 5),
  0,
  ...[...hrp].map((c) => c.charCodeAt(0) & 31),
];

function decode(addr) {
  const pos = addr.lastIndexOf("1");
  const hrp = addr.slice(0, pos);
  const data = [...addr.slice(pos + 1)].map((c) => CHARSET.indexOf(c));
  if (data.includes(-1)) return { hrp, data: null, ok: false };
  const ok = polymod([...hrpExpand(hrp), ...data]) === BECH32M_CONST;
  return { hrp, data: data.slice(0, -6), ok };
}

function encode(hrp, values) {
  const mod = polymod([...hrpExpand(hrp), ...values, 0, 0, 0, 0, 0, 0]) ^ BECH32M_CONST;
  const checksum = Array.from({ length: 6 }, (_, i) => (mod >>> (5 * (5 - i))) & 31);
  return hrp + "1" + [...values, ...checksum].map((v) => CHARSET[v]).join("");
}

const tests = [
  "account_rdx129a9wuey40lducsne6r8e5q7xmt07068gcede0x0nrwtsnehpkf6zh",
  "resource_rdx1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxradxrd",
  "resource_tdx_2_1tknxxxxxxxxxradxrdxxxxxxxxx009923554798xxxxxxxxxtfd2jc",
  "resource_rdx1nfxxxxxxxxxxed25sgxxxxxxxxx002236757237xxxxxxxxxed25sg",
  "resource_tdx_2_1nfxxxxxxxxxxed25sgxxxxxxxxx002236757237xxxxxxxxx3e2cpa",
  "component_tdx_2_1cptxxxxxxxxxfaucetxxxxxxxxx000527798379xxxxxxxxxyulkzl",
];
for (const t of tests) {
  const { hrp, data, ok } = decode(t);
  console.log(`${ok ? "VALID  " : "INVALID"} hrp=${hrp.padEnd(20)} datalen=${data ? data.length : 0} ${t}`);
}

// Repair the x402 example account: keep the data part, recompute checksums.
const { data } = decode(tests[0]);
const entityByte = (data[0] << 3) | (data[1] >> 2);
console.log("\nEntity byte of example data: 0x" + entityByte.toString(16));
const mainnetAccount = encode("account_rdx", data);
const stokenetAccount = encode("account_tdx_2_", data);
console.log("Repaired mainnet account: ", mainnetAccount, decode(mainnetAccount).ok);
console.log("Derived stokenet account: ", stokenetAccount, decode(stokenetAccount).ok);
