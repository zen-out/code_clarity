const { dirname } = require("path")

const t = require("node_basetest")

let ends = t.ENDSWITHHELPER("hellllo", "o")
console.log("🚀 ~ file: getPath.js ~ line 5 ~ ends", ends)
    // 
function parent(path) {
    const parentPath = dirname(path);
    return parentPath === path ? null : parentPath;
}

function pathEndsWith(filename) {
    // get path 
    let path = process.cwd();
    let arr = []
    let getParent = parent(path)
    do {
        console.log("current path", path)
        arr.push(path)
    } while (
        path = parent(path)
    )
    return arr[arr.length - 1]
}

// let path = process.cwd();

// let getParent = parent(path)
// console.log(getParent)
// do {
//     console.log(path);
// } while (path = parent(path))

class TestOne {
    constructor() {

    }
    one() {
        let input = "modules"
        let getPath = pathEndsWith(input)
        console.log("🚀 ~ file: getPath.js ~ line 24 ~ TestOne ~ one ~ getPath", getPath)
    }
    two() {

    }
    all() {
        this.one()
    }
}
let test = new TestOne()
test.all()