(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3],{264:function(t,o,r){var content=r(266);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(135).default)("636805b6",content,!0,{sourceMap:!1})},265:function(t,o,r){"use strict";r(264)},266:function(t,o,r){var e=r(134)((function(i){return i[1]}));e.push([t.i,".product[data-v-573b5999]{border:1px solid #ccc;display:flex;margin-bottom:20px;padding:10px}.product-image img[data-v-573b5999]{height:auto;max-width:200px}.product-details[data-v-573b5999]{padding-left:20px}.price[data-v-573b5999]{color:#333;font-size:18px;font-weight:700}.description[data-v-573b5999]{color:#666;margin-top:10px}",""]),e.locals={},t.exports=e},267:function(t,o,r){"use strict";r.r(o);r(36),r(61);var e={props:{product:{type:Object,required:!0}},methods:{handleImageError:function(t){t.target.src="https://www.feed-image-editor.com/sites/default/files/perm/wysiwyg/image_not_available.png"}}},c=(r(265),r(45)),component=Object(c.a)(e,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"product"},[o("div",{staticClass:"product-image"},[o("img",{attrs:{src:t.product.images[0],alt:"Product Image"},on:{error:t.handleImageError}})]),t._v(" "),o("div",{staticClass:"product-details"},[o("h2",[t._v(t._s(t.product.title))]),t._v(" "),o("p",{staticClass:"price"},[t._v("$ "+t._s(t.product.price))]),t._v(" "),o("p",{staticClass:"description"},[t._v(t._s(t.product.description))])])])}),[],!1,null,"573b5999",null);o.default=component.exports},268:function(t,o,r){"use strict";r.r(o);r(20);var e={mounted:function(){this.fetchProduct()},data:function(){return{products:[]}},methods:{fetchProduct:function(){var t=this;console.log("Product API Calling..."),fetch("https://api.escuelajs.co/api/v1/products").then((function(t){return t.json()})).then((function(data){console.log(data),t.products=data})).catch((function(t){return console.error(t)}))}}},c=r(45),component=Object(c.a)(e,(function(){var t=this,o=t._self._c;return o("div",[o("h1",[t._v("Product Page")]),t._v(" "),o("div",{staticClass:"container"},t._l(t.products,(function(t){return o("Product",{key:t.id,attrs:{product:t}})})),1)])}),[],!1,null,"485ead80",null);o.default=component.exports;installComponents(component,{Product:r(267).default})}}]);