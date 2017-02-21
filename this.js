/**
 * Created by toonew on 2017/2/22.
 */
var hero = {
  _name: 'John Doe',
  getSecretIdentity: function () {
    return this._name;
  },
  getSecretIdentity2: function () {
    var that = this;
    return that._name;
  }
};

var stoleSecretIdentity = hero.getSecretIdentity;
var stoleSecretIdentity2 = hero.getSecretIdentity2;

console.log(stoleSecretIdentity());
console.log(stoleSecretIdentity2());
console.log(hero.getSecretIdentity());