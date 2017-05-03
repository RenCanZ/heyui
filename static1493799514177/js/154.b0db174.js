webpackJsonp([154],{572:function(t,v,_){var e=_(0)(_(629),_(913),null,null);e.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/component/data/plugin/daterange.vue",e.esModule&&Object.keys(e.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),e.options.functional&&console.error("[vue-loader] daterange.vue: functional components are not supported with templates, they should use render functions."),t.exports=e.exports},629:function(t,v,_){"use strict";function e(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(v,"__esModule",{value:!0});var a=_(2),d=e(a),r=_(39),n=e(r);v.default={data:function(){return(0,d.default)({value1:{},value2:{},value3:{},value4:{},value7:{},value8:{},param7:{minuteStep:4},value6:{},param6:{hours:function t(){for(var t=[],v=9;v<=20;v++)t.push(v);return t},minutes:function t(v){var t=[];return v<12?t.push(7,15,23,17,34,47,58):t.push(1,3,34,45,46,47,52),t}},value5:{},param2:{paramName:{start:"min",end:"max"}},param3:{start:(0,n.default)().add(-1,n.default.DAY),end:(0,n.default)().add(46,n.default.DAY)}},"param2",{shortcuts:[{title:"近三天",value:function(){return{start:(0,n.default)().add(-3,n.default.DAY),end:(0,n.default)()}}}]})},methods:{changeParam:function(){this.param.start="2017-02-01 12:34",this.param.end="2017-06-03 12:34"}}}},913:function(t,v,_){t.exports={render:function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",{staticClass:"doc"},[_("h2",[t._v("DateTimePicker 日期范围控件")]),t._v(" "),_("h3",[t._v("普通选择日期范围控件")]),t._v(" "),_("p",[t._v("数据默认使用{start,end}的对象，同时也可以自定义参数。详情请参考"),_("router-link",{attrs:{to:"/guide/config"}},[t._v("全局配置")])],1),t._v(" "),_("div",[_("example",{attrs:{demo:"dataplugins/daterangepicker1"}})],1),t._v(" "),_("h3",[t._v("日期控件单独选择开始结束")]),t._v(" "),t._m(0),t._v(" "),_("div",[_("example",{attrs:{demo:"dataplugins/daterangepicker2"}})],1),t._v(" "),_("h3",[t._v("选择日期时间范围控件")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),_("div",[_("example",{attrs:{demo:"dataplugins/daterangepicker3"}})],1),t._v(" "),_("h3",[t._v("日期时间范围禁用")]),t._v(" "),_("div",[_("example",{attrs:{demo:"dataplugins/daterangepicker4"}})],1),t._v(" "),_("h3",[t._v("控件开始结束范围控制")]),t._v(" "),_("div",[_("example",{attrs:{demo:"dataplugins/daterangepicker5"}})],1),t._v(" "),_("h3",[t._v("快捷方式")]),t._v(" "),_("p",[t._v("快捷方式定义与日期控件一致，同时也可以使用全局配置的方式使用。")]),t._v(" "),_("div",[_("example",{attrs:{demo:"dataplugins/daterangepicker6"}})],1),t._v(" "),_("h3",[t._v("DatePicker 参数")]),t._v(" "),t._m(3),t._v(" "),_("h3",[t._v("option 配置")]),t._v(" "),t._m(4)])},staticRenderFns:[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("p",[t._v("针对一些可选开始或者结束日期的需求，这里可以选择添加"),_("code",[t._v("separate")]),t._v("属性控制可以单独选择。")])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("p",[t._v("由于日期时间控件的点击比较深，所以默认这里使用了"),_("code",[t._v("separate")]),t._v("属性。如果有更合适的方案，希望在github上为我们"),_("a",{attrs:{href:"https://github.com/heyui/heyui/issues/new",target:"_blank"}},[t._v("提建议")]),t._v("。")])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("p",[t._v("此外，"),_("code",[t._v("datetime")]),t._v("选择器的配置同样适用于范围选择控件。")])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("table",{staticClass:"table"},[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选值")]),t._v(" "),_("th",[t._v("默认值")])]),t._v(" "),_("tr",[_("td",[t._v("disabled")]),t._v(" "),_("td",[t._v("是否禁用")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("false")])]),t._v(" "),_("tr",[_("td",[t._v("type")]),t._v(" "),_("td",[t._v("类型")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("date")]),t._v(" "),_("td",[t._v("date, datetime, datehour")])]),t._v(" "),_("tr",[_("td",[t._v("option")]),t._v(" "),_("td",[t._v("配置项，详细参见下面的option说明")]),t._v(" "),_("td",[t._v("Object")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td")]),t._v(" "),_("tr",[_("td",[t._v("format")]),t._v(" "),_("td",[t._v("自定义数据的格式")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("hasSeconds")]),t._v(" "),_("td",[t._v("当选择日期时间时，是否自动格式化到秒")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("false")])]),t._v(" "),_("tr",[_("td",[t._v("noBorder")]),t._v(" "),_("td",[t._v("是否有边框，适用于文字的下拉选择")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("false")])]),t._v(" "),_("tr",[_("td",[t._v("placeholder")]),t._v(" "),_("td",[t._v("展示默认提示语")]),t._v(" "),_("td",[t._v("String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("请选择")])]),t._v(" "),_("tr",[_("td",[t._v("separate")]),t._v(" "),_("td",[t._v("是否单独选择开始结束时间")]),t._v(" "),_("td",[t._v("Boolean")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("false")])])])},function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("table",{staticClass:"table"},[_("tr",[_("th",[t._v("参数")]),t._v(" "),_("th",[t._v("说明")]),t._v(" "),_("th",[t._v("类型")]),t._v(" "),_("th",[t._v("可选值")]),t._v(" "),_("th",[t._v("默认值")])]),t._v(" "),_("tr",[_("td",[t._v("start")]),t._v(" "),_("td",[t._v("开始时间")]),t._v(" "),_("td",[t._v("Function, Object, String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("end")]),t._v(" "),_("td",[t._v("结束时间")]),t._v(" "),_("td",[t._v("Function, Object, String")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("disabled")]),t._v(" "),_("td",[t._v("不可选日期配置")]),t._v(" "),_("td",[t._v("Function")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("shortcuts")]),t._v(" "),_("td",[t._v("自定义快捷方式")]),t._v(" "),_("td",[t._v("[String, Object]")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("minuteStep")]),t._v(" "),_("td",[t._v("分钟的间隔")]),t._v(" "),_("td",[t._v("Number")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("5")])]),t._v(" "),_("tr",[_("td",[t._v("hours")]),t._v(" "),_("td",[t._v("自定义可选的小时")]),t._v(" "),_("td",[t._v("Function")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])]),t._v(" "),_("tr",[_("td",[t._v("minutes")]),t._v(" "),_("td",[t._v("自定义可选的分钟")]),t._v(" "),_("td",[t._v("Function")]),t._v(" "),_("td",[t._v("-")]),t._v(" "),_("td",[t._v("-")])])])}]},t.exports.render._withStripped=!0}});