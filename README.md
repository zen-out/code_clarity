# code_clarity

## How do we make code straightfoward? I think a person who did this really well was the guy who developed total.js, let's check that out. 

![terminal](https://dl.dropbox.com/s/qp98hxolw6hsj45/terminal.png)
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