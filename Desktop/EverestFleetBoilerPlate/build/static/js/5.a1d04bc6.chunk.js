"use strict";(self.webpackChunkboiler_plate=self.webpackChunkboiler_plate||[]).push([[5],{50612:function(e,t,n){var r=n(1413),o=n(29439),a=n(77106),i=n(72791),c=n(4964),d=n(71217),l=n(80184);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.loadingImgPath,u=void 0===n?"assets/images/page/loading-page-1.svg":n,s=t.errorImgPath,p=void 0===s?"assets/images/page/error-page-1.svg":s,f=t.loadingMessage,v=void 0===f?"Loading page...please standby.":f,m=t.errorMessage,h=void 0===m?"Error Loading...rest assured we are working on it.":m,x=function(t){var n=(0,i.useState)("loading"),s=(0,o.Z)(n,2),f=s[0],m=s[1];return(0,l.jsxs)(l.Fragment,{children:["loading"===f&&(0,l.jsxs)("div",{className:"w-full flex flex-col justify-center items-center space-y-4",style:{fontFamily:"montserrat",height:"calc(100vh - 228px)",minHeight:450},children:[(0,l.jsx)("img",{src:u,alt:"loading!",width:"300"}),(0,l.jsxs)("div",{className:"text-eep-gray flex items-center space-x-3",children:[(0,l.jsx)(a.Z,{className:"text-purple-dark"}),(0,l.jsx)("span",{className:"font-mulish-semi-bold",children:v})]})]}),"error"===f&&(0,l.jsxs)("div",{className:"w-full flex flex-col justify-center items-center space-y-4",style:{height:"calc(100vh - 228px)",minHeight:450},children:[(0,l.jsx)("img",{src:p,alt:"loading!",width:"300"}),(0,l.jsx)("span",{className:"text-red-500 font-mulish-semi-bold",children:h}),(0,l.jsx)(c.Z,{type:"primary",onClick:function(){return d.m.push("/home/dashboard")},children:"Take me to Dashboard"})]}),(0,l.jsx)(e,(0,r.Z)((0,r.Z)({},t),{},{setPageState:m,pageState:f}))]})};return x}},61005:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r=n(54270),o=n(15861),a=n(29439),i=n(87757),c=n.n(i),d=n(19333),l=n(20135),u=n(37382),s=n(4964),p=n(58686),f=n(19603),v=n(33924),m=n(72791),h=n(70895),x=n(29921),y=n(96352),k=n(72426),g=n.n(k),b=n(50612),F=n(61753),N=n(80184),C=new Promise((function(e){setTimeout((function(){return e()}),3e3)})),D=function(e){return"ND"===(null===e||void 0===e?void 0:e.toUpperCase())?"#FC2109":"R"===(null===e||void 0===e?void 0:e.toUpperCase())?"#BEBE1F":"FP"===(null===e||void 0===e?void 0:e.toUpperCase())?"#8175ff":"B2B"===(null===e||void 0===e?void 0:e.toUpperCase())?"#86A1A4":"SERVICING"===(null===e||void 0===e?void 0:e.toUpperCase())||"RN"===(null===e||void 0===e?void 0:e.toUpperCase())?"#37BDC8":"CALL FOR GPS"===(null===e||void 0===e?void 0:e.toUpperCase())||"I"===(null===e||void 0===e?void 0:e.toUpperCase())?"#73A235":"STICKERING"===(null===e||void 0===e?void 0:e.toUpperCase())||"P"===(null===e||void 0===e?void 0:e.toUpperCase())?"#A68CD9":"FAST TAG"===(null===e||void 0===e?void 0:e.toUpperCase())||"BD"===(null===e||void 0===e?void 0:e.toUpperCase())?"#FC8B09":"#333333"},j=function(e){return"ND"===(null===e||void 0===e?void 0:e.toUpperCase())?"#FEF0F5":"R"===(null===e||void 0===e?void 0:e.toUpperCase())?"#F5F8CE":"FP"===(null===e||void 0===e?void 0:e.toUpperCase())?"#e3e0ff":"B2B"===(null===e||void 0===e?void 0:e.toUpperCase())?"#F2F2F2":"SERVICING"===(null===e||void 0===e?void 0:e.toUpperCase())||"RN"===(null===e||void 0===e?void 0:e.toUpperCase())?"#E5F5F4":"CALL FOR GPS"===(null===e||void 0===e?void 0:e.toUpperCase())||"I"===(null===e||void 0===e?void 0:e.toUpperCase())?"#F0FBE2":"STICKERING"===(null===e||void 0===e?void 0:e.toUpperCase())||"P"===(null===e||void 0===e?void 0:e.toUpperCase())?"#ECE2FF":"FAST TAG"===(null===e||void 0===e?void 0:e.toUpperCase())||"BD"===(null===e||void 0===e?void 0:e.toUpperCase())?"#FFE9D1":void 0},_=[{title:"Car No.",dataIndex:"carNo",key:"carNo",align:"center",render:function(e){return{props:{style:{fontStyle:"Montserrat",color:"#86A1A4",fontWeight:"600",fontSize:"11px"}},children:(0,N.jsx)("div",{children:e})}}},{title:"Name",dataIndex:"name",key:"name",align:"center",render:function(e){return{props:{style:{fontStyle:"Montserrat",color:"#333333",fontWeight:"600",fontSize:"11px"}},children:(0,N.jsx)("div",{children:e})}}},{title:"Trips",children:[{title:"Mon",dataIndex:"mon",key:"mon",align:"center",render:function(e){return{props:{style:{fontStyle:"Montserrat",color:D(e),fontWeight:"600",background:"#F1FAFA",fontSize:"10px"}},children:(0,N.jsx)("div",{className:"rounded-xl px-2 py-1",style:{backgroundColor:j(e)},children:e})}}},{title:"Tue",dataIndex:"tue",key:"tue",align:"center",render:function(e){return{props:{style:{fontStyle:"Montserrat",color:D(e),fontWeight:"600",background:"#F1FAFA",fontSize:"10px"}},children:(0,N.jsx)("div",{className:"rounded-xl px-2 py-1",style:{backgroundColor:j(e)},children:e})}}},{title:"Wed",dataIndex:"wed",key:"wed",align:"center",render:function(e){return{props:{style:{fontStyle:"Montserrat",color:D(e),fontWeight:"600",background:"#F1FAFA",fontSize:"10px"}},children:(0,N.jsx)("div",{className:"rounded-xl px-2 py-1",style:{backgroundColor:j(e)},children:e})}}},{title:"Thu",dataIndex:"thu",key:"thu",align:"center",render:function(e){return{props:{style:{fontStyle:"Montserrat",color:D(e),fontWeight:"600",background:"#F1FAFA",fontSize:"10px"}},children:(0,N.jsx)("div",{className:"rounded-xl px-2 py-1",style:{backgroundColor:j(e)},children:e})}}},{title:"Fri",dataIndex:"fri",key:"fri",align:"center",render:function(e){return{props:{style:{fontStyle:"Montserrat",color:D(e),fontWeight:"600",background:"#F1FAFA",fontSize:"10px"}},children:(0,N.jsx)("div",{className:"rounded-xl px-2 py-1",style:{backgroundColor:j(e)},children:e})}}},{title:"Sat",dataIndex:"sat",key:"sat",align:"center",render:function(e){return{props:{style:{fontStyle:"Montserrat",color:D(e),fontWeight:"600",background:"#F1FAFA",fontSize:"10px"}},children:(0,N.jsx)("div",{className:"rounded-xl px-2 py-1",style:{backgroundColor:j(e)},children:e})}}},{title:"Sun",dataIndex:"sun",key:"sun",align:"center",render:function(e){return{props:{style:{fontStyle:"Montserrat",color:D(e),fontWeight:"600",background:"#F1FAFA",fontSize:"10px"}},children:(0,N.jsx)("div",{className:"rounded-xl px-2 py-1",style:{backgroundColor:j(e)},children:e})}}}]},{title:"Total Trips",dataIndex:"totalTrips",key:"totalTrips",align:"center",render:function(e){return{props:{style:{fontStyle:"Montserrat",color:"#333333",fontWeight:"600",fontSize:"12px"}},children:(0,N.jsx)("div",{children:e})}}},{title:"Status",dataIndex:"status",key:"status",align:"center",render:function(e){return{props:{style:{color:D(e),padding:"6px",fontWeight:"600",fontSize:"10px"}},children:(0,N.jsx)("div",{className:"rounded-xl px-2 py-1",style:{backgroundColor:j(e)},children:e})}}}],W=(0,b.Z)((function(e){var t=e.pageState,n=e.setPageState,r=(0,x.D)().teamID,i=(0,y.m)().calenderDate,k=(0,m.useState)([]),b=(0,a.Z)(k,2),D=b[0],j=b[1],W=(0,m.useState)(null),T=(0,a.Z)(W,2),E=T[0],O=T[1],S=(0,m.useState)(null),I=(0,a.Z)(S,2),G=I[0],A=I[1],B=(0,m.useState)(null),U=(0,a.Z)(B,2),w=U[0],Z=U[1],M=(0,m.useState)(!1),Y=(0,a.Z)(M,2),V=Y[0],z=Y[1],R=(0,m.useState)({status:"Car Not Driven",shortForm:"ND"}),P=(0,a.Z)(R,2),L=P[0],K=P[1],X=function(){var e=(0,o.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C;case 3:n("loaded"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),n("error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();(0,m.useEffect)((function(){X();var e={day1:g()(i.startOfWeek).format("YYYY-MM-DD"),day2:g()(i.startOfWeek).add(1,"days").format("YYYY-MM-DD"),day3:g()(i.startOfWeek).add(2,"days").format("YYYY-MM-DD"),day4:g()(i.startOfWeek).add(3,"days").format("YYYY-MM-DD"),day5:g()(i.startOfWeek).add(4,"days").format("YYYY-MM-DD"),day6:g()(i.startOfWeek).add(5,"days").format("YYYY-MM-DD"),day7:g()(i.endOfWeek).format("YYYY-MM-DD")};(0,h.yz)(i,r,e).then((function(e){j(e.data)})).catch((function(e){console.log("err",e)}))}),[r,i]);var q=(0,N.jsx)(d.Z,{children:[{status:"Car Driven",shortForm:0},{status:"Car Not Driven",shortForm:"ND"},{status:"Repair",shortForm:"R"},{status:"Insurance",shortForm:"I"},{status:"Breakdown",shortForm:"BD"},{status:"B2B Cars",shortForm:"B2B"},{status:"Rental",shortForm:"RN"},{status:"FP-Fitness Parking",shortForm:"FP"},{status:"Parking",shortForm:"P"}].map((function(e,t){return(0,N.jsx)(d.Z.Item,{onClick:function(){K(e)},children:(0,N.jsx)("p",{className:"text-[#333333] text-xs mt-0.5 mb-0 font-mulish-bold",children:null===e||void 0===e?void 0:e.status})},t.toString())}))}),H=D.filter((function(e){var t,n,r,o,a,i,c,d=0;"Car Driven"===(null===L||void 0===L?void 0:L.status)?(Number(null===e||void 0===e?void 0:e.day1_trips)>0&&(d+=1),Number(null===e||void 0===e?void 0:e.day2_trips)>0&&(d+=1),Number(null===e||void 0===e?void 0:e.day3_trips)>0&&(d+=1),Number(null===e||void 0===e?void 0:e.day4_trips)>0&&(d+=1),Number(null===e||void 0===e?void 0:e.day5_trips)>0&&(d+=1),Number(null===e||void 0===e?void 0:e.day6_trips)>0&&(d+=1),Number(null===e||void 0===e?void 0:e.day7_trips)>0&&(d+=1)):((null===e||void 0===e||null===(t=e.day1_trips)||void 0===t?void 0:t.toUpperCase())===(null===L||void 0===L?void 0:L.shortForm)&&(d+=1),(null===e||void 0===e||null===(n=e.day2_trips)||void 0===n?void 0:n.toUpperCase())===(null===L||void 0===L?void 0:L.shortForm)&&(d+=1),(null===e||void 0===e||null===(r=e.day3_trips)||void 0===r?void 0:r.toUpperCase())===(null===L||void 0===L?void 0:L.shortForm)&&(d+=1),(null===e||void 0===e||null===(o=e.day4_trips)||void 0===o?void 0:o.toUpperCase())===(null===L||void 0===L?void 0:L.shortForm)&&(d+=1),(null===e||void 0===e||null===(a=e.day5_trips)||void 0===a?void 0:a.toUpperCase())===(null===L||void 0===L?void 0:L.shortForm)&&(d+=1),(null===e||void 0===e||null===(i=e.day6_trips)||void 0===i?void 0:i.toUpperCase())===(null===L||void 0===L?void 0:L.shortForm)&&(d+=1),(null===e||void 0===e||null===(c=e.day7_trips)||void 0===c?void 0:c.toUpperCase())===(null===L||void 0===L?void 0:L.shortForm)&&(d+=1));var l=e.total_trips;return E&&G&&w&&Number(l)>=Number(E)&&Number(l)<=Number(G)&&Number(d)===Number(w)||E&&G&&!w&&Number(l)>=Number(E)&&Number(l)<=Number(G)?e:(E||G||!w||Number(d)!==Number(w))&&(E||G||w)?void 0:e})).sort((function(e,t){return Number(e.total_trips)>Number(t.total_trips)?1:-1})).map((function(e,t){var n,r,o=null!==e&&void 0!==e&&e.name?null===e||void 0===e||null===(n=e.name)||void 0===n?void 0:n.split(",").join(" / "):"",a=null!==e&&void 0!==e&&e.status?null===e||void 0===e||null===(r=e.status)||void 0===r?void 0:r.split("_").join(" "):"";return{key:t,carNo:null===e||void 0===e?void 0:e.car_number,name:o,mon:null===e||void 0===e?void 0:e.day1_trips,tue:null===e||void 0===e?void 0:e.day2_trips,wed:null===e||void 0===e?void 0:e.day3_trips,thu:null===e||void 0===e?void 0:e.day4_trips,fri:null===e||void 0===e?void 0:e.day5_trips,sat:null===e||void 0===e?void 0:e.day6_trips,sun:null===e||void 0===e?void 0:e.day7_trips,totalTrips:null===e||void 0===e?void 0:e.total_trips,status:a}}));return"loading"===t||"error"===t?null:(0,N.jsxs)("div",{className:"row",children:[(0,N.jsx)("div",{className:"col-12 mb-4",children:(0,N.jsx)("div",{className:"border-solid rounded-md bg-[#FFFFFF] py-3 px-4",children:(0,N.jsxs)("div",{className:"row",children:[(0,N.jsxs)("div",{className:"col-3 mr-3",children:[(0,N.jsx)("p",{className:"text-xs m-1 text-[rgb(51,51,51)] font-semibold",children:"Total Trips"}),(0,N.jsx)(l.Z.Group,{size:"medium",children:(0,N.jsxs)("div",{className:" d-flex flex-row",children:[(0,N.jsx)(l.Z,{placeholder:"from",suffix:(0,N.jsx)("button",{type:"button",onClick:function(){return O("")},className:"border-solid px-0.5 rounded-full border-1 hover:bg-[#E5F5F4] border-[#e7eaea] text-[#acc5c8] m-0",children:"x"}),onChange:function(e){return function(e){O(e)}(e.target.value)},value:E,style:{marginRight:"10px"}}),"_",(0,N.jsx)(l.Z,{suffix:(0,N.jsx)("button",{type:"button",onClick:function(){return A("")},className:"border-solid px-0.5 rounded-full border-1 hover:bg-[#E5F5F4] border-[#e7eaea] text-[#acc5c8] m-0",children:"x"}),onChange:function(e){return function(e){A(e)}(e.target.value)},value:G,placeholder:"to",style:{marginLeft:"10px"}})]})})]}),(0,N.jsxs)("div",{className:"col-3",children:[(0,N.jsx)("p",{className:"text-xs m-1 text-[#333333] font-semibold",children:"Car Status"}),(0,N.jsx)(u.Z,{onClick:function(){return z(!V)},overlay:!0===V?q:"",children:(0,N.jsx)(s.Z,{className:"w-100",style:{width:"240px",fontSize:"10px",color:"#86A1A4"},children:(0,N.jsxs)(p.Z,{children:[(0,N.jsx)(f.Z,{span:22,className:"d-flex flex-row justify-content-start",children:(0,N.jsx)("span",{className:"text-xs",children:null===L||void 0===L?void 0:L.status})}),(0,N.jsx)(f.Z,{span:2,className:"text-end",children:(0,N.jsx)(F.Z,{className:"text-end",style:{fontSize:"12px",color:"#86A1A4"}})})]})})})]}),(0,N.jsx)("div",{className:"col-2 mt-4",children:(0,N.jsx)(l.Z,{size:"medium",suffix:(0,N.jsx)("button",{type:"button",onClick:function(){return Z("")},className:"border-solid px-0.5 rounded-full border-1 hover:bg-[#E5F5F4] border-[#e7eaea] text-[#acc5c8] m-0",children:"x"}),onChange:function(e){return function(e){Z(e)}(e.target.value)},value:w,placeholder:"Enter Days",style:{width:"140px"}})})]})})}),(0,N.jsx)("div",{className:"col-12",children:(0,N.jsx)(v.Z,{columns:_,dataSource:H,pagination:!1})})]})})),T=function(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(r.q,{title:"Dead KM Report"}),(0,N.jsxs)("div",{style:{fontFamily:"montserrat"},className:"flex flex-col pl-3 pr-10 mb-4",children:[(0,N.jsx)("div",{className:"mt-5 mb-3",children:(0,N.jsx)("span",{className:"font-bold text-[#333333] text-2xl",children:"Car Daily Report"})}),(0,N.jsx)(W,{})]})]})}},70895:function(e,t,n){n.d(t,{C3:function(){return d},Bq:function(){return l},Ud:function(){return u},bt:function(){return s},Yx:function(){return p},f4:function(){return f},oj:function(){return v},QT:function(){return m},a5:function(){return h},VX:function(){return x},SM:function(){return y},aC:function(){return k},fn:function(){return g},d:function(){return b},d8:function(){return F},us:function(){return N},lO:function(){return C},Om:function(){return D},Ai:function(){return j},zX:function(){return _},Xz:function(){return W},o0:function(){return T},kN:function(){return E},JL:function(){return O},nk:function(){return S},o:function(){return I},$p:function(){return G},vD:function(){return A},vB:function(){return B},tf:function(){return U},WG:function(){return w},yz:function(){return Z}});var r=n(1413),o=n(74569),a=n(88329),i=(n(71217),{Authorization:"Token ".concat(a.Z.get("token"))}),c=function(e){var t=e.url,n=e.method,a=e.headers,c=void 0===a?{}:a;try{return o({url:"".concat("https://jarvis.everestfleet.com").concat(t),method:n,headers:(0,r.Z)((0,r.Z)({},i),c)})}catch(d){return d}},d=function(){return c({url:"/fleet/api/teamApi/",method:"GET"})},l=function(e,t){var n=e.teamIDValue,r=t.startOfWeek,o=t.endOfWeek;return c({url:"/api/hisaab_summary/".concat(n,",").concat(r,",").concat(o,"/"),method:"GET"})},u=function(e,t){var n=e.teamIDValue,r=t.startOfWeek,o=t.endOfWeek;return c({url:"/api/hisaab_driveros/".concat(n,",").concat(r,",").concat(o,"/"),method:"GET"})},s=function(e,t){var n=e.teamIDValue,r=t.startOfWeek,o=t.endOfWeek;return c({url:"/api/highos/".concat(n,",").concat(r,",").concat(o,"/"),method:"GET"})},p=function(e,t){var n=e.teamIDValue,r=t.startOfWeek,o=t.endOfWeek;return c({url:"/api/recover_amt/".concat(n,",").concat(r,",").concat(o,"/"),method:"GET"})},f=function(e,t){var n=t.startOfWeek,r=t.endOfWeek;return c({url:"/api/weekly_hisaab/".concat(e,",").concat(n,",").concat(r,"/"),method:"GET"})},v=function(e){return c({url:"/api/driver_weekly_data/".concat(e,"/"),method:"GET"})},m=function(e,t){var n=e.teamIDValue,r=t.startOfWeek,o=t.endOfWeek;return c({url:"/api/car_summary/".concat(n,",").concat(r,",").concat(o,"/"),method:"GET"})},h=function(e,t){var n=e.startOfWeek,r=e.endOfWeek,o=t.cityIDValue;return c({url:"/api/incentive/".concat(n,",").concat(r,",").concat(o,"/"),method:"GET"})},x=function(e,t){var n=e.teamIDValue,r=t.startOfWeek,o=t.endOfWeek;return c({url:"/api/car_inctive/".concat(n,",").concat(r,",").concat(o,"/"),method:"GET"})},y=function(e,t){var n=e.teamIDValue,r=t.startOfWeek,o=t.endOfWeek;return c({url:"/api/car_status_weekly/".concat(n,",").concat(r,",").concat(o,"/"),method:"GET"})},k=function(e,t){var n=e.teamIDValue,r=t.day;return c({url:"/api/car_status/".concat(n,",").concat(r,"/"),method:"GET"})},g=function(e,t,n){var r=t.teamIDValue,o=n.day;return c({url:"/api/cardaily/".concat(e,",").concat(r,",").concat(o,",").concat(o,"/"),method:"GET"})},b=function(e,t,n,r){var o=t.carNumberValue,a=n.teamIDValue,i=r.startOfWeek,d=r.endOfWeek;return c({url:"/api/carweekly/".concat(e,",").concat(o,",").concat(a,",").concat(i,",").concat(d,"/"),method:"GET"})},F=function(e,t,n){var r=t.teamIDValue,o=n.startOfWeek,a=n.endOfWeek;return c({url:"/api/cardaily/".concat(e,",").concat(r,",").concat(o,",").concat(a,"/"),method:"GET"})},N=function(e,t){var n=e.teamIDValue,r=t.day;return c({url:"/api/driver_rating/".concat(n,",").concat(r,"/"),method:"GET"})},C=function(e,t,n){var r=t.teamIDValue,o=n.startOfWeek,a=n.endOfWeek;return c({url:"/api/driver_weekly/".concat(e,",").concat(r,",").concat(o,",").concat(a,"/"),method:"GET"})},D=function(e,t,n,r){var o=n.teamIDValue,a=r.startOfWeek,i=r.endOfWeek;return c({url:"/api/driver_daily/".concat(t,",").concat(o,",").concat(a,",").concat(i,",").concat(e,"/"),method:"GET"})},j=function(e,t){var n=t.startOfWeek,r=t.endOfWeek;return c({url:"/api/weekly_report/".concat(e,",").concat(n,",").concat(r,"/"),method:"GET"})},_=function(e,t){var n=t.startOfWeek,r=t.endOfWeek;return c({url:"/api/weekly_report/uberkm/".concat(e,",").concat(n,",").concat(r,"/"),method:"GET"})},W=function(e,t){var n=t.startOfWeek,r=t.endOfWeek;return c({url:"/api/weekly_campare/".concat(e,",").concat(n,",").concat(r,"/"),method:"GET"})},T=function(e,t){var n=t.startOfWeek,r=t.endOfWeek;return c({url:"/api/weekly_campare/uberkm/".concat(e,",").concat(n,",").concat(r,"/"),method:"GET"})},E=function(e,t){var n=e.teamIDValue,r=t.day;return c({url:"/api/dead_km/".concat(n,",").concat(r,"/"),method:"GET"})},O=function(e){var t=e.teamIDValue;return c({url:"/api/driver_report/".concat(t,"/"),method:"GET"})},S=function(e){return c({url:"/api/etm_summary/".concat(e,"/"),method:"GET"})},I=function(e){return c({url:"/api/monthly_report/".concat(e,"/"),method:"GET"})},G=function(e){return c({url:"/api/etm_cars/".concat(e,"/"),method:"GET"})},A=function(e){return c({url:"/api/driver_p/".concat(e,"/"),method:"GET"})},B=function(e){return c({url:"/api/driver_rto/".concat(e,"/"),method:"GET"})},U=function(e){return c({url:"/api/daily_deadkm/".concat(e,"/"),method:"GET"})},w=function(e,t,n){var r=e.startOfWeek,o=e.endOfWeek,a=t.teamIDValue,i=n.day1,d=n.day2,l=n.day3,u=n.day4,s=n.day5,p=n.day6,f=n.day7;return c({url:"/fleet/driver_report?start_date=".concat(r,"+&end_date=").concat(o,"+&team_id=").concat(a,"&dates%5B%5D=").concat(i,"+&dates%5B%5D=").concat(d,"+&dates%5B%5D=").concat(l,"+&dates%5B%5D=").concat(u,"+&dates%5B%5D=").concat(s,"+&dates%5B%5D=").concat(p,"+&dates%5B%5D=").concat(f,"+"),method:"GET"})},Z=function(e,t,n){var r=e.startOfWeek,o=e.endOfWeek,a=t.teamIDValue,i=n.day1,d=n.day2,l=n.day3,u=n.day4,s=n.day5,p=n.day6,f=n.day7;return c({url:"/fleet/car_report?start_date=".concat(r,"+&end_date=").concat(o,"+&team_id=").concat(a,"&dates%5B%5D=").concat(i,"+&dates%5B%5D=").concat(d,"+&dates%5B%5D=").concat(l,"+&dates%5B%5D=").concat(u,"+&dates%5B%5D=").concat(s,"+&dates%5B%5D=").concat(p,"+&dates%5B%5D=").concat(f,"+"),method:"GET"})}}}]);
//# sourceMappingURL=5.a1d04bc6.chunk.js.map