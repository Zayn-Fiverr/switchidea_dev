var _typeof="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(function(e,t,i,n){"use strict";var s="ellipsis",o={type:"lines",count:3},r={namespace:"ellispsis",initialize:"initialize.ellipsis",initialized:"initialized.ellipsis",update:"update.ellipsis",updated:"updated.ellipsis",excerpt:"excerpt.ellipsis",excerpted:"excerpted.ellipsis"},l=function(){function i(t){var s=arguments.length>1&&arguments[1]!==n?arguments[1]:{};_classCallCheck(this,i),this.element=e(t),this.options=Object.assign({},i.DEFAULTS,s),this.text=this.element.text(),this._resizeTimeout=null,this._resizeHandler=this._updateOnResize.bind(this),this.init()}return _createClass(i,[{key:"init",value:function(){this.element.trigger(r.initialize),this.element.trigger(r.excerpt),"lines"===this.options.type?this._excerptLines(this.options.count):this._excerptChars(this.options.count),"lines"===this.options.type&&e(t).on("resize",this.element.selector,this._resizeHandler),this.element.trigger(r.initialized)}},{key:"update",value:function(){return this.element.trigger(r.update),"lines"===this.options.type?this._excerptLines(this.options.count):this._excerptChars(this.options.count),this.element.trigger(r.updated),!0}},{key:"reset",value:function(e){e.text&&(this.text=e.text),e.type&&(this.options.type=e.type),e.count&&(this.options.count=e.count),Object.keys(e).length>0&&(this.element.text(this.text),this.update())}},{key:"destroy",value:function(){e(t).off("resize",this._resizeHandler),this.element.text(this.text),this.element.off(r.namespace)}},{key:"_excerptChars",value:function(e){return e<=0?new Error("Number of chars to be shown is equal to or less than zero !!"):e>=this.text.length?null:(this.element.html(this.text.slice(0,e)+"..."),this.element.trigger(r.excerpted),!0)}},{key:"_excerptLines",value:function(e){var t=void 0,i=this.element.text(this.text).height(),n=void 0,s=0,o=this.text.length-1,l=void 0;if(t=this.element.text("w").height(),n=t*e,i<=n)return this.element.text(this.text),!1;while(s<=o)l=Math.floor((s+o)/2),this.element.text(this.text.slice(0,l)),this.element.height()<=n?s=l+1:o=l-1;return this.element.text(this.text.slice(0,l-3)+"..."),this.element.trigger(r.excerpted),!0}},{key:"_updateOnResize",value:function(){var e=this;clearTimeout(this._resizeTimeout),this._resizeTimeout=setTimeout((function(){e.update()}),300)}}],[{key:"DEFAULTS",get:function(){return Object.freeze(o)}}]),i}();e.fn[s]=function(t){var i,o=arguments;return t===n||"object"===("undefined"===typeof t?"undefined":_typeof(t))?this.each((function(){e.data(this,"plugin_"+s)||e.data(this,"plugin_"+s,new l(this,t))})):"string"===typeof t&&"_"!==t[0]&&"init"!==t?(this.each((function(){var n=e.data(this,"plugin_"+s);n instanceof l&&"function"===typeof n[t]&&(i=n[t].apply(n,Array.prototype.slice.call(o,1))),"destroy"===t&&e.data(this,"plugin_"+s,null)})),i!==n?i:this):void 0},e(i).ready((function(){var t=e('[data-toggle="ellipsis"]');t.each((function(t,i){var s=e(i),o={};s.data("type")!==n&&(o.type=s.data("type")),s.data("count")!==n&&(o.count=s.data("count")),s.ellipsis(o)}))}))})(jQuery,window,document);