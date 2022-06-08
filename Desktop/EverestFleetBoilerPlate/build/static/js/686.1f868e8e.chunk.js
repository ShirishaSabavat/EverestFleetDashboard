"use strict";(self.webpackChunkboiler_plate=self.webpackChunkboiler_plate||[]).push([[686],{50612:function(e,t,n){var a=n(1413),r=n(29439),s=n(77106),o=n(72791),i=n(4964),d=n(71217),l=n(80184);t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.loadingImgPath,c=void 0===n?"assets/images/page/loading-page-1.svg":n,m=t.errorImgPath,u=void 0===m?"assets/images/page/error-page-1.svg":m,h=t.loadingMessage,x=void 0===h?"Loading page...please standby.":h,f=t.errorMessage,v=void 0===f?"Error Loading...rest assured we are working on it.":f,p=function(t){var n=(0,o.useState)("loading"),m=(0,r.Z)(n,2),h=m[0],f=m[1];return(0,l.jsxs)(l.Fragment,{children:["loading"===h&&(0,l.jsxs)("div",{className:"w-full flex flex-col justify-center items-center space-y-4",style:{fontFamily:"montserrat",height:"calc(100vh - 228px)",minHeight:450},children:[(0,l.jsx)("img",{src:c,alt:"loading!",width:"300"}),(0,l.jsxs)("div",{className:"text-eep-gray flex items-center space-x-3",children:[(0,l.jsx)(s.Z,{className:"text-purple-dark"}),(0,l.jsx)("span",{className:"font-mulish-semi-bold",children:x})]})]}),"error"===h&&(0,l.jsxs)("div",{className:"w-full flex flex-col justify-center items-center space-y-4",style:{height:"calc(100vh - 228px)",minHeight:450},children:[(0,l.jsx)("img",{src:u,alt:"loading!",width:"300"}),(0,l.jsx)("span",{className:"text-red-500 font-mulish-semi-bold",children:v}),(0,l.jsx)(i.Z,{type:"primary",onClick:function(){return d.m.push("/home/dashboard")},children:"Take me to Dashboard"})]}),(0,l.jsx)(e,(0,a.Z)((0,a.Z)({},t),{},{setPageState:f,pageState:h}))]})};return p}},93686:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var a=n(54270),r=n(15861),s=n(29439),o=n(87757),i=n.n(o),d=n(72791),l=n(50612),c=n(58686),m=n(19603),u=n(18185),h=n(96352),x=n(58526),f=n(29921),v=n(20135),p=n(19741),j=n(80184),g=function(e){var t=e.hisaabHighOS,n=void 0===t?[]:t,a=e.onSearchDriver,r=e.hisaabARValue,o=void 0===r?"":r,i=(0,f.D)(),l=i.driverETM,c=i.setDriverETM;localStorage.setItem("driverETM",l);var m=(0,d.useState)(!1),u=(0,s.Z)(m,2),h=u[0],x=u[1],g=function(e){return Math.round(1e3*e)/1e3},b=n.filter((function(e){var t=e.driver_name,n=e.mobile,a=e.employee_id;return"".concat(t).concat(n).concat(a).toLowerCase().includes(o.toLowerCase())}));return(0,j.jsxs)("div",{className:"row mt-2",children:[(0,j.jsxs)("div",{className:"col-12 d-flex flex-row justify-content-between px-4 mb-3",children:[(0,j.jsx)("h6",{className:"text-[#333333] text-md font-bold",children:"Drivers with high Outstanding Pending"}),(0,j.jsx)(v.Z,{size:"medium",placeholder:"Enter Name / ETM Id / Mobile No.",prefix:(0,j.jsx)("img",{className:"text-[#333333]",src:"/assets/images/general/loupe.svg",alt:"search",width:"12"}),style:{width:"320px"},className:"bg-[#F1F0F1] text-[#333333]",bordered:!0,onChange:function(e){return function(e){a(e)}(e.target.value)}})]}),(0,j.jsx)("div",{className:"col-12",children:(0,j.jsxs)("table",{className:"text-[#333333] text-center text-xs w-100",children:[(0,j.jsx)("thead",{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{className:"font-normal p-3",children:"Name"}),(0,j.jsx)("th",{className:"font-normal p-3",children:"Contact No."}),(0,j.jsx)("th",{className:"font-normal p-3",children:"Employee Id"}),(0,j.jsx)("th",{className:"font-normal p-3",children:"Last Payment Date"}),(0,j.jsx)("th",{className:"font-normal p-3",children:"Last Driven Date"}),(0,j.jsx)("th",{className:"font-normal p-3",children:"Weekly Outstanding"}),(0,j.jsx)("th",{className:"font-normal p-3",children:"Total Outstanding"}),(0,j.jsx)("th",{className:"font-normal p-3",children:"Payment Recovery"})]})}),(0,j.jsx)("tbody",{children:Array.isArray(b)&&b.length>0?b.sort((function(e,t){return(null===e||void 0===e?void 0:e.outstanding)>(null===t||void 0===t?void 0:t.outstanding)?1:-1})).map((function(e,t){return(0,j.jsxs)("tr",{className:"font-semibold bg-[#ffffff] text-[#333333] text-xs border-b-8 border-[#F1F0F1]",children:[(0,j.jsx)("td",{className:"py-4 mb-4",children:null===e||void 0===e?void 0:e.driver_name}),(0,j.jsx)("td",{className:"py-4 mb-4",children:null===e||void 0===e?void 0:e.mobile}),(0,j.jsx)("td",{className:"py-4 mb-4",children:(0,j.jsx)(p.rU,{onClick:function(){var t;t=null===e||void 0===e?void 0:e.employee_id,localStorage.setItem("driverETM",t),c(t),x(!0)},className:"font-semibold bg-[#ffffff] text-xs hover:bg-[#fff345]",to:"/home/driverHisaabData",target:"_blank",children:null===e||void 0===e?void 0:e.employee_id})}),(0,j.jsx)("td",{className:"text-[#86A1A4]",children:null===e||void 0===e?void 0:e.last_payment_date}),(0,j.jsx)("td",{className:"text-[#86A1A4]",children:null===e||void 0===e?void 0:e.last_driven_date}),(0,j.jsxs)("td",{className:(null===e||void 0===e?void 0:e.weekly_outstanding)<0?"text-[#FF0000] text-sm":"text-[#013453] text-sm",children:[(0,j.jsx)("span",{className:"font-sans font-semibold",children:"\u20b9"})," ","number"!==typeof(null===e||void 0===e?void 0:e.weekly_outstanding)?0:g(null===e||void 0===e?void 0:e.weekly_outstanding).toFixed(1)]}),(0,j.jsxs)("td",{className:(null===e||void 0===e?void 0:e.outstanding)<0?"text-[#FF0000] text-sm":"text-[#013453] text-sm",children:[(0,j.jsx)("span",{className:"font-sans font-semibold",children:"\u20b9"})," ","number"!==typeof(null===e||void 0===e?void 0:e.outstanding)?0:g(null===e||void 0===e?void 0:e.outstanding).toFixed(1)]}),(0,j.jsxs)("td",{className:"text-[#013453] text-sm",children:[(0,j.jsx)("span",{className:"font-sans font-semibold",children:"\u20b9"})," ","number"!==typeof(null===e||void 0===e?void 0:e.recovery)?0:g(null===e||void 0===e?void 0:e.recovery).toFixed(1)]})]},t.toString())})):(0,j.jsxs)("tr",{className:"font-semibold bg-[#ffffff] text-[#333333] text-xs",children:[(0,j.jsx)("td",{className:"py-4 text-center",children:" "}),(0,j.jsx)("td",{children:" "}),(0,j.jsx)("td",{children:" "}),(0,j.jsx)("td",{children:" "}),(0,j.jsx)("td",{className:"text-center",children:"-- No Records --"}),(0,j.jsx)("td",{children:" "}),(0,j.jsx)("td",{children:" "}),(0,j.jsx)("td",{children:" "})]},"1")})]})}),(0,j.jsx)("div",{className:!0===h?"col-12 container":"col-12 container d-none"})]})},b=function(e){var t=e.hisaabAmountRecovered,n=void 0===t?[]:t,a=e.onSearchDriver,r=e.hisaabARValue,o=void 0===r?"":r,i=(0,f.D)(),l=i.driverETM,c=i.setDriverETM;localStorage.setItem("driverETM",l);var m=(0,d.useState)(!1),u=(0,s.Z)(m,2),h=u[0],x=u[1],g=function(e){return Math.round(1e3*e)/1e3},b=n.filter((function(e){var t=e.driver_name,n=e.mobile,a=e.employee_id;return"".concat(t).concat(n).concat(a).toLowerCase().includes(o.toLowerCase())}));return(0,j.jsxs)("div",{className:"row mt-2",children:[(0,j.jsxs)("div",{className:"col-12 d-flex flex-row justify-content-between px-4 mb-3",children:[(0,j.jsx)("h6",{className:"text-[#333333] text-md font-bold",children:"Drivers with Amount Recovered"}),(0,j.jsx)(v.Z,{size:"medium",placeholder:"Enter Name / ETM Id / Mobile No.",prefix:(0,j.jsx)("img",{className:"text-[#333333]",src:"/assets/images/general/loupe.svg",alt:"search",width:"12"}),style:{width:"320px"},className:"bg-[#F1F0F1] text-[#333333]",bordered:!0,onChange:function(e){return function(e){a(e)}(e.target.value)}})]}),(0,j.jsx)("div",{className:"col-12",children:(0,j.jsxs)("table",{className:"text-[#333333] text-center text-xs w-100",children:[(0,j.jsx)("thead",{children:(0,j.jsxs)("tr",{children:[(0,j.jsx)("th",{className:"font-normal p-3",children:"Name"}),(0,j.jsx)("th",{className:"font-normal p-3",children:"Contact No."}),(0,j.jsx)("th",{className:"font-normal p-3",children:"Employee Id"}),(0,j.jsx)("th",{className:"font-normal p-3",children:"Last Payment Date"}),(0,j.jsx)("th",{className:"font-normal p-3",children:"Last Driven Date"}),(0,j.jsx)("th",{className:"font-normal p-3",children:"Weekly Outstanding"}),(0,j.jsx)("th",{className:"font-normal p-3",children:"Total Outstanding"}),(0,j.jsx)("th",{className:"font-normal p-3",children:"Payment Recovery"})]})}),(0,j.jsx)("tbody",{children:Array.isArray(b)&&b.length>0?b.sort((function(e,t){return(null===e||void 0===e?void 0:e.outstanding)>(null===t||void 0===t?void 0:t.outstanding)?1:-1})).map((function(e,t){return(0,j.jsxs)("tr",{className:"font-semibold bg-[#ffffff] text-[#333333] text-xs border-b-8 border-[#F1F0F1]",children:[(0,j.jsx)("td",{className:"py-4 mb-4",children:null===e||void 0===e?void 0:e.driver_name}),(0,j.jsx)("td",{className:"py-4 mb-4",children:null===e||void 0===e?void 0:e.mobile}),(0,j.jsx)("td",{className:"py-4 mb-4",children:(0,j.jsx)(p.rU,{onClick:function(){var t;t=null===e||void 0===e?void 0:e.employee_id,localStorage.setItem("driverETM",t),c(t),x(!0)},className:"font-semibold bg-[#ffffff] text-xs hover:bg-[#fff345]",to:"/home/driverHisaabData",target:"_blank",children:null===e||void 0===e?void 0:e.employee_id})}),(0,j.jsx)("td",{className:"text-[#86A1A4]",children:null===e||void 0===e?void 0:e.last_payment_date}),(0,j.jsx)("td",{className:"text-[#86A1A4]",children:null===e||void 0===e?void 0:e.last_driven_date}),(0,j.jsxs)("td",{className:(null===e||void 0===e?void 0:e.weekly_outstanding)<0?"text-[#FF0000] text-sm":"text-[#013453] text-sm",children:[(0,j.jsx)("span",{className:"font-sans font-semibold",children:"\u20b9"})," ","number"!==typeof(null===e||void 0===e?void 0:e.weekly_outstanding)?0:g(null===e||void 0===e?void 0:e.weekly_outstanding).toFixed(1)]}),(0,j.jsxs)("td",{className:(null===e||void 0===e?void 0:e.outstanding)<0?"text-[#FF0000] text-sm":"text-[#013453] text-sm",children:[(0,j.jsx)("span",{className:"font-sans font-semibold",children:"\u20b9"})," ","number"!==typeof(null===e||void 0===e?void 0:e.outstanding)?0:g(null===e||void 0===e?void 0:e.outstanding).toFixed(1)]}),(0,j.jsxs)("td",{className:"text-[#013453] text-sm",children:[(0,j.jsx)("span",{className:"font-sans font-semibold",children:"\u20b9"})," ","number"!==typeof(null===e||void 0===e?void 0:e.recovery)?0:g(null===e||void 0===e?void 0:e.recovery).toFixed(1)]})]},t.toString())})):(0,j.jsxs)("tr",{className:"font-semibold bg-[#ffffff] text-[#333333] text-xs",children:[(0,j.jsx)("td",{className:"py-4 text-center",children:" "}),(0,j.jsx)("td",{children:" "}),(0,j.jsx)("td",{children:" "}),(0,j.jsx)("td",{children:" "}),(0,j.jsx)("td",{className:"text-center",children:"-- No Records --"}),(0,j.jsx)("td",{children:" "}),(0,j.jsx)("td",{children:" "}),(0,j.jsx)("td",{children:" "})]},"1")})]})}),(0,j.jsx)("div",{className:!0===h?"col-12 container":"col-12 container d-none"})]})},y=n(70895),k=(n(15646),new Promise((function(e){setTimeout((function(){return e()}),1e3)}))),N=(0,l.Z)((function(e){var t=e.pageState,n=e.setPageState,a=(0,h.m)().calenderDate,o=(0,x.b)(),l=o.setDriverID,v=o.driverID,p=(0,f.D)().teamID,N=(0,d.useState)(),_=(0,s.Z)(N,2),w=_[0],F=void 0===w?[]:w,W=_[1],D=(0,d.useState)(),E=(0,s.Z)(D,2),O=E[0],I=void 0===O?[]:O,A=E[1],T=(0,d.useState)(),M=(0,s.Z)(T,2),S=M[0],Z=void 0===S?[]:S,B=M[1],G=(0,d.useState)(),V=(0,s.Z)(G,2),H=V[0],C=void 0===H?[]:H,P=V[1],L=(0,d.useState)(),z=(0,s.Z)(L,2),R=z[0],U=z[1],q=(0,d.useState)(!1),K=(0,s.Z)(q,2),X=K[0],Y=K[1],J=(0,d.useState)(!1),Q=(0,s.Z)(J,2),$=Q[0],ee=Q[1];localStorage.setItem("startOfWeek",a.startOfWeek),localStorage.setItem("endOfWeek",a.endOfWeek);var te=function(){var e=(0,r.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k;case 3:n("loaded"),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),n("error");case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();(0,d.useEffect)((0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(te(),a.startOfWeek&&a.endOfWeek){e.next=3;break}return e.abrupt("return");case 3:return t=[],e.t0=t,e.next=7,(0,y.Bq)(p,a);case 7:return e.t1=e.sent,e.t0.push.call(e.t0,e.t1),e.t2=t,e.next=12,(0,y.Ud)(p,a);case 12:return e.t3=e.sent,e.t2.push.call(e.t2,e.t3),e.t4=t,e.next=17,(0,y.bt)(p,a);case 17:return e.t5=e.sent,e.t4.push.call(e.t4,e.t5),e.t6=t,e.next=22,(0,y.Yx)(p,a);case 22:return e.t7=e.sent,e.t6.push.call(e.t6,e.t7),e.prev=24,e.next=27,Promise.all([t]);case 27:n=e.sent,W(n[0][0].data[0]),A(n[0][1].data[0]),B(n[0][2].data),P(n[0][3].data),e.next=37;break;case 34:e.prev=34,e.t8=e.catch(24),console.error(e.t8);case 37:case"end":return e.stop()}}),e,null,[[24,34]])}))),[p,v,a]);var ne=function(e){U(e)},ae=function(e){return Math.round(1e3*e)/1e3};return"loading"===t||"error"===t?null:(0,j.jsxs)("div",{style:{fontFamily:"montserrat",fontWeight:"semibold"},children:[(0,j.jsx)("div",{className:"site-card-wrapper",children:(0,j.jsxs)(c.Z,{gutter:16,children:[(0,j.jsx)(m.Z,{className:"mb-3",xs:16,md:8,children:(0,j.jsx)("div",{className:"border-dotted border-1 border-[#86A1A4] rounded-md bg-[#FFFFFF] p-3",children:(0,j.jsxs)("div",{className:"d-flex flex-row",children:[(0,j.jsx)("div",{className:"mr-3",children:(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 54 83",children:(0,j.jsxs)("g",{id:"Coin_","data-name":"Coin ",transform:"translate(-17 -12)",children:[(0,j.jsxs)("g",{id:"Icon",transform:"translate(17 40.559)",children:[(0,j.jsxs)("g",{id:"Ellipse_64","data-name":"Ellipse 64",transform:"translate(0 0.441)",fill:"none",stroke:"#000",strokeWidth:"3",children:[(0,j.jsx)("circle",{cx:"27",cy:"27",r:"27",stroke:"none"}),(0,j.jsx)("circle",{cx:"27",cy:"27",r:"25.5",fill:"none"})]}),(0,j.jsx)("path",{id:"Icon_awesome-rupee-sign","data-name":"Icon awesome-rupee-sign",d:"M21.847,6.79a.851.851,0,0,0,.851-.851V3.1a.851.851,0,0,0-.851-.851h-21A.851.851,0,0,0,0,3.1V6.275a.851.851,0,0,0,.851.851H6.9a5.117,5.117,0,0,1,4.325,1.933H.851A.851.851,0,0,0,0,9.911v2.837a.851.851,0,0,0,.851.851H12.112c-.441,2.56-2.338,4.159-5.3,4.159H.851A.851.851,0,0,0,0,18.609v3.76a.851.851,0,0,0,.274.625L11.981,33.8a.851.851,0,0,0,.577.226h5.856a.851.851,0,0,0,.577-1.477L8.29,22.672A9.717,9.717,0,0,0,18.1,13.6h3.746a.851.851,0,0,0,.851-.851V9.911a.851.851,0,0,0-.851-.851H17.684a9.716,9.716,0,0,0-1.011-2.27Z",transform:"translate(16.502 11.196)",stroke:"#fff",strokeWidth:"2"})]}),(0,j.jsx)("text",{id:"_","data-name":"?",transform:"translate(37 33)",fontSize:"22",fontFamily:"Montserrat-SemiBold, Montserrat",fontWeight:"600",children:(0,j.jsx)("tspan",{x:"0",y:"0",children:"?"})}),(0,j.jsx)("text",{id:"_2","data-name":"?",transform:"translate(53 34)",fontSize:"17",fontFamily:"Montserrat-SemiBold, Montserrat",fontWeight:"600",children:(0,j.jsx)("tspan",{x:"0",y:"0",children:"?"})}),(0,j.jsx)("text",{id:"_3","data-name":"?",transform:"translate(28 34)",fontSize:"17",fontFamily:"Montserrat-SemiBold, Montserrat",fontWeight:"600",children:(0,j.jsx)("tspan",{x:"0",y:"0",children:"?"})})]})})}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("h5",{className:(null===F||void 0===F?void 0:F.total_outstanding)<0?"text-[#FF0000] font-bold text-md m-0":"text-[#013453] font-bold text-md m-0",children:[(0,j.jsx)("span",{className:"font-sans font-semibold",children:"\u20b9"})," ",null===(null===F||void 0===F?void 0:F.total_outstanding)||"number"!==typeof(null===F||void 0===F?void 0:F.total_outstanding)?0:ae(null===F||void 0===F?void 0:F.total_outstanding).toFixed(1)]}),(0,j.jsx)("p",{className:"text-[#013453] font-medium text-xs m-0",children:"Total Outstanding"})]})]})})}),(0,j.jsx)(m.Z,{className:"mb-3",xs:16,md:8,children:(0,j.jsx)("div",{className:"border-dotted border-1 border-[#86A1A4] rounded-md bg-[#FFFFFF] p-3",children:(0,j.jsxs)("div",{className:"d-flex flex-row",children:[(0,j.jsxs)("div",{className:"mr-3",children:[(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 65.772 85.906",children:(0,j.jsxs)("g",{id:"Icon",transform:"translate(-571.095 -441)",children:[(0,j.jsxs)("g",{id:"Icon_ionic-ios-people","data-name":"Icon ionic-ios-people",transform:"translate(572.295 484.521)",children:[(0,j.jsx)("path",{id:"Path_576","data-name":"Path 576",d:"M41.02,39.434c-1.581-.565-4.164-.593-5.307-1.03a7.5,7.5,0,0,1-2.456-1.143c-.409-.494-.409-4.022-.409-4.022a6.5,6.5,0,0,0,1.4-1.976,21.96,21.96,0,0,0,.677-3.881s.932.4,1.3-1.468c.311-1.609.9-2.456.748-3.641s-.819-.9-.819-.9.819-1.2.819-5.279c0-4.206-3.176-8.341-9.118-8.341S18.72,11.9,18.72,16.09c0,4.079.8,5.279.8,5.279s-.663-.282-.819.9.423,2.032.748,3.641c.367,1.877,1.3,1.468,1.3,1.468a22.172,22.172,0,0,0,.677,3.881,6.5,6.5,0,0,0,1.4,1.976s0,3.528-.409,4.022a7.215,7.215,0,0,1-2.456,1.129c-1.129.438-3.712.494-5.307,1.059a9.961,9.961,0,0,0-6.464,9.485H47.471A9.941,9.941,0,0,0,41.02,39.434Z",transform:"translate(3.805 -7.748)",fill:"none",stroke:"#000",strokeWidth:"2.4"}),(0,j.jsx)("path",{id:"Path_577","data-name":"Path 577",d:"M17.528,29.076s3.373-.113,4.714-1.313c-2.188-3.317-1-7.184-1.454-10.8s-2.5-5.758-6.591-5.758h-.056c-3.952,0-6.083,2.145-6.535,5.758s.8,7.9-1.44,10.8c1.341,1.214,4.728,1.171,4.728,1.171h0a7.148,7.148,0,0,1-.141,2.371,3.564,3.564,0,0,1-1.694.776A32.748,32.748,0,0,0,5.4,33.1a5.942,5.942,0,0,0-3.19,5.25H13.548c.311-1.129,2.442-3.147,4.516-4.206a9.478,9.478,0,0,1,3.486-.734s.536-.847-1.228-1.171a12.031,12.031,0,0,1-2.71-.946C17.345,30.981,17.528,29.076,17.528,29.076Z",transform:"translate(-2.215 -4.264)",fill:"none",stroke:"#000",strokeWidth:"2.4"}),(0,j.jsx)("path",{id:"Path_578","data-name":"Path 578",d:"M28.522,29.076s-3.373-.113-4.714-1.313c2.188-3.317,1-7.184,1.454-10.8s2.5-5.758,6.591-5.758h.056c3.952,0,6.083,2.145,6.535,5.758s-.8,7.9,1.44,10.8c-1.341,1.214-4.728,1.171-4.728,1.171h0a7.148,7.148,0,0,0,.141,2.371,3.564,3.564,0,0,0,1.694.776A32.748,32.748,0,0,1,40.646,33.1a5.942,5.942,0,0,1,3.19,5.25H32.5c-.311-1.129-2.442-3.147-4.516-4.206a9.478,9.478,0,0,0-3.486-.734s-.536-.847,1.228-1.171a12.031,12.031,0,0,0,2.71-.946C28.705,30.981,28.522,29.076,28.522,29.076Z",transform:"translate(19.536 -4.264)",fill:"none",stroke:"#000",strokeWidth:"2.4"})]}),(0,j.jsxs)("g",{id:"Group_703","data-name":"Group 703",transform:"translate(587.076 441)",children:[(0,j.jsxs)("g",{id:"Ellipse_74","data-name":"Ellipse 74",transform:"translate(-0.076)",fill:"#fff",stroke:"#000",strokeWidth:"2.4",children:[(0,j.jsx)("circle",{cx:"17",cy:"17",r:"17",stroke:"none"}),(0,j.jsx)("circle",{cx:"17",cy:"17",r:"15.8",fill:"none"})]}),(0,j.jsx)("text",{id:"_","data-name":"!",transform:"translate(13.924 25)",fontSize:"23",fontFamily:"Montserrat-SemiBold, Montserrat",fontWeight:"600",children:(0,j.jsx)("tspan",{x:"0",y:"0",children:"!"})})]})]})})," "]}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h5",{className:"text-[#013453] font-bold text-md m-0",children:null===(null===I||void 0===I?void 0:I.os_greater_5)||"number"!==typeof(null===I||void 0===I?void 0:I.os_greater_5)?0:ae(null===I||void 0===I?void 0:I.os_greater_5)}),(0,j.jsx)("p",{className:"text-[#013453] text-xs m-0",children:"Outstanding more than 5K"})]})]})})}),(0,j.jsx)(m.Z,{className:"mb-3",xs:16,md:8,children:(0,j.jsx)("div",{className:"border-dotted border-1 border-[#86A1A4] rounded-md bg-[#FFFFFF] p-3",children:(0,j.jsxs)("div",{className:"d-flex flex-row",children:[(0,j.jsx)("div",{className:"mr-3",children:(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"50",height:"50",viewBox:"0 0 65.772 85.906",children:(0,j.jsxs)("g",{id:"Icon",transform:"translate(-571.095 -441)",children:[(0,j.jsxs)("g",{id:"Icon_ionic-ios-people","data-name":"Icon ionic-ios-people",transform:"translate(572.295 484.521)",children:[(0,j.jsx)("path",{id:"Path_576","data-name":"Path 576",d:"M41.02,39.434c-1.581-.565-4.164-.593-5.307-1.03a7.5,7.5,0,0,1-2.456-1.143c-.409-.494-.409-4.022-.409-4.022a6.5,6.5,0,0,0,1.4-1.976,21.96,21.96,0,0,0,.677-3.881s.932.4,1.3-1.468c.311-1.609.9-2.456.748-3.641s-.819-.9-.819-.9.819-1.2.819-5.279c0-4.206-3.176-8.341-9.118-8.341S18.72,11.9,18.72,16.09c0,4.079.8,5.279.8,5.279s-.663-.282-.819.9.423,2.032.748,3.641c.367,1.877,1.3,1.468,1.3,1.468a22.172,22.172,0,0,0,.677,3.881,6.5,6.5,0,0,0,1.4,1.976s0,3.528-.409,4.022a7.215,7.215,0,0,1-2.456,1.129c-1.129.438-3.712.494-5.307,1.059a9.961,9.961,0,0,0-6.464,9.485H47.471A9.941,9.941,0,0,0,41.02,39.434Z",transform:"translate(3.805 -7.748)",fill:"none",stroke:"#000",strokeWidth:"2.4"}),(0,j.jsx)("path",{id:"Path_577","data-name":"Path 577",d:"M17.528,29.076s3.373-.113,4.714-1.313c-2.188-3.317-1-7.184-1.454-10.8s-2.5-5.758-6.591-5.758h-.056c-3.952,0-6.083,2.145-6.535,5.758s.8,7.9-1.44,10.8c1.341,1.214,4.728,1.171,4.728,1.171h0a7.148,7.148,0,0,1-.141,2.371,3.564,3.564,0,0,1-1.694.776A32.748,32.748,0,0,0,5.4,33.1a5.942,5.942,0,0,0-3.19,5.25H13.548c.311-1.129,2.442-3.147,4.516-4.206a9.478,9.478,0,0,1,3.486-.734s.536-.847-1.228-1.171a12.031,12.031,0,0,1-2.71-.946C17.345,30.981,17.528,29.076,17.528,29.076Z",transform:"translate(-2.215 -4.264)",fill:"none",stroke:"#000",strokeWidth:"2.4"}),(0,j.jsx)("path",{id:"Path_578","data-name":"Path 578",d:"M28.522,29.076s-3.373-.113-4.714-1.313c2.188-3.317,1-7.184,1.454-10.8s2.5-5.758,6.591-5.758h.056c3.952,0,6.083,2.145,6.535,5.758s-.8,7.9,1.44,10.8c-1.341,1.214-4.728,1.171-4.728,1.171h0a7.148,7.148,0,0,0,.141,2.371,3.564,3.564,0,0,0,1.694.776A32.748,32.748,0,0,1,40.646,33.1a5.942,5.942,0,0,1,3.19,5.25H32.5c-.311-1.129-2.442-3.147-4.516-4.206a9.478,9.478,0,0,0-3.486-.734s-.536-.847,1.228-1.171a12.031,12.031,0,0,0,2.71-.946C28.705,30.981,28.522,29.076,28.522,29.076Z",transform:"translate(19.536 -4.264)",fill:"none",stroke:"#000",strokeWidth:"2.4"})]}),(0,j.jsxs)("g",{id:"Group_703","data-name":"Group 703",transform:"translate(587.076 441)",children:[(0,j.jsxs)("g",{id:"Ellipse_74","data-name":"Ellipse 74",transform:"translate(-0.076)",fill:"#fff",stroke:"#000",strokeWidth:"2.4",children:[(0,j.jsx)("circle",{cx:"17",cy:"17",r:"17",stroke:"none"}),(0,j.jsx)("circle",{cx:"17",cy:"17",r:"15.8",fill:"none"})]}),(0,j.jsx)("text",{id:"_","data-name":"!",transform:"translate(13.924 25)",fontSize:"23",fontFamily:"Montserrat-SemiBold, Montserrat",fontWeight:"600",children:(0,j.jsx)("tspan",{x:"0",y:"0",children:"!"})})]})]})})}),(0,j.jsxs)("div",{style:{opacity:1},children:[(0,j.jsx)("h5",{style:{opacity:1},className:"text-[#013453] font-bold text-md m-0 opacity-100",children:null===(null===I||void 0===I?void 0:I.os_between_2_5)||"number"!==typeof(null===I||void 0===I?void 0:I.os_between_2_5)?0:ae(null===I||void 0===I?void 0:I.os_between_2_5)}),(0,j.jsx)("p",{className:"text-[#013453] text-xs m-0",children:"Outstanding between 2K & 5K"})]})]})})})]})}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h6",{className:"text-[#333333] text-md font-bold mt-1 mb-4",children:"Last Week Hisaab"}),(0,j.jsxs)(c.Z,{gutter:16,children:[(0,j.jsx)(m.Z,{className:"mb-3",xs:16,md:12,children:(0,j.jsx)("div",{className:"border-solid rounded-md bg-[#FFFFFF] shadow-sm shadow-#0000000F p-4",children:(0,j.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[(0,j.jsxs)("div",{className:"d-flex flex-row",children:[(0,j.jsx)("div",{className:"border-solid rounded-full bg-[#37BDC8] mr-3 p-3",children:(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 87 87",children:(0,j.jsxs)("g",{id:"Icon",transform:"translate(-20.532 -41.532)",children:[(0,j.jsxs)("g",{id:"Ellipse_64","data-name":"Ellipse 64",transform:"translate(20.532 41.532)",fill:"none",stroke:"#fff",strokeWidth:"3",children:[(0,j.jsx)("circle",{cx:"43.5",cy:"43.5",r:"43.5",stroke:"none"}),(0,j.jsx)("circle",{cx:"43.5",cy:"43.5",r:"42",fill:"none"})]}),(0,j.jsx)("path",{id:"Icon_awesome-rupee-sign","data-name":"Icon awesome-rupee-sign",d:"M33.933,9.3a1.322,1.322,0,0,0,1.322-1.322V3.572A1.322,1.322,0,0,0,33.933,2.25H1.322A1.322,1.322,0,0,0,0,3.572V8.5A1.322,1.322,0,0,0,1.322,9.824h9.4a7.948,7.948,0,0,1,6.717,3H1.322A1.322,1.322,0,0,0,0,14.149v4.407a1.322,1.322,0,0,0,1.322,1.322H18.813c-.685,3.976-3.631,6.46-8.236,6.46H1.322A1.322,1.322,0,0,0,0,27.659V33.5a1.322,1.322,0,0,0,.425.971L18.609,51.256a1.322,1.322,0,0,0,.9.351h9.1a1.322,1.322,0,0,0,.9-2.294L12.876,33.969c8.428-.258,14.448-5.883,15.239-14.092h5.818a1.322,1.322,0,0,0,1.322-1.322V14.149a1.322,1.322,0,0,0-1.322-1.322H27.467A15.091,15.091,0,0,0,25.9,9.3Z",transform:"translate(46.632 61.149)",fill:"#fff",stroke:"#37bdc8",strokeWidth:"3"})]})})})," ",(0,j.jsxs)("div",{children:[(0,j.jsxs)("h5",{className:(null===F||void 0===F?void 0:F.last_week_outstanding)<0?"text-[#FF0000] font-bold text-md m-0":"text-[#013453] font-bold text-md m-0",children:[(0,j.jsx)("span",{className:"font-sans font-semibold",children:"\u20b9"})," ",null===(null===F||void 0===F?void 0:F.last_week_outstanding)||"number"!==typeof(null===F||void 0===F?void 0:F.last_week_outstanding)?0:ae(null===F||void 0===F?void 0:F.last_week_outstanding).toFixed(1)]}),(0,j.jsx)("p",{className:"text-[#013453] font-bold text-xs mb-2.5",children:"Last Week Outstanding"}),(0,j.jsxs)("div",{onClick:function(){Y(!0),ee(!0),U(""),l({enterValue:1})},className:"d-flex flex-row justify-start",children:[(0,j.jsx)("button",{type:"button",className:"mr-2 text-[#013453] text-xs hover:text-[#37BDC8]",children:"More Details"}),(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 48 48",children:(0,j.jsxs)("g",{id:"arrow",transform:"translate(-197.656 -95.525)",children:[(0,j.jsx)("circle",{id:"Ellipse_73","data-name":"Ellipse 73",cx:"24",cy:"24",r:"24",transform:"translate(197.656 95.525)",fill:"#f1f0f1"}),(0,j.jsxs)("g",{id:"Icon_feather-arrow-right","data-name":"Icon feather-arrow-right",transform:"translate(204.156 102.025)",children:[(0,j.jsx)("path",{id:"Path_567","data-name":"Path 567",d:"M7.5,18h21",fill:"none",stroke:"#37bdc8",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"}),(0,j.jsx)("path",{id:"Path_568","data-name":"Path 568",d:"M18,7.5,28.5,18,18,28.5",fill:"none",stroke:"#37bdc8",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})]})]})})]})]})]}),(0,j.jsxs)("div",{className:"d-flex flex-row text-[#37BDC8]",children:[(0,j.jsx)(u.HTv,{size:22}),(0,j.jsxs)("h6",{className:"text-[#37BDC8] text-sm font-semibold",children:[" ",(null===F||void 0===F?void 0:F.count_last_week_outstanding)||0]})]})]})})}),(0,j.jsx)(m.Z,{className:"mb-3",xs:16,md:12,children:(0,j.jsx)("div",{className:"border-solid rounded-md bg-[#FFFFFF] shadow-sm shadow-#0000000F p-4",children:(0,j.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[(0,j.jsxs)("div",{className:"d-flex flex-row",children:[(0,j.jsx)("div",{className:"border-solid rounded-full bg-[#37BDC8] mr-3 px-3 pb-2 pt-4 ",children:(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"38",height:"34",viewBox:"0 0 47.777 65.288",children:(0,j.jsx)("path",{id:"Icon_awesome-rupee-sign","data-name":"Icon awesome-rupee-sign",d:"M42.135,11.005a1.642,1.642,0,0,0,1.642-1.642V3.892A1.642,1.642,0,0,0,42.135,2.25H1.642A1.642,1.642,0,0,0,0,3.892v6.122a1.642,1.642,0,0,0,1.642,1.642H13.308c3.736,0,6.6,1.362,8.341,3.728H1.642A1.642,1.642,0,0,0,0,17.025V22.5a1.642,1.642,0,0,0,1.642,1.642H23.36c-.851,4.937-4.509,8.021-10.227,8.021H1.642A1.642,1.642,0,0,0,0,33.8v7.252A1.642,1.642,0,0,0,.528,42.26L23.108,63.1a1.642,1.642,0,0,0,1.113.435H35.516a1.642,1.642,0,0,0,1.113-2.848L15.988,41.636c10.465-.32,17.941-7.3,18.922-17.5h7.225A1.642,1.642,0,0,0,43.777,22.5V17.025a1.642,1.642,0,0,0-1.642-1.642H34.106a18.739,18.739,0,0,0-1.95-4.378Z",transform:"translate(2 -0.25)",fill:"#fff",stroke:"#37bdc8",strokeWidth:"4"})})}),(0,j.jsxs)("div",{children:[(0,j.jsxs)("h5",{className:"text-[#013453] font-bold text-md m-0",children:[(0,j.jsx)("span",{className:"font-sans font-semibold",children:"\u20b9"})," ",null===(null===F||void 0===F?void 0:F.amount_recovered)||"number"!==typeof(null===F||void 0===F?void 0:F.amount_recovered)?0:ae(null===F||void 0===F?void 0:F.amount_recovered).toFixed(1)]}),(0,j.jsx)("p",{className:"text-[#013453] font-bold text-xs mb-2.5",children:"Amount Recovered"}),(0,j.jsxs)("div",{onClick:function(){Y(!0),ee(!1),U(""),l({enterValue:1})},className:"d-flex flex-row justify-start",children:[(0,j.jsx)("button",{type:"button",className:"mr-2 text-[#013453] text-xs hover:text-[#37BDC8]",children:"More Details"}),(0,j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 48 48",children:(0,j.jsxs)("g",{id:"arrow",transform:"translate(-197.656 -95.525)",children:[(0,j.jsx)("circle",{id:"Ellipse_73","data-name":"Ellipse 73",cx:"24",cy:"24",r:"24",transform:"translate(197.656 95.525)",fill:"#f1f0f1"}),(0,j.jsxs)("g",{id:"Icon_feather-arrow-right","data-name":"Icon feather-arrow-right",transform:"translate(204.156 102.025)",children:[(0,j.jsx)("path",{id:"Path_567","data-name":"Path 567",d:"M7.5,18h21",fill:"none",stroke:"#37bdc8",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"}),(0,j.jsx)("path",{id:"Path_568","data-name":"Path 568",d:"M18,7.5,28.5,18,18,28.5",fill:"none",stroke:"#37bdc8",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5"})]})]})})]})]})]}),(0,j.jsxs)("div",{className:"d-flex flex-row text-[#37BDC8]",children:[(0,j.jsx)(u.HTv,{size:22}),(0,j.jsxs)("h6",{className:"text-[#37BDC8] text-sm font-semibold",children:[" ",(null===F||void 0===F?void 0:F.count_amount_recovered)||0]})]})]})})}),(0,j.jsx)(m.Z,{md:24,className:!0===X?"container":"container d-none",children:!0===$?(0,j.jsx)(g,{hisaabHighOS:Z,onSearchDriver:ne,hisaabARValue:R}):(0,j.jsx)(b,{hisaabAmountRecovered:C,onSearchDriver:ne,hisaabARValue:R})})]})]})]})})),_=function(){return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(a.q,{title:"Dashboard"}),(0,j.jsxs)("div",{style:{fontFamily:"montserrat"},className:"flex flex-col pl-3 pr-10 mb-4",children:[(0,j.jsx)("div",{className:"mt-5 mb-3",children:(0,j.jsx)("span",{className:"font-bold text-[#333333] text-2xl",children:"Hisaab"})}),(0,j.jsx)(N,{})]})]})}},70895:function(e,t,n){n.d(t,{C3:function(){return d},Bq:function(){return l},Ud:function(){return c},bt:function(){return m},Yx:function(){return u},f4:function(){return h},oj:function(){return x},QT:function(){return f},a5:function(){return v},VX:function(){return p},SM:function(){return j},aC:function(){return g},fn:function(){return b},d:function(){return y},d8:function(){return k},us:function(){return N},lO:function(){return _},Om:function(){return w},Ai:function(){return F},zX:function(){return W},Xz:function(){return D},o0:function(){return E},kN:function(){return O},JL:function(){return I},nk:function(){return A},o:function(){return T},$p:function(){return M},vD:function(){return S},vB:function(){return Z},tf:function(){return B},WG:function(){return G},yz:function(){return V}});var a=n(1413),r=n(74569),s=n(88329),o=(n(71217),{Authorization:"Token ".concat(s.Z.get("token"))}),i=function(e){var t=e.url,n=e.method,s=e.headers,i=void 0===s?{}:s;try{return r({url:"".concat("https://jarvis.everestfleet.com").concat(t),method:n,headers:(0,a.Z)((0,a.Z)({},o),i)})}catch(d){return d}},d=function(){return i({url:"/fleet/api/teamApi/",method:"GET"})},l=function(e,t){var n=e.teamIDValue,a=t.startOfWeek,r=t.endOfWeek;return i({url:"/api/hisaab_summary/".concat(n,",").concat(a,",").concat(r,"/"),method:"GET"})},c=function(e,t){var n=e.teamIDValue,a=t.startOfWeek,r=t.endOfWeek;return i({url:"/api/hisaab_driveros/".concat(n,",").concat(a,",").concat(r,"/"),method:"GET"})},m=function(e,t){var n=e.teamIDValue,a=t.startOfWeek,r=t.endOfWeek;return i({url:"/api/highos/".concat(n,",").concat(a,",").concat(r,"/"),method:"GET"})},u=function(e,t){var n=e.teamIDValue,a=t.startOfWeek,r=t.endOfWeek;return i({url:"/api/recover_amt/".concat(n,",").concat(a,",").concat(r,"/"),method:"GET"})},h=function(e,t){var n=t.startOfWeek,a=t.endOfWeek;return i({url:"/api/weekly_hisaab/".concat(e,",").concat(n,",").concat(a,"/"),method:"GET"})},x=function(e){return i({url:"/api/driver_weekly_data/".concat(e,"/"),method:"GET"})},f=function(e,t){var n=e.teamIDValue,a=t.startOfWeek,r=t.endOfWeek;return i({url:"/api/car_summary/".concat(n,",").concat(a,",").concat(r,"/"),method:"GET"})},v=function(e,t){var n=e.startOfWeek,a=e.endOfWeek,r=t.cityIDValue;return i({url:"/api/incentive/".concat(n,",").concat(a,",").concat(r,"/"),method:"GET"})},p=function(e,t){var n=e.teamIDValue,a=t.startOfWeek,r=t.endOfWeek;return i({url:"/api/car_inctive/".concat(n,",").concat(a,",").concat(r,"/"),method:"GET"})},j=function(e,t){var n=e.teamIDValue,a=t.startOfWeek,r=t.endOfWeek;return i({url:"/api/car_status_weekly/".concat(n,",").concat(a,",").concat(r,"/"),method:"GET"})},g=function(e,t){var n=e.teamIDValue,a=t.day;return i({url:"/api/car_status/".concat(n,",").concat(a,"/"),method:"GET"})},b=function(e,t,n){var a=t.teamIDValue,r=n.day;return i({url:"/api/cardaily/".concat(e,",").concat(a,",").concat(r,",").concat(r,"/"),method:"GET"})},y=function(e,t,n,a){var r=t.carNumberValue,s=n.teamIDValue,o=a.startOfWeek,d=a.endOfWeek;return i({url:"/api/carweekly/".concat(e,",").concat(r,",").concat(s,",").concat(o,",").concat(d,"/"),method:"GET"})},k=function(e,t,n){var a=t.teamIDValue,r=n.startOfWeek,s=n.endOfWeek;return i({url:"/api/cardaily/".concat(e,",").concat(a,",").concat(r,",").concat(s,"/"),method:"GET"})},N=function(e,t){var n=e.teamIDValue,a=t.day;return i({url:"/api/driver_rating/".concat(n,",").concat(a,"/"),method:"GET"})},_=function(e,t,n){var a=t.teamIDValue,r=n.startOfWeek,s=n.endOfWeek;return i({url:"/api/driver_weekly/".concat(e,",").concat(a,",").concat(r,",").concat(s,"/"),method:"GET"})},w=function(e,t,n,a){var r=n.teamIDValue,s=a.startOfWeek,o=a.endOfWeek;return i({url:"/api/driver_daily/".concat(t,",").concat(r,",").concat(s,",").concat(o,",").concat(e,"/"),method:"GET"})},F=function(e,t){var n=t.startOfWeek,a=t.endOfWeek;return i({url:"/api/weekly_report/".concat(e,",").concat(n,",").concat(a,"/"),method:"GET"})},W=function(e,t){var n=t.startOfWeek,a=t.endOfWeek;return i({url:"/api/weekly_report/uberkm/".concat(e,",").concat(n,",").concat(a,"/"),method:"GET"})},D=function(e,t){var n=t.startOfWeek,a=t.endOfWeek;return i({url:"/api/weekly_campare/".concat(e,",").concat(n,",").concat(a,"/"),method:"GET"})},E=function(e,t){var n=t.startOfWeek,a=t.endOfWeek;return i({url:"/api/weekly_campare/uberkm/".concat(e,",").concat(n,",").concat(a,"/"),method:"GET"})},O=function(e,t){var n=e.teamIDValue,a=t.day;return i({url:"/api/dead_km/".concat(n,",").concat(a,"/"),method:"GET"})},I=function(e){var t=e.teamIDValue;return i({url:"/api/driver_report/".concat(t,"/"),method:"GET"})},A=function(e){return i({url:"/api/etm_summary/".concat(e,"/"),method:"GET"})},T=function(e){return i({url:"/api/monthly_report/".concat(e,"/"),method:"GET"})},M=function(e){return i({url:"/api/etm_cars/".concat(e,"/"),method:"GET"})},S=function(e){return i({url:"/api/driver_p/".concat(e,"/"),method:"GET"})},Z=function(e){return i({url:"/api/driver_rto/".concat(e,"/"),method:"GET"})},B=function(e){return i({url:"/api/daily_deadkm/".concat(e,"/"),method:"GET"})},G=function(e,t,n){var a=e.startOfWeek,r=e.endOfWeek,s=t.teamIDValue,o=n.day1,d=n.day2,l=n.day3,c=n.day4,m=n.day5,u=n.day6,h=n.day7;return i({url:"/fleet/driver_report?start_date=".concat(a,"+&end_date=").concat(r,"+&team_id=").concat(s,"&dates%5B%5D=").concat(o,"+&dates%5B%5D=").concat(d,"+&dates%5B%5D=").concat(l,"+&dates%5B%5D=").concat(c,"+&dates%5B%5D=").concat(m,"+&dates%5B%5D=").concat(u,"+&dates%5B%5D=").concat(h,"+"),method:"GET"})},V=function(e,t,n){var a=e.startOfWeek,r=e.endOfWeek,s=t.teamIDValue,o=n.day1,d=n.day2,l=n.day3,c=n.day4,m=n.day5,u=n.day6,h=n.day7;return i({url:"/fleet/car_report?start_date=".concat(a,"+&end_date=").concat(r,"+&team_id=").concat(s,"&dates%5B%5D=").concat(o,"+&dates%5B%5D=").concat(d,"+&dates%5B%5D=").concat(l,"+&dates%5B%5D=").concat(c,"+&dates%5B%5D=").concat(m,"+&dates%5B%5D=").concat(u,"+&dates%5B%5D=").concat(h,"+"),method:"GET"})}}}]);
//# sourceMappingURL=686.1f868e8e.chunk.js.map