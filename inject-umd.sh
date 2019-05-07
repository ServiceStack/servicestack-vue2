sed -i 's/})(function/    else if (typeof window != "undefined") factory(window.require||function(){}, window["\@servicestack\/vue"]={});\n})(function/' dist/servicestack-vue.umd.js
sed -i 's/require("vue")/require("vue") || { default: window.Vue }/' dist/servicestack-vue.umd.js
sed -i 's/require("vue-property-decorator")/require("vue-property-decorator") || window["vue-property-decorator"]/' dist/servicestack-vue.umd.js
sed -i 's/require("\@servicestack\/client")/require("\@servicestack\/client") || window["\@servicestack\/client"]/' dist/servicestack-vue.umd.js
