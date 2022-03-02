const winston = require("winston")
    //
    // Logging levels
    //
const config = {
    levels: {
        story: 0,
        problem: 1,
        should: 2,
        is: 3,
        think: 4,
        step: 6,
        motherlode: 7
    },
    colors: {
        story: 'bold gray whiteBG',
        problem: 'bold red',
        should: 'bold magenta',
        is: 'bold yellow',
        think: 'bold white',
        step: 'bold cyan',
        motherlode: 'bold green'
    }
};

winston.addColors(config.colors);

const see = module.exports = winston.createLogger({
    levels: config.levels,
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
    ),
    transports: [
        new winston.transports.Console(), new winston.transports.File({
            level: "problem",
            filename: "logs/6_motherlode.log"

        }), new winston.transports.File({ level: "should", filename: "logs/0_story.log" }),
        new winston.transports.File({ level: "is", filename: "logs/1_problem.log" }),
        new winston.transports.File({ level: "think", filename: "logs/2_whatshouldbe.log" }),
        new winston.transports.File({ level: "step", filename: "logs/3_whatactuallyis.log" }),
        new winston.transports.File({ level: "motherload", filename: "logs/cheat.log" }),
    ],
    level: 'motherlode'
});

module.exports = { see }