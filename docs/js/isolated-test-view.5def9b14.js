(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["isolated-test-view"],{"24a7":function(e,t,n){},cafe:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"test-view"},[n("vue-cal",{staticClass:"ml-2 mr-1 vuecal--blue-theme",attrs:{"show-all-day-events":"","disable-views":["years","year"],"editable-events":"",events:e.events,"split-days":e.daySplits,"on-event-create":function(){return!0},"min-split-width":150,"sticky-split-labels":""},on:{"event-drag-create":function(t){return e.log(t)}},scopedSlots:e._u([{key:"split-label",fn:function(t){var s=t.split;t.view;return[n("v-icon",{attrs:{color:s.color}},[e._v("person")]),n("strong",{style:"color: "+s.color},[e._v(e._s(s.label))])]}}])})],1)},a=[],l=n("03ad"),o=new Date,r={components:{VueCal:l["a"]},data:function(){return{selectedDate:o,view:"week",events:[{start:new Date(new Date(o).setHours(1,0,0)),end:new Date(new Date(o).setHours(4,0,0)),allDay:!0,title:"Event 1",split:2},{start:new Date(new Date(o).setHours(1,0,0)),end:new Date(new Date(o).setHours(4,0,0)),title:"Event 2",split:1},{start:new Date(new Date(o).setHours(3,0,0)),end:new Date(new Date(o).setHours(5,0,0)),title:"Event 3",split:2}],daySplits:[{label:"John",color:"blue"},{label:"Tom",color:"green"},{label:"Kate",color:"orange"},{label:"Jess",color:"red"}]}},methods:{log:function(){var e;(e=console).log.apply(e,arguments)}}},i=r,c=(n("f68d"),n("2877")),u=Object(c["a"])(i,s,a,!1,null,null,null);t["default"]=u.exports},f68d:function(e,t,n){"use strict";var s=n("24a7"),a=n.n(s);a.a}}]);