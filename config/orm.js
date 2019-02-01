var connection = require("../config/connection.js");

var orm = {
    all: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
    },
    singleProj: function(tableInput, projID, cb){
        console.log(projID);
        // var queryString = "SELECT * FROM " + tableInput + " WHERE item_id = " + projID + ";";
        var queryString = "SELECT projects.proj_num, projects.proj_name, rev_two.proj_id, ";
        queryString += "rev_two.task_ID, rev_two.unit_period, rev_two.unit_value, "; 
        queryString += "proj_tasks.task_number, proj_tasks.task_name, proj_tasks.task_region, ";
        queryString += "proj_tasks.budget_units, proj_tasks.charge_per_unit FROM " + tableInput;
        queryString += " INNER JOIN rev_two ON proj_tasks.task_ID = rev_two.task_id";
        queryString += " INNER JOIN projects ON rev_two.proj_id = projects.item_id";
        queryString += " WHERE projects.item_id = " + projID + ";"
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })

    }

};

module.exports = orm;