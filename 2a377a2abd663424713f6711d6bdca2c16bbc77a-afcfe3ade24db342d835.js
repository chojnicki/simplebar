(self.webpackChunksimplebar_website=self.webpackChunksimplebar_website||[]).push([[803],{2560:function(e,t,i){"use strict";i.d(t,{Z:function(){return m}});var s=i(4073),r=i.n(s),l=i(2436),o=i.n(l),n=i(6848),a=i.n(n),c=function(){return c=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)},h=null,u=null;function d(){if(null===h){if("undefined"==typeof document)return h=0;var e=document.body,t=document.createElement("div");t.classList.add("simplebar-hide-scrollbar"),e.appendChild(t);var i=t.getBoundingClientRect().right;e.removeChild(t),h=i}return h}function p(e){return e&&e.ownerDocument&&e.ownerDocument.defaultView?e.ownerDocument.defaultView:window}function f(e){return e&&e.ownerDocument?e.ownerDocument:document}a()&&window.addEventListener("resize",(function(){u!==window.devicePixelRatio&&(u=window.devicePixelRatio,h=null)}));var v=function(e){return Array.prototype.reduce.call(e,(function(e,t){var i=t.name.match(/data-simplebar-(.+)/);if(i){var s=i[1].replace(/\W+(.)/g,(function(e,t){return t.toUpperCase()}));switch(t.value){case"true":e[s]=!0;break;case"false":e[s]=!1;break;case void 0:e[s]=!0;break;default:e[s]=t.value}}return e}),{})},m=function(){function e(t,i){void 0===i&&(i={});var s=this;if(this.removePreventClickId=null,this.minScrollbarWidth=20,this.stopScrollDelay=175,this.isScrolling=!1,this.isMouseEntering=!1,this.scrollXTicking=!1,this.scrollYTicking=!1,this.wrapperEl=null,this.contentWrapperEl=null,this.contentEl=null,this.offsetEl=null,this.maskEl=null,this.placeholderEl=null,this.heightAutoObserverWrapperEl=null,this.heightAutoObserverEl=null,this.rtlHelpers=null,this.scrollbarWidth=0,this.resizeObserver=null,this.mutationObserver=null,this.elStyles=null,this.isRtl=null,this.mouseX=0,this.mouseY=0,this.onMouseMove=function(){},this.onWindowResize=function(){},this.onStopScrolling=function(){},this.onMouseEntered=function(){},this.onScroll=function(){var e=p(s.el);s.scrollXTicking||(e.requestAnimationFrame(s.scrollX),s.scrollXTicking=!0),s.scrollYTicking||(e.requestAnimationFrame(s.scrollY),s.scrollYTicking=!0),s.isScrolling||(s.isScrolling=!0,s.el.classList.add(s.classNames.scrolling)),s.showScrollbar("x"),s.showScrollbar("y"),s.onStopScrolling()},this.scrollX=function(){s.axis.x.isOverflowing&&s.positionScrollbar("x"),s.scrollXTicking=!1},this.scrollY=function(){s.axis.y.isOverflowing&&s.positionScrollbar("y"),s.scrollYTicking=!1},this._onStopScrolling=function(){s.el.classList.remove(s.classNames.scrolling),s.options.autoHide&&(s.hideScrollbar("x"),s.hideScrollbar("y")),s.isScrolling=!1},this.onMouseEnter=function(){s.isMouseEntering||(s.el.classList.add(s.classNames.mouseEntered),s.showScrollbar("x"),s.showScrollbar("y"),s.isMouseEntering=!0),s.onMouseEntered()},this._onMouseEntered=function(){s.el.classList.remove(s.classNames.mouseEntered),s.options.autoHide&&(s.hideScrollbar("x"),s.hideScrollbar("y")),s.isMouseEntering=!1},this._onMouseMove=function(e){s.mouseX=e.clientX,s.mouseY=e.clientY,(s.axis.x.isOverflowing||s.axis.x.forceVisible)&&s.onMouseMoveForAxis("x"),(s.axis.y.isOverflowing||s.axis.y.forceVisible)&&s.onMouseMoveForAxis("y")},this.onMouseLeave=function(){s.onMouseMove.cancel(),(s.axis.x.isOverflowing||s.axis.x.forceVisible)&&s.onMouseLeaveForAxis("x"),(s.axis.y.isOverflowing||s.axis.y.forceVisible)&&s.onMouseLeaveForAxis("y"),s.mouseX=-1,s.mouseY=-1},this._onWindowResize=function(){s.scrollbarWidth=s.getScrollbarWidth(),s.hideNativeScrollbar()},this.onPointerEvent=function(e){var t,i;s.axis.x.track.el&&s.axis.y.track.el&&s.axis.x.scrollbar.el&&s.axis.y.scrollbar.el&&(s.axis.x.track.rect=s.axis.x.track.el.getBoundingClientRect(),s.axis.y.track.rect=s.axis.y.track.el.getBoundingClientRect(),(s.axis.x.isOverflowing||s.axis.x.forceVisible)&&(t=s.isWithinBounds(s.axis.x.track.rect)),(s.axis.y.isOverflowing||s.axis.y.forceVisible)&&(i=s.isWithinBounds(s.axis.y.track.rect)),(t||i)&&(e.stopPropagation(),"pointerdown"===e.type&&"touch"!==e.pointerType&&(t&&(s.axis.x.scrollbar.rect=s.axis.x.scrollbar.el.getBoundingClientRect(),s.isWithinBounds(s.axis.x.scrollbar.rect)?s.onDragStart(e,"x"):s.onTrackClick(e,"x")),i&&(s.axis.y.scrollbar.rect=s.axis.y.scrollbar.el.getBoundingClientRect(),s.isWithinBounds(s.axis.y.scrollbar.rect)?s.onDragStart(e,"y"):s.onTrackClick(e,"y")))))},this.drag=function(t){var i,r,l,o,n,a,c,h,u,d,p;if(s.draggedAxis&&s.contentWrapperEl){var f=s.axis[s.draggedAxis].track,v=null!==(r=null===(i=f.rect)||void 0===i?void 0:i[s.axis[s.draggedAxis].sizeAttr])&&void 0!==r?r:0,m=s.axis[s.draggedAxis].scrollbar,b=null!==(o=null===(l=s.contentWrapperEl)||void 0===l?void 0:l[s.axis[s.draggedAxis].scrollSizeAttr])&&void 0!==o?o:0,g=parseInt(null!==(a=null===(n=s.elStyles)||void 0===n?void 0:n[s.axis[s.draggedAxis].sizeAttr])&&void 0!==a?a:"0px",10);t.preventDefault(),t.stopPropagation();var x=("y"===s.draggedAxis?t.pageY:t.pageX)-(null!==(h=null===(c=f.rect)||void 0===c?void 0:c[s.axis[s.draggedAxis].offsetAttr])&&void 0!==h?h:0)-s.axis[s.draggedAxis].dragOffset,y=(x=s.isRtl?(null!==(d=null===(u=f.rect)||void 0===u?void 0:u[s.axis[s.draggedAxis].sizeAttr])&&void 0!==d?d:0)-m.size-x:x)/(v-m.size)*(b-g);"x"===s.draggedAxis&&s.isRtl&&(y=(null===(p=e.getRtlHelpers())||void 0===p?void 0:p.isScrollingToNegative)?-y:y),s.contentWrapperEl[s.axis[s.draggedAxis].scrollOffsetAttr]=y}},this.onEndDrag=function(e){var t=f(s.el),i=p(s.el);e.preventDefault(),e.stopPropagation(),s.el.classList.remove(s.classNames.dragging),t.removeEventListener("mousemove",s.drag,!0),t.removeEventListener("mouseup",s.onEndDrag,!0),s.removePreventClickId=i.setTimeout((function(){t.removeEventListener("click",s.preventClick,!0),t.removeEventListener("dblclick",s.preventClick,!0),s.removePreventClickId=null}))},this.preventClick=function(e){e.preventDefault(),e.stopPropagation()},this.el=t,this.options=c(c({},e.defaultOptions),i),this.classNames=c(c({},e.defaultOptions.classNames),i.classNames),this.axis={x:{scrollOffsetAttr:"scrollLeft",sizeAttr:"width",scrollSizeAttr:"scrollWidth",offsetSizeAttr:"offsetWidth",offsetAttr:"left",overflowAttr:"overflowX",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}},y:{scrollOffsetAttr:"scrollTop",sizeAttr:"height",scrollSizeAttr:"scrollHeight",offsetSizeAttr:"offsetHeight",offsetAttr:"top",overflowAttr:"overflowY",dragOffset:0,isOverflowing:!0,forceVisible:!1,track:{size:null,el:null,rect:null,isVisible:!1},scrollbar:{size:null,el:null,rect:null,isVisible:!1}}},"object"!=typeof this.el||!this.el.nodeName)throw new Error("Argument passed to SimpleBar must be an HTML element instead of ".concat(this.el));this.onMouseMove=o()(this._onMouseMove,64),this.onWindowResize=r()(this._onWindowResize,64,{leading:!0}),this.onStopScrolling=r()(this._onStopScrolling,this.stopScrollDelay),this.onMouseEntered=r()(this._onMouseEntered,this.stopScrollDelay),this.init()}return e.getRtlHelpers=function(){if(e.rtlHelpers)return e.rtlHelpers;var t=document.createElement("div");t.innerHTML='<div class="simplebar-dummy-scrollbar-size"><div></div></div>';var i=t.firstElementChild,s=null==i?void 0:i.firstElementChild;if(!s)return null;document.body.appendChild(i),i.scrollLeft=0;var r=e.getOffset(i),l=e.getOffset(s);i.scrollLeft=-999;var o=e.getOffset(s);return document.body.removeChild(i),e.rtlHelpers={isScrollOriginAtZero:r.left!==l.left,isScrollingToNegative:l.left!==o.left},e.rtlHelpers},e.prototype.getScrollbarWidth=function(){try{return this.contentWrapperEl&&"none"===getComputedStyle(this.contentWrapperEl,"::-webkit-scrollbar").display||"scrollbarWidth"in document.documentElement.style||"-ms-overflow-style"in document.documentElement.style?0:d()}catch(e){return d()}},e.getOffset=function(e){var t=e.getBoundingClientRect(),i=f(e),s=p(e);return{top:t.top+(s.pageYOffset||i.documentElement.scrollTop),left:t.left+(s.pageXOffset||i.documentElement.scrollLeft)}},e.prototype.init=function(){a()&&(this.initDOM(),this.rtlHelpers=e.getRtlHelpers(),this.scrollbarWidth=this.getScrollbarWidth(),this.recalculate(),this.initListeners())},e.prototype.initDOM=function(){var e,t,i,s,r,l=this;if(Array.prototype.filter.call(this.el.children,(function(e){return e.classList.contains(l.classNames.wrapper)})).length)this.wrapperEl=this.el.querySelector(".".concat(this.classNames.wrapper)),this.contentWrapperEl=this.options.scrollableNode||this.el.querySelector(".".concat(this.classNames.contentWrapper)),this.contentEl=this.options.contentNode||this.el.querySelector(".".concat(this.classNames.contentEl)),this.offsetEl=this.el.querySelector(".".concat(this.classNames.offset)),this.maskEl=this.el.querySelector(".".concat(this.classNames.mask)),this.placeholderEl=this.findChild(this.wrapperEl,".".concat(this.classNames.placeholder)),this.heightAutoObserverWrapperEl=this.el.querySelector(".".concat(this.classNames.heightAutoObserverWrapperEl)),this.heightAutoObserverEl=this.el.querySelector(".".concat(this.classNames.heightAutoObserverEl)),this.axis.x.track.el=this.findChild(this.el,".".concat(this.classNames.track,".").concat(this.classNames.horizontal)),this.axis.y.track.el=this.findChild(this.el,".".concat(this.classNames.track,".").concat(this.classNames.vertical));else{for(this.wrapperEl=document.createElement("div"),this.contentWrapperEl=document.createElement("div"),this.offsetEl=document.createElement("div"),this.maskEl=document.createElement("div"),this.contentEl=document.createElement("div"),this.placeholderEl=document.createElement("div"),this.heightAutoObserverWrapperEl=document.createElement("div"),this.heightAutoObserverEl=document.createElement("div"),this.wrapperEl.classList.add(this.classNames.wrapper),this.contentWrapperEl.classList.add(this.classNames.contentWrapper),this.offsetEl.classList.add(this.classNames.offset),this.maskEl.classList.add(this.classNames.mask),this.contentEl.classList.add(this.classNames.contentEl),this.placeholderEl.classList.add(this.classNames.placeholder),this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl),this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl);this.el.firstChild;)this.contentEl.appendChild(this.el.firstChild);this.contentWrapperEl.appendChild(this.contentEl),this.offsetEl.appendChild(this.contentWrapperEl),this.maskEl.appendChild(this.offsetEl),this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl),this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl),this.wrapperEl.appendChild(this.maskEl),this.wrapperEl.appendChild(this.placeholderEl),this.el.appendChild(this.wrapperEl),null===(e=this.contentWrapperEl)||void 0===e||e.setAttribute("tabindex","0"),null===(t=this.contentWrapperEl)||void 0===t||t.setAttribute("role","region"),null===(i=this.contentWrapperEl)||void 0===i||i.setAttribute("aria-label",this.options.ariaLabel)}if(!this.axis.x.track.el||!this.axis.y.track.el){var o=document.createElement("div"),n=document.createElement("div");o.classList.add(this.classNames.track),n.classList.add(this.classNames.scrollbar),o.appendChild(n),this.axis.x.track.el=o.cloneNode(!0),this.axis.x.track.el.classList.add(this.classNames.horizontal),this.axis.y.track.el=o.cloneNode(!0),this.axis.y.track.el.classList.add(this.classNames.vertical),this.el.appendChild(this.axis.x.track.el),this.el.appendChild(this.axis.y.track.el)}this.axis.x.scrollbar.el=this.axis.x.track.el.querySelector(".".concat(this.classNames.scrollbar)),this.axis.y.scrollbar.el=this.axis.y.track.el.querySelector(".".concat(this.classNames.scrollbar)),this.options.autoHide||(null===(s=this.axis.x.scrollbar.el)||void 0===s||s.classList.add(this.classNames.visible),null===(r=this.axis.y.scrollbar.el)||void 0===r||r.classList.add(this.classNames.visible)),this.el.setAttribute("data-simplebar","init")},e.prototype.initListeners=function(){var e,t=this,i=p(this.el);if(this.el.addEventListener("mouseenter",this.onMouseEnter),this.el.addEventListener("pointerdown",this.onPointerEvent,!0),this.el.addEventListener("mousemove",this.onMouseMove),this.el.addEventListener("mouseleave",this.onMouseLeave),null===(e=this.contentWrapperEl)||void 0===e||e.addEventListener("scroll",this.onScroll),i.addEventListener("resize",this.onWindowResize),this.contentEl){if(window.ResizeObserver){var s=!1,r=i.ResizeObserver||ResizeObserver;this.resizeObserver=new r((function(){s&&i.requestAnimationFrame((function(){t.recalculate()}))})),this.resizeObserver.observe(this.el),this.resizeObserver.observe(this.contentEl),i.requestAnimationFrame((function(){s=!0}))}this.mutationObserver=new i.MutationObserver((function(){i.requestAnimationFrame((function(){t.recalculate()}))})),this.mutationObserver.observe(this.contentEl,{childList:!0,subtree:!0,characterData:!0})}},e.prototype.recalculate=function(){if(this.heightAutoObserverEl&&this.contentEl&&this.contentWrapperEl&&this.wrapperEl&&this.placeholderEl){var e=p(this.el);this.elStyles=e.getComputedStyle(this.el),this.isRtl="rtl"===this.elStyles.direction;var t=this.contentEl.offsetWidth,i=this.heightAutoObserverEl.offsetHeight<=1,s=this.heightAutoObserverEl.offsetWidth<=1||t>0,r=this.contentWrapperEl.offsetWidth,l=this.elStyles.overflowX,o=this.elStyles.overflowY;this.contentEl.style.padding="".concat(this.elStyles.paddingTop," ").concat(this.elStyles.paddingRight," ").concat(this.elStyles.paddingBottom," ").concat(this.elStyles.paddingLeft),this.wrapperEl.style.margin="-".concat(this.elStyles.paddingTop," -").concat(this.elStyles.paddingRight," -").concat(this.elStyles.paddingBottom," -").concat(this.elStyles.paddingLeft);var n=this.contentEl.scrollHeight,a=this.contentEl.scrollWidth;this.contentWrapperEl.style.height=i?"auto":"100%",this.placeholderEl.style.width=s?"".concat(t||a,"px"):"auto",this.placeholderEl.style.height="".concat(n,"px");var c=this.contentWrapperEl.offsetHeight;this.axis.x.isOverflowing=0!==t&&a>t,this.axis.y.isOverflowing=n>c,this.axis.x.isOverflowing="hidden"!==l&&this.axis.x.isOverflowing,this.axis.y.isOverflowing="hidden"!==o&&this.axis.y.isOverflowing,this.axis.x.forceVisible="x"===this.options.forceVisible||!0===this.options.forceVisible,this.axis.y.forceVisible="y"===this.options.forceVisible||!0===this.options.forceVisible,this.hideNativeScrollbar();var h=this.axis.x.isOverflowing?this.scrollbarWidth:0,u=this.axis.y.isOverflowing?this.scrollbarWidth:0;this.axis.x.isOverflowing=this.axis.x.isOverflowing&&a>r-u,this.axis.y.isOverflowing=this.axis.y.isOverflowing&&n>c-h,this.axis.x.scrollbar.size=this.getScrollbarSize("x"),this.axis.y.scrollbar.size=this.getScrollbarSize("y"),this.axis.x.scrollbar.el&&(this.axis.x.scrollbar.el.style.width="".concat(this.axis.x.scrollbar.size,"px")),this.axis.y.scrollbar.el&&(this.axis.y.scrollbar.el.style.height="".concat(this.axis.y.scrollbar.size,"px")),this.positionScrollbar("x"),this.positionScrollbar("y"),this.toggleTrackVisibility("x"),this.toggleTrackVisibility("y")}},e.prototype.getScrollbarSize=function(e){var t,i;if(void 0===e&&(e="y"),!this.axis[e].isOverflowing||!this.contentEl)return 0;var s,r=this.contentEl[this.axis[e].scrollSizeAttr],l=null!==(i=null===(t=this.axis[e].track.el)||void 0===t?void 0:t[this.axis[e].offsetSizeAttr])&&void 0!==i?i:0,o=l/r;return s=Math.max(~~(o*l),this.options.scrollbarMinSize),this.options.scrollbarMaxSize&&(s=Math.min(s,this.options.scrollbarMaxSize)),s},e.prototype.positionScrollbar=function(t){var i,s,r;void 0===t&&(t="y");var l=this.axis[t].scrollbar;if(this.axis[t].isOverflowing&&this.contentWrapperEl&&l.el&&this.elStyles){var o=this.contentWrapperEl[this.axis[t].scrollSizeAttr],n=(null===(i=this.axis[t].track.el)||void 0===i?void 0:i[this.axis[t].offsetSizeAttr])||0,a=parseInt(this.elStyles[this.axis[t].sizeAttr],10),c=this.contentWrapperEl[this.axis[t].scrollOffsetAttr];c="x"===t&&this.isRtl&&(null===(s=e.getRtlHelpers())||void 0===s?void 0:s.isScrollOriginAtZero)?-c:c,"x"===t&&this.isRtl&&(c=(null===(r=e.getRtlHelpers())||void 0===r?void 0:r.isScrollingToNegative)?c:-c);var h=c/(o-a),u=~~((n-l.size)*h);u="x"===t&&this.isRtl?-u+(n-l.size):u,l.el.style.transform="x"===t?"translate3d(".concat(u,"px, 0, 0)"):"translate3d(0, ".concat(u,"px, 0)")}},e.prototype.toggleTrackVisibility=function(e){void 0===e&&(e="y");var t=this.axis[e].track.el,i=this.axis[e].scrollbar.el;t&&i&&this.contentWrapperEl&&(this.axis[e].isOverflowing||this.axis[e].forceVisible?(t.style.visibility="visible",this.contentWrapperEl.style[this.axis[e].overflowAttr]="scroll",this.el.classList.add("".concat(this.classNames.scrollable,"-").concat(e))):(t.style.visibility="hidden",this.contentWrapperEl.style[this.axis[e].overflowAttr]="hidden",this.el.classList.remove("".concat(this.classNames.scrollable,"-").concat(e))),this.axis[e].isOverflowing?i.style.display="block":i.style.display="none")},e.prototype.showScrollbar=function(e){var t;void 0===e&&(e="y"),this.axis[e].isOverflowing&&!this.axis[e].scrollbar.isVisible&&(null===(t=this.axis[e].scrollbar.el)||void 0===t||t.classList.add(this.classNames.visible),this.axis[e].scrollbar.isVisible=!0)},e.prototype.hideScrollbar=function(e){var t;void 0===e&&(e="y"),this.axis[e].isOverflowing&&this.axis[e].scrollbar.isVisible&&(null===(t=this.axis[e].scrollbar.el)||void 0===t||t.classList.remove(this.classNames.visible),this.axis[e].scrollbar.isVisible=!1)},e.prototype.hideNativeScrollbar=function(){this.offsetEl&&(this.offsetEl.style[this.isRtl?"left":"right"]=this.axis.y.isOverflowing||this.axis.y.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px",this.offsetEl.style.bottom=this.axis.x.isOverflowing||this.axis.x.forceVisible?"-".concat(this.scrollbarWidth,"px"):"0px")},e.prototype.onMouseMoveForAxis=function(e){void 0===e&&(e="y");var t=this.axis[e];t.track.el&&t.scrollbar.el&&(t.track.rect=t.track.el.getBoundingClientRect(),t.scrollbar.rect=t.scrollbar.el.getBoundingClientRect(),this.isWithinBounds(t.track.rect)?(this.showScrollbar(e),t.track.el.classList.add(this.classNames.hover),this.isWithinBounds(t.scrollbar.rect)?t.scrollbar.el.classList.add(this.classNames.hover):t.scrollbar.el.classList.remove(this.classNames.hover)):(t.track.el.classList.remove(this.classNames.hover),this.options.autoHide&&this.hideScrollbar(e)))},e.prototype.onMouseLeaveForAxis=function(e){var t,i;void 0===e&&(e="y"),null===(t=this.axis[e].track.el)||void 0===t||t.classList.remove(this.classNames.hover),null===(i=this.axis[e].scrollbar.el)||void 0===i||i.classList.remove(this.classNames.hover),this.options.autoHide&&this.hideScrollbar(e)},e.prototype.onDragStart=function(e,t){var i;void 0===t&&(t="y");var s=f(this.el),r=p(this.el),l=this.axis[t].scrollbar,o="y"===t?e.pageY:e.pageX;this.axis[t].dragOffset=o-((null===(i=l.rect)||void 0===i?void 0:i[this.axis[t].offsetAttr])||0),this.draggedAxis=t,this.el.classList.add(this.classNames.dragging),s.addEventListener("mousemove",this.drag,!0),s.addEventListener("mouseup",this.onEndDrag,!0),null===this.removePreventClickId?(s.addEventListener("click",this.preventClick,!0),s.addEventListener("dblclick",this.preventClick,!0)):(r.clearTimeout(this.removePreventClickId),this.removePreventClickId=null)},e.prototype.onTrackClick=function(e,t){var i,s,r,l,o=this;void 0===t&&(t="y");var n=this.axis[t];if(this.options.clickOnTrack&&n.scrollbar.el&&this.contentWrapperEl){e.preventDefault();var a=p(this.el);this.axis[t].scrollbar.rect=n.scrollbar.el.getBoundingClientRect();var c=null!==(s=null===(i=this.axis[t].scrollbar.rect)||void 0===i?void 0:i[this.axis[t].offsetAttr])&&void 0!==s?s:0,h=parseInt(null!==(l=null===(r=this.elStyles)||void 0===r?void 0:r[this.axis[t].sizeAttr])&&void 0!==l?l:"0px",10),u=this.contentWrapperEl[this.axis[t].scrollOffsetAttr],d=("y"===t?this.mouseY-c:this.mouseX-c)<0?-1:1,f=-1===d?u-h:u+h;!function e(){o.contentWrapperEl&&(-1===d?u>f&&(u-=40,o.contentWrapperEl[o.axis[t].scrollOffsetAttr]=u,a.requestAnimationFrame(e)):u<f&&(u+=40,o.contentWrapperEl[o.axis[t].scrollOffsetAttr]=u,a.requestAnimationFrame(e)))}()}},e.prototype.getContentElement=function(){return this.contentEl},e.prototype.getScrollElement=function(){return this.contentWrapperEl},e.prototype.removeListeners=function(){var e=p(this.el);this.el.removeEventListener("mouseenter",this.onMouseEnter),this.el.removeEventListener("pointerdown",this.onPointerEvent,!0),this.el.removeEventListener("mousemove",this.onMouseMove),this.el.removeEventListener("mouseleave",this.onMouseLeave),this.contentWrapperEl&&this.contentWrapperEl.removeEventListener("scroll",this.onScroll),e.removeEventListener("resize",this.onWindowResize),this.mutationObserver&&this.mutationObserver.disconnect(),this.resizeObserver&&this.resizeObserver.disconnect(),this.onMouseMove.cancel(),this.onWindowResize.cancel(),this.onStopScrolling.cancel(),this.onMouseEntered.cancel()},e.prototype.unMount=function(){this.removeListeners()},e.prototype.isWithinBounds=function(e){return this.mouseX>=e.left&&this.mouseX<=e.left+e.width&&this.mouseY>=e.top&&this.mouseY<=e.top+e.height},e.prototype.findChild=function(e,t){var i=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;return Array.prototype.filter.call(e.children,(function(e){return i.call(e,t)}))[0]},e.rtlHelpers=null,e.defaultOptions={forceVisible:!1,clickOnTrack:!0,scrollbarMinSize:25,scrollbarMaxSize:0,ariaLabel:"scrollable content",classNames:{contentEl:"simplebar-content",contentWrapper:"simplebar-content-wrapper",offset:"simplebar-offset",mask:"simplebar-mask",wrapper:"simplebar-wrapper",placeholder:"simplebar-placeholder",scrollbar:"simplebar-scrollbar",track:"simplebar-track",heightAutoObserverWrapperEl:"simplebar-height-auto-observer-wrapper",heightAutoObserverEl:"simplebar-height-auto-observer",visible:"simplebar-visible",horizontal:"simplebar-horizontal",vertical:"simplebar-vertical",hover:"simplebar-hover",dragging:"simplebar-dragging",scrolling:"simplebar-scrolling",scrollable:"simplebar-scrollable",mouseEntered:"simplebar-mouse-entered"},scrollableNode:null,contentNode:null,autoHide:!0},e.getOptions=v,e}()},5258:function(e,t,i){"use strict";i.d(t,{Z:function(){return o}});var s=i(2784),r=i(2560),l=function(){return l=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)};var o=s.forwardRef((function(e,t){var i=e.children,o=e.scrollableNodeProps,n=void 0===o?{}:o,a=function(e,t){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(i[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(i[s[r]]=e[s[r]])}return i}(e,["children","scrollableNodeProps"]),c=s.useRef(),h=s.useRef(),u=s.useRef(),d={},p={},f=l(l({},n),{className:"simplebar-content-wrapper".concat(n.className?" ".concat(n.className):""),tabIndex:0,role:"region","aria-label":d.ariaLabel||r.Z.defaultOptions.ariaLabel});return Object.keys(a).forEach((function(e){Object.prototype.hasOwnProperty.call(r.Z.defaultOptions,e)?d[e]=a[e]:p[e]=a[e]})),s.useEffect((function(){var e;return h.current=f.ref?f.ref.current:h.current,c.current&&(e=new r.Z(c.current,l(l(l({},d),h.current&&{scrollableNode:h.current}),u.current&&{contentNode:u.current})),"function"==typeof t?t(e):t&&(t.current=e)),function(){null==e||e.unMount(),e=null,"function"==typeof t&&t(null)}}),[]),s.createElement("div",l({ref:c},p),s.createElement("div",{className:"simplebar-wrapper"},s.createElement("div",{className:"simplebar-height-auto-observer-wrapper"},s.createElement("div",{className:"simplebar-height-auto-observer"})),s.createElement("div",{className:"simplebar-mask"},s.createElement("div",{className:"simplebar-offset"},"function"==typeof i?i({scrollableNodeRef:h,scrollableNodeProps:l(l({},f),{ref:h}),contentNodeRef:u,contentNodeProps:{className:"simplebar-content",ref:u}}):s.createElement("div",l({},f),s.createElement("div",{className:"simplebar-content"},i)))),s.createElement("div",{className:"simplebar-placeholder"})),s.createElement("div",{className:"simplebar-track simplebar-horizontal"},s.createElement("div",{className:"simplebar-scrollbar"})),s.createElement("div",{className:"simplebar-track simplebar-vertical"},s.createElement("div",{className:"simplebar-scrollbar"})))}));o.displayName="SimpleBar"},6848:function(e){var t=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=t},857:function(e,t,i){var s=i(7772).Symbol;e.exports=s},3366:function(e,t,i){var s=i(857),r=i(2107),l=i(7157),o=s?s.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":o&&o in Object(e)?r(e):l(e)}},1704:function(e,t,i){var s=i(2153),r=/^\s+/;e.exports=function(e){return e?e.slice(0,s(e)+1).replace(r,""):e}},1242:function(e,t,i){var s="object"==typeof i.g&&i.g&&i.g.Object===Object&&i.g;e.exports=s},2107:function(e,t,i){var s=i(857),r=Object.prototype,l=r.hasOwnProperty,o=r.toString,n=s?s.toStringTag:void 0;e.exports=function(e){var t=l.call(e,n),i=e[n];try{e[n]=void 0;var s=!0}catch(a){}var r=o.call(e);return s&&(t?e[n]=i:delete e[n]),r}},7157:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},7772:function(e,t,i){var s=i(1242),r="object"==typeof self&&self&&self.Object===Object&&self,l=s||r||Function("return this")();e.exports=l},2153:function(e){var t=/\s/;e.exports=function(e){for(var i=e.length;i--&&t.test(e.charAt(i)););return i}},4073:function(e,t,i){var s=i(9259),r=i(1100),l=i(7642),o=Math.max,n=Math.min;e.exports=function(e,t,i){var a,c,h,u,d,p,f=0,v=!1,m=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var i=a,s=c;return a=c=void 0,f=t,u=e.apply(s,i)}function x(e){return f=e,d=setTimeout(E,t),v?g(e):u}function y(e){var i=e-p;return void 0===p||i>=t||i<0||m&&e-f>=h}function E(){var e=r();if(y(e))return w(e);d=setTimeout(E,function(e){var i=t-(e-p);return m?n(i,h-(e-f)):i}(e))}function w(e){return d=void 0,b&&a?g(e):(a=c=void 0,u)}function O(){var e=r(),i=y(e);if(a=arguments,c=this,p=e,i){if(void 0===d)return x(p);if(m)return clearTimeout(d),d=setTimeout(E,t),g(p)}return void 0===d&&(d=setTimeout(E,t)),u}return t=l(t)||0,s(i)&&(v=!!i.leading,h=(m="maxWait"in i)?o(l(i.maxWait)||0,t):h,b="trailing"in i?!!i.trailing:b),O.cancel=function(){void 0!==d&&clearTimeout(d),f=0,a=p=c=d=void 0},O.flush=function(){return void 0===d?u:w(r())},O}},9259:function(e){e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},5125:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},4795:function(e,t,i){var s=i(3366),r=i(5125);e.exports=function(e){return"symbol"==typeof e||r(e)&&"[object Symbol]"==s(e)}},1100:function(e,t,i){var s=i(7772);e.exports=function(){return s.Date.now()}},2436:function(e,t,i){var s=i(4073),r=i(9259);e.exports=function(e,t,i){var l=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return r(i)&&(l="leading"in i?!!i.leading:l,o="trailing"in i?!!i.trailing:o),s(e,t,{leading:l,maxWait:t,trailing:o})}},7642:function(e,t,i){var s=i(1704),r=i(9259),l=i(4795),o=/^[-+]0x[0-9a-f]+$/i,n=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(l(e))return NaN;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=s(e);var i=n.test(e);return i||a.test(e)?c(e.slice(2),i?2:8):o.test(e)?NaN:+e}},7235:function(){}}]);
//# sourceMappingURL=2a377a2abd663424713f6711d6bdca2c16bbc77a-afcfe3ade24db342d835.js.map