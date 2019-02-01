var orm = require("../config/orm.js");

var rev = {
    all: function(cb) {
        orm.all("projects", function(res) {
          cb(res);
        });
    },
    single: function(id, cb) {
        orm.singleProj("proj_tasks", id, function(res) {
            cb(res);
        });
    }
    

}

module.exports = rev;