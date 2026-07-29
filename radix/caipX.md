---
namespace-identifier: <{name of folder}-caip{X}> where X = the CAIP being applied to this namespace 
title: <{namespace common name} [, aka ecosystem name] - {common name for type of entity identified by Caip-X}>
author: <["FirstName1 LastName1 (@GitHubUsername1)", "AnonHandle2 <foo2@bar.com>"]>
discussions-to: <URL of PR, mailing list, etc>
status: Draft
type: Informational
created: <date created on, in ISO 8601 (yyyy-mm-dd) format>
requires (*optional): <["CAIP-X", "CAIP-Y"]>
replaces (*optional): <CAIP-Z>
---

## Introduction

<!--"If you can't explain it simply, you don't understand it well enough." 
Provide a simplified and layman-accessible explanation of how CAIP X applies 
to the relevant scheme used in this namespace (see other templates for a model).
Caveats or mental model differences from equivalents in other namespaces 
can be mentioned here upfront, but not implementation details like validation, 
confirmation from a live connection.-->

## Specification

### Semantics

<!-- Explain (and refer to/add links in the `## References` section) any inputs 
or namespace-specific constructs needed to generate or interpret the valid 
possible values of CAIP-X in this namespace. Assume your reader has already
read any other CAIP profiles listed above in the "Requires" frontmatter field. -->

### Syntax

<!-- Explain the actual algorithm or transformation needed to transform "inputs" 
from the native development enviroment and context into a conformant and unique 
CAIP-X token deterministically. Consider including (if applicable) a regular
expression for validation as well, as some consumers or toolmakers may want to
support this CAIP-X scheme without a deep understanding of any specifications, 
devdocs, or improvement proposals on which this specification depends. If there 
are canonicalization guarantees, checksums, or other assumptions in the native
format or protocol,  explain how they exist (or can be made to exist) in the 
CAIP-X equivalent as well. -->

### Resolution Mechanics

<!-- Many blockchain systems allow for transactions, asset-states, etc. to be
validated against the chain they are targeting or depending to to avoid replay
attacks or other unintended outcomes. This is often done by an API or RPC call
to a node to validate the targetted chain or network. Include a sample
request/response and add the relevant documentation to the `## References`
section below if possible, as well as an explanation of any steps needed to
validate the results, calculate checksums, persist session metadata or nonces,
 etc. -->

## Rationale

<!-- Explain here how the mapping or translation between native identifiers or 
messages and CAIP-X identifiers or messages was arrived at, history and 
pre-history, etc.-->

### Backwards Compatibility

<!-- If earlier CAIPs or earlier stages in the governance of the namespace created
legacy identifiers that break or extend the specification above, please add a
section for "Legacy" compatibility and an explanation of what contexts and/or
what time-frames would require catching those cases.-->

## Test Cases

<!-- A list of manually-composed and validated examples is the **most important**
section, and by far the most read! be sure to check often that this stays in sync
with any changes or additions in the preceding sections. -->

## Additional Considerations (*OPTIONAL)

<!-- Future topics? Upcoming protocol upgrades that will require new specifications,
in the namespace and/or in the CAIPs? -->

## References

<!-- Links to external resources that help understanding the namespace or the
specification/applied-CAIP better in this context. This can also include links
to existing implementations.

The preferred format, for browser-rendering and long-term maintenance, is a
bulletted list of [Name][] links (rather than classical [Name](referent) links),
followed by ` - ` and a summary or explanation of the content.  In a separate
section below, add the name-referent pairs in the `[Name]: https://{referent} `
format-- this will be invisible in any Github-flavored Markdown rendering
(including jekyll/github pages, aka github.io, but also docusaurus and many
dev-docs rendering engines). -->

[CAIP-2 Profile]: ./caip2.md
[CAIP-2]: https://chainagnostic.org/CAIPs/caip-2
[CAIP-10]: https://chainagnostic.org/CAIPs/caip-10

## Copyright

Copyright and related rights waived via [CC0](https://creativecommons.org/publicdomain/zero/1.0/).
