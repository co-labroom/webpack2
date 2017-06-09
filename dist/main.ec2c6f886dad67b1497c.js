webpackJsonp([1],{

/***/ "./index.js":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Created by common on 2017/6/1.
 */
// import './bootstrap.css';
var moment = __webpack_require__("./node_modules/moment/moment.js");
console.log(moment().format('LL'));

console.log(__webpack_require__("./test \\.test\\.js"));

/***/ }),

/***/ "./test \\.test\\.js":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./a.test.js": "./test/a.test.js",
	"./b.test.js": "./test/b.test.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./test \\.test\\.js";

/***/ }),

/***/ "./test/a.test.js":
/***/ (function(module, exports) {

/**
 * Created by common on 2017/6/9.
 */
console.log('a.test');

/***/ }),

/***/ "./test/b.test.js":
/***/ (function(module, exports) {

/**
 * Created by common on 2017/6/9.
 */
console.log('b.test');

/***/ })

},["./index.js"]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi90ZXN0IG5vbnJlY3Vyc2l2ZSBcXC50ZXN0XFwuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9hLnRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vdGVzdC9iLnRlc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0Q7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQzs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBLHNCIiwiZmlsZSI6Im1haW4uZWMyYzZmODg2ZGFkNjdiMTQ5N2MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBjb21tb24gb24gMjAxNy82LzEuXHJcbiAqL1xyXG4vLyBpbXBvcnQgJy4vYm9vdHN0cmFwLmNzcyc7XHJcbnZhciBtb21lbnQgPSByZXF1aXJlKCdtb21lbnQnKTtcclxuY29uc29sZS5sb2cobW9tZW50KCkuZm9ybWF0KCdMTCcpKTtcclxuXHJcbmNvbnNvbGUubG9nKHJlcXVpcmUuY29udGV4dChcIi4vdGVzdFwiLCBmYWxzZSwgL1xcLnRlc3RcXC5qcy8pKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAuL2luZGV4LmpzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBtYXAgPSB7XG5cdFwiLi9hLnRlc3QuanNcIjogXCIuL3Rlc3QvYS50ZXN0LmpzXCIsXG5cdFwiLi9iLnRlc3QuanNcIjogXCIuL3Rlc3QvYi50ZXN0LmpzXCJcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgLy8gY2hlY2sgZm9yIG51bWJlciBvciBzdHJpbmdcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKTtcblx0cmV0dXJuIGlkO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vdGVzdCBcXFxcLnRlc3RcXFxcLmpzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi90ZXN0IG5vbnJlY3Vyc2l2ZSBcXC50ZXN0XFwuanNcbi8vIG1vZHVsZSBpZCA9IC4vdGVzdCBcXC50ZXN0XFwuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgY29tbW9uIG9uIDIwMTcvNi85LlxyXG4gKi9cclxuY29uc29sZS5sb2coJ2EudGVzdCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdGVzdC9hLnRlc3QuanNcbi8vIG1vZHVsZSBpZCA9IC4vdGVzdC9hLnRlc3QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgY29tbW9uIG9uIDIwMTcvNi85LlxyXG4gKi9cclxuY29uc29sZS5sb2coJ2IudGVzdCcpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vdGVzdC9iLnRlc3QuanNcbi8vIG1vZHVsZSBpZCA9IC4vdGVzdC9iLnRlc3QuanNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==