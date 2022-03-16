# code_clarity
[code_clarity - start here](https://zen-out.github.io/packages/code_clarity)
[![here](https://github.com/zen-out/zen-out.github.io/blob/master/assets/images/code_clarity.png)](https://github.com/zen-out/zen-out.github.io/blob/master/assets/images/code_clarity.png)# code_clarity

[![here](https://github.com/zen-out/zen-out.github.io/blob/master/assets/images/code_clarity.png)](https://github.com/zen-out/zen-out.github.io/blob/master/assets/images/code_clarity.png)
## How do we make code straightfoward?

### Break things down, this is a bit like... writing. the more you do it, the better you get. 

### slow down. it takes a while. practice the right things. draw out the outline of the code. study the architecture and the organization. 

Let's say this is a presentation, how would you do it? 

- think with the end goal in mind: writing out the commands that you would implement 
    e.g., chance


![terminal](https://dl.dropbox.com/s/zl8z7vm0z53ho0b/terminal.png)
![files](https://dl.dropbox.com/s/j3dc9g93e6lecqq/files.png)

```js
const {  see, hourglass } = require("code_clarity")
    // hourglass.start("starting module")
    // hourglass.end("ending module")
    // see.problem("hi")
    // see.problem("not being able to print out log messages in root folder")
    // see.should("should be able to specify a root directory")
    // see.story("hi")
    // see.should("hi")
    // see.is("hi")
    // see.how("how")
    // see.step("step")
    // see.motherlode("motherlode")
```

In frontend... 
 <script src="./node_modules/code_clarity/frontend/index.js"></script>
    <script>
        $(() => {
            see.problem("it should do this", "location", "data")
            see.is("data currently is", "location", "data")
        })
    </script>
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![NPM Downloads](https://img.shields.io/npm/dw/code_clarity)
## Instructions: 
```npm install code_clarity ``` 
 ``` const code_clarity =  require('code_clarity')```

## If utilizing in html...: 
```<script src="./node_modules/code_clarity/index.js"></script> ``` 
 ``` const output =  code_clarity.method(parameter)```

## Classes

<dl>
<dt><a href="#Logger">Logger</a> : <code><a href="#Logger">Logger</a></code></dt>
<dd><p>Define the <code>Logger</code> class.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#LOG_LEVEL">LOG_LEVEL</a> : <code>String</code></dt>
<dd><p>Environment variables.</p>
</dd>
<dt><a href="#LEVELS">LEVELS</a> : <code>Object</code></dt>
<dd><p>Log levels.</p>
</dd>
<dt><a href="#STYLES">STYLES</a> : <code>Object</code></dt>
<dd><p>Log level styles.</p>
</dd>
<dt><a href="#METHODS">METHODS</a> : <code>Object</code></dt>
<dd><p>Log level methods.</p>
</dd>
</dl>

<a name="Logger"></a>

## Logger : [<code>Logger</code>](#Logger)
Define the `Logger` class.

**Kind**: global class  

* [Logger](#Logger) : [<code>Logger</code>](#Logger)
    * [new Logger(options)](#new_Logger_new)
    * [.log](#Logger+log)
    * [.clone](#Logger+clone) ⇒ [<code>Logger</code>](#Logger)

<a name="new_Logger_new"></a>

### new Logger(options)
Constructor.


| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="Logger+log"></a>

### logger.log
Log to the console with `level`, `message` and `data`.

**Kind**: instance property of [<code>Logger</code>](#Logger)  

| Param | Type |
| --- | --- |
| level | <code>String</code> | 
| message | <code>String</code> | 
| data | <code>Object</code> | 

<a name="Logger+clone"></a>

### logger.clone ⇒ [<code>Logger</code>](#Logger)
Create a new logger, extending the current logger's config.

**Kind**: instance property of [<code>Logger</code>](#Logger)  

| Param | Type |
| --- | --- |
| options | <code>Object</code> | 

<a name="LOG_LEVEL"></a>

## LOG\_LEVEL : <code>String</code>
Environment variables.

**Kind**: global constant  
<a name="LEVELS"></a>

## LEVELS : <code>Object</code>
Log levels.

**Kind**: global constant  
<a name="STYLES"></a>

## STYLES : <code>Object</code>
Log level styles.

**Kind**: global constant  
<a name="METHODS"></a>

## METHODS : <code>Object</code>
Log level methods.

**Kind**: global constant  
