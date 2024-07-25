import{k as P,m as ne,ar as Se,a4 as L,a6 as Oe,as as Ce,aw as Ae,ax as Te,A as oe,i as g,c as T,b as w,g as Me,t as q,F as ze,av as ue,S as W,N as Z,D as ee,d as U,e as we}from"./vendor-TCjgV7Sn.js";import{a9 as Re,aa as $e,ab as ce,u as ke,ac as _e,B as de}from"./index-k-FO5KmN.js";import{f as Pe}from"./global-MCJ9PAgv.js";const Ue=()=>{const[a,s]=P([]),[e,t]=P([]),n=async()=>{const[{rules:i},{providers:o}]=await Promise.all([Re(),$e()]);s(Object.values(i)),t(Object.values(o))};return{rules:a,ruleProviders:e,updateRules:n,updateAllRuleProvider:async()=>{await Promise.all(e().map(i=>ce(i.name))),await n()},updateRuleProviderByName:async i=>{await ce(i),await n()}}};/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Y(){return Y=Object.assign?Object.assign.bind():function(a){for(var s=1;s<arguments.length;s++){var e=arguments[s];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(a[t]=e[t])}return a},Y.apply(this,arguments)}/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _(a,s,e){var t,n=(t=e.initialDeps)!=null?t:[],r;return function(){var l;e.key&&e.debug!=null&&e.debug()&&(l=Date.now());var i=a(),o=i.length!==n.length||i.some(function(p,m){return n[m]!==p});if(!o)return r;n=i;var u;if(e.key&&e.debug!=null&&e.debug()&&(u=Date.now()),r=s.apply(void 0,i),e.key&&e.debug!=null&&e.debug()){var c=Math.round((Date.now()-l)*100)/100,d=Math.round((Date.now()-u)*100)/100,f=d/16,h=function(m,C){for(m=String(m);m.length<C;)m=" "+m;return m};console.info("%c⏱ "+h(d,5)+" /"+h(c,5)+" ms",`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(`+Math.max(0,Math.min(120-120*f,120))+"deg 100% 31%);",e==null?void 0:e.key)}return e==null||e.onChange==null||e.onChange(r),r}}function te(a,s){if(a===void 0)throw new Error("Unexpected undefined"+(s?": "+s:""));return a}var Ve=function(s,e){return Math.abs(s-e)<1};/**
 * virtual-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ne=function(s){return s},je=function(s){for(var e=Math.max(s.startIndex-s.overscan,0),t=Math.min(s.endIndex+s.overscan,s.count-1),n=[],r=e;r<=t;r++)n.push(r);return n},Fe=function(s,e){var t=s.scrollElement;if(t){var n=function(i){var o=i.width,u=i.height;e({width:Math.round(o),height:Math.round(u)})};n(t.getBoundingClientRect());var r=new ResizeObserver(function(l){var i=l[0];if(i!=null&&i.borderBoxSize){var o=i.borderBoxSize[0];if(o){n({width:o.inlineSize,height:o.blockSize});return}}n(t.getBoundingClientRect())});return r.observe(t,{box:"border-box"}),function(){r.unobserve(t)}}},De=function(s,e){var t=s.scrollElement;if(t){var n=function(){e(t[s.options.horizontal?"scrollLeft":"scrollTop"])};return n(),t.addEventListener("scroll",n,{passive:!0}),function(){t.removeEventListener("scroll",n)}}},Be=function(s,e,t){if(e!=null&&e.borderBoxSize){var n=e.borderBoxSize[0];if(n){var r=Math.round(n[t.options.horizontal?"inlineSize":"blockSize"]);return r}}return Math.round(s.getBoundingClientRect()[t.options.horizontal?"width":"height"])},He=function(s,e,t){var n,r,l=e.adjustments,i=l===void 0?0:l,o=e.behavior,u=s+i;(n=t.scrollElement)==null||n.scrollTo==null||n.scrollTo((r={},r[t.options.horizontal?"left":"top"]=u,r.behavior=o,r))},Ke=function(s){var e=this;this.unsubs=[],this.scrollElement=null,this.isScrolling=!1,this.isScrollingTimeoutId=null,this.scrollToIndexTimeoutId=null,this.measurementsCache=[],this.itemSizeCache=new Map,this.pendingMeasuredCacheIndexes=[],this.scrollDirection=null,this.scrollAdjustments=0,this.measureElementCache=new Map,this.observer=function(){var t=null,n=function(){return t||(typeof ResizeObserver<"u"?t=new ResizeObserver(function(l){l.forEach(function(i){e._measureElement(i.target,i)})}):null)};return{disconnect:function(){var l;return(l=n())==null?void 0:l.disconnect()},observe:function(l){var i;return(i=n())==null?void 0:i.observe(l,{box:"border-box"})},unobserve:function(l){var i;return(i=n())==null?void 0:i.unobserve(l)}}}(),this.range=null,this.setOptions=function(t){Object.entries(t).forEach(function(n){var r=n[0],l=n[1];typeof l>"u"&&delete t[r]}),e.options=Y({debug:!1,initialOffset:0,overscan:1,paddingStart:0,paddingEnd:0,scrollPaddingStart:0,scrollPaddingEnd:0,horizontal:!1,getItemKey:Ne,rangeExtractor:je,onChange:function(){},measureElement:Be,initialRect:{width:0,height:0},scrollMargin:0,scrollingDelay:150,indexAttribute:"data-index",initialMeasurementsCache:[],lanes:1},t)},this.notify=function(t){e.options.onChange==null||e.options.onChange(e,t)},this.maybeNotify=_(function(){return e.calculateRange(),[e.isScrolling,e.range?e.range.startIndex:null,e.range?e.range.endIndex:null]},function(t){e.notify(t)},{key:!1,debug:function(){return e.options.debug},initialDeps:[this.isScrolling,this.range?this.range.startIndex:null,this.range?this.range.endIndex:null]}),this.cleanup=function(){e.unsubs.filter(Boolean).forEach(function(t){return t()}),e.unsubs=[],e.scrollElement=null},this._didMount=function(){return e.measureElementCache.forEach(e.observer.observe),function(){e.observer.disconnect(),e.cleanup()}},this._willUpdate=function(){var t=e.options.getScrollElement();e.scrollElement!==t&&(e.cleanup(),e.scrollElement=t,e._scrollToOffset(e.scrollOffset,{adjustments:void 0,behavior:void 0}),e.unsubs.push(e.options.observeElementRect(e,function(n){e.scrollRect=n,e.maybeNotify()})),e.unsubs.push(e.options.observeElementOffset(e,function(n){e.scrollAdjustments=0,e.scrollOffset!==n&&(e.isScrollingTimeoutId!==null&&(clearTimeout(e.isScrollingTimeoutId),e.isScrollingTimeoutId=null),e.isScrolling=!0,e.scrollDirection=e.scrollOffset<n?"forward":"backward",e.scrollOffset=n,e.maybeNotify(),e.isScrollingTimeoutId=setTimeout(function(){e.isScrollingTimeoutId=null,e.isScrolling=!1,e.scrollDirection=null,e.maybeNotify()},e.options.scrollingDelay))})))},this.getSize=function(){return e.scrollRect[e.options.horizontal?"width":"height"]},this.memoOptions=_(function(){return[e.options.count,e.options.paddingStart,e.options.scrollMargin,e.options.getItemKey]},function(t,n,r,l){return e.pendingMeasuredCacheIndexes=[],{count:t,paddingStart:n,scrollMargin:r,getItemKey:l}},{key:!1}),this.getFurthestMeasurement=function(t,n){for(var r=new Map,l=new Map,i=n-1;i>=0;i--){var o=t[i];if(!r.has(o.lane)){var u=l.get(o.lane);if(u==null||o.end>u.end?l.set(o.lane,o):o.end<u.end&&r.set(o.lane,!0),r.size===e.options.lanes)break}}return l.size===e.options.lanes?Array.from(l.values()).sort(function(c,d){return c.end-d.end})[0]:void 0},this.getMeasurements=_(function(){return[e.memoOptions(),e.itemSizeCache]},function(t,n){var r=t.count,l=t.paddingStart,i=t.scrollMargin,o=t.getItemKey,u=e.pendingMeasuredCacheIndexes.length>0?Math.min.apply(Math,e.pendingMeasuredCacheIndexes):0;e.pendingMeasuredCacheIndexes=[];for(var c=e.measurementsCache.slice(0,u),d=u;d<r;d++){var f=o(d),h=e.options.lanes===1?c[d-1]:e.getFurthestMeasurement(c,d),p=h?h.end:l+i,m=n.get(f),C=typeof m=="number"?m:e.options.estimateSize(d),M=p+C,R=h?h.lane:d%e.options.lanes;c[d]={index:d,start:p,size:C,end:M,key:f,lane:R}}return e.measurementsCache=c,c},{key:!1,debug:function(){return e.options.debug}}),this.calculateRange=_(function(){return[e.getMeasurements(),e.getSize(),e.scrollOffset]},function(t,n,r){return e.range=t.length>0&&n>0?We({measurements:t,outerSize:n,scrollOffset:r}):null},{key:!1,debug:function(){return e.options.debug}}),this.getIndexes=_(function(){return[e.options.rangeExtractor,e.calculateRange(),e.options.overscan,e.options.count]},function(t,n,r,l){return n===null?[]:t(Y({},n,{overscan:r,count:l}))},{key:!1,debug:function(){return e.options.debug}}),this.indexFromElement=function(t){var n=e.options.indexAttribute,r=t.getAttribute(n);return r?parseInt(r,10):(console.warn("Missing attribute name '"+n+"={index}' on measured element."),-1)},this._measureElement=function(t,n){var r=e.measurementsCache[e.indexFromElement(t)];if(!r||!t.isConnected){e.measureElementCache.forEach(function(o,u){o===t&&(e.observer.unobserve(t),e.measureElementCache.delete(u))});return}var l=e.measureElementCache.get(r.key);l!==t&&(l&&e.observer.unobserve(l),e.observer.observe(t),e.measureElementCache.set(r.key,t));var i=e.options.measureElement(t,n,e);e.resizeItem(r,i)},this.resizeItem=function(t,n){var r,l=(r=e.itemSizeCache.get(t.key))!=null?r:t.size,i=n-l;i!==0&&(t.start<e.scrollOffset&&e._scrollToOffset(e.scrollOffset,{adjustments:e.scrollAdjustments+=i,behavior:void 0}),e.pendingMeasuredCacheIndexes.push(t.index),e.itemSizeCache=new Map(e.itemSizeCache.set(t.key,n)),e.notify(!1))},this.measureElement=function(t){t&&e._measureElement(t,void 0)},this.getVirtualItems=_(function(){return[e.getIndexes(),e.getMeasurements()]},function(t,n){for(var r=[],l=0,i=t.length;l<i;l++){var o=t[l],u=n[o];r.push(u)}return r},{key:!1,debug:function(){return e.options.debug}}),this.getVirtualItemForOffset=function(t){var n=e.getMeasurements();return te(n[pe(0,n.length-1,function(r){return te(n[r]).start},t)])},this.getOffsetForAlignment=function(t,n){var r=e.getSize();n==="auto"&&(t<=e.scrollOffset?n="start":t>=e.scrollOffset+r?n="end":n="start"),n==="start"?t=t:n==="end"?t=t-r:n==="center"&&(t=t-r/2);var l=e.options.horizontal?"scrollWidth":"scrollHeight",i=e.scrollElement?"document"in e.scrollElement?e.scrollElement.document.documentElement[l]:e.scrollElement[l]:0,o=i-e.getSize();return Math.max(Math.min(o,t),0)},this.getOffsetForIndex=function(t,n){n===void 0&&(n="auto"),t=Math.max(0,Math.min(t,e.options.count-1));var r=te(e.getMeasurements()[t]);if(n==="auto")if(r.end>=e.scrollOffset+e.getSize()-e.options.scrollPaddingEnd)n="end";else if(r.start<=e.scrollOffset+e.options.scrollPaddingStart)n="start";else return[e.scrollOffset,n];var l=n==="end"?r.end+e.options.scrollPaddingEnd:r.start-e.options.scrollPaddingStart;return[e.getOffsetForAlignment(l,n),n]},this.isDynamicMode=function(){return e.measureElementCache.size>0},this.cancelScrollToIndex=function(){e.scrollToIndexTimeoutId!==null&&(clearTimeout(e.scrollToIndexTimeoutId),e.scrollToIndexTimeoutId=null)},this.scrollToOffset=function(t,n){var r=n===void 0?{}:n,l=r.align,i=l===void 0?"start":l,o=r.behavior;e.cancelScrollToIndex(),o==="smooth"&&e.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),e._scrollToOffset(e.getOffsetForAlignment(t,i),{adjustments:void 0,behavior:o})},this.scrollToIndex=function(t,n){var r=n===void 0?{}:n,l=r.align,i=l===void 0?"auto":l,o=r.behavior;t=Math.max(0,Math.min(t,e.options.count-1)),e.cancelScrollToIndex(),o==="smooth"&&e.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size.");var u=e.getOffsetForIndex(t,i),c=u[0],d=u[1];e._scrollToOffset(c,{adjustments:void 0,behavior:o}),o!=="smooth"&&e.isDynamicMode()&&(e.scrollToIndexTimeoutId=setTimeout(function(){e.scrollToIndexTimeoutId=null;var f=e.measureElementCache.has(e.options.getItemKey(t));if(f){var h=e.getOffsetForIndex(t,d),p=h[0];Ve(p,e.scrollOffset)||e.scrollToIndex(t,{align:d,behavior:o})}else e.scrollToIndex(t,{align:d,behavior:o})}))},this.scrollBy=function(t,n){var r=n===void 0?{}:n,l=r.behavior;e.cancelScrollToIndex(),l==="smooth"&&e.isDynamicMode()&&console.warn("The `smooth` scroll behavior is not fully supported with dynamic size."),e._scrollToOffset(e.scrollOffset+t,{adjustments:void 0,behavior:l})},this.getTotalSize=function(){var t;return(((t=e.getMeasurements()[e.options.count-1])==null?void 0:t.end)||e.options.paddingStart)-e.options.scrollMargin+e.options.paddingEnd},this._scrollToOffset=function(t,n){var r=n.adjustments,l=n.behavior;e.options.scrollToFn(t,{behavior:l,adjustments:r},e)},this.measure=function(){e.itemSizeCache=new Map,e.notify(!1)},this.setOptions(s),this.scrollRect=this.options.initialRect,this.scrollOffset=this.options.initialOffset,this.measurementsCache=this.options.initialMeasurementsCache,this.measurementsCache.forEach(function(t){e.itemSizeCache.set(t.key,t.size)}),this.maybeNotify()},pe=function(s,e,t,n){for(;s<=e;){var r=(s+e)/2|0,l=t(r);if(l<n)s=r+1;else if(l>n)e=r-1;else return r}return s>0?s-1:0};function We(a){for(var s=a.measurements,e=a.outerSize,t=a.scrollOffset,n=s.length-1,r=function(u){return s[u].start},l=pe(0,n,r,t),i=l;i<n&&s[i].end<t+e;)i++;return{startIndex:l,endIndex:i}}/**
 * solid-virtual
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Le(a){var s=ne(a),e=new Ke(s),t=Se(e.getVirtualItems()),n=t[0],r=t[1],l=P(e.getTotalSize()),i=l[0],o=l[1],u={get:function(f,h){switch(h){case"getVirtualItems":return function(){return n};case"getTotalSize":return function(){return i()};default:return Reflect.get(f,h)}}},c=new Proxy(e,u);return c.setOptions(s),L(function(){var d=c._didMount();c._willUpdate(),Oe(d)}),Ce(function(){c.setOptions(ne(s,a,{onChange:function(f,h){f._willUpdate(),r(Ae(f.getVirtualItems(),{key:"index"})),o(f.getTotalSize()),a.onChange==null||a.onChange(f,h)}})),c.measure()}),c}function fe(a){return Le(ne({observeElementRect:Fe,observeElementOffset:De,scrollToFn:He},a))}var Q={exports:{}},be={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Ấ:"A",Ắ:"A",Ẳ:"A",Ẵ:"A",Ặ:"A",Æ:"AE",Ầ:"A",Ằ:"A",Ȃ:"A",Ả:"A",Ạ:"A",Ẩ:"A",Ẫ:"A",Ậ:"A",Ç:"C",Ḉ:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ế:"E",Ḗ:"E",Ề:"E",Ḕ:"E",Ḝ:"E",Ȇ:"E",Ẻ:"E",Ẽ:"E",Ẹ:"E",Ể:"E",Ễ:"E",Ệ:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ḯ:"I",Ȋ:"I",Ỉ:"I",Ị:"I",Ð:"D",Ñ:"N",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ố:"O",Ṍ:"O",Ṓ:"O",Ȏ:"O",Ỏ:"O",Ọ:"O",Ổ:"O",Ỗ:"O",Ộ:"O",Ờ:"O",Ở:"O",Ỡ:"O",Ớ:"O",Ợ:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",Ủ:"U",Ụ:"U",Ử:"U",Ữ:"U",Ự:"U",Ý:"Y",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",ấ:"a",ắ:"a",ẳ:"a",ẵ:"a",ặ:"a",æ:"ae",ầ:"a",ằ:"a",ȃ:"a",ả:"a",ạ:"a",ẩ:"a",ẫ:"a",ậ:"a",ç:"c",ḉ:"c",è:"e",é:"e",ê:"e",ë:"e",ế:"e",ḗ:"e",ề:"e",ḕ:"e",ḝ:"e",ȇ:"e",ẻ:"e",ẽ:"e",ẹ:"e",ể:"e",ễ:"e",ệ:"e",ì:"i",í:"i",î:"i",ï:"i",ḯ:"i",ȋ:"i",ỉ:"i",ị:"i",ð:"d",ñ:"n",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",ố:"o",ṍ:"o",ṓ:"o",ȏ:"o",ỏ:"o",ọ:"o",ổ:"o",ỗ:"o",ộ:"o",ờ:"o",ở:"o",ỡ:"o",ớ:"o",ợ:"o",ù:"u",ú:"u",û:"u",ü:"u",ủ:"u",ụ:"u",ử:"u",ữ:"u",ự:"u",ý:"y",ÿ:"y",Ā:"A",ā:"a",Ă:"A",ă:"a",Ą:"A",ą:"a",Ć:"C",ć:"c",Ĉ:"C",ĉ:"c",Ċ:"C",ċ:"c",Č:"C",č:"c",C̆:"C",c̆:"c",Ď:"D",ď:"d",Đ:"D",đ:"d",Ē:"E",ē:"e",Ĕ:"E",ĕ:"e",Ė:"E",ė:"e",Ę:"E",ę:"e",Ě:"E",ě:"e",Ĝ:"G",Ǵ:"G",ĝ:"g",ǵ:"g",Ğ:"G",ğ:"g",Ġ:"G",ġ:"g",Ģ:"G",ģ:"g",Ĥ:"H",ĥ:"h",Ħ:"H",ħ:"h",Ḫ:"H",ḫ:"h",Ĩ:"I",ĩ:"i",Ī:"I",ī:"i",Ĭ:"I",ĭ:"i",Į:"I",į:"i",İ:"I",ı:"i",Ĳ:"IJ",ĳ:"ij",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",Ḱ:"K",ḱ:"k",K̆:"K",k̆:"k",Ĺ:"L",ĺ:"l",Ļ:"L",ļ:"l",Ľ:"L",ľ:"l",Ŀ:"L",ŀ:"l",Ł:"l",ł:"l",Ḿ:"M",ḿ:"m",M̆:"M",m̆:"m",Ń:"N",ń:"n",Ņ:"N",ņ:"n",Ň:"N",ň:"n",ŉ:"n",N̆:"N",n̆:"n",Ō:"O",ō:"o",Ŏ:"O",ŏ:"o",Ő:"O",ő:"o",Œ:"OE",œ:"oe",P̆:"P",p̆:"p",Ŕ:"R",ŕ:"r",Ŗ:"R",ŗ:"r",Ř:"R",ř:"r",R̆:"R",r̆:"r",Ȓ:"R",ȓ:"r",Ś:"S",ś:"s",Ŝ:"S",ŝ:"s",Ş:"S",Ș:"S",ș:"s",ş:"s",Š:"S",š:"s",Ţ:"T",ţ:"t",ț:"t",Ț:"T",Ť:"T",ť:"t",Ŧ:"T",ŧ:"t",T̆:"T",t̆:"t",Ũ:"U",ũ:"u",Ū:"U",ū:"u",Ŭ:"U",ŭ:"u",Ů:"U",ů:"u",Ű:"U",ű:"u",Ų:"U",ų:"u",Ȗ:"U",ȗ:"u",V̆:"V",v̆:"v",Ŵ:"W",ŵ:"w",Ẃ:"W",ẃ:"w",X̆:"X",x̆:"x",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Y̆:"Y",y̆:"y",Ź:"Z",ź:"z",Ż:"Z",ż:"z",Ž:"Z",ž:"z",ſ:"s",ƒ:"f",Ơ:"O",ơ:"o",Ư:"U",ư:"u",Ǎ:"A",ǎ:"a",Ǐ:"I",ǐ:"i",Ǒ:"O",ǒ:"o",Ǔ:"U",ǔ:"u",Ǖ:"U",ǖ:"u",Ǘ:"U",ǘ:"u",Ǚ:"U",ǚ:"u",Ǜ:"U",ǜ:"u",Ứ:"U",ứ:"u",Ṹ:"U",ṹ:"u",Ǻ:"A",ǻ:"a",Ǽ:"AE",ǽ:"ae",Ǿ:"O",ǿ:"o",Þ:"TH",þ:"th",Ṕ:"P",ṕ:"p",Ṥ:"S",ṥ:"s",X́:"X",x́:"x",Ѓ:"Г",ѓ:"г",Ќ:"К",ќ:"к",A̋:"A",a̋:"a",E̋:"E",e̋:"e",I̋:"I",i̋:"i",Ǹ:"N",ǹ:"n",Ồ:"O",ồ:"o",Ṑ:"O",ṑ:"o",Ừ:"U",ừ:"u",Ẁ:"W",ẁ:"w",Ỳ:"Y",ỳ:"y",Ȁ:"A",ȁ:"a",Ȅ:"E",ȅ:"e",Ȉ:"I",ȉ:"i",Ȍ:"O",ȍ:"o",Ȑ:"R",ȑ:"r",Ȕ:"U",ȕ:"u",B̌:"B",b̌:"b",Č̣:"C",č̣:"c",Ê̌:"E",ê̌:"e",F̌:"F",f̌:"f",Ǧ:"G",ǧ:"g",Ȟ:"H",ȟ:"h",J̌:"J",ǰ:"j",Ǩ:"K",ǩ:"k",M̌:"M",m̌:"m",P̌:"P",p̌:"p",Q̌:"Q",q̌:"q",Ř̩:"R",ř̩:"r",Ṧ:"S",ṧ:"s",V̌:"V",v̌:"v",W̌:"W",w̌:"w",X̌:"X",x̌:"x",Y̌:"Y",y̌:"y",A̧:"A",a̧:"a",B̧:"B",b̧:"b",Ḑ:"D",ḑ:"d",Ȩ:"E",ȩ:"e",Ɛ̧:"E",ɛ̧:"e",Ḩ:"H",ḩ:"h",I̧:"I",i̧:"i",Ɨ̧:"I",ɨ̧:"i",M̧:"M",m̧:"m",O̧:"O",o̧:"o",Q̧:"Q",q̧:"q",U̧:"U",u̧:"u",X̧:"X",x̧:"x",Z̧:"Z",z̧:"z",й:"и",Й:"И",ё:"е",Ё:"Е"},ye=Object.keys(be).join("|"),Ye=new RegExp(ye,"g"),Qe=new RegExp(ye,"");function Xe(a){return be[a]}var Ie=function(a){return a.replace(Ye,Xe)},Ge=function(a){return!!a.match(Qe)};Q.exports=Ie;Q.exports.has=Ge;Q.exports.remove=Ie;var Je=Q.exports;const qe=Te(Je);/**
 * @name match-sorter
 * @license MIT license.
 * @copyright (c) 2020 Kent C. Dodds
 * @author Kent C. Dodds <me@kentcdodds.com> (https://kentcdodds.com)
 */const I={CASE_SENSITIVE_EQUAL:7,EQUAL:6,STARTS_WITH:5,WORD_STARTS_WITH:4,CONTAINS:3,ACRONYM:2,MATCHES:1,NO_MATCH:0},Ze=(a,s)=>String(a.rankedValue).localeCompare(String(s.rankedValue));function re(a,s,e){e===void 0&&(e={});const{keys:t,threshold:n=I.MATCHES,baseSort:r=Ze,sorter:l=u=>u.sort((c,d)=>rt(c,d,r))}=e,i=a.reduce(o,[]);return l(i).map(u=>{let{item:c}=u;return c});function o(u,c,d){const f=et(c,t,s,e),{rank:h,keyThreshold:p=n}=f;return h>=p&&u.push({...f,item:c,index:d}),u}}re.rankings=I;function et(a,s,e,t){if(!s){const r=a;return{rankedValue:r,rank:he(r,e,t),keyIndex:-1,keyThreshold:t.threshold}}return lt(a,s).reduce((r,l,i)=>{let{rank:o,rankedValue:u,keyIndex:c,keyThreshold:d}=r,{itemValue:f,attributes:h}=l,p=he(f,e,t),m=u;const{minRanking:C,maxRanking:M,threshold:R}=h;return p<C&&p>=I.MATCHES?p=C:p>M&&(p=M),p>o&&(o=p,c=i,d=R,m=f),{rankedValue:m,rank:o,keyIndex:c,keyThreshold:d}},{rankedValue:a,rank:I.NO_MATCH,keyIndex:-1,keyThreshold:t.threshold})}function he(a,s,e){return a=me(a,e),s=me(s,e),s.length>a.length?I.NO_MATCH:a===s?I.CASE_SENSITIVE_EQUAL:(a=a.toLowerCase(),s=s.toLowerCase(),a===s?I.EQUAL:a.startsWith(s)?I.STARTS_WITH:a.includes(` ${s}`)?I.WORD_STARTS_WITH:a.includes(s)?I.CONTAINS:s.length===1?I.NO_MATCH:tt(a).includes(s)?I.ACRONYM:nt(a,s))}function tt(a){let s="";return a.split(" ").forEach(t=>{t.split("-").forEach(r=>{s+=r.substr(0,1)})}),s}function nt(a,s){let e=0,t=0;function n(o,u,c){for(let d=c,f=u.length;d<f;d++)if(u[d]===o)return e+=1,d+1;return-1}function r(o){const u=1/o,c=e/s.length;return I.MATCHES+c*u}const l=n(s[0],a,0);if(l<0)return I.NO_MATCH;t=l;for(let o=1,u=s.length;o<u;o++){const c=s[o];if(t=n(c,a,t),!(t>-1))return I.NO_MATCH}const i=t-l;return r(i)}function rt(a,s,e){const{rank:r,keyIndex:l}=a,{rank:i,keyIndex:o}=s;return r===i?l===o?e(a,s):l<o?-1:1:r>i?-1:1}function me(a,s){let{keepDiacritics:e}=s;return a=`${a}`,e||(a=qe(a)),a}function st(a,s){typeof s=="object"&&(s=s.key);let e;if(typeof s=="function")e=s(a);else if(a==null)e=null;else if(Object.hasOwn(a,s))e=a[s];else{if(s.includes("."))return at(s,a);e=null}return e==null?[]:Array.isArray(e)?e:[String(e)]}function at(a,s){const e=a.split(".");let t=[s];for(let n=0,r=e.length;n<r;n++){const l=e[n];let i=[];for(let o=0,u=t.length;o<u;o++){const c=t[o];if(c!=null)if(Object.hasOwn(c,l)){const d=c[l];d!=null&&i.push(d)}else l==="*"&&(i=i.concat(c))}t=i}return Array.isArray(t[0])?[].concat(...t):t}function lt(a,s){const e=[];for(let t=0,n=s.length;t<n;t++){const r=s[t],l=it(r),i=st(a,r);for(let o=0,u=i.length;o<u;o++)e.push({itemValue:i[o],attributes:l})}return e}const ve={maxRanking:1/0,minRanking:-1/0};function it(a){return typeof a=="string"?ve:{...ve,...a}}var ge=U("<div class=relative>"),ot=U('<div class="flex h-full flex-col gap-2"><div class="flex items-center gap-2"><div class="tabs-boxed tabs gap-2"></div></div><input class="input input-bordered input-primary"><div class="flex-1 overflow-y-auto">'),ut=U('<button><span></span><div class="badge badge-sm">'),ct=U('<div class="badge badge-sm">'),dt=U('<div class="absolute inset-x-0 top-0 pb-2 last:pb-0"><div class="card card-bordered card-compact bg-base-200 p-4"><div class="flex items-center gap-2"><span class=break-all></span></div><div class="text-xs text-slate-500"> :: '),ft=U('<div class="absolute inset-x-0 top-0 pb-2 last:pb-0"><div class="card card-bordered card-compact bg-base-200 p-4"><div class="flex items-center gap-2 pr-8"><span class=break-all></span><div class="badge badge-sm"></div></div><div class="text-xs text-slate-500"> / <!> /<!> ');const gt=()=>{const[a]=ke(),{rules:s,ruleProviders:e,updateRules:t,updateAllRuleProvider:n,updateRuleProviderByName:r}=Ue();L(t);const{map:l,setWithCallback:i}=_e(),[o,u]=P(!1),c=(x,O)=>{x.stopPropagation(),i(O,()=>r(O))},d=async x=>{x.stopPropagation(),u(!0);try{await n()}catch{}u(!1)},[f,h]=P("rules"),p=()=>[{type:"rules",name:a("rules"),count:s().length},{type:"ruleProviders",name:a("ruleProviders"),count:e().length}],[m,C]=P(""),M=oe(()=>m()?re(s(),m(),{keys:["type","payload","type"]}):s()),R=oe(()=>m()?re(e(),m(),{keys:["name","vehicleType","behavior"]}):e());let X;const se=({type:x,payload:O,proxy:V})=>`${x}-${O}-${V}`,D=fe({get count(){return M().length},getItemKey:x=>se(M()[x]),getScrollElement:()=>X,estimateSize:()=>82,overscan:5}),xe=D.getVirtualItems(),ae=({type:x,name:O,vehicleType:V,behavior:$})=>`${x}-${O}-${V}-${$}`,B=fe({get count(){return R().length},getItemKey:x=>ae(R()[x]),getScrollElement:()=>X,estimateSize:()=>82,overscan:5}),Ee=B.getVirtualItems();return(()=>{var x=ot(),O=x.firstChild,V=O.firstChild,$=O.nextSibling,G=$.nextSibling;return g(V,T(ze,{get each(){return p()},children:v=>(()=>{var S=ut(),y=S.firstChild,b=y.nextSibling;return S.$$click=()=>h(v.type),g(y,()=>v.name),g(b,()=>v.count),w(()=>Me(S,q(f()===v.type&&"tab-active","tab tab-sm gap-2 px-2 md:tab-md"))),S})()})),g(O,T(W,{get when(){return f()==="ruleProviders"},get children(){return T(de,{class:"btn btn-circle btn-sm",get disabled(){return o()},onClick:v=>d(v),get icon(){return T(ue,{get class(){return q(o()&&"animate-spin text-success")}})}})}}),null),$.$$input=v=>C(v.currentTarget.value),Z(v=>X=v,G),g(G,T(W,{get when(){return f()==="rules"},get children(){var v=ge();return g(v,()=>xe.map(S=>{const y=M().find(b=>se(b)===S.key);return(()=>{var b=dt(),H=b.firstChild,k=H.firstChild,K=k.firstChild,N=k.nextSibling,z=N.firstChild;return Z(E=>L(()=>D.measureElement(E)),b),g(K,()=>y.payload),g(k,T(W,{get when(){return y.size!==-1},get children(){var E=ct();return g(E,()=>y.size),E}}),null),g(N,()=>y.type,z),g(N,()=>y.proxy,null),w(E=>{var j=S.index,F=`translateY(${S.start}px)`;return j!==E.e&&ee(b,"data-index",E.e=j),F!==E.t&&((E.t=F)!=null?b.style.setProperty("transform",F):b.style.removeProperty("transform")),E},{e:void 0,t:void 0}),b})()})),w(()=>`${D.getTotalSize()}px`!=null?v.style.setProperty("height",`${D.getTotalSize()}px`):v.style.removeProperty("height")),v}}),null),g(G,T(W,{get when(){return f()==="ruleProviders"},get children(){var v=ge();return g(v,()=>Ee.map(S=>{const y=e().find(b=>ae(b)===S.key);return(()=>{var b=ft(),H=b.firstChild,k=H.firstChild,K=k.firstChild,N=K.nextSibling,z=k.nextSibling,E=z.firstChild,j=E.nextSibling,F=j.nextSibling,le=F.nextSibling;return le.nextSibling,Z(A=>L(()=>B.measureElement(A)),b),g(K,()=>y.name),g(N,()=>y.ruleCount),g(z,()=>y.vehicleType,E),g(z,()=>y.behavior,j),g(z,()=>a("updated"),le),g(z,()=>Pe(y.updatedAt),null),g(H,T(de,{class:"btn-circle btn-sm absolute right-2 top-2 mr-2 h-4",get disabled(){return l()[y.name]},onClick:A=>c(A,y.name),get icon(){return T(ue,{get class(){return q(l()[y.name]&&"animate-spin text-success")}})}}),null),w(A=>{var ie=S.index,J=`translateY(${S.start}px)`;return ie!==A.e&&ee(b,"data-index",A.e=ie),J!==A.t&&((A.t=J)!=null?b.style.setProperty("transform",J):b.style.removeProperty("transform")),A},{e:void 0,t:void 0}),b})()})),w(()=>`${B.getTotalSize()}px`!=null?v.style.setProperty("height",`${B.getTotalSize()}px`):v.style.removeProperty("height")),v}}),null),w(()=>ee($,"placeholder",a("search"))),w(()=>$.value=m()),x})()};we(["input","click"]);export{gt as default};