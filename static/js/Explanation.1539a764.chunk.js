(this.webpackJsonpreact_antd_admin_template=this.webpackJsonpreact_antd_admin_template||[]).push([[15],{1339:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(482);e.default=function(){return i.a.createElement("div",{className:"app-container"},i.a.createElement(r.a,{title:"\u6743\u9650\u8bf4\u660e",source:'\n    \u672c\u9879\u76ee\u4e2d\u7684\u83dc\u5355\u6743\u9650\u548c\u8def\u7531\u6743\u9650\u90fd\u662f\u57fa\u4e8e\u7528\u6237\u6240\u5c5e\u89d2\u8272\u6765\u5206\u914d\u7684\uff0c\u672c\u9879\u76ee\u4e2d\u5185\u7f6e\u4e86\u4e09\u79cd\u89d2\u8272\uff0c\u5206\u522b\u662f\uff1a\n    \n    <ul>\n      <li>\u7ba1\u7406\u5458 admin:\u8be5\u89d2\u8272\u62e5\u6709\u7cfb\u7edf\u5185\u6240\u6709\u83dc\u5355\u548c\u8def\u7531\u7684\u6743\u9650\u3002</li>\n      <li>\u7f16\u8f91\u5458 editor:\u8be5\u89d2\u8272\u62e5\u6709\u7cfb\u7edf\u5185\u9664\u7528\u6237\u7ba1\u7406\u9875\u4e4b\u5916\u7684\u6240\u6709\u83dc\u5355\u548c\u8def\u7531\u7684\u6743\u9650\u3002</li>\n      <li>\u6e38\u5ba2 guest:\u8be5\u89d2\u8272\u4ec5\u62e5\u6709Dashboard\u3001\u5f00\u53d1\u6587\u6863\u3001\u6743\u9650\u6d4b\u8bd5\u548c\u5173\u4e8e\u4f5c\u8005\u4e09\u4e2a\u9875\u9762\u7684\u6743\u9650\u3002</li>\n    </ul>\n    \n    \u4f60\u53ef\u4ee5\u901a\u8fc7<a href="#/user">\u7528\u6237\u7ba1\u7406</a>\u9875\u9762\uff0c\u52a8\u6001\u7684\u6dfb\u52a0\u6216\u5220\u9664\u7528\u6237\uff0c\u4ee5\u53ca\u7f16\u8f91\u67d0\u4e2a\u5df2\u7ecf\u5b58\u5728\u7684\u7528\u6237\uff0c\u4f8b\u5982\u4fee\u6539\u5176\u6743\u9650\u7b49\u64cd\u4f5c\u3002\n  '}))}},482:function(t,e,n){"use strict";n(487);var a=n(486),i=n(0),r=n.n(i),s=n(72),o=n(73),l=function(){function t(e){Object(s.a)(this,t),this.opts=e||{},this.source=e.source,this.output=e.output,this.delay=e.delay||120,this.chain={parent:null,dom:this.output,val:[]},"function"!==typeof this.opts.done&&(this.opts.done=function(){})}return Object(o.a)(t,[{key:"init",value:function(){this.chain.val=this.convert(this.source,this.chain.val)}},{key:"convert",value:function(t,e){for(var n=Array.from(t.childNodes),a=0;a<n.length;a++){var i=n[a];if(3===i.nodeType)e=e.concat(i.nodeValue.split(""));else if(1===i.nodeType){var r=[];r=this.convert(i,r),e.push({dom:i,val:r})}}return e}},{key:"print",value:function(t,e,n){setTimeout((function(){t.appendChild(document.createTextNode(e)),n()}),this.delay)}},{key:"play",value:function(t){var e=this;if(t.val.length){var n=t.val.shift();if("string"===typeof n)this.print(t.dom,n,(function(){e.play(t)}));else{var a=n.dom.cloneNode();t.dom.appendChild(a),this.play({parent:t,dom:a,val:n.val})}}else t.parent?this.play(t.parent):this.opts.done()}},{key:"start",value:function(){this.init(),this.play(this.chain)}}]),t}();e.a=function(t){var e=t.title,n=t.source,s=Object(i.useRef)(),o=Object(i.useRef)();return Object(i.useEffect)((function(){new l({source:s.current,output:o.current,delay:30}).start()}),[]),r.a.createElement(a.a,{bordered:!1,className:"card-item",title:e},r.a.createElement("div",{style:{display:"none"},ref:s,dangerouslySetInnerHTML:{__html:n}}),r.a.createElement("div",{ref:o}))}}}]);