webpackJsonp([8],{FP3a:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Dd8w"),i=s.n(a),n=s("NYxO"),o=s("Q+lb"),r={data:function(){return{isEdit:!1,btnText:"编辑",adviceTabList:o.b.get("home_adviceTabList")}},props:["tabIndex"],computed:i()({},Object(n.b)(["myTabList"])),methods:{edit:function(){this.isEdit?(this.btnText="编辑",this.isEdit=!1):(this.btnText="完成",this.isEdit=!0)},tabSelect:function(t){this.$store.state.home.selectTabIndex=t,this.$store.state.home.tabSlide=!0,this.$emit("closeChannel"),this.$router.push("/home")}},mounted:function(){this.$store.dispatch("home/getAdviceTab")}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"channelWrap"},[s("mu-button",{attrs:{icon:""},on:{click:function(e){t.$emit("closeChannel")}}},[s("mu-icon",{attrs:{value:":icon-close"}})],1),t._v(" "),s("div",{staticClass:"df-sb bar"},[t._m(0),t._v(" "),s("div",{staticClass:"edit",on:{click:t.edit}},[t._v(t._s(t.btnText))])]),t._v(" "),s("div",{staticClass:"tabs"},t._l(t.myTabList,function(e,a){return s("div",{key:a,class:{tabChannel:!0,selectItemBefore:t.tabIndex>a,selectItem:t.tabIndex===a},on:{click:function(s){t.tabSelect(e.id)}}},[s("span",[t._v(t._s(e.name))]),t._v(" "),s("mu-icon",{directives:[{name:"show",rawName:"v-show",value:t.isEdit,expression:"isEdit"}],staticClass:"closeIcon",attrs:{value:":icon-close",size:"14"},on:{click:function(e){t.myTabList.splice(a,1)}}})],1)})),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"df-sb tabs"},t._l(t.adviceTabList,function(e,a){return s("div",{key:a,staticClass:"tabChannel",on:{click:function(s){t.myTabList.push(e)}}},[t._v("\n\t\t\t"+t._s("+"+e.name)+"\n\t\t")])}))],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"title"},[this._v("我的频道")]),this._v(" "),e("span",{staticClass:"hit"},[this._v("点击进入频道")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"bar"},[e("span",{staticClass:"title"},[this._v("频道推荐")]),this._v(" "),e("span",{staticClass:"hit"},[this._v("点击添加频道")])])}]};var c={components:{channel:s("VU/8")(r,l,!1,function(t){s("GTSa")},"data-v-6e3733de",null).exports},data:function(){return{loading:!1,loadResult:!1,loadMore:!1,refreshing:!1,showChannel:!1,lastReadNewNum:0,showUpdateNum:!1,watchDataChange:!1}},computed:i()({itemList:function(){return this.$store.state.home.homeResult},selectChange:function(){return this.$store.state.home.selectTabIndex},refresh:function(){return this.$store.state.home.refresh}},Object(n.b)(["myTabList"])),watch:{itemList:function(t,e){var s=this;this.watchDataChange&&(this.lastReadNewNum=t.length-e.length,this.lastReadNewNum>0&&(this.showUpdateNum=!0,setTimeout(function(){s.showUpdateNum=!1,s.watchDataChange=!1},800)))},refresh:function(t,e){t&&(this.loadData(this.$store.state.home.selectTabIndex),this.$store.state.home.refresh=!1)},selectChange:function(){if(this.$store.state.home.tabSlide){var t=this.$refs["tabItem"+this.$store.state.home.selectTabIndex][0].$el,e=this.$refs.tabList.$el,s=t.offsetLeft,a=e.clientWidth;e.scrollLeft=s>a?s-a+t.clientWidth:0,this.$store.state.home.tabSlide=!1}}},methods:{tabChange:function(){this.watchDataChange=!1,this.loadData(this.$store.state.home.selectTabIndex)},loadData:function(t){var e=this;this.loading=!0,this.loadResult=!1,this.$store.state.user.refreshSearcHit=!0,this.$store.dispatch("home/getNews",{typeId:t}),setTimeout(function(){e.loading=!1,e.loadResult=!0},500)},loadMoreData:function(){var t=this;this.loadMore=!0,setTimeout(function(){t.loadMore=!1,t.$store.dispatch("home/loadMore",{typeId:t.$store.state.home.selectTabIndex})},1e3)},refreshData:function(){var t=this;this.refreshing=!0,this.watchDataChange=!0,this.$refs["newsTab"+this.$store.state.home.selectTabIndex][0].scrollTop=0,setTimeout(function(){t.refreshing=!1,t.$store.dispatch("home/refreshData",{typeId:t.$store.state.home.selectTabIndex})},1e3)}},mounted:function(){this.loadData(this.$store.state.home.selectTabIndex)}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"resultWrap"},[s("mu-tabs",{ref:"tabList",staticClass:"tabList-wrap",attrs:{value:t.$store.state.home.selectTabIndex,"indicator-color":"white"},on:{"update:value":function(e){t.$set(t.$store.state.home,"selectTabIndex",e)},change:t.tabChange}},t._l(t.myTabList,function(e){return s("mu-tab",{key:e.id,ref:"tabItem"+e.id,refInFor:!0},[t._v(t._s(e.name))])})),t._v(" "),s("div",{staticClass:"tabAll df-c",on:{click:function(e){t.showChannel=!0}}},[s("mu-icon",{attrs:{value:":icon-menu",size:"24"}})],1),t._v(" "),s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"},{name:"show",rawName:"v-show",value:!t.loadResult,expression:"!loadResult"}],staticClass:"loadingCss",attrs:{"data-mu-loading-size":"20"}}),t._v(" "),t._l(t.myTabList,function(e){return e.id===t.$store.state.home.selectTabIndex?s("div",{directives:[{name:"show",rawName:"v-show",value:t.loadResult,expression:"loadResult"}],key:e.name,ref:"newsTab"+e.id,refInFor:!0,staticClass:"tabContainer"},[s("mu-load-more",{attrs:{loading:t.loadMore,refreshing:t.refreshing,"loading-text":"正在推荐新内容"},on:{load:t.loadMoreData,refresh:t.refreshData}},[t.showUpdateNum?s("div",{staticClass:"df-c updateHit"},[t._v("今日头条推荐引擎有"+t._s(t.lastReadNewNum)+"条更新")]):t._e(),t._v(" "),t._l(t.itemList,function(e,a){return s("div",{key:e.id},[a>0&&a===t.lastReadNewNum?s("div",{staticClass:"df-c readReadBar",on:{click:t.refreshData}},[s("span",[t._v("刚才看到这里 点击刷新")]),t._v(" "),s("mu-icon",{attrs:{value:":icon-fresh"}})],1):t._e(),t._v(" "),s("NewsInfo",{staticClass:"newsTitle",attrs:{data:e},nativeOn:{click:function(s){t.$router.push({name:"NewsDetail",params:{newsId:e.id,title:e.title}})}}})],1)})],2)],1):t._e()}),t._v(" "),s("transition",{attrs:{"enter-active-class":"animated slideInUp","leave-active-class":"animated slideOutDown"}},[s("channel",{directives:[{name:"show",rawName:"v-show",value:t.showChannel,expression:"showChannel"}],staticClass:"channelForm",attrs:{tabIndex:t.$store.state.home.selectTabIndex},on:{closeChannel:function(e){t.showChannel=!1}}})],1)],2)},staticRenderFns:[]};var d=s("VU/8")(c,h,!1,function(t){s("sK2E")},"data-v-47875142",null);e.default=d.exports},GTSa:function(t,e){},sK2E:function(t,e){}});
//# sourceMappingURL=8.976cefce68227571de07.js.map