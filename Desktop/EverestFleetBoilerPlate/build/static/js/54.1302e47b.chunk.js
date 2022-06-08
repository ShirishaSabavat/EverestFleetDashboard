"use strict";(self.webpackChunkboiler_plate=self.webpackChunkboiler_plate||[]).push([[54],{89054:function(e,l,i){i.r(l),i.d(l,{default:function(){return C}});var n=i(54270),o=i(15861),d=i(29439),t=i(87757),r=i.n(t),a=i(19333),v=i(66871),u=i(58686),s=i(19603),c=i(37382),m=i(4964),x=i(61753),h=i(72791),p=i(50612),f=i(96352),_=i(29921),b=i(70895),j=i(33924),g=i(72426),y=i.n(g),F=i(80184),k=function(e){var l=e.weeklyReport,i=e.weeklyReportUberKm,n=function(e){return Math.round(1e3*e)/1e3},o=function(e,l){return Number(e)/Number(l)},d=function(e){return e/7},t=function(e){return 100*e},r=function(e){var l;return e>=1&&e<=9&&(l="#F1FFE1"),e>=10&&e<=12&&(l="#FFFEE1"),e>=13&&e<=16&&(l="#E1F5FF"),e>=17&&e<=19&&(l="#FFEFEF"),e>=20&&e<=27&&(l="#F6ECFF"),e>=28&&e<=29&&(l="#EFFFFD"),l},a=[{title:"Metrics",dataIndex:"metrics",key:"metrics",align:"start",render:function(e,l){return{props:{style:{background:r(l.key)}},children:(0,F.jsx)("div",{children:e})}}}],v=["day1","day2","day3","day4","day5","day6","day7"];null===l||void 0===l||l.forEach((function(e,l){var i={title:"".concat(y()(null===e||void 0===e?void 0:e.date).format("D"),"/").concat(y()(null===e||void 0===e?void 0:e.date).format("M")),dataIndex:v[l],key:null===e||void 0===e?void 0:e.date,align:"center"};a.push(i||"")}));var u=null===l||void 0===l?void 0:l.map((function(e){var l,r,a,v,u,s,c,m,x,h,p,f,_,b,j,g,y,F,k,N,w,Z,T,C,R,I,D=null;return null===i||void 0===i||i.map((function(l){(null===e||void 0===e?void 0:e.date)===(null===l||void 0===l?void 0:l.date)&&(D=l)})),[e.total_cars?null===e||void 0===e?void 0:e.total_cars:"--",null!==e&&void 0!==e&&e.car_driven?null===e||void 0===e?void 0:e.car_driven:"--",null!==e&&void 0!==e&&e.repair_cars?null===e||void 0===e?void 0:e.repair_cars:"--",null!==e&&void 0!==e&&e.bd_cars?null===e||void 0===e?void 0:e.bd_cars:"--",null!==e&&void 0!==e&&e.insurance?null===e||void 0===e?void 0:e.insurance:"--",null!==e&&void 0!==e&&e.rental?null===e||void 0===e?void 0:e.rental:"--",null!==e&&void 0!==e&&e.b2b_cars?null===e||void 0===e?void 0:e.b2b_cars:"--",null!==e&&void 0!==e&&e.fb_cars?null===e||void 0===e?void 0:e.fb_cars:"--",null!==e&&void 0!==e&&e.not_driven?null===e||void 0===e?void 0:e.not_driven:"--",null!==e&&void 0!==e&&e.target_car?null===e||void 0===e?void 0:e.target_car:"--",null!==e&&void 0!==e&&e.car_driven?null===e||void 0===e?void 0:e.car_driven:"--",null!==e&&void 0!==e&&e.car_driven&&null!==e&&void 0!==e&&e.target_car?null===(l=100*o(null===e||void 0===e?void 0:e.car_driven,null===e||void 0===e?void 0:e.target_car))||void 0===l?void 0:l.toFixed(1):"--",null!==e&&void 0!==e&&e.online_hours?null===(r=n(null===e||void 0===e?void 0:e.online_hours))||void 0===r?void 0:r.toFixed(0):"--",null!==e&&void 0!==e&&e.online_hours&&null!==e&&void 0!==e&&e.car_driven?null===(a=o(null===e||void 0===e?void 0:e.online_hours,null===e||void 0===e?void 0:e.car_driven))||void 0===a?void 0:a.toFixed(1):"--",null!==e&&void 0!==e&&e.target_online_hours?null===(v=d(null===e||void 0===e?void 0:e.target_online_hours))||void 0===v?void 0:v.toFixed(1):"--",null!==e&&void 0!==e&&e.online_hours&&null!==e&&void 0!==e&&e.car_driven&&null!==e&&void 0!==e&&e.target_online_hours?null===(u=o(o(null===e||void 0===e?void 0:e.online_hours,null===e||void 0===e?void 0:e.car_driven),o(null===e||void 0===e?void 0:e.target_online_hours,7)))||void 0===u?void 0:u.toFixed(1):"--",null!==e&&void 0!==e&&e.total_trips?null===(s=n(Number(null===e||void 0===e?void 0:e.total_trips)))||void 0===s?void 0:s.toFixed(0):"--",null!==e&&void 0!==e&&e.total_trips&&null!==e&&void 0!==e&&e.online_hours?null===(c=o(null===e||void 0===e?void 0:e.total_trips,null===e||void 0===e?void 0:e.online_hours))||void 0===c?void 0:c.toFixed(1):"--",null!==e&&void 0!==e&&e.total_trips&&null!==e&&void 0!==e&&e.car_driven?null===(m=o(null===e||void 0===e?void 0:e.total_trips,null===e||void 0===e?void 0:e.car_driven))||void 0===m?void 0:m.toFixed(1):"--",null!==e&&void 0!==e&&e.revenue?null===(x=n(null===e||void 0===e?void 0:e.revenue))||void 0===x?void 0:x.toFixed(0):"--",null!==e&&void 0!==e&&e.revenue&&null!==e&&void 0!==e&&e.total_cars?null===(h=o(null===e||void 0===e?void 0:e.revenue,null===e||void 0===e?void 0:e.total_cars))||void 0===h?void 0:h.toFixed(0):"--",null!==e&&void 0!==e&&e.target_revenue?null===(p=d(null===e||void 0===e?void 0:e.target_revenue))||void 0===p?void 0:p.toFixed(0):"--",null!==e&&void 0!==e&&e.target_revenue&&null!==e&&void 0!==e&&e.revenue&&null!==e&&void 0!==e&&e.total_cars?null===(f=o(o(null===e||void 0===e?void 0:e.revenue,null===e||void 0===e?void 0:e.total_cars),o(null===e||void 0===e?void 0:e.target_revenue,7)))||void 0===f?void 0:f.toFixed(1):"--",null!==e&&void 0!==e&&e.revenue&&null!==e&&void 0!==e&&e.total_trips?null===(_=o(null===e||void 0===e?void 0:e.revenue,null===e||void 0===e?void 0:e.total_trips))||void 0===_?void 0:_.toFixed(1):"--",null!==e&&void 0!==e&&e.revenue&&null!==e&&void 0!==e&&e.online_hours?null===(b=o(null===e||void 0===e?void 0:e.revenue,null===e||void 0===e?void 0:e.online_hours))||void 0===b?void 0:b.toFixed(1):"--",null!==(j=D)&&void 0!==j&&j.uber_km?null===(g=D)||void 0===g||null===(y=g.uber_km)||void 0===y?void 0:y.toFixed(0):"--",null!==e&&void 0!==e&&e.revenue&&null!==(F=D)&&void 0!==F&&F.uber_km?null===(k=o(null===e||void 0===e?void 0:e.revenue,null===(N=D)||void 0===N?void 0:N.uber_km))||void 0===k?void 0:k.toFixed(1):"--",null!==(w=D)&&void 0!==w&&w.acceptance_rate?"".concat(null===(Z=t(null===(T=D)||void 0===T?void 0:T.acceptance_rate))||void 0===Z?void 0:Z.toFixed(1)," %"):"--",null!==(C=D)&&void 0!==C&&C.cancellation_rate?"".concat(null===(R=t(null===(I=D)||void 0===I?void 0:I.cancellation_rate))||void 0===R?void 0:R.toFixed(1)," %"):"--"]})),s=["Total Cars","Active Cars","Repair Cars","BD Cars","Insurance Cars","Rental","B2B Cars","FP Cars","Cars Not Driven","Target for Cars in Uber","No of cars in Uber","% Achieved","Total Online Hours","Daily Avg. Online Hours","Target (Online Hrs)","% Achieved Online Hours","Uber Trips","TPH","Trips Per Car","Total Revenue","Revenue Per Car","Target Revenue","% Achieved","Revenue Per Trip","Revenue Per Hour","Total Uber Kms","Average. OEPK","Acceptance %","Cancellation %"].map((function(e,l){var i,n,o,d,t,r,a;return{key:l+1,metrics:e,day1:null===u||void 0===u||null===(i=u[0])||void 0===i?void 0:i[l],day2:null===u||void 0===u||null===(n=u[1])||void 0===n?void 0:n[l],day3:null===u||void 0===u||null===(o=u[2])||void 0===o?void 0:o[l],day4:null===u||void 0===u||null===(d=u[3])||void 0===d?void 0:d[l],day5:null===u||void 0===u||null===(t=u[4])||void 0===t?void 0:t[l],day6:null===u||void 0===u||null===(r=u[5])||void 0===r?void 0:r[l],day7:null===u||void 0===u||null===(a=u[6])||void 0===a?void 0:a[l]}}));return(0,F.jsx)("div",{children:(0,F.jsx)(j.Z,{columns:a,dataSource:s,pagination:!1})})},N=function(e){var l=e.selected,i=e.selectedTable,n=(0,F.jsxs)("div",{className:"d-flex flex-row",children:[(0,F.jsx)("div",{className:"mr-2.5",children:(0,F.jsx)("img",{style:{height:"30px"},className:"rounded-full",width:"30",src:l.src,alt:"I"})}),(0,F.jsx)("div",{children:(0,F.jsx)("p",{className:"text-[#333333] text-sm mt-1 mb-0 font-mulish-bold",children:l.teamName})})]});return(0,F.jsx)("div",{children:(0,F.jsx)(v.Z,{title:n,children:(0,F.jsx)(u.Z,{children:(0,F.jsx)(s.Z,{span:24,children:i})})})})},w=i(24625),Z=new Promise((function(e){setTimeout((function(){return e()}),1e3)})),T=(0,p.Z)((function(e){var l,i,n,t,p,j=e.pageState,g=e.setPageState,y=(0,f.m)().calenderDate,T=(0,_.D)(),C=T.teamID,R=T.cityID,I=T.managerID,D=(0,h.useState)(),A=(0,d.Z)(D,2),S=A[0],E=void 0===S?[]:S,L=A[1],P=(0,h.useState)(),U=(0,d.Z)(P,2),V=U[0],H=void 0===V?[]:V,K=U[1],O=(0,h.useState)(),B=(0,d.Z)(O,2),M=B[0],W=void 0===M?[]:M,z=B[1],q=(0,h.useState)(!1),X=(0,d.Z)(q,2),G=X[0],J=X[1],Q=(0,h.useState)(!1),Y=(0,d.Z)(Q,2),$=Y[0],ee=Y[1],le=(0,h.useState)({}),ie=(0,d.Z)(le,2),ne=ie[0],oe=ie[1],de=(0,h.useState)(C.teamIDValue),te=(0,d.Z)(de,2),re=te[0],ae=te[1],ve=(0,h.useState)(),ue=(0,d.Z)(ve,2),se=ue[0],ce=ue[1],me=function(e,l,i){var n,o,d,t=e.filter((function(e){return(null===e||void 0===e?void 0:e.id)===Number(C.teamIDValue)}));!1===$?(oe({key:null===t||void 0===t||null===(n=t[0])||void 0===n?void 0:n.id,src:null===t||void 0===t||null===(o=t[0])||void 0===o?void 0:o.Logo,teamName:"".concat(null===t||void 0===t||null===(d=t[0])||void 0===d?void 0:d.name," Team"),table:(0,F.jsx)(k,{weeklyReport:l,weeklyReportUberKm:i})}),ce((0,F.jsx)(k,{weeklyReport:l,weeklyReportUberKm:i}))):ce((0,F.jsx)(k,{weeklyReport:l,weeklyReportUberKm:i}))},xe=function(){var e=(0,o.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Z;case 3:g("loaded"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),g("error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();(0,h.useEffect)((0,o.Z)(r().mark((function e(){var l,i,n,o,d,t,a,v,u,s;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(xe(),y.startOfWeek&&y.endOfWeek){e.next=3;break}return e.abrupt("return");case 3:return l=[],e.t0=l,e.next=7,(0,b.C3)();case 7:return e.t1=e.sent,e.t0.push.call(e.t0,e.t1),e.t2=l,e.next=12,(0,b.Ai)(re,y);case 12:return e.t3=e.sent,e.t2.push.call(e.t2,e.t3),e.t4=l,e.next=17,(0,b.zX)(re,y);case 17:return e.t5=e.sent,e.t4.push.call(e.t4,e.t5),e.prev=19,e.next=22,Promise.all([l]);case 22:s=e.sent,L(null===(i=s[0][0])||void 0===i||null===(n=i.data)||void 0===n?void 0:n.results),K(null===(o=s[0][1])||void 0===o?void 0:o.data),z(null===(d=s[0][2])||void 0===d?void 0:d.data),me(null===(t=s[0][0])||void 0===t||null===(a=t.data)||void 0===a?void 0:a.results,null===(v=s[0][1])||void 0===v?void 0:v.data,null===(u=s[0][2])||void 0===u?void 0:u.data),e.next=32;break;case 29:e.prev=29,e.t6=e.catch(19),console.log(e.t6);case 32:case"end":return e.stop()}}),e,null,[[19,29]])}))),[C,re,I,y]);var he=E.filter((function(e){var l;return(null===e||void 0===e||null===(l=e.city)||void 0===l?void 0:l.id)===R.cityIDValue})).map((function(e){return{key:null===e||void 0===e?void 0:e.id,src:null!==(null===e||void 0===e?void 0:e.Logo)?null===e||void 0===e?void 0:e.Logo:"",teamName:"".concat(null===e||void 0===e?void 0:e.name," Team"),table:(0,F.jsx)(k,{weeklyReport:H,weeklyReportUberKm:W})}})),pe=E.filter((function(e){return(null===e||void 0===e?void 0:e.id)===Number(C.teamIDValue)})),fe=null===pe||void 0===pe||null===(l=pe[0])||void 0===l||null===(i=l.managers)||void 0===i?void 0:i.filter((function(e){return(null===e||void 0===e?void 0:e.id)===Number(I.managerIDValue)})),_e=(0,F.jsx)(a.Z,{children:he.map((function(e,l){return(0,F.jsx)(a.Z.Item,{onClick:function(){oe(e),ce(e.table),ee(!0),ae(e.key)},children:(0,F.jsxs)("div",{className:"d-flex flex-row",children:[(0,F.jsx)("div",{className:"mr-2",children:(0,F.jsx)("img",{style:{height:"20px"},className:"rounded-full",width:"20",src:""!==e.src?e.src:w,alt:"".concat(l)})}),(0,F.jsx)("div",{children:(0,F.jsx)("p",{className:"text-[#333333] text-xs mt-0.5 mb-0 font-mulish-bold",children:e.teamName})})]})},e.key)}))});return"loading"===j||"error"===j?null:(0,F.jsx)("div",{children:(0,F.jsxs)("div",{className:"site-card-wrapper",children:[(0,F.jsx)(v.Z,{className:"mb-4",children:(0,F.jsxs)(u.Z,{children:[(0,F.jsx)(s.Z,{span:16,children:(0,F.jsxs)("div",{className:"d-flex flex-row",children:[(0,F.jsx)("div",{className:"mr-3",children:(0,F.jsx)("img",{style:{height:"60px"},className:"rounded-full",width:"60",src:null===pe||void 0===pe||null===(n=pe[0])||void 0===n?void 0:n.Logo,alt:"TeamImage"})}),(0,F.jsxs)("div",{children:[(0,F.jsxs)("h5",{className:"text-[#333333] text-lg mt-1 mb-0",children:["Hello,"," ",null===fe||void 0===fe||null===(t=fe[0])||void 0===t?void 0:t.full_name]}),(0,F.jsxs)("p",{className:"text-[#013453] m-0 font-mulish-bold",children:[null===pe||void 0===pe||null===(p=pe[0])||void 0===p?void 0:p.name," ","Team"]})]})]})}),(0,F.jsx)(s.Z,{className:"pr-1",span:8,children:(0,F.jsx)(c.Z,{onClick:function(){return J(!G)},overlay:!0===G?_e:"",children:(0,F.jsx)(m.Z,{className:"w-100 mt-2",style:{width:"240px",fontSize:"10px",color:"#86A1A4"},children:(0,F.jsxs)(u.Z,{children:[(0,F.jsxs)(s.Z,{span:22,className:"d-flex flex-row justify-content-start",children:[(0,F.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"mr-3",width:"26",height:"20",viewBox:"0 0 35.066 28.316",children:(0,F.jsx)("path",{id:"Icon_awesome-hands-helping","data-name":"Icon awesome-hands-helping",d:"M25.734,10.126H17.719v2.953a3.8,3.8,0,0,1-7.594,0V6.666L6.7,8.723a3.368,3.368,0,0,0-1.64,2.89v2.494L.843,16.543a1.683,1.683,0,0,0-.617,2.3l4.219,7.309a1.688,1.688,0,0,0,2.3.617L12.2,23.626h7.2a3.378,3.378,0,0,0,3.375-3.375h.844a1.686,1.686,0,0,0,1.688-1.688V15.188h.422A1.263,1.263,0,0,0,27,13.922V11.391A1.263,1.263,0,0,0,25.734,10.126Zm7.789-1.972L29.3.844A1.688,1.688,0,0,0,27,.227L21.547,3.375h-5.39a3.4,3.4,0,0,0-1.788.512L12.6,4.989a1.676,1.676,0,0,0-.791,1.429v6.66a2.109,2.109,0,0,0,4.219,0V8.438h9.7a2.955,2.955,0,0,1,2.953,2.953v1.5l4.219-2.436a1.689,1.689,0,0,0,.617-2.3Z",transform:"translate(0.607 0.604)",fill:"none",stroke:"#86a1a4",strokeWidth:"1.2"})}),(0,F.jsx)("span",{className:"text-xs",children:!0===$?ne.teamName:"Select Team"})]}),(0,F.jsx)(s.Z,{span:2,className:"text-end",children:(0,F.jsx)(x.Z,{className:"text-end",style:{fontSize:"12px",color:"#86A1A4"}})})]})})})})]})}),(0,F.jsx)("div",{className:"site-card-wrapper",children:(0,F.jsx)(N,{selected:ne,selectedTable:se})})]})})})),C=function(){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(n.q,{title:"Dashboard"}),(0,F.jsxs)("div",{style:{fontFamily:"montserrat"},className:"flex flex-col pl-3 pr-10 mb-4",children:[(0,F.jsx)("div",{className:"mt-5 mb-3",children:(0,F.jsx)("span",{className:"font-bold text-[#333333] text-2xl",children:"Weekly Summary Report"})}),(0,F.jsx)(T,{})]})]})}},24625:function(e,l,i){e.exports=i.p+"static/media/blankImg.ca882e941970281490d1.png"}}]);
//# sourceMappingURL=54.1302e47b.chunk.js.map