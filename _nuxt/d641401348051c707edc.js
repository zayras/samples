(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{192:function(t,e,r){var o=r(182);o.MTLLoader=function(t){this.manager=void 0!==t?t:o.DefaultLoadingManager},o.MTLLoader.prototype={constructor:o.MTLLoader,load:function(t,e,r,n){var h=this,l=new o.FileLoader(this.manager);l.setPath(this.path),l.load(t,(function(text){e(h.parse(text))}),r,n)},setPath:function(path){return this.path=path,this},setTexturePath:function(path){return this.texturePath=path,this},setBaseUrl:function(path){return console.warn("THREE.MTLLoader: .setBaseUrl() is deprecated. Use .setTexturePath( path ) for texture path or .setPath( path ) for general base path instead."),this.setTexturePath(path)},setCrossOrigin:function(t){return this.crossOrigin=t,this},setMaterialOptions:function(t){return this.materialOptions=t,this},parse:function(text){for(var t=text.split("\n"),e={},r=/\s+/,n={},i=0;i<t.length;i++){var line=t[i];if(0!==(line=line.trim()).length&&"#"!==line.charAt(0)){var h=line.indexOf(" "),l=h>=0?line.substring(0,h):line;l=l.toLowerCase();var c=h>=0?line.substring(h+1):"";if(c=c.trim(),"newmtl"===l)e={name:c},n[c]=e;else if(e)if("ka"===l||"kd"===l||"ks"===l){var f=c.split(r,3);e[l]=[parseFloat(f[0]),parseFloat(f[1]),parseFloat(f[2])]}else e[l]=c}}var m=new o.MTLLoader.MaterialCreator(this.texturePath||this.path,this.materialOptions);return m.setCrossOrigin(this.crossOrigin),m.setManager(this.manager),m.setMaterials(n),m}},o.MTLLoader.MaterialCreator=function(t,e){this.baseUrl=t||"",this.options=e,this.materialsInfo={},this.materials={},this.materialsArray=[],this.nameLookup={},this.side=this.options&&this.options.side?this.options.side:o.FrontSide,this.wrap=this.options&&this.options.wrap?this.options.wrap:o.RepeatWrapping},o.MTLLoader.MaterialCreator.prototype={constructor:o.MTLLoader.MaterialCreator,crossOrigin:"Anonymous",setCrossOrigin:function(t){this.crossOrigin=t},setManager:function(t){this.manager=t},setMaterials:function(t){this.materialsInfo=this.convert(t),this.materials={},this.materialsArray=[],this.nameLookup={}},convert:function(t){if(!this.options)return t;var e={};for(var r in t){var o=t[r],n={};for(var h in e[r]=n,o){var l=!0,c=o[h],f=h.toLowerCase();switch(f){case"kd":case"ka":case"ks":this.options&&this.options.normalizeRGB&&(c=[c[0]/255,c[1]/255,c[2]/255]),this.options&&this.options.ignoreZeroRGBs&&0===c[0]&&0===c[1]&&0===c[2]&&(l=!1)}l&&(n[f]=c)}}return e},preload:function(){for(var t in this.materialsInfo)this.create(t)},getIndex:function(t){return this.nameLookup[t]},getAsArray:function(){var t=0;for(var e in this.materialsInfo)this.materialsArray[t]=this.create(e),this.nameLookup[e]=t,t++;return this.materialsArray},create:function(t){return void 0===this.materials[t]&&this.createMaterial_(t),this.materials[t]},createMaterial_:function(t){var e=this,r=this.materialsInfo[t],n={name:t,side:this.side};function h(t,r){if(!n[t]){var o,h,l=e.getTextureParams(r,n),map=e.loadTexture((o=e.baseUrl,"string"!=typeof(h=l.url)||""===h?"":/^https?:\/\//i.test(h)?h:o+h));map.repeat.copy(l.scale),map.offset.copy(l.offset),map.wrapS=e.wrap,map.wrapT=e.wrap,n[t]=map}}for(var l in r){var c,f=r[l];if(""!==f)switch(l.toLowerCase()){case"kd":n.color=(new o.Color).fromArray(f);break;case"ks":n.specular=(new o.Color).fromArray(f);break;case"map_kd":h("map",f);break;case"map_ks":h("specularMap",f);break;case"norm":h("normalMap",f);break;case"map_bump":case"bump":h("bumpMap",f);break;case"ns":n.shininess=parseFloat(f);break;case"d":(c=parseFloat(f))<1&&(n.opacity=c,n.transparent=!0);break;case"tr":c=parseFloat(f),this.options&&this.options.invertTrProperty&&(c=1-c),c>0&&(n.opacity=1-c,n.transparent=!0)}}return this.materials[t]=new o.MeshPhongMaterial(n),this.materials[t]},getTextureParams:function(t,e){var r,n={scale:new o.Vector2(1,1),offset:new o.Vector2(0,0)},h=t.split(/\s+/);return(r=h.indexOf("-bm"))>=0&&(e.bumpScale=parseFloat(h[r+1]),h.splice(r,2)),(r=h.indexOf("-s"))>=0&&(n.scale.set(parseFloat(h[r+1]),parseFloat(h[r+2])),h.splice(r,4)),(r=h.indexOf("-o"))>=0&&(n.offset.set(parseFloat(h[r+1]),parseFloat(h[r+2])),h.splice(r,4)),n.url=h.join(" ").trim(),n},loadTexture:function(t,e,r,n,h){var l,c=o.Loader.Handlers.get(t),f=void 0!==this.manager?this.manager:o.DefaultLoadingManager;return null===c&&(c=new o.TextureLoader(f)),c.setCrossOrigin&&c.setCrossOrigin(this.crossOrigin),l=c.load(t,r,n,h),void 0!==e&&(l.mapping=e),l}},o.OBJLoader=function(){var t=/^[og]\s*(.+)?/,e=/^mtllib /,r=/^usemtl /;function n(){var t={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materialLibraries:[],startObject:function(t,e){if(this.object&&!1===this.object.fromDeclaration)return this.object.name=t,void(this.object.fromDeclaration=!1!==e);var r=this.object&&"function"==typeof this.object.currentMaterial?this.object.currentMaterial():void 0;if(this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:!1!==e,geometry:{vertices:[],normals:[],colors:[],uvs:[]},materials:[],smooth:!0,startMaterial:function(t,e){var r=this._finalize(!1);r&&(r.inherited||r.groupCount<=0)&&this.materials.splice(r.index,1);var o={index:this.materials.length,name:t||"",mtllib:Array.isArray(e)&&e.length>0?e[e.length-1]:"",smooth:void 0!==r?r.smooth:this.smooth,groupStart:void 0!==r?r.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(t){var e={index:"number"==typeof t?t:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return e.clone=this.clone.bind(e),e}};return this.materials.push(o),o},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(t){var e=this.currentMaterial();if(e&&-1===e.groupEnd&&(e.groupEnd=this.geometry.vertices.length/3,e.groupCount=e.groupEnd-e.groupStart,e.inherited=!1),t&&this.materials.length>1)for(var r=this.materials.length-1;r>=0;r--)this.materials[r].groupCount<=0&&this.materials.splice(r,1);return t&&0===this.materials.length&&this.materials.push({name:"",smooth:this.smooth}),e}},r&&r.name&&"function"==typeof r.clone){var o=r.clone(0);o.inherited=!0,this.object.materials.push(o)}this.objects.push(this.object)},finalize:function(){this.object&&"function"==typeof this.object._finalize&&this.object._finalize(!0)},parseVertexIndex:function(t,e){var r=parseInt(t,10);return 3*(r>=0?r-1:r+e/3)},parseNormalIndex:function(t,e){var r=parseInt(t,10);return 3*(r>=0?r-1:r+e/3)},parseUVIndex:function(t,e){var r=parseInt(t,10);return 2*(r>=0?r-1:r+e/2)},addVertex:function(a,b,t){var e=this.vertices,r=this.object.geometry.vertices;r.push(e[a+0],e[a+1],e[a+2]),r.push(e[b+0],e[b+1],e[b+2]),r.push(e[t+0],e[t+1],e[t+2])},addVertexPoint:function(a){var t=this.vertices;this.object.geometry.vertices.push(t[a+0],t[a+1],t[a+2])},addVertexLine:function(a){var t=this.vertices;this.object.geometry.vertices.push(t[a+0],t[a+1],t[a+2])},addNormal:function(a,b,t){var e=this.normals,r=this.object.geometry.normals;r.push(e[a+0],e[a+1],e[a+2]),r.push(e[b+0],e[b+1],e[b+2]),r.push(e[t+0],e[t+1],e[t+2])},addColor:function(a,b,t){var e=this.colors,r=this.object.geometry.colors;r.push(e[a+0],e[a+1],e[a+2]),r.push(e[b+0],e[b+1],e[b+2]),r.push(e[t+0],e[t+1],e[t+2])},addUV:function(a,b,t){var e=this.uvs,r=this.object.geometry.uvs;r.push(e[a+0],e[a+1]),r.push(e[b+0],e[b+1]),r.push(e[t+0],e[t+1])},addUVLine:function(a){var t=this.uvs;this.object.geometry.uvs.push(t[a+0],t[a+1])},addFace:function(a,b,t,e,r,o,n,h,l){var c=this.vertices.length,f=this.parseVertexIndex(a,c),m=this.parseVertexIndex(b,c),d=this.parseVertexIndex(t,c);if(this.addVertex(f,m,d),void 0!==e&&""!==e){var v=this.uvs.length;f=this.parseUVIndex(e,v),m=this.parseUVIndex(r,v),d=this.parseUVIndex(o,v),this.addUV(f,m,d)}if(void 0!==n&&""!==n){var L=this.normals.length;f=this.parseNormalIndex(n,L),m=n===h?f:this.parseNormalIndex(h,L),d=n===l?f:this.parseNormalIndex(l,L),this.addNormal(f,m,d)}this.colors.length>0&&this.addColor(f,m,d)},addPointGeometry:function(t){this.object.geometry.type="Points";for(var e=this.vertices.length,r=0,o=t.length;r<o;r++)this.addVertexPoint(this.parseVertexIndex(t[r],e))},addLineGeometry:function(t,e){this.object.geometry.type="Line";for(var r=this.vertices.length,o=this.uvs.length,n=0,h=t.length;n<h;n++)this.addVertexLine(this.parseVertexIndex(t[n],r));var l=0;for(h=e.length;l<h;l++)this.addUVLine(this.parseUVIndex(e[l],o))}};return t.startObject("",!1),t}function h(t){this.manager=void 0!==t?t:o.DefaultLoadingManager,this.materials=null}return h.prototype={constructor:h,load:function(t,e,r,n){var h=this,l=new o.FileLoader(h.manager);l.setPath(this.path),l.load(t,(function(text){e(h.parse(text))}),r,n)},setPath:function(t){return this.path=t,this},setMaterials:function(t){return this.materials=t,this},parse:function(text){console.time("OBJLoader");var h=new n;-1!==text.indexOf("\r\n")&&(text=text.replace(/\r\n/g,"\n")),-1!==text.indexOf("\\\n")&&(text=text.replace(/\\\n/g,""));for(var l=text.split("\n"),line="",c="",f=[],m="function"==typeof"".trimLeft,i=0,d=l.length;i<d;i++)if(line=l[i],0!==(line=m?line.trimLeft():line.trim()).length&&"#"!==(c=line.charAt(0)))if("v"===c){var data=line.split(/\s+/);switch(data[0]){case"v":h.vertices.push(parseFloat(data[1]),parseFloat(data[2]),parseFloat(data[3])),8===data.length&&h.colors.push(parseFloat(data[4]),parseFloat(data[5]),parseFloat(data[6]));break;case"vn":h.normals.push(parseFloat(data[1]),parseFloat(data[2]),parseFloat(data[3]));break;case"vt":h.uvs.push(parseFloat(data[1]),parseFloat(data[2]))}}else if("f"===c){for(var v=line.substr(1).trim().split(/\s+/),L=[],x=0,w=v.length;x<w;x++){var y=v[x];if(y.length>0){var M=y.split("/");L.push(M)}}var j=L[0];for(x=1,w=L.length-1;x<w;x++){var F=L[x],O=L[x+1];h.addFace(j[0],F[0],O[0],j[1],F[1],O[1],j[2],F[2],O[2])}}else if("l"===c){var k=line.substring(1).trim().split(" "),C=[],P=[];if(-1===line.indexOf("/"))C=k;else for(var li=0,V=k.length;li<V;li++){var I=k[li].split("/");""!==I[0]&&C.push(I[0]),""!==I[1]&&P.push(I[1])}h.addLineGeometry(C,P)}else if("p"===c){var A=line.substr(1).trim().split(" ");h.addPointGeometry(A)}else if(null!==(f=t.exec(line))){var T=(" "+f[0].substr(1).trim()).substr(1);h.startObject(T)}else if(r.test(line))h.object.startMaterial(line.substring(7).trim(),h.materialLibraries);else if(e.test(line))h.materialLibraries.push(line.substring(7).trim());else{if("s"!==c){if("\0"===line)continue;throw new Error('THREE.OBJLoader: Unexpected line: "'+line+'"')}if((f=line.split(" ")).length>1){var B=f[1].trim().toLowerCase();h.object.smooth="0"!==B&&"off"!==B}else h.object.smooth=!0;(Z=h.object.currentMaterial())&&(Z.smooth=h.object.smooth)}h.finalize();var U=new o.Group;U.materialLibraries=[].concat(h.materialLibraries);for(i=0,d=h.objects.length;i<d;i++){var object=h.objects[i],z=object.geometry,E=object.materials,_="Line"===z.type,S="Points"===z.type,G=!1;if(0!==z.vertices.length){var J=new o.BufferGeometry;J.addAttribute("position",new o.Float32BufferAttribute(z.vertices,3)),z.normals.length>0?J.addAttribute("normal",new o.Float32BufferAttribute(z.normals,3)):J.computeVertexNormals(),z.colors.length>0&&(G=!0,J.addAttribute("color",new o.Float32BufferAttribute(z.colors,3))),z.uvs.length>0&&J.addAttribute("uv",new o.Float32BufferAttribute(z.uvs,2));for(var N,D=[],R=0,H=E.length;R<H;R++){var W=E[R],Z=void 0;if(null!==this.materials)if(Z=this.materials.create(W.name),!_||!Z||Z instanceof o.LineBasicMaterial){if(S&&Z&&!(Z instanceof o.PointsMaterial)){var K=new o.PointsMaterial({size:10,sizeAttenuation:!1});Q.copy(Z),Z=K}}else{var Q=new o.LineBasicMaterial;Q.copy(Z),Q.lights=!1,Z=Q}Z||((Z=_?new o.LineBasicMaterial:S?new o.PointsMaterial({size:1,sizeAttenuation:!1}):new o.MeshPhongMaterial).name=W.name),Z.flatShading=!W.smooth,Z.vertexColors=G?o.VertexColors:o.NoColors,D.push(Z)}if(D.length>1){for(R=0,H=E.length;R<H;R++){W=E[R];J.addGroup(W.groupStart,W.groupCount,R)}N=_?new o.LineSegments(J,D):S?new o.Points(J,D):new o.Mesh(J,D)}else N=_?new o.LineSegments(J,D[0]):S?new o.Points(J,D[0]):new o.Mesh(J,D[0]);N.name=object.name,U.add(N)}}return console.timeEnd("OBJLoader"),U}},h}(),e.MTLLoader=o.MTLLoader,e.OBJLoader=o.OBJLoader}}]);