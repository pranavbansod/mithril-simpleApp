var m = require("mithril");

var UserList = require("./views/UserList");

m.route(document.body, "/list", {
    "/list": UserList
});