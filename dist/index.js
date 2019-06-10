import{Prop as t,Component as e,Vue as o,Emit as n}from"vue-property-decorator";import{errorResponseExcept as r,errorResponse as i,pick as l,btnClasses as a,combinePaths as s,LinkButtonDefaults as u,trimEnd as p,activeClass as c,NavDefaults as d,NavbarDefaults as f,safeVarName as v,activeClassNav as h,NavButtonGroupDefaults as y,NavLinkDefaults as b}from"@servicestack/client";import m from"vue";var g=function(t,e){return(g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)};function _(t,e){function o(){this.constructor=t}g(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}function k(t,e,o,n){var r,i=arguments.length,l=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,n);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(l=(i<3?r(l):i>3?r(e,o,l):r(e,o))||l);return i>3&&l&&Object.defineProperty(e,o,l),l}var C=function(t,e,o,n,r,i,l,a,s,u){"boolean"!=typeof l&&(s=a,a=l,l=!1);var p,c="function"==typeof o?o.options:o;if(t&&t.render&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0,r&&(c.functional=!0)),n&&(c._scopeId=n),i?(p=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,s(t)),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=p):e&&(p=l?function(){e.call(this,u(this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),p)if(c.functional){var d=c.render;c.render=function(t,e){return p.call(e),d(t,e)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,p):[p]}return o},P=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"forbidden"},[o("h3",[t._v("\n        You are not authorized to access\n        "),t.usePath?o("code",[t._v(t._s(t.usePath))]):o("span",[t._v("this page")])]),t._v(" "),t.message?o("p",[t._v(t._s(t.message))]):t.useRole?o("p",[t._v("Missing role "),o("code",[t._v(t._s(t.useRole))])]):t.usePermission?o("p",[t._v("Missing permission "),o("code",[t._v(t._s(t.usePermission))])]):t._e()])},staticRenderFns:[]},void 0,function(o){function n(){return null!==o&&o.apply(this,arguments)||this}return _(n,o),Object.defineProperty(n.prototype,"query",{get:function(){return this.$route&&this.$route.query||{}},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"usePath",{get:function(){return this.path||this.query.path||null},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"useRole",{get:function(){return this.role||this.query.role||null},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"usePermission",{get:function(){return this.permission||this.query.permission||null},enumerable:!0,configurable:!0}),k([t({default:""})],n.prototype,"message",void 0),k([t({default:""})],n.prototype,"path",void 0),k([t({default:""})],n.prototype,"role",void 0),k([t({default:""})],n.prototype,"permission",void 0),n=k([e],n)}(o),void 0,!1,void 0,void 0,void 0),O=C({render:function(){var t=this.$createElement,e=this._self._c||t;return this.errorSummary?e("div",{staticClass:"alert alert-danger mt-2"},[this._v(this._s(this.errorSummary))]):this._e()},staticRenderFns:[]},void 0,function(o){function n(){return null!==o&&o.apply(this,arguments)||this}return _(n,o),Object.defineProperty(n.prototype,"errorSummary",{get:function(){return r.call(this.$props,this.except)},enumerable:!0,configurable:!0}),k([t({default:null})],n.prototype,"responseStatus",void 0),k([t({default:""})],n.prototype,"except",void 0),n=k([e],n)}(o),void 0,!1,void 0,void 0,void 0);var j=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.label?o("label",{class:t.isCheck?"form-check-label":"form-label",attrs:{for:t.id}},[t._v(t._s(t.label))]):t._e(),t._v(" "),t.isCheck?o("div",{class:["form-check",{"is-invalid":t.hasError,"form-control":t.hasError}]},["radio"===t.type?t._l(t.kvpValues,function(e){return o("div",{key:e.key,class:["custom-control","custom-radio",{"custom-control-inline":t.inline}]},[o("input",{class:["custom-control-input",t.inputClass],attrs:{type:"radio",id:t.concat(t.id,"-",e.key),name:t.id},domProps:{value:e.key,checked:t.value==e.key},on:{change:t.onInput}}),t._v(" "),o("label",{staticClass:"custom-control-label",attrs:{for:t.concat(t.id,"-",e.key)}},[t._v(t._s(e.value))])])}):t._e(),t._v(" "),"checkbox"===t.type?t._l(t.kvpValues,function(e){return o("div",{key:e.key,class:["custom-control","custom-checkbox",{"custom-control-inline":t.inline}]},[o("input",{class:["form-check-input"],attrs:{type:"checkbox",id:t.concat(t.id,"-",e.key),name:t.id},domProps:{value:e.key,checked:t.hasValue(e.key)},on:{change:t.onInputValues}}),t._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:t.concat(t.id,"-",e.key)}},[t._v(t._s(e.value))])])}):t._e(),t._v(" "),t.help?o("small",{staticClass:"text-muted"},[t._v(t._s(t.help))]):t._e()],2):t._e(),t._v(" "),t.isCheck?t._e():o("input",{class:["form-control",{"is-invalid":t.errorField},t.inputClass],attrs:{type:t.type,id:t.id,name:t.id,placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.onInput}}),t._v(" "),!t.isCheck&&t.help?o("small",{staticClass:"text-muted"},[t._v(t._s(t.help))]):t._e(),t._v(" "),t.hasError?o("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errorField))]):t._e()])},staticRenderFns:[]},void 0,function(o){function r(){return null!==o&&o.apply(this,arguments)||this}return _(r,o),r.prototype.concat=function(t,e,o){return t+e+(o||"")},Object.defineProperty(r.prototype,"isCheck",{get:function(){return"radio"===this.type||"checkbox"===this.type},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"errorField",{get:function(){return i.call(this.$props,this.id)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hasError",{get:function(){return!!this.errorField},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"kvpValues",{get:function(){return(this.values||[]).map(function(t){return"string"==typeof t?{key:t,value:t}:t})},enumerable:!0,configurable:!0}),r.prototype.onInput=function(t){return t.target.value},r.prototype.onInputValues=function(t){return function(t){if(null==t.form)throw new Error("multiple values must be within a <form> element");return Array.from(t.form.elements).filter(function(e){return e.name===t.name&&e.checked}).map(function(t){return t.value})}(t.target)},r.prototype.hasValue=function(t){return"checkbox"===this.type?this.value instanceof Array&&this.value.indexOf(t)>=0:this.value===t},k([t({default:null})],r.prototype,"responseStatus",void 0),k([t({default:"text"})],r.prototype,"type",void 0),k([t({default:""})],r.prototype,"id",void 0),k([t({default:""})],r.prototype,"placeholder",void 0),k([t({default:""})],r.prototype,"label",void 0),k([t({default:""})],r.prototype,"help",void 0),k([t({default:"form-control-lg"})],r.prototype,"inputClass",void 0),k([t({default:!1})],r.prototype,"inline",void 0),k([t({default:function(){return null}})],r.prototype,"value",void 0),k([t({default:function(){return[]}})],r.prototype,"values",void 0),k([n("input")],r.prototype,"onInput",null),k([n("input")],r.prototype,"onInputValues",null),r=k([e],r)}(o),void 0,!1,void 0,void 0,void 0);var I=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.label?o("label",{staticClass:"form-label"},[t._v(t._s(t.label))]):t._e(),t._v(" "),o("select",{class:["form-control",{"is-invalid":t.errorField},t.selectClass],attrs:{id:t.id,name:t.id,multiple:t.multiple},on:{change:t.onInputValues}},t._l(t.kvpValues,function(e){return o("option",{key:e.key,domProps:{value:e.key,selected:t.hasValue(e.key)}},[t._v(t._s(e.value))])}),0),t._v(" "),t.help?o("small",{staticClass:"text-muted"},[t._v(t._s(t.help))]):t._e(),t._v(" "),t.errorField?o("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errorField))]):t._e()])},staticRenderFns:[]},void 0,function(o){function r(){return null!==o&&o.apply(this,arguments)||this}return _(r,o),Object.defineProperty(r.prototype,"errorField",{get:function(){return i.call(this.$props,this.id)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hasError",{get:function(){return!!this.errorField},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"kvpValues",{get:function(){return(this.values||[]).map(function(t){return"string"==typeof t?{key:t,value:t}:t})},enumerable:!0,configurable:!0}),r.prototype.hasValue=function(t){return this.multiple?this.value instanceof Array&&this.value.indexOf(t)>=0:this.value===t},r.prototype.onInputValues=function(t){return this.multiple?(e=t.target,Array.from(e.options).filter(function(t){return t.selected}).map(function(t){return t.value})):t.target.value;var e},k([t({default:null})],r.prototype,"responseStatus",void 0),k([t({default:""})],r.prototype,"id",void 0),k([t({default:""})],r.prototype,"label",void 0),k([t({default:""})],r.prototype,"help",void 0),k([t({default:"form-control form-control-lg"})],r.prototype,"selectClass",void 0),k([t({default:!1})],r.prototype,"multiple",void 0),k([t({default:function(){return null}})],r.prototype,"value",void 0),k([t({default:function(){return[]}})],r.prototype,"values",void 0),k([n("input")],r.prototype,"onInputValues",null),r=k([e],r)}(o),void 0,!1,void 0,void 0,void 0),$=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{class:["form-check",{"is-invalid":t.errorField,"form-control":t.errorField}]},[o("input",{class:["form-check-input",{"is-invalid":t.errorField},t.inputClass],attrs:{type:"checkbox",id:t.id,name:t.id,value:"true"},domProps:{checked:t.value},on:{input:t.onInput}}),t._v(" "),o("label",{staticClass:"form-check-label",attrs:{for:t.id}},[t._t("default")],2)]),t._v(" "),t.help?o("small",{staticClass:"text-muted"},[t._v(t._s(t.help))]):t._e(),t._v(" "),t.errorField?o("div",{staticClass:"invalid-feedback"},[t._v(t._s(t.errorField))]):t._e()])},staticRenderFns:[]},void 0,function(o){function r(){return null!==o&&o.apply(this,arguments)||this}return _(r,o),Object.defineProperty(r.prototype,"errorField",{get:function(){return i.call(this.$props,this.id)},enumerable:!0,configurable:!0}),r.prototype.onInput=function(t){return t.target.checked},k([t({default:null})],r.prototype,"responseStatus",void 0),k([t({default:""})],r.prototype,"id",void 0),k([t({default:""})],r.prototype,"placeholder",void 0),k([t({default:!1})],r.prototype,"value",void 0),k([t({default:""})],r.prototype,"help",void 0),k([t({default:""})],r.prototype,"inputClass",void 0),k([n("input")],r.prototype,"onInput",null),r=k([e],r)}(o),void 0,!1,void 0,void 0,void 0),x=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return _(o,e),Object.defineProperty(o.prototype,"bootstrapClasses",{get:function(){var t={primary:this.primary,"outline-primary":this.outlinePrimary,secondary:this.secondary,"outline-secondary":this.outlineSecondary,success:this.success,"outline-success":this.outlineSuccess,info:this.info,"outline-info":this.outlineInfo,warning:this.warning,"outline-warning":this.outlineWarning,danger:this.danger,"outline-danger":this.outlineDanger,light:this.light,"outline-light":this.outlineLight,dark:this.dark,"outline-dark":this.outlineDark,lg:this.lg,md:this.md,sm:this.sm,xs:this.xs,block:this.block},e={};return Object.keys(t).forEach(function(o){!1!==t[o]&&null!=t[o]&&(e[o]=t[o]||!0)}),e},enumerable:!0,configurable:!0}),k([t({default:!1})],o.prototype,"primary",void 0),k([t({default:!1})],o.prototype,"outlinePrimary",void 0),k([t({default:!1})],o.prototype,"secondary",void 0),k([t({default:!1})],o.prototype,"outlineSecondary",void 0),k([t({default:!1})],o.prototype,"success",void 0),k([t({default:!1})],o.prototype,"outlineSuccess",void 0),k([t({default:!1})],o.prototype,"info",void 0),k([t({default:!1})],o.prototype,"outlineInfo",void 0),k([t({default:!1})],o.prototype,"warning",void 0),k([t({default:!1})],o.prototype,"outlineWarning",void 0),k([t({default:!1})],o.prototype,"danger",void 0),k([t({default:!1})],o.prototype,"outlineDanger",void 0),k([t({default:!1})],o.prototype,"light",void 0),k([t({default:!1})],o.prototype,"outlineLight",void 0),k([t({default:!1})],o.prototype,"dark",void 0),k([t({default:!1})],o.prototype,"outlineDark",void 0),k([t({default:!1})],o.prototype,"lg",void 0),k([t({default:!1})],o.prototype,"md",void 0),k([t({default:!1})],o.prototype,"sm",void 0),k([t({default:!1})],o.prototype,"xs",void 0),k([t({default:!1})],o.prototype,"block",void 0),k([t({default:!1})],o.prototype,"vertical",void 0),k([t({default:!1})],o.prototype,"horizontal",void 0),o}(m),N=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return _(o,e),k([t({default:function(){return[]}})],o.prototype,"items",void 0),k([t({default:function(){return null}})],o.prototype,"options",void 0),k([t({default:function(){return[]}})],o.prototype,"attributes",void 0),k([t({default:null})],o.prototype,"activePath",void 0),k([t({default:null})],o.prototype,"baseHref",void 0),k([t({default:null})],o.prototype,"navClass",void 0),k([t({default:null})],o.prototype,"navItemClass",void 0),k([t({default:null})],o.prototype,"navLinkClass",void 0),k([t({default:null})],o.prototype,"childNavItemClass",void 0),k([t({default:null})],o.prototype,"childNavLinkClass",void 0),k([t({default:null})],o.prototype,"childNavMenuClass",void 0),k([t({default:null})],o.prototype,"childNavMenuItemClass",void 0),o}(x),F=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return _(o,e),k([t({default:null})],o.prototype,"message",void 0),k([t({default:function(){return[]}})],o.prototype,"items",void 0),k([t({default:function(){return null}})],o.prototype,"options",void 0),k([t({default:function(){return[]}})],o.prototype,"attributes",void 0),k([t({default:null})],o.prototype,"activePath",void 0),k([t({default:null})],o.prototype,"baseHref",void 0),k([t({default:null})],o.prototype,"navClass",void 0),k([t({default:null})],o.prototype,"navItemClass",void 0),k([t({default:null})],o.prototype,"navLinkClass",void 0),k([t({default:null})],o.prototype,"childNavItemClass",void 0),k([t({default:null})],o.prototype,"childNavLinkClass",void 0),k([t({default:null})],o.prototype,"childNavMenuClass",void 0),k([t({default:null})],o.prototype,"childNavMenuItemClass",void 0),o}(m),w=["attributes","activePath","baseHref","navClass","navItemClass","navLinkClass","childNavItemClass","childNavLinkClass","childNavMenuClass","childNavMenuItemClass"];function R(t){for(var e={},o=0,n=w;o<n.length;o++){var r=n[o];t[r]&&(e[r]=t[r])}return e}function E(t){return t.baseHref||(t.baseHref=""),t}function L(t){return t.$route&&t.$route.path||location.pathname}var V=C({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",t._b({class:["btn",t.btnCls],on:{click:function(e){return t.$emit("click",e)}}},"button",t.attrs,!1),[t._t("default")],2)},staticRenderFns:[]},void 0,function(o){function n(){return null!==o&&o.apply(this,arguments)||this}return _(n,o),Object.defineProperty(n.prototype,"attrs",{get:function(){return l(this.$props,["id","type","name","autofocus","disabled","value"])},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"btnCls",{get:function(){return a(this.bootstrapClasses)},enumerable:!0,configurable:!0}),k([t({default:function(){return null}})],n.prototype,"options",void 0),k([t({default:""})],n.prototype,"id",void 0),k([t({default:""})],n.prototype,"name",void 0),k([t({default:""})],n.prototype,"type",void 0),k([t({default:""})],n.prototype,"value",void 0),k([t({default:!1})],n.prototype,"disabled",void 0),k([t({default:null})],n.prototype,"click",void 0),n=k([e],n)}(x),void 0,!1,void 0,void 0,void 0),S=C({render:function(){var t=this.$createElement;return(this._self._c||t)("img",{style:this.styles,attrs:{src:this.src}})},staticRenderFns:[]},void 0,function(o){function n(){return null!==o&&o.apply(this,arguments)||this}return _(n,o),Object.defineProperty(n.prototype,"src",{get:function(){var t="/metadata/svg/"+this.id+".svg";return this.fill&&(t+="?fill="+encodeURIComponent(this.fill)),this.baseUrl?s(this.baseUrl,t):t},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"styles",{get:function(){var t={};return this.width&&(t.width=this.width),this.height&&(t.height=this.height),t},enumerable:!0,configurable:!0}),k([t({default:""})],n.prototype,"id",void 0),k([t({default:""})],n.prototype,"fill",void 0),k([t({default:""})],n.prototype,"width",void 0),k([t({default:""})],n.prototype,"height",void 0),k([t({default:""})],n.prototype,"baseUrl",void 0),n=k([e],n)}(o),void 0,!1,void 0,void 0,void 0),H=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.to?t.isAbsolute?o("a",t._b({attrs:{href:t.to}},"a",t.attrs,!1),[t._t("default")],2):o("router-link",t._b({attrs:{tag:"a",to:t.to,exact:t.exact}},"router-link",t.attrs,!1),[t._t("default")],2):o("a",t._b({attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.$emit("click",e)}}},"a",t.attrs,!1),[t._t("default")],2)},staticRenderFns:[]},void 0,function(o){function n(){return null!==o&&o.apply(this,arguments)||this}return _(n,o),Object.defineProperty(n.prototype,"isAbsolute",{get:function(){return this.to&&(this.to.startsWith("http://")||this.to.startsWith("https://")||this.to.startsWith("://"))},enumerable:!0,configurable:!0}),k([t({default:null})],n.prototype,"to",void 0),k([t({default:null})],n.prototype,"attrs",void 0),k([t({default:!1})],n.prototype,"exact",void 0),k([t({default:null})],n.prototype,"click",void 0),n=k([e],n)}(o),void 0,!1,void 0,void 0,void 0),A=C({render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-link",t._b({class:[t.opt.navItemClass,t.activeCls,t.btnCls],attrs:{to:t.hashPrefix+t.href},on:{click:function(e){return t.$emit("click",e)}}},"v-link",t.attrs,!1),[t._t("default")],2)},staticRenderFns:[]},void 0,function(o){function n(){return null!==o&&o.apply(this,arguments)||this}return _(n,o),Object.defineProperty(n.prototype,"opt",{get:function(){return E(Object.assign(u.forLinkButton(this.options),R(this.$props)))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"activeHref",{get:function(){return null!=this.href?this.opt.activePath||location.pathname:null},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hashPrefix",{get:function(){return p(this.opt.baseHref||"","/")},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"attrs",{get:function(){return l(this.$props,["id","type","name","autofocus","disabled","value","click"])},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"activeCls",{get:function(){return c(this.href||null,this.activeHref,this.exact)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"btnCls",{get:function(){return a(this.bootstrapClasses)},enumerable:!0,configurable:!0}),k([t({default:""})],n.prototype,"href",void 0),k([t({default:function(){return null}})],n.prototype,"options",void 0),k([t({default:""})],n.prototype,"id",void 0),k([t({default:""})],n.prototype,"navItemClass",void 0),k([t({default:""})],n.prototype,"exact",void 0),k([t({default:null})],n.prototype,"click",void 0),n=k([e],n)}(x),void 0,!1,void 0,void 0,void 0),M=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.items.length?o("div",{class:t.opt.navClass},t._l(t.items,function(e){return o("v-nav-link",{key:e.href||e.label,attrs:{item:e,options:t.opt,activePath:t.opt.activePath,navItemClass:t.opt.navItemClass}})}),1):t._e()},staticRenderFns:[]},void 0,function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return _(o,t),Object.defineProperty(o.prototype,"opt",{get:function(){return E(Object.assign(d.forNav(this.options),R(this.$props)))},enumerable:!0,configurable:!0}),o=k([e],o)}(F),void 0,!1,void 0,void 0,void 0),B=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.items.length?o("div",{class:t.opt.navClass},t._l(t.items,function(e){return o("v-nav-link",{key:e.href||e.label,attrs:{item:e,options:t.opt,activePath:t.activePath,navItemClass:t.opt.navItemClass}})}),1):t._e()},staticRenderFns:[]},void 0,function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return _(o,t),Object.defineProperty(o.prototype,"opt",{get:function(){return E(Object.assign(f.forNavbar(this.options),R(this.$props)))},enumerable:!0,configurable:!0}),o=k([e],o)}(F),void 0,!1,void 0,void 0,void 0),U=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("li",{class:[t.item.className,t.navItemCls]},[o("v-link",{class:[t.navLinkCls,t.activeCls],attrs:{to:t.opt.baseHref+t.item.href,id:t.id,attrs:t.childProps,exact:t.item.exact}},[t._v("\n        "+t._s(t.item.label)+"\n    ")]),t._v(" "),t._l(t.item.children,function(e){return o("div",{key:e.href||e.label,class:t.opt.childNavMenuClass,attrs:{"aria-labelledby":t.id}},["-"===e.label?o("div",{staticClass:"dropdown-divider"}):o("v-link",{class:[t.opt.childNavMenuItemClass,t.activeClassNav(e,t.useActivePath)],attrs:{to:t.opt.baseHref+e.href,exact:e.exact}},[t._v("\n            "+t._s(e.label)+"\n        ")])],1)})],2):t._e()},staticRenderFns:[]},void 0,function(o){function n(){return null!==o&&o.apply(this,arguments)||this}return _(n,o),Object.defineProperty(n.prototype,"opt",{get:function(){return E(d.forNav(this.options))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"show",{get:function(){return!(null==this.item||!d.showNav(this.item,this.opt.attributes))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"useActivePath",{get:function(){return this.activePath||this.opt.activePath||L(this)||""},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hasChildren",{get:function(){return this.item.children&&this.item.children.length>0},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"navItemCls",{get:function(){return this.hasChildren?this.opt.childNavItemClass:this.opt.navItemClass},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"navLinkCls",{get:function(){return this.hasChildren?this.opt.childNavLinkClass:this.opt.navLinkClass},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"childProps",{get:function(){return this.hasChildren?{role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}:{}},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"id",{get:function(){return this.item.id||this.hasChildren?v(this.item.label):null},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"activeCls",{get:function(){return h(this.item,this.useActivePath)},enumerable:!0,configurable:!0}),n.prototype.activeClassNav=function(t,e){return h(t,e)},k([t({default:null})],n.prototype,"item",void 0),k([t({default:function(){return null}})],n.prototype,"options",void 0),k([t({default:null})],n.prototype,"activePath",void 0),k([t({default:null})],n.prototype,"navItemClass",void 0),k([t({default:null})],n.prototype,"navLinkClass",void 0),n=k([e],n)}(o),void 0,!1,void 0,void 0,void 0),q=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.items.length?o("div",{class:t.cls},t._l(t.items,function(e){return o("v-nav-link-button",t._b({key:e.href||e.label,attrs:{item:e,options:t.opt},on:{click:function(e){return t.$emit("click",e)}}},"v-nav-link-button",Object.assign({},{block:t.block},t.$props),!1))}),1):t._e()},staticRenderFns:[]},void 0,function(o){function n(){return null!==o&&o.apply(this,arguments)||this}return _(n,o),Object.defineProperty(n.prototype,"opt",{get:function(){return E(Object.assign(y.forNavButtonGroup(this.options),R(this.$props)))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"cls",{get:function(){return!1!==this.block?null:!1!==this.vertical?"btn-group-vertical":this.opt.navClass},enumerable:!0,configurable:!0}),k([t({default:!1})],n.prototype,"block",void 0),k([t({default:!1})],n.prototype,"vertical",void 0),n=k([e],n)}(N),void 0,!1,void 0,void 0,void 0);var D=C({render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.show?o("v-link",{class:[t.item.className,t.opt.navItemClass,t.activeCls,t.btnCls],attrs:{to:t.hashPrefix+t.item.href,id:t.item.id},on:{click:function(e){return t.$emit("click",e)}}},[t.iconCls?o("i",{class:t.iconCls}):t._e(),t._v("\n    "+t._s(t.item.label)+"\n")]):t._e()},staticRenderFns:[]},void 0,function(o){function n(){return null!==o&&o.apply(this,arguments)||this}return _(n,o),Object.defineProperty(n.prototype,"opt",{get:function(){return E(Object.assign(b.forNavLink(this.options),R(this.$props)))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"show",{get:function(){return!(null==this.item||!d.showNav(this.item,this.opt.attributes))},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"useActivePath",{get:function(){return this.activePath||this.opt.activePath||L(this)||""},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"hashPrefix",{get:function(){return p(this.baseHref||this.opt.baseHref||"","/")},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"activeCls",{get:function(){return h(this.item,this.useActivePath)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"btnCls",{get:function(){return a(this.bootstrapClasses)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"iconCls",{get:function(){return t=this.item.iconHtml,null!=(e=/class="([^"]+)/.exec(t))?e[1]:null;var t,e},enumerable:!0,configurable:!0}),k([t({default:""})],n.prototype,"href",void 0),k([t({default:function(){return null}})],n.prototype,"item",void 0),k([t({default:function(){return null}})],n.prototype,"options",void 0),k([t({default:""})],n.prototype,"id",void 0),k([t({default:""})],n.prototype,"baseHref",void 0),k([t({default:""})],n.prototype,"activePath",void 0),k([t({default:""})],n.prototype,"navItemClass",void 0),k([t({default:""})],n.prototype,"exact",void 0),k([t({default:null})],n.prototype,"click",void 0),n=k([e],n)}(x),void 0,!1,void 0,void 0,void 0);var W={install:function t(e){t.installed||(t.installed=!0,e.component("Forbidden",P),e.component("error-summary",O),e.component("v-input",j),e.component("v-select",I),e.component("v-checkbox",$),e.component("v-button",V),e.component("v-svg",S),e.component("v-link",H),e.component("v-nav",M),e.component("link-button",A),e.component("navbar",B),e.component("nav-link",U),e.component("nav-button-group",q),e.component("nav-link-button",D))}},T=null;"undefined"!=typeof window?T=window.Vue:"undefined"!=typeof global&&(T=global.Vue),T&&T.use(W);export default W;export{V as Button,$ as CheckBox,O as ErrorSummary,P as Forbidden,j as Input,H as Link,A as LinkButton,M as Nav,q as NavButtonGroup,U as NavLink,D as NavLinkButton,B as Navbar,I as Select,S as SvgImage};
