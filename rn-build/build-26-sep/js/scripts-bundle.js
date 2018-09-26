/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){var i={},r={},o=[],a=window.Webflow||[],s=window.jQuery,u=s(window),c=s(document),l=s.isFunction,f=i._=n(4),h=n(1)&&s.tram,d=!1,p=!1;function v(t){i.env()&&(l(t.design)&&u.on("__wf_design",t.design),l(t.preview)&&u.on("__wf_preview",t.preview)),l(t.destroy)&&u.on("__wf_destroy",t.destroy),t.ready&&l(t.ready)&&function(t){if(d)return void t.ready();if(f.contains(o,t.ready))return;o.push(t.ready)}(t)}function m(t){l(t.design)&&u.off("__wf_design",t.design),l(t.preview)&&u.off("__wf_preview",t.preview),l(t.destroy)&&u.off("__wf_destroy",t.destroy),t.ready&&l(t.ready)&&function(t){o=f.filter(o,function(e){return e!==t.ready})}(t)}h.config.hideBackface=!1,h.config.keepInherited=!0,i.define=function(t,e,n){r[t]&&m(r[t]);var i=r[t]=e(s,f,n)||{};return v(i),i},i.require=function(t){return r[t]},i.push=function(t){d?l(t)&&t():a.push(t)},i.env=function(t){var e=window.__wf_design,n=void 0!==e;return t?"design"===t?n&&e:"preview"===t?n&&!e:"slug"===t?n&&window.__wf_slug:"editor"===t?window.WebflowEditor:"test"===t?window.__wf_test:"frame"===t?window!==window.top:void 0:n};var g,w=navigator.userAgent.toLowerCase(),b=i.env.touch="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,y=i.env.chrome=/chrome/.test(w)&&/Google/.test(navigator.vendor)&&parseInt(w.match(/chrome\/(\d+)\./)[1],10),x=i.env.ios=/(ipod|iphone|ipad)/.test(w);i.env.safari=/safari/.test(w)&&!y&&!x,b&&c.on("touchstart mousedown",function(t){g=t.target}),i.validClick=b?function(t){return t===g||s.contains(t,g)}:function(){return!0};var _,k="resize.webflow orientationchange.webflow load.webflow";function T(t,e){var n=[],i={};return i.up=f.throttle(function(t){f.each(n,function(e){e(t)})}),t&&e&&t.on(e,i.up),i.on=function(t){"function"==typeof t&&(f.contains(n,t)||n.push(t))},i.off=function(t){n=arguments.length?f.filter(n,function(e){return e!==t}):[]},i}function E(t){l(t)&&t()}function O(){_&&(_.reject(),u.off("load",_.resolve)),_=new s.Deferred,u.on("load",_.resolve)}i.resize=T(u,k),i.scroll=T(u,"scroll.webflow resize.webflow orientationchange.webflow load.webflow"),i.redraw=T(),i.location=function(t){window.location=t},i.env()&&(i.location=function(){}),i.ready=function(){d=!0,p?(p=!1,f.each(r,v)):f.each(o,E),f.each(a,E),i.resize.up()},i.load=function(t){_.then(t)},i.destroy=function(t){t=t||{},p=!0,u.triggerHandler("__wf_destroy"),null!=t.domready&&(d=t.domready),f.each(r,m),i.resize.off(),i.scroll.off(),i.redraw.off(),o=[],a=[],"pending"===_.state()&&O()},s(i.ready),O(),t.exports=window.Webflow=i},function(t,e){var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};window.tram=function(t){function e(t,e){return(new N.Bare).init(t,e)}function i(t){return t.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()})}function r(t){var e=parseInt(t.slice(1),16);return[e>>16&255,e>>8&255,255&e]}function o(t,e,n){return"#"+(1<<24|t<<16|e<<8|n).toString(16).slice(1)}function a(){}function s(t,e,n){c("Units do not match ["+t+"]: "+e+", "+n)}function u(t,e,n){if(void 0!==e&&(n=e),void 0===t)return n;var i=n;return J.test(t)||!V.test(t)?i=parseInt(t,10):V.test(t)&&(i=1e3*parseFloat(t)),0>i&&(i=0),i==i?i:n}function c(t){X.debug&&window&&window.console.warn(t)}var l=function(t,e,i){function r(t){return"object"==(void 0===t?"undefined":n(t))}function o(t){return"function"==typeof t}function a(){}return function n(s,u){function c(){var t=new l;return o(t.init)&&t.init.apply(t,arguments),t}function l(){}u===i&&(u=s,s=Object),c.Bare=l;var f,h=a[t]=s[t],d=l[t]=c[t]=new a;return d.constructor=c,c.mixin=function(e){return l[t]=c[t]=n(c,e)[t],c},c.open=function(t){if(f={},o(t)?f=t.call(c,d,h,c,s):r(t)&&(f=t),r(f))for(var n in f)e.call(f,n)&&(d[n]=f[n]);return o(d.init)||(d.init=s),c},c.open(u)}}("prototype",{}.hasOwnProperty),f={ease:["ease",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(-2.75*o*r+11*r*r+-15.5*o+8*r+.25*t)}],"ease-in":["ease-in",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(-1*o*r+3*r*r+-3*o+2*r)}],"ease-out":["ease-out",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(.3*o*r+-1.6*r*r+2.2*o+-1.8*r+1.9*t)}],"ease-in-out":["ease-in-out",function(t,e,n,i){var r=(t/=i)*t,o=r*t;return e+n*(2*o*r+-5*r*r+2*o+2*r)}],linear:["linear",function(t,e,n,i){return n*t/i+e}],"ease-in-quad":["cubic-bezier(0.550, 0.085, 0.680, 0.530)",function(t,e,n,i){return n*(t/=i)*t+e}],"ease-out-quad":["cubic-bezier(0.250, 0.460, 0.450, 0.940)",function(t,e,n,i){return-n*(t/=i)*(t-2)+e}],"ease-in-out-quad":["cubic-bezier(0.455, 0.030, 0.515, 0.955)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e}],"ease-in-cubic":["cubic-bezier(0.550, 0.055, 0.675, 0.190)",function(t,e,n,i){return n*(t/=i)*t*t+e}],"ease-out-cubic":["cubic-bezier(0.215, 0.610, 0.355, 1)",function(t,e,n,i){return n*((t=t/i-1)*t*t+1)+e}],"ease-in-out-cubic":["cubic-bezier(0.645, 0.045, 0.355, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t+e:n/2*((t-=2)*t*t+2)+e}],"ease-in-quart":["cubic-bezier(0.895, 0.030, 0.685, 0.220)",function(t,e,n,i){return n*(t/=i)*t*t*t+e}],"ease-out-quart":["cubic-bezier(0.165, 0.840, 0.440, 1)",function(t,e,n,i){return-n*((t=t/i-1)*t*t*t-1)+e}],"ease-in-out-quart":["cubic-bezier(0.770, 0, 0.175, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t*t+e:-n/2*((t-=2)*t*t*t-2)+e}],"ease-in-quint":["cubic-bezier(0.755, 0.050, 0.855, 0.060)",function(t,e,n,i){return n*(t/=i)*t*t*t*t+e}],"ease-out-quint":["cubic-bezier(0.230, 1, 0.320, 1)",function(t,e,n,i){return n*((t=t/i-1)*t*t*t*t+1)+e}],"ease-in-out-quint":["cubic-bezier(0.860, 0, 0.070, 1)",function(t,e,n,i){return(t/=i/2)<1?n/2*t*t*t*t*t+e:n/2*((t-=2)*t*t*t*t+2)+e}],"ease-in-sine":["cubic-bezier(0.470, 0, 0.745, 0.715)",function(t,e,n,i){return-n*Math.cos(t/i*(Math.PI/2))+n+e}],"ease-out-sine":["cubic-bezier(0.390, 0.575, 0.565, 1)",function(t,e,n,i){return n*Math.sin(t/i*(Math.PI/2))+e}],"ease-in-out-sine":["cubic-bezier(0.445, 0.050, 0.550, 0.950)",function(t,e,n,i){return-n/2*(Math.cos(Math.PI*t/i)-1)+e}],"ease-in-expo":["cubic-bezier(0.950, 0.050, 0.795, 0.035)",function(t,e,n,i){return 0===t?e:n*Math.pow(2,10*(t/i-1))+e}],"ease-out-expo":["cubic-bezier(0.190, 1, 0.220, 1)",function(t,e,n,i){return t===i?e+n:n*(1-Math.pow(2,-10*t/i))+e}],"ease-in-out-expo":["cubic-bezier(1, 0, 0, 1)",function(t,e,n,i){return 0===t?e:t===i?e+n:(t/=i/2)<1?n/2*Math.pow(2,10*(t-1))+e:n/2*(2-Math.pow(2,-10*--t))+e}],"ease-in-circ":["cubic-bezier(0.600, 0.040, 0.980, 0.335)",function(t,e,n,i){return-n*(Math.sqrt(1-(t/=i)*t)-1)+e}],"ease-out-circ":["cubic-bezier(0.075, 0.820, 0.165, 1)",function(t,e,n,i){return n*Math.sqrt(1-(t=t/i-1)*t)+e}],"ease-in-out-circ":["cubic-bezier(0.785, 0.135, 0.150, 0.860)",function(t,e,n,i){return(t/=i/2)<1?-n/2*(Math.sqrt(1-t*t)-1)+e:n/2*(Math.sqrt(1-(t-=2)*t)+1)+e}],"ease-in-back":["cubic-bezier(0.600, -0.280, 0.735, 0.045)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),n*(t/=i)*t*((r+1)*t-r)+e}],"ease-out-back":["cubic-bezier(0.175, 0.885, 0.320, 1.275)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),n*((t=t/i-1)*t*((r+1)*t+r)+1)+e}],"ease-in-out-back":["cubic-bezier(0.680, -0.550, 0.265, 1.550)",function(t,e,n,i,r){return void 0===r&&(r=1.70158),(t/=i/2)<1?n/2*t*t*((1+(r*=1.525))*t-r)+e:n/2*((t-=2)*t*((1+(r*=1.525))*t+r)+2)+e}]},h={"ease-in-back":"cubic-bezier(0.600, 0, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.320, 1)","ease-in-out-back":"cubic-bezier(0.680, 0, 0.265, 1)"},d=document,p=window,v="bkwld-tram",m=/[\-\.0-9]/g,g=/[A-Z]/,w="number",b=/^(rgb|#)/,y=/(em|cm|mm|in|pt|pc|px)$/,x=/(em|cm|mm|in|pt|pc|px|%)$/,_=/(deg|rad|turn)$/,k="unitless",T=/(all|none) 0s ease 0s/,E=/^(width|height)$/,O=" ",z=d.createElement("a"),A=["Webkit","Moz","O","ms"],j=["-webkit-","-moz-","-o-","-ms-"],M=function(t){if(t in z.style)return{dom:t,css:t};var e,n,i="",r=t.split("-");for(e=0;e<r.length;e++)i+=r[e].charAt(0).toUpperCase()+r[e].slice(1);for(e=0;e<A.length;e++)if((n=A[e]+i)in z.style)return{dom:n,css:j[e]+t}},S=e.support={bind:Function.prototype.bind,transform:M("transform"),transition:M("transition"),backface:M("backface-visibility"),timing:M("transition-timing-function")};if(S.transition){var q=S.timing.dom;if(z.style[q]=f["ease-in-back"][0],!z.style[q])for(var $ in h)f[$][0]=h[$]}var D=e.frame=function(){var t=p.requestAnimationFrame||p.webkitRequestAnimationFrame||p.mozRequestAnimationFrame||p.oRequestAnimationFrame||p.msRequestAnimationFrame;return t&&S.bind?t.bind(p):function(t){p.setTimeout(t,16)}}(),L=e.now=function(){var t=p.performance,e=t&&(t.now||t.webkitNow||t.msNow||t.mozNow);return e&&S.bind?e.bind(t):Date.now||function(){return+new Date}}(),F=l(function(e){function r(t,e){var n=function(t){for(var e=-1,n=t?t.length:0,i=[];++e<n;){var r=t[e];r&&i.push(r)}return i}((""+t).split(O)),i=n[0];e=e||{};var r=G[i];if(!r)return c("Unsupported property: "+i);if(!e.weak||!this.props[i]){var o=r[0],a=this.props[i];return a||(a=this.props[i]=new o.Bare),a.init(this.$el,n,r,e),a}}function o(t,e,i){if(t){var o=void 0===t?"undefined":n(t);if(e||(this.timer&&this.timer.destroy(),this.queue=[],this.active=!1),"number"==o&&e)return this.timer=new B({duration:t,context:this,complete:a}),void(this.active=!0);if("string"==o&&e){switch(t){case"hide":l.call(this);break;case"stop":s.call(this);break;case"redraw":f.call(this);break;default:r.call(this,t,i&&i[1])}return a.call(this)}if("function"==o)return void t.call(this,this);if("object"==o){var c=0;d.call(this,t,function(t,e){t.span>c&&(c=t.span),t.stop(),t.animate(e)},function(t){"wait"in t&&(c=u(t.wait,0))}),h.call(this),c>0&&(this.timer=new B({duration:c,context:this}),this.active=!0,e&&(this.timer.complete=a));var p=this,v=!1,m={};D(function(){d.call(p,t,function(t){t.active&&(v=!0,m[t.name]=t.nextStyle)}),v&&p.$el.css(m)})}}}function a(){if(this.timer&&this.timer.destroy(),this.active=!1,this.queue.length){var t=this.queue.shift();o.call(this,t.options,!0,t.args)}}function s(t){var e;this.timer&&this.timer.destroy(),this.queue=[],this.active=!1,"string"==typeof t?(e={})[t]=1:e="object"==(void 0===t?"undefined":n(t))&&null!=t?t:this.props,d.call(this,e,p),h.call(this)}function l(){s.call(this),this.el.style.display="none"}function f(){this.el.offsetHeight}function h(){var t,e,n=[];for(t in this.upstream&&n.push(this.upstream),this.props)(e=this.props[t]).active&&n.push(e.string);n=n.join(","),this.style!==n&&(this.style=n,this.el.style[S.transition.dom]=n)}function d(t,e,n){var o,a,s,u,c=e!==p,l={};for(o in t)s=t[o],o in Q?(l.transform||(l.transform={}),l.transform[o]=s):(g.test(o)&&(o=i(o)),o in G?l[o]=s:(u||(u={}),u[o]=s));for(o in l){if(s=l[o],!(a=this.props[o])){if(!c)continue;a=r.call(this,o)}e.call(this,a,s)}n&&u&&n.call(this,u)}function p(t){t.stop()}function m(t,e){t.set(e)}function w(t){this.$el.css(t)}function b(t,n){e[t]=function(){return this.children?function(t,e){var n,i=this.children.length;for(n=0;i>n;n++)t.apply(this.children[n],e);return this}.call(this,n,arguments):(this.el&&n.apply(this,arguments),this)}}e.init=function(e){if(this.$el=t(e),this.el=this.$el[0],this.props={},this.queue=[],this.style="",this.active=!1,X.keepInherited&&!X.fallback){var n=W(this.el,"transition");n&&!T.test(n)&&(this.upstream=n)}S.backface&&X.hideBackface&&Z(this.el,S.backface.css,"hidden")},b("add",r),b("start",o),b("wait",function(t){t=u(t,0),this.active?this.queue.push({options:t}):(this.timer=new B({duration:t,context:this,complete:a}),this.active=!0)}),b("then",function(t){return this.active?(this.queue.push({options:t,args:arguments}),void(this.timer.complete=a)):c("No active transition timer. Use start() or wait() before then().")}),b("next",a),b("stop",s),b("set",function(t){s.call(this,t),d.call(this,t,m,w)}),b("show",function(t){"string"!=typeof t&&(t="block"),this.el.style.display=t}),b("hide",l),b("redraw",f),b("destroy",function(){s.call(this),t.removeData(this.el,v),this.$el=this.el=null})}),N=l(F,function(e){function n(e,n){var i=t.data(e,v)||t.data(e,v,new F.Bare);return i.el||i.init(e),n?i.start(n):i}e.init=function(e,i){var r=t(e);if(!r.length)return this;if(1===r.length)return n(r[0],i);var o=[];return r.each(function(t,e){o.push(n(e,i))}),this.children=o,this}}),R=l(function(t){function e(){var t=this.get();this.update("auto");var e=this.get();return this.update(t),e}function i(t){var e=/rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);return(e?o(e[1],e[2],e[3]):t).replace(/#(\w)(\w)(\w)$/,"#$1$1$2$2$3$3")}var r=500,a="ease",s=0;t.init=function(t,e,n,i){this.$el=t,this.el=t[0];var o=e[0];n[2]&&(o=n[2]),Y[o]&&(o=Y[o]),this.name=o,this.type=n[1],this.duration=u(e[1],this.duration,r),this.ease=function(t,e,n){return void 0!==e&&(n=e),t in f?t:n}(e[2],this.ease,a),this.delay=u(e[3],this.delay,s),this.span=this.duration+this.delay,this.active=!1,this.nextStyle=null,this.auto=E.test(this.name),this.unit=i.unit||this.unit||X.defaultUnit,this.angle=i.angle||this.angle||X.defaultAngle,X.fallback||i.fallback?this.animate=this.fallback:(this.animate=this.transition,this.string=this.name+O+this.duration+"ms"+("ease"!=this.ease?O+f[this.ease][0]:"")+(this.delay?O+this.delay+"ms":""))},t.set=function(t){t=this.convert(t,this.type),this.update(t),this.redraw()},t.transition=function(t){this.active=!0,t=this.convert(t,this.type),this.auto&&("auto"==this.el.style[this.name]&&(this.update(this.get()),this.redraw()),"auto"==t&&(t=e.call(this))),this.nextStyle=t},t.fallback=function(t){var n=this.el.style[this.name]||this.convert(this.get(),this.type);t=this.convert(t,this.type),this.auto&&("auto"==n&&(n=this.convert(this.get(),this.type)),"auto"==t&&(t=e.call(this))),this.tween=new U({from:n,to:t,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.get=function(){return W(this.el,this.name)},t.update=function(t){Z(this.el,this.name,t)},t.stop=function(){(this.active||this.nextStyle)&&(this.active=!1,this.nextStyle=null,Z(this.el,this.name,this.get()));var t=this.tween;t&&t.context&&t.destroy()},t.convert=function(t,e){if("auto"==t&&this.auto)return t;var r,o="number"==typeof t,a="string"==typeof t;switch(e){case w:if(o)return t;if(a&&""===t.replace(m,""))return+t;r="number(unitless)";break;case b:if(a){if(""===t&&this.original)return this.original;if(e.test(t))return"#"==t.charAt(0)&&7==t.length?t:i(t)}r="hex or rgb string";break;case y:if(o)return t+this.unit;if(a&&e.test(t))return t;r="number(px) or string(unit)";break;case x:if(o)return t+this.unit;if(a&&e.test(t))return t;r="number(px) or string(unit or %)";break;case _:if(o)return t+this.angle;if(a&&e.test(t))return t;r="number(deg) or string(angle)";break;case k:if(o)return t;if(a&&x.test(t))return t;r="number(unitless) or string(unit or %)"}return function(t,e){c("Type warning: Expected: ["+t+"] Got: ["+(void 0===e?"undefined":n(e))+"] "+e)}(r,t),t},t.redraw=function(){this.el.offsetHeight}}),I=l(R,function(t,e){t.init=function(){e.init.apply(this,arguments),this.original||(this.original=this.convert(this.get(),b))}}),C=l(R,function(t,e){t.init=function(){e.init.apply(this,arguments),this.animate=this.fallback},t.get=function(){return this.$el[this.name]()},t.update=function(t){this.$el[this.name](t)}}),P=l(R,function(t,e){function n(t,e){var n,i,r,o,a;for(n in t)r=(o=Q[n])[0],i=o[1]||n,a=this.convert(t[n],r),e.call(this,i,a,r)}t.init=function(){e.init.apply(this,arguments),this.current||(this.current={},Q.perspective&&X.perspective&&(this.current.perspective=X.perspective,Z(this.el,this.name,this.style(this.current)),this.redraw()))},t.set=function(t){n.call(this,t,function(t,e){this.current[t]=e}),Z(this.el,this.name,this.style(this.current)),this.redraw()},t.transition=function(t){var e=this.values(t);this.tween=new H({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease});var n,i={};for(n in this.current)i[n]=n in e?e[n]:this.current[n];this.active=!0,this.nextStyle=this.style(i)},t.fallback=function(t){var e=this.values(t);this.tween=new H({current:this.current,values:e,duration:this.duration,delay:this.delay,ease:this.ease,update:this.update,context:this})},t.update=function(){Z(this.el,this.name,this.style(this.current))},t.style=function(t){var e,n="";for(e in t)n+=e+"("+t[e]+") ";return n},t.values=function(t){var e,i={};return n.call(this,t,function(t,n,r){i[t]=n,void 0===this.current[t]&&(e=0,~t.indexOf("scale")&&(e=1),this.current[t]=this.convert(e,r))}),i}}),U=l(function(e){function n(){var t,e,i,r=u.length;if(r)for(D(n),e=L(),t=r;t--;)(i=u[t])&&i.render(e)}var i={ease:f.ease[1],from:0,to:1};e.init=function(t){this.duration=t.duration||0,this.delay=t.delay||0;var e=t.ease||i.ease;f[e]&&(e=f[e][1]),"function"!=typeof e&&(e=i.ease),this.ease=e,this.update=t.update||a,this.complete=t.complete||a,this.context=t.context||this,this.name=t.name;var n=t.from,r=t.to;void 0===n&&(n=i.from),void 0===r&&(r=i.to),this.unit=t.unit||"","number"==typeof n&&"number"==typeof r?(this.begin=n,this.change=r-n):this.format(r,n),this.value=this.begin+this.unit,this.start=L(),!1!==t.autoplay&&this.play()},e.play=function(){var t;this.active||(this.start||(this.start=L()),this.active=!0,t=this,1===u.push(t)&&D(n))},e.stop=function(){var e,n,i;this.active&&(this.active=!1,e=this,(i=t.inArray(e,u))>=0&&(n=u.slice(i+1),u.length=i,n.length&&(u=u.concat(n))))},e.render=function(t){var e,n=t-this.start;if(this.delay){if(n<=this.delay)return;n-=this.delay}if(n<this.duration){var i=this.ease(n,0,1,this.duration);return e=this.startRGB?function(t,e,n){return o(t[0]+n*(e[0]-t[0]),t[1]+n*(e[1]-t[1]),t[2]+n*(e[2]-t[2]))}(this.startRGB,this.endRGB,i):function(t){return Math.round(t*c)/c}(this.begin+i*this.change),this.value=e+this.unit,void this.update.call(this.context,this.value)}e=this.endHex||this.begin+this.change,this.value=e+this.unit,this.update.call(this.context,this.value),this.complete.call(this.context),this.destroy()},e.format=function(t,e){if(e+="","#"==(t+="").charAt(0))return this.startRGB=r(e),this.endRGB=r(t),this.endHex=t,this.begin=0,void(this.change=1);if(!this.unit){var n=e.replace(m,"");n!==t.replace(m,"")&&s("tween",e,t),this.unit=n}e=parseFloat(e),t=parseFloat(t),this.begin=this.value=e,this.change=t-e},e.destroy=function(){this.stop(),this.context=null,this.ease=this.update=this.complete=a};var u=[],c=1e3}),B=l(U,function(t){t.init=function(t){this.duration=t.duration||0,this.complete=t.complete||a,this.context=t.context,this.play()},t.render=function(t){t-this.start<this.duration||(this.complete.call(this.context),this.destroy())}}),H=l(U,function(t,e){t.init=function(t){var e,n;for(e in this.context=t.context,this.update=t.update,this.tweens=[],this.current=t.current,t.values)n=t.values[e],this.current[e]!==n&&this.tweens.push(new U({name:e,from:this.current[e],to:n,duration:t.duration,delay:t.delay,ease:t.ease,autoplay:!1}));this.play()},t.render=function(t){var e,n,i=!1;for(e=this.tweens.length;e--;)(n=this.tweens[e]).context&&(n.render(t),this.current[n.name]=n.value,i=!0);return i?void(this.update&&this.update.call(this.context)):this.destroy()},t.destroy=function(){if(e.destroy.call(this),this.tweens){var t;for(t=this.tweens.length;t--;)this.tweens[t].destroy();this.tweens=null,this.current=null}}}),X=e.config={debug:!1,defaultUnit:"px",defaultAngle:"deg",keepInherited:!1,hideBackface:!1,perspective:"",fallback:!S.transition,agentTests:[]};e.fallback=function(t){if(!S.transition)return X.fallback=!0;X.agentTests.push("("+t+")");var e=new RegExp(X.agentTests.join("|"),"i");X.fallback=e.test(navigator.userAgent)},e.fallback("6.0.[2-5] Safari"),e.tween=function(t){return new U(t)},e.delay=function(t,e,n){return new B({complete:e,duration:t,context:n})},t.fn.tram=function(t){return e.call(null,this,t)};var Z=t.style,W=t.css,Y={transform:S.transform&&S.transform.css},G={color:[I,b],background:[I,b,"background-color"],"outline-color":[I,b],"border-color":[I,b],"border-top-color":[I,b],"border-right-color":[I,b],"border-bottom-color":[I,b],"border-left-color":[I,b],"border-width":[R,y],"border-top-width":[R,y],"border-right-width":[R,y],"border-bottom-width":[R,y],"border-left-width":[R,y],"border-spacing":[R,y],"letter-spacing":[R,y],margin:[R,y],"margin-top":[R,y],"margin-right":[R,y],"margin-bottom":[R,y],"margin-left":[R,y],padding:[R,y],"padding-top":[R,y],"padding-right":[R,y],"padding-bottom":[R,y],"padding-left":[R,y],"outline-width":[R,y],opacity:[R,w],top:[R,x],right:[R,x],bottom:[R,x],left:[R,x],"font-size":[R,x],"text-indent":[R,x],"word-spacing":[R,x],width:[R,x],"min-width":[R,x],"max-width":[R,x],height:[R,x],"min-height":[R,x],"max-height":[R,x],"line-height":[R,k],"scroll-top":[C,w,"scrollTop"],"scroll-left":[C,w,"scrollLeft"]},Q={};S.transform&&(G.transform=[P],Q={x:[x,"translateX"],y:[x,"translateY"],rotate:[_],rotateX:[_],rotateY:[_],scale:[w],scaleX:[w],scaleY:[w],skew:[_],skewX:[_],skewY:[_]}),S.transform&&S.backface&&(Q.z=[x,"translateZ"],Q.rotateZ=[_],Q.scaleZ=[w],Q.perspective=[y]);var J=/ms/,V=/s|\./;return t.tram=e}(window.jQuery)},function(t,e,n){n(3),n(5),n(8),n(10),n(11),t.exports=n(12)},function(t,e,n){var i=n(0);i.define("brand",t.exports=function(t){var e,n={},r=document,o=t("html"),a=t("body"),s=".w-webflow-badge",u=window.location,c=/PhantomJS/i.test(navigator.userAgent),l="fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";function f(){var n=r.fullScreen||r.mozFullScreen||r.webkitIsFullScreen||r.msFullscreenElement||Boolean(r.webkitFullscreenElement);t(e).attr("style",n?"display: none !important;":"")}function h(){var t=a.children(s),n=t.length&&t.get(0)===e,r=i.env("editor");n?r&&t.remove():(t.length&&t.remove(),r||a.append(e))}return n.ready=function(){var n,i,a,s=o.attr("data-wf-status"),d=o.attr("data-wf-domain")||"";/\.webflow\.io$/i.test(d)&&u.hostname!==d&&(s=!0),s&&!c&&(e=e||(n=t('<a class="w-webflow-badge"></a>').attr("href","https://webflow.com?utm_campaign=brandjs"),i=t("<img>").attr("src","https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-icon.60efbf6ec9.svg").css({marginRight:"8px",width:"16px"}),a=t("<img>").attr("src","https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg"),n.append(i,a),n[0]),h(),setTimeout(h,500),t(r).off(l,f).on(l,f))},n})},function(t,e,n){var i=window.$,r=n(1)&&i.tram;
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
t.exports=function(){var t={VERSION:"1.6.0-Webflow"},e={},n=Array.prototype,i=Object.prototype,o=Function.prototype,a=(n.push,n.slice),s=(n.concat,i.toString,i.hasOwnProperty),u=n.forEach,c=n.map,l=(n.reduce,n.reduceRight,n.filter),f=(n.every,n.some),h=n.indexOf,d=(n.lastIndexOf,Array.isArray,Object.keys),p=(o.bind,t.each=t.forEach=function(n,i,r){if(null==n)return n;if(u&&n.forEach===u)n.forEach(i,r);else if(n.length===+n.length){for(var o=0,a=n.length;o<a;o++)if(i.call(r,n[o],o,n)===e)return}else{var s=t.keys(n);for(o=0,a=s.length;o<a;o++)if(i.call(r,n[s[o]],s[o],n)===e)return}return n});t.map=t.collect=function(t,e,n){var i=[];return null==t?i:c&&t.map===c?t.map(e,n):(p(t,function(t,r,o){i.push(e.call(n,t,r,o))}),i)},t.find=t.detect=function(t,e,n){var i;return v(t,function(t,r,o){if(e.call(n,t,r,o))return i=t,!0}),i},t.filter=t.select=function(t,e,n){var i=[];return null==t?i:l&&t.filter===l?t.filter(e,n):(p(t,function(t,r,o){e.call(n,t,r,o)&&i.push(t)}),i)};var v=t.some=t.any=function(n,i,r){i||(i=t.identity);var o=!1;return null==n?o:f&&n.some===f?n.some(i,r):(p(n,function(t,n,a){if(o||(o=i.call(r,t,n,a)))return e}),!!o)};t.contains=t.include=function(t,e){return null!=t&&(h&&t.indexOf===h?-1!=t.indexOf(e):v(t,function(t){return t===e}))},t.delay=function(t,e){var n=a.call(arguments,2);return setTimeout(function(){return t.apply(null,n)},e)},t.defer=function(e){return t.delay.apply(t,[e,1].concat(a.call(arguments,1)))},t.throttle=function(t){var e,n,i;return function(){e||(e=!0,n=arguments,i=this,r.frame(function(){e=!1,t.apply(i,n)}))}},t.debounce=function(e,n,i){var r,o,a,s,u,c=function c(){var l=t.now()-s;l<n?r=setTimeout(c,n-l):(r=null,i||(u=e.apply(a,o),a=o=null))};return function(){a=this,o=arguments,s=t.now();var l=i&&!r;return r||(r=setTimeout(c,n)),l&&(u=e.apply(a,o),a=o=null),u}},t.defaults=function(e){if(!t.isObject(e))return e;for(var n=1,i=arguments.length;n<i;n++){var r=arguments[n];for(var o in r)void 0===e[o]&&(e[o]=r[o])}return e},t.keys=function(e){if(!t.isObject(e))return[];if(d)return d(e);var n=[];for(var i in e)t.has(e,i)&&n.push(i);return n},t.has=function(t,e){return s.call(t,e)},t.isObject=function(t){return t===Object(t)},t.now=Date.now||function(){return(new Date).getTime()},t.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var m=/(.)^/,g={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},w=/\\|'|\r|\n|\u2028|\u2029/g,b=function(t){return"\\"+g[t]};return t.template=function(e,n,i){!n&&i&&(n=i),n=t.defaults({},n,t.templateSettings);var r=RegExp([(n.escape||m).source,(n.interpolate||m).source,(n.evaluate||m).source].join("|")+"|$","g"),o=0,a="__p+='";e.replace(r,function(t,n,i,r,s){return a+=e.slice(o,s).replace(w,b),o=s+t.length,n?a+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":i?a+="'+\n((__t=("+i+"))==null?'':__t)+\n'":r&&(a+="';\n"+r+"\n__p+='"),t}),a+="';\n",n.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{var s=new Function(n.variable||"obj","_",a)}catch(t){throw t.source=a,t}var u=function(e){return s.call(this,e,t)},c=n.variable||"obj";return u.source="function("+c+"){\n"+a+"}",u},t}()},function(t,e,n){var i=n(0),r=n(6);i.define("dropdown",t.exports=function(t,e){var n,o,a={},s=t(document),u=i.env(),c=i.env.touch,l=".w-dropdown",f="w--open",h="w-close"+l,d=r.triggers,p=900,v=!1;function m(){o=u&&i.env("design"),(n=s.find(l)).each(g)}function g(n,r){var a=t(r),c=t.data(r,l);c||(c=t.data(r,l,{open:!1,el:a,config:{}})),c.list=a.children(".w-dropdown-list"),c.toggle=a.children(".w-dropdown-toggle"),c.links=c.list.children(".w-dropdown-link"),c.outside=function(n){n.outside&&s.off(_()+l,n.outside);return e.debounce(function(e){if(n.open){var r=t(e.target);if(!r.closest(".w-dropdown-toggle").length){var o=-1===t.inArray(n.el[0],r.parents(l)),a=i.env("editor");if(o){if(a){var s=1===r.parents().length&&1===r.parents("svg").length,u=r.parents(".w-editor-bem-EditorHoverControls").length;if(s||u)return}x(n)}}}})}(c),c.complete=function(t){return function(){t.list.removeClass(f),t.toggle.removeClass(f),t.manageZ&&t.el.css("z-index","")}}(c),c.leave=function(t){return function(){t.hovering=!1,x(t)}}(c),c.moveOutside=function(n){return e.debounce(function(e){if(n.open){var i=t(e.target),r=-1===t.inArray(n.el[0],i.parents(l));if(r){var o=i.parents(".w-editor-bem-EditorHoverControls").length,a=i.parents(".w-editor-bem-RTToolbar").length,s=t(".w-editor-bem-EditorOverlay"),u=s.find(".w-editor-edit-outline").length||s.find(".w-editor-bem-RTToolbar").length;if(o||a||u)return;n.hovering=!1,x(n)}}})}(c),a.off(l),c.toggle.off(l),w(c),c.nav&&c.nav.off(l),c.nav=a.closest(".w-nav"),c.nav.on(h,b(c)),o?a.on("setting"+l,b(c)):(c.toggle.on(_()+l,function(t){return e.debounce(function(){t.open?x(t):y(t)})}(c)),c.config.hover&&c.toggle.on("mouseenter"+l,function(t){return function(){t.hovering=!0,y(t)}}(c)),a.on(h,b(c)),u&&(c.hovering=!1,x(c)))}function w(t){var e=Number(t.el.css("z-index"));t.manageZ=e===p||e===p+1,t.config={hover:Boolean(t.el.attr("data-hover"))&&!c,delay:Number(t.el.attr("data-delay"))||0}}function b(t){return function(e,n){return n=n||{},"w-close"===e.type?x(t):"setting"===e.type?(w(t),!0===n.open&&y(t),void(!1===n.open&&x(t,!0))):void 0}}function y(e){if(!e.open){!function(e){var i=e.el[0];n.each(function(e,n){var r=t(n);r.is(i)||r.has(i).length||r.triggerHandler(h)})}(e),e.open=!0,e.list.addClass(f),e.toggle.addClass(f),d.intro(0,e.el[0]),i.redraw.up(),e.manageZ&&e.el.css("z-index",p+1);var r=i.env("editor");o||s.on(_()+l,e.outside),e.hovering&&!r&&e.el.on("mouseleave"+l,e.leave),e.hovering&&r&&s.on("mousemove"+l,e.moveOutside),window.clearTimeout(e.delayId)}}function x(t,e){if(t.open&&(!t.config.hover||!t.hovering)){t.open=!1;var n=t.config;if(d.outro(0,t.el[0]),s.off(_()+l,t.outside),t.el.off("mouseleave"+l,t.leave),s.off("mousemove"+l,t.moveOutside),window.clearTimeout(t.delayId),!n.delay||e)return t.complete();t.delayId=window.setTimeout(t.complete,n.delay)}}function _(){return c?"tap":"mouseup"}return a.ready=m,a.design=function(){v&&s.find(l).each(function(e,n){t(n).triggerHandler(h)}),v=!1,m()},a.preview=function(){v=!0,m()},a})},function(t,e,n){"use strict";var i=n(7);function r(t,e){var n=document.createEvent("CustomEvent");n.initCustomEvent(e,!0,!0,null),t.dispatchEvent(n)}var o=window.jQuery,a={},s={reset:function(t,e){i.triggers.reset(t,e)},intro:function(t,e){i.triggers.intro(t,e),r(e,"COMPONENT_ACTIVE")},outro:function(t,e){i.triggers.outro(t,e),r(e,"COMPONENT_INACTIVE")}};a.triggers={},a.types={INTRO:"w-ix-intro.w-ix",OUTRO:"w-ix-outro.w-ix"},o.extend(a.triggers,s),t.exports=a},function(t,e,n){"use strict";var i=window.jQuery,r={},o=[],a={reset:function(t,e){e.__wf_intro=null},intro:function(t,e){e.__wf_intro||(e.__wf_intro=!0,i(e).triggerHandler(r.types.INTRO))},outro:function(t,e){e.__wf_intro&&(e.__wf_intro=null,i(e).triggerHandler(r.types.OUTRO))}};r.triggers={},r.types={INTRO:"w-ix-intro.w-ix",OUTRO:"w-ix-outro.w-ix"},r.init=function(){for(var t=o.length,e=0;e<t;e++){var n=o[e];n[0](0,n[1])}o=[],i.extend(r.triggers,a)},r.async=function(){for(var t in a){var e=a[t];a.hasOwnProperty(t)&&(r.triggers[t]=function(t,n){o.push([e,n])})}},r.async(),t.exports=r},function(t,e,n){var i=n(0);i.define("forms",t.exports=function(t,e){var r={};n(9);var o,a,s,u,c,l=t(document),f=window.location,h=window.XDomainRequest&&!window.atob,d=".w-form",p=/e(-)?mail/i,v=/^\S+@\S+$/,m=window.alert,g=i.env(),w=/list-manage[1-9]?.com/i,b=e.debounce(function(){m("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")},100);function y(e,n){var i=t(n),r=t.data(n,d);r||(r=t.data(n,d,{form:i})),x(r);var o=i.closest("div.w-form");r.done=o.find("> .w-form-done"),r.fail=o.find("> .w-form-fail"),r.fileUploads=o.find(".w-file-upload"),r.fileUploads.each(function(e){!function(e,n){if(!n.fileUploads||!n.fileUploads[e])return;var i,r=t(n.fileUploads[e]),o=r.find("> .w-file-upload-default"),a=r.find("> .w-file-upload-uploading"),s=r.find("> .w-file-upload-success"),u=r.find("> .w-file-upload-error"),l=o.find(".w-file-upload-input"),f=o.find(".w-file-upload-label"),h=f.children(),d=u.find(".w-file-upload-error-msg"),p=s.find(".w-file-upload-file"),v=s.find(".w-file-remove-link"),m=p.find(".w-file-upload-file-name"),w=d.attr("data-w-size-error"),b=d.attr("data-w-type-error"),y=d.attr("data-w-generic-error");if(g)l.on("click",function(t){t.preventDefault()}),f.on("click",function(t){t.preventDefault()}),h.on("click",function(t){t.preventDefault()});else{v.on("click",function(){l.removeAttr("data-value"),l.val(""),m.html(""),o.toggle(!0),s.toggle(!1)}),l.on("change",function(r){(i=r.target&&r.target.files&&r.target.files[0])&&(o.toggle(!1),u.toggle(!1),a.toggle(!0),m.text(i.name),z()||_(n),n.fileUploads[e].uploading=!0,function(e,n){var i={name:e.name,size:e.size};t.ajax({type:"POST",url:c,data:i,dataType:"json",crossDomain:!0}).done(function(t){n(null,t)}).fail(function(t){n(t)})}(i,E))});var k=f.outerHeight();l.height(k),l.width(1)}function T(t){var i=t.responseJSON&&t.responseJSON.msg,r=y;"string"==typeof i&&0===i.indexOf("InvalidFileTypeError")?r=b:"string"==typeof i&&0===i.indexOf("MaxFileSizeError")&&(r=w),d.text(r),l.removeAttr("data-value"),l.val(""),a.toggle(!1),o.toggle(!0),u.toggle(!0),n.fileUploads[e].uploading=!1,z()||x(n)}function E(e,n){if(e)return T(e);var r=n.fileName,o=n.postData,a=n.fileId,s=n.s3Url;l.attr("data-value",a),function(e,n,i,r,o){var a=new FormData;for(var s in n)a.append(s,n[s]);a.append("file",i,r),t.ajax({type:"POST",url:e,data:a,processData:!1,contentType:!1}).done(function(){o(null)}).fail(function(t){o(t)})}(s,o,i,r,O)}function O(t){if(t)return T(t);a.toggle(!1),s.css("display","inline-block"),n.fileUploads[e].uploading=!1,z()||x(n)}function z(){var t=n.fileUploads&&n.fileUploads.toArray()||[];return t.some(function(t){return t.uploading})}}(e,r)});var s=r.action=i.attr("action");r.handler=null,r.redirect=i.attr("data-redirect"),w.test(s)?r.handler=E:s||(a?r.handler="function"==typeof hostedSubmitWebflow?hostedSubmitWebflow:T:b())}function x(t){var e=t.btn=t.form.find(':input[type="submit"]');t.wait=t.btn.attr("data-wait")||null,t.success=!1,e.prop("disabled",!1),t.label&&e.val(t.label)}function _(t){var e=t.btn,n=t.wait;e.prop("disabled",!0),n&&(t.label=e.val(),e.val(n))}function k(e,n){var i=null;return n=n||{},e.find(':input:not([type="submit"]):not([type="file"])').each(function(r,o){var a=t(o),s=a.attr("type"),u=a.attr("data-name")||a.attr("name")||"Field "+(r+1),c=a.val();if("checkbox"===s)c=a.is(":checked");else if("radio"===s){if(null===n[u]||"string"==typeof n[u])return;c=e.find('input[name="'+a.attr("name")+'"]:checked').val()||null}"string"==typeof c&&(c=t.trim(c)),n[u]=c,i=i||function(t,e,n,i){var r=null;"password"===e?r="Passwords cannot be submitted.":t.attr("required")?i?p.test(t.attr("type"))&&(v.test(i)||(r="Please enter a valid email address for: "+n)):r="Please fill out the required field: "+n:"g-recaptcha-response"!==n||i||(r="Please confirm you’re not a robot.");return r}(a,s,u,c)}),i}function T(t){z(t),O(t)}function E(n){x(n);var i=n.form,r={};if(!/^https/.test(f.href)||/^https/.test(n.action)){z(n);var o,a=k(i,r);if(a)return m(a);_(n),e.each(r,function(t,e){p.test(e)&&(r.EMAIL=t),/^((full[ _-]?)?name)$/i.test(e)&&(o=t),/^(first[ _-]?name)$/i.test(e)&&(r.FNAME=t),/^(last[ _-]?name)$/i.test(e)&&(r.LNAME=t)}),o&&!r.FNAME&&(o=o.split(" "),r.FNAME=o[0],r.LNAME=r.LNAME||o[1]);var s=n.action.replace("/post?","/post-json?")+"&c=?",u=s.indexOf("u=")+2;u=s.substring(u,s.indexOf("&",u));var c=s.indexOf("id=")+3;c=s.substring(c,s.indexOf("&",c)),r["b_"+u+"_"+c]="",t.ajax({url:s,data:r,dataType:"jsonp"}).done(function(t){n.success="success"===t.result||/already/.test(t.msg),n.success||console.info("MailChimp error: "+t.msg),O(n)}).fail(function(){O(n)})}else i.attr("method","post")}function O(t){var e=t.form,n=t.redirect,r=t.success;r&&n?i.location(n):(t.done.toggle(r),t.fail.toggle(!r),e.toggle(!r),x(t))}function z(t){t.evt&&t.evt.preventDefault(),t.evt=null}return r.ready=r.design=r.preview=function(){!function(){a=t("html").attr("data-wf-site"),u="https://webflow.com/api/v1/form/"+a,h&&u.indexOf("https://webflow.com")>=0&&(u=u.replace("https://webflow.com","http://formdata.webflow.com"));if(c=u+"/signFile",!(o=t(d+" form")).length)return;o.each(y)}(),g||s||(s=!0,l.on("submit",d+" form",function(e){var n=t.data(this,d);n.handler&&(n.evt=e,n.handler(n))}))},r})},function(t,e){
/*!
 * jQuery-ajaxTransport-XDomainRequest - v1.0.3
 * 2014-12-16 WEBFLOW - Removed UMD wrapper
 * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
 * Copyright (c) 2014 Jason Moon (@JSONMOON)
 * @license MIT (/blob/master/LICENSE.txt)
 */
t.exports=function(t){if(!t.support.cors&&t.ajaxTransport&&window.XDomainRequest){var e=/^https?:\/\//i,n=/^get|post$/i,i=new RegExp("^"+location.protocol,"i");t.ajaxTransport("* text html xml json",function(r,o,a){if(r.crossDomain&&r.async&&n.test(r.type)&&e.test(r.url)&&i.test(r.url)){var s=null;return{send:function(e,n){var i="",a=(o.dataType||"").toLowerCase();s=new XDomainRequest,/^\d+$/.test(o.timeout)&&(s.timeout=o.timeout),s.ontimeout=function(){n(500,"timeout")},s.onload=function(){var e="Content-Length: "+s.responseText.length+"\r\nContent-Type: "+s.contentType,i={code:200,message:"success"},r={text:s.responseText};try{if("html"===a||/text\/html/i.test(s.contentType))r.html=s.responseText;else if("json"===a||"text"!==a&&/\/json/i.test(s.contentType))try{r.json=t.parseJSON(s.responseText)}catch(t){i.code=500,i.message="parseerror"}else if("xml"===a||"text"!==a&&/\/xml/i.test(s.contentType)){var o=new ActiveXObject("Microsoft.XMLDOM");o.async=!1;try{o.loadXML(s.responseText)}catch(t){o=void 0}if(!o||!o.documentElement||o.getElementsByTagName("parsererror").length)throw i.code=500,i.message="parseerror","Invalid XML: "+s.responseText;r.xml=o}}catch(t){throw t}finally{n(i.code,i.message,r,e)}},s.onprogress=function(){},s.onerror=function(){n(500,"error",{text:s.responseText})},o.data&&(i="string"===t.type(o.data)?o.data:t.param(o.data)),s.open(r.type,r.url),s.send(i)},abort:function(){s&&s.abort()}}}})}}(window.jQuery)},function(t,e,n){var i=n(0);i.define("links",t.exports=function(t,e){var n,r,o,a={},s=t(window),u=i.env(),c=window.location,l=document.createElement("a"),f="w--current",h=/^#[\w:.-]+$/,d=/index\.(html|php)$/,p=/\/$/;function v(e){var i=n&&e.getAttribute("href-disabled")||e.getAttribute("href");if(l.href=i,!(i.indexOf(":")>=0)){var a=t(e);if(0===i.indexOf("#")&&h.test(i)){var s=t(i);s.length&&r.push({link:a,sec:s,active:!1})}else if("#"!==i&&""!==i){var u=l.href===c.href||i===o||d.test(i)&&p.test(o);g(a,f,u)}}}function m(){var t=s.scrollTop(),n=s.height();e.each(r,function(e){var i=e.link,r=e.sec,o=r.offset().top,a=r.outerHeight(),s=.5*n,u=r.is(":visible")&&o+a-s>=t&&o+s<=t+n;e.active!==u&&(e.active=u,g(i,f,u))})}function g(t,e,n){var i=t.hasClass(e);n&&i||(n||i)&&(n?t.addClass(e):t.removeClass(e))}return a.ready=a.design=a.preview=function(){n=u&&i.env("design"),o=i.env("slug")||c.pathname||"",i.scroll.off(m),r=[];for(var t=document.links,e=0;e<t.length;++e)v(t[e]);r.length&&(i.scroll.on(m),m())},a})},function(t,e,n){var i=n(0);i.define("scroll",t.exports=function(t){var e=t(document),n=window,r=n.location,o=function(){try{return Boolean(n.frameElement)}catch(t){return!0}}()?null:n.history,a=/^[a-zA-Z0-9][\w:.-]*$/;function s(e,s){if(a.test(e)){var u=t("#"+e);if(u.length){if(s&&(s.preventDefault(),s.stopPropagation()),r.hash!==e&&o&&o.pushState&&(!i.env.chrome||"file:"!==r.protocol))(o.state&&o.state.hash)!==e&&o.pushState({hash:e},"","#"+e);var c=i.env("editor")?".w-editor-body":"body",l=t("header, "+c+" > .header, "+c+" > .w-nav:not([data-no-scroll])"),f="fixed"===l.css("position")?l.outerHeight():0;n.setTimeout(function(){!function(e,i){var r=t(n).scrollTop(),o=e.offset().top-i;if("mid"===e.data("scroll")){var a=t(n).height()-i,s=e.outerHeight();s<a&&(o-=Math.round((a-s)/2))}var u=1;t("body").add(e).each(function(){var e=parseFloat(t(this).attr("data-scroll-time"),10);!isNaN(e)&&(0===e||e>0)&&(u=e)}),Date.now||(Date.now=function(){return(new Date).getTime()});var c=Date.now(),l=n.requestAnimationFrame||n.mozRequestAnimationFrame||n.webkitRequestAnimationFrame||function(t){n.setTimeout(t,15)},f=(472.143*Math.log(Math.abs(r-o)+125)-2e3)*u;!function t(){var e=Date.now()-c;n.scroll(0,function(t,e,n,i){if(n>i)return e;return t+(e-t)*(r=n/i,r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1);var r}(r,o,e,f)),e<=f&&l(t)}()}(u,f)},s?0:300)}}}return{ready:function(){r.hash&&s(r.hash.substring(1));var n=r.href.split("#")[0];e.on("click","a",function(e){if(!(i.env("design")||window.$.mobile&&t(e.currentTarget).hasClass("ui-link")))if("#"!==this.getAttribute("href")){var r=this.href.split("#"),o=r[0]===n?r[1]:null;o&&s(o,e)}else e.preventDefault()})}}})},function(t,e,n){n(0).define("touch",t.exports=function(t){var e={},n=!document.addEventListener,i=window.getSelection;function r(e,n,i){var r=t.Event(e,{originalEvent:n});t(n.target).trigger(r,i)}return n&&(t.event.special.tap={bindType:"click",delegateType:"click"}),e.init=function(e){return n?null:(e="string"==typeof e?t(e).get(0):e)?new function(t){var e,n,o,a=!1,s=!1,u=!1,c=Math.min(Math.round(.04*window.innerWidth),40);function l(t){var i=t.touches;i&&i.length>1||(a=!0,s=!1,i?(u=!0,e=i[0].clientX,n=i[0].clientY):(e=t.clientX,n=t.clientY),o=e)}function f(t){if(a){if(u&&"mousemove"===t.type)return t.preventDefault(),void t.stopPropagation();var l=t.touches,f=l?l[0].clientX:t.clientX,h=l?l[0].clientY:t.clientY,p=f-o;o=f,Math.abs(p)>c&&i&&""===String(i())&&(r("swipe",t,{direction:p>0?"right":"left"}),d()),(Math.abs(f-e)>10||Math.abs(h-n)>10)&&(s=!0)}}function h(t){if(a){if(a=!1,u&&"mouseup"===t.type)return t.preventDefault(),t.stopPropagation(),void(u=!1);s||r("tap",t)}}function d(){a=!1}t.addEventListener("touchstart",l,!1),t.addEventListener("touchmove",f,!1),t.addEventListener("touchend",h,!1),t.addEventListener("touchcancel",d,!1),t.addEventListener("mousedown",l,!1),t.addEventListener("mousemove",f,!1),t.addEventListener("mouseup",h,!1),t.addEventListener("mouseout",d,!1),this.destroy=function(){t.removeEventListener("touchstart",l,!1),t.removeEventListener("touchmove",f,!1),t.removeEventListener("touchend",h,!1),t.removeEventListener("touchcancel",d,!1),t.removeEventListener("mousedown",l,!1),t.removeEventListener("mousemove",f,!1),t.removeEventListener("mouseup",h,!1),t.removeEventListener("mouseout",d,!1),t=null}}(e):null},e.instance=e.init(document),e})}]);

/*
Copyright (c) 2010 Aaron BLohowiak
Dual licensed under the MIT and GPL licenses.
*/


// (function(exports){
//   var BASE64URICHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''); 

//   exports.newId = function(len, radix) {
//     var chars = BASE64URICHARS, newId = [], i=0;
//     radix = radix || chars.length;
//     len = len || 22;

//     for (i = 0; i < len; i++) newId[i] = chars[0 | Math.random()*radix];

//     return newId.join('');
//   };

// })(typeof exports === 'undefined'? this['newId']={}: exports);;


BASE64URICHARS = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_'.split(''); 

newId = function(len, radix) {
	var chars = BASE64URICHARS, newId = [], i=0;
	radix = radix || chars.length;
	len = len || 22;

	for (i = 0; i < len; i++) newId[i] = chars[0 | Math.random()*radix];

	return newId.join('');
};

(function(t,e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e(require("jquery"))}else{e(t.jQuery)}})(this,function(t){t.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var e=document.createElement("div");var n={};function i(t){if(t in e.style)return t;var n=["Moz","Webkit","O","ms"];var i=t.charAt(0).toUpperCase()+t.substr(1);for(var r=0;r<n.length;++r){var s=n[r]+i;if(s in e.style){return s}}}function r(){e.style[n.transform]="";e.style[n.transform]="rotateY(90deg)";return e.style[n.transform]!==""}var s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;n.transition=i("transition");n.transitionDelay=i("transitionDelay");n.transform=i("transform");n.transformOrigin=i("transformOrigin");n.filter=i("Filter");n.transform3d=r();var a={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var o=n.transitionEnd=a[n.transition]||null;for(var u in n){if(n.hasOwnProperty(u)&&typeof t.support[u]==="undefined"){t.support[u]=n[u]}}e=null;t.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};t.cssHooks["transit:transform"]={get:function(e){return t(e).data("transform")||new f},set:function(e,i){var r=i;if(!(r instanceof f)){r=new f(r)}if(n.transform==="WebkitTransform"&&!s){e.style[n.transform]=r.toString(true)}else{e.style[n.transform]=r.toString()}t(e).data("transform",r)}};t.cssHooks.transform={set:t.cssHooks["transit:transform"].set};t.cssHooks.filter={get:function(t){return t.style[n.filter]},set:function(t,e){t.style[n.filter]=e}};if(t.fn.jquery<"1.8"){t.cssHooks.transformOrigin={get:function(t){return t.style[n.transformOrigin]},set:function(t,e){t.style[n.transformOrigin]=e}};t.cssHooks.transition={get:function(t){return t.style[n.transition]},set:function(t,e){t.style[n.transition]=e}}}p("scale");p("scaleX");p("scaleY");p("translate");p("rotate");p("rotateX");p("rotateY");p("rotate3d");p("perspective");p("skewX");p("skewY");p("x",true);p("y",true);function f(t){if(typeof t==="string"){this.parse(t)}return this}f.prototype={setFromString:function(t,e){var n=typeof e==="string"?e.split(","):e.constructor===Array?e:[e];n.unshift(t);f.prototype.set.apply(this,n)},set:function(t){var e=Array.prototype.slice.apply(arguments,[1]);if(this.setter[t]){this.setter[t].apply(this,e)}else{this[t]=e.join(",")}},get:function(t){if(this.getter[t]){return this.getter[t].apply(this)}else{return this[t]||0}},setter:{rotate:function(t){this.rotate=b(t,"deg")},rotateX:function(t){this.rotateX=b(t,"deg")},rotateY:function(t){this.rotateY=b(t,"deg")},scale:function(t,e){if(e===undefined){e=t}this.scale=t+","+e},skewX:function(t){this.skewX=b(t,"deg")},skewY:function(t){this.skewY=b(t,"deg")},perspective:function(t){this.perspective=b(t,"px")},x:function(t){this.set("translate",t,null)},y:function(t){this.set("translate",null,t)},translate:function(t,e){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(t!==null&&t!==undefined){this._translateX=b(t,"px")}if(e!==null&&e!==undefined){this._translateY=b(e,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var t=(this.scale||"1,1").split(",");if(t[0]){t[0]=parseFloat(t[0])}if(t[1]){t[1]=parseFloat(t[1])}return t[0]===t[1]?t[0]:t},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var e=0;e<=3;++e){if(t[e]){t[e]=parseFloat(t[e])}}if(t[3]){t[3]=b(t[3],"deg")}return t}},parse:function(t){var e=this;t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,n,i){e.setFromString(n,i)})},toString:function(t){var e=[];for(var i in this){if(this.hasOwnProperty(i)){if(!n.transform3d&&(i==="rotateX"||i==="rotateY"||i==="perspective"||i==="transformOrigin")){continue}if(i[0]!=="_"){if(t&&i==="scale"){e.push(i+"3d("+this[i]+",1)")}else if(t&&i==="translate"){e.push(i+"3d("+this[i]+",0)")}else{e.push(i+"("+this[i]+")")}}}}return e.join(" ")}};function c(t,e,n){if(e===true){t.queue(n)}else if(e){t.queue(e,n)}else{t.each(function(){n.call(this)})}}function l(e){var i=[];t.each(e,function(e){e=t.camelCase(e);e=t.transit.propertyMap[e]||t.cssProps[e]||e;e=h(e);if(n[e])e=h(n[e]);if(t.inArray(e,i)===-1){i.push(e)}});return i}function d(e,n,i,r){var s=l(e);if(t.cssEase[i]){i=t.cssEase[i]}var a=""+y(n)+" "+i;if(parseInt(r,10)>0){a+=" "+y(r)}var o=[];t.each(s,function(t,e){o.push(e+" "+a)});return o.join(", ")}t.fn.transition=t.fn.transit=function(e,i,r,s){var a=this;var u=0;var f=true;var l=t.extend(true,{},e);if(typeof i==="function"){s=i;i=undefined}if(typeof i==="object"){r=i.easing;u=i.delay||0;f=typeof i.queue==="undefined"?true:i.queue;s=i.complete;i=i.duration}if(typeof r==="function"){s=r;r=undefined}if(typeof l.easing!=="undefined"){r=l.easing;delete l.easing}if(typeof l.duration!=="undefined"){i=l.duration;delete l.duration}if(typeof l.complete!=="undefined"){s=l.complete;delete l.complete}if(typeof l.queue!=="undefined"){f=l.queue;delete l.queue}if(typeof l.delay!=="undefined"){u=l.delay;delete l.delay}if(typeof i==="undefined"){i=t.fx.speeds._default}if(typeof r==="undefined"){r=t.cssEase._default}i=y(i);var p=d(l,i,r,u);var h=t.transit.enabled&&n.transition;var b=h?parseInt(i,10)+parseInt(u,10):0;if(b===0){var g=function(t){a.css(l);if(s){s.apply(a)}if(t){t()}};c(a,f,g);return a}var m={};var v=function(e){var i=false;var r=function(){if(i){a.unbind(o,r)}if(b>0){a.each(function(){this.style[n.transition]=m[this]||null})}if(typeof s==="function"){s.apply(a)}if(typeof e==="function"){e()}};if(b>0&&o&&t.transit.useTransitionEnd){i=true;a.bind(o,r)}else{window.setTimeout(r,b)}a.each(function(){if(b>0){this.style[n.transition]=p}t(this).css(l)})};var z=function(t){this.offsetWidth;v(t)};c(a,f,z);return this};function p(e,i){if(!i){t.cssNumber[e]=true}t.transit.propertyMap[e]=n.transform;t.cssHooks[e]={get:function(n){var i=t(n).css("transit:transform");return i.get(e)},set:function(n,i){var r=t(n).css("transit:transform");r.setFromString(e,i);t(n).css({"transit:transform":r})}}}function h(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function b(t,e){if(typeof t==="string"&&!t.match(/^[\-0-9\.]+$/)){return t}else{return""+t+e}}function y(e){var n=e;if(typeof n==="string"&&!n.match(/^[\-0-9\.]+/)){n=t.fx.speeds[n]||t.fx.speeds._default}return b(n,"ms")}t.transit.getTransitionValue=d;return t});

/*! tooltipster v4.2.3 */!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){function b(a){this.$container,this.constraints=null,this.__$tooltip,this.__init(a)}function c(b,c){var d=!0;return a.each(b,function(a,e){return void 0===c[a]||b[a]!==c[a]?(d=!1,!1):void 0}),d}function d(b){var c=b.attr("id"),d=c?h.window.document.getElementById(c):null;return d?d===b[0]:a.contains(h.window.document.body,b[0])}function e(){if(!g)return!1;var a=g.document.body||g.document.documentElement,b=a.style,c="transition",d=["Moz","Webkit","Khtml","O","ms"];if("string"==typeof b[c])return!0;c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}var f={animation:"fade",animationDuration:350,content:null,contentAsHTML:!1,contentCloning:!1,debug:!0,delay:300,delayTouch:[300,500],functionInit:null,functionBefore:null,functionReady:null,functionAfter:null,functionFormat:null,IEmin:6,interactive:!1,multiple:!1,parent:null,plugins:["sideTip"],repositionOnScroll:!1,restoration:"none",selfDestruction:!0,theme:[],timer:0,trackerInterval:500,trackOrigin:!1,trackTooltip:!1,trigger:"hover",triggerClose:{click:!1,mouseleave:!1,originClick:!1,scroll:!1,tap:!1,touchleave:!1},triggerOpen:{click:!1,mouseenter:!1,tap:!1,touchstart:!1},updateAnimation:"rotate",zIndex:9999999},g="undefined"!=typeof window?window:null,h={hasTouchCapability:!(!g||!("ontouchstart"in g||g.DocumentTouch&&g.document instanceof g.DocumentTouch||g.navigator.maxTouchPoints)),hasTransitions:e(),IE:!1,semVer:"4.2.3",window:g},i=function(){this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__instancesLatestArr=[],this.__plugins={},this._env=h};i.prototype={__bridge:function(b,c,d){if(!c[d]){var e=function(){};e.prototype=b;var g=new e;g.__init&&g.__init(c),a.each(b,function(a,b){0!=a.indexOf("__")&&(c[a]?f.debug&&console.log("The "+a+" method of the "+d+" plugin conflicts with another plugin or native methods"):(c[a]=function(){return g[a].apply(g,Array.prototype.slice.apply(arguments))},c[a].bridged=g))}),c[d]=g}return this},__setWindow:function(a){return h.window=a,this},_getRuler:function(a){return new b(a)},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_plugin:function(b){var c=this;if("string"==typeof b){var d=b,e=null;return d.indexOf(".")>0?e=c.__plugins[d]:a.each(c.__plugins,function(a,b){return b.name.substring(b.name.length-d.length-1)=="."+d?(e=b,!1):void 0}),e}if(b.name.indexOf(".")<0)throw new Error("Plugins must be namespaced");return c.__plugins[b.name]=b,b.core&&c.__bridge(b.core,c,b.name),this},_trigger:function(){var a=Array.prototype.slice.apply(arguments);return"string"==typeof a[0]&&(a[0]={type:a[0]}),this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,a),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,a),this},instances:function(b){var c=[],d=b||".tooltipstered";return a(d).each(function(){var b=a(this),d=b.data("tooltipster-ns");d&&a.each(d,function(a,d){c.push(b.data(d))})}),c},instancesLatest:function(){return this.__instancesLatestArr},off:function(){return this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},origins:function(b){var c=b?b+" ":"";return a(c+".tooltipstered").toArray()},setDefaults:function(b){return a.extend(f,b),this},triggerHandler:function(){return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.tooltipster=new i,a.Tooltipster=function(b,c){this.__callbacks={close:[],open:[]},this.__closingTime,this.__Content,this.__contentBcr,this.__destroyed=!1,this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__enabled=!0,this.__garbageCollector,this.__Geometry,this.__lastPosition,this.__namespace="tooltipster-"+Math.round(1e6*Math.random()),this.__options,this.__$originParents,this.__pointerIsOverOrigin=!1,this.__previousThemes=[],this.__state="closed",this.__timeouts={close:[],open:null},this.__touchEvents=[],this.__tracker=null,this._$origin,this._$tooltip,this.__init(b,c)},a.Tooltipster.prototype={__init:function(b,c){var d=this;if(d._$origin=a(b),d.__options=a.extend(!0,{},f,c),d.__optionsFormat(),!h.IE||h.IE>=d.__options.IEmin){var e=null;if(void 0===d._$origin.data("tooltipster-initialTitle")&&(e=d._$origin.attr("title"),void 0===e&&(e=null),d._$origin.data("tooltipster-initialTitle",e)),null!==d.__options.content)d.__contentSet(d.__options.content);else{var g,i=d._$origin.attr("data-tooltip-content");i&&(g=a(i)),g&&g[0]?d.__contentSet(g.first()):d.__contentSet(e)}d._$origin.removeAttr("title").addClass("tooltipstered"),d.__prepareOrigin(),d.__prepareGC(),a.each(d.__options.plugins,function(a,b){d._plug(b)}),h.hasTouchCapability&&a(h.window.document.body).on("touchmove."+d.__namespace+"-triggerOpen",function(a){d._touchRecordEvent(a)}),d._on("created",function(){d.__prepareTooltip()})._on("repositioned",function(a){d.__lastPosition=a.position})}else d.__options.disabled=!0},__contentInsert:function(){var a=this,b=a._$tooltip.find(".tooltipster-content"),c=a.__Content,d=function(a){c=a};return a._trigger({type:"format",content:a.__Content,format:d}),a.__options.functionFormat&&(c=a.__options.functionFormat.call(a,a,{origin:a._$origin[0]},a.__Content)),"string"!=typeof c||a.__options.contentAsHTML?b.empty().append(c):b.text(c),a},__contentSet:function(b){return b instanceof a&&this.__options.contentCloning&&(b=b.clone(!0)),this.__Content=b,this._trigger({type:"updated",content:b}),this},__destroyError:function(){throw new Error("This tooltip has been destroyed and cannot execute your method call.")},__geometry:function(){var b=this,c=b._$origin,d=b._$origin.is("area");if(d){var e=b._$origin.parent().attr("name");c=a('img[usemap="#'+e+'"]')}var f=c[0].getBoundingClientRect(),g=a(h.window.document),i=a(h.window),j=c,k={available:{document:null,window:null},document:{size:{height:g.height(),width:g.width()}},window:{scroll:{left:h.window.scrollX||h.window.document.documentElement.scrollLeft,top:h.window.scrollY||h.window.document.documentElement.scrollTop},size:{height:i.height(),width:i.width()}},origin:{fixedLineage:!1,offset:{},size:{height:f.bottom-f.top,width:f.right-f.left},usemapImage:d?c[0]:null,windowOffset:{bottom:f.bottom,left:f.left,right:f.right,top:f.top}}};if(d){var l=b._$origin.attr("shape"),m=b._$origin.attr("coords");if(m&&(m=m.split(","),a.map(m,function(a,b){m[b]=parseInt(a)})),"default"!=l)switch(l){case"circle":var n=m[0],o=m[1],p=m[2],q=o-p,r=n-p;k.origin.size.height=2*p,k.origin.size.width=k.origin.size.height,k.origin.windowOffset.left+=r,k.origin.windowOffset.top+=q;break;case"rect":var s=m[0],t=m[1],u=m[2],v=m[3];k.origin.size.height=v-t,k.origin.size.width=u-s,k.origin.windowOffset.left+=s,k.origin.windowOffset.top+=t;break;case"poly":for(var w=0,x=0,y=0,z=0,A="even",B=0;B<m.length;B++){var C=m[B];"even"==A?(C>y&&(y=C,0===B&&(w=y)),w>C&&(w=C),A="odd"):(C>z&&(z=C,1==B&&(x=z)),x>C&&(x=C),A="even")}k.origin.size.height=z-x,k.origin.size.width=y-w,k.origin.windowOffset.left+=w,k.origin.windowOffset.top+=x}}var D=function(a){k.origin.size.height=a.height,k.origin.windowOffset.left=a.left,k.origin.windowOffset.top=a.top,k.origin.size.width=a.width};for(b._trigger({type:"geometry",edit:D,geometry:{height:k.origin.size.height,left:k.origin.windowOffset.left,top:k.origin.windowOffset.top,width:k.origin.size.width}}),k.origin.windowOffset.right=k.origin.windowOffset.left+k.origin.size.width,k.origin.windowOffset.bottom=k.origin.windowOffset.top+k.origin.size.height,k.origin.offset.left=k.origin.windowOffset.left+k.window.scroll.left,k.origin.offset.top=k.origin.windowOffset.top+k.window.scroll.top,k.origin.offset.bottom=k.origin.offset.top+k.origin.size.height,k.origin.offset.right=k.origin.offset.left+k.origin.size.width,k.available.document={bottom:{height:k.document.size.height-k.origin.offset.bottom,width:k.document.size.width},left:{height:k.document.size.height,width:k.origin.offset.left},right:{height:k.document.size.height,width:k.document.size.width-k.origin.offset.right},top:{height:k.origin.offset.top,width:k.document.size.width}},k.available.window={bottom:{height:Math.max(k.window.size.height-Math.max(k.origin.windowOffset.bottom,0),0),width:k.window.size.width},left:{height:k.window.size.height,width:Math.max(k.origin.windowOffset.left,0)},right:{height:k.window.size.height,width:Math.max(k.window.size.width-Math.max(k.origin.windowOffset.right,0),0)},top:{height:Math.max(k.origin.windowOffset.top,0),width:k.window.size.width}};"html"!=j[0].tagName.toLowerCase();){if("fixed"==j.css("position")){k.origin.fixedLineage=!0;break}j=j.parent()}return k},__optionsFormat:function(){return"number"==typeof this.__options.animationDuration&&(this.__options.animationDuration=[this.__options.animationDuration,this.__options.animationDuration]),"number"==typeof this.__options.delay&&(this.__options.delay=[this.__options.delay,this.__options.delay]),"number"==typeof this.__options.delayTouch&&(this.__options.delayTouch=[this.__options.delayTouch,this.__options.delayTouch]),"string"==typeof this.__options.theme&&(this.__options.theme=[this.__options.theme]),null===this.__options.parent?this.__options.parent=a(h.window.document.body):"string"==typeof this.__options.parent&&(this.__options.parent=a(this.__options.parent)),"hover"==this.__options.trigger?(this.__options.triggerOpen={mouseenter:!0,touchstart:!0},this.__options.triggerClose={mouseleave:!0,originClick:!0,touchleave:!0}):"click"==this.__options.trigger&&(this.__options.triggerOpen={click:!0,tap:!0},this.__options.triggerClose={click:!0,tap:!0}),this._trigger("options"),this},__prepareGC:function(){var b=this;return b.__options.selfDestruction?b.__garbageCollector=setInterval(function(){var c=(new Date).getTime();b.__touchEvents=a.grep(b.__touchEvents,function(a,b){return c-a.time>6e4}),d(b._$origin)||b.close(function(){b.destroy()})},2e4):clearInterval(b.__garbageCollector),b},__prepareOrigin:function(){var a=this;if(a._$origin.off("."+a.__namespace+"-triggerOpen"),h.hasTouchCapability&&a._$origin.on("touchstart."+a.__namespace+"-triggerOpen touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen",function(b){a._touchRecordEvent(b)}),a.__options.triggerOpen.click||a.__options.triggerOpen.tap&&h.hasTouchCapability){var b="";a.__options.triggerOpen.click&&(b+="click."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.tap&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&a._open(b)})}if(a.__options.triggerOpen.mouseenter||a.__options.triggerOpen.touchstart&&h.hasTouchCapability){var b="";a.__options.triggerOpen.mouseenter&&(b+="mouseenter."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.touchstart&&h.hasTouchCapability&&(b+="touchstart."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){!a._touchIsTouchEvent(b)&&a._touchIsEmulatedEvent(b)||(a.__pointerIsOverOrigin=!0,a._openShortly(b))})}if(a.__options.triggerClose.mouseleave||a.__options.triggerClose.touchleave&&h.hasTouchCapability){var b="";a.__options.triggerClose.mouseleave&&(b+="mouseleave."+a.__namespace+"-triggerOpen "),a.__options.triggerClose.touchleave&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&(a.__pointerIsOverOrigin=!1)})}return a},__prepareTooltip:function(){var b=this,c=b.__options.interactive?"auto":"";return b._$tooltip.attr("id",b.__namespace).css({"pointer-events":c,zIndex:b.__options.zIndex}),a.each(b.__previousThemes,function(a,c){b._$tooltip.removeClass(c)}),a.each(b.__options.theme,function(a,c){b._$tooltip.addClass(c)}),b.__previousThemes=a.merge([],b.__options.theme),b},__scrollHandler:function(b){var c=this;if(c.__options.triggerClose.scroll)c._close(b);else if(d(c._$origin)&&d(c._$tooltip)){if(b.target===h.window.document)c.__Geometry.origin.fixedLineage||c.__options.repositionOnScroll&&c.reposition(b);else{var e=c.__geometry(),f=!1;if("fixed"!=c._$origin.css("position")&&c.__$originParents.each(function(b,c){var d=a(c),g=d.css("overflow-x"),h=d.css("overflow-y");if("visible"!=g||"visible"!=h){var i=c.getBoundingClientRect();if("visible"!=g&&(e.origin.windowOffset.left<i.left||e.origin.windowOffset.right>i.right))return f=!0,!1;if("visible"!=h&&(e.origin.windowOffset.top<i.top||e.origin.windowOffset.bottom>i.bottom))return f=!0,!1}return"fixed"==d.css("position")?!1:void 0}),f)c._$tooltip.css("visibility","hidden");else if(c._$tooltip.css("visibility","visible"),c.__options.repositionOnScroll)c.reposition(b);else{var g=e.origin.offset.left-c.__Geometry.origin.offset.left,i=e.origin.offset.top-c.__Geometry.origin.offset.top;c._$tooltip.css({left:c.__lastPosition.coord.left+g,top:c.__lastPosition.coord.top+i})}}c._trigger({type:"scroll",event:b})}return c},__stateSet:function(a){return this.__state=a,this._trigger({type:"state",state:a}),this},__timeoutsClear:function(){return clearTimeout(this.__timeouts.open),this.__timeouts.open=null,a.each(this.__timeouts.close,function(a,b){clearTimeout(b)}),this.__timeouts.close=[],this},__trackerStart:function(){var a=this,b=a._$tooltip.find(".tooltipster-content");return a.__options.trackTooltip&&(a.__contentBcr=b[0].getBoundingClientRect()),a.__tracker=setInterval(function(){if(d(a._$origin)&&d(a._$tooltip)){if(a.__options.trackOrigin){var e=a.__geometry(),f=!1;c(e.origin.size,a.__Geometry.origin.size)&&(a.__Geometry.origin.fixedLineage?c(e.origin.windowOffset,a.__Geometry.origin.windowOffset)&&(f=!0):c(e.origin.offset,a.__Geometry.origin.offset)&&(f=!0)),f||(a.__options.triggerClose.mouseleave?a._close():a.reposition())}if(a.__options.trackTooltip){var g=b[0].getBoundingClientRect();g.height===a.__contentBcr.height&&g.width===a.__contentBcr.width||(a.reposition(),a.__contentBcr=g)}}else a._close()},a.__options.trackerInterval),a},_close:function(b,c,d){var e=this,f=!0;if(e._trigger({type:"close",event:b,stop:function(){f=!1}}),f||d){c&&e.__callbacks.close.push(c),e.__callbacks.open=[],e.__timeoutsClear();var g=function(){a.each(e.__callbacks.close,function(a,c){c.call(e,e,{event:b,origin:e._$origin[0]})}),e.__callbacks.close=[]};if("closed"!=e.__state){var i=!0,j=new Date,k=j.getTime(),l=k+e.__options.animationDuration[1];if("disappearing"==e.__state&&l>e.__closingTime&&(i=!1),i){e.__closingTime=l,"disappearing"!=e.__state&&e.__stateSet("disappearing");var m=function(){clearInterval(e.__tracker),e._trigger({type:"closing",event:b}),e._$tooltip.off("."+e.__namespace+"-triggerClose").removeClass("tooltipster-dying"),a(h.window).off("."+e.__namespace+"-triggerClose"),e.__$originParents.each(function(b,c){a(c).off("scroll."+e.__namespace+"-triggerClose")}),e.__$originParents=null,a(h.window.document.body).off("."+e.__namespace+"-triggerClose"),e._$origin.off("."+e.__namespace+"-triggerClose"),e._off("dismissable"),e.__stateSet("closed"),e._trigger({type:"after",event:b}),e.__options.functionAfter&&e.__options.functionAfter.call(e,e,{event:b,origin:e._$origin[0]}),g()};h.hasTransitions?(e._$tooltip.css({"-moz-animation-duration":e.__options.animationDuration[1]+"ms","-ms-animation-duration":e.__options.animationDuration[1]+"ms","-o-animation-duration":e.__options.animationDuration[1]+"ms","-webkit-animation-duration":e.__options.animationDuration[1]+"ms","animation-duration":e.__options.animationDuration[1]+"ms","transition-duration":e.__options.animationDuration[1]+"ms"}),e._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"),e.__options.animationDuration[1]>0&&e._$tooltip.delay(e.__options.animationDuration[1]),e._$tooltip.queue(m)):e._$tooltip.stop().fadeOut(e.__options.animationDuration[1],m)}}else g()}return e},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_open:function(b,c){var e=this;if(!e.__destroying&&d(e._$origin)&&e.__enabled){var f=!0;if("closed"==e.__state&&(e._trigger({type:"before",event:b,stop:function(){f=!1}}),f&&e.__options.functionBefore&&(f=e.__options.functionBefore.call(e,e,{event:b,origin:e._$origin[0]}))),f!==!1&&null!==e.__Content){c&&e.__callbacks.open.push(c),e.__callbacks.close=[],e.__timeoutsClear();var g,i=function(){"stable"!=e.__state&&e.__stateSet("stable"),a.each(e.__callbacks.open,function(a,b){b.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}),e.__callbacks.open=[]};if("closed"!==e.__state)g=0,"disappearing"===e.__state?(e.__stateSet("appearing"),h.hasTransitions?(e._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i)):e._$tooltip.stop().fadeIn(i)):"stable"==e.__state&&i();else{if(e.__stateSet("appearing"),g=e.__options.animationDuration[0],e.__contentInsert(),e.reposition(b,!0),h.hasTransitions?(e._$tooltip.addClass("tooltipster-"+e.__options.animation).addClass("tooltipster-initial").css({"-moz-animation-duration":e.__options.animationDuration[0]+"ms","-ms-animation-duration":e.__options.animationDuration[0]+"ms","-o-animation-duration":e.__options.animationDuration[0]+"ms","-webkit-animation-duration":e.__options.animationDuration[0]+"ms","animation-duration":e.__options.animationDuration[0]+"ms","transition-duration":e.__options.animationDuration[0]+"ms"}),setTimeout(function(){"closed"!=e.__state&&(e._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i))},0)):e._$tooltip.css("display","none").fadeIn(e.__options.animationDuration[0],i),e.__trackerStart(),a(h.window).on("resize."+e.__namespace+"-triggerClose",function(b){var c=a(document.activeElement);(c.is("input")||c.is("textarea"))&&a.contains(e._$tooltip[0],c[0])||e.reposition(b)}).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)}),e.__$originParents=e._$origin.parents(),e.__$originParents.each(function(b,c){a(c).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)})}),e.__options.triggerClose.mouseleave||e.__options.triggerClose.touchleave&&h.hasTouchCapability){e._on("dismissable",function(a){a.dismissable?a.delay?(m=setTimeout(function(){e._close(a.event)},a.delay),e.__timeouts.close.push(m)):e._close(a):clearTimeout(m)});var j=e._$origin,k="",l="",m=null;e.__options.interactive&&(j=j.add(e._$tooltip)),e.__options.triggerClose.mouseleave&&(k+="mouseenter."+e.__namespace+"-triggerClose ",l+="mouseleave."+e.__namespace+"-triggerClose "),e.__options.triggerClose.touchleave&&h.hasTouchCapability&&(k+="touchstart."+e.__namespace+"-triggerClose",l+="touchend."+e.__namespace+"-triggerClose touchcancel."+e.__namespace+"-triggerClose"),j.on(l,function(a){if(e._touchIsTouchEvent(a)||!e._touchIsEmulatedEvent(a)){var b="mouseleave"==a.type?e.__options.delay:e.__options.delayTouch;e._trigger({delay:b[1],dismissable:!0,event:a,type:"dismissable"})}}).on(k,function(a){!e._touchIsTouchEvent(a)&&e._touchIsEmulatedEvent(a)||e._trigger({dismissable:!1,event:a,type:"dismissable"})})}e.__options.triggerClose.originClick&&e._$origin.on("click."+e.__namespace+"-triggerClose",function(a){e._touchIsTouchEvent(a)||e._touchIsEmulatedEvent(a)||e._close(a)}),(e.__options.triggerClose.click||e.__options.triggerClose.tap&&h.hasTouchCapability)&&setTimeout(function(){if("closed"!=e.__state){var b="",c=a(h.window.document.body);e.__options.triggerClose.click&&(b+="click."+e.__namespace+"-triggerClose "),e.__options.triggerClose.tap&&h.hasTouchCapability&&(b+="touchend."+e.__namespace+"-triggerClose"),c.on(b,function(b){e._touchIsMeaningfulEvent(b)&&(e._touchRecordEvent(b),e.__options.interactive&&a.contains(e._$tooltip[0],b.target)||e._close(b))}),e.__options.triggerClose.tap&&h.hasTouchCapability&&c.on("touchstart."+e.__namespace+"-triggerClose",function(a){e._touchRecordEvent(a)})}},0),e._trigger("ready"),e.__options.functionReady&&e.__options.functionReady.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}if(e.__options.timer>0){var m=setTimeout(function(){e._close()},e.__options.timer+g);e.__timeouts.close.push(m)}}}return e},_openShortly:function(a){var b=this,c=!0;if("stable"!=b.__state&&"appearing"!=b.__state&&!b.__timeouts.open&&(b._trigger({type:"start",event:a,stop:function(){c=!1}}),c)){var d=0==a.type.indexOf("touch")?b.__options.delayTouch:b.__options.delay;d[0]?b.__timeouts.open=setTimeout(function(){b.__timeouts.open=null,b.__pointerIsOverOrigin&&b._touchIsMeaningfulEvent(a)?(b._trigger("startend"),b._open(a)):b._trigger("startcancel")},d[0]):(b._trigger("startend"),b._open(a))}return b},_optionsExtract:function(b,c){var d=this,e=a.extend(!0,{},c),f=d.__options[b];return f||(f={},a.each(c,function(a,b){var c=d.__options[a];void 0!==c&&(f[a]=c)})),a.each(e,function(b,c){void 0!==f[b]&&("object"!=typeof c||c instanceof Array||null==c||"object"!=typeof f[b]||f[b]instanceof Array||null==f[b]?e[b]=f[b]:a.extend(e[b],f[b]))}),e},_plug:function(b){var c=a.tooltipster._plugin(b);if(!c)throw new Error('The "'+b+'" plugin is not defined');return c.instance&&a.tooltipster.__bridge(c.instance,this,c.name),this},_touchIsEmulatedEvent:function(a){for(var b=!1,c=(new Date).getTime(),d=this.__touchEvents.length-1;d>=0;d--){var e=this.__touchEvents[d];if(!(c-e.time<500))break;e.target===a.target&&(b=!0)}return b},_touchIsMeaningfulEvent:function(a){return this._touchIsTouchEvent(a)&&!this._touchSwiped(a.target)||!this._touchIsTouchEvent(a)&&!this._touchIsEmulatedEvent(a)},_touchIsTouchEvent:function(a){return 0==a.type.indexOf("touch")},_touchRecordEvent:function(a){return this._touchIsTouchEvent(a)&&(a.time=(new Date).getTime(),this.__touchEvents.push(a)),this},_touchSwiped:function(a){for(var b=!1,c=this.__touchEvents.length-1;c>=0;c--){var d=this.__touchEvents[c];if("touchmove"==d.type){b=!0;break}if("touchstart"==d.type&&a===d.target)break}return b},_trigger:function(){var b=Array.prototype.slice.apply(arguments);return"string"==typeof b[0]&&(b[0]={type:b[0]}),b[0].instance=this,b[0].origin=this._$origin?this._$origin[0]:null,b[0].tooltip=this._$tooltip?this._$tooltip[0]:null,this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,b),a.tooltipster._trigger.apply(a.tooltipster,b),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,b),this},_unplug:function(b){var c=this;if(c[b]){var d=a.tooltipster._plugin(b);d.instance&&a.each(d.instance,function(a,d){c[a]&&c[a].bridged===c[b]&&delete c[a]}),c[b].__destroy&&c[b].__destroy(),delete c[b]}return c},close:function(a){return this.__destroyed?this.__destroyError():this._close(null,a),this},content:function(a){var b=this;if(void 0===a)return b.__Content;if(b.__destroyed)b.__destroyError();else if(b.__contentSet(a),null!==b.__Content){if("closed"!==b.__state&&(b.__contentInsert(),b.reposition(),b.__options.updateAnimation))if(h.hasTransitions){var c=b.__options.updateAnimation;b._$tooltip.addClass("tooltipster-update-"+c),setTimeout(function(){"closed"!=b.__state&&b._$tooltip.removeClass("tooltipster-update-"+c)},1e3)}else b._$tooltip.fadeTo(200,.5,function(){"closed"!=b.__state&&b._$tooltip.fadeTo(200,1)})}else b._close();return b},destroy:function(){var b=this;if(b.__destroyed)b.__destroyError();else{"closed"!=b.__state&&b.option("animationDuration",0)._close(null,null,!0),b._trigger("destroy"),b.__destroyed=!0,b._$origin.removeData(b.__namespace).off("."+b.__namespace+"-triggerOpen"),a(h.window.document.body).off("."+b.__namespace+"-triggerOpen");var c=b._$origin.data("tooltipster-ns");if(c)if(1===c.length){var d=null;"previous"==b.__options.restoration?d=b._$origin.data("tooltipster-initialTitle"):"current"==b.__options.restoration&&(d="string"==typeof b.__Content?b.__Content:a("<div></div>").append(b.__Content).html()),d&&b._$origin.attr("title",d),b._$origin.removeClass("tooltipstered"),b._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else c=a.grep(c,function(a,c){return a!==b.__namespace}),b._$origin.data("tooltipster-ns",c);b._trigger("destroyed"),b._off(),b.off(),b.__Content=null,b.__$emitterPrivate=null,b.__$emitterPublic=null,b.__options.parent=null,b._$origin=null,b._$tooltip=null,a.tooltipster.__instancesLatestArr=a.grep(a.tooltipster.__instancesLatestArr,function(a,c){return b!==a}),clearInterval(b.__garbageCollector)}return b},disable:function(){return this.__destroyed?(this.__destroyError(),this):(this._close(),this.__enabled=!1,this)},elementOrigin:function(){return this.__destroyed?void this.__destroyError():this._$origin[0]},elementTooltip:function(){return this._$tooltip?this._$tooltip[0]:null},enable:function(){return this.__enabled=!0,this},hide:function(a){return this.close(a)},instance:function(){return this},off:function(){return this.__destroyed||this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},open:function(a){return this.__destroyed?this.__destroyError():this._open(null,a),this},option:function(b,c){return void 0===c?this.__options[b]:(this.__destroyed?this.__destroyError():(this.__options[b]=c,this.__optionsFormat(),a.inArray(b,["trigger","triggerClose","triggerOpen"])>=0&&this.__prepareOrigin(),"selfDestruction"===b&&this.__prepareGC()),this)},reposition:function(a,b){var c=this;return c.__destroyed?c.__destroyError():"closed"!=c.__state&&d(c._$origin)&&(b||d(c._$tooltip))&&(b||c._$tooltip.detach(),c.__Geometry=c.__geometry(),c._trigger({type:"reposition",event:a,helper:{geo:c.__Geometry}})),c},show:function(a){return this.open(a)},status:function(){return{destroyed:this.__destroyed,enabled:this.__enabled,open:"closed"!==this.__state,state:this.__state}},triggerHandler:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.fn.tooltipster=function(){var b=Array.prototype.slice.apply(arguments),c="You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";if(0===this.length)return this;if("string"==typeof b[0]){var d="#*$~&";return this.each(function(){var e=a(this).data("tooltipster-ns"),f=e?a(this).data(e[0]):null;if(!f)throw new Error("You called Tooltipster's \""+b[0]+'" method on an uninitialized element');if("function"!=typeof f[b[0]])throw new Error('Unknown method "'+b[0]+'"');this.length>1&&"content"==b[0]&&(b[1]instanceof a||"object"==typeof b[1]&&null!=b[1]&&b[1].tagName)&&!f.__options.contentCloning&&f.__options.debug&&console.log(c);var g=f[b[0]](b[1],b[2]);return g!==f||"instance"===b[0]?(d=g,!1):void 0}),"#*$~&"!==d?d:this}a.tooltipster.__instancesLatestArr=[];var e=b[0]&&void 0!==b[0].multiple,g=e&&b[0].multiple||!e&&f.multiple,h=b[0]&&void 0!==b[0].content,i=h&&b[0].content||!h&&f.content,j=b[0]&&void 0!==b[0].contentCloning,k=j&&b[0].contentCloning||!j&&f.contentCloning,l=b[0]&&void 0!==b[0].debug,m=l&&b[0].debug||!l&&f.debug;return this.length>1&&(i instanceof a||"object"==typeof i&&null!=i&&i.tagName)&&!k&&m&&console.log(c),this.each(function(){var c=!1,d=a(this),e=d.data("tooltipster-ns"),f=null;e?g?c=!0:m&&(console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."),console.log(this)):c=!0,c&&(f=new a.Tooltipster(this,b[0]),e||(e=[]),e.push(f.__namespace),d.data("tooltipster-ns",e),d.data(f.__namespace,f),f.__options.functionInit&&f.__options.functionInit.call(f,f,{origin:this}),f._trigger("init")),a.tooltipster.__instancesLatestArr.push(f)}),this},b.prototype={__init:function(b){this.__$tooltip=b,this.__$tooltip.css({left:0,overflow:"hidden",position:"absolute",top:0}).find(".tooltipster-content").css("overflow","auto"),this.$container=a('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(h.window.document.body)},__forceRedraw:function(){var a=this.__$tooltip.parent();this.__$tooltip.detach(),this.__$tooltip.appendTo(a)},constrain:function(a,b){return this.constraints={width:a,height:b},this.__$tooltip.css({display:"block",height:"",overflow:"auto",width:a}),this},destroy:function(){this.__$tooltip.detach().find(".tooltipster-content").css({display:"",overflow:""}),this.$container.remove()},free:function(){return this.constraints=null,this.__$tooltip.css({display:"",height:"",overflow:"visible",width:""}),this},measure:function(){this.__forceRedraw();var a=this.__$tooltip[0].getBoundingClientRect(),b={size:{height:a.height||a.bottom-a.top,width:a.width||a.right-a.left}};if(this.constraints){var c=this.__$tooltip.find(".tooltipster-content"),d=this.__$tooltip.outerHeight(),e=c[0].getBoundingClientRect(),f={height:d<=this.constraints.height,width:a.width<=this.constraints.width&&e.width>=c[0].scrollWidth-1};b.fits=f.height&&f.width}return h.IE&&h.IE<=11&&b.size.width!==h.window.document.documentElement.clientWidth&&(b.size.width=Math.ceil(b.size.width)+1),b}};var j=navigator.userAgent.toLowerCase();-1!=j.indexOf("msie")?h.IE=parseInt(j.split("msie")[1]):-1!==j.toLowerCase().indexOf("trident")&&-1!==j.indexOf(" rv:11")?h.IE=11:-1!=j.toLowerCase().indexOf("edge/")&&(h.IE=parseInt(j.toLowerCase().split("edge/")[1]));var k="tooltipster.sideTip";return a.tooltipster._plugin({name:k,instance:{__defaults:function(){return{arrow:!0,distance:6,functionPosition:null,maxWidth:null,minIntersection:16,minWidth:0,position:null,side:"top",viewportAware:!0}},__init:function(a){var b=this;b.__instance=a,b.__namespace="tooltipster-sideTip-"+Math.round(1e6*Math.random()),b.__previousState="closed",b.__options,b.__optionsFormat(),b.__instance._on("state."+b.__namespace,function(a){"closed"==a.state?b.__close():"appearing"==a.state&&"closed"==b.__previousState&&b.__create(),b.__previousState=a.state}),b.__instance._on("options."+b.__namespace,function(){b.__optionsFormat()}),b.__instance._on("reposition."+b.__namespace,function(a){b.__reposition(a.event,a.helper)})},__close:function(){this.__instance.content()instanceof a&&this.__instance.content().detach(),this.__instance._$tooltip.remove(),this.__instance._$tooltip=null},__create:function(){var b=a('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');this.__options.arrow||b.find(".tooltipster-box").css("margin",0).end().find(".tooltipster-arrow").hide(),this.__options.minWidth&&b.css("min-width",this.__options.minWidth+"px"),this.__options.maxWidth&&b.css("max-width",this.__options.maxWidth+"px"),this.__instance._$tooltip=b,this.__instance._trigger("created");
},__destroy:function(){this.__instance._off("."+self.__namespace)},__optionsFormat:function(){var b=this;if(b.__options=b.__instance._optionsExtract(k,b.__defaults()),b.__options.position&&(b.__options.side=b.__options.position),"object"!=typeof b.__options.distance&&(b.__options.distance=[b.__options.distance]),b.__options.distance.length<4&&(void 0===b.__options.distance[1]&&(b.__options.distance[1]=b.__options.distance[0]),void 0===b.__options.distance[2]&&(b.__options.distance[2]=b.__options.distance[0]),void 0===b.__options.distance[3]&&(b.__options.distance[3]=b.__options.distance[1]),b.__options.distance={top:b.__options.distance[0],right:b.__options.distance[1],bottom:b.__options.distance[2],left:b.__options.distance[3]}),"string"==typeof b.__options.side){var c={top:"bottom",right:"left",bottom:"top",left:"right"};b.__options.side=[b.__options.side,c[b.__options.side]],"left"==b.__options.side[0]||"right"==b.__options.side[0]?b.__options.side.push("top","bottom"):b.__options.side.push("right","left")}6===a.tooltipster._env.IE&&b.__options.arrow!==!0&&(b.__options.arrow=!1)},__reposition:function(b,c){var d,e=this,f=e.__targetFind(c),g=[];e.__instance._$tooltip.detach();var h=e.__instance._$tooltip.clone(),i=a.tooltipster._getRuler(h),j=!1,k=e.__instance.option("animation");switch(k&&h.removeClass("tooltipster-"+k),a.each(["window","document"],function(d,k){var l=null;if(e.__instance._trigger({container:k,helper:c,satisfied:j,takeTest:function(a){l=a},results:g,type:"positionTest"}),1==l||0!=l&&0==j&&("window"!=k||e.__options.viewportAware))for(var d=0;d<e.__options.side.length;d++){var m={horizontal:0,vertical:0},n=e.__options.side[d];"top"==n||"bottom"==n?m.vertical=e.__options.distance[n]:m.horizontal=e.__options.distance[n],e.__sideChange(h,n),a.each(["natural","constrained"],function(a,d){if(l=null,e.__instance._trigger({container:k,event:b,helper:c,mode:d,results:g,satisfied:j,side:n,takeTest:function(a){l=a},type:"positionTest"}),1==l||0!=l&&0==j){var h={container:k,distance:m,fits:null,mode:d,outerSize:null,side:n,size:null,target:f[n],whole:null},o="natural"==d?i.free():i.constrain(c.geo.available[k][n].width-m.horizontal,c.geo.available[k][n].height-m.vertical),p=o.measure();if(h.size=p.size,h.outerSize={height:p.size.height+m.vertical,width:p.size.width+m.horizontal},"natural"==d?c.geo.available[k][n].width>=h.outerSize.width&&c.geo.available[k][n].height>=h.outerSize.height?h.fits=!0:h.fits=!1:h.fits=p.fits,"window"==k&&(h.fits?"top"==n||"bottom"==n?h.whole=c.geo.origin.windowOffset.right>=e.__options.minIntersection&&c.geo.window.size.width-c.geo.origin.windowOffset.left>=e.__options.minIntersection:h.whole=c.geo.origin.windowOffset.bottom>=e.__options.minIntersection&&c.geo.window.size.height-c.geo.origin.windowOffset.top>=e.__options.minIntersection:h.whole=!1),g.push(h),h.whole)j=!0;else if("natural"==h.mode&&(h.fits||h.size.width<=c.geo.available[k][n].width))return!1}})}}),e.__instance._trigger({edit:function(a){g=a},event:b,helper:c,results:g,type:"positionTested"}),g.sort(function(a,b){if(a.whole&&!b.whole)return-1;if(!a.whole&&b.whole)return 1;if(a.whole&&b.whole){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}if(a.fits&&!b.fits)return-1;if(!a.fits&&b.fits)return 1;if(a.fits&&b.fits){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}return"document"==a.container&&"bottom"==a.side&&"natural"==a.mode?-1:1}),d=g[0],d.coord={},d.side){case"left":case"right":d.coord.top=Math.floor(d.target-d.size.height/2);break;case"bottom":case"top":d.coord.left=Math.floor(d.target-d.size.width/2)}switch(d.side){case"left":d.coord.left=c.geo.origin.windowOffset.left-d.outerSize.width;break;case"right":d.coord.left=c.geo.origin.windowOffset.right+d.distance.horizontal;break;case"top":d.coord.top=c.geo.origin.windowOffset.top-d.outerSize.height;break;case"bottom":d.coord.top=c.geo.origin.windowOffset.bottom+d.distance.vertical}"window"==d.container?"top"==d.side||"bottom"==d.side?d.coord.left<0?c.geo.origin.windowOffset.right-this.__options.minIntersection>=0?d.coord.left=0:d.coord.left=c.geo.origin.windowOffset.right-this.__options.minIntersection-1:d.coord.left>c.geo.window.size.width-d.size.width&&(c.geo.origin.windowOffset.left+this.__options.minIntersection<=c.geo.window.size.width?d.coord.left=c.geo.window.size.width-d.size.width:d.coord.left=c.geo.origin.windowOffset.left+this.__options.minIntersection+1-d.size.width):d.coord.top<0?c.geo.origin.windowOffset.bottom-this.__options.minIntersection>=0?d.coord.top=0:d.coord.top=c.geo.origin.windowOffset.bottom-this.__options.minIntersection-1:d.coord.top>c.geo.window.size.height-d.size.height&&(c.geo.origin.windowOffset.top+this.__options.minIntersection<=c.geo.window.size.height?d.coord.top=c.geo.window.size.height-d.size.height:d.coord.top=c.geo.origin.windowOffset.top+this.__options.minIntersection+1-d.size.height):(d.coord.left>c.geo.window.size.width-d.size.width&&(d.coord.left=c.geo.window.size.width-d.size.width),d.coord.left<0&&(d.coord.left=0)),e.__sideChange(h,d.side),c.tooltipClone=h[0],c.tooltipParent=e.__instance.option("parent").parent[0],c.mode=d.mode,c.whole=d.whole,c.origin=e.__instance._$origin[0],c.tooltip=e.__instance._$tooltip[0],delete d.container,delete d.fits,delete d.mode,delete d.outerSize,delete d.whole,d.distance=d.distance.horizontal||d.distance.vertical;var l=a.extend(!0,{},d);if(e.__instance._trigger({edit:function(a){d=a},event:b,helper:c,position:l,type:"position"}),e.__options.functionPosition){var m=e.__options.functionPosition.call(e,e.__instance,c,l);m&&(d=m)}i.destroy();var n,o;"top"==d.side||"bottom"==d.side?(n={prop:"left",val:d.target-d.coord.left},o=d.size.width-this.__options.minIntersection):(n={prop:"top",val:d.target-d.coord.top},o=d.size.height-this.__options.minIntersection),n.val<this.__options.minIntersection?n.val=this.__options.minIntersection:n.val>o&&(n.val=o);var p;p=c.geo.origin.fixedLineage?c.geo.origin.windowOffset:{left:c.geo.origin.windowOffset.left+c.geo.window.scroll.left,top:c.geo.origin.windowOffset.top+c.geo.window.scroll.top},d.coord={left:p.left+(d.coord.left-c.geo.origin.windowOffset.left),top:p.top+(d.coord.top-c.geo.origin.windowOffset.top)},e.__sideChange(e.__instance._$tooltip,d.side),c.geo.origin.fixedLineage?e.__instance._$tooltip.css("position","fixed"):e.__instance._$tooltip.css("position",""),e.__instance._$tooltip.css({left:d.coord.left,top:d.coord.top,height:d.size.height,width:d.size.width}).find(".tooltipster-arrow").css({left:"",top:""}).css(n.prop,n.val),e.__instance._$tooltip.appendTo(e.__instance.option("parent")),e.__instance._trigger({type:"repositioned",event:b,position:d})},__sideChange:function(a,b){a.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-"+b)},__targetFind:function(a){var b={},c=this.__instance._$origin[0].getClientRects();if(c.length>1){var d=this.__instance._$origin.css("opacity");1==d&&(this.__instance._$origin.css("opacity",.99),c=this.__instance._$origin[0].getClientRects(),this.__instance._$origin.css("opacity",1))}if(c.length<2)b.top=Math.floor(a.geo.origin.windowOffset.left+a.geo.origin.size.width/2),b.bottom=b.top,b.left=Math.floor(a.geo.origin.windowOffset.top+a.geo.origin.size.height/2),b.right=b.left;else{var e=c[0];b.top=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil(c.length/2)-1]:c[0],b.right=Math.floor(e.top+(e.bottom-e.top)/2),e=c[c.length-1],b.bottom=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil((c.length+1)/2)-1]:c[c.length-1],b.left=Math.floor(e.top+(e.bottom-e.top)/2)}return b}}}),a});

(function(deparam){
    if (typeof require === 'function' && typeof exports === 'object' && typeof module === 'object') {
        try {
            var jquery = require('jquery');
        } catch (e) {
        }
        module.exports = deparam(jquery);
    } else if (typeof define === 'function' && define.amd){
        define(['jquery'], function(jquery){
            return deparam(jquery);
        });
    } else {
        var global;
        try {
          global = (false || eval)('this'); // best cross-browser way to determine global for < ES5
        } catch (e) {
          global = window; // fails only if browser (https://developer.mozilla.org/en-US/docs/Web/Security/CSP/CSP_policy_directives)
        }
        global.deparam = deparam(global.jQuery); // assume jQuery is in global namespace
    }
})(function ($) {
    var deparam = function( params, coerce ) {
        var obj = {},
        coerce_types = { 'true': !0, 'false': !1, 'null': null };

        // If params is an empty string or otherwise falsy, return obj.
        if (!params) {
            return obj;
        }

        // Iterate over all name=value pairs.
        params.replace(/\+/g, ' ').split('&').forEach(function(v){
            var param = v.split( '=' ),
            key = decodeURIComponent( param[0] ),
            val,
            cur = obj,
            i = 0,

            // If key is more complex than 'foo', like 'a[]' or 'a[b][c]', split it
            // into its component parts.
            keys = key.split( '][' ),
            keys_last = keys.length - 1;

            // If the first keys part contains [ and the last ends with ], then []
            // are correctly balanced.
            if ( /\[/.test( keys[0] ) && /\]$/.test( keys[ keys_last ] ) ) {
                // Remove the trailing ] from the last keys part.
                keys[ keys_last ] = keys[ keys_last ].replace( /\]$/, '' );

                // Split first keys part into two parts on the [ and add them back onto
                // the beginning of the keys array.
                keys = keys.shift().split('[').concat( keys );

                keys_last = keys.length - 1;
            } else {
                // Basic 'foo' style key.
                keys_last = 0;
            }

            // Are we dealing with a name=value pair, or just a name?
            if ( param.length === 2 ) {
                val = decodeURIComponent( param[1] );

                // Coerce values.
                if ( coerce ) {
                    val = val && !isNaN(val) && ((+val + '') === val) ? +val        // number
                    : val === 'undefined'                       ? undefined         // undefined
                    : coerce_types[val] !== undefined           ? coerce_types[val] // true, false, null
                    : val;                                                          // string
                }

                if ( keys_last ) {
                    // Complex key, build deep object structure based on a few rules:
                    // * The 'cur' pointer starts at the object top-level.
                    // * [] = array push (n is set to array length), [n] = array if n is
                    //   numeric, otherwise object.
                    // * If at the last keys part, set the value.
                    // * For each keys part, if the current level is undefined create an
                    //   object or array based on the type of the next keys part.
                    // * Move the 'cur' pointer to the next level.
                    // * Rinse & repeat.
                    for ( ; i <= keys_last; i++ ) {
                        key = keys[i] === '' ? cur.length : keys[i];
                        cur = cur[key] = i < keys_last
                        ? cur[key] || ( keys[i+1] && isNaN( keys[i+1] ) ? {} : [] )
                        : val;
                    }

                } else {
                    // Simple key, even simpler rules, since only scalars and shallow
                    // arrays are allowed.

                    if ( Object.prototype.toString.call( obj[key] ) === '[object Array]' ) {
                        // val is already an array, so push on the next value.
                        obj[key].push( val );

                    } else if ( {}.hasOwnProperty.call(obj, key) ) {
                        // val isn't an array, but since a second value has been specified,
                        // convert val into an array.
                        obj[key] = [ obj[key], val ];

                    } else {
                        // val is a scalar.
                        obj[key] = val;
                    }
                }

            } else if ( key ) {
                // No value was defined, so set something meaningful.
                obj[key] = coerce
                ? undefined
                : '';
            }
        });

        return obj;
    };
    if ($) {
      $.prototype.deparam = $.deparam = deparam;
    }
    return deparam;
});


/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.0
 */
;(function(l){'use strict';l(['jquery'],function($){var k=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};k.defaults={axis:'xy',duration:0,limit:true};function isWin(a){return!a.nodeName||$.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!==-1}$.fn.scrollTo=function(f,g,h){if(typeof g==='object'){h=g;g=0}if(typeof h==='function'){h={onAfter:h}}if(f==='max'){f=9e9}h=$.extend({},k.defaults,h);g=g||h.duration;var j=h.queue&&h.axis.length>1;if(j){g/=2}h.offset=both(h.offset);h.over=both(h.over);return this.each(function(){if(f===null)return;var d=isWin(this),elem=d?this.contentWindow||window:this,$elem=$(elem),targ=f,attr={},toff;switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break}targ=d?$(targ):$(targ,elem);if(!targ.length)return;case'object':if(targ.is||targ.style){toff=(targ=$(targ)).offset()}}var e=$.isFunction(h.offset)&&h.offset(elem,targ)||h.offset;$.each(h.axis.split(''),function(i,a){var b=a==='x'?'Left':'Top',pos=b.toLowerCase(),key='scroll'+b,prev=$elem[key](),max=k.max(elem,a);if(toff){attr[key]=toff[pos]+(d?0:prev-$elem.offset()[pos]);if(h.margin){attr[key]-=parseInt(targ.css('margin'+b),10)||0;attr[key]-=parseInt(targ.css('border'+b+'Width'),10)||0}attr[key]+=e[pos]||0;if(h.over[pos]){attr[key]+=targ[a==='x'?'width':'height']()*h.over[pos]}}else{var c=targ[pos];attr[key]=c.slice&&c.slice(-1)==='%'?parseFloat(c)/100*max:c}if(h.limit&&/^\d+$/.test(attr[key])){attr[key]=attr[key]<=0?0:Math.min(attr[key],max)}if(!i&&h.axis.length>1){if(prev===attr[key]){attr={}}else if(j){animate(h.onAfterFirst);attr={}}}});animate(h.onAfter);function animate(a){var b=$.extend({},h,{queue:true,duration:g,complete:a&&function(){a.call(elem,targ,h)}});$elem.animate(attr,b)}})};k.max=function(a,b){var c=b==='x'?'Width':'Height',scroll='scroll'+c;if(!isWin(a))return a[scroll]-$(a)[c.toLowerCase()]();var d='client'+c,doc=a.ownerDocument||a.document,html=doc.documentElement,body=doc.body;return Math.max(html[scroll],body[scroll])-Math.min(html[d],body[d])};function both(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(t){return $(t.elem)[t.prop]()},set:function(t){var a=this.get(t);if(t.options.interrupt&&t._last&&t._last!==a){return $(t.elem).stop()}var b=Math.round(t.now);if(a!==b){$(t.elem)[t.prop](b);t._last=this.get(t)}}};return k})}(typeof define==='function'&&define.amd?define:function(a,b){'use strict';if(typeof module!=='undefined'&&module.exports){module.exports=b(require('jquery'))}else{b(jQuery)}}));


/*
 * jQuery JSONP Core Plugin 2.4.0 (2012-08-21)
 *
 * https://github.com/jaubourg/jquery-jsonp
 *
 * Copyright (c) 2012 Julian Aubourg
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */
( function( $ ) {

	// ###################### UTILITIES ##

	// Noop
	function noop() {
	}

	// Generic callback
	function genericCallback( data ) {
		lastValue = [ data ];
	}

	// Call if defined
	function callIfDefined( method , object , parameters ) {
		return method && method.apply && method.apply( object.context || object , parameters );
	}

	// Give joining character given url
	function qMarkOrAmp( url ) {
		return /\?/ .test( url ) ? "&" : "?";
	}

	var // String constants (for better minification)
		STR_ASYNC = "async",
		STR_CHARSET = "charset",
		STR_EMPTY = "",
		STR_ERROR = "error",
		STR_INSERT_BEFORE = "insertBefore",
		STR_JQUERY_JSONP = "_jqjsp",
		STR_ON = "on",
		STR_ON_CLICK = STR_ON + "click",
		STR_ON_ERROR = STR_ON + STR_ERROR,
		STR_ON_LOAD = STR_ON + "load",
		STR_ON_READY_STATE_CHANGE = STR_ON + "readystatechange",
		STR_READY_STATE = "readyState",
		STR_REMOVE_CHILD = "removeChild",
		STR_SCRIPT_TAG = "<script>",
		STR_SUCCESS = "success",
		STR_TIMEOUT = "timeout",

		// Window
		win = window,
		// Deferred
		Deferred = $.Deferred,
		// Head element
		head = $( "head" )[ 0 ] || document.documentElement,
		// Page cache
		pageCache = {},
		// Counter
		count = 0,
		// Last returned value
		lastValue,

		// ###################### DEFAULT OPTIONS ##
		xOptionsDefaults = {
			//beforeSend: undefined,
			//cache: false,
			callback: STR_JQUERY_JSONP,
			//callbackParameter: undefined,
			//charset: undefined,
			//complete: undefined,
			//context: undefined,
			//data: "",
			//dataFilter: undefined,
			//error: undefined,
			//pageCache: false,
			//success: undefined,
			//timeout: 0,
			//traditional: false,
			url: location.href
		},

		// opera demands sniffing :/
		opera = win.opera,

		// IE < 10
		oldIE = !!$( "<div>" ).html( "<!--[if IE]><i><![endif]-->" ).find("i").length;

	// ###################### MAIN FUNCTION ##
	function jsonp( xOptions ) {

		// Build data with default
		xOptions = $.extend( {} , xOptionsDefaults , xOptions );

		// References to xOptions members (for better minification)
		var successCallback = xOptions.success,
			errorCallback = xOptions.error,
			completeCallback = xOptions.complete,
			dataFilter = xOptions.dataFilter,
			callbackParameter = xOptions.callbackParameter,
			successCallbackName = xOptions.callback,
			cacheFlag = xOptions.cache,
			pageCacheFlag = xOptions.pageCache,
			charset = xOptions.charset,
			url = xOptions.url,
			data = xOptions.data,
			timeout = xOptions.timeout,
			pageCached,

			// Abort/done flag
			done = 0,

			// Life-cycle functions
			cleanUp = noop,

			// Support vars
			supportOnload,
			supportOnreadystatechange,

			// Request execution vars
			firstChild,
			script,
			scriptAfter,
			timeoutTimer;

		// If we have Deferreds:
		// - substitute callbacks
		// - promote xOptions to a promise
		Deferred && Deferred(function( defer ) {
			defer.done( successCallback ).fail( errorCallback );
			successCallback = defer.resolve;
			errorCallback = defer.reject;
		}).promise( xOptions );

		// Create the abort method
		xOptions.abort = function() {
			!( done++ ) && cleanUp();
		};

		// Call beforeSend if provided (early abort if false returned)
		if ( callIfDefined( xOptions.beforeSend , xOptions , [ xOptions ] ) === !1 || done ) {
			return xOptions;
		}

		// Control entries
		url = url || STR_EMPTY;
		data = data ? ( (typeof data) == "string" ? data : $.param( data , xOptions.traditional ) ) : STR_EMPTY;

		// Build final url
		url += data ? ( qMarkOrAmp( url ) + data ) : STR_EMPTY;

		// Add callback parameter if provided as option
		callbackParameter && ( url += qMarkOrAmp( url ) + encodeURIComponent( callbackParameter ) + "=?" );

		// Add anticache parameter if needed
		!cacheFlag && !pageCacheFlag && ( url += qMarkOrAmp( url ) + "_" + ( new Date() ).getTime() + "=" );

		// Replace last ? by callback parameter
		url = url.replace( /=\?(&|$)/ , "=" + successCallbackName + "$1" );

		// Success notifier
		function notifySuccess( json ) {

			if ( !( done++ ) ) {

				cleanUp();
				// Pagecache if needed
				pageCacheFlag && ( pageCache [ url ] = { s: [ json ] } );
				// Apply the data filter if provided
				dataFilter && ( json = dataFilter.apply( xOptions , [ json ] ) );
				// Call success then complete
				callIfDefined( successCallback , xOptions , [ json , STR_SUCCESS, xOptions ] );
				callIfDefined( completeCallback , xOptions , [ xOptions , STR_SUCCESS ] );

			}
		}

		// Error notifier
		function notifyError( type ) {

			if ( !( done++ ) ) {

				// Clean up
				cleanUp();
				// If pure error (not timeout), cache if needed
				pageCacheFlag && type != STR_TIMEOUT && ( pageCache[ url ] = type );
				// Call error then complete
				callIfDefined( errorCallback , xOptions , [ xOptions , type ] );
				callIfDefined( completeCallback , xOptions , [ xOptions , type ] );

			}
		}

		// Check page cache
		if ( pageCacheFlag && ( pageCached = pageCache[ url ] ) ) {

			pageCached.s ? notifySuccess( pageCached.s[ 0 ] ) : notifyError( pageCached );

		} else {

			// Install the generic callback
			// (BEWARE: global namespace pollution ahoy)
			win[ successCallbackName ] = genericCallback;

			// Create the script tag
			script = $( STR_SCRIPT_TAG )[ 0 ];
			script.id = STR_JQUERY_JSONP + count++;

			// Set charset if provided
			if ( charset ) {
				script[ STR_CHARSET ] = charset;
			}

			opera && opera.version() < 11.60 ?
				// onerror is not supported: do not set as async and assume in-order execution.
				// Add a trailing script to emulate the event
				( ( scriptAfter = $( STR_SCRIPT_TAG )[ 0 ] ).text = "document.getElementById('" + script.id + "')." + STR_ON_ERROR + "()" )
			:
				// onerror is supported: set the script as async to avoid requests blocking each others
				( script[ STR_ASYNC ] = STR_ASYNC )

			;

			// Internet Explorer: event/htmlFor trick
			if ( oldIE ) {
				script.htmlFor = script.id;
				script.event = STR_ON_CLICK;
			}

			// Attached event handlers
			script[ STR_ON_LOAD ] = script[ STR_ON_ERROR ] = script[ STR_ON_READY_STATE_CHANGE ] = function ( result ) {

				// Test readyState if it exists
				if ( !script[ STR_READY_STATE ] || !/i/.test( script[ STR_READY_STATE ] ) ) {

					try {

						script[ STR_ON_CLICK ] && script[ STR_ON_CLICK ]();

					} catch( _ ) {}

					result = lastValue;
					lastValue = 0;
					result ? notifySuccess( result[ 0 ] ) : notifyError( STR_ERROR );

				}
			};

			// Set source
			script.src = url;

			// Re-declare cleanUp function
			cleanUp = function( i ) {
				timeoutTimer && clearTimeout( timeoutTimer );
				script[ STR_ON_READY_STATE_CHANGE ] = script[ STR_ON_LOAD ] = script[ STR_ON_ERROR ] = null;
				head[ STR_REMOVE_CHILD ]( script );
				scriptAfter && head[ STR_REMOVE_CHILD ]( scriptAfter );
			};

			// Append main script
			head[ STR_INSERT_BEFORE ]( script , ( firstChild = head.firstChild ) );

			// Append trailing script if needed
			scriptAfter && head[ STR_INSERT_BEFORE ]( scriptAfter , firstChild );

			// If a timeout is needed, install it
			timeoutTimer = timeout > 0 && setTimeout( function() {
				notifyError( STR_TIMEOUT );
			} , timeout );

		}

		return xOptions;
	}

	// ###################### SETUP FUNCTION ##
	jsonp.setup = function( xOptions ) {
		$.extend( xOptionsDefaults , xOptions );
	};

	// ###################### INSTALL in jQuery ##
	$.jsonp = jsonp;

} )( jQuery );


/**
 * jQuery alterClass plugin
 *
 * Remove element classes with wildcard matching. Optionally add classes:
 *   $( '#foo' ).alterClass( 'foo-* bar-*', 'foobar' )
 *
 * Copyright (c) 2011 Pete Boere (the-echoplex.net)
 * Free under terms of the MIT license: http://www.opensource.org/licenses/mit-license.php
 *
 */
(function ( $ ) {
	
$.fn.alterClass = function ( removals, additions ) {
	
	var self = this;
	
	if ( removals.indexOf( '*' ) === -1 ) {
		// Use native jQuery methods if there is no wildcard matching
		self.removeClass( removals );
		return !additions ? self : self.addClass( additions );
	}

	var patt = new RegExp( '\\s' + 
			removals.
				replace( /\*/g, '[A-Za-z0-9-_]+' ).
				split( ' ' ).
				join( '\\s|\\s' ) + 
			'\\s', 'g' );

	self.each( function ( i, it ) {
		var cn = ' ' + it.className + ' ';
		while ( patt.test( cn ) ) {
			cn = cn.replace( patt, ' ' );
		}
		it.className = $.trim( cn );
	});

	return !additions ? self : self.addClass( additions );
};

})( jQuery );

//QueryStringRouter - designed by Maciej Sawicki documented on https://github.com/maciejsaw/query-string-router

var QueryStringRouter = (function() {

	//decode query string
	function getQueryStringParams() {
		return deparam(window.location.search.substring(1));
	}

	function getQueryStringParam(key) {
		return deparam(window.location.search.substring(1))[key];
	} 

	//we diff against the previous params, so that we can remove the params that are not present
	//in the query string from the reactive params
	var previousQueryStringParams = {};
	function processQueryStringParams() {
		var queryStringParams = getQueryStringParams();

		//check what previous params are not present in the new query string
		$.each(previousQueryStringParams, function(key, value) {
			if (typeof queryStringParams[key] == 'undefined') {
				$(document).trigger('QueryStringRouter__'+key+'__paramChanged');
			}
		});

		$.each(queryStringParams, function(key, value) {
			if (queryStringParams[key] !== previousQueryStringParams[key]) { //only trigger event if param changed
				$(document).trigger('QueryStringRouter__'+key+'__paramChanged');
			}
		});

		previousQueryStringParams = queryStringParams;
	}

	//when document loads
	processQueryStringParams();

	var popstateDebouncingTimer; //needed to fix browsers not handling well multiple popstates at once
	$(window).on('popstate', function() {
		clearTimeout(popstateDebouncingTimer);
		popstateDebouncingTimer = setTimeout(function() {
			processQueryStringParams();	
		}, 10);
	});

	function setParam(key, value, options) {
		var queryStringParams = getQueryStringParams();

		if (queryStringParams[key] !== value) {
			queryStringParams[key] = value;
			var newQueryString = $.param(queryStringParams);

			options = options || {};
			if (options.doNotCreateHistoryState === true) {
				window.history.replaceState('','', '?'+newQueryString);
			} else if (options.isInModal === true) {
				var calculateNumberOfPreviousNavigationStepsInModal = function() {
					var number = getNumberOfPreviousNavigationStepsInModal();
					number = number + 1;
					return number;
				};

				window.history.pushState({numberOfPreviousNavigationStepsInModal: calculateNumberOfPreviousNavigationStepsInModal()},'', '?'+newQueryString);
			} else {
				window.history.pushState('','', '?'+newQueryString);
			}

			$(window).trigger('popstate');
		}
		
	}

	function goBackBeforeModal() {
		var numberOfStepsToGoBack = getNumberOfPreviousNavigationStepsInModal();
		if (numberOfStepsToGoBack >= 1) {
			window.history.go(-numberOfStepsToGoBack - 1);
		}
	}

	function removeParam(key, options) {
		var queryStringParams = getQueryStringParams();
		if (typeof queryStringParams[key] !== 'undefined') {
			delete queryStringParams[key];

			var newQueryString = $.param(queryStringParams);

			options = options || {};
			if (options.doNotCreateHistoryState === true) {
				window.history.replaceState('','', '?'+newQueryString);
			} else {
				window.history.pushState('','', '?'+newQueryString);
			}

			$(window).trigger('popstate');  
		}
	}

	function setFreshParams(newParamsObj, options) {
		var newQueryString = $.param(newParamsObj);

		options = options || {};
		if (options.doNotCreateHistoryState === true) {
			window.history.replaceState('','', '?'+newQueryString);
		} else {
			window.history.pushState('','', '?'+newQueryString);
		}
		$(window).trigger('popstate');
	}

	var actionsOnParamChange = {};
	function onParamChange(key, actionFunction) {
		$(document).on('QueryStringRouter__'+key+'__paramChanged', function(event) {
			var paramsObject = getQueryStringParams();
			var value = paramsObject[key];
			console.log('query string param changed - '+key+' '+value);
			actionFunction(value);
			console.log(value);
		});

		//store the action on param in a separate array, so that we can retrigger this route manually
		//because this might be needed for ajax loaded content etc.
		if (typeof actionsOnParamChange[key] === 'undefined') {
			actionsOnParamChange[key] = [];
		}
		actionsOnParamChange[key].push(actionFunction);

		//when the onParamChanged is being defined, also retrigger the state
		retriggerOnParamChange(key);
	}

	function retriggerOnParamChange(key) {
		var param = getQueryStringParam(key);
		var arrayOfFunctionsAssociatedWithThisParam = actionsOnParamChange[key];
		$.each(arrayOfFunctionsAssociatedWithThisParam, function(index, value) {
			value(param);
		});
	}

	function retriggerOnParamChangeForAll() {
		$.each(actionsOnParamChange, function(key, value) {
			retriggerOnParamChange(key);
		});
	}

	function setDefaultRootParams(paramsObjects) {
		$(document).ready(function() {
			if (window.location.pathname === "/" & window.location.search === "") {
				setFreshParams(paramsObjects, {doNotCreateHistoryState: true});
			}
		});
	}

	function getNumberOfPreviousNavigationStepsInModal() {
		if (window.history && window.history.state) {
			if (typeof window.history.state.numberOfPreviousNavigationStepsInModal === 'number') {
				return window.history.state.numberOfPreviousNavigationStepsInModal;
			} else {
				return 0;
			}
		}
	}

	return {
		setParam: setParam,
		getParam: getQueryStringParam,
		getAllParams: getQueryStringParams,
		setFreshParams: setFreshParams,
		setDefaultRootParams: setDefaultRootParams,
		onParamChange: onParamChange,
		retriggerOnParamChange: retriggerOnParamChange,
		retriggerOnParamChangeForAll: retriggerOnParamChangeForAll,
		removeParam: removeParam,
		version: '21',
		goBackBeforeModal: goBackBeforeModal,
		getNumberOfPreviousNavigationStepsInModal: getNumberOfPreviousNavigationStepsInModal,
		releaseNotes: {
			v22: 'added optional counting of states inside modal and ability to go back before modal',
			v21: 'only fire events when param changed',
			v2: 'removed Meteor and uses simple jQuery events',
		}
	};

})();

var ReactiveLocalStorage = (function() {

	var paramsString; //this will be a string containing params to save in local storage

	function isLocalStorageNameSupported() {
	    var testKey = 'test', storage = window.sessionStorage;
	    try 
	    {
	        storage.setItem(testKey, '1');
	        storage.removeItem(testKey);
	        return true;
	    } 
	    catch (error) 
	    {
	    	console.error('Local Storage is not working in Safari incognito mode');
	        return false;
	    }
	}

	//the condition is to degrade to regular variables if localStorage is not supported,
	//especially happens in Safari iOS incognito mode
	var saveParamObjectToLocalStorageAsString;
	if ( isLocalStorageNameSupported() ) {
		saveParamObjectToLocalStorageAsString = function(paramsObject) {
			paramsString = $.param(paramsObject);
			localStorage.setItem('paramsString', paramsString);
		};
		checkIfParamsAreAlreadyStoredInLocalStorage();
	} else {
		saveParamObjectToLocalStorageAsString = function(paramsObject) {
			paramsString = $.param(paramsObject);
		};
		var paramsObject = {};
		paramsString = "";
	}

	function checkIfParamsAreAlreadyStoredInLocalStorage() {
		if (typeof localStorage.getItem('paramsString') == 'undefined' || localStorage.getItem('paramsString') == null) {
			var paramsObject = {};
			saveParamObjectToLocalStorageAsString(paramsObject);
		} else {
			paramsString = localStorage.getItem('paramsString');
		}
	}

	//at the beginning, check if params are stored in local storage
	// if (typeof localStorage.getItem('paramsString') == 'undefined' || localStorage.getItem('paramsString') == null) {
	// 	var paramsObject = {};
	// 	saveParamObjectToLocalStorageAsString(paramsObject);
	// } else {
	// 	paramsString = localStorage.getItem('paramsString');
	// }

	function getParam(key) {
		//this return only values, not direct access to paramsObject
		//that's why we deparam here
		return deparam(paramsString)[key]; 
	}

	function getAllParams() {
		return deparam(paramsString);
	}

	function setParam(key, value, options) {
		options = options || {};

		var paramsObject = deparam(paramsString);

		if (paramsObject[key] !== value) {
			paramsObject[key] = value;
			saveParamObjectToLocalStorageAsString(paramsObject);
			$(document).trigger('reactiveLocalStorage__'+key+'__paramChanged'); 
		}

	}

	function setDefaultParam(key, value) {
		var paramsObject = deparam(paramsString);

		if (typeof paramsObject[key] == 'undefined') {
			setParam(key, value); 
		}
	}

	function appendToBeginningOfTheArray(paramNameThatContainsArray, objectToAppend) {
		var array = getParam(paramNameThatContainsArray);

		if (typeof array === 'undefined') {
			array = [];
		}

		array.unshift(objectToAppend);

		setParam(paramNameThatContainsArray, array);
	}

	function appendToArray(paramNameThatContainsArray, objectToAppend) {
		var array = getParam(paramNameThatContainsArray);

		if (typeof array === 'undefined') {
			array = [];
		}

		array.push(objectToAppend);

		setParam(paramNameThatContainsArray, array);
	}

	function removeElementFromArrayXWithIdY(paramNameThatContainsArray, idThatShouldBeRemoved) {
		var array = getParam(paramNameThatContainsArray);

		array = $.grep(array, function(elementOfArray, indexInArray){
			return elementOfArray.id != idThatShouldBeRemoved;
		});

		setParam(paramNameThatContainsArray, array);
	}

	function updateObjectInArray(paramNameThatContainsArray, options) {
		var array = getParam(paramNameThatContainsArray);

		//this is to show the schema of options here in code
		var idToLookFor = options.findObjectWithId;
		var propertyToUpdate = options.propertyToUpdate;
		var newValue = options.newValue;

		$.grep(array, function(elementOfArray, indexInArray){
			if (elementOfArray['id'] === idToLookFor) {
				elementOfArray[propertyToUpdate] = newValue;
			}
		});

		setParam(paramNameThatContainsArray, array);
	}

	function findInArrayXObjectWithPropertyYMatchingZ(paramNameThatContainsArray, objectPropertyToSearchIn, propertyValueThatShouldMatch) {
		var array = getParam(paramNameThatContainsArray);

		if ($.isArray(array)) {
			var filteredData = $.grep(array, function(elementOfArray, indexInArray){
				return elementOfArray[objectPropertyToSearchIn] === propertyValueThatShouldMatch;
			});
			if (filteredData.length > 0) {
				return filteredData[0];
			} else {
				return [];
			}
		} else {
			return [];
		}

	}

	function findInArrayXObjectWithIdY(paramNameWithArray, idThatShouldMatch) {
		return findInArrayXObjectWithPropertyYMatchingZ(paramNameWithArray, 'id', idThatShouldMatch);
	}

	function removeParam(key, options) {
		var paramsObject = deparam(paramsString);

		options = options || {};

		if (typeof paramsObject[key] !== 'undefined') {
			delete paramsObject[key];
			saveParamObjectToLocalStorageAsString(paramsObject);
			$(document).trigger('reactiveLocalStorage__'+key+'__paramChanged'); 
		}
	}

	function setFreshParams(newParamsObj) {
		var paramsObject = deparam(paramsString);
		saveParamObjectToLocalStorageAsString(paramsObject);
		retriggerOnParamChangeForAll();
	}

	var actionsOnParamChange = {};
	function onParamChange(key, actionFunction, options) {
		$(document).on('reactiveLocalStorage__'+key+'__paramChanged', function(event) {
			var paramsObject = deparam(paramsString);
			var value = paramsObject[key];
			actionFunction(value);
		});

		//store the action on param in a separate array, so that we can retrigger this route manually
		//because this might be needed for ajax loaded content etc.
		if (typeof actionsOnParamChange[key] === 'undefined') {
			actionsOnParamChange[key] = [];
		}
		actionsOnParamChange[key].push(actionFunction);
	}

	function retriggerOnParamChange(key) {
		var paramsObject = deparam(paramsString);
		var param = paramsObject[key];
		var arrayOfFunctionsAssociatedWithThisParam = actionsOnParamChange[key];
		$.each(arrayOfFunctionsAssociatedWithThisParam, function(index, value) {
			value(param);
		});
	}

	function retriggerOnParamChangeForAll() {
		$.each(actionsOnParamChange, function(key, value) {
			retriggerOnParamChange(key);
		});
	}

	return {
		varsion: {
			version: 4,
			versionNotes: {
				5: 'Removed default retrigger on param change while creating the onParamChage',
				4: 'Added options to disable retrigger on param change while creating onParamChange',
				3: 'Added fallback for Safari incognito not supporting localStorage',
			},
		},
		setParam: setParam,
		getAllParams: getAllParams,
		setFreshParams: setFreshParams,
		setDefaultParam: setDefaultParam,
		getParam: getParam,
		onParamChange: onParamChange,
		retriggerOnParamChange: retriggerOnParamChange,
		retriggerOnParamChangeForAll: retriggerOnParamChangeForAll,
		removeParam: removeParam,
		appendToBeginningOfTheArray: appendToBeginningOfTheArray,
		appendToArray: appendToArray,
		removeElementFromArrayXWithIdY: removeElementFromArrayXWithIdY,
		findInArrayXObjectWithIdY: findInArrayXObjectWithIdY,
		findInArrayXObjectWithPropertyYMatchingZ: findInArrayXObjectWithPropertyYMatchingZ,
		updateObjectInArray: updateObjectInArray,
	};

})();

//EXAMPLES:

// ReactiveLocalStorage.onParamChange('openModal' , function(value) {
// 	if (value === 'true') {
// 		console.log('modal will be open!');
// 	} else {
// 		console.log('hide  modal!');
// 	}
// });

// ReactiveLocalStorage.onParamChange('activeTab' , function(value) {
// 	if (value === 'comments') {
// 		console.log('switch tab to comments');
// 	} else if (value === 'products') {
// 		console.log('switch tab to products');
// 	} else if (value === 'pictures') {
// 		console.log('switch tab to pictures');
// 	}
// });

// ReactiveLocalStorage.onParamChange('centralPanelFolderPath' , function(value) {
// 	if (typeof value != 'undefined') { //how to make sure that you don't need to write this
// 		console.log('in the central panel, a folder with path '+value+' will be loaded');
// 	}
// });

// ReactiveLocalStorage.retriggerOnParamChange('activeTab');

//TODO: allow storing empty object
//


/*!
 * Copyright (c) 2018 Chris O'Hara <cohara87@gmail.com>
 * 
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 * 
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.validator = factory());
}(this, (function () { 'use strict';

function assertString(input) {
  var isString = typeof input === 'string' || input instanceof String;

  if (!isString) {
    throw new TypeError('This library (validator.js) validates strings only');
  }
}

function toDate(date) {
  assertString(date);
  date = Date.parse(date);
  return !isNaN(date) ? new Date(date) : null;
}

function toFloat(str) {
  assertString(str);
  return parseFloat(str);
}

function toInt(str, radix) {
  assertString(str);
  return parseInt(str, radix || 10);
}

function toBoolean(str, strict) {
  assertString(str);
  if (strict) {
    return str === '1' || str === 'true';
  }
  return str !== '0' && str !== 'false' && str !== '';
}

function equals(str, comparison) {
  assertString(str);
  return str === comparison;
}

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function toString(input) {
  if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object' && input !== null) {
    if (typeof input.toString === 'function') {
      input = input.toString();
    } else {
      input = '[object Object]';
    }
  } else if (input === null || typeof input === 'undefined' || isNaN(input) && !input.length) {
    input = '';
  }
  return String(input);
}

function contains(str, elem) {
  assertString(str);
  return str.indexOf(toString(elem)) >= 0;
}

function matches(str, pattern, modifiers) {
  assertString(str);
  if (Object.prototype.toString.call(pattern) !== '[object RegExp]') {
    pattern = new RegExp(pattern, modifiers);
  }
  return pattern.test(str);
}

function merge() {
  var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaults = arguments[1];

  for (var key in defaults) {
    if (typeof obj[key] === 'undefined') {
      obj[key] = defaults[key];
    }
  }
  return obj;
}

/* eslint-disable prefer-rest-params */
function isByteLength(str, options) {
  assertString(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isByteLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var len = encodeURI(str).split(/%..|./).length - 1;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

var default_fqdn_options = {
  require_tld: true,
  allow_underscores: false,
  allow_trailing_dot: false
};

function isFQDN(str, options) {
  assertString(str);
  options = merge(options, default_fqdn_options);

  /* Remove the optional trailing dot before checking validity */
  if (options.allow_trailing_dot && str[str.length - 1] === '.') {
    str = str.substring(0, str.length - 1);
  }
  var parts = str.split('.');
  for (var i = 0; i < parts.length; i++) {
    if (parts[i].length > 63) {
      return false;
    }
  }
  if (options.require_tld) {
    var tld = parts.pop();
    if (!parts.length || !/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(tld)) {
      return false;
    }
    // disallow spaces
    if (/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(tld)) {
      return false;
    }
  }
  for (var part, _i = 0; _i < parts.length; _i++) {
    part = parts[_i];
    if (options.allow_underscores) {
      part = part.replace(/_/g, '');
    }
    if (!/^[a-z\u00a1-\uffff0-9-]+$/i.test(part)) {
      return false;
    }
    // disallow full-width chars
    if (/[\uff01-\uff5e]/.test(part)) {
      return false;
    }
    if (part[0] === '-' || part[part.length - 1] === '-') {
      return false;
    }
  }
  return true;
}

var ipv4Maybe = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
var ipv6Block = /^[0-9A-F]{1,4}$/i;

function isIP(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  assertString(str);
  version = String(version);
  if (!version) {
    return isIP(str, 4) || isIP(str, 6);
  } else if (version === '4') {
    if (!ipv4Maybe.test(str)) {
      return false;
    }
    var parts = str.split('.').sort(function (a, b) {
      return a - b;
    });
    return parts[3] <= 255;
  } else if (version === '6') {
    var blocks = str.split(':');
    var foundOmissionBlock = false; // marker to indicate ::

    // At least some OS accept the last 32 bits of an IPv6 address
    // (i.e. 2 of the blocks) in IPv4 notation, and RFC 3493 says
    // that '::ffff:a.b.c.d' is valid for IPv4-mapped IPv6 addresses,
    // and '::a.b.c.d' is deprecated, but also valid.
    var foundIPv4TransitionBlock = isIP(blocks[blocks.length - 1], 4);
    var expectedNumberOfBlocks = foundIPv4TransitionBlock ? 7 : 8;

    if (blocks.length > expectedNumberOfBlocks) {
      return false;
    }
    // initial or final ::
    if (str === '::') {
      return true;
    } else if (str.substr(0, 2) === '::') {
      blocks.shift();
      blocks.shift();
      foundOmissionBlock = true;
    } else if (str.substr(str.length - 2) === '::') {
      blocks.pop();
      blocks.pop();
      foundOmissionBlock = true;
    }

    for (var i = 0; i < blocks.length; ++i) {
      // test for a :: which can not be at the string start/end
      // since those cases have been handled above
      if (blocks[i] === '' && i > 0 && i < blocks.length - 1) {
        if (foundOmissionBlock) {
          return false; // multiple :: in address
        }
        foundOmissionBlock = true;
      } else if (foundIPv4TransitionBlock && i === blocks.length - 1) {
        // it has been checked before that the last
        // block is a valid IPv4 address
      } else if (!ipv6Block.test(blocks[i])) {
        return false;
      }
    }
    if (foundOmissionBlock) {
      return blocks.length >= 1;
    }
    return blocks.length === expectedNumberOfBlocks;
  }
  return false;
}

var default_email_options = {
  allow_display_name: false,
  require_display_name: false,
  allow_utf8_local_part: true,
  require_tld: true
};

/* eslint-disable max-len */
/* eslint-disable no-control-regex */
var displayName = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i;
var emailUserPart = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i;
var gmailUserPart = /^[a-z\d]+$/;
var quotedEmailUser = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i;
var emailUserUtf8Part = /^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i;
var quotedEmailUserUtf8 = /^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;
/* eslint-enable max-len */
/* eslint-enable no-control-regex */

function isEmail(str, options) {
  assertString(str);
  options = merge(options, default_email_options);

  if (options.require_display_name || options.allow_display_name) {
    var display_email = str.match(displayName);
    if (display_email) {
      str = display_email[1];
    } else if (options.require_display_name) {
      return false;
    }
  }

  var parts = str.split('@');
  var domain = parts.pop();
  var user = parts.join('@');

  var lower_domain = domain.toLowerCase();

  if (options.domain_specific_validation && (lower_domain === 'gmail.com' || lower_domain === 'googlemail.com')) {
    /*
      Previously we removed dots for gmail addresses before validating.
      This was removed because it allows `multiple..dots@gmail.com`
      to be reported as valid, but it is not.
      Gmail only normalizes single dots, removing them from here is pointless,
      should be done in normalizeEmail
    */
    user = user.toLowerCase();

    // Removing sub-address from username before gmail validation
    var username = user.split('+')[0];

    // Dots are not included in gmail length restriction
    if (!isByteLength(username.replace('.', ''), { min: 6, max: 30 })) {
      return false;
    }

    var _user_parts = username.split('.');
    for (var i = 0; i < _user_parts.length; i++) {
      if (!gmailUserPart.test(_user_parts[i])) {
        return false;
      }
    }
  }

  if (!isByteLength(user, { max: 64 }) || !isByteLength(domain, { max: 254 })) {
    return false;
  }

  if (!isFQDN(domain, { require_tld: options.require_tld })) {
    if (!options.allow_ip_domain) {
      return false;
    }

    if (!isIP(domain)) {
      if (!domain.startsWith('[') || !domain.endsWith(']')) {
        return false;
      }

      var noBracketdomain = domain.substr(1, domain.length - 2);

      if (noBracketdomain.length === 0 || !isIP(noBracketdomain)) {
        return false;
      }
    }
  }

  if (user[0] === '"') {
    user = user.slice(1, user.length - 1);
    return options.allow_utf8_local_part ? quotedEmailUserUtf8.test(user) : quotedEmailUser.test(user);
  }

  var pattern = options.allow_utf8_local_part ? emailUserUtf8Part : emailUserPart;

  var user_parts = user.split('.');
  for (var _i = 0; _i < user_parts.length; _i++) {
    if (!pattern.test(user_parts[_i])) {
      return false;
    }
  }

  return true;
}

var default_url_options = {
  protocols: ['http', 'https', 'ftp'],
  require_tld: true,
  require_protocol: false,
  require_host: true,
  require_valid_protocol: true,
  allow_underscores: false,
  allow_trailing_dot: false,
  allow_protocol_relative_urls: false
};

var wrapped_ipv6 = /^\[([^\]]+)\](?::([0-9]+))?$/;

function isRegExp(obj) {
  return Object.prototype.toString.call(obj) === '[object RegExp]';
}

function checkHost(host, matches) {
  for (var i = 0; i < matches.length; i++) {
    var match = matches[i];
    if (host === match || isRegExp(match) && match.test(host)) {
      return true;
    }
  }
  return false;
}

function isURL(url, options) {
  assertString(url);
  if (!url || url.length >= 2083 || /[\s<>]/.test(url)) {
    return false;
  }
  if (url.indexOf('mailto:') === 0) {
    return false;
  }
  options = merge(options, default_url_options);
  var protocol = void 0,
      auth = void 0,
      host = void 0,
      hostname = void 0,
      port = void 0,
      port_str = void 0,
      split = void 0,
      ipv6 = void 0;

  split = url.split('#');
  url = split.shift();

  split = url.split('?');
  url = split.shift();

  split = url.split('://');
  if (split.length > 1) {
    protocol = split.shift();
    if (options.require_valid_protocol && options.protocols.indexOf(protocol) === -1) {
      return false;
    }
  } else if (options.require_protocol) {
    return false;
  } else if (url.substr(0, 2) === '//') {
    if (!options.allow_protocol_relative_urls) {
      return false;
    }
    split[0] = url.substr(2);
  }
  url = split.join('://');

  if (url === '') {
    return false;
  }

  split = url.split('/');
  url = split.shift();

  if (url === '' && !options.require_host) {
    return true;
  }

  split = url.split('@');
  if (split.length > 1) {
    auth = split.shift();
    if (auth.indexOf(':') >= 0 && auth.split(':').length > 2) {
      return false;
    }
  }
  hostname = split.join('@');

  port_str = null;
  ipv6 = null;
  var ipv6_match = hostname.match(wrapped_ipv6);
  if (ipv6_match) {
    host = '';
    ipv6 = ipv6_match[1];
    port_str = ipv6_match[2] || null;
  } else {
    split = hostname.split(':');
    host = split.shift();
    if (split.length) {
      port_str = split.join(':');
    }
  }

  if (port_str !== null) {
    port = parseInt(port_str, 10);
    if (!/^[0-9]+$/.test(port_str) || port <= 0 || port > 65535) {
      return false;
    }
  }

  if (!isIP(host) && !isFQDN(host, options) && (!ipv6 || !isIP(ipv6, 6))) {
    return false;
  }

  host = host || ipv6;

  if (options.host_whitelist && !checkHost(host, options.host_whitelist)) {
    return false;
  }
  if (options.host_blacklist && checkHost(host, options.host_blacklist)) {
    return false;
  }

  return true;
}

var macAddress = /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
var macAddressNoColons = /^([0-9a-fA-F]){12}$/;

function isMACAddress(str, options) {
  assertString(str);
  if (options && options.no_colons) {
    return macAddressNoColons.test(str);
  }
  return macAddress.test(str);
}

var subnetMaybe = /^\d{1,2}$/;

function isIPRange(str) {
  assertString(str);
  var parts = str.split('/');

  // parts[0] -> ip, parts[1] -> subnet
  if (parts.length !== 2) {
    return false;
  }

  if (!subnetMaybe.test(parts[1])) {
    return false;
  }

  // Disallow preceding 0 i.e. 01, 02, ...
  if (parts[1].length > 1 && parts[1].startsWith('0')) {
    return false;
  }

  return isIP(parts[0], 4) && parts[1] <= 32 && parts[1] >= 0;
}

function isBoolean(str) {
  assertString(str);
  return ['true', 'false', '1', '0'].indexOf(str) >= 0;
}

var alpha = {
  'en-US': /^[A-Z]+$/i,
  'bg-BG': /^[А-Я]+$/i,
  'cs-CZ': /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[A-ZÆØÅ]+$/i,
  'de-DE': /^[A-ZÄÖÜß]+$/i,
  'el-GR': /^[Α-ω]+$/i,
  'es-ES': /^[A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'it-IT': /^[A-ZÀÉÈÌÎÓÒÙ]+$/i,
  'nb-NO': /^[A-ZÆØÅ]+$/i,
  'nl-NL': /^[A-ZÁÉËÏÓÖÜÚ]+$/i,
  'nn-NO': /^[A-ZÆØÅ]+$/i,
  'hu-HU': /^[A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'pl-PL': /^[A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[А-ЯЁ]+$/i,
  'sk-SK': /^[A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  'sr-RS@latin': /^[A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[А-ЯЂЈЉЊЋЏ]+$/i,
  'sv-SE': /^[A-ZÅÄÖ]+$/i,
  'tr-TR': /^[A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[А-ЩЬЮЯЄIЇҐі]+$/i,
  'ku-IQ': /^[ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var alphanumeric = {
  'en-US': /^[0-9A-Z]+$/i,
  'bg-BG': /^[0-9А-Я]+$/i,
  'cs-CZ': /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]+$/i,
  'da-DK': /^[0-9A-ZÆØÅ]+$/i,
  'de-DE': /^[0-9A-ZÄÖÜß]+$/i,
  'el-GR': /^[0-9Α-ω]+$/i,
  'es-ES': /^[0-9A-ZÁÉÍÑÓÚÜ]+$/i,
  'fr-FR': /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]+$/i,
  'it-IT': /^[0-9A-ZÀÉÈÌÎÓÒÙ]+$/i,
  'hu-HU': /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]+$/i,
  'nb-NO': /^[0-9A-ZÆØÅ]+$/i,
  'nl-NL': /^[0-9A-ZÁÉËÏÓÖÜÚ]+$/i,
  'nn-NO': /^[0-9A-ZÆØÅ]+$/i,
  'pl-PL': /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]+$/i,
  'pt-PT': /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]+$/i,
  'ru-RU': /^[0-9А-ЯЁ]+$/i,
  'sk-SK': /^[0-9A-ZÁČĎÉÍŇÓŠŤÚÝŽĹŔĽÄÔ]+$/i,
  'sr-RS@latin': /^[0-9A-ZČĆŽŠĐ]+$/i,
  'sr-RS': /^[0-9А-ЯЂЈЉЊЋЏ]+$/i,
  'sv-SE': /^[0-9A-ZÅÄÖ]+$/i,
  'tr-TR': /^[0-9A-ZÇĞİıÖŞÜ]+$/i,
  'uk-UA': /^[0-9А-ЩЬЮЯЄIЇҐі]+$/i,
  'ku-IQ': /^[٠١٢٣٤٥٦٧٨٩0-9ئابپتجچحخدرڕزژسشعغفڤقکگلڵمنوۆھەیێيطؤثآإأكضصةظذ]+$/i,
  ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]+$/
};

var decimal = {
  'en-US': '.',
  ar: '٫'
};

var englishLocales = ['AU', 'GB', 'HK', 'IN', 'NZ', 'ZA', 'ZM'];

for (var locale, i = 0; i < englishLocales.length; i++) {
  locale = 'en-' + englishLocales[i];
  alpha[locale] = alpha['en-US'];
  alphanumeric[locale] = alphanumeric['en-US'];
  decimal[locale] = decimal['en-US'];
}

// Source: http://www.localeplanet.com/java/
var arabicLocales = ['AE', 'BH', 'DZ', 'EG', 'IQ', 'JO', 'KW', 'LB', 'LY', 'MA', 'QM', 'QA', 'SA', 'SD', 'SY', 'TN', 'YE'];

for (var _locale, _i = 0; _i < arabicLocales.length; _i++) {
  _locale = 'ar-' + arabicLocales[_i];
  alpha[_locale] = alpha.ar;
  alphanumeric[_locale] = alphanumeric.ar;
  decimal[_locale] = decimal.ar;
}

// Source: https://en.wikipedia.org/wiki/Decimal_mark
var dotDecimal = [];
var commaDecimal = ['bg-BG', 'cs-CZ', 'da-DK', 'de-DE', 'el-GR', 'es-ES', 'fr-FR', 'it-IT', 'ku-IQ', 'hu-HU', 'nb-NO', 'nn-NO', 'nl-NL', 'pl-PL', 'pt-PT', 'ru-RU', 'sr-RS@latin', 'sr-RS', 'sv-SE', 'tr-TR', 'uk-UA'];

for (var _i2 = 0; _i2 < dotDecimal.length; _i2++) {
  decimal[dotDecimal[_i2]] = decimal['en-US'];
}

for (var _i3 = 0; _i3 < commaDecimal.length; _i3++) {
  decimal[commaDecimal[_i3]] = ',';
}

alpha['pt-BR'] = alpha['pt-PT'];
alphanumeric['pt-BR'] = alphanumeric['pt-PT'];
decimal['pt-BR'] = decimal['pt-PT'];

// see #862
alpha['pl-Pl'] = alpha['pl-PL'];
alphanumeric['pl-Pl'] = alphanumeric['pl-PL'];
decimal['pl-Pl'] = decimal['pl-PL'];

function isAlpha(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

  assertString(str);
  if (locale in alpha) {
    return alpha[locale].test(str);
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}

function isAlphanumeric(str) {
  var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en-US';

  assertString(str);
  if (locale in alphanumeric) {
    return alphanumeric[locale].test(str);
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}

var numeric = /^[+-]?([0-9]*[.])?[0-9]+$/;
var numericNoSymbols = /^[0-9]+$/;

function isNumeric(str, options) {
  assertString(str);
  if (options && options.no_symbols) {
    return numericNoSymbols.test(str);
  }
  return numeric.test(str);
}

var int = /^(?:[-+]?(?:0|[1-9][0-9]*))$/;
var intLeadingZeroes = /^[-+]?[0-9]+$/;

function isInt(str, options) {
  assertString(str);
  options = options || {};

  // Get the regex to use for testing, based on whether
  // leading zeroes are allowed or not.
  var regex = options.hasOwnProperty('allow_leading_zeroes') && !options.allow_leading_zeroes ? int : intLeadingZeroes;

  // Check min/max/lt/gt
  var minCheckPassed = !options.hasOwnProperty('min') || str >= options.min;
  var maxCheckPassed = !options.hasOwnProperty('max') || str <= options.max;
  var ltCheckPassed = !options.hasOwnProperty('lt') || str < options.lt;
  var gtCheckPassed = !options.hasOwnProperty('gt') || str > options.gt;

  return regex.test(str) && minCheckPassed && maxCheckPassed && ltCheckPassed && gtCheckPassed;
}

function isPort(str) {
  return isInt(str, { min: 0, max: 65535 });
}

function isLowercase(str) {
  assertString(str);
  return str === str.toLowerCase();
}

function isUppercase(str) {
  assertString(str);
  return str === str.toUpperCase();
}

/* eslint-disable no-control-regex */
var ascii = /^[\x00-\x7F]+$/;
/* eslint-enable no-control-regex */

function isAscii(str) {
  assertString(str);
  return ascii.test(str);
}

var fullWidth = /[^\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isFullWidth(str) {
  assertString(str);
  return fullWidth.test(str);
}

var halfWidth = /[\u0020-\u007E\uFF61-\uFF9F\uFFA0-\uFFDC\uFFE8-\uFFEE0-9a-zA-Z]/;

function isHalfWidth(str) {
  assertString(str);
  return halfWidth.test(str);
}

function isVariableWidth(str) {
  assertString(str);
  return fullWidth.test(str) && halfWidth.test(str);
}

/* eslint-disable no-control-regex */
var multibyte = /[^\x00-\x7F]/;
/* eslint-enable no-control-regex */

function isMultibyte(str) {
  assertString(str);
  return multibyte.test(str);
}

var surrogatePair = /[\uD800-\uDBFF][\uDC00-\uDFFF]/;

function isSurrogatePair(str) {
  assertString(str);
  return surrogatePair.test(str);
}

function isFloat(str, options) {
  assertString(str);
  options = options || {};
  var float = new RegExp('^(?:[-+])?(?:[0-9]+)?(?:\\' + (options.locale ? decimal[options.locale] : '.') + '[0-9]*)?(?:[eE][\\+\\-]?(?:[0-9]+))?$');
  if (str === '' || str === '.' || str === '-' || str === '+') {
    return false;
  }
  var value = parseFloat(str.replace(',', '.'));
  return float.test(str) && (!options.hasOwnProperty('min') || value >= options.min) && (!options.hasOwnProperty('max') || value <= options.max) && (!options.hasOwnProperty('lt') || value < options.lt) && (!options.hasOwnProperty('gt') || value > options.gt);
}

var includes = function includes(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
};

function decimalRegExp(options) {
  var regExp = new RegExp('^[-+]?([0-9]+)?(\\' + decimal[options.locale] + '[0-9]{' + options.decimal_digits + '})' + (options.force_decimal ? '' : '?') + '$');
  return regExp;
}

var default_decimal_options = {
  force_decimal: false,
  decimal_digits: '1,',
  locale: 'en-US'
};

var blacklist = ['', '-', '+'];

function isDecimal(str, options) {
  assertString(str);
  options = merge(options, default_decimal_options);
  if (options.locale in decimal) {
    return !includes(blacklist, str.replace(/ /g, '')) && decimalRegExp(options).test(str);
  }
  throw new Error('Invalid locale \'' + options.locale + '\'');
}

var hexadecimal = /^[0-9A-F]+$/i;

function isHexadecimal(str) {
  assertString(str);
  return hexadecimal.test(str);
}

function isDivisibleBy(str, num) {
  assertString(str);
  return toFloat(str) % parseInt(num, 10) === 0;
}

var hexcolor = /^#?([0-9A-F]{3}|[0-9A-F]{6})$/i;

function isHexColor(str) {
  assertString(str);
  return hexcolor.test(str);
}

// see http://isrc.ifpi.org/en/isrc-standard/code-syntax
var isrc = /^[A-Z]{2}[0-9A-Z]{3}\d{2}\d{5}$/;

function isISRC(str) {
  assertString(str);
  return isrc.test(str);
}

var md5 = /^[a-f0-9]{32}$/;

function isMD5(str) {
  assertString(str);
  return md5.test(str);
}

var lengths = {
  md5: 32,
  md4: 32,
  sha1: 40,
  sha256: 64,
  sha384: 96,
  sha512: 128,
  ripemd128: 32,
  ripemd160: 40,
  tiger128: 32,
  tiger160: 40,
  tiger192: 48,
  crc32: 8,
  crc32b: 8
};

function isHash(str, algorithm) {
  assertString(str);
  var hash = new RegExp('^[a-f0-9]{' + lengths[algorithm] + '}$');
  return hash.test(str);
}

var jwt = /^[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+\.[a-zA-Z0-9\-_]+$/;

function isJWT(str) {
  assertString(str);
  return jwt.test(str);
}

function isJSON(str) {
  assertString(str);
  try {
    var obj = JSON.parse(str);
    return !!obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object';
  } catch (e) {/* ignore */}
  return false;
}

var default_is_empty_options = {
  ignore_whitespace: false
};

function isEmpty(str, options) {
  assertString(str);
  options = merge(options, default_is_empty_options);

  return (options.ignore_whitespace ? str.trim().length : str.length) === 0;
}

/* eslint-disable prefer-rest-params */
function isLength(str, options) {
  assertString(str);
  var min = void 0;
  var max = void 0;
  if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    min = options.min || 0;
    max = options.max;
  } else {
    // backwards compatibility: isLength(str, min [, max])
    min = arguments[1];
    max = arguments[2];
  }
  var surrogatePairs = str.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g) || [];
  var len = str.length - surrogatePairs.length;
  return len >= min && (typeof max === 'undefined' || len <= max);
}

var uuid = {
  3: /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
  4: /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  5: /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
  all: /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};

function isUUID(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'all';

  assertString(str);
  var pattern = uuid[version];
  return pattern && pattern.test(str);
}

function isMongoId(str) {
  assertString(str);
  return isHexadecimal(str) && str.length === 24;
}

function isAfter(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

  assertString(str);
  var comparison = toDate(date);
  var original = toDate(str);
  return !!(original && comparison && original > comparison);
}

function isBefore(str) {
  var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : String(new Date());

  assertString(str);
  var comparison = toDate(date);
  var original = toDate(str);
  return !!(original && comparison && original < comparison);
}

function isIn(str, options) {
  assertString(str);
  var i = void 0;
  if (Object.prototype.toString.call(options) === '[object Array]') {
    var array = [];
    for (i in options) {
      if ({}.hasOwnProperty.call(options, i)) {
        array[i] = toString(options[i]);
      }
    }
    return array.indexOf(str) >= 0;
  } else if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
    return options.hasOwnProperty(str);
  } else if (options && typeof options.indexOf === 'function') {
    return options.indexOf(str) >= 0;
  }
  return false;
}

/* eslint-disable max-len */
var creditCard = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|(222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|6[27][0-9]{14})$/;
/* eslint-enable max-len */

function isCreditCard(str) {
  assertString(str);
  var sanitized = str.replace(/[- ]+/g, '');
  if (!creditCard.test(sanitized)) {
    return false;
  }
  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = void 0;
  for (var i = sanitized.length - 1; i >= 0; i--) {
    digit = sanitized.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum % 10 + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }
  return !!(sum % 10 === 0 ? sanitized : false);
}

var isin = /^[A-Z]{2}[0-9A-Z]{9}[0-9]$/;

function isISIN(str) {
  assertString(str);
  if (!isin.test(str)) {
    return false;
  }

  var checksumStr = str.replace(/[A-Z]/g, function (character) {
    return parseInt(character, 36);
  });

  var sum = 0;
  var digit = void 0;
  var tmpNum = void 0;
  var shouldDouble = true;
  for (var i = checksumStr.length - 2; i >= 0; i--) {
    digit = checksumStr.substring(i, i + 1);
    tmpNum = parseInt(digit, 10);
    if (shouldDouble) {
      tmpNum *= 2;
      if (tmpNum >= 10) {
        sum += tmpNum + 1;
      } else {
        sum += tmpNum;
      }
    } else {
      sum += tmpNum;
    }
    shouldDouble = !shouldDouble;
  }

  return parseInt(str.substr(str.length - 1), 10) === (10000 - sum) % 10;
}

var isbn10Maybe = /^(?:[0-9]{9}X|[0-9]{10})$/;
var isbn13Maybe = /^(?:[0-9]{13})$/;
var factor = [1, 3];

function isISBN(str) {
  var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  assertString(str);
  version = String(version);
  if (!version) {
    return isISBN(str, 10) || isISBN(str, 13);
  }
  var sanitized = str.replace(/[\s-]+/g, '');
  var checksum = 0;
  var i = void 0;
  if (version === '10') {
    if (!isbn10Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 9; i++) {
      checksum += (i + 1) * sanitized.charAt(i);
    }
    if (sanitized.charAt(9) === 'X') {
      checksum += 10 * 10;
    } else {
      checksum += 10 * sanitized.charAt(9);
    }
    if (checksum % 11 === 0) {
      return !!sanitized;
    }
  } else if (version === '13') {
    if (!isbn13Maybe.test(sanitized)) {
      return false;
    }
    for (i = 0; i < 12; i++) {
      checksum += factor[i % 2] * sanitized.charAt(i);
    }
    if (sanitized.charAt(12) - (10 - checksum % 10) % 10 === 0) {
      return !!sanitized;
    }
  }
  return false;
}

var issn = '^\\d{4}-?\\d{3}[\\dX]$';

function isISSN(str) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  assertString(str);
  var testIssn = issn;
  testIssn = options.require_hyphen ? testIssn.replace('?', '') : testIssn;
  testIssn = options.case_sensitive ? new RegExp(testIssn) : new RegExp(testIssn, 'i');
  if (!testIssn.test(str)) {
    return false;
  }
  var digits = str.replace('-', '').toUpperCase();
  var checksum = 0;
  for (var i = 0; i < digits.length; i++) {
    var digit = digits[i];
    checksum += (digit === 'X' ? 10 : +digit) * (8 - i);
  }
  return checksum % 11 === 0;
}

/* eslint-disable max-len */
var phones = {
  'ar-AE': /^((\+?971)|0)?5[024568]\d{7}$/,
  'ar-DZ': /^(\+?213|0)(5|6|7)\d{8}$/,
  'ar-EG': /^((\+?20)|0)?1[012]\d{8}$/,
  'ar-IQ': /^(\+?964|0)?7[0-9]\d{8}$/,
  'ar-JO': /^(\+?962|0)?7[789]\d{7}$/,
  'ar-KW': /^(\+?965)[569]\d{7}$/,
  'ar-SA': /^(!?(\+?966)|0)?5\d{8}$/,
  'ar-SY': /^(!?(\+?963)|0)?9\d{8}$/,
  'ar-TN': /^(\+?216)?[2459]\d{7}$/,
  'be-BY': /^(\+?375)?(24|25|29|33|44)\d{7}$/,
  'bg-BG': /^(\+?359|0)?8[789]\d{7}$/,
  'bn-BD': /\+?(88)?0?1[156789][0-9]{8}\b/,
  'cs-CZ': /^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'da-DK': /^(\+?45)?\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'de-DE': /^(\+?49[ \.\-]?)?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,
  'el-GR': /^(\+?30|0)?(69\d{8})$/,
  'en-AU': /^(\+?61|0)4\d{8}$/,
  'en-GB': /^(\+?44|0)7\d{9}$/,
  'en-HK': /^(\+?852\-?)?[456789]\d{3}\-?\d{4}$/,
  'en-IN': /^(\+?91|0)?[6789]\d{9}$/,
  'en-KE': /^(\+?254|0)?[7]\d{8}$/,
  'en-NG': /^(\+?234|0)?[789]\d{9}$/,
  'en-NZ': /^(\+?64|0)[28]\d{7,9}$/,
  'en-PK': /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/,
  'en-RW': /^(\+?250|0)?[7]\d{8}$/,
  'en-SG': /^(\+65)?[89]\d{7}$/,
  'en-TZ': /^(\+?255|0)?[67]\d{8}$/,
  'en-UG': /^(\+?256|0)?[7]\d{8}$/,
  'en-US': /^(\+?1?( |-)?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})( |-)?([2-9][0-9]{2}( |-)?[0-9]{4})$/,
  'en-ZA': /^(\+?27|0)\d{9}$/,
  'en-ZM': /^(\+?26)?09[567]\d{7}$/,
  'es-ES': /^(\+?34)?(6\d{1}|7[1234])\d{7}$/,
  'es-MX': /^(\+?52)?(1|01)?\d{10,11}$/,
  'et-EE': /^(\+?372)?\s?(5|8[1-4])\s?([0-9]\s?){6,7}$/,
  'fa-IR': /^(\+?98[\-\s]?|0)9[0-39]\d[\-\s]?\d{3}[\-\s]?\d{4}$/,
  'fi-FI': /^(\+?358|0)\s?(4(0|1|2|4|5|6)?|50)\s?(\d\s?){4,8}\d$/,
  'fo-FO': /^(\+?298)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'fr-FR': /^(\+?33|0)[67]\d{8}$/,
  'he-IL': /^(\+972|0)([23489]|5[012345689]|77)[1-9]\d{6}/,
  'hu-HU': /^(\+?36)(20|30|70)\d{7}$/,
  'id-ID': /^(\+?62|0)(0?8?\d\d\s?\d?)([\s?|\d]{7,12})$/,
  'it-IT': /^(\+?39)?\s?3\d{2} ?\d{6,7}$/,
  'ja-JP': /^(\+?81|0)[789]0[ \-]?[1-9]\d{2}[ \-]?\d{5}$/,
  'kk-KZ': /^(\+?7|8)?7\d{9}$/,
  'kl-GL': /^(\+?299)?\s?\d{2}\s?\d{2}\s?\d{2}$/,
  'ko-KR': /^((\+?82)[ \-]?)?0?1([0|1|6|7|8|9]{1})[ \-]?\d{3,4}[ \-]?\d{4}$/,
  'lt-LT': /^(\+370|8)\d{8}$/,
  'ms-MY': /^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,
  'nb-NO': /^(\+?47)?[49]\d{7}$/,
  'nl-BE': /^(\+?32|0)4?\d{8}$/,
  'nn-NO': /^(\+?47)?[49]\d{7}$/,
  'pl-PL': /^(\+?48)? ?[5-8]\d ?\d{3} ?\d{2} ?\d{2}$/,
  'pt-BR': /(?=^(\+?5{2}\-?|0)[1-9]{2}\-?\d{4}\-?\d{4}$)(^(\+?5{2}\-?|0)[1-9]{2}\-?[6-9]{1}\d{3}\-?\d{4}$)|(^(\+?5{2}\-?|0)[1-9]{2}\-?9[6-9]{1}\d{3}\-?\d{4}$)/,
  'pt-PT': /^(\+?351)?9[1236]\d{7}$/,
  'ro-RO': /^(\+?4?0)\s?7\d{2}(\/|\s|\.|\-)?\d{3}(\s|\.|\-)?\d{3}$/,
  'ru-RU': /^(\+?7|8)?9\d{9}$/,
  'sk-SK': /^(\+?421)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,
  'sr-RS': /^(\+3816|06)[- \d]{5,9}$/,
  'sv-SE': /^(\+?46|0)[\s\-]?7[\s\-]?[02369]([\s\-]?\d){7}$/,
  'th-TH': /^(\+66|66|0)\d{9}$/,
  'tr-TR': /^(\+?90|0)?5\d{9}$/,
  'uk-UA': /^(\+?38|8)?0\d{9}$/,
  'vi-VN': /^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
  'zh-CN': /^((\+|00)86)?1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
  'zh-TW': /^(\+?886\-?|0)?9\d{8}$/
};
/* eslint-enable max-len */

// aliases
phones['en-CA'] = phones['en-US'];
phones['fr-BE'] = phones['nl-BE'];
phones['zh-HK'] = phones['en-HK'];

function isMobilePhone(str, locale, options) {
  assertString(str);
  if (options && options.strictMode && !str.startsWith('+')) {
    return false;
  }
  if (Array.isArray(locale)) {
    return locale.some(function (key) {
      if (phones.hasOwnProperty(key)) {
        var phone = phones[key];
        if (phone.test(str)) {
          return true;
        }
      }
      return false;
    });
  } else if (locale in phones) {
    return phones[locale].test(str);
    // alias falsey locale as 'any'
  } else if (!locale || locale === 'any') {
    for (var key in phones) {
      if (phones.hasOwnProperty(key)) {
        var phone = phones[key];
        if (phone.test(str)) {
          return true;
        }
      }
    }
    return false;
  }
  throw new Error('Invalid locale \'' + locale + '\'');
}

function currencyRegex(options) {
  var decimal_digits = '\\d{' + options.digits_after_decimal[0] + '}';
  options.digits_after_decimal.forEach(function (digit, index) {
    if (index !== 0) decimal_digits = decimal_digits + '|\\d{' + digit + '}';
  });
  var symbol = '(\\' + options.symbol.replace(/\./g, '\\.') + ')' + (options.require_symbol ? '' : '?'),
      negative = '-?',
      whole_dollar_amount_without_sep = '[1-9]\\d*',
      whole_dollar_amount_with_sep = '[1-9]\\d{0,2}(\\' + options.thousands_separator + '\\d{3})*',
      valid_whole_dollar_amounts = ['0', whole_dollar_amount_without_sep, whole_dollar_amount_with_sep],
      whole_dollar_amount = '(' + valid_whole_dollar_amounts.join('|') + ')?',
      decimal_amount = '(\\' + options.decimal_separator + '(' + decimal_digits + '))' + (options.require_decimal ? '' : '?');
  var pattern = whole_dollar_amount + (options.allow_decimal || options.require_decimal ? decimal_amount : '');

  // default is negative sign before symbol, but there are two other options (besides parens)
  if (options.allow_negatives && !options.parens_for_negatives) {
    if (options.negative_sign_after_digits) {
      pattern += negative;
    } else if (options.negative_sign_before_digits) {
      pattern = negative + pattern;
    }
  }

  // South African Rand, for example, uses R 123 (space) and R-123 (no space)
  if (options.allow_negative_sign_placeholder) {
    pattern = '( (?!\\-))?' + pattern;
  } else if (options.allow_space_after_symbol) {
    pattern = ' ?' + pattern;
  } else if (options.allow_space_after_digits) {
    pattern += '( (?!$))?';
  }

  if (options.symbol_after_digits) {
    pattern += symbol;
  } else {
    pattern = symbol + pattern;
  }

  if (options.allow_negatives) {
    if (options.parens_for_negatives) {
      pattern = '(\\(' + pattern + '\\)|' + pattern + ')';
    } else if (!(options.negative_sign_before_digits || options.negative_sign_after_digits)) {
      pattern = negative + pattern;
    }
  }

  // ensure there's a dollar and/or decimal amount, and that
  // it doesn't start with a space or a negative sign followed by a space
  return new RegExp('^(?!-? )(?=.*\\d)' + pattern + '$');
}

var default_currency_options = {
  symbol: '$',
  require_symbol: false,
  allow_space_after_symbol: false,
  symbol_after_digits: false,
  allow_negatives: true,
  parens_for_negatives: false,
  negative_sign_before_digits: false,
  negative_sign_after_digits: false,
  allow_negative_sign_placeholder: false,
  thousands_separator: ',',
  decimal_separator: '.',
  allow_decimal: true,
  require_decimal: false,
  digits_after_decimal: [2],
  allow_space_after_digits: false
};

function isCurrency(str, options) {
  assertString(str);
  options = merge(options, default_currency_options);
  return currencyRegex(options).test(str);
}

/* eslint-disable max-len */
// from http://goo.gl/0ejHHW
var iso8601 = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;
/* eslint-enable max-len */

function isISO8601(str) {
  assertString(str);
  return iso8601.test(str);
}

/* Based on https://tools.ietf.org/html/rfc3339#section-5.6 */

var dateFullYear = /[0-9]{4}/;
var dateMonth = /(0[1-9]|1[0-2])/;
var dateMDay = /([12]\d|0[1-9]|3[01])/;

var timeHour = /([01][0-9]|2[0-3])/;
var timeMinute = /[0-5][0-9]/;
var timeSecond = /([0-5][0-9]|60)/;

var timeSecFrac = /(\.[0-9]+)?/;
var timeNumOffset = new RegExp('[-+]' + timeHour.source + ':' + timeMinute.source);
var timeOffset = new RegExp('([zZ]|' + timeNumOffset.source + ')');

var partialTime = new RegExp(timeHour.source + ':' + timeMinute.source + ':' + timeSecond.source + timeSecFrac.source);

var fullDate = new RegExp(dateFullYear.source + '-' + dateMonth.source + '-' + dateMDay.source);
var fullTime = new RegExp('' + partialTime.source + timeOffset.source);

var rfc3339 = new RegExp(fullDate.source + '[ tT]' + fullTime.source);

function isRFC3339(str) {
  assertString(str);
  return rfc3339.test(str);
}

// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
var validISO31661Alpha2CountriesCodes = ['AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AQ', 'AR', 'AS', 'AT', 'AU', 'AW', 'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN', 'BO', 'BQ', 'BR', 'BS', 'BT', 'BV', 'BW', 'BY', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI', 'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DE', 'DJ', 'DK', 'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ES', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO', 'FR', 'GA', 'GB', 'GD', 'GE', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GR', 'GS', 'GT', 'GU', 'GW', 'GY', 'HK', 'HM', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR', 'IS', 'IT', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW', 'KY', 'KZ', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC', 'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS', 'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL', 'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PL', 'PM', 'PN', 'PR', 'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RU', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE', 'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX', 'SY', 'SZ', 'TC', 'TD', 'TF', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TR', 'TT', 'TV', 'TW', 'TZ', 'UA', 'UG', 'UM', 'US', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF', 'WS', 'YE', 'YT', 'ZA', 'ZM', 'ZW'];

function isISO31661Alpha2(str) {
  assertString(str);
  return includes(validISO31661Alpha2CountriesCodes, str.toUpperCase());
}

// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
var validISO31661Alpha3CountriesCodes = ['AFG', 'ALA', 'ALB', 'DZA', 'ASM', 'AND', 'AGO', 'AIA', 'ATA', 'ATG', 'ARG', 'ARM', 'ABW', 'AUS', 'AUT', 'AZE', 'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BMU', 'BTN', 'BOL', 'BES', 'BIH', 'BWA', 'BVT', 'BRA', 'IOT', 'BRN', 'BGR', 'BFA', 'BDI', 'KHM', 'CMR', 'CAN', 'CPV', 'CYM', 'CAF', 'TCD', 'CHL', 'CHN', 'CXR', 'CCK', 'COL', 'COM', 'COG', 'COD', 'COK', 'CRI', 'CIV', 'HRV', 'CUB', 'CUW', 'CYP', 'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST', 'ETH', 'FLK', 'FRO', 'FJI', 'FIN', 'FRA', 'GUF', 'PYF', 'ATF', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GIB', 'GRC', 'GRL', 'GRD', 'GLP', 'GUM', 'GTM', 'GGY', 'GIN', 'GNB', 'GUY', 'HTI', 'HMD', 'VAT', 'HND', 'HKG', 'HUN', 'ISL', 'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'IMN', 'ISR', 'ITA', 'JAM', 'JPN', 'JEY', 'JOR', 'KAZ', 'KEN', 'KIR', 'PRK', 'KOR', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MAC', 'MKD', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MTQ', 'MRT', 'MUS', 'MYT', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MSR', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'NCL', 'NZL', 'NIC', 'NER', 'NGA', 'NIU', 'NFK', 'MNP', 'NOR', 'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'PCN', 'POL', 'PRT', 'PRI', 'QAT', 'REU', 'ROU', 'RUS', 'RWA', 'BLM', 'SHN', 'KNA', 'LCA', 'MAF', 'SPM', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SXM', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SGS', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR', 'SJM', 'SWZ', 'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA', 'TLS', 'TGO', 'TKL', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TCA', 'TUV', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'UMI', 'URY', 'UZB', 'VUT', 'VEN', 'VNM', 'VGB', 'VIR', 'WLF', 'ESH', 'YEM', 'ZMB', 'ZWE'];

function isISO31661Alpha3(str) {
  assertString(str);
  return includes(validISO31661Alpha3CountriesCodes, str.toUpperCase());
}

var notBase64 = /[^A-Z0-9+\/=]/i;

function isBase64(str) {
  assertString(str);
  var len = str.length;
  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }
  var firstPaddingChar = str.indexOf('=');
  return firstPaddingChar === -1 || firstPaddingChar === len - 1 || firstPaddingChar === len - 2 && str[len - 1] === '=';
}

var validMediaType = /^[a-z]+\/[a-z0-9\-\+]+$/i;

var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;

var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;

function isDataURI(str) {
  assertString(str);
  var data = str.split(',');
  if (data.length < 2) {
    return false;
  }
  var attributes = data.shift().trim().split(';');
  var schemeAndMediaType = attributes.shift();
  if (schemeAndMediaType.substr(0, 5) !== 'data:') {
    return false;
  }
  var mediaType = schemeAndMediaType.substr(5);
  if (mediaType !== '' && !validMediaType.test(mediaType)) {
    return false;
  }
  for (var i = 0; i < attributes.length; i++) {
    if (i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') {
      // ok
    } else if (!validAttribute.test(attributes[i])) {
      return false;
    }
  }
  for (var _i = 0; _i < data.length; _i++) {
    if (!validData.test(data[_i])) {
      return false;
    }
  }
  return true;
}

var magnetURI = /^magnet:\?xt=urn:[a-z0-9]+:[a-z0-9]{32,40}&dn=.+&tr=.+$/i;

function isMagnetURI(url) {
  assertString(url);
  return magnetURI.test(url.trim());
}

/*
  Checks if the provided string matches to a correct Media type format (MIME type)

  This function only checks is the string format follows the
  etablished rules by the according RFC specifications.
  This function supports 'charset' in textual media types
  (https://tools.ietf.org/html/rfc6657).

  This function does not check against all the media types listed
  by the IANA (https://www.iana.org/assignments/media-types/media-types.xhtml)
  because of lightness purposes : it would require to include
  all these MIME types in this librairy, which would weigh it
  significantly. This kind of effort maybe is not worth for the use that
  this function has in this entire librairy.

  More informations in the RFC specifications :
  - https://tools.ietf.org/html/rfc2045
  - https://tools.ietf.org/html/rfc2046
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.1
  - https://tools.ietf.org/html/rfc7231#section-3.1.1.5
*/

// Match simple MIME types
// NB :
//   Subtype length must not exceed 100 characters.
//   This rule does not comply to the RFC specs (what is the max length ?).
var mimeTypeSimple = /^(application|audio|font|image|message|model|multipart|text|video)\/[a-zA-Z0-9\.\-\+]{1,100}$/i; // eslint-disable-line max-len

// Handle "charset" in "text/*"
var mimeTypeText = /^text\/[a-zA-Z0-9\.\-\+]{1,100};\s?charset=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?$/i; // eslint-disable-line max-len

// Handle "boundary" in "multipart/*"
var mimeTypeMultipart = /^multipart\/[a-zA-Z0-9\.\-\+]{1,100}(;\s?(boundary|charset)=("[a-zA-Z0-9\.\-\+\s]{0,70}"|[a-zA-Z0-9\.\-\+]{0,70})(\s?\([a-zA-Z0-9\.\-\+\s]{1,20}\))?){0,2}$/i; // eslint-disable-line max-len

function isMimeType(str) {
  assertString(str);
  return mimeTypeSimple.test(str) || mimeTypeText.test(str) || mimeTypeMultipart.test(str);
}

var lat = /^\(?[+-]?(90(\.0+)?|[1-8]?\d(\.\d+)?)$/;
var long = /^\s?[+-]?(180(\.0+)?|1[0-7]\d(\.\d+)?|\d{1,2}(\.\d+)?)\)?$/;

var isLatLong = function (str) {
  assertString(str);
  if (!str.includes(',')) return false;
  var pair = str.split(',');
  return lat.test(pair[0]) && long.test(pair[1]);
};

// common patterns
var threeDigit = /^\d{3}$/;
var fourDigit = /^\d{4}$/;
var fiveDigit = /^\d{5}$/;
var sixDigit = /^\d{6}$/;

var patterns = {
  AD: /^AD\d{3}$/,
  AT: fourDigit,
  AU: fourDigit,
  BE: fourDigit,
  BG: fourDigit,
  CA: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
  CH: fourDigit,
  CZ: /^\d{3}\s?\d{2}$/,
  DE: fiveDigit,
  DK: fourDigit,
  DZ: fiveDigit,
  EE: fiveDigit,
  ES: fiveDigit,
  FI: fiveDigit,
  FR: /^\d{2}\s?\d{3}$/,
  GB: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
  GR: /^\d{3}\s?\d{2}$/,
  HR: /^([1-5]\d{4}$)/,
  HU: fourDigit,
  IL: fiveDigit,
  IN: sixDigit,
  IS: threeDigit,
  IT: fiveDigit,
  JP: /^\d{3}\-\d{4}$/,
  KE: fiveDigit,
  LI: /^(948[5-9]|949[0-7])$/,
  LT: /^LT\-\d{5}$/,
  LU: fourDigit,
  LV: /^LV\-\d{4}$/,
  MX: fiveDigit,
  NL: /^\d{4}\s?[a-z]{2}$/i,
  NO: fourDigit,
  PL: /^\d{2}\-\d{3}$/,
  PT: /^\d{4}\-\d{3}?$/,
  RO: sixDigit,
  RU: sixDigit,
  SA: fiveDigit,
  SE: /^\d{3}\s?\d{2}$/,
  SI: fourDigit,
  SK: /^\d{3}\s?\d{2}$/,
  TN: fourDigit,
  TW: /^\d{3}(\d{2})?$/,
  US: /^\d{5}(-\d{4})?$/,
  ZA: fourDigit,
  ZM: fiveDigit
};

var locales = Object.keys(patterns);

var isPostalCode = function (str, locale) {
  assertString(str);
  if (locale in patterns) {
    return patterns[locale].test(str);
  } else if (locale === 'any') {
    for (var key in patterns) {
      if (patterns.hasOwnProperty(key)) {
        var pattern = patterns[key];
        if (pattern.test(str)) {
          return true;
        }
      }
    }
    return false;
  }
  throw new Error('Invalid locale \'' + locale + '\'');
};

function ltrim(str, chars) {
  assertString(str);
  var pattern = chars ? new RegExp('^[' + chars + ']+', 'g') : /^\s+/g;
  return str.replace(pattern, '');
}

function rtrim(str, chars) {
  assertString(str);
  var pattern = chars ? new RegExp('[' + chars + ']') : /\s/;

  var idx = str.length - 1;
  for (; idx >= 0 && pattern.test(str[idx]); idx--) {}

  return idx < str.length ? str.substr(0, idx + 1) : str;
}

function trim(str, chars) {
  return rtrim(ltrim(str, chars), chars);
}

function escape(str) {
  assertString(str);
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\//g, '&#x2F;').replace(/\\/g, '&#x5C;').replace(/`/g, '&#96;');
}

function unescape(str) {
  assertString(str);
  return str.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#x2F;/g, '/').replace(/&#x5C;/g, '\\').replace(/&#96;/g, '`');
}

function blacklist$1(str, chars) {
  assertString(str);
  return str.replace(new RegExp('[' + chars + ']+', 'g'), '');
}

function stripLow(str, keep_new_lines) {
  assertString(str);
  var chars = keep_new_lines ? '\\x00-\\x09\\x0B\\x0C\\x0E-\\x1F\\x7F' : '\\x00-\\x1F\\x7F';
  return blacklist$1(str, chars);
}

function whitelist(str, chars) {
  assertString(str);
  return str.replace(new RegExp('[^' + chars + ']+', 'g'), '');
}

function isWhitelisted(str, chars) {
  assertString(str);
  for (var i = str.length - 1; i >= 0; i--) {
    if (chars.indexOf(str[i]) === -1) {
      return false;
    }
  }
  return true;
}

var default_normalize_email_options = {
  // The following options apply to all email addresses
  // Lowercases the local part of the email address.
  // Please note this may violate RFC 5321 as per http://stackoverflow.com/a/9808332/192024).
  // The domain is always lowercased, as per RFC 1035
  all_lowercase: true,

  // The following conversions are specific to GMail
  // Lowercases the local part of the GMail address (known to be case-insensitive)
  gmail_lowercase: true,
  // Removes dots from the local part of the email address, as that's ignored by GMail
  gmail_remove_dots: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  gmail_remove_subaddress: true,
  // Conversts the googlemail.com domain to gmail.com
  gmail_convert_googlemaildotcom: true,

  // The following conversions are specific to Outlook.com / Windows Live / Hotmail
  // Lowercases the local part of the Outlook.com address (known to be case-insensitive)
  outlookdotcom_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  outlookdotcom_remove_subaddress: true,

  // The following conversions are specific to Yahoo
  // Lowercases the local part of the Yahoo address (known to be case-insensitive)
  yahoo_lowercase: true,
  // Removes the subaddress (e.g. "-foo") from the email address
  yahoo_remove_subaddress: true,

  // The following conversions are specific to Yandex
  // Lowercases the local part of the Yandex address (known to be case-insensitive)
  yandex_lowercase: true,

  // The following conversions are specific to iCloud
  // Lowercases the local part of the iCloud address (known to be case-insensitive)
  icloud_lowercase: true,
  // Removes the subaddress (e.g. "+foo") from the email address
  icloud_remove_subaddress: true
};

// List of domains used by iCloud
var icloud_domains = ['icloud.com', 'me.com'];

// List of domains used by Outlook.com and its predecessors
// This list is likely incomplete.
// Partial reference:
// https://blogs.office.com/2013/04/17/outlook-com-gets-two-step-verification-sign-in-by-alias-and-new-international-domains/
var outlookdotcom_domains = ['hotmail.at', 'hotmail.be', 'hotmail.ca', 'hotmail.cl', 'hotmail.co.il', 'hotmail.co.nz', 'hotmail.co.th', 'hotmail.co.uk', 'hotmail.com', 'hotmail.com.ar', 'hotmail.com.au', 'hotmail.com.br', 'hotmail.com.gr', 'hotmail.com.mx', 'hotmail.com.pe', 'hotmail.com.tr', 'hotmail.com.vn', 'hotmail.cz', 'hotmail.de', 'hotmail.dk', 'hotmail.es', 'hotmail.fr', 'hotmail.hu', 'hotmail.id', 'hotmail.ie', 'hotmail.in', 'hotmail.it', 'hotmail.jp', 'hotmail.kr', 'hotmail.lv', 'hotmail.my', 'hotmail.ph', 'hotmail.pt', 'hotmail.sa', 'hotmail.sg', 'hotmail.sk', 'live.be', 'live.co.uk', 'live.com', 'live.com.ar', 'live.com.mx', 'live.de', 'live.es', 'live.eu', 'live.fr', 'live.it', 'live.nl', 'msn.com', 'outlook.at', 'outlook.be', 'outlook.cl', 'outlook.co.il', 'outlook.co.nz', 'outlook.co.th', 'outlook.com', 'outlook.com.ar', 'outlook.com.au', 'outlook.com.br', 'outlook.com.gr', 'outlook.com.pe', 'outlook.com.tr', 'outlook.com.vn', 'outlook.cz', 'outlook.de', 'outlook.dk', 'outlook.es', 'outlook.fr', 'outlook.hu', 'outlook.id', 'outlook.ie', 'outlook.in', 'outlook.it', 'outlook.jp', 'outlook.kr', 'outlook.lv', 'outlook.my', 'outlook.ph', 'outlook.pt', 'outlook.sa', 'outlook.sg', 'outlook.sk', 'passport.com'];

// List of domains used by Yahoo Mail
// This list is likely incomplete
var yahoo_domains = ['rocketmail.com', 'yahoo.ca', 'yahoo.co.uk', 'yahoo.com', 'yahoo.de', 'yahoo.fr', 'yahoo.in', 'yahoo.it', 'ymail.com'];

// List of domains used by yandex.ru
var yandex_domains = ['yandex.ru', 'yandex.ua', 'yandex.kz', 'yandex.com', 'yandex.by', 'ya.ru'];

// replace single dots, but not multiple consecutive dots
function dotsReplacer(match) {
  if (match.length > 1) {
    return match;
  }
  return '';
}

function normalizeEmail(email, options) {
  options = merge(options, default_normalize_email_options);

  var raw_parts = email.split('@');
  var domain = raw_parts.pop();
  var user = raw_parts.join('@');
  var parts = [user, domain];

  // The domain is always lowercased, as it's case-insensitive per RFC 1035
  parts[1] = parts[1].toLowerCase();

  if (parts[1] === 'gmail.com' || parts[1] === 'googlemail.com') {
    // Address is GMail
    if (options.gmail_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (options.gmail_remove_dots) {
      // this does not replace consecutive dots like example..email@gmail.com
      parts[0] = parts[0].replace(/\.+/g, dotsReplacer);
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.gmail_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
    parts[1] = options.gmail_convert_googlemaildotcom ? 'gmail.com' : parts[1];
  } else if (icloud_domains.indexOf(parts[1]) >= 0) {
    // Address is iCloud
    if (options.icloud_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.icloud_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (outlookdotcom_domains.indexOf(parts[1]) >= 0) {
    // Address is Outlook.com
    if (options.outlookdotcom_remove_subaddress) {
      parts[0] = parts[0].split('+')[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.outlookdotcom_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (yahoo_domains.indexOf(parts[1]) >= 0) {
    // Address is Yahoo
    if (options.yahoo_remove_subaddress) {
      var components = parts[0].split('-');
      parts[0] = components.length > 1 ? components.slice(0, -1).join('-') : components[0];
    }
    if (!parts[0].length) {
      return false;
    }
    if (options.all_lowercase || options.yahoo_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
  } else if (yandex_domains.indexOf(parts[1]) >= 0) {
    if (options.all_lowercase || options.yandex_lowercase) {
      parts[0] = parts[0].toLowerCase();
    }
    parts[1] = 'yandex.ru'; // all yandex domains are equal, 1st preffered
  } else if (options.all_lowercase) {
    // Any other address
    parts[0] = parts[0].toLowerCase();
  }
  return parts.join('@');
}

var version = '10.7.0';

var validator = {
  version: version,
  toDate: toDate,
  toFloat: toFloat,
  toInt: toInt,
  toBoolean: toBoolean,
  equals: equals,
  contains: contains,
  matches: matches,
  isEmail: isEmail,
  isURL: isURL,
  isMACAddress: isMACAddress,
  isIP: isIP,
  isIPRange: isIPRange,
  isFQDN: isFQDN,
  isBoolean: isBoolean,
  isAlpha: isAlpha,
  isAlphanumeric: isAlphanumeric,
  isNumeric: isNumeric,
  isPort: isPort,
  isLowercase: isLowercase,
  isUppercase: isUppercase,
  isAscii: isAscii,
  isFullWidth: isFullWidth,
  isHalfWidth: isHalfWidth,
  isVariableWidth: isVariableWidth,
  isMultibyte: isMultibyte,
  isSurrogatePair: isSurrogatePair,
  isInt: isInt,
  isFloat: isFloat,
  isDecimal: isDecimal,
  isHexadecimal: isHexadecimal,
  isDivisibleBy: isDivisibleBy,
  isHexColor: isHexColor,
  isISRC: isISRC,
  isMD5: isMD5,
  isHash: isHash,
  isJWT: isJWT,
  isJSON: isJSON,
  isEmpty: isEmpty,
  isLength: isLength,
  isByteLength: isByteLength,
  isUUID: isUUID,
  isMongoId: isMongoId,
  isAfter: isAfter,
  isBefore: isBefore,
  isIn: isIn,
  isCreditCard: isCreditCard,
  isISIN: isISIN,
  isISBN: isISBN,
  isISSN: isISSN,
  isMobilePhone: isMobilePhone,
  isPostalCode: isPostalCode,
  isPostalCodeLocales: locales,
  isCurrency: isCurrency,
  isISO8601: isISO8601,
  isRFC3339: isRFC3339,
  isISO31661Alpha2: isISO31661Alpha2,
  isISO31661Alpha3: isISO31661Alpha3,
  isBase64: isBase64,
  isDataURI: isDataURI,
  isMagnetURI: isMagnetURI,
  isMimeType: isMimeType,
  isLatLong: isLatLong,
  ltrim: ltrim,
  rtrim: rtrim,
  trim: trim,
  escape: escape,
  unescape: unescape,
  stripLow: stripLow,
  whitelist: whitelist,
  blacklist: blacklist$1,
  isWhitelisted: isWhitelisted,
  normalizeEmail: normalizeEmail,
  toString: toString
};

return validator;

})));


/*=================================================================
=            ReactiveLocalStorage validation extension            =
=================================================================*/

ReactiveLocalStorage.registeredValidators = {};

ReactiveLocalStorage.registerParamValidator = function(param, validationFunction) {
	ReactiveLocalStorage.registeredValidators[param] = validationFunction;
};

ReactiveLocalStorage.validateParam = function(paramToValidate, functionCallback) {
	var currentValue = ReactiveLocalStorage.getParam(paramToValidate);
	var validationResult = "";
	if (ReactiveLocalStorage.registeredValidators && ReactiveLocalStorage.registeredValidators[paramToValidate]) {
		validationResult = ReactiveLocalStorage.registeredValidators[paramToValidate](currentValue);
	} else {
		console.error('No validator registered for '+paramToValidate);
	}

	if (typeof functionCallback === 'function') {
		functionCallback(validationResult);
	}

	return validationResult;
};

function showErrorForElement(elm, validationResult) {
	if (typeof validationResult === 'undefined') {
		validationResult === "";
	}

	var errorMsg = "⚠ ⚠ ⚠"; //defaults to triangle exclamation
	var errorDiv = elm.parent().find('[js-selector="validation-error-msg"]');
	if (errorDiv.length === 0) {
		errorDiv = $('<div class="bem-error-text" js-selector="validation-error-msg"></div>');
	}

	errorMsgFromElm = elm.attr('err-txt__'+validationResult);
	console.log(errorMsgFromElm);
	console.log(validationResult);
	if (typeof errorMsgFromElm !== "undefined") {
		errorMsg = errorMsgFromElm;
	}

	errorDiv.text(errorMsg);
	elm.after(errorDiv);
	elm.removeClass('is-correct');
	elm.find('[validation-add-class]').removeClass('is-correct');
	elm.addClass('is-error');
	elm.find('[validation-add-class]').addClass('is-error');
	elm.attr('has-error', 'true');
}

function hideErrorForElement(elm) {
	var errorDiv = elm.parent().find('[js-selector="validation-error-msg"]');
	elm.addClass('is-correct');
	elm.find('[validation-add-class]').addClass('is-correct');
	elm.removeClass('is-error');
	elm.find('[validation-add-class]').removeClass('is-error');
	elm.removeAttr('has-error');
	errorDiv.remove();
}

function handleErrorForElement(elm, validationResult) {
	if (validationResult === 'good') {
		hideErrorForElement(elm);
	} else {
		showErrorForElement(elm, validationResult);
	}
}

//automatically searches for DOM elements that need to be validated and show error for them
//based on DOM attributes
ReactiveLocalStorage.validateElementChildren = function(elm, callbacksObject) {
	elm.find('[validated-param]').filter(':visible').each(function() {
		var relatedField = $(this);
		var paramToValidate = $(this).attr('validated-param');
		ReactiveLocalStorage.validateParam(paramToValidate, function(validationResult) {
			handleErrorForElement(relatedField, validationResult);
		});
	});
	var numberOfErrors = elm.find('[has-error]').length;

	//var numberOfErrors = elm.find('[has-error]').length;
	if (numberOfErrors === 0) {
		console.log('no errors');
		console.log(callbacksObject);
		if (callbacksObject && callbacksObject.onSuccess) {
			callbacksObject.onSuccess();
		}
	} else {
		if (callbacksObject && callbacksObject.onError) {
			callbacksObject.onError();
		}
	}
	//IDEA/TODO: validateElementChildren could return an array of errors
};

ReactiveLocalStorage.setDefaultParamAndValidationRules = function(param, options) {
	if (options && typeof options.default !== 'undefined') {
		console.log(options);
		ReactiveLocalStorage.setDefaultParam(param, options.default);
	}
	ReactiveLocalStorage.registerParamValidator(param, options.validationFunction);
}

// validation on blur for elements with additional attribute validate-on-blur
// we will show errors only if usered focused the field at least once
// if you want to validate after each entered character, you need to use "update-on-input" attr
// for text inputs
$(document).on('preloadingComplete', function() {
	$(document).on('focus', '[validated-param][validate-on-blur]:not([is-touched])', function() {

		var relatedInput = $(this);

		var relatedParam = $(this).attr('validated-param');

  	relatedInput.attr('is-touched', 'true');

    relatedInput.on('blur', function() {
    	ReactiveLocalStorage.validateParam(relatedParam, function(validationResult) {
    		handleErrorForElement(relatedInput, validationResult);
    	});
    });

	});
});

// you can decide if you want to revalidate the field after it was changed by user
// just add attribute 'validate-on-click' -- better for radio buttons
$(document).on('preloadingComplete', function() {
	$(document).on('click', '[validated-param][validate-on-click]:not([is-touched])', function() {
		var relatedParam = $(this).attr('validated-param');
    	var relatedInput = $(this);

    	relatedInput.attr('is-touched', 'true');

    	ReactiveLocalStorage.validateParam(relatedParam, function(validationResult) {
    		handleErrorForElement(relatedInput, validationResult);
    	});

    	ReactiveLocalStorage.onParamChange(relatedParam, function(value) {
	    	ReactiveLocalStorage.validateParam(relatedParam, function(validationResult) {
	    		handleErrorForElement(relatedInput, validationResult);
	    	});
	    });

	});
});

// you can decide if you want to revalidate the field after it was changed by user
// just add attribute 'validate-on-change' -- better for select dropdowns
$(document).on('preloadingComplete', function() {
	$(document).on('click', '[validated-param][validate-on-change]:not([is-touched])', function() {
		var relatedParam = $(this).attr('validated-param');
  	var relatedInput = $(this);

  	relatedInput.attr('is-touched', 'true');

  	ReactiveLocalStorage.onParamChange(relatedParam, function(value) {
    	ReactiveLocalStorage.validateParam(relatedParam, function(validationResult) {
    		handleErrorForElement(relatedInput, validationResult);
    	});
    });

	});
});


$(document).on('preloadingComplete', function() {
  $(document).on('click', 'input[validated-param][has-error]', function() {
    var relatedParam = $(this).attr('validated-param');
    var relatedInput = $(this);	

    if (!relatedInput.attr('was-clicked-when-had-error')) {
    	relatedInput.on('input', function() {
    		ReactiveLocalStorage.setParam(relatedParam, relatedInput.val());
    		ReactiveLocalStorage.validateParam(relatedParam, function(validationResult) {
    		  handleErrorForElement(relatedInput, validationResult);
    		});
    	});

    	relatedInput.attr('was-clicked-when-had-error', 'true');	
    }

  });
});

/*=====  End of ReactiveLocalStorage validation extension  ======*/


/* EXAMPLE

1. First register validators for each param separately

ReactiveLocalStorage.registerParamValidator('registration-email', function(value) {
	if (value === "") {
		return 'required';
	} else {
		return 'good';
	}
});

ReactiveLocalStorage.registerParamValidator('registration-password', function(value) {
	if (value === "") {
		return 'required';
	} else if (value.length < 8) {
		return 'too-short';
	} else {
		return 'good';
	}
});

2. When submitting form, you can use validateElementChildren thah will automatically
validate DOM elements that you marked with attribute "validated-param". You should store error
messages in DOM attributes "err-txt__your-validation-result", since different fields can have indiviudal more contextual errors

function submitEmailRegistrationForm() {
	var thisForm = $('[js-selector="registration-email-form"]');
	ReactiveLocalStorage.validateElementChildren(thisForm, {
		onSuccess: function() {
			registerUser();
		},
		onError: function() {
			var firstError = $('[has-error]').first();
			$('.page-wrapper').scrollTo(firstError); //you have full control of what happens after error
		}
	});
}

/*
EXAMPLE 2: more flexible - manually check params and handle Errors for each element
function submitEmailRegistrationForm() {
	var thisForm = $('[js-selector="registration-email-form"]');

    ReactiveLocalStorage.validateParam('registration-email', function(validationResult) {
    	var relatedField = thisForm.find('[validated-param="registration-email"]');

    	if (validationResult !== 'good') {
    		handleErrorForElement(relatedField, validationResult);
			return;
    	}

    	registerUser();
    });

}
*/

function hideWebflowDropdowns() {
    $(".w-dropdown-list").removeClass("w--open");
    $(".w-dropdown-toggle").removeClass("w--open");
}

//open and close Webflow dropdowns in ajax-loaded content
$(document).on('click', '.w-dropdown-toggle', function(event) {
    event.preventDefault();

    var thisDropdownButton = $(this);
    var thisDropdownList = $(this).next(".w-dropdown-list");
    var otherDropdownLists = $('.w-dropdown-list').not(thisDropdownList);
    var otherDropdownButtons = $('.w-dropdown-toggle').not(thisDropdownButton);

    thisDropdownButton.toggleClass('w--open');
    thisDropdownList.toggleClass("w--open");
    otherDropdownLists.removeClass('w--open');
    otherDropdownButtons.removeClass('w--open');
});

$(document).on('click.dropdown', document, function(event) {
    //if clicked outside the dropdown button and content, close it
    if ($(event.target).closest(".w-dropdown-toggle").length === 0 && $(event.target).closest(".w-dropdown-list").length === 0) {
        console.log("hide all dropdowns");
        hideWebflowDropdowns() 
    } else {
        //console.log("don't hide dropdowns");
    }
});

//Webflow tabs need this to work with Ajax content
//Add attribute ajax-true for tabs loaded with ajax. This is needed to prevent Webflow switching the tabs twice.
$(document).on('click', '[data-w-tab][ajax="true"]', function() {
    var tabToActivate = $(this).attr('data-w-tab');
    $(this).closest('.w-tabs').find('.w-tab-menu').find('.w--current').removeClass('w--current');
    $(this).closest('.w-tabs').find('.w-tab-content').find('.w--tab-active').removeClass('w--tab-active').end();
    $(this).addClass('w--current').closest('.w-tabs').find('.w-tab-content').find('[data-w-tab="'+tabToActivate+'"]').addClass('w--tab-active').end();
    console.log('ajaxTabs');
});

/* automatic triangles for popup boxes [unfinished]
function addBoxTriangle() {
    var box_background_color;
    var box_border_color;
    box_background_color === $('[box-triangle]').css('background-color');
    box_border_color === $('[box-triangle]').css('border-color');

    //triangles
    var triangle
} */

//sequential tabs, to use tabs as step by step flow
function inititTabsNextPrevActions() {
    $(document).on('click', '[tabs-nav="next"]', function() {
        $(this).closest('.w-tab-content').prev('.w-tab-menu').find('.w-tab-link.w--current').next('.w-tab-link').click();
    });

    $(document).on('click', '[tabs-nav="prev"]', function() {
        $(this).closest('.w-tab-content').prev('.w-tab-menu').find('.w-tab-link.w--current').prev('.w-tab-link').click();
    });
}
  
$(document).ready(function() {
    inititTabsNextPrevActions();
});

//links with attributes, without link blocks
$(document).on('click', '[click-link]', function(e) {
    e.preventDefault();
    console.log('manual link redirect');
    window.location.href = $(this).attr('click-link'); 
});




jQuery.fn.extend({
    fadeOutAndHide: function(duration, classToAdd, functionAfterFadeOut) {

        if (typeof classToAdd === 'undefined') {
            classToAdd = 'is-hidden';
        } else if (typeof classToAdd === 'function') {
            functionAfterFadeOut = classToAdd;
            classToAdd = 'is-hidden';
        }

    	if (this.hasClass(classToAdd) === false) {
    		this.transition({opacity: 0}, duration, function() {
    			$(this).addClass(classToAdd);
                if (typeof functionAfterFadeOut !== 'undefined') functionAfterFadeOut();
    		});	
    	}
    },
    showAndFadeIn: function(duration, classToRemove, functionBeforeShowing) {
    	if (typeof classToRemove === 'undefined') {
            classToRemove = 'is-hidden';
        } else if (typeof classToRemove === 'function') {
            functionBeforeShowing = classToRemove;
            classToRemove = 'is-hidden';
        }

    	if (this.hasClass(classToRemove) === true) {
	    	this.transition({opacity: 0}, 0, function() {
                $(this).removeClass(classToRemove);
                if (typeof functionBeforeShowing !== 'undefined') functionBeforeShowing();
	    		$(this).transition({opacity: 1}, duration);
	    	});
    	}
    },
    showWithScaleEffect: function(duration, classToToggle, functionBeforeShowing) {
        if (typeof classToToggle === 'undefined') {
            classToToggle = 'is-hidden';
        } else if (typeof classToToggle === 'function') {
            functionBeforeShowing = classToToggle;
            classToToggle = 'is-hidden';
        }
        
        if (this.hasClass(classToToggle) === true) {
            this.transition({opacity: 0, scale: 0.8}, 0, function() {
                if (typeof functionBeforeShowing !== 'undefined') functionBeforeShowing();
                $(this).removeClass(classToToggle);
                $(this).transition({opacity: 1, scale: 1}, duration);
            });
        }
    },
    hideWithScaleEffect: function(duration, classToToggle, functionAfterFadeOut) {
        
        if (typeof classToToggle === 'undefined') {
            classToToggle = 'is-hidden';
        } else if (typeof classToToggle === 'function') {
            functionAfterFadeOut = classToToggle;
            classToToggle = 'is-hidden';
        }

        if (this.hasClass(classToToggle) === false) {
            this.transition({opacity: 0, scale: 0.8}, duration, function() {
                $(this).addClass(classToToggle);
                if (typeof functionAfterFadeOut !== 'undefined') functionAfterFadeOut();
            }); 
        }
    },
    showWithScaleEffect: function(duration, classToToggle, functionBeforeShowing) {
        if (typeof classToToggle === 'undefined') {
            classToToggle = 'is-hidden';
        } else if (typeof classToToggle === 'function') {
            functionBeforeShowing = classToToggle;
            classToToggle = 'is-hidden';
        }

        if (typeof functionBeforeShowing === 'undefined') {
            functionBeforeShowing = function() {};
        }
        
        if (this.hasClass(classToToggle) === true) {
            this.transition({opacity: 0, scale: 0.8}, 0, function() {
                functionBeforeShowing();
                $(this).removeClass(classToToggle);
                $(this).transition({opacity: 1, scale: 1}, duration);
            });
        }
    },    
    loadAndFadeIn: function(whatToLoad, duration, callbackFunctionBeforeFadeIn) {
        var containerToLoadAndFadeIn = this;
        containerToLoadAndFadeIn.transition({opacity: 0}, 0, function() {
            containerToLoadAndFadeIn.load(whatToLoad, function() {
                if (typeof callbackFunctionBeforeFadeIn !== 'undefined') callbackFunctionBeforeFadeIn();
                containerToLoadAndFadeIn.transition({opacity: 1}, duration);
            });
        });   
    },
    // showWithVerticalSlideEffect: function(duration, classToToggle, functionBeforeShowing) {
    //     if (typeof classToToggle === 'undefined') {
    //         classToToggle = 'is-hidden';
    //     } else if (typeof classToToggle === 'function') {
    //         functionBeforeShowing = classToToggle;
    //         classToToggle = 'is-hidden';
    //     }

    //     if ($(this).closest('.slide-transition-wrapper').length === 0) {
    //         $(this).wrap('<div class="slide-transition-wrapper">');
    //     }

    //     var $thisTransitionWrapper = $(this).closest('.slide-transition-wrapper');
    //     var $thisElement = $(this);
        
    //     if ($thisElement.hasClass(classToToggle) === true) {
    //         $thisTransitionWrapper.transition({opacity: 0, maxHeight: 0, overflow: 'hidden'}, 0, function() {
    //             if (typeof functionBeforeShowing !== 'undefined') functionBeforeShowing();
    //             $thisElement.removeClass(classToToggle);
    //             var originalHeight = $thisElement.height();
    //             $thisTransitionWrapper.transition({opacity: 1, maxHeight: originalHeight + 200}, duration, function() {
    //                 $thisTransitionWrapper.attr({style: ''});
    //             });
    //         });
    //     }
    // }, 
    // hideWithVerticalSlideEffect: function(duration, classToToggle, functionAfterFadeOut) {

    //     if (typeof classToToggle === 'undefined') {
    //         classToToggle = 'is-hidden';
    //     } else if (typeof classToToggle === 'function') {
    //         functionAfterFadeOut = classToToggle;
    //         classToToggle = 'is-hidden';
    //     }

    //     if ($(this).closest('.slide-transition-wrapper').length === 0) {
    //         $(this).wrap('<div class="slide-transition-wrapper">');
    //     }

    //     var $thisTransitionWrapper = $(this).closest('.slide-transition-wrapper');
    //     var $thisElement = $(this);

    //     var originalHeight = $thisTransitionWrapper.height();
    //     console.log(originalHeight);

    //     if ($thisElement.hasClass(classToToggle) === false) {
    //         $thisTransitionWrapper.transition({opacity: 1, maxHeight: originalHeight + 200, overflow: 'hidden'}, 0, function() {
    //             $thisTransitionWrapper.transition({opacity: 0, maxHeight: 0}, duration, function() {
    //                 $thisElement.addClass(classToToggle);
    //                 if (typeof functionAfterFadeOut !== 'undefined') functionAfterFadeOut();
    //                 $thisElement.attr({style: ''});
    //             }); 
    //         });
    //     }
    // },
});

//Idea: show with directional effect, coming from where mouse was clicked
//Get XY coordinates where mouse was clicked on screen
//Get coordinates where the target element is shown on screen
//Calculate the delta between them
//Use this delta for CSS transition XY
jQuery.fn.extend({
    showWithClickTransitionEffect: function(duration, classToToggle, functionBeforeShowing) {
        if (typeof classToToggle === 'undefined') {
            classToToggle = 'is-hidden';
        } else if (typeof classToToggle === 'function') {
            functionBeforeShowing = classToToggle;
            classToToggle = 'is-hidden';
        }

        if (typeof functionBeforeShowing === 'undefined') {
            functionBeforeShowing = function() {};
        }

        if (this.hasClass(classToToggle) === true) {
            this.transition({opacity: 0, scale: 0.2}, 0, function() {
                functionBeforeShowing();
                $(this).removeClass(classToToggle);

                var clickX = event.pageX;
                var clickY = event.pageY;

                var leftPos  = this[0].getBoundingClientRect().left   + $(window)['scrollLeft']();
                var rightPos = this[0].getBoundingClientRect().right  + $(window)['scrollLeft']();
                var topPos   = this[0].getBoundingClientRect().top    + $(window)['scrollTop']();
                var bottomPos= this[0].getBoundingClientRect().bottom + $(window)['scrollTop']();
                var centerX = (leftPos+rightPos)/2;
                var centerY = (topPos+bottomPos)/2;

                var xDelta = centerX - clickX;
                var yDelta = centerY - clickY;

                console.log(event);
                console.log(clickY)
                console.log(topPos);
                console.log(xDelta);
                console.log(yDelta);

                $(this).transition({x: -xDelta*2.5, y: -yDelta*2.5}, 0, function() {
                    $(this).transition({opacity: 1, scale: 1, x: 0, y: 0}, duration);
                });
            });
        }

    }
});







var tooltipsterTrigger = 'custom';

var tooltipsterTriggerOpen = {
    mouseenter: true,
    touchstart: true,
    tap: true,
    click: true
};

var tooltipsterTriggerClose = {
    mouseleave: true,
    scroll: true,
    tap: true
};

function initTooltipster(containerToInit) {
    containerToInit = containerToInit || 'body';
    console.log(containerToInit);
    $(containerToInit).not('.tooltipstered').find('[tooltipster="top"]:not(.tooltipstered)').tooltipster({
        position: 'top',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 20,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="bottom"]:not(.tooltipstered)').tooltipster({
        position: 'bottom',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 20,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="left"]:not(.tooltipstered)').tooltipster({
        position: 'left',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 20,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="right"]:not(.tooltipstered)').tooltipster({
        position: 'right',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 20,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="right-delay"]:not(.tooltipstered)').tooltipster({
        position: 'right',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 800,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="top-delay"]:not(.tooltipstered)').tooltipster({
        position: 'top',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 800,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="left-delay"]:not(.tooltipstered)').tooltipster({
        position: 'left',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 800,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
    $(containerToInit).not('.tooltipstered').find('[tooltipster="bottom-delay"]:not(.tooltipstered)').tooltipster({
        position: 'bottom',
        trigger: 'custom',
        triggerOpen: tooltipsterTriggerOpen,
        triggerClose: tooltipsterTriggerClose,
        hideOnClick: false,
        animation: 'fade',
        delay: 800,
        animationDuration: 150,
        maxWidth: 280,
        theme: 'tooltipster-borderless',
        restoration: 'current'
    });
}

//also init tooltipster immediately, to prevent bugs and calling methods on uninitialised elements
initTooltipster();

$(document).on('preloadingComplete', function() {
    initTooltipster();
});

//Elements with action-open-modal should show modals container and 
// and show the respective modal modal
$(document).on('click', '[action-open-modal]', function(event) {
    var modalToLoad = $(this).attr("action-open-modal");
    QueryStringRouter.setParam('modalContent', modalToLoad);
     
    hideWebflowDropdowns();      
});

$(document).on('click', '[action-close-modal="true"]', function(event) {
    if (QueryStringRouter.getNumberOfPreviousNavigationStepsInModal() >= 1) {
        QueryStringRouter.goBackBeforeModal();
    } else {
        QueryStringRouter.removeParam('modalContent', {doNotCreateHistoryState: true});
    }
});

function bindEscButtonToCloseModal() {
    $(document).one('keydown.modal', function(event) {
        if (event.which === 27) {
            QueryStringRouter.removeParam('modalContent', {doNotCreateHistoryState: true});
        }
    });
}

function closeModal() {
    //deselectAll();
    $(".modal-wrapper").fadeOutAndHide(300);
    $('[modal-id]').addClass('hidden');          
}

QueryStringRouter.onParamChange('modalContent', function(value) {
    if (typeof value != 'undefined') {
        if ($(".modal-wrapper").hasClass('is-hidden')) {
            $(".modal-wrapper").showAndFadeIn(200, function() {
                $('[modal-id]').not('[modal-id="'+value+'"]').addClass('is-hidden');
                $('[modal-id="'+value+'"]').removeClass('is-hidden');
            });
        } else {
            $('[modal-id]').not('[modal-id="'+value+'"]').addClass('is-hidden');
            $('[modal-id="'+value+'"]').removeClass('is-hidden');
        }

        //esc button closes modal, binded only after modal was opened
        bindEscButtonToCloseModal();
    } else {
        closeModal();
    }
});


//modal generic action
$(document).on('click', '[action-show-modal]', function() {
    var modalContentToShow = $(this).attr('action-show-modal');
    QueryStringRouter.setParam('modalContent', modalContentToShow);
});

//Webflow dropdowns as select dropdown
//Each dropdown state is stored in a separate reactive local storage state
$(document).on('click', '[choice-value]', function() {
    var valueToSet = $(this).attr('choice-value');
    var paramToSet = $(this).closest('[action-select-dropdown]').attr('action-select-dropdown');
    ReactiveLocalStorage.setParam(paramToSet, valueToSet);
    $(this).closest('[action-select-dropdown]').find('.select-dropdown__list.w-dropdown-list').removeClass('w--open');
    hideWebflowDropdowns();
});

$(document).on('preloadingComplete', function() { //need to wait for all the ajax to load
    $('[action-select-dropdown]').each(function() {
        var paramToChange = $(this).attr('action-select-dropdown');

        //default state is the first from the dropdown chosen-values options
        var firstAvailableChoice = $(this).find('[chosen-value]').attr('chosen-value');
        ReactiveLocalStorage.setDefaultParam(paramToChange, firstAvailableChoice );

        ReactiveLocalStorage.onParamChange(paramToChange, function(value) {
            var chosenItem = $('[action-select-dropdown="'+paramToChange+'"]').find('[chosen-value="'+value+'"]');
            var otherNotChosenItems = $('[action-select-dropdown="'+paramToChange+'"]').find('[chosen-value]').not(chosenItem);
            chosenItem.removeClass('is-hidden');
            otherNotChosenItems.addClass('is-hidden');
        });
    });
});


//Each checkbox state is stored in reactivelocalstorage
$(document).on('click', '[action-radio-buttons] [chosen-value]', function(event) {
    var paramToChange = $(this).closest('[action-radio-buttons]').attr('action-radio-buttons');
    var valueToSet = $(this).attr('chosen-value');

    ReactiveLocalStorage.setParam(paramToChange, valueToSet );
});

$(document).on('preloadingComplete', function() { //need to wait for all the ajax to load
    $('[action-radio-buttons]').each(function() {
        var paramToChange = $(this).attr('action-radio-buttons');

        ReactiveLocalStorage.onParamChange(paramToChange, function(value) {
            var chosenItem = $('[action-radio-buttons="'+paramToChange+'"]').find('[chosen-value="'+value+'"]');
            var otherNotChosenItems = $('[action-radio-buttons="'+paramToChange+'"]').find('[chosen-value]').not(chosenItem);
            chosenItem.addClass('is-selected');
            chosenItem.find('[chosen-icon-inside]').removeClass('is-hidden');
            otherNotChosenItems.removeClass('is-selected');
            otherNotChosenItems.find('[chosen-icon-inside]').addClass('is-hidden');
        });
    });
});

//This will bind all the input fields for the Reactive Local Storage, so that we can update rest ot the page based on this state
//either on input or on focus out

$(document).on('blur', '[action-text-input]', function(event) {
    var thisAttr = $(this).attr('action-text-input');
    ReactiveLocalStorage.setParam(thisAttr, $(this).val() );
});

$(document).on('input', '[action-text-input][update-on-input="true"]', function(event) {
    var thisAttr = $(this).attr('action-text-input');
    var thisInputValue = $(this).val();
    console.log(thisInputValue);
    if (typeof thisInputValue !== 'undefined' && event.target.validity.valid) {
        ReactiveLocalStorage.setParam(thisAttr, $(this).val() );
    }
});

$(document).on('preloadingComplete', function() { //need to wait for all the ajax to load

    //for each input field existing in the html we check if there's a matching state
    $('[action-text-input]').each(function() {
        var paramToChange = $(this).attr('action-text-input');

        ReactiveLocalStorage.onParamChange(paramToChange, function(value) {
            $('[action-text-input="'+paramToChange+'"]').val(value);
        });
    });

});

//This will bind all checkboxes with attribute [action-checkbox] the Reactive Local Storage, so that we can update rest ot the page based on this state
//either on input or on focus out

$(document).on('preloadingComplete', function() { //need to wait for all the ajax to load

    //Each checkbox state is stored in reactivelocalstorage
    $(document).on('click', '[action-checkbox]', function(event) {
    	var paramToChange = $(this).attr('action-checkbox');
    	var valueToSet;
    	if (ReactiveLocalStorage.getParam(paramToChange) == 'true') {
    		valueToSet = 'false';
    	} else {
    		valueToSet = 'true';
    	}

    	ReactiveLocalStorage.setParam(paramToChange, valueToSet );
    });

    $('[action-checkbox]').each(function() {
        var paramToChange = $(this).attr('action-checkbox');
        
        //default state is the Webflow default state based on the class
        var $thisCheckmark = $(this).find('.bem-checkbox__checkmark');
        var initialCheckedState;
        if ($thisCheckmark.hasClass('is-unchecked') ) {
        	initialCheckedState = 'false';
        } else if ( $thisCheckmark.hasClass('is-checked') ) {
        	initialCheckedState = 'true';
        }
        ReactiveLocalStorage.setDefaultParam(paramToChange, initialCheckedState );

        ReactiveLocalStorage.onParamChange(paramToChange, function(value) {
            //fallback for weid autofill behaviour
            if (value !== "false" && value !== "true") {value = "false";}

            if (value == 'true') {
            	$thisCheckmark.addClass('is-checked').removeClass('is-unchecked');
            } else if (value == 'false') {
            	$thisCheckmark.removeClass('is-checked').addClass('is-unchecked');
            }
        });
    });

});








/*
How to bind an array?
Add attributes to the DOM
- data-bind-array="paramWithArrayToBind"
- data-bind-repeatable-template="true"
 for the item that will repeat
- data-bind-array-empty-state="true" for empty state container

Then initialise the binding by function, do it in a separate file related to the specific feature
ReactiveLocalStorageDataBindArrayList('transactionsInProgressList', function($elementToAppend, elementData) {
	//callback what to do with each item
	//so you can modify each of then depending on state,

	console.log(elementData);
	if (elementData.status === 'pending') {
		$elementToAppend.find('[data-bind="status__is-pending"]').addClass('is-hidden');
	} else {
		$elementToAppend.find('[data-bind="status__is-pending"]').removeClass('is-hidden');
	}
});

*/


function ReactiveLocalStorageDataBindArrayList(paramNameWithArray, functionToModifyEachItemBeforeShowing) {

	//DON"T SET DEFAULT EMPTY ARRAY, BECAUSE THERE"S A BUG WITH $.PARAM IN REACTIVELOCALSTORAGE
	//ReactiveLocalStorage.setDefaultParam(paramNameWithArray, []);

	ReactiveLocalStorage.onParamChange(paramNameWithArray, function(value) {

		var $thisList = $('[data-bind-array="'+paramNameWithArray+'"]');

		//there might be more than one table binded to the same array, hence "each"
		$thisList.each(function(thisListIndex, thisListValue) {

			var $repeatableElementTemplate = $thisList.find('[data-bind-repeatable-template]').first();
			var $parentContainerWhereWeAppend = $repeatableElementTemplate.parent();

			//the template is stored in html, so we want to hide it and only use it later
			//as a tempalte source for repeatable items
			$repeatableElementTemplate.find('.tooltipstered').tooltipster('destroy');
			$repeatableElementTemplate.addClass('is-hidden'); 

			//empty the list before rerendering
			$thisList.find('[data-bind-repeatable-clone]').remove();

			if (typeof value !== 'undefined' && value.length !== 0 && !$.isEmptyObject(value) ) {
				$thisList.find('[data-bind-array-empty-state]').addClass('is-hidden');

				$.each(value, function(arrayIndex, arrayValue) {

					//prepare template
					var $elementToAppend = $repeatableElementTemplate.clone();
					$elementToAppend.removeAttr('data-bind-repeatable-template');
					$elementToAppend.attr('data-bind-repeatable-clone', 'true');

					//map object attributes as attributes to DOM
					//we need this to quickly reference respective object in ReactiveLocalStorage
					if (typeof arrayValue == 'object') {
						$.each(arrayValue, function(objectIndex, objectValue) {
							$elementToAppend.attr('item-data-'+objectIndex, objectValue);
						});
					}

					$elementToAppend.appendTo($parentContainerWhereWeAppend);

					$elementToAppend.showAndFadeIn(0, function() {
						//we pass the $elementToAppend to the function, so that we can 
						//refer to it from other places where we init the binding
						functionToModifyEachItemBeforeShowing($elementToAppend, arrayValue);
					});
				});
			} else {
				$thisList.find('[data-bind-array-empty-state]').removeClass('is-hidden');
			}

			initTooltipster($thisList);

		});
	});
}

//use this to bind elements with attribute data-bind to selected reactive local storage params
function ReactiveLocalStorageDataBindText(objectWithAttrubiteValuePairs) {
	$.each(objectWithAttrubiteValuePairs, function(attribute, bidedParamValue) {
		ReactiveLocalStorage.onParamChange(bidedParamValue, function(value) {
			$('[data-bind="'+attribute+'"]').text(value);
		});
	});
}

//automatically bind [data-bind-param] to related local storage param
$(document).on('preloadingComplete', function() {
	$('[data-bind-param]').each(function() {
		var paramToBind = $(this).attr('data-bind-param');
		ReactiveLocalStorage.onParamChange(paramToBind, function(value) {
			$('[data-bind-param="'+paramToBind+'"]').text(value);
		});
	});
});








function ReactiveLocalStorageOnParamChangeShowElementsOnlyWhenParamXEqualsY(param, paramValue) {
	ReactiveLocalStorage.onParamChange(param, function(value) {
		if (value === paramValue) {
		    $('[show-when-'+param+']').not('[show-when-'+param+'='+paramValue+']').addClass('is-hidden');
		    $('[show-when-'+param+'='+paramValue+']').removeClass('is-hidden');
		} else {
			$('[show-when-'+param+']').not('[show-when-'+param+'='+paramValue+']').addClass('is-hidden');
		}
	});
}

function ReactiveLocalStorageDependVisibilityOnParam(paramName) {
	ReactiveLocalStorage.onParamChange(paramName, function(value) {
		//TODO refactor needed
		$('[depends-on-param="'+paramName+'"]').not('[action-show-when-param-equals="'+value+'"]').not('[action-hide-when-param-equals]').not('[action-show-when-param-not-equals]').addClass('is-hidden');
		$('[depends-on-param="'+paramName+'"]').filter('[action-show-when-param-equals="'+value+'"]').removeClass('is-hidden');
		$('[depends-on-param="'+paramName+'"]').filter('[action-show-when-param-not-equals]').each(function() {
			var paramToCompare = $(this).attr('action-show-when-param-not-equals');
			if (paramToCompare !== value && typeof value !== 'undefined') {
				$(this).removeClass('is-hidden');
			} else if (typeof value !== 'undefined') {
				$(this).addClass('is-hidden');
				console.log('test');
			}
		});
		console.log('test outer');
	});
}

function ReactiveLocalStorageHideWhenParamEquals(paramName) {
	ReactiveLocalStorage.onParamChange(paramName, function(value) {
		$('[depends-on-param="'+paramName+'"]').not('[action-hide-when-param-equals="'+value+'"]').not('[action-show-when-param-equals]').not('[action-show-when-param-not-equals]').removeClass('is-hidden');
		$('[depends-on-param="'+paramName+'"]').filter('[action-hide-when-param-equals="'+value+'"]').addClass('is-hidden');
	});
}


function ReactiveLocalStorageHideIfParamNotUndefined(paramName) {
	ReactiveLocalStorage.onParamChange(paramName, function(value) {
		if ( (typeof value !== 'undefined') || (value !== 'not-selected') ) {
			$('[depends-on-param="'+paramName+'"]').filter('[action-hide-when-not-undefined]').addClass('is-hidden');
		} else {
			$('[depends-on-param="'+paramName+'"]').filter('[action-hide-when-not-undefined]').removeClass('is-hidden');
		}
	});
}

function ReactiveLocalStorageShowIfParamUndefined(paramName) {
	ReactiveLocalStorage.onParamChange(paramName, function(value) {
		if ( (typeof value === 'undefined') || (value === 'not-selected') ) {
			$('[depends-on-param="'+paramName+'"]').filter('[action-show-when-undefined]').removeClass('is-hidden');
		} else {
			$('[depends-on-param="'+paramName+'"]').filter('[action-show-when-undefined]').addClass('is-hidden');
		}
	});
}

function ReactiveLocalStorageHideIfParamUndefined(paramName) {
	ReactiveLocalStorage.onParamChange(paramName, function(value) {
		if ( (typeof value === 'undefined') || (value === 'not-selected') ) {
			$('[depends-on-param="'+paramName+'"]').filter('[action-hide-when-undefined]').addClass('is-hidden');
		} else {
			$('[depends-on-param="'+paramName+'"]').filter('[action-hide-when-undefined]').removeClass('is-hidden');
		}
	});
}

$(document).on('preloadingComplete', function() {
	$('[depends-on-param]').each(function() {
		var paramToDependOn = $(this).attr('depends-on-param');
		ReactiveLocalStorageDependVisibilityOnParam(paramToDependOn);
		ReactiveLocalStorageHideWhenParamEquals(paramToDependOn);
		ReactiveLocalStorageHideIfParamNotUndefined(paramToDependOn);
		ReactiveLocalStorageShowIfParamUndefined(paramToDependOn);
		ReactiveLocalStorageHideIfParamUndefined(paramToDependOn);
	});

	ReactiveLocalStorage.setDefaultParam('show-elements-hidden-for-future', 'false');
	$('[hide-for-future]').each(function() {
		if (ReactiveLocalStorage.getParam('show-elements-hidden-for-future') === 'false') {
			$(this).remove();
		} else {
			//keep the elements
		}
	});
});

$(document).on('preloadingComplete', function() {

	$('[action-tab]').each(function() {
		var tabsGroup = $(this).attr('tabs-group');
		var tabIdToBind = $(this).attr('action-tab');

		QueryStringRouter.onParamChange('tabs__'+tabsGroup, function(value) {
			if (typeof value != 'undefined') {
				$('[tabs-group="'+tabsGroup+'"][tab-id="'+value+'"]').removeClass('is-hidden');
				$('[tabs-group="'+tabsGroup+'"][tab-id]').not('[tab-id="'+value+'"]').addClass('is-hidden');

				$('[tabs-group="'+tabsGroup+'"][action-tab]').not('[action-tab="'+value+'"]').removeClass('is-current');
				$('[tabs-group="'+tabsGroup+'"][action-tab="'+value+'"]').addClass('is-current');
			}
		});

	}); 

	$(document).on('click', '[action-tab]', function(event) {
		var clickedTab = $(this).attr('action-tab');
		var clickedTabGroup = $(this).attr('tabs-group');
		QueryStringRouter.setParam('tabs__'+clickedTabGroup, clickedTab, {doNotCreateHistoryState: true});
	});
});

//prevent submitting forms by clicking enter
$(document).on('preloadingComplete', function() {
	$('form').each(function() {
		$(this).on('submit', function (event){
			event.preventDefault();
		});
	});
});

$(document).on('click', '[prevent-default]', function(event) {
	event.preventDefault();
});

$(document).on('click', '[stop-propagation]', function(event) {
	event.stopPropagation();
});

function showSpinnerInClickedButton(clickedButtonElm, actionAfter) {
	clickedButtonElm.closest('[js-selector="button-with-spinner"]').addClass('is-inactive-with-preloader')
	  .find('[js-selector="button-spinner-icon"]').removeClass('is-hidden');

	setTimeout(function() {
		clickedButtonElm.closest('[js-selector="button-with-spinner"]').removeClass('is-inactive-with-preloader')
		  .find('[js-selector="button-spinner-icon"]').addClass('is-hidden');

		actionAfter();
	}, 1500);
}

function showLoadingInButton(elm) {
	elm = $(elm);
	elm.addClass('is-grayed-out');
	elm.addClass('is-with-spinner-shown');
	elm.parent().attr('is-inactive-with-preloader', 'true')
	.find('[js-selector="button-spinner-icon"]').removeClass('is-hidden');
}

function hideLoadingInButton(elm) {
	elm = $(elm);
	elm.removeClass('is-grayed-out');
	elm.removeClass('is-with-spinner-shown');
	elm.parent().removeAttr('is-inactive-with-preloader')
	.find('[js-selector="button-spinner-icon"]').addClass('is-hidden');
}

$(document).on('click', '[is-inactive-with-preloader]', function(e) {
	e.preventDefault();
	e.stopPropagation();
	e.stopImmediatePropagation();
	return false;
})

//preload all views into respective containers
//until the subpages are loaded the UI is covered by loading overlay
//after they are preloaded, we retrigger the state of all components
//and fade in the UI to prevent flicker
//we can define for what specific events we wait until we show the UI, 
//for example we may want to preload not only subpages, but additional promo modals etc.


function recursivelyPreloadElements() {
	var preloadMissingElements = function() {
		var elementsThatWillBePreloaded = $('[preload-from]').not('[preloading-started]').not('[preloading-done]');
		//mark all elements that will be preloaded
		elementsThatWillBePreloaded.attr('preloading-started', 'true');

		elementsThatWillBePreloaded.each(function() {
			var elemToLoad = $(this).attr('preload-from');
			var $this = $(this);
			$this.load(elemToLoad + " .content-to-load", function() {
				$this.attr('preloading-done', 'true');
				checkIfEverythingIsPreloaded();
			});
		});
	};

	var checkIfEverythingIsPreloaded = function() {
		//check if there are no elements that has not yet been started preloading
		var numberOfUnitialisedElements = $('[preload-from]').not('[preloading-started]').not('[preloading-done]').length;
		var numberOfInProgressElements = $('[preload-from][preloading-started]').not('[preloading-done]').length;

		if (numberOfUnitialisedElements === 0 && numberOfInProgressElements === 0) {
			console.log('Everything preloaded and nothing in progress');
			$(document).trigger('preloadedElementsReady');
		} else if (numberOfUnitialisedElements === 0 && numberOfInProgressElements > 0) {
			//console.log('Preloading still in progress...');
			//do nothing because other elements will continue recursive preloading
		} else if (numberOfUnitialisedElements > 0){
			console.log('Noticed elements to preload...');
			preloadMissingElements(); //rerun the checking function
		}
	};

	checkIfEverythingIsPreloaded();
}

function initTheUIAfterPreloading() {
	$(document).trigger('preloadingComplete');
	QueryStringRouter.retriggerOnParamChangeForAll();
	ReactiveLocalStorage.retriggerOnParamChangeForAll();
	console.log('retriggerOnParamChangeForAll');
	$('.initial-load-overlay').fadeOutAndHide(500);
}

function waitForInitialAjaxLoadingToFinishThenShowUI(eventsToWaitFor, callbackFunction) {

	var numberOfEventsThatHappened = 0;

	$.each(eventsToWaitFor, function(index, value) {
		$(document).one(value, function() {
			//TODO refactor so that it checks if the specific events happened, not number of elements
			numberOfEventsThatHappened = numberOfEventsThatHappened + 1;
			if (numberOfEventsThatHappened === eventsToWaitFor.length) {
				console.log('preloading complete start'); 
				if (typeof callbackFunction === 'function') { callbackFunction(); }
				console.log('preloading complete end'); 
			}
		});
	});
}

waitForInitialAjaxLoadingToFinishThenShowUI([
	// reserved place in case we need to wait for more events
	'preloadedElementsReady'
], function() {
	$(document).ready(function() {
		console.log('document ready');
		initTheUIAfterPreloading();
	});
});

recursivelyPreloadElements();



/*========================================================================================================
=            FLashing notifications https://github.com/maciejsaw/jQuery-FlashingNotifications            =
========================================================================================================*/
var FlashingNotifications = (function() {

	var FlashingNotifications__timerOne = {};
	var FlashingNotifications__timerTwo = {};

	function hideNotification(notificationType, timeReservedForAnimation) {
		if (typeof timeReservedForAnimation !== 'number') {
			timeReservedForAnimation = 800;
		}

		//find and cache selected html object
		var $notificationBox = $('[js-selector="flashing-notification__'+notificationType+'"]');

		$notificationBox.addClass('is-transparent');
		clearTimeout(FlashingNotifications__timerTwo[notificationType]);
		FlashingNotifications__timerTwo[notificationType] = setTimeout(function() {
			$notificationBox.addClass('is-hidden');
		}, timeReservedForAnimation);
	}

	var closeButtonAlreadyBinded = false;
	function bindCloseButton(timeReservedForAnimation) {
		if (typeof timeReservedForAnimation !== 'number') {
			timeReservedForAnimation = 800;
		}

		if (closeButtonAlreadyBinded === false) {
			$(document).on('click.flashingNotifications', '[flashing-notifications__action-close-notification="true"]', function() {
				closeButtonAlreadyBinded = true;
				var $notificationBox = $(this).closest('[js-selector^="flashing-notification__"]');
				$notificationBox.addClass('is-transparent');
				setTimeout(function() {
					$notificationBox.addClass('is-hidden');
				}, timeReservedForAnimation);
			});
		}
	}

	function showAndHideNotification(notificationType, htmlToPlaceInsideNotification, timeToWaitBeforeHiding) {

		//default arguments
		if (typeof notificationType === 'undefined' || notificationType === "") {
			notificationType = "neutral";
		}
		if (typeof timeToWaitBeforeHiding === 'undefined' || timeToWaitBeforeHiding === "") {
			timeToWaitBeforeHiding = 3500;
		}
    
		//find and cache selected html object
		var $notificationBox = $('[js-selector="flashing-notification__'+notificationType+'"]');    

		var updateNotificationBoxText = function() {
			//only update html if argument provided
			if (htmlToPlaceInsideNotification !== "" || typeof htmlToPlaceInsideNotification !== 'undefined'); {
				$notificationBox.find('[js-selector="flashing-notification-text"]').html(htmlToPlaceInsideNotification);
			}
		};

		var showAndHideNotificationBox = function() {
			$notificationBox.removeClass('is-hidden');
			setTimeout(function() {
				$notificationBox.removeClass('is-transparent');

				clearTimeout(FlashingNotifications__timerOne[notificationType]);
				clearTimeout(FlashingNotifications__timerTwo[notificationType]);

				FlashingNotifications__timerOne[notificationType] = setTimeout(function() {
					hideNotification(notificationType);
				}, timeToWaitBeforeHiding);

			}, 20);
		};

		//If there's already a notification shown, first hide it and then show another one
		if ($notificationBox.hasClass('is-hidden') === false && $notificationBox.hasClass('is-transparent') === false) {
			hideNotification(notificationType);
			setTimeout(function() {
				updateNotificationBoxText();
				showAndHideNotificationBox();
			}, 1000);
		} else { //else simply show and hide notification
			updateNotificationBoxText();
			showAndHideNotificationBox();
		}

		bindCloseButton();

	}

	function hideAllNotifications() {
		hideNotification('success');
		hideNotification('error');
		hideNotification('neutral');
	}

	function immediatelyHideAllNotifications() {
		hideNotification('success', 0);
		hideNotification('error', 0);
		hideNotification('neutral', 0);
	}

	//TODO: options to disable hiding or separate method to just show and then automatically enforce X button, option to show and hide X button

	return {
		showAndHideNotification: showAndHideNotification,
		hideNotification: hideNotification,
		hideAllNotifications: hideAllNotifications,
		immediatelyHideAllNotifications: immediatelyHideAllNotifications,
	};

})();
/*=====  End of FLashing notifications https://github.com/maciejsaw/jQuery-FlashingNotifications  ======*/

$(document).on('click', '[action-collapse-next-div]', function() {
	$(this).next().toggleClass('is-hidden');
	$(this).find('[icon-to-rotate-when-expanding]').toggleClass('is-expanded');
});

$(document).on('click', '[action-show-next-section-and-hide-button]', function() {
	$(this).next().toggleClass('is-hidden');
	$(this).addClass('is-hidden');
});

On = {};

On.touchstartOrClick = function(selector, eventHandlerFunction) {
	$(document).on('click touchstart', selector, function(event) {

		var clickedElement = $(event.currentTarget);

		if (typeof eventHandlerFunction === 'function') {
			if (event.type === 'touchstart') {
			    $(document).off('click', selector);
		       	eventHandlerFunction(event);
		    	$(document).on('click', selector, function(event) {
		    		event.stopPropagation();
		    		event.preventDefault();
		    		return false;
		    	});
			} else {
				eventHandlerFunction(event);
			}
		} else {
			console.error('onTouchstartOrClick event handler is not a function');
		}
	});
};

function formatDecimalNumber(numberToFormat, decimalNumbers) {
  if (typeof decimalNumbers === 'undefined') {
    decimalNumbers === 2;
  }
  var number = parseFloat(numberToFormat);
  var formatted = (number.toFixed(decimalNumbers)).replace('.', ',');
  return formatted;
}

function stringToDecimal(stringToFormat) {
  var number = stringToFormat.replace(',', '.');
  number = parseFloat(number);
  return number;
}

function replaceComa(stringToFormat) {
  var cleaned = stringToFormat.replace(',', '.');
  return cleaned;
}


var API_HOST = 'http://23.97.142.115:4000';

var ROOT_QUERYSTRING_PARAMS = {
    subpage: 'form',
};

var URLs = {
	homepage: 'https://rachuneo.pl'
}

QueryStringRouter.setDefaultRootParams(ROOT_QUERYSTRING_PARAMS);

if ($.isEmptyObject(QueryStringRouter.getParam('subpage'))) {
	QueryStringRouter.setParam('subpage', 'form', {doNotCreateHistoryState: true});
}

// $(document).on('click', '[action-go-to-home-page]', function(event) {
// 	var currentParams = JSON.stringify(QueryStringRouter.getAllParams());
// 	console.log(currentParams);
// 	 if (currentParams === JSON.stringify(ROOT_QUERYSTRING_PARAMS)) {
// 	 	window.location.href = 'https://internetowykantor.pl';
// 	 } else {
// 	 	QueryStringRouter.setFreshParams(ROOT_QUERYSTRING_PARAMS);
// 	 }
// });

var FlashingNotifications = (function() {

	var FlashingNotifications__timerOne = {};
	var FlashingNotifications__timerTwo = {};

	function hideNotification(notificationType) {
		//find and cache selected html object
		var $notificationBox = $('[js-selector="flashing-notification__'+notificationType+'"]');

		$notificationBox.addClass('is-transparent');
		clearTimeout(FlashingNotifications__timerTwo[notificationType]);
		FlashingNotifications__timerTwo[notificationType] = setTimeout(function() {
			$notificationBox.addClass('is-hidden');
		}, 800);
	}

	var closeButtonAlreadyBinded = false;
	function bindCloseButton() {
		if (closeButtonAlreadyBinded === false) {
			$(document).on('click.flashingNotifications', '[flashing-notifications__action-close-notification="true"]', function() {
				closeButtonAlreadyBinded = true;
				var $notificationBox = $(this).closest('[js-selector^="flashing-notification__"]');
				$notificationBox.addClass('is-transparent');
				setTimeout(function() {
					$notificationBox.addClass('is-hidden');
				}, 800);
			});
		}
	}
	
	function showAndHideNotification(notificationType, htmlToPlaceInsideNotification, timeToWaitBeforeHiding) {

		//default arguments
		if (typeof notificationType === 'undefined' || notificationType === "") {
			notificationType = "neutral";
		}
		if (typeof timeToWaitBeforeHiding === 'undefined' || timeToWaitBeforeHiding === "") {
			timeToWaitBeforeHiding = 3500;
		}
    
		//find and cache selected html object
		var $notificationBox = $('[js-selector="flashing-notification__'+notificationType+'"]');    

		var updateNotificationBoxText = function() {
			//only update html if argument provided
			if (htmlToPlaceInsideNotification !== "" || typeof htmlToPlaceInsideNotification !== 'undefined'); {
				$notificationBox.find('[js-selector="flashing-notification-text"]').html(htmlToPlaceInsideNotification);
			}
		};

		var showAndHideNotificationBox = function() {
			$notificationBox.removeClass('is-hidden');
			setTimeout(function() {
				$notificationBox.removeClass('is-transparent');

				clearTimeout(FlashingNotifications__timerOne[notificationType]);
				clearTimeout(FlashingNotifications__timerTwo[notificationType]);

				FlashingNotifications__timerOne[notificationType] = setTimeout(function() {
					hideNotification(notificationType);
				}, timeToWaitBeforeHiding);

			}, 20);
		};

		//If there's already a notification shown, first hide it and then show another one
		if ($notificationBox.hasClass('is-hidden') === false && $notificationBox.hasClass('is-transparent') === false) {
			hideNotification(notificationType);
			setTimeout(function() {
				updateNotificationBoxText();
				showAndHideNotificationBox();
			}, 1000);
		} else { //else simply show and hide notification
			updateNotificationBoxText();
			showAndHideNotificationBox();
		}

		bindCloseButton();

	}

	function hideAllNotifications() {
		hideNotification('success');
		hideNotification('error');
		hideNotification('neutral');
	}

	//TODO: options to disable hiding or separate method to just show and then automatically enforce X button, option to show and hide X button

	return {
		showAndHideNotification: showAndHideNotification,
		hideNotification: hideNotification,
		hideAllNotifications: hideAllNotifications
	};

})();

/*========================================================================================================
=            FLashing notifications https://github.com/maciejsaw/jQuery-FlashingNotifications            =
========================================================================================================*/



/*=====  End of FLashing notifications https://github.com/maciejsaw/jQuery-FlashingNotifications  ======*/


function showHamburgerMenu() {
	$('[js-selector="sidebar"]').addClass('is-expanded');
	$('[js-selector="sidebar-overlay"]').removeClass('is-hidden');
	setTimeout(function() {
		$('[js-selector="sidebar-overlay"]').removeClass('is-transparent');
	}, 100);
}

function hideHamburgerMenu() {
	$('[js-selector="sidebar"]').removeClass('is-expanded');
	$('[js-selector="sidebar-overlay"]').addClass('is-transparent');
	setTimeout(function() {
		$('[js-selector="sidebar-overlay"]').addClass('is-hidden');
	}, 800);
}

$(document).on('click', '[action-show-hamburger-menu]', function() {
	QueryStringRouter.setParam('hamburgerMenu', 'show');
});

$(document).on('click touchstart', '[action-hide-hamburger-menu]', function() {
	QueryStringRouter.removeParam('hamburgerMenu', {doNotCreateHistoryState: true});
});

QueryStringRouter.onParamChange('hamburgerMenu', function(value) {
	if (value === 'show') {
		showHamburgerMenu();
	} else {
		hideHamburgerMenu();
	}
});

// //SPA navigation tabs -- currently unused, kept just in case
// QueryStringRouter.onParamChange('mainTab', function(value) {
// 	if (typeof value != 'undefined') {
// 		$('[main-tab-id]').not('[main-tab-id="'+value+'"]').removeClass('is-current');
// 		$('[main-tab-id="'+value+'"]').addClass('is-current');

// 	    $('[secondary-navbar-id]').not('[secondary-navbar-id="'+value+'"]').addClass('is-hidden');
// 	    $('[secondary-navbar-id="'+value+'"]').removeClass('is-hidden');
// 	}
// });

// $(document).on('click', '[main-tab-id]', function(event) {
// 	var valueToSet = $(event.currentTarget).attr('main-tab-id');
// 	QueryStringRouter.setParam('mainTab', valueToSet);

// 	//clicking on tab should load the first subtab content
// 	var relatedSecondaryNavbarId = $(event.currentTarget).attr('main-tab-id');
// 	var firstSecondaryTab = $('[secondary-navbar-id="'+relatedSecondaryNavbarId+'"]').find('[secondary-tab-id]').first();
// 	var subpageId = firstSecondaryTab.attr('secondary-tab-id');
// 	console.log(subpageId);
// 	QueryStringRouter.setParam('subpage', subpageId, {doNotCreateHistoryState: true});
// 	QueryStringRouter.setParam('secondaryTab', subpageId, {doNotCreateHistoryState: true});
// });

// $(document).on('click', '[secondary-tab-id]', function(event) {
// 	var valueToSet = $(event.currentTarget).attr('secondary-tab-id');
// 	setTimeout(function() {
// 		QueryStringRouter.setParam('secondaryTab', valueToSet, {doNotCreateHistoryState: true});
// 	}, 1);
// 	QueryStringRouter.setParam('subpage', valueToSet);
// });

// QueryStringRouter.onParamChange('secondaryTab', function(value) {
// 	$('[secondary-tab-id]').not('[secondary-tab-id="'+value+'"]').removeClass('is-current');
// 	$('[secondary-tab-id="'+value+'"]').addClass('is-current');
// });

$(document).on('click', '[action-go-back]', function() {
	window.history.back();
});


QueryStringRouter.onParamChange('subpage', function(value) {
	if (typeof value != 'undefined') {
	    $('[subpage-id]').not('[subpage-id="'+value+'"]').addClass('is-hidden');
	    $('[subpage-id="'+value+'"]').removeClass('is-hidden');
	}

	$('.body-wrapper').scrollTo(0);
});

QueryStringRouter.onParamChange('postalCode', function(value) {
	ReactiveLocalStorage.setParam('wizard__postal-code', value);
	ReactiveLocalStorage.retriggerOnParamChange('wizard__postal-code');
})

ReactiveLocalStorage.setDefaultParamAndValidationRules('wizard__postal-code', {
	default: '',
	validationFunction: function(value) {
		cleanedValue = cleanUpPostalCode(value);
		if ($.isEmptyObject(cleanedValue)) {
			return 'required';
		} else if (!validator.isNumeric(cleanedValue) || cleanedValue.length !== 5) {
			return 'incorrect-postal-code';
		} else {
			return 'good';
		}
	}
});

ReactiveLocalStorage.onParamChange('wizard__postal-code', function(value) {
	if (!$.isEmptyObject(value)) {
		$.getJSON( API_HOST+'/regions/' + value, function () {})
			.done(function(data) {
				var regionData = data;
				ReactiveLocalStorage.setParam('wizard__operator-city', regionData.name);
				ReactiveLocalStorage.setParam('wizard__current-operator', regionData.operatorBrand);
				ReactiveLocalStorage.setParam('wizard__show-postal-code-edit', 'false');
			})
			.fail(function(data) {
				resetRegionDataAndOpenPostalCodeForm();
				if (!$.isEmptyObject(data)) {
					FlashingNotifications.showAndHideNotification('error', 'Nie znaleziono kodu pocztowego w naszej bazie');
				}
			})
	} else {
		resetRegionDataAndOpenPostalCodeForm();
	}
});

function resetRegionDataAndOpenPostalCodeForm() {
	ReactiveLocalStorage.setParam('wizard__show-postal-code-edit', 'true');
	ReactiveLocalStorage.setParam('wizard__operator-city', '');
	ReactiveLocalStorage.setParam('wizard__current-operator', '');
}

ReactiveLocalStorage.setDefaultParamAndValidationRules('wizard__postal-code-to-set', {
	default: '',
	validationFunction: function(value) {
		cleanedValue = cleanUpPostalCode(value);
		if ($.isEmptyObject(cleanedValue)) {
			return 'required';
		} else if (!validator.isNumeric(cleanedValue) || cleanedValue.length !== 5) {
			return 'incorrect-postal-code';
		} else {
			return 'good';
		}
	}
});

function cleanUpPostalCode(codeToCleanUp) {
	if (typeof codeToCleanUp === 'string') {
		var cleanedUp = codeToCleanUp.replace(',', '.').replace(' ', '').replace('-', '');
		return cleanedUp;
	} else {
		return '';
	}
}

function submitEditedPostalCode() {
	var thisForm = $('[js-selector="wizard-change-postal-code"]');
	ReactiveLocalStorage.validateElementChildren(thisForm, {
		onError: function() {
			console.log('error');
		},
		onSuccess: function() {
			var newCode = ReactiveLocalStorage.getParam('wizard__postal-code-to-set')
			//TODO Submit to server, show spinner, callback for success and errors
			QueryStringRouter.setParam('postalCode', newCode, {doNotCreateHistoryState: true});
			QueryStringRouter.retriggerOnParamChange('postalCode');
		}
	});
}

ReactiveLocalStorage.onParamChange('wizard__show-postal-code-edit', function(value) {
	if (value === 'true') {
		$('[js-selector="wizard-postal-code-info"]').addClass('is-hidden');
		$('[js-selector="wizard-change-postal-code"]').removeClass('is-hidden');
	} else {
		$('[js-selector="wizard-postal-code-info"]').removeClass('is-hidden');
		$('[js-selector="wizard-change-postal-code"]').addClass('is-hidden');
	}
});

$(document).on('click', '[action-wizard-change-postal-code]', function() {
	ReactiveLocalStorage.setParam('wizard__show-postal-code-edit', 'true');
});

$(document).on('click', '[action-submit-updated-postal-code]', function() {
	submitEditedPostalCode();
});

$(document).on('keyup', '[action-text-input="wizard__postal-code-to-set"]', function(e) {
	if (e.which == 13) {
			ReactiveLocalStorage.setParam('wizard__postal-code-to-set', $(this).val());
	    submitEditedPostalCode();
	}
});

ReactiveLocalStorage.setDefaultParam('wizard__choose-next-step', '');
ReactiveLocalStorage.setDefaultParam('wizard__bought-or-sold', 'no');
ReactiveLocalStorage.setDefaultParam('wizard__switched-in-the-past', 'no');
ReactiveLocalStorage.setDefaultParam('wizard__services-types', 'electricity');
ReactiveLocalStorage.setDefaultParam('wizard__tarif-type', 'G11');
ReactiveLocalStorage.setDefaultParam('wizard__electricity-declared-value__period', '2');
ReactiveLocalStorage.setDefaultParam('wizard__electricity-mostly-used-hours', '18-24');

ReactiveLocalStorage.setDefaultParamAndValidationRules('wizard__electricity-declared-value', {
	default: '150',
	validationFunction: function(value) {
		value = replaceComa(value);
		if ($.isEmptyObject(value)) {
			return 'required'
		} else if (!validator.isNumeric(value)) {
			return 'not-a-number'
		} else if (value == '0') {
			return 'not-zero'
		} else {
			return 'good'
		}
	}
});

function cleanUpNumberEnteredByUser(numberToCleanup) {
	var cleanedUp = numberToCleanup.replace(',', '.').replace(' ', '');

	if (numberToCleanup === "") {
		return "";
	}

	if (!validator.isNumeric(numberToCleanup)) {
		return numberToCleanup;
	} else {
		cleanedUp = validator.toFloat(cleanedUp).toFixed(2);
		console.log(cleanedUp);
		return cleanedUp;
	}

}

function getMostlyUsedHoursArray() {
	var hoursArray = [];
	var mostlyUsedHoursStart = ReactiveLocalStorage.getParam('wizard__electricity-mostly-used-hours').split('-')[0];
	var mostlyUsedHoursEnd = ReactiveLocalStorage.getParam('wizard__electricity-mostly-used-hours').split('-')[1];
	for(var i = 0; i < 24; i++) {
		if (i >= mostlyUsedHoursStart && i < mostlyUsedHoursEnd) {
			hoursArray.push(2);
		}
    	else {
			hoursArray.push(1);
		}
	}
	return hoursArray;
}

function submitUserCurrentBillForm() {
	var thisForm = $('[js-selector="wizard-user-current-bill-form"]');
	ReactiveLocalStorage.validateElementChildren(thisForm, {
		onError: function() {
			var firstError = $('[has-error]').first();
			$('[js-selector="body-wrapper"]').scrollTo(firstError, 700, {
				offset: -150,
			});
		},
		onSuccess: function() {
			var userData = ({
				postalCode: ReactiveLocalStorage.getParam('wizard__postal-code'),
				rateGroup: ReactiveLocalStorage.getParam('wizard__tarif-type'),
				currentBill: replaceComa(ReactiveLocalStorage.getParam('wizard__electricity-declared-value')),
				billPeriod: ReactiveLocalStorage.getParam('wizard__electricity-declared-value__period'),
				changedSellerInThePast: false, 
				sellerBrand: ReactiveLocalStorage.getParam('wizard__current-operator'),
				operatorBrand: null,
				hours: getMostlyUsedHoursArray()
			});
			QueryStringRouter.setParam('user-data', userData);	
		}
	});
}



$(document).on('click', '[action-go-to-deals-list]', function() {
	submitUserCurrentBillForm();
});

$(document).on('click', '[action-show-more-in-wizard-logo-select]', function() {
	if (ReactiveLocalStorage.getParam('wizard__more-operators-shown') === 'true') {
		ReactiveLocalStorage.setParam('wizard__more-operators-shown', 'false');
	} else {
		ReactiveLocalStorage.setParam('wizard__more-operators-shown', 'true');
	}
});

ReactiveLocalStorage.onParamChange('wizard__more-operators-shown', function(value) {
	if (value === 'true') {
		$('[js-selector="wizard-logo-select__more-list"]').removeClass('is-hidden');
	} else {
		$('[js-selector="wizard-logo-select__more-list"]').addClass('is-hidden');
	}
});

ReactiveLocalStorage.onParamChange('wizard__electricity-declared-value', function(value) {
  var cleanedValue = replaceComa(value);
  console.log(cleanedValue);
  if (validator.isNumeric(cleanedValue)) {
  	var period = ReactiveLocalStorage.getParam('wizard__electricity-declared-value__period');
  	var yearly = (cleanedValue/period)*12;
  	var yearlyFormatted = formatDecimalNumber(yearly, 0);
  	var monthlyFormatted = formatDecimalNumber(cleanedValue, 0);
  	
  	var tooltipText = 'Obecnie płacisz co miesiąc około '+monthlyFormatted+' zł';
  	$('[js-selector="current-bill-yearly-amount"]').text(yearlyFormatted);
  	$('[deals-original-bill-text-with-tooltip]').tooltipster('content', tooltipText);
  	$('[deals-original-bill-amount]').text(yearlyFormatted);
  } else {
  	$('[js-selector="current-bill-yearly-amount"]').text('–');
  }
});

ReactiveLocalStorage.onParamChange('wizard__electricity-declared-value__period', function() {
	ReactiveLocalStorage.retriggerOnParamChange('wizard__electricity-declared-value');
});

/*
Przenieść prototyp na repo
Dodać framework z maciejsawicki.com
*/

//TODO request server and list deals

// function sortItemsByTotalCost() {
//   $("[data-total-cost-item]").sort(sortList).appendTo('[data-deals-list]');
//   function sortList(a, b) {
//   	console.log($(b).attr('data-total-cost-item'));
//     return ($(b).attr('data-total-cost-item')) < ($(a).attr('data-total-cost-item')) ? 1 : -1;
//   }
// }

ReactiveLocalStorage.setParam('deals-list-ready', 'not-ready');

ReactiveLocalStorage.onParamChange('deals-list-ready', function(value) {
	var buttonWithSpinner = $('[action-go-to-deals-list]');
	if (value === 'not-ready') {
		hideLoadingInButton(buttonWithSpinner);
	} else if (value === 'loading') {
		showLoadingInButton(buttonWithSpinner);
	} else if (value === 'ready') {
		hideLoadingInButton(buttonWithSpinner);
		if (QueryStringRouter.getParam('subpage') === 'form') {
			QueryStringRouter.setParam('subpage', 'deals-list', {doNotCreateHistoryState: true});	
		}
	} else if (value === 'failed') {
		QueryStringRouter.setParam('subpage', 'form');
		FlashingNotifications.showAndHideNotification('error', 'Coś poszło nie tak...');
		QueryStringRouter.removeParam('user-data');
		hideLoadingInButton(buttonWithSpinner);
	}
});

function getAvailableDealsFromServer(userData) {
	ReactiveLocalStorage.setParam('deals-list-ready', 'loading');
	var results;
	var urlWithUserData = API_HOST+'/calculator?';
	$.each(userData, function( key, value ) {
		urlWithUserData = urlWithUserData.concat('&' + key + '=' + value);
	});
	$.getJSON( urlWithUserData, function () {})
		.done(function(data) {
			results = data; 
			console.log(results);
			ReactiveLocalStorage.setParam('availableDealsWithSavingsList', results.availableDeals);
			ReactiveLocalStorage.setParam('currentConditions', results.currentConditions);
			ReactiveLocalStorage.setParam('deals-list-ready', 'ready');
		})
		.fail(function(data) {
			if (!$.isEmptyObject(data)) {
				ReactiveLocalStorage.setParam('deals-list-ready', 'failed');
			}
		})
}

function getContractDurationString(contractLength) {
	var numbersMappedToText = {
		"12": "na 12 miesięcy",
		"24": "na 24 miesiące",
		"36": "na 3 lata",
		"48": "na 4 lata"
	}

	if ($.isEmptyObject(contractLength)) {
		return "na czas nieokreślony"
	} else {
		return numbersMappedToText[contractLength];
	}
	//todo add handling unusual contract times just in case
}

function getCheaperHoursString(hoursArray) {
	var hoursStarts = [];
	var hoursEnds = [];
	var firstRangeString = "";
	var secondRangeString = "";
	$.each(hoursArray, function( index, value ) {
		if (value !== hoursArray[index-1] && index != 0){
			if (value === "L") {
				hoursStarts.push(index);
			}
			else hoursEnds.push(index-1);
		}
		else if (value !== hoursArray[hoursArray.length-1] && index == 0) {
			if (value === "L") {
				hoursStarts.push(index);
			}
			else hoursEnds.push(hoursArray.length-1);
		}
	  });
	if (hoursStarts[0] < hoursEnds[0]) {
		firstRangeString = hoursStarts[0] + ":00 - " + hoursEnds[0] + ":00";
		if (hoursStarts.length == 2) {
			secondRangeString = hoursStarts[1] + ":00 - " + hoursEnds[1] + ":00";
		}
	}
	else {
		firstRangeString = hoursStarts[0] + ":00 - " + hoursEnds[1] + ":00";
		secondRangeString = hoursStarts[1] + ":00 - " + hoursEnds[0] + ":00";
	}
	return  firstRangeString + " oraz " + secondRangeString;
}

QueryStringRouter.onParamChange('user-data', function(value) {
	if (typeof value === 'undefined') {
		console.log(value);
		QueryStringRouter.setParam('subpage', 'form', {doNotCreateHistoryState: true});
		console.log('user params not found, redirecting to form....')
	} else {
		console.log(value);
		getAvailableDealsFromServer(value);
	}
});

$(document).on('click', '[action-go-back-to-first-step]', function() {
	QueryStringRouter.removeParam('user-data', {doNotCreateHistoryState: true});
});

ReactiveLocalStorageDataBindArrayList('availableDealsWithSavingsList', function($elementToAppend, elementData) {
	$elementToAppend.find('[deal-seller-name]').text(elementData.brand);
	$elementToAppend.find('[deal-logo-image]').addClass('is-' + elementData.brand.toLowerCase());
	console.log(elementData);

	//expose nested element data in attributes for filtering
	$elementToAppend.attr('item-data-group', elementData.rates.sellerRate.rateGroup);
	$elementToAppend.attr('item-data-contract-duration', elementData.contract.duration || 'undefined');
	$elementToAppend.attr('item-data-bonus-green-energy', elementData.bonuses.greenEnergy);
	$elementToAppend.attr('item-data-bonus-price-warranty', elementData.bonuses.priceWarranty);
	$elementToAppend.attr('item-data-bonus-free-home-service', elementData.bonuses.freeHomeService);
	$elementToAppend.attr('deal-list-filterable-item', 'true');

	if (elementData.contract.duration) {
		$elementToAppend.find('[deal-contract-duration-undefined]').addClass('is-hidden');
		$elementToAppend.find('[deal-contract-duration-text]').text(function () {
			return getContractDurationString(elementData.contract.duration);
		});
	} else {
		$elementToAppend.find('[deal-contract-duration]').addClass('is-hidden');
	}
	console.log(elementData.rates.sellerRate.rateGroup);
	if (elementData.rates.sellerRate.rateGroup === "G11"){
		$elementToAppend.find('[deal-cheaper-hours-row]').addClass('is-hidden');
	}
	else if (elementData.rates.sellerRate.rateGroup === "G12w"){
		$elementToAppend.find('[deal-cheaper-hours-row]').removeClass('is-hidden');
		$elementToAppend.find('[deal-cheaper-hours]').text(function () {
		return "w godzinach " + getCheaperHoursString(elementData.rates.operatorRate.hours) + " i w weekendy";
	})}
	else {
		console.log("bla");
		$elementToAppend.find('[deal-cheaper-hours-row]').removeClass('is-hidden');
		$elementToAppend.find('[deal-cheaper-hours]').text(function () {
		return "w godzinach " + getCheaperHoursString(elementData.rates.operatorRate.hours);
	})};
	if (elementData.bonuses.priceWarranty !== 'true') {
		$elementToAppend.find('[deal-price-warranty]').addClass('is-hidden');
	}
	if (elementData.bonuses.greenEnergy !== 'true') {
		$elementToAppend.find('[deal-green-energy]').addClass('is-hidden');
	}
	if (elementData.isYours !== 'true') {
		$elementToAppend.find('[deal-your-current]').addClass('is-hidden');
		$elementToAppend.find('[deal-savings-monthly]').text(elementData.savings.replace('-', '') + " zł miesięcznie");

		var savingsYearly = formatDecimalNumber(elementData.savingsYearly, 0);
		if (elementData.savings < 0) {
			$elementToAppend.find('[deal-savings-text]').text("Drożej rocznie o");
			$elementToAppend.find('[deal-savings-yearly]').text(savingsYearly.replace('-', '') + " zł");
			$elementToAppend.find('[deal-savings-yearly]').addClass("is-red");
		} else {
			$elementToAppend.find('[deal-savings-yearly]').text("- " + savingsYearly + " zł");
		}
	}	else {
		$elementToAppend.find('[deal-savings-yearly]').text("0 zł");
		$elementToAppend.find('[deal-savings-monthly]').addClass('is-hidden');
		$elementToAppend.find('[deal-cost-details]').addClass('is-hidden');
		$elementToAppend.find('[deal-select-button]').addClass('is-grayed-out');
		$elementToAppend.find('[deal-select-button]').attr('tooltipster', 'top').attr('title', 'To jest Twoja aktualna oferta. Nie możesz wybrać oferty, którą już masz');
		$elementToAppend.find('[deal-details-button]').remove();
	}

	if ($.isEmptyObject(elementData.sellerRating)) {
		$('[deal-rating]').addClass('is-hidden');
		//TODO in future handle rating stars
	}
	
});

$(document).on('click', '[action-show-deal-details]', function() {
  var clickedId = $(this).closest('[item-data-id]').attr('item-data-id');
  QueryStringRouter.setParam('deal-details-in-modal', clickedId, {doNotCreateHistoryState: true});
});

$(document).on('click', '[action-show-deal-estimation-details]', function() {
  var clickedId = $(this).closest('[item-data-id]').attr('item-data-id');
  QueryStringRouter.setParam('deal-details-in-modal', clickedId, {doNotCreateHistoryState: true});
});

$(document).on('click', '[action-choose-deal-shown-in-deal-info]', function() {
  QueryStringRouter.setParam('subpage', 'your-data');
  var clickedId = QueryStringRouter.getParam('deal-details-in-modal');
  QueryStringRouter.setParam('chosenDeal__electricity', clickedId, {doNotCreateHistoryState: true});
  QueryStringRouter.removeParam('modalContent', {doNotCreateHistoryState: true});
});

QueryStringRouter.onParamChange('chosenDeal__electricity', function(value) {
  QueryStringRouter.setParam('deal-details-in-modal', value, {doNotCreateHistoryState: true});
});

$(document).on('click', '[action-show-contract-details]', function() {
  //TODO scroll to contract details in modal with a bit of delay
});

QueryStringRouter.onParamChange('deal-details-in-modal', function(value) {
  var dealInModalId = value;

  if ($.isEmptyObject(dealInModalId)) {
    QueryStringRouter.removeParam('modalContent', {doNotCreateHistoryState: true});
    QueryStringRouter.removeParam('deal-details-in-modal', {doNotCreateHistoryState: true});
  } else {
    renderDealDetailsInModal(dealInModalId);
  } 
});

function getPaymentPeriodString(paymentPeriod) {
	var numbersMappedToText = {
    "1": "co miesiąc",
		"2": "co 2 miesiące",
	}
	if ($.isEmptyObject(paymentPeriod)) {
		return false;
	} else {
		return numbersMappedToText[paymentPeriod];
	}
}

function getDealFees(deal, isCurrent) {
  //TODO get calculated yearly fees from server
  var currentMonthlyUsage = ReactiveLocalStorage.getParam('currentConditions')["monthlyKwhUsage"];
  var currentYearlyUsage = currentMonthlyUsage * 12;
  if(isCurrent === "true") {
    var totalYearly = deal.monthlyDeclaredBill * 12;
    var rates = deal;
  }
  else {
    var totalYearly = deal.totalYearly * 1;
    var rates = deal.rates;
  }
  var sellerRateFixed = rates.sellerRate.fixedRates.monthlyFee * 12;
  var sellerFeeLowHours = currentYearlyUsage * deal.fees.variableFees.seller.lowWeighted;
  var sellerFeeHighHours = currentYearlyUsage * deal.fees.variableFees.seller.highWeighted;
  var operatorVariableFee = currentYearlyUsage * deal.fees.variableFees.operator.highWeighted + currentYearlyUsage * deal.fees.variableFees.operator.lowWeighted;
  var operatorBasicFee = rates.operatorRate.fixedRates.basicFixedRate * 12;
  var operatorMonthlyFee = rates.operatorRate.fixedRates.monthlyFee * 12;
  var operatorTransitionalFee = rates.operatorRate.fixedRates.transitionalFees.high * 12;
  var operatorQualitativeFee = currentYearlyUsage * rates.operatorRate.variableRates.qualitative;
  return {
    currentMonthlyUsage: currentMonthlyUsage,
    currentYearlyUsage: currentYearlyUsage,
    totalYearly: totalYearly.toFixed(2),
    seller: {
      fixed: sellerRateFixed.toFixed(2),
      lowHours: sellerFeeLowHours.toFixed(2),
      highHours: sellerFeeHighHours.toFixed(2),
    },
    operator: {
      variable: operatorVariableFee.toFixed(2),
      basic: operatorBasicFee.toFixed(2),
      monthly: operatorMonthlyFee.toFixed(2),
      transitional: operatorTransitionalFee.toFixed(2),
      qualitative: operatorQualitativeFee.toFixed(2),
    }
  }
}

function compareDealFees(oldDeal, newDeal) {
  return {
    total: {
      yearly: {
        current: oldDeal.totalYearly,
        new: newDeal.totalYearly,
        newIsBetterThanOld: newDeal.totalYearly <= oldDeal.totalYearly,
      }
    },
    seller: {
      fixed: {
        current: oldDeal.seller.fixed,
        new: newDeal.seller.fixed,
        newIsBetterThanOld: newDeal.seller.fixed <= oldDeal.seller.fixed,
      },
      low: {
        current: oldDeal.seller.lowHours,
        new: newDeal.seller.lowHours,
        newIsBetterThanOld: newDeal.seller.lowHours <= oldDeal.seller.lowHours,
      },
      high: {
        current: oldDeal.seller.highHours,
        new: newDeal.seller.highHours,
        newIsBetterThanOld: newDeal.seller.highHours <= oldDeal.seller.highHours,
      },
    },
    operator: {
      variable: {
        current: oldDeal.operator.variable,
        new: newDeal.operator.variable,
        newIsBetterThanOld: newDeal.operator.variable <= oldDeal.operator.variable,
      },
      basic: {
        current: oldDeal.operator.basic,
        new: newDeal.operator.basic,
        newIsBetterThanOld: newDeal.operator.basic <= oldDeal.operator.basic,
      },
      monthly: {
        current: oldDeal.operator.monthly,
        new: newDeal.operator.monthly,
        newIsBetterThanOld: newDeal.operator.monthly <= oldDeal.operator.monthly,
      },
      transitional: {
        current: oldDeal.operator.transitional,
        new: newDeal.operator.transitional,
        newIsBetterThanOld: newDeal.operator.transitional <= oldDeal.operator.transitional,
      },
      qualitative: {
        current: oldDeal.operator.qualitative,
        new: newDeal.operator.qualitative,
        newIsBetterThanOld: newDeal.operator.qualitative <= oldDeal.operator.qualitative,
      },
    }
  }
}
function renderDealDetailsInModal(dealId) {
  var dealToShow = ReactiveLocalStorage.findInArrayXObjectWithIdY('availableDealsWithSavingsList', dealId);
  console.log(dealToShow);
  
  if (!$.isEmptyObject(dealToShow)) {
    //if chosen deal was found in server response

    //name
    $('[deal-info__brand]').text(dealToShow.rates.sellerRate.brand);
    $('[deal-info__group]').text(dealToShow.rates.sellerRate.rateGroup);

    $('[deal-info__group-info]').not('[deal-info__group-info="'+dealToShow.rates.sellerRate.rateGroup.toLowerCase()+'"]').addClass('is-hidden');
    $('[deal-info__group-info="'+dealToShow.rates.sellerRate.rateGroup.toLowerCase()+'"]').removeClass('is-hidden');

    $('[deal-info__price-warranty]').not('[deal-info__price-warranty="'+dealToShow.bonuses.priceWarranty+'"]').addClass('is-hidden');
    $('[deal-info__price-warranty="'+dealToShow.bonuses.priceWarranty+'"]').removeClass('is-hidden');

    var contractDurationString = getContractDurationString(dealToShow.contract.duration);
    $('[deal-info__contract-duration]').text(contractDurationString.substr(0,1).toUpperCase() + contractDurationString.substr(1));

    if (dealToShow.rates.sellerRate.rateGroup === "G11") {
      $('[deal-info__hours-row]').addClass('is-hidden');
    }
    else {
      $('[deal-info__hours-row]').removeClass('is-hidden');
      $('[deal-info__hours]').text(getCheaperHoursString(dealToShow.rates.operatorRate.hours));
    }

    var paymentPeriodString = getPaymentPeriodString(dealToShow.rates.operatorRate.paymentPeriod);
    if (!paymentPeriodString) {
      $('[deal-info__payment-period-row]').addClass('is-hidden');
    }
    else {
      $('[deal-info__payment-period]').text(paymentPeriodString.substr(0,1).toUpperCase() + paymentPeriodString.substr(1));
      $('[deal-info__payment-period-bullet]').text("Faktury z prognozowanym zużyciem " + paymentPeriodString);
    }

    $('[deal-info__savings-yearly]').text(dealToShow.savingsYearly + "zł");
    

    var newDealFees = getDealFees(dealToShow);
    var currentDealFees = getDealFees(ReactiveLocalStorage.getParam('currentConditions'), isCurrent = "true");
    $('[deal-info__current-usage]').text(currentDealFees.currentMonthlyUsage + " kWh");
    $('[deal-info__current-yearly-usage]').text(currentDealFees.currentYearlyUsage + " kWh");

    $('[deal-info__future-seller-savings]').text(dealToShow.savingsYearly);

    $.each(compareDealFees(currentDealFees, newDealFees), function( index, value ) {
      $.each(value, function( index2, value2 ){
        console.log(index2);
        console.log(value2);
        var detailedSelector = index + "-" + index2;
        $('[deal-info__current-' + detailedSelector + ']').text(value2.current);
        $('[deal-info__future-' + detailedSelector + ']').text(value2.new);
        if (value2.newIsBetterThanOld) {
          $('[deal-info__current-' + detailedSelector + ']').removeClass('is-better').addClass('is-worse');
          $('[deal-info__future-' + detailedSelector + ']').removeClass('is-worse').addClass('is-better');
        }
        else {
          $('[deal-info__current-' + detailedSelector + ']').removeClass('is-worse').addClass('is-better');
          $('[deal-info__future-' + detailedSelector + ']').removeClass('is-better').addClass('is-worse');
        }
      });
    });
    $('[deal-info__future-seller-savings-yearly]').text((dealToShow.savingsYearly * 1).toFixed(2));

  } else {
    QueryStringRouter.removeParam('modalContent', {doNotCreateHistoryState: true});
    QueryStringRouter.removeParam('deal-details-in-modal', {doNotCreateHistoryState: true});
  }
}



$(document).on('click', '[action-toggle-filters]', function() {
	if (ReactiveLocalStorage.getParam('wizard__filters-expanded') === 'true') {
		ReactiveLocalStorage.setParam('wizard__filters-expanded', 'false')
	} else {
		ReactiveLocalStorage.setParam('wizard__filters-expanded', 'true');
	}
});

ReactiveLocalStorage.onParamChange('wizard__filters-expanded', function(value) {
	var elm = $('[js-selector="deals-filters"]');
	if (value === 'true') {
		elm.addClass('is-shown-on-mobile');
	} else {
		elm.removeClass('is-shown-on-mobile');
	}
});

//we create object with map of filters with ReactiveLocalStorage params and html attributes
var filtersMap = {
	group: {
		G11: {
			param: 'filters__groupG11',
			selector: '[item-data-group="G11"]',
		},
		G12: {
			param: 'filters__groupG12',
			selector: '[item-data-group="G12"]',
		},
		G12w: {
			param: 'filters__groupG12w',
			selector: '[item-data-group="G12w"]',
		},
	},
	bonuses: {
		priceWarranty: {
			param: 'filters__priceWarranty',
			selector: '[item-data-bonus-price-warranty="true"]',
		},
		greenEnergy: {
			param: 'filters__greenEnergy',
			selector: '[item-data-bonus-green-energy="true"]',
		},
		freeHomeService: {
			param: 'filters__freeHomeService',
			selector: '[item-data-bonus-free-home-service="true"]',
		},
	},
	contract: {
		undefined: {
			param: 'filters__contractUndefined',
			selector: '[item-data-contract-duration="undefined"]',
		},
		12: {
			param: 'filters__contract12',
			selector: '[item-data-contract-duration="12"]',
		},
		24: {
			param: 'filters__contract24',
			selector: '[item-data-contract-duration="24"]',
		},
	},
}

function clearFilters() {
	$.each(filtersMap, function(filtersGroup, filtersGroupChoices) {
		$.each(filtersGroupChoices, function(key, keyValue) {
			ReactiveLocalStorage.setParam(keyValue.param, 'false');
		});
	});
}

$(document).on('click', '[action-clear-filters]', function() {
	clearFilters();
});

//always clear filters when entering the page
QueryStringRouter.onParamChange('subpage', function(value) {
	if (value === 'deals-list') {
		clearFilters();
	}
});

$.each(filtersMap, function(filtersGroup, filtersGroupChoices) {

	$.each(filtersGroupChoices, function(key, keyValue) {
		//for each filter in filtersMap we bind it to ReactiveLocalStorage param
		ReactiveLocalStorage.onParamChange(keyValue.param, function(value) {
			filtersMap[filtersGroup][key].selected = value;
			showOrHideItemsBasedOnSelectedFilters();
		});
	});

});

function checkIfAtLeastOneFilterIsSelected() {
	//we check if at least one filter is set to 'true'
	var numberOfActiveFilters = 0;
	$.each(filtersMap, function(filtersGroup, filtersGroupChoices) {
		$.each(filtersGroupChoices, function(key, keyValue) {
			if (keyValue.selected === 'true') {
				numberOfActiveFilters = numberOfActiveFilters + 1;
			}
		});
	});

	if (numberOfActiveFilters > 0) {
		return true;
	} else {
		return false;
	}
}

var filtersBlinkTimeout;

function showOrHideItemsBasedOnSelectedFilters() {

	var $allDeals = $('[deal-list-filterable-item]');
	var $listWrapper = $('[data-bind-array="availableDealsWithSavingsList"]');

	if (checkIfAtLeastOneFilterIsSelected() === true) {

		//we add opacity so that user knows that filtering is started
		$listWrapper.css('opacity', 0.3);

		//filters inside a group works as "OR" but for different groups should work as "AND"
		//we use the power of jquery DOM objects filtering
		//so we're going to group jquery elements
		var filteredElementsInGroups = {};

		$.each(filtersMap, function(filtersGroup, filtersGroupChoices) {
			
			//we start with empty object for each group
			filteredElementsInGroups[filtersGroup] = ''; //empty string means that no filter in this group was selected

			$.each(filtersGroupChoices, function(key, keyValue) {
				if (keyValue.selected === 'true') {
					//we add the jquery DOM element to respective group 
					filteredElementsInGroups[filtersGroup] = $(filteredElementsInGroups[filtersGroup]).add(keyValue.selector);
				}
			});

		});

		//now we use the previously grouped DOM elements to filter jquery elements
		//we start with all items and then we filter them with previously grouped elements
		var $itemsToShow = $('[deal-list-filterable-item]');
		$.each(filteredElementsInGroups, function(key, keyValue) {
			if (keyValue !== '') { //only filter if something was added to group, that is when filter is selected
				$itemsToShow = $itemsToShow.filter(keyValue);
			}
		});

		// we hide all deals so that we can show only the deals for selected filters
		// we briefly blink the list so that user can see that something changes
		// the setTimeout ensures that user will see that something blinked on the list
		// so that he knows that filters worked
		clearTimeout(filtersBlinkTimeout);
		filtersBlinkTimeout = setTimeout(function() {

			$allDeals.not($itemsToShow).addClass('is-hidden');
			$itemsToShow.removeClass('is-hidden');
			$listWrapper.css('opacity', '');
			$('[deal-filters-box-clear-button]').removeClass('is-hidden');

			//empty state
			if ($itemsToShow.length === 0) {
				$('[deals-list-filtered-empty-state]').removeClass('is-hidden');
			} else {
				$('[deals-list-filtered-empty-state]').addClass('is-hidden');
			}

		}, 400);

	} else {
		//if filter list is empty, we show all deals and reset state
		clearTimeout(filtersBlinkTimeout);
		$listWrapper.css('opacity', '');
		$('[deals-list-filtered-empty-state]').addClass('is-hidden');
		$('[deal-filters-box-clear-button]').addClass('is-hidden');
		$allDeals.removeClass('is-hidden');
	}
}



QueryStringRouter.onParamChange('subpage', function(value) {
	if (value === 'your-data') {

		var chosenDealId = QueryStringRouter.getParam('chosenDeal__electricity');

		if ($.isEmptyObject(chosenDealId)) {
			QueryStringRouter.setParam('subpage', 'deals-list');
		} else {
			renderChosenDealDetails(chosenDealId);
		}	

	}
});

$(document).on('click', '[action-select-deal]', function() {
	QueryStringRouter.setParam('subpage', 'your-data');
	var clickedId = $(this).closest('[data-bind-repeatable-clone').attr('item-data-id');
	QueryStringRouter.setParam('chosenDeal__electricity', clickedId, {doNotCreateHistoryState: true});
});

function renderChosenDealDetails(dealId) {
	var chosenDeal = ReactiveLocalStorage.findInArrayXObjectWithIdY('availableDealsWithSavingsList', dealId);
	console.log(chosenDeal);
	if (!$.isEmptyObject(chosenDeal)) {
		//if chosen deal was found in server response

		//name
		$('[chosen-electricity-name]').text(chosenDeal.rates.sellerRate.name);

		//contract
		var contractString = getContractDurationString(chosenDeal.contract.duration);
		$('[chosen-electricity-contract-duration]').text(contractString);

		//logo
		var classToAdd = 'is-'+(chosenDeal.brand).toLowerCase();
		$('[chosen-electricity-logo]').alterClass("is-*", classToAdd);
		if (chosenDeal.brandDescription) { //TODO server needs to send description
			$('[chosen-electricity-logo]').tooltipster('content', chosenDeal.brandDescription);
		} else {
			$('[chosen-electricity-logo]').tooltipster('content', null);
		}

		//hours description
		$('[chosen-electricity-g11]').addClass('is-hidden');
		$('[chosen-electricity-g12]').addClass('is-hidden');
		if (chosenDeal.rates.sellerRate.rateGroup === "G12") {
			$('[chosen-electricity-g12]').removeClass('is-hidden');
			$('[chosen-electricity-g12-label]').text(getCheaperHoursString(chosenDeal.rates.operatorRate.hours.weekday));
		} else if (chosenDeal.rates.sellerRate.rateGroup === "G11") {
			$('[chosen-electricity-g11]').removeClass('is-hidden');
		}

		//bonuses
		console.log(chosenDeal.bonuses.priceWarranty);
		if (chosenDeal.bonuses.priceWarranty === "true") {
			$('[chosen-electricity-bonus__price-warranty]').removeClass('is-hidden')
		} else {
			$('[chosen-electricity-bonus__price-warranty]').addClass('is-hidden')
		}

		//savings
		var savings = parseFloat(chosenDeal.savingsYearly);
		if ( savings < 0) {
			$('[chosen-electricity-savings-header]').text("Zapłacisz rocznie więcej o około");
		}
		var savingsString = Math.abs(savings).toFixed(0)+' '+'zł';
		$('[chosen-electricity-savings]').text(savingsString);

		//TODO
		// tooltip description update
		// hours show hide
		// other bonuses

	} else {
		QueryStringRouter.setParam('subpage', 'deals-list');
	}
}

ReactiveLocalStorage.setDefaultParamAndValidationRules('user-phone-number', {
	default: '',
	validationFunction: function(value) {
		var cleanedVal = cleanUpPhoneNumber(value);
		if ($.isEmptyObject(cleanedVal)) {
			return 'required'
		} else if (!validator.isNumeric(cleanedVal) || cleanedVal.length !== 9) {
			return 'incorrect'
		} else {
			return 'good'
		}
	}
});

function cleanUpPhoneNumber(phoneNumber) {
	var cleanedVal = phoneNumber;
	if (typeof phoneNumber === 'string') {
		cleanedVal = phoneNumber.replace(' ', '');
	}
	return cleanedVal;
}

ReactiveLocalStorage.setDefaultParamAndValidationRules('user-optional-email-address', {
	default: '',
	validationFunction: function(value) {
		var cleanedVal = value.replace(' ', '');
		if (value.length > 0 && !validator.isEmail(cleanedVal)) {
			return 'incorrect'
		} else {
			return 'good'
		}
	}
});

ReactiveLocalStorage.setDefaultParamAndValidationRules('user-email-address', {
	default: '',
	validationFunction: function(value) {
		var cleanedVal = value.replace(' ', '');
		if ($.isEmptyObject(cleanedVal)) {
			return 'required'
		} else if (!validator.isEmail(cleanedVal)) {
			return 'incorrect'
		} else {
			return 'good'
		}
	}
});

ReactiveLocalStorage.setDefaultParamAndValidationRules('consents__marketing-phone-and-email', {
	default: 'false',
	validationFunction: function(value) {
		if (value !== 'true') {
			return 'required'
		} else if (value === 'true') {
			return 'good'
		}
	}
});

ReactiveLocalStorage.setDefaultParamAndValidationRules('consents__marketing-email', {
	default: 'false',
	validationFunction: function(value) {
		if (value !== 'true') {
			return 'required'
		} else if (value === 'true') {
			return 'good'
		}
	}
});

function submitUserDataToServer(userData) {
	var promise = $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        'type': 'POST',
        'url': API_HOST+'/orders',
        'data': JSON.stringify(userData),
        'dataType': 'json',
        'success': function (data) {
			QueryStringRouter.setParam('subpage', 'thank-you');
		},
		'error': function(data) {
			if (!$.isEmptyObject(data)) {
				FlashingNotifications.showAndHideNotification('error', 'Coś poszło nie tak...');
			}
		}
	});

	return promise;
}

function getUserData(userData) {
	var currentConditions = ReactiveLocalStorage.getParam('currentConditions');
	return  {
		email: userData.email,
		phoneNumber: userData.phoneNumber,
		postalCode: ReactiveLocalStorage.getParam('wizard__postal-code'),
		city: ReactiveLocalStorage.getParam('delivery__city'),
		marketingConsents: userData.marketingConsents,
		monthlyDeclaredBill: replaceComa(ReactiveLocalStorage.getParam('wizard__electricity-declared-value')),
		currentOperatorRate: currentConditions.operatorRate.id,
		currentSellerRate: currentConditions.sellerRate.id,
		chosenDeal: QueryStringRouter.getParam('chosenDeal__electricity'),
	};
}
function submitUserDataPhoneForm() {
	var thisForm = $('[js-selector="user-phone-form"]');
	ReactiveLocalStorage.validateElementChildren(thisForm, {
		onError: function() {
			var firstError = $('[has-error]').first();
			$('[js-selector="body-wrapper"]').scrollTo(firstError, 700, {
				offset: -150,
			});
		},
		onSuccess: function() {
			var buttonWithSpinner = $('[action-submit-user-data__phone-and-email]');
			showLoadingInButton(buttonWithSpinner);
			var userEmail = ReactiveLocalStorage.getParam('user-optional-email-address');
			var userPhoneNumber = ReactiveLocalStorage.getParam('user-phone-number');
			var userData = { 
				email: ReactiveLocalStorage.getParam('user-optional-email-address'), 
        phoneNumber: ReactiveLocalStorage.getParam('user-phone-number'),
        marketingConsents: 'marketingTelefonicznyV1'
      };
			$.when(submitUserDataToServer(getUserData(userData))).then(function () {hideLoadingInButton(buttonWithSpinner)});
		}
	});
}

function submitUserDataEmailForm() {
	var thisForm = $('[js-selector="user-data-email-form"]');
	ReactiveLocalStorage.validateElementChildren(thisForm, {
		onError: function() {
			var firstError = $('[has-error]').first();
			$('[js-selector="body-wrapper"]').scrollTo(firstError, 700, {
				offset: -150,
			});
		},
		onSuccess: function() {
			var buttonWithSpinner = $('[action-submit-user-data__email]');
			showLoadingInButton(buttonWithSpinner);

			var userData = { 
				email: ReactiveLocalStorage.getParam('user-email-address'), 
        marketingConsents: 'marketingElektronicznyV1'
      };
			$.when(submitUserDataToServer(getUserData(userData))).then(function () {hideLoadingInButton(buttonWithSpinner)});
		}
	});
}

$(document).on('click', '[action-submit-user-data__email]', function() {
	submitUserDataEmailForm();
});

$(document).on('click', '[action-submit-user-data__phone-and-email]', function() {
	submitUserDataPhoneForm();
});


ReactiveLocalStorage.setDefaultParam('delivery__postal-code', '61-754');
ReactiveLocalStorage.setDefaultParam('delivery__city', 'Poznań');
ReactiveLocalStorage.setDefaultParam('wizard__identification-method', 'bank');

$(document).on('click', '[action-mark-all-terms]', function() {
	ReactiveLocalStorage.setParam('consents__terms', 'true');
	ReactiveLocalStorage.setParam('consents__agree-procuration', 'true');
	ReactiveLocalStorage.setParam('consents__rachuneo', 'true');
});

$(document).on('click', '[action-mark-all-consents]', function() {
	ReactiveLocalStorage.setParam('consents__marketing-1', 'true');
	ReactiveLocalStorage.setParam('consents__marketing-2', 'true');
});

//# sourceMappingURL=scripts-bundle.js.map