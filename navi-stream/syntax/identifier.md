---
order: -99
---

# Identifier

Identifier is the name of a variable ([let]) or a function ([fn]). It must start with a letter or an underscore, followed by any number of letters, digits, or underscores.

## Valid example

```
var1
_var1
_var_1
_Var1
```

## Invalid example

```
1var
var 1
var-1
```

## Keywords

You must avoid using Navi Stream's keywords, otherwise it will cause a syntax error.

Here is keyword list (not including all), please follow the compiler's check result.

```
let
var
varip
nil
true
false
for
to
step
while
continue
break
if
else
fn
return
param
meta
export
import
use
switch
case
default
plot
```

[let]: statement/assign.md
[fn]: statement/function.md
