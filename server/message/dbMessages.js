"use strict";
var dbDriver_1 = require("../db/dbDriver");
var DBMessages = (function () {
    function DBMessages() {
        this.db = new dbDriver_1.DBDriver();
    }
    DBMessages.prototype.deleteTable = function () {
        var sql = "DROP TABLE messages";
        return this.db.deleteTable(sql);
    };
    DBMessages.prototype.createNewTable = function () {
        var sql1 = "DROP TABLE messages";
        var sql2 = "CREATE TABLE messages (id INTEGER PRIMARY KEY AUTOINCREMENT, activ BOOLEAN, message TEXT)";
        return this.db.createTable(sql1, sql2);
    };
    DBMessages.prototype.selectAllContent = function () {
        var sql = "SELECT * FROM messages";
        var data = [];
        return this.db.selectAll(sql, data);
    };
    DBMessages.prototype.selectContentById = function (id) {
        var sql = "SELECT * FROM messages WHERE id = ?";
        var data = [id];
        return this.db.selectOne(sql, data);
    };
    DBMessages.prototype.insertContent = function (message) {
        var sql = 'INSERT INTO messages (activ, message) VALUES (?, ?)';
        var data = [message.activ, message.message];
        return this.db.insertOne(sql, data);
    };
    DBMessages.prototype.updateContent = function (message) {
        var sql = 'UPDATE messages SET activ = ?, message = ?';
        var data = [message.activ, message.message];
        return this.db.updateOne(sql, data);
    };
    DBMessages.prototype.deleteContent = function (message) {
        var sql = "DELETE FROM messages WHERE id = ?";
        var data = [message.id];
        return this.db.deleteOne(sql, data);
    };
    return DBMessages;
}());
exports.DBMessages = DBMessages;
var Message = (function () {
    function Message(activ, message, id) {
        this.activ = activ;
        this.message = message;
        this.id = id;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=dbMessages.js.map