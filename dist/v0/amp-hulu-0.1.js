(self.AMP=self.AMP||[]).push({n:"amp-hulu",v:"0",f:(function(AMP,_){
function b(a,c){function e(){}e.prototype=c.prototype;a.prototype=new e;a.prototype.constructor=a;for(var d in c)if(Object.defineProperties){var f=Object.getOwnPropertyDescriptor(c,d);f&&Object.defineProperty(a,d,f)}else a[d]=c[d]};self.log=self.log||{user:null,dev:null,userForEmbed:null};var g=self.log;/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function h(a){a=AMP.BaseElement.call(this,a)||this;a.c=null;a.h=null;return a}b(h,AMP.BaseElement);h.prototype.preconnectCallback=function(){this.preconnect.preload(k(this))};h.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
h.prototype.layoutCallback=function(){var a=document.createElement("iframe"),c=k(this);a.setAttribute("frameborder","0");a.setAttribute("allowfullscreen","true");a.src=c;this.applyFillContent(a);this.element.appendChild(a);this.c=a;return this.loadPromise(a)};h.prototype.unlayoutOnPause=function(){return!0};h.prototype.unlayoutCallback=function(){if(this.c){var a=this.c;a.parentElement&&a.parentElement.removeChild(a);this.c=null}return!0};
h.prototype.buildCallback=function(){if(!g.user)throw Error("failed to call initLogConstructor");this.h=g.user.assert(this.element.getAttribute("data-eid"),"The data-eid attribute is required for <amp-hulu> %s",this.element)};function k(a){return"https://player.hulu.com/site/dash/mobile_embed.html?amp=1&eid="+encodeURIComponent(a.h||"")}(function(a){a.registerElement("amp-hulu",h)})(self.AMP);
})});
//# sourceMappingURL=amp-hulu-0.1.js.map

