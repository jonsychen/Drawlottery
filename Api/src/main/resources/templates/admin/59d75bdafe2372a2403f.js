webpackJsonp([2],{475:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return{type:l,payload:e}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments[1],n=h[t.type];return n?n(e,t):e}Object.defineProperty(t,"__esModule",{value:!0}),t.actions=t.doubleAsync=t.COUNTER_DOUBLE_ASYNC=t.COUNTER_INCREMENT=void 0;var c,u=n(8),s=r(u),f=n(1085),a=r(f);t.increment=o,t.default=i;var l=t.COUNTER_INCREMENT="COUNTER_INCREMENT",v=t.COUNTER_DOUBLE_ASYNC="COUNTER_DOUBLE_ASYNC",d=t.doubleAsync=function(){return function(e,t){return new a.default(function(n){setTimeout(function(){e({type:v,payload:t().counter}),n()},200)})}},h=(t.actions={increment:o,doubleAsync:d},c={},(0,s.default)(c,l,function(e,t){return e+t.payload}),(0,s.default)(c,v,function(e,t){return 2*e}),c),_=0},819:function(e,t,n){n(419),n(99),n(121),n(855),e.exports=n(21).Promise},824:function(e,t){e.exports=function(e,t,n,r){if(!(e instanceof t)||void 0!==r&&r in e)throw TypeError(n+": incorrect invocation!");return e}},828:function(e,t,n){var r=n(78),o=n(411),i=n(410),c=n(49),u=n(184),s=n(188),f={},a={},t=e.exports=function(e,t,n,l,v){var d,h,_,p,y=v?function(){return e}:s(e),m=r(n,l,t?2:1),E=0;if("function"!=typeof y)throw TypeError(e+" is not iterable!");if(i(y)){for(d=u(e.length);d>E;E++)if(p=t?m(c(h=e[E])[0],h[1]):m(e[E]),p===f||p===a)return p}else for(_=y.call(e);!(h=_.next()).done;)if(p=o(_,m,h.value,t),p===f||p===a)return p};t.BREAK=f,t.RETURN=a},835:function(e,t,n){var r=n(34),o=n(182).set,i=r.MutationObserver||r.WebKitMutationObserver,c=r.process,u=r.Promise,s="process"==n(96)(c);e.exports=function(){var e,t,n,f=function(){var r,o;for(s&&(r=c.domain)&&r.exit();e;){o=e.fn,e=e.next;try{o()}catch(r){throw e?n():t=void 0,r}}t=void 0,r&&r.enter()};if(s)n=function(){c.nextTick(f)};else if(i){var a=!0,l=document.createTextNode("");new i(f).observe(l,{characterData:!0}),n=function(){l.data=a=!a}}else if(u&&u.resolve){var v=u.resolve();n=function(){v.then(f)}}else n=function(){o.call(r,f)};return function(r){var o={fn:r,next:void 0};t&&(t.next=o),e||(e=o,n()),t=o}}},840:function(e,t,n){var r=n(64);e.exports=function(e,t,n){for(var o in t)n&&e[o]?e[o]=t[o]:r(e,o,t[o]);return e}},842:function(e,t,n){"use strict";var r=n(34),o=n(21),i=n(50),c=n(55),u=n(29)("species");e.exports=function(e){var t="function"==typeof o[e]?o[e]:r[e];c&&t&&!t[u]&&i.f(t,u,{configurable:!0,get:function(){return this}})}},843:function(e,t,n){var r=n(49),o=n(173),i=n(29)("species");e.exports=function(e,t){var n,c=r(e).constructor;return void 0===c||void 0==(n=r(c)[i])?t:o(n)}},855:function(e,t,n){"use strict";var r,o,i,c=n(116),u=n(34),s=n(78),f=n(174),a=n(43),l=n(80),v=n(173),d=n(824),h=n(828),_=n(843),p=n(182).set,y=n(835)(),m="Promise",E=u.TypeError,b=u.process,T=u[m],b=u.process,w="process"==f(b),C=function(){},N=!!function(){try{var e=T.resolve(1),t=(e.constructor={})[n(29)("species")]=function(e){e(C,C)};return(w||"function"==typeof PromiseRejectionEvent)&&e.then(C)instanceof t}catch(e){}}(),R=function(e,t){return e===t||e===T&&t===i},j=function(e){var t;return!(!l(e)||"function"!=typeof(t=e.then))&&t},x=function(e){return R(T,e)?new O(e):new o(e)},O=o=function(e){var t,n;this.promise=new e(function(e,r){if(void 0!==t||void 0!==n)throw E("Bad Promise constructor");t=e,n=r}),this.resolve=v(t),this.reject=v(n)},P=function(e){try{e()}catch(e){return{error:e}}},A=function(e,t){if(!e._n){e._n=!0;var n=e._c;y(function(){for(var r=e._v,o=1==e._s,i=0,c=function(t){var n,i,c=o?t.ok:t.fail,u=t.resolve,s=t.reject,f=t.domain;try{c?(o||(2==e._h&&g(e),e._h=1),c===!0?n=r:(f&&f.enter(),n=c(r),f&&f.exit()),n===t.promise?s(E("Promise-chain cycle")):(i=j(n))?i.call(n,u,s):u(n)):s(r)}catch(e){s(e)}};n.length>i;)c(n[i++]);e._c=[],e._n=!1,t&&!e._h&&M(e)})}},M=function(e){p.call(u,function(){var t,n,r,o=e._v;if(U(e)&&(t=P(function(){w?b.emit("unhandledRejection",o,e):(n=u.onunhandledrejection)?n({promise:e,reason:o}):(r=u.console)&&r.error&&r.error("Unhandled promise rejection",o)}),e._h=w||U(e)?2:1),e._a=void 0,t)throw t.error})},U=function(e){if(1==e._h)return!1;for(var t,n=e._a||e._c,r=0;n.length>r;)if(t=n[r++],t.fail||!U(t.promise))return!1;return!0},g=function(e){p.call(u,function(){var t;w?b.emit("rejectionHandled",e):(t=u.onrejectionhandled)&&t({promise:e,reason:e._v})})},B=function(e){var t=this;t._d||(t._d=!0,t=t._w||t,t._v=e,t._s=2,t._a||(t._a=t._c.slice()),A(t,!0))},k=function(e){var t,n=this;if(!n._d){n._d=!0,n=n._w||n;try{if(n===e)throw E("Promise can't be resolved itself");(t=j(e))?y(function(){var r={_w:n,_d:!1};try{t.call(e,s(k,r,1),s(B,r,1))}catch(e){B.call(r,e)}}):(n._v=e,n._s=1,A(n,!1))}catch(e){B.call({_w:n,_d:!1},e)}}};N||(T=function(e){d(this,T,m,"_h"),v(e),r.call(this);try{e(s(k,this,1),s(B,this,1))}catch(e){B.call(this,e)}},r=function(e){this._c=[],this._a=void 0,this._s=0,this._d=!1,this._v=void 0,this._h=0,this._n=!1},r.prototype=n(840)(T.prototype,{then:function(e,t){var n=x(_(this,T));return n.ok="function"!=typeof e||e,n.fail="function"==typeof t&&t,n.domain=w?b.domain:void 0,this._c.push(n),this._a&&this._a.push(n),this._s&&A(this,!1),n.promise},catch:function(e){return this.then(void 0,e)}}),O=function(){var e=new r;this.promise=e,this.resolve=s(k,e,1),this.reject=s(B,e,1)}),a(a.G+a.W+a.F*!N,{Promise:T}),n(118)(T,m),n(842)(m),i=n(21)[m],a(a.S+a.F*!N,m,{reject:function(e){var t=x(this),n=t.reject;return n(e),t.promise}}),a(a.S+a.F*(c||!N),m,{resolve:function(e){if(e instanceof T&&R(e.constructor,this))return e;var t=x(this),n=t.resolve;return n(e),t.promise}}),a(a.S+a.F*!(N&&n(413)(function(e){T.all(e).catch(C)})),m,{all:function(e){var t=this,n=x(t),r=n.resolve,o=n.reject,i=P(function(){var n=[],i=0,c=1;h(e,!1,function(e){var u=i++,s=!1;n.push(void 0),c++,t.resolve(e).then(function(e){s||(s=!0,n[u]=e,--c||r(n))},o)}),--c||r(n)});return i&&o(i.error),n.promise},race:function(e){var t=this,n=x(t),r=n.reject,o=P(function(){h(e,!1,function(e){t.resolve(e).then(n.resolve,r)})});return o&&r(o.error),n.promise}})},1053:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Counter=void 0;var o=n(1),i=r(o),c=n(30),u=t.Counter=function(e){return i.default.createElement("div",{style:{margin:"0 auto"}},i.default.createElement("h2",null,"Counter: ",e.counter),i.default.createElement(c.Button,{type:"primary",onClick:e.increment},"Increment")," ",i.default.createElement(c.Button,{type:"primary",onClick:e.doubleAsync},"Double (Async)"))};u.propTypes={counter:i.default.PropTypes.number.isRequired,doubleAsync:i.default.PropTypes.func.isRequired,increment:i.default.PropTypes.func.isRequired},t.default=u},1054:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(31),i=n(475),c=n(1053),u=r(c),s={increment:function(){return(0,i.increment)(1)},doubleAsync:i.doubleAsync},f=function(e){return{counter:e.counter}};t.default=(0,o.connect)(f,s)(u.default)},1085:function(e,t,n){e.exports={default:n(819),__esModule:!0}}});