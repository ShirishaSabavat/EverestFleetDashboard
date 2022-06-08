"use strict";(self.webpackChunkboiler_plate=self.webpackChunkboiler_plate||[]).push([[512],{50612:function(e,t,a){var n=a(1413),r=a(29439),c=a(77106),o=a(72791),i=a(4964),l=a(71217),u=a(80184);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.loadingImgPath,d=void 0===a?"assets/images/page/loading-page-1.svg":a,s=t.errorImgPath,f=void 0===s?"assets/images/page/error-page-1.svg":s,m=t.loadingMessage,p=void 0===m?"Loading page...please standby.":m,v=t.errorMessage,h=void 0===v?"Error Loading...rest assured we are working on it.":v,y=function(t){var a=(0,o.useState)("loading"),s=(0,r.Z)(a,2),m=s[0],v=s[1];return(0,u.jsxs)(u.Fragment,{children:["loading"===m&&(0,u.jsxs)("div",{className:"w-full flex flex-col justify-center items-center space-y-4",style:{fontFamily:"montserrat",height:"calc(100vh - 228px)",minHeight:450},children:[(0,u.jsx)("img",{src:d,alt:"loading!",width:"300"}),(0,u.jsxs)("div",{className:"text-eep-gray flex items-center space-x-3",children:[(0,u.jsx)(c.Z,{className:"text-purple-dark"}),(0,u.jsx)("span",{className:"font-mulish-semi-bold",children:p})]})]}),"error"===m&&(0,u.jsxs)("div",{className:"w-full flex flex-col justify-center items-center space-y-4",style:{height:"calc(100vh - 228px)",minHeight:450},children:[(0,u.jsx)("img",{src:f,alt:"loading!",width:"300"}),(0,u.jsx)("span",{className:"text-red-500 font-mulish-semi-bold",children:h}),(0,u.jsx)(i.Z,{type:"primary",onClick:function(){return l.m.push("/home/dashboard")},children:"Take me to Dashboard"})]}),(0,u.jsx)(e,(0,n.Z)((0,n.Z)({},t),{},{setPageState:v,pageState:m}))]})};return y}},70895:function(e,t,a){a.d(t,{C3:function(){return l},Bq:function(){return u},Ud:function(){return d},bt:function(){return s},Yx:function(){return f},f4:function(){return m},oj:function(){return p},QT:function(){return v},a5:function(){return h},VX:function(){return y},SM:function(){return E},aC:function(){return g},fn:function(){return b},d:function(){return k},d8:function(){return O},us:function(){return x},lO:function(){return Z},Om:function(){return T},Ai:function(){return W},zX:function(){return _},Xz:function(){return D},o0:function(){return G},kN:function(){return N},JL:function(){return w},nk:function(){return j},o:function(){return C},$p:function(){return I},vD:function(){return V},vB:function(){return B},tf:function(){return P},WG:function(){return S},yz:function(){return z}});var n=a(1413),r=a(74569),c=a(88329),o=(a(71217),{Authorization:"Token ".concat(c.Z.get("token"))}),i=function(e){var t=e.url,a=e.method,c=e.headers,i=void 0===c?{}:c;try{return r({url:"".concat("https://jarvis.everestfleet.com").concat(t),method:a,headers:(0,n.Z)((0,n.Z)({},o),i)})}catch(l){return l}},l=function(){return i({url:"/fleet/api/teamApi/",method:"GET"})},u=function(e,t){var a=e.teamIDValue,n=t.startOfWeek,r=t.endOfWeek;return i({url:"/api/hisaab_summary/".concat(a,",").concat(n,",").concat(r,"/"),method:"GET"})},d=function(e,t){var a=e.teamIDValue,n=t.startOfWeek,r=t.endOfWeek;return i({url:"/api/hisaab_driveros/".concat(a,",").concat(n,",").concat(r,"/"),method:"GET"})},s=function(e,t){var a=e.teamIDValue,n=t.startOfWeek,r=t.endOfWeek;return i({url:"/api/highos/".concat(a,",").concat(n,",").concat(r,"/"),method:"GET"})},f=function(e,t){var a=e.teamIDValue,n=t.startOfWeek,r=t.endOfWeek;return i({url:"/api/recover_amt/".concat(a,",").concat(n,",").concat(r,"/"),method:"GET"})},m=function(e,t){var a=t.startOfWeek,n=t.endOfWeek;return i({url:"/api/weekly_hisaab/".concat(e,",").concat(a,",").concat(n,"/"),method:"GET"})},p=function(e){return i({url:"/api/driver_weekly_data/".concat(e,"/"),method:"GET"})},v=function(e,t){var a=e.teamIDValue,n=t.startOfWeek,r=t.endOfWeek;return i({url:"/api/car_summary/".concat(a,",").concat(n,",").concat(r,"/"),method:"GET"})},h=function(e,t){var a=e.startOfWeek,n=e.endOfWeek,r=t.cityIDValue;return i({url:"/api/incentive/".concat(a,",").concat(n,",").concat(r,"/"),method:"GET"})},y=function(e,t){var a=e.teamIDValue,n=t.startOfWeek,r=t.endOfWeek;return i({url:"/api/car_inctive/".concat(a,",").concat(n,",").concat(r,"/"),method:"GET"})},E=function(e,t){var a=e.teamIDValue,n=t.startOfWeek,r=t.endOfWeek;return i({url:"/api/car_status_weekly/".concat(a,",").concat(n,",").concat(r,"/"),method:"GET"})},g=function(e,t){var a=e.teamIDValue,n=t.day;return i({url:"/api/car_status/".concat(a,",").concat(n,"/"),method:"GET"})},b=function(e,t,a){var n=t.teamIDValue,r=a.day;return i({url:"/api/cardaily/".concat(e,",").concat(n,",").concat(r,",").concat(r,"/"),method:"GET"})},k=function(e,t,a,n){var r=t.carNumberValue,c=a.teamIDValue,o=n.startOfWeek,l=n.endOfWeek;return i({url:"/api/carweekly/".concat(e,",").concat(r,",").concat(c,",").concat(o,",").concat(l,"/"),method:"GET"})},O=function(e,t,a){var n=t.teamIDValue,r=a.startOfWeek,c=a.endOfWeek;return i({url:"/api/cardaily/".concat(e,",").concat(n,",").concat(r,",").concat(c,"/"),method:"GET"})},x=function(e,t){var a=e.teamIDValue,n=t.day;return i({url:"/api/driver_rating/".concat(a,",").concat(n,"/"),method:"GET"})},Z=function(e,t,a){var n=t.teamIDValue,r=a.startOfWeek,c=a.endOfWeek;return i({url:"/api/driver_weekly/".concat(e,",").concat(n,",").concat(r,",").concat(c,"/"),method:"GET"})},T=function(e,t,a,n){var r=a.teamIDValue,c=n.startOfWeek,o=n.endOfWeek;return i({url:"/api/driver_daily/".concat(t,",").concat(r,",").concat(c,",").concat(o,",").concat(e,"/"),method:"GET"})},W=function(e,t){var a=t.startOfWeek,n=t.endOfWeek;return i({url:"/api/weekly_report/".concat(e,",").concat(a,",").concat(n,"/"),method:"GET"})},_=function(e,t){var a=t.startOfWeek,n=t.endOfWeek;return i({url:"/api/weekly_report/uberkm/".concat(e,",").concat(a,",").concat(n,"/"),method:"GET"})},D=function(e,t){var a=t.startOfWeek,n=t.endOfWeek;return i({url:"/api/weekly_campare/".concat(e,",").concat(a,",").concat(n,"/"),method:"GET"})},G=function(e,t){var a=t.startOfWeek,n=t.endOfWeek;return i({url:"/api/weekly_campare/uberkm/".concat(e,",").concat(a,",").concat(n,"/"),method:"GET"})},N=function(e,t){var a=e.teamIDValue,n=t.day;return i({url:"/api/dead_km/".concat(a,",").concat(n,"/"),method:"GET"})},w=function(e){var t=e.teamIDValue;return i({url:"/api/driver_report/".concat(t,"/"),method:"GET"})},j=function(e){return i({url:"/api/etm_summary/".concat(e,"/"),method:"GET"})},C=function(e){return i({url:"/api/monthly_report/".concat(e,"/"),method:"GET"})},I=function(e){return i({url:"/api/etm_cars/".concat(e,"/"),method:"GET"})},V=function(e){return i({url:"/api/driver_p/".concat(e,"/"),method:"GET"})},B=function(e){return i({url:"/api/driver_rto/".concat(e,"/"),method:"GET"})},P=function(e){return i({url:"/api/daily_deadkm/".concat(e,"/"),method:"GET"})},S=function(e,t,a){var n=e.startOfWeek,r=e.endOfWeek,c=t.teamIDValue,o=a.day1,l=a.day2,u=a.day3,d=a.day4,s=a.day5,f=a.day6,m=a.day7;return i({url:"/fleet/driver_report?start_date=".concat(n,"+&end_date=").concat(r,"+&team_id=").concat(c,"&dates%5B%5D=").concat(o,"+&dates%5B%5D=").concat(l,"+&dates%5B%5D=").concat(u,"+&dates%5B%5D=").concat(d,"+&dates%5B%5D=").concat(s,"+&dates%5B%5D=").concat(f,"+&dates%5B%5D=").concat(m,"+"),method:"GET"})},z=function(e,t,a){var n=e.startOfWeek,r=e.endOfWeek,c=t.teamIDValue,o=a.day1,l=a.day2,u=a.day3,d=a.day4,s=a.day5,f=a.day6,m=a.day7;return i({url:"/fleet/car_report?start_date=".concat(n,"+&end_date=").concat(r,"+&team_id=").concat(c,"&dates%5B%5D=").concat(o,"+&dates%5B%5D=").concat(l,"+&dates%5B%5D=").concat(u,"+&dates%5B%5D=").concat(d,"+&dates%5B%5D=").concat(s,"+&dates%5B%5D=").concat(f,"+&dates%5B%5D=").concat(m,"+"),method:"GET"})}},66871:function(e,t,a){a.d(t,{Z:function(){return b}});var n=a(4942),r=a(87462),c=a(72791),o=a(81694),i=a.n(o),l=a(41818),u=a(69077),d=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},s=function(e){var t=e.prefixCls,a=e.className,o=e.hoverable,l=void 0===o||o,s=d(e,["prefixCls","className","hoverable"]);return c.createElement(u.C,null,(function(e){var o=(0,e.getPrefixCls)("card",t),u=i()("".concat(o,"-grid"),a,(0,n.Z)({},"".concat(o,"-grid-hoverable"),l));return c.createElement("div",(0,r.Z)({},s,{className:u}))}))},f=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a},m=function(e){return c.createElement(u.C,null,(function(t){var a=t.getPrefixCls,n=e.prefixCls,o=e.className,l=e.avatar,u=e.title,d=e.description,s=f(e,["prefixCls","className","avatar","title","description"]),m=a("card",n),p=i()("".concat(m,"-meta"),o),v=l?c.createElement("div",{className:"".concat(m,"-meta-avatar")},l):null,h=u?c.createElement("div",{className:"".concat(m,"-meta-title")},u):null,y=d?c.createElement("div",{className:"".concat(m,"-meta-description")},d):null,E=h||y?c.createElement("div",{className:"".concat(m,"-meta-detail")},h,y):null;return c.createElement("div",(0,r.Z)({},s,{className:p}),v,E)}))},p=a(70141),v=a(58686),h=a(19603),y=a(1815),E=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};var g=function(e){var t,a,o,d=c.useContext(u.E_),f=d.getPrefixCls,m=d.direction,g=c.useContext(y.Z),b=e.prefixCls,k=e.className,O=e.extra,x=e.headStyle,Z=void 0===x?{}:x,T=e.bodyStyle,W=void 0===T?{}:T,_=e.title,D=e.loading,G=e.bordered,N=void 0===G||G,w=e.size,j=e.type,C=e.cover,I=e.actions,V=e.tabList,B=e.children,P=e.activeTabKey,S=e.defaultActiveTabKey,z=e.tabBarExtraContent,A=e.hoverable,K=e.tabProps,L=void 0===K?{}:K,M=E(e,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),X=f("card",b),F=0===W.padding||"0px"===W.padding?{padding:24}:void 0,H=c.createElement("div",{className:"".concat(X,"-loading-block")}),q=c.createElement("div",{className:"".concat(X,"-loading-content"),style:F},c.createElement(v.Z,{gutter:8},c.createElement(h.Z,{span:22},H)),c.createElement(v.Z,{gutter:8},c.createElement(h.Z,{span:8},H),c.createElement(h.Z,{span:15},H)),c.createElement(v.Z,{gutter:8},c.createElement(h.Z,{span:6},H),c.createElement(h.Z,{span:18},H)),c.createElement(v.Z,{gutter:8},c.createElement(h.Z,{span:13},H),c.createElement(h.Z,{span:9},H)),c.createElement(v.Z,{gutter:8},c.createElement(h.Z,{span:4},H),c.createElement(h.Z,{span:3},H),c.createElement(h.Z,{span:16},H))),J=void 0!==P,Q=(0,r.Z)((0,r.Z)({},L),(t={},(0,n.Z)(t,J?"activeKey":"defaultActiveKey",J?P:S),(0,n.Z)(t,"tabBarExtraContent",z),t)),U=V&&V.length?c.createElement(p.Z,(0,r.Z)({size:"large"},Q,{className:"".concat(X,"-head-tabs"),onChange:function(t){var a;null===(a=e.onTabChange)||void 0===a||a.call(e,t)}}),V.map((function(e){return c.createElement(p.Z.TabPane,{tab:e.tab,disabled:e.disabled,key:e.key})}))):null;(_||O||U)&&(o=c.createElement("div",{className:"".concat(X,"-head"),style:Z},c.createElement("div",{className:"".concat(X,"-head-wrapper")},_&&c.createElement("div",{className:"".concat(X,"-head-title")},_),O&&c.createElement("div",{className:"".concat(X,"-extra")},O)),U));var Y=C?c.createElement("div",{className:"".concat(X,"-cover")},C):null,$=c.createElement("div",{className:"".concat(X,"-body"),style:W},D?q:B),R=I&&I.length?c.createElement("ul",{className:"".concat(X,"-actions")},function(e){return e.map((function(t,a){return c.createElement("li",{style:{width:"".concat(100/e.length,"%")},key:"action-".concat(a)},c.createElement("span",null,t))}))}(I)):null,ee=(0,l.Z)(M,["onTabChange"]),te=w||g,ae=i()(X,(a={},(0,n.Z)(a,"".concat(X,"-loading"),D),(0,n.Z)(a,"".concat(X,"-bordered"),N),(0,n.Z)(a,"".concat(X,"-hoverable"),A),(0,n.Z)(a,"".concat(X,"-contain-grid"),function(){var t;return c.Children.forEach(e.children,(function(e){e&&e.type&&e.type===s&&(t=!0)})),t}()),(0,n.Z)(a,"".concat(X,"-contain-tabs"),V&&V.length),(0,n.Z)(a,"".concat(X,"-").concat(te),te),(0,n.Z)(a,"".concat(X,"-type-").concat(j),!!j),(0,n.Z)(a,"".concat(X,"-rtl"),"rtl"===m),a),k);return c.createElement("div",(0,r.Z)({},ee,{className:ae}),o,Y,$,R)};g.Grid=s,g.Meta=m;var b=g}}]);
//# sourceMappingURL=512.2d199b22.chunk.js.map