(window.webpackJsonp=window.webpackJsonp||[]).push([[2,3],{272:function(t,r,e){var content=e(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(83).default)("b47c697e",content,!0,{sourceMap:!1})},273:function(t,r,e){"use strict";e(272)},274:function(t,r,e){var c=e(82)((function(i){return i[1]}));c.push([t.i,".product[data-v-34d17c76]{border:1px solid #ccc;display:flex;margin-bottom:20px;padding:10px}.product-image img[data-v-34d17c76]{height:auto;max-width:200px}.product-details[data-v-34d17c76]{padding-left:20px}.price[data-v-34d17c76]{color:#333;font-size:18px;font-weight:700}.description[data-v-34d17c76]{color:#666;margin-top:10px}img[data-v-34d17c76]:hover{cursor:pointer}",""]),c.locals={},t.exports=c},275:function(t,r,e){"use strict";e.r(r);e(37),e(61);var c={props:{product:{type:Object,required:!0}},methods:{handleImageError:function(t){t.target.src="https://www.feed-image-editor.com/sites/default/files/perm/wysiwyg/image_not_available.png"},navigateTodetailsPage:function(t){this.$router.push("/product/".concat(t))}}},o=(e(273),e(30)),component=Object(o.a)(c,(function(){var t=this,r=t._self._c;return r("div",{staticClass:"product"},[r("div",{staticClass:"product-image"},[r("img",{attrs:{src:t.product.images[0],alt:"Product Image"},on:{error:t.handleImageError,click:function(r){return t.navigateTodetailsPage(t.product.id)}}})]),t._v(" "),r("div",{staticClass:"product-details"},[r("h2",[t._v(t._s(t.product.title))]),t._v(" "),r("p",{staticClass:"price"},[t._v("$ "+t._s(t.product.price))]),t._v(" "),r("p",{staticClass:"description"},[t._v(t._s(t.product.description))])])])}),[],!1,null,"34d17c76",null);r.default=component.exports},277:function(t,r,e){"use strict";e.r(r);var c=e(10),o=(e(62),e(20),{data:function(){return{products:null}},mounted:function(){this.fetchProduct()},methods:{fetchProduct:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function r(){var e,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,console.log("fetching product"),r.next=4,fetch("https://api.escuelajs.co/api/v1/products");case 4:return e=r.sent,r.next=7,e.json();case 7:c=r.sent,t.products=c,r.next=14;break;case 11:r.prev=11,r.t0=r.catch(0),console.error("Error fetching products:",r.t0);case 14:case"end":return r.stop()}}),r,null,[[0,11]])})))()}}}),n=e(30),component=Object(n.a)(o,(function(){var t=this,r=t._self._c;return r("div",[r("h1",[t._v("Product Page")]),t._v(" "),t.products?r("div",{staticClass:"container"},t._l(t.products,(function(t){return r("Product",{key:t.id,attrs:{product:t}})})),1):r("p",[t._v("Loading product...")])])}),[],!1,null,"41534adc",null);r.default=component.exports;installComponents(component,{Product:e(275).default})}}]);