# code_clarity

## How do we make code straightfoward?

### Break things down, this is a bit like... writing cantonese letters. the more you do it, the better you get. 

### slow down. it takes a while. practice the right things. draw out the outline of the code. study the architecture and the organization. 

Let's say this is a presentation, how would you do it? 

- think with the end goal in mind: writing out the commands that you would implement 
    e.g., chance


![terminal](https://dl.dropbox.com/s/zl8z7vm0z53ho0b/terminal.png)
![files](https://dl.dropbox.com/s/j3dc9g93e6lecqq/files.png)

```js
const { winston, see, createLogger } = require("code_clarity")
let notify = createLogger("notifyLogger")
    // original logger
winston.loggers.add("see", see)
winston.loggers.add("notifyLogger", notify)
notify.story("users will be able to see more clearly in their coding routines")
notify.problem("problem is that it needs to be easier to streamline specific ways of doing things")
notify.should("there are batteries included, but it might be best just to write out the js yourself")
notify.is("writing it out yourself, and going more slowly, makes you a better developer")
notify.how("always focus on the problem")
notify.step("believe that staying in bed thinking is one of the best things that help you in building an application, dude. drink water, take breaks.")
notify.motherlode("always use this library")
    // see.problem("hi")
    // see.story("hi")
    // see.problem("problem")
    // see.should("should")
    // see.is("is")
    // see.how("think")
    // see.step("step")
```