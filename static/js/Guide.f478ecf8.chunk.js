(this.webpackJsonpreact_antd_admin_template=this.webpackJsonpreact_antd_admin_template||[]).push([[18],{1360:function(e,t,n){"use strict";n.r(t);n(87);var i=n(29),a=n(0),o=n.n(a),r=n(1169),s=n.n(r),c=(n(1170),n(482)),l=[{element:".ant-btn-primary",popover:{title:"\u6253\u5f00\u5f15\u5bfc",description:"\u6253\u5f00\u9875\u9762\u5f15\u5bfc",position:"bottom"}},{element:".hamburger-container",popover:{title:"Hamburger",description:"\u6253\u5f00/\u6536\u8d77\u5de6\u4fa7\u5bfc\u822a\u680f",position:"bottom"}},{element:".fullScreen-container",popover:{title:"Screenfull",description:"\u5168\u5c4f",position:"left"}},{element:".settings-container",popover:{title:"Settings",description:"\u7cfb\u7edf\u8bbe\u7f6e",position:"left"}}],p=new s.a({animate:!0,opacity:.75,doneBtnText:"\u5b8c\u6210",closeBtnText:"\u5173\u95ed",nextBtnText:"\u4e0b\u4e00\u6b65",prevBtnText:"\u4e0a\u4e00\u6b65"}),u=function(){p.defineSteps(l),p.start()};t.default=function(){return o.a.createElement("div",{className:"app-container"},o.a.createElement(c.a,{title:"\u65b0\u624b\u5f15\u5bfc",source:'\u5f15\u5bfc\u9875\u5bf9\u4e8e\u4e00\u4e9b\u7b2c\u4e00\u6b21\u8fdb\u5165\u9879\u76ee\u7684\u4eba\u5f88\u6709\u7528\uff0c\u4f60\u53ef\u4ee5\u7b80\u5355\u4ecb\u7ecd\u4e0b\u9879\u76ee\u7684\u529f\u80fd\u3002\n                       \u672cDemo\u662f\u57fa\u4e8e<a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js</a>'}),o.a.createElement(i.a,{type:"primary",onClick:u},"\u6253\u5f00\u5f15\u5bfc"))}},482:function(e,t,n){"use strict";n(487);var i=n(486),a=n(0),o=n.n(a),r=n(72),s=n(73),c=function(){function e(t){Object(r.a)(this,e),this.opts=t||{},this.source=t.source,this.output=t.output,this.delay=t.delay||120,this.chain={parent:null,dom:this.output,val:[]},"function"!==typeof this.opts.done&&(this.opts.done=function(){})}return Object(s.a)(e,[{key:"init",value:function(){this.chain.val=this.convert(this.source,this.chain.val)}},{key:"convert",value:function(e,t){for(var n=Array.from(e.childNodes),i=0;i<n.length;i++){var a=n[i];if(3===a.nodeType)t=t.concat(a.nodeValue.split(""));else if(1===a.nodeType){var o=[];o=this.convert(a,o),t.push({dom:a,val:o})}}return t}},{key:"print",value:function(e,t,n){setTimeout((function(){e.appendChild(document.createTextNode(t)),n()}),this.delay)}},{key:"play",value:function(e){var t=this;if(e.val.length){var n=e.val.shift();if("string"===typeof n)this.print(e.dom,n,(function(){t.play(e)}));else{var i=n.dom.cloneNode();e.dom.appendChild(i),this.play({parent:e,dom:i,val:n.val})}}else e.parent?this.play(e.parent):this.opts.done()}},{key:"start",value:function(){this.init(),this.play(this.chain)}}]),e}();t.a=function(e){var t=e.title,n=e.source,r=Object(a.useRef)(),s=Object(a.useRef)();return Object(a.useEffect)((function(){new c({source:r.current,output:s.current,delay:30}).start()}),[]),o.a.createElement(i.a,{bordered:!1,className:"card-item",title:t},o.a.createElement("div",{style:{display:"none"},ref:r,dangerouslySetInnerHTML:{__html:n}}),o.a.createElement("div",{ref:s}))}}}]);