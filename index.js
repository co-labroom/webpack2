/**
 * Created by common on 2017/6/1.
 */
// import './bootstrap.css';
var moment = require('moment');
console.log(moment().format('LL'));

var cc = require.context("./test", false, /\.test\.js/);
console.log(cc);
console.log(cc('./a.test.js').a);

var c = require('./test/a.test.js');
console.log(c.a);