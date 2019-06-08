import{Prop as t,Component as e,Vue as o,Emit as r}from"vue-property-decorator";import{errorResponseExcept as n,errorResponse as i,LinkButtonDefaults as l,trimEnd as a,pick as s,activeClass as u,btnClasses as p,combinePaths as c,NavDefaults as d,NavbarDefaults as f,safeVarName as v,activeClassNav as h,NavButtonGroupDefaults as y,NavLinkDefaults as b}from"@servicestack/client";import m from"vue";var g=function(t,e){return(g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};function _(t,e){function o(){this.constructor=t}g(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}function k(t,e,o,r){var n,i=arguments.length,l=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(l=(i<3?n(l):i>3?n(e,o,l):n(e,o))||l);return i>3&&l&&Object.defineProperty(e,o,l),l}var C=function(t,e,o,r,n,i,l,a,s,u){"boolean"!=typeof l&&(s=a,a=l,l=!1);var p,c="function"==typeof o?o.options:o;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,n&&(c.functional=!0)),r&&(c._scopeId=r),i?(p=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,s(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=p):e&&(p=l?function(){e.call(this,u(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),p)if(c.functional){var d=c.render;c.render=function(t,e){return p.call(e),d(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,p):[p]}return o},P=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"forbidden"},[o("h3",[t._v("\n        You are not authorized to access\n        "),t.usePath?o("code",[t._v(t._s(t.usePath))]):o("span",[t._v("this page")])]),t._v(" "),t.message?o("p",[t._v(t._s(t.message))]):t.useRole?o("p",[t._v("Missing role "),o("code",[t._v(t._s(t.useRole))])]):t.usePermission?o("p",[t._v("Missing permission "),o("code",[t._v(t._s(t.usePermission))])]):t._e()])},staticRenderFns:[]},void 0,function(o){function r(){return null!==o&&o.apply(this,arguments)||this}return _(r,o),Object.defineProperty(r.prototype,"query",{get:function(){return this.$route&&this.$route.query||{}},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"usePath",{get:function(){return this.path||this.query.path||null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"useRole",{get:function(){return this.role||this.query.role||null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"usePermission",{get:function(){return this.permission||this.query.permission||null},enumerable:!0,configurable:!0}),k([t({default:""})],r.prototype,"message",void 0),k([t({default:""})],r.prototype,"path",void 0),k([t({default:""})],r.prototype,"role",void 0),k([t({default:""})],r.prototype,"permission",void 0),r=k([e],r)}(o),void 0,!1,void 0,void 0,void 0),O=C({render:function(){var t=this.$createElement,e=this._self._c||t;return this.errorSummary?e("div",{staticClass:"alert alert-danger mt-2"},[this._v(this._s(this.errorSummary))]):this._e()},staticRenderFns:[]},void 0,function(o){function r(){return null!==o&&o.apply(this,arguments)||this}return _(r,o),Object.defineProperty(r.prototype,"errorSummary",{get:function(){return n.call(this.$props,this.except)},enumerable:!0,configurable:!0}),k([t({default:null})],r.prototype,"responseStatus",void 0),k([t({default:""})],r.prototype,"except",void 0),r=k([e],r)}(o),void 0,!1,void 0,void 0,void 0);var j=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.label?o("label",{class:t.isCheck?"form-check-label":"form-label",attrs:{for:t.id}},[t._v(t._s(t.label))]):t._e(),t._v(" "),t.isCheck?o("div",{class:["form-check",{"is-invalid":t.hasError,"form-control":t.hasError}]},["radio"===t.type?t._l(t.kvpValues,function(e){return o("div",{key:e.key,class:["custom-control","custom-radio",{"custom-control-inline":t.inline}]},[o("input",{class:["custom-control-input",t.inputClass],attrs:{type:"radio",id:t.concat(t.id,"-",e.key),name:t.id},domProps:{value:e.key,checked:t.value==e.key},on:{change:t.onInput}}),t._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:t.concat(t.id,"-",e.key)}},[t._v(t._s(e.value))])])}):t._e(),t._v(" "),"checkbox"===t.type?t._l(t.kvpValues,function(e){return o("div",{key:e.key,class:["custom-control","custom-checkbox",{"custom-control-inline":t.inline}]},[o("input",{class:["form-check-input"],attrs:{type:"checkbox",id:t.concat(t.id,"-",e.key),name:t.id},domProps:{value:e.key,checked:t.hasValue(e.key)},on:{change:t.onInputValues}}),t._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:t.concat(t.id,"-",e.key)}},[t._v(t._s(e.value))])])}):t._e(),t._v(" "),t.help?o("small",{staticClass:"text-muted"},[t._v(t._s(t.help))]):t._e()],2):t._e(),t._v(" "),t.isCheck?t._e():o("input",{class:["form-control",{"is-invalid":t.errorField},t.inputClass],attrs:{type:t.type,id:t.id,name:t.id,placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.onInput}}),t._v(" "),!t.isCheck&&t.help?o("small",{staticClass:"text-muted"},[t._v(t._s(t.help))]):t._e(),t._v(" "),t.hasError?o("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errorField))]):t._e()])},staticRenderFns:[]},void 0,function(o){function n(){return null!==o&&o.apply(this,arguments)||this}return _(n,o),n.prototype.concat=function(t,e,o){return t+e+(o||"")},Object.defineProperty(n.prototype,"isCheck",{get:function(){return"radio"===this.type||"checkbox"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"errorField",{get:function(){return i.call(this.$props,this.id)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hasError",{get:function(){return!!this.errorField},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"kvpValues",{get:function(){return(this.values||[]).map(function(t){return"string"==typeof t?{key:t,value:t}:t})},enumerable:!0,configurable:!0}),n.prototype.onInput=function(t){return t.target.value},n.prototype.onInputValues=function(t){return function(t){if(null==t.form)throw new Error("multiple values must be within a <form> element");return Array.from(t.form.elements).filter(function(e){return e.name===t.name&&e.checked}).map(function(t){return t.value})}(t.target)},n.prototype.hasValue=function(t){return"checkbox"===this.type?this.value instanceof Array&&this.value.indexOf(t)>=0:this.value===t},k([t({default:null})],n.prototype,"responseStatus",void 0),k([t({default:"text"})],n.prototype,"type",void 0),k([t({default:""})],n.prototype,"id",void 0),k([t({default:""})],n.prototype,"placeholder",void 0),k([t({default:""})],n.prototype,"label",void 0),k([t({default:""})],n.prototype,"help",void 0),k([t({default:"form-control-lg"})],n.prototype,"inputClass",void 0),k([t({default:!1})],n.prototype,"inline",void 0),k([t({default:function(){return null}})],n.prototype,"value",void 0),k([t({default:function(){return[]}})],n.prototype,"values",void 0),k([r("input")],n.prototype,"onInput",null),k([r("input")],n.prototype,"onInputValues",null),n=k([e],n)}(o),void 0,!1,void 0,void 0,void 0);var x=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.label?o("label",{staticClass:"form-label"},[t._v(t._s(t.label))]):t._e(),t._v(" "),o("select",{class:["form-control",{"is-invalid":t.errorField},t.selectClass],attrs:{id:t.id,name:t.id,multiple:t.multiple},on:{change:t.onInputValues}},t._l(t.kvpValues,function(e){return o("option",{key:e.key,domProps:{value:e.key,selected:t.hasValue(e.key)}},[t._v(t._s(e.value))])}),0),t._v(" "),t.help?o("small",{staticClass:"text-muted"},[t._v(t._s(t.help))]):t._e(),t._v(" "),t.errorField?o("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errorField))]):t._e()])},staticRenderFns:[]},void 0,function(o){function n(){return null!==o&&o.apply(this,arguments)||this}return _(n,o),Object.defineProperty(n.prototype,"errorField",{get:function(){return i.call(this.$props,this.id)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hasError",{get:function(){return!!this.errorField},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"kvpValues",{get:function(){return(this.values||[]).map(function(t){return"string"==typeof t?{key:t,value:t}:t})},enumerable:!0,configurable:!0}),n.prototype.hasValue=function(t){return this.multiple?this.value instanceof Array&&this.value.indexOf(t)>=0:this.value===t},n.prototype.onInputValues=function(t){return this.multiple?(e=t.target,Array.from(e.options).filter(function(t){return t.selected}).map(function(t){return t.value})):t.target.value;var e},k([t({default:null})],n.prototype,"responseStatus",void 0),k([t({default:""})],n.prototype,"id",void 0),k([t({default:""})],n.prototype,"label",void 0),k([t({default:""})],n.prototype,"help",void 0),k([t({default:"form-control form-control-lg"})],n.prototype,"selectClass",void 0),k([t({default:!1})],n.prototype,"multiple",void 0),k([t({default:function(){return null}})],n.prototype,"value",void 0),k([t({default:function(){return[]}})],n.prototype,"values",void 0),k([r("input")],n.prototype,"onInputValues",null),n=k([e],n)}(o),void 0,!1,void 0,void 0,void 0),I=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{class:["form-check",{"is-invalid":t.errorField,"form-control":t.errorField}]},[o("input",{class:["form-check-input",{"is-invalid":t.errorField},t.inputClass],attrs:{type:"checkbox",id:t.id,name:t.id,value:"true"},domProps:{checked:t.value},on:{input:t.onInput}}),t._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:t.id}},[t._t("default")],2)]),t._v(" "),t.help?o("small",{staticClass:"text-muted"},[t._v(t._s(t.help))]):t._e(),t._v(" "),t.errorField?o("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errorField))]):t._e()])},staticRenderFns:[]},void 0,function(o){function n(){return null!==o&&o.apply(this,arguments)||this}return _(n,o),Object.defineProperty(n.prototype,"errorField",{get:function(){return i.call(this.$props,this.id)},enumerable:!0,configurable:!0}),n.prototype.onInput=function(t){return t.target.checked},k([t({default:null})],n.prototype,"responseStatus",void 0),k([t({default:""})],n.prototype,"id",void 0),k([t({default:""})],n.prototype,"placeholder",void 0),k([t({default:!1})],n.prototype,"value",void 0),k([t({default:""})],n.prototype,"help",void 0),k([t({default:""})],n.prototype,"inputClass",void 0),k([r("input")],n.prototype,"onInput",null),n=k([e],n)}(o),void 0,!1,void 0,void 0,void 0),$=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return _(o,e),Object.defineProperty(o.prototype,"bootstrapClasses",{get:function(){var t={primary:this.primary,"outline-primary":this.outlinePrimary,secondary:this.secondary,"outline-secondary":this.outlineSecondary,success:this.success,"outline-success":this.outlineSuccess,info:this.info,"outline-info":this.outlineInfo,warning:this.warning,"outline-warning":this.outlineWarning,danger:this.danger,"outline-danger":this.outlineDanger,light:this.light,"outline-light":this.outlineLight,dark:this.dark,"outline-dark":this.outlineDark,lg:this.lg,md:this.md,sm:this.sm,xs:this.xs,block:this.block},e={};return Object.keys(t).forEach(function(o){!1!==t[o]&&(e[o]=t[o]||!0)}),e},enumerable:!0,configurable:!0}),k([t({default:!1})],o.prototype,"primary",void 0),k([t({default:!1})],o.prototype,"outlinePrimary",void 0),k([t({default:!1})],o.prototype,"secondary",void 0),k([t({default:!1})],o.prototype,"outlineSecondary",void 0),k([t({default:!1})],o.prototype,"success",void 0),k([t({default:!1})],o.prototype,"outlineSuccess",void 0),k([t({default:!1})],o.prototype,"info",void 0),k([t({default:!1})],o.prototype,"outlineInfo",void 0),k([t({default:!1})],o.prototype,"warning",void 0),k([t({default:!1})],o.prototype,"outlineWarning",void 0),k([t({default:!1})],o.prototype,"danger",void 0),k([t({default:!1})],o.prototype,"outlineDanger",void 0),k([t({default:!1})],o.prototype,"light",void 0),k([t({default:!1})],o.prototype,"outlineLight",void 0),k([t({default:!1})],o.prototype,"dark",void 0),k([t({default:!1})],o.prototype,"outlineDark",void 0),k([t({default:!1})],o.prototype,"lg",void 0),k([t({default:!1})],o.prototype,"md",void 0),k([t({default:!1})],o.prototype,"sm",void 0),k([t({default:!1})],o.prototype,"xs",void 0),k([t({default:!1})],o.prototype,"block",void 0),k([t({default:!1})],o.prototype,"vertical",void 0),k([t({default:!1})],o.prototype,"horizontal",void 0),o}(m),F=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return _(o,e),k([t({default:function(){return[]}})],o.prototype,"items",void 0),k([t({default:function(){return null}})],o.prototype,"options",void 0),k([t({default:function(){return[]}})],o.prototype,"attributes",void 0),k([t({default:null})],o.prototype,"activePath",void 0),k([t({default:null})],o.prototype,"baseHref",void 0),k([t({default:null})],o.prototype,"navClass",void 0),k([t({default:null})],o.prototype,"navItemClass",void 0),k([t({default:null})],o.prototype,"navLinkClass",void 0),k([t({default:null})],o.prototype,"childNavItemClass",void 0),k([t({default:null})],o.prototype,"childNavLinkClass",void 0),k([t({default:null})],o.prototype,"childNavMenuClass",void 0),k([t({default:null})],o.prototype,"childNavMenuItemClass",void 0),o}($),N=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return _(o,e),k([t({default:null})],o.prototype,"message",void 0),k([t({default:function(){return[]}})],o.prototype,"items",void 0),k([t({default:function(){return null}})],o.prototype,"options",void 0),k([t({default:function(){return[]}})],o.prototype,"attributes",void 0),k([t({default:null})],o.prototype,"activePath",void 0),k([t({default:null})],o.prototype,"baseHref",void 0),k([t({default:null})],o.prototype,"navClass",void 0),k([t({default:null})],o.prototype,"navItemClass",void 0),k([t({default:null})],o.prototype,"navLinkClass",void 0),k([t({default:null})],o.prototype,"childNavItemClass",void 0),k([t({default:null})],o.prototype,"childNavLinkClass",void 0),k([t({default:null})],o.prototype,"childNavMenuClass",void 0),k([t({default:null})],o.prototype,"childNavMenuItemClass",void 0),o}(m),w=["attributes","activePath","baseHref","navClass","navItemClass","navLinkClass","childNavItemClass","childNavLinkClass","childNavMenuClass","childNavMenuItemClass"];function R(t){for(var e={},o=0,r=w;o<r.length;o++){var n=r[o];t[n]&&(e[n]=t[n])}return e}function E(t){return t.baseHref||(t.baseHref=""),t}function L(t){return t.$route&&t.$route.path||location.pathname}var V=C({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._b({class:["btn",t.btnCls],on:{click:function(e){return t.$emit("click",e)}}},"button",t.attrs,!1),[t._t("default")],2)},staticRenderFns:[]},void 0,function(o){function r(){return null!==o&&o.apply(this,arguments)||this}return _(r,o),Object.defineProperty(r.prototype,"opt",{get:function(){return E(Object.assign(l.forLinkButton(this.options),R(this.$props)))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"activeHref",{get:function(){return null!=this.href?this.opt.activePath||location.pathname:null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hashPrefix",{get:function(){return a(this.opt.baseHref||"","/")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"attrs",{get:function(){return s(this.$props,["id","type","name","autofocus","disabled","value"])},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"activeCls",{get:function(){return u(this.href||null,this.activeHref,this.exact)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"btnCls",{get:function(){return p(this.bootstrapClasses)},enumerable:!0,configurable:!0}),k([t({default:""})],r.prototype,"href",void 0),k([t({default:function(){return null}})],r.prototype,"options",void 0),k([t({default:""})],r.prototype,"id",void 0),k([t({default:""})],r.prototype,"navItemClass",void 0),k([t({default:""})],r.prototype,"exact",void 0),k([t({default:null})],r.prototype,"click",void 0),r=k([e],r)}($),void 0,!1,void 0,void 0,void 0),S=C({render:function(){var t=this.$createElement;return(this._self._c||t)("img",{style:this.styles,attrs:{src:this.src}})},staticRenderFns:[]},void 0,function(o){function r(){return null!==o&&o.apply(this,arguments)||this}return _(r,o),Object.defineProperty(r.prototype,"src",{get:function(){var t="/metadata/svg/"+this.id+".svg";return this.fill&&(t+="?fill="+encodeURIComponent(this.fill)),this.baseUrl?c(this.baseUrl,t):t},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"styles",{get:function(){var t={};return this.width&&(t.width=this.width),this.height&&(t.height=this.height),t},enumerable:!0,configurable:!0}),k([t({default:""})],r.prototype,"id",void 0),k([t({default:""})],r.prototype,"fill",void 0),k([t({default:""})],r.prototype,"width",void 0),k([t({default:""})],r.prototype,"height",void 0),k([t({default:""})],r.prototype,"baseUrl",void 0),r=k([e],r)}(o),void 0,!1,void 0,void 0,void 0),H=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.to?t.isAbsolute?o("a",t._b({attrs:{href:t.to}},"a",t.attrs,!1),[t._t("default")],2):o("router-link",t._b({attrs:{tag:"a",to:t.to,exact:t.exact}},"router-link",t.attrs,!1),[t._t("default")],2):o("a",t._b({attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.$emit("click",e)}}},"a",t.attrs,!1),[t._t("default")],2)},staticRenderFns:[]},void 0,function(o){function r(){return null!==o&&o.apply(this,arguments)||this}return _(r,o),Object.defineProperty(r.prototype,"isAbsolute",{get:function(){return this.to&&(this.to.startsWith("http://")||this.to.startsWith("https://")||this.to.startsWith("://"))},enumerable:!0,configurable:!0}),k([t({default:null})],r.prototype,"to",void 0),k([t({default:null})],r.prototype,"attrs",void 0),k([t({default:!1})],r.prototype,"exact",void 0),k([t({default:null})],r.prototype,"click",void 0),r=k([e],r)}(o),void 0,!1,void 0,void 0,void 0),A=C({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-link",t._b({class:[t.opt.navItemClass,t.activeCls,t.btnCls],attrs:{to:t.hashPrefix+t.href},on:{click:function(e){return t.$emit("click",e)}}},"v-link",t.attrs,!1),[t._t("default")],2)},staticRenderFns:[]},void 0,function(o){function r(){return null!==o&&o.apply(this,arguments)||this}return _(r,o),Object.defineProperty(r.prototype,"opt",{get:function(){return E(Object.assign(l.forLinkButton(this.options),R(this.$props)))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"activeHref",{get:function(){return null!=this.href?this.opt.activePath||location.pathname:null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hashPrefix",{get:function(){return a(this.opt.baseHref||"","/")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"attrs",{get:function(){return s(this.$props,["id","type","name","autofocus","disabled","value","click"])},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"activeCls",{get:function(){return u(this.href||null,this.activeHref,this.exact)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"btnCls",{get:function(){return p(this.bootstrapClasses)},enumerable:!0,configurable:!0}),k([t({default:""})],r.prototype,"href",void 0),k([t({default:function(){return null}})],r.prototype,"options",void 0),k([t({default:""})],r.prototype,"id",void 0),k([t({default:""})],r.prototype,"navItemClass",void 0),k([t({default:""})],r.prototype,"exact",void 0),k([t({default:null})],r.prototype,"click",void 0),r=k([e],r)}($),void 0,!1,void 0,void 0,void 0),M=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.items.length?o("div",{class:t.opt.navClass},t._l(t.items,function(e){return o("v-nav-link",{key:e.href||e.label,attrs:{item:e,options:t.opt,activePath:t.opt.activePath,navItemClass:t.opt.navItemClass}})}),1):t._e()},staticRenderFns:[]},void 0,function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return _(o,t),Object.defineProperty(o.prototype,"opt",{get:function(){return E(Object.assign(d.forNav(this.options),R(this.$props)))},enumerable:!0,configurable:!0}),o=k([e],o)}(N),void 0,!1,void 0,void 0,void 0),B=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.items.length?o("div",{class:t.opt.navClass},t._l(t.items,function(e){return o("v-nav-link",{key:e.href||e.label,attrs:{item:e,options:t.opt,activePath:t.activePath,navItemClass:t.opt.navItemClass}})}),1):t._e()},staticRenderFns:[]},void 0,function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return _(o,t),Object.defineProperty(o.prototype,"opt",{get:function(){return E(Object.assign(f.forNavbar(this.options),R(this.$props)))},enumerable:!0,configurable:!0}),o=k([e],o)}(N),void 0,!1,void 0,void 0,void 0),U=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("li",{class:[t.item.className,t.navItemCls]},[o("v-link",{class:[t.navLinkCls,t.activeCls],attrs:{to:t.opt.baseHref+t.item.href,id:t.id,attrs:t.childProps,exact:t.item.exact}},[t._v("\n        "+t._s(t.item.label)+"\n    ")]),t._v(" "),t._l(t.item.children,function(e){return o("div",{key:e.href||e.label,class:t.opt.childNavMenuClass,attrs:{"aria-labelledby":t.id}},["-"===e.label?o("div",{staticClass:"dropdown-divider"}):o("v-link",{class:[t.opt.childNavMenuItemClass,t.activeClassNav(e,t.useActivePath)],attrs:{to:t.opt.baseHref+e.href,exact:e.exact}},[t._v("\n            "+t._s(e.label)+"\n        ")])],1)})],2):t._e()},staticRenderFns:[]},void 0,function(o){function r(){return null!==o&&o.apply(this,arguments)||this}return _(r,o),Object.defineProperty(r.prototype,"opt",{get:function(){return E(d.forNav(this.options))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"show",{get:function(){return!(null==this.item||!d.showNav(this.item,this.opt.attributes))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"useActivePath",{get:function(){return this.activePath||this.opt.activePath||L(this)||""},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hasChildren",{get:function(){return this.item.children&&this.item.children.length>0},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"navItemCls",{get:function(){return this.hasChildren?this.opt.childNavItemClass:this.opt.navItemClass},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"navLinkCls",{get:function(){return this.hasChildren?this.opt.childNavLinkClass:this.opt.navLinkClass},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"childProps",{get:function(){return this.hasChildren?{role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}:{}},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"id",{get:function(){return this.item.id||this.hasChildren?v(this.item.label):null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"activeCls",{get:function(){return h(this.item,this.useActivePath)},enumerable:!0,configurable:!0}),k([t({default:null})],r.prototype,"item",void 0),k([t({default:function(){return null}})],r.prototype,"options",void 0),k([t({default:null})],r.prototype,"activePath",void 0),k([t({default:null})],r.prototype,"navItemClass",void 0),k([t({default:null})],r.prototype,"navLinkClass",void 0),r=k([e],r)}(o),void 0,!1,void 0,void 0,void 0),q=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.items.length?o("div",{class:t.cls},t._l(t.items,function(e){return o("v-nav-link-button",t._b({key:e.href||e.label,attrs:{item:e,options:t.opt},on:{click:function(e){return t.$emit("click",e)}}},"v-nav-link-button",Object.assign({},{block:t.block},t.$props),!1))}),1):t._e()},staticRenderFns:[]},void 0,function(o){function r(){return null!==o&&o.apply(this,arguments)||this}return _(r,o),Object.defineProperty(r.prototype,"opt",{get:function(){return E(Object.assign(y.forNavButtonGroup(this.options),R(this.$props)))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"cls",{get:function(){return!1!==this.block?null:!1!==this.vertical?"btn-group-vertical":this.opt.navClass},enumerable:!0,configurable:!0}),k([t({default:!1})],r.prototype,"block",void 0),k([t({default:!1})],r.prototype,"vertical",void 0),r=k([e],r)}(F),void 0,!1,void 0,void 0,void 0);var D=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("v-link",{class:[t.item.className,t.opt.navItemClass,t.activeCls,t.btnCls],attrs:{to:t.hashPrefix+t.item.href,id:t.item.id},on:{click:function(e){return t.$emit("click",e)}}},[t.iconCls?o("i",{class:t.iconCls}):t._e(),t._v("\n    "+t._s(t.item.label)+"\n")]):t._e()},staticRenderFns:[]},void 0,function(o){function r(){return null!==o&&o.apply(this,arguments)||this}return _(r,o),Object.defineProperty(r.prototype,"opt",{get:function(){return E(Object.assign(b.forNavLink(this.options),R(this.$props)))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"show",{get:function(){return!(null==this.item||!d.showNav(this.item,this.opt.attributes))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"useActivePath",{get:function(){return this.activePath||this.opt.activePath||L(this)||""},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hashPrefix",{get:function(){return a(this.baseHref||this.opt.baseHref||"","/")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"activeCls",{get:function(){return h(this.item,this.useActivePath)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"btnCls",{get:function(){return p(this.bootstrapClasses)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"iconCls",{get:function(){return t=this.item.iconHtml,null!=(e=/class="([^"]+)/.exec(t))?e[1]:null;var t,e},enumerable:!0,configurable:!0}),k([t({default:""})],r.prototype,"href",void 0),k([t({default:function(){return null}})],r.prototype,"item",void 0),k([t({default:function(){return null}})],r.prototype,"options",void 0),k([t({default:""})],r.prototype,"id",void 0),k([t({default:""})],r.prototype,"baseHref",void 0),k([t({default:""})],r.prototype,"activePath",void 0),k([t({default:""})],r.prototype,"navItemClass",void 0),k([t({default:""})],r.prototype,"exact",void 0),k([t({default:null})],r.prototype,"click",void 0),r=k([e],r)}($),void 0,!1,void 0,void 0,void 0);var W={install:function t(e){t.installed||(t.installed=!0,e.component("Forbidden",P),e.component("error-summary",O),e.component("v-input",j),e.component("v-select",x),e.component("v-checkbox",I),e.component("v-button",V),e.component("v-svg",S),e.component("v-link",H),e.component("v-link-button",A),e.component("v-nav",M),e.component("v-navbar",B),e.component("v-nav-link",U),e.component("v-nav-button-group",q),e.component("v-nav-link-button",D))}},T=null;"undefined"!=typeof window?T=window.Vue:"undefined"!=typeof global&&(T=global.Vue),T&&T.use(W);export default W;export{V as Button,I as CheckBox,O as ErrorSummary,P as Forbidden,j as Input,H as Link,A as LinkButton,M as Nav,q as NavButtonGroup,U as NavLink,D as NavLinkButton,B as Navbar,x as Select,S as SvgImage};
