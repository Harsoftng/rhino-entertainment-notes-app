<p align="center">
  <a href="https://rhinoentertainmentgroup.com/" target="blank"><img src="https://rhinoentertainmentgroup.com/wp-content/uploads/2018/06/white-horizontal.png.webp" width="120" alt="Nest Logo" /></a>
</p> 

This document shows ways I would implement the `Math.abs()` function if it wasn't available.

## 1. Convert the number to string and strip the `-` sign if it exists

This was the first approach that came to mind—probably because I relied on it heavily when I first started learning
JavaScript. That was, of course, before I had the grand revelation that the Math class already had a built-in abs
function! 😅

I realize this might not count as a valid answer since it was used as an example in the question, but hey, I figured I'd
throw it in anyway for nostalgia’s sake!

## 2. Using the unary `-` operator

The unary minus `-` operator in JavaScript is used to negate the value of a number. It converts a positive number to
negative and vice versa. 

```bash
$ const num1 = 123;
$ const num2 = -num1;
$ console.log(num2); // logs -123

$ const num3 = -123;
$ const num4 = -num3;
$ console.log(num4); // logs 123
```

Based on this technique, an implementation of the abs function will look like:

```bash
$ function abs(n: number): number {
$    return n < 0 ? -n : n;
$ }
```
<br/>
<br/>
These are the techniques I have learned and utilized over the years while developing my programming skills. However, in
practice, I now primarily rely on built-in functions whenever they are available in any new programming language I work
with.




