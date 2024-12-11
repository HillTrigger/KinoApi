(()=>{"use strict";var t={8120:(t,r,e)=>{var n=e(1483),o=e(8761),i=TypeError;t.exports=function(t){if(n(t))return t;throw new i(o(t)+" is not a function")}},2293:(t,r,e)=>{var n=e(1704),o=String,i=TypeError;t.exports=function(t){if(n(t))return t;throw new i(o(t)+" is not an object")}},6651:(t,r,e)=>{var n=e(5599),o=e(3392),i=e(6960),a=function(t){return function(r,e,a){var c=n(r),u=i(c);if(0===u)return!t&&-1;var s,p=o(a,u);if(t&&e!=e){for(;u>p;)if((s=c[p++])!=s)return!0}else for(;u>p;p++)if((t||p in c)&&c[p]===e)return t||p||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},1278:(t,r,e)=>{var n=e(4762),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},6145:(t,r,e)=>{var n=e(4338),o=e(1483),i=e(1278),a=e(1)("toStringTag"),c=Object,u="Arguments"===i(function(){return arguments}());t.exports=n?i:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=function(t,r){try{return t[r]}catch(t){}}(r=c(t),a))?e:u?i(r):"Object"===(n=i(r))&&o(r.callee)?"Arguments":n}},6726:(t,r,e)=>{var n=e(5755),o=e(9497),i=e(4961),a=e(5835);t.exports=function(t,r,e){for(var c=o(r),u=a.f,s=i.f,p=0;p<c.length;p++){var f=c[p];n(t,f)||e&&n(e,f)||u(t,f,s(r,f))}}},9037:(t,r,e)=>{var n=e(382),o=e(5835),i=e(7738);t.exports=n?function(t,r,e){return o.f(t,r,i(1,e))}:function(t,r,e){return t[r]=e,t}},7738:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},3864:(t,r,e)=>{var n=e(169),o=e(5835);t.exports=function(t,r,e){return e.get&&n(e.get,r,{getter:!0}),e.set&&n(e.set,r,{setter:!0}),o.f(t,r,e)}},7914:(t,r,e)=>{var n=e(1483),o=e(5835),i=e(169),a=e(2095);t.exports=function(t,r,e,c){c||(c={});var u=c.enumerable,s=void 0!==c.name?c.name:r;if(n(e)&&i(e,s,c),c.global)u?t[r]=e:a(r,e);else{try{c.unsafe?t[r]&&(u=!0):delete t[r]}catch(t){}u?t[r]=e:o.f(t,r,{value:e,enumerable:!1,configurable:!c.nonConfigurable,writable:!c.nonWritable})}return t}},2095:(t,r,e)=>{var n=e(5578),o=Object.defineProperty;t.exports=function(t,r){try{o(n,t,{value:r,configurable:!0,writable:!0})}catch(e){n[t]=r}return r}},382:(t,r,e)=>{var n=e(8473);t.exports=!n((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},3145:(t,r,e)=>{var n=e(5578),o=e(1704),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},4741:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},9461:(t,r,e)=>{var n=e(5578).navigator,o=n&&n.userAgent;t.exports=o?String(o):""},6477:(t,r,e)=>{var n,o,i=e(5578),a=e(9461),c=i.process,u=i.Deno,s=c&&c.versions||u&&u.version,p=s&&s.v8;p&&(o=(n=p.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},8612:(t,r,e)=>{var n=e(5578),o=e(4961).f,i=e(9037),a=e(7914),c=e(2095),u=e(6726),s=e(8730);t.exports=function(t,r){var e,p,f,l,v,y=t.target,g=t.global,m=t.stat;if(e=g?n:m?n[y]||c(y,{}):n[y]&&n[y].prototype)for(p in r){if(l=r[p],f=t.dontCallGetSet?(v=o(e,p))&&v.value:e[p],!s(g?p:y+(m?".":"#")+p,t.forced)&&void 0!==f){if(typeof l==typeof f)continue;u(l,f)}(t.sham||f&&f.sham)&&i(l,"sham",!0),a(e,p,l,t)}}},8473:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},274:(t,r,e)=>{var n=e(8473);t.exports=!n((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},1807:(t,r,e)=>{var n=e(274),o=Function.prototype.call;t.exports=n?o.bind(o):function(){return o.apply(o,arguments)}},2048:(t,r,e)=>{var n=e(382),o=e(5755),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,c=o(i,"name"),u=c&&"something"===function(){}.name,s=c&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:c,PROPER:u,CONFIGURABLE:s}},4762:(t,r,e)=>{var n=e(274),o=Function.prototype,i=o.call,a=n&&o.bind.bind(i,i);t.exports=n?a:function(t){return function(){return i.apply(t,arguments)}}},1409:(t,r,e)=>{var n=e(5578),o=e(1483);t.exports=function(t,r){return arguments.length<2?(e=n[t],o(e)?e:void 0):n[t]&&n[t][r];var e}},2564:(t,r,e)=>{var n=e(8120),o=e(5983);t.exports=function(t,r){var e=t[r];return o(e)?void 0:n(e)}},5578:function(t,r,e){var n=function(t){return t&&t.Math===Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e.g&&e.g)||n("object"==typeof this&&this)||function(){return this}()||Function("return this")()},5755:(t,r,e)=>{var n=e(4762),o=e(2347),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},1507:t=>{t.exports={}},1799:(t,r,e)=>{var n=e(382),o=e(8473),i=e(3145);t.exports=!n&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},2121:(t,r,e)=>{var n=e(4762),o=e(8473),i=e(1278),a=Object,c=n("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"===i(t)?c(t,""):a(t)}:a},7268:(t,r,e)=>{var n=e(4762),o=e(1483),i=e(1831),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},4483:(t,r,e)=>{var n,o,i,a=e(4644),c=e(5578),u=e(1704),s=e(9037),p=e(5755),f=e(1831),l=e(5409),v=e(1507),y="Object already initialized",g=c.TypeError,m=c.WeakMap;if(a||f.state){var d=f.state||(f.state=new m);d.get=d.get,d.has=d.has,d.set=d.set,n=function(t,r){if(d.has(t))throw new g(y);return r.facade=t,d.set(t,r),r},o=function(t){return d.get(t)||{}},i=function(t){return d.has(t)}}else{var h=l("state");v[h]=!0,n=function(t,r){if(p(t,h))throw new g(y);return r.facade=t,s(t,h,r),r},o=function(t){return p(t,h)?t[h]:{}},i=function(t){return p(t,h)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(r){var e;if(!u(r)||(e=o(r)).type!==t)throw new g("Incompatible receiver, "+t+" required");return e}}}},1483:t=>{var r="object"==typeof document&&document.all;t.exports=void 0===r&&void 0!==r?function(t){return"function"==typeof t||t===r}:function(t){return"function"==typeof t}},8730:(t,r,e)=>{var n=e(8473),o=e(1483),i=/#|\.prototype\./,a=function(t,r){var e=u[c(t)];return e===p||e!==s&&(o(r)?n(r):!!r)},c=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=a.data={},s=a.NATIVE="N",p=a.POLYFILL="P";t.exports=a},5983:t=>{t.exports=function(t){return null==t}},1704:(t,r,e)=>{var n=e(1483);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},9557:t=>{t.exports=!1},1423:(t,r,e)=>{var n=e(1409),o=e(1483),i=e(4815),a=e(5022),c=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var r=n("Symbol");return o(r)&&i(r.prototype,c(t))}},6960:(t,r,e)=>{var n=e(8324);t.exports=function(t){return n(t.length)}},169:(t,r,e)=>{var n=e(4762),o=e(8473),i=e(1483),a=e(5755),c=e(382),u=e(2048).CONFIGURABLE,s=e(7268),p=e(4483),f=p.enforce,l=p.get,v=String,y=Object.defineProperty,g=n("".slice),m=n("".replace),d=n([].join),h=c&&!o((function(){return 8!==y((function(){}),"length",{value:8}).length})),b=String(String).split("String"),x=t.exports=function(t,r,e){"Symbol("===g(v(r),0,7)&&(r="["+m(v(r),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!a(t,"name")||u&&t.name!==r)&&(c?y(t,"name",{value:r,configurable:!0}):t.name=r),h&&e&&a(e,"arity")&&t.length!==e.arity&&y(t,"length",{value:e.arity});try{e&&a(e,"constructor")&&e.constructor?c&&y(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=f(t);return a(n,"source")||(n.source=d(b,"string"==typeof r?r:"")),t};Function.prototype.toString=x((function(){return i(this)&&l(this).source||s(this)}),"toString")},1703:t=>{var r=Math.ceil,e=Math.floor;t.exports=Math.trunc||function(t){var n=+t;return(n>0?e:r)(n)}},5835:(t,r,e)=>{var n=e(382),o=e(1799),i=e(3896),a=e(2293),c=e(3815),u=TypeError,s=Object.defineProperty,p=Object.getOwnPropertyDescriptor,f="enumerable",l="configurable",v="writable";r.f=n?i?function(t,r,e){if(a(t),r=c(r),a(e),"function"==typeof t&&"prototype"===r&&"value"in e&&v in e&&!e[v]){var n=p(t,r);n&&n[v]&&(t[r]=e.value,e={configurable:l in e?e[l]:n[l],enumerable:f in e?e[f]:n[f],writable:!1})}return s(t,r,e)}:s:function(t,r,e){if(a(t),r=c(r),a(e),o)try{return s(t,r,e)}catch(t){}if("get"in e||"set"in e)throw new u("Accessors not supported");return"value"in e&&(t[r]=e.value),t}},4961:(t,r,e)=>{var n=e(382),o=e(1807),i=e(7611),a=e(7738),c=e(5599),u=e(3815),s=e(5755),p=e(1799),f=Object.getOwnPropertyDescriptor;r.f=n?f:function(t,r){if(t=c(t),r=u(r),p)try{return f(t,r)}catch(t){}if(s(t,r))return a(!o(i.f,t,r),t[r])}},2278:(t,r,e)=>{var n=e(6742),o=e(4741).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},4347:(t,r)=>{r.f=Object.getOwnPropertySymbols},4815:(t,r,e)=>{var n=e(4762);t.exports=n({}.isPrototypeOf)},6742:(t,r,e)=>{var n=e(4762),o=e(5755),i=e(5599),a=e(6651).indexOf,c=e(1507),u=n([].push);t.exports=function(t,r){var e,n=i(t),s=0,p=[];for(e in n)!o(c,e)&&o(n,e)&&u(p,e);for(;r.length>s;)o(n,e=r[s++])&&(~a(p,e)||u(p,e));return p}},7611:(t,r)=>{var e={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!e.call({1:2},1);r.f=o?function(t){var r=n(this,t);return!!r&&r.enumerable}:e},348:(t,r,e)=>{var n=e(1807),o=e(1483),i=e(1704),a=TypeError;t.exports=function(t,r){var e,c;if("string"===r&&o(e=t.toString)&&!i(c=n(e,t)))return c;if(o(e=t.valueOf)&&!i(c=n(e,t)))return c;if("string"!==r&&o(e=t.toString)&&!i(c=n(e,t)))return c;throw new a("Can't convert object to primitive value")}},9497:(t,r,e)=>{var n=e(1409),o=e(4762),i=e(2278),a=e(4347),c=e(2293),u=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var r=i.f(c(t)),e=a.f;return e?u(r,e(t)):r}},3312:(t,r,e)=>{var n=e(5983),o=TypeError;t.exports=function(t){if(n(t))throw new o("Can't call method on "+t);return t}},5409:(t,r,e)=>{var n=e(7255),o=e(1866),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},1831:(t,r,e)=>{var n=e(9557),o=e(5578),i=e(2095),a="__core-js_shared__",c=t.exports=o[a]||i(a,{});(c.versions||(c.versions=[])).push({version:"3.39.0",mode:n?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.39.0/LICENSE",source:"https://github.com/zloirock/core-js"})},7255:(t,r,e)=>{var n=e(1831);t.exports=function(t,r){return n[t]||(n[t]=r||{})}},6029:(t,r,e)=>{var n=e(6477),o=e(8473),i=e(5578).String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol("symbol detection");return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},3392:(t,r,e)=>{var n=e(3005),o=Math.max,i=Math.min;t.exports=function(t,r){var e=n(t);return e<0?o(e+r,0):i(e,r)}},5599:(t,r,e)=>{var n=e(2121),o=e(3312);t.exports=function(t){return n(o(t))}},3005:(t,r,e)=>{var n=e(1703);t.exports=function(t){var r=+t;return r!=r||0===r?0:n(r)}},8324:(t,r,e)=>{var n=e(3005),o=Math.min;t.exports=function(t){var r=n(t);return r>0?o(r,9007199254740991):0}},2347:(t,r,e)=>{var n=e(3312),o=Object;t.exports=function(t){return o(n(t))}},2355:(t,r,e)=>{var n=e(1807),o=e(1704),i=e(1423),a=e(2564),c=e(348),u=e(1),s=TypeError,p=u("toPrimitive");t.exports=function(t,r){if(!o(t)||i(t))return t;var e,u=a(t,p);if(u){if(void 0===r&&(r="default"),e=n(u,t,r),!o(e)||i(e))return e;throw new s("Can't convert object to primitive value")}return void 0===r&&(r="number"),c(t,r)}},3815:(t,r,e)=>{var n=e(2355),o=e(1423);t.exports=function(t){var r=n(t,"string");return o(r)?r:r+""}},4338:(t,r,e)=>{var n={};n[e(1)("toStringTag")]="z",t.exports="[object z]"===String(n)},6261:(t,r,e)=>{var n=e(6145),o=String;t.exports=function(t){if("Symbol"===n(t))throw new TypeError("Cannot convert a Symbol value to a string");return o(t)}},8761:t=>{var r=String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},1866:(t,r,e)=>{var n=e(4762),o=0,i=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},5022:(t,r,e)=>{var n=e(6029);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3896:(t,r,e)=>{var n=e(382),o=e(8473);t.exports=n&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4644:(t,r,e)=>{var n=e(5578),o=e(1483),i=n.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},1:(t,r,e)=>{var n=e(5578),o=e(7255),i=e(5755),a=e(1866),c=e(6029),u=e(5022),s=n.Symbol,p=o("wks"),f=u?s.for||s:s&&s.withoutSetter||a;t.exports=function(t){return i(p,t)||(p[t]=c&&i(s,t)?s[t]:f("Symbol."+t)),p[t]}},2733:(t,r,e)=>{var n=e(8612),o=e(382),i=e(5578),a=e(4762),c=e(5755),u=e(1483),s=e(4815),p=e(6261),f=e(3864),l=e(6726),v=i.Symbol,y=v&&v.prototype;if(o&&u(v)&&(!("description"in y)||void 0!==v().description)){var g={},m=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:p(arguments[0]),r=s(y,this)?new v(t):void 0===t?v():v(t);return""===t&&(g[r]=!0),r};l(m,v),m.prototype=y,y.constructor=m;var d="Symbol(description detection)"===String(v("description detection")),h=a(y.valueOf),b=a(y.toString),x=/^Symbol\((.*)\)[^)]+$/,w=a("".replace),S=a("".slice);f(y,"description",{configurable:!0,get:function(){var t=h(this);if(c(g,t))return"";var r=b(t),e=d?S(r,7,-1):w(r,x,"$1");return""===e?void 0:e}}),n({global:!0,constructor:!0,forced:!0},{Symbol:m})}}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n].call(i.exports,i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}();const n="53e8b7ab-f08c-4076-9cba-79ef50d59477";e(2733);function o(t){t.currentTarget===t.target&&t.target.remove()}const i="https://kinopoiskapiunofficial.tech/api/v2.2/films/";async function a(t){let{id:r,genres:e}=t;try{let t=await async function(t){try{const r=await fetch(i+t,{headers:{"Content-Type":"application/json","X-API-KEY":n}});return await r.json()}catch(t){console.log("Ошибка получения фильмов: ",t)}}(r);const a=document.querySelector(".movies");let c=document.createElement("div");c.className="movies__modal modal",c.innerHTML='<div class="modal__content">\n  <img\n    class="modal__image"\n    src='.concat(t.posterUrl,'\n    alt="Кинопоиск: Гид по аниме"\n  />\n  <h3 class="modal__name">').concat(t.nameRu,'</h3>\n  <span class="modal__category">').concat(e,'</span>\n  <p class="modal__description">').concat(t.description,'</p>\n  <a class="modal__href" target="_blank" href=').concat(t.webUrl,"\n    >Посетить сайт</a\n  >\n</div>"),c.addEventListener("click",o),a.append(c)}catch(t){console.log(t)}return null}async function c(t){const r=document.querySelector(".movies__films"),e=document.createDocumentFragment();e.innerHTML="",t.items.forEach((t=>{const r=document.createElement("div");let n=t.genres.map((t=>t.genre)).join(", ");r.classList.add("movie"),r.innerHTML='\n      <div class="movie__inner '.concat(t.ratingKinopoisk>=8?"movie__inner--green":t.ratingKinopoisk>=5?"movie__inner--yellow":"movie__inner--red",'" data-rating="').concat(t.ratingKinopoisk,'">\n      <img\n            src=').concat(t.posterUrl,"\n            alt=").concat(t.nameRu,'\n            class="movie__image"\n          />\n          <div class="movie__info">\n            <h2 class="movie__title">').concat(t.nameRu,'</h2>\n            <p class="movie__category">').concat(n,"</p>\n          </div>\n      </div>      \n    "),r.addEventListener("click",(()=>a({id:t.kinopoiskId,genres:n}))),e.append(r)})),r.append(e)}let u=!1;document.querySelector(".header__form").addEventListener("submit",(async function(t){if(t.preventDefault(),u)console.log("Запрос уже выполняется...");else{u=!0;try{let r=t.target.children[0];if(!r.value)return;let e=await async function(t){let r=await fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films?ratingFrom=0&ratingTo=10&yearFrom=1000&yearTo=3000&keyword="+t,{headers:{"Content-Type":"application/json","X-API-KEY":n}});return await r.json()}(r.value);r.value="",c(e)}catch(t){console.error("Ошибка:",t)}finally{u=!1}}})),async function(){try{const t=await fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1",{headers:{"Content-Type":"application/json","X-API-KEY":n}});return await t.json()}catch(t){console.log("Ошибка получения фильмов: ",t)}}().then((t=>c(t)),(t=>console.log(t)))})();