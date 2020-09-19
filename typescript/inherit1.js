var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var User = (function () {
    function User(name) {
        this.name = name;
        this._name = name;
    }
    User.prototype.print = function (name) {
        console.log(name);
        var user = new User('Ram');
        user.print('ji');
    };
    return User;
}());
var WebUser = (function (_super) {
    __extends(WebUser, _super);
    function WebUser(name) {
        _super.call(this, name);
        this.name = name;
    }
    return WebUser;
}(User));
var user = new WebUser('Ram');
var user1 = new User('Rama');
user.print('hi');
