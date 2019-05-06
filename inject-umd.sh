sed -i 's/})(function/    else if (typeof window != "undefined") factory(window.require||function(){}, window["\@servicestack\/vue"]={});\n})(function/' dist/servicestack-vue.umd.js
