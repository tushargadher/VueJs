(window.webpackJsonp=window.webpackJsonp||[]).push([[4,2,3],{264:function(t,e,o){var content=o(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(135).default)("636805b6",content,!0,{sourceMap:!1})},265:function(t,e,o){"use strict";o(264)},266:function(t,e,o){var r=o(134)((function(i){return i[1]}));r.push([t.i,".product[data-v-573b5999]{border:1px solid #ccc;display:flex;margin-bottom:20px;padding:10px}.product-image img[data-v-573b5999]{height:auto;max-width:200px}.product-details[data-v-573b5999]{padding-left:20px}.price[data-v-573b5999]{color:#333;font-size:18px;font-weight:700}.description[data-v-573b5999]{color:#666;margin-top:10px}",""]),r.locals={},t.exports=r},267:function(t,e,o){"use strict";o.r(e);o(36),o(61);var r={props:{product:{type:Object,required:!0}},methods:{handleImageError:function(t){t.target.src="https://www.feed-image-editor.com/sites/default/files/perm/wysiwyg/image_not_available.png"}}},n=(o(265),o(45)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"product"},[e("div",{staticClass:"product-image"},[e("img",{attrs:{src:t.product.images[0],alt:"Product Image"},on:{error:t.handleImageError}})]),t._v(" "),e("div",{staticClass:"product-details"},[e("h2",[t._v(t._s(t.product.title))]),t._v(" "),e("p",{staticClass:"price"},[t._v("$ "+t._s(t.product.price))]),t._v(" "),e("p",{staticClass:"description"},[t._v(t._s(t.product.description))])])])}),[],!1,null,"573b5999",null);e.default=component.exports},268:function(t,e,o){"use strict";o.r(e);o(20);var r={mounted:function(){this.fetchProduct()},data:function(){return{products:[]}},methods:{fetchProduct:function(){var t=this;console.log("Product API Calling..."),fetch("https://api.escuelajs.co/api/v1/products").then((function(t){return t.json()})).then((function(data){console.log(data),t.products=data})).catch((function(t){return console.error(t)}))}}},n=o(45),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Product Page")]),t._v(" "),e("div",{staticClass:"container"},t._l(t.products,(function(t){return e("Product",{key:t.id,attrs:{product:t}})})),1)])}),[],!1,null,"485ead80",null);e.default=component.exports;installComponents(component,{Product:o(267).default})},269:function(t,e,o){"use strict";o.r(e);var r={name:"IndexPage",head:function(){return{title:"Home Page"}}},n=o(45),component=Object(n.a)(r,(function(){return(0,this._self._c)("Home")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Home:o(268).default})}}]);