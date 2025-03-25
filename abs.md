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

## 2. Using the unary minus `-` operator

The unary minus `-` operator in JavaScript is used to negate the value of a number. It converts a positive number to
negative and vice versa. 

```bash
$ const num1: number = 123;
$ const num2: number = -num1;
$ console.log(num2); // logs -123

$ const num3: number = -123;
$ const num4: number = -num3;
$ console.log(num4); // logs 123
```

Based on this technique, an implementation of the abs function will look like:

```bash
$ function abs<T extends number>(n: T): T {
$    return (n < 0 ? -n : n) as T;
$ }
```


## 3. Multiply by `-1` if the number is negative
This is another straightforward yet elegant solution.
Since multiplying two negative numbers results in a positive
value, multiplying any negative number by -1 effectively converts it to its positive equivalent.

```bash
$ function abs<T extends number>(n: T): T {
$    return (n < 0 ? n * -1 : n) as T;
$ }
```

## 4. The square root trick
Since squaring a number always produces a non-negative result, computing the square root of the squared value
effectively yields its absolute value.

```bash
$ function abs<T extends number>(n: T): T {
$    return Math.sqrt(n * n) as T;
$ }
```

<br/>
<br/>
These are some of the techniques I have learned and utilized over the years while developing my programming skills. However, in
practice, I now primarily rely on built-in functions whenever they are available in any new programming language I work
with.