const diff_paths = require("different_paths")

diff_paths.getLocation("modules")
    // returns 

diff_paths.copy({ folder: "modules", ext: ".js" }, { folder: "knex_database", })

diff_paths.clean({ file: "./", })
diff_paths.write({ file: "./" })

diff_paths.read({ file: "" })