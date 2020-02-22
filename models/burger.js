const orm = require("../config/orm");

var burger = {
    selectAll : function(cb){
        orm.all("burgers", function(res){
            cb(res)
        })
    },

    insertOne : function(cols, vals, cb){
        orm.create("burgers", cols, vals, function(res){
            cb(res)
        })
    },

    updateOne : function(objColVals, condition, cb){
        orm.update("burgers", objColVals, condition, function(res){
            cb(res)
        })
    },

    deleteOne : function(condition, cb){
        orm.delete("burgers", condition, function(res){
            cb(res)
        })
    }
};

module.exports = burger 