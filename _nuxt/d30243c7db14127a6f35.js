(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{186:function(t,e,n){var content=n(205);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("336e9a7f",content,!0,{sourceMap:!1})},204:function(t,e,n){"use strict";var r=n(186);n.n(r).a},205:function(t,e,n){(t.exports=n(33)(!1)).push([t.i,".main{margin:30px;padding:10px}h2{font-size:52px}svg{display:block;align-self:center;margin:auto}polygon{fill:#41b883}circle{fill:transparent;stroke:#35495e}input[type=range]{display:block;width:100%;margin-bottom:15px}",""])},220:function(t,e,n){"use strict";n.r(e);function r(t){var e=t.length;return t.map((function(t,n){var r=function(t,e,n){var r=.9*-t,o=2*Math.PI/n*e,l=Math.cos(o),d=Math.sin(o);return{x:0*l-r*d+100,y:0*d+r*l+100}}(t,n,e);return r.x+","+r.y})).join(" ")}var o={data:function(){var t=Array.apply(null,{length:10}).map((function(){return 100}));return{stats:t,points:r(t),sides:10,minRadius:50,interval:null,updateInterval:500}},watch:{sides:function(t,e){var n=t-e;if(n>0)for(var i=1;i<=n;i++)this.stats.push(this.newRandomValue());else{var r=Math.abs(n);for(i=1;i<=r;i++)this.stats.shift()}},stats:function(t){TweenLite.to(this.$data,this.updateInterval/1e3,{points:r(t)})},updateInterval:function(){this.resetInterval()}},mounted:function(){this.resetInterval()},methods:{randomizeStats:function(){var t=this;this.stats=this.stats.map((function(){return t.newRandomValue()}))},newRandomValue:function(){return Math.ceil(this.minRadius+Math.random()*(100-this.minRadius))},resetInterval:function(){var t=this;clearInterval(this.interval),this.randomizeStats(),this.interval=setInterval((function(){t.randomizeStats()}),this.updateInterval)}}},l=(n(204),n(39)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"for-button"},[n("nuxt-link",{staticClass:"button is-lovely",attrs:{to:"/"}},[t._v("HOME")])],1),t._v(" "),n("script",{attrs:{src:"http://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"}}),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"main",attrs:{id:"app"}},[n("svg",{attrs:{width:"200",height:"200"}},[n("polygon",{attrs:{points:t.points}}),t._v(" "),n("circle",{attrs:{cx:"100",cy:"100",r:"90"}})]),t._v(" "),n("label",[t._v("Sides: "+t._s(t.sides))]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.sides,expression:"sides",modifiers:{number:!0}}],attrs:{type:"range",min:"3",max:"500"},domProps:{value:t.sides},on:{__r:function(e){t.sides=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),n("label",[t._v("Minimum Radius: "+t._s(t.minRadius)+"%")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.minRadius,expression:"minRadius",modifiers:{number:!0}}],attrs:{type:"range",min:"0",max:"90"},domProps:{value:t.minRadius},on:{__r:function(e){t.minRadius=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),n("label",[t._v("Update Interval: "+t._s(t.updateInterval)+" milliseconds")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.updateInterval,expression:"updateInterval",modifiers:{number:!0}}],attrs:{type:"range",min:"10",max:"2000"},domProps:{value:t.updateInterval},on:{__r:function(e){t.updateInterval=t._n(e.target.value)},blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),n("hr")])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{align:"center"}},[e("b",[this._v("STATE TRANSITION")])])}],!1,null,null,null);e.default=component.exports}}]);