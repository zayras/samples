(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{187:function(e,t,n){var content=n(207);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("b8f1c78c",content,!0,{sourceMap:!1})},206:function(e,t,n){"use strict";var r=n(187);n.n(r).a},207:function(e,t,n){(e.exports=n(33)(!1)).push([e.i,".canvas_for_three[data-v-12ecd504]{width:600px;height:500px;border:1px solid #fff;position:absolute;left:0;top:0;z-index:-1;padding:25px;margin:20px 50px}@media(max-width:1000px){.canvas_for_three[data-v-12ecd504]{width:75%;height:50%;margin:100px 5px 5px}}.for-button[data-v-12ecd504]{margin:10px}",""])},219:function(e,t,n){"use strict";n.r(t);var r=n(182),o={name:"ThreeTest",data:function(){return{camera:null,scene:null,renderer:null,mesh:null,light:null,helper:null}},methods:{init:function(){var canvas=document.getElementById("ctx");this.camera=new r.PerspectiveCamera(70,canvas.clientWidth/canvas.clientHeight,.01,10),this.camera.position.z=1,this.scene=new r.Scene;var e=new r.BoxGeometry(.2,.2,.2),t=new r.MeshNormalMaterial;this.mesh=new r.Mesh(e,t),this.scene.add(this.mesh),this.renderer=new r.WebGLRenderer({antialias:!0}),this.renderer.setSize(canvas.clientWidth,canvas.clientHeight),canvas.appendChild(this.renderer.domElement)},animate:function(){requestAnimationFrame(this.animate),this.mesh.rotation.x+=.01,this.mesh.rotation.y+=.02,this.renderer.render(this.scene,this.camera)}},mounted:function(){this.init(),this.animate()},beforeDestroy:function(){this.init=function(){},this.animate=function(){}}},c=(n(206),n(39)),component=Object(c.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"for-button"},[t("nuxt-link",{staticClass:"button is-lovely",attrs:{to:"/"}},[this._v("HOME")])],1),this._v(" "),t("div",{staticClass:"canvas_for_three",attrs:{id:"ctx"}})])}),[],!1,null,"12ecd504",null);t.default=component.exports}}]);