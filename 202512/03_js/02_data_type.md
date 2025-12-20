<a name="topage"></a>

# 02_data_type

### data_type

* A variable is a named container that stores a value of a specific `data type`.
    * variable named `age`  stores a number value of `25`.
```js
    age = 25;
```

* Js data types
    * number
    * floating point number
    * string
    * boolean
    * undefined
    * null
    * object (array)
    * symbol
    * bigint

### [ Comments ]

* Comments are lines of code that JavaScript will intentionally ignore. 
* Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.

```js
// This is an in-line comment.

/* This is a
multi-line comment 
*/
```

### [ console.log() ]

* console.log() is a JavaScript command that prints text or values to the browser’s console, mainly for debugging.. 

### [ number ]

*  number - is an integers
  
```js
console.log(3);
console.log(-11);
```

### [ floating point number ]

* `floating point number` is a number with a decimal point.

```js
console.log(3.4);
console.log(3.14);
console.log(-3.45);
```

### [ String ]

* `String` is a text with enclosed in quotes or double-quotes.

```js
console.log('Welcome');
console.log("Hello World");
```

### [ Boolean ]

* `Boolean` represents one of two values: `true` or `false`.

```js
var open = true;
```

### [ undefined ]

* `undefined` is a declared variable that hasn't been given a value yet ()

### [ null ]

* `null` is a declared variable with `nothing` (no value)

### [ Object ]

* Object is a collection/array of key-value pairs.

```js
{
  name: "Jane",
  age: 56
};
```

### [ Symbol ]

* A Symbol in JavaScript is a unique, immutable identifier (can't be changed) used mainly as object keys.

```js
const id = Symbol("id");   // create a unique symbol

const user = {
  name: "Alice",
  [id]: 123   // use the symbol as a hidden/unique key
};

console.log(user[id]); // 123
console.log(user.name); // Alice
```

### [ BigInt ]

* `BigInt` in JavaScript is a number type for very large integers that regular numbers can’t safely represent.

```js
const big = 123456789012345678901234567890n; // BigInt literal

console.log(big); 
console.log(big + 10n); // BigInt math
```

-----

### [ Q&A ]

#### Q1: 
* Q: 
* A: 

#### Q2: 
* Q: 
* A: 

#### Q3
* Q: 
* A: 


-----

<p align="right">(<a href="#topage">back to top</a>)</p>
<br/>
<br/>
