(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[37595],{366284:(e,t,n)=>{n.d(t,{G6:()=>a,i7:()=>s,oi:()=>r,u$:()=>o,un:()=>c,vU:()=>i});const r=Object.freeze({OTHER:0,CHROME:1,SAFARI:2,IE:3,FIREFOX:4,OPERA:5,EDGE:6}),o=e=>{switch(!0){case e.includes("Chrome"):return r.CHROME;case e.includes("Safari"):return r.SAFARI;case e.includes("Firefox"):return r.FIREFOX;case e.includes("Opera"):return r.OPERA;case e.includes("IE"):return r.IE;case e.includes("Edge"):return r.EDGE;default:return r.OTHER}};function a(e){return o(e)===r.SAFARI}function s(e){return o(e)===r.CHROME}function i(e){return o(e)===r.FIREFOX}function c(e){return o(e)===r.EDGE}},332730:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(56641),o=n(954931),a=n(867820);const s=e=>{(0,o.Z)(e)||(e="/",(0,a.My)("url_reset")),(0,r.Z)(e,!1)}},202139:(e,t,n)=>{n.d(t,{DH:()=>r,F4:()=>s,FS:()=>o,N1:()=>l,N9:()=>c,UK:()=>a,VL:()=>i,v6:()=>u});const r=1e3,o=60*r,a=60*o,s=24*a,i=7*s,c=30*s,u=31*s,l=365*s},966476:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(667294);const o=()=>{const[e,t]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{t(!0)}),[]),e}},233211:(e,t,n)=>{n.d(t,{B$:()=>u,Cw:()=>s,I7:()=>c,c4:()=>i});var r=n(667294),o=n(425288);const a=(0,r.createContext)(null),s=()=>(0,r.useContext)(a),i=a.Provider,{Provider:c,useHook:u}=(0,o.Z)("DesktopCoreLogin")},499128:(e,t,n)=>{n.d(t,{UZ:()=>u,Vg:()=>c,ZP:()=>l});var r=n(667294),o=n(829407),a=n(50286),s=n(883119),i=n(785893);const c=200,u=({deviceType:e,hiding:t,visible:n})=>({marginTop:"desktop"===e?10:0,opacity:0,position:"relative",transform:"desktop"===e?"translateY(200px)":"translateY(-200px)",transition:"opacity 0.1s ease-in-out",visibility:"hidden",pointerEvents:"auto",...n?{opacity:1,transform:"translateY(0)",transition:"all 0.7s cubic-bezier(.19, 1.15, .48, 1)",visibility:"visible"}:{},...n&&t?{opacity:0,transform:"scale(1.1)",transition:"opacity transform 0.2s"}:{}});function l({button:e,dataTestId:t,duration:n=2e3,href:l,iconThumbnail:d,imageUrl:_,onClick:p,onHide:g,openNewPage:h,text:f,thumbnailShape:m="square",variant:v="default"}){const w=(0,a.ZP)(),[b,E]=(0,r.useState)(!1),[y,O]=(0,r.useState)(!1),Z=(0,r.useRef)(),I=()=>{E(!0),Z.current=setTimeout(g,c)},T=()=>{Z.current&&clearTimeout(Z.current)},S=()=>{Z.current=setTimeout(I,n)};(0,o.Z)((()=>(setTimeout((()=>O(!0)),100),S(),T)));const A="string"==typeof f?f:`${f[0]} ${f[1]}`,P=_?(0,i.jsx)(s.xu,{height:48,overflow:"hidden",width:48,children:(0,i.jsx)(s.Ee,{alt:A,fit:"cover",naturalHeight:1,naturalWidth:1,src:_})}):void 0,C=(0,i.jsx)(s.FN,{button:e,text:f,thumbnail:null!=d?d:P,thumbnailShape:m,variant:v});return(0,i.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:{...u({deviceType:w,hiding:b,visible:y})}},"data-test-id":null!=t?t:"toast",onMouseEnter:T,onMouseLeave:S,children:l?(0,i.jsx)(s.iP,{role:"link",href:l,onTap:({event:e})=>null==p?void 0:p(e),target:h?"blank":null,rounding:"pill",children:C}):C})}},349700:(e,t,n)=>{function r(e,t,n){return e.split(n).map((e=>{if(e.match(n)){const n=e.replace(/[\{\}]/g,"").trim();if(Object.prototype.hasOwnProperty.call(t,n))return t[n]}return e}))}n.d(t,{Wc:()=>s,bF:()=>c,nk:()=>a});const o=/(\{\{\s*\w+\s*\}\})/g;function a(e,t){return r(e,t,o)}function s(e,t){return r(e,t,o).join("")}const i=/(\{\s*\w+\s*\})/g;function c(e,t){return r(e,t,i)}},713930:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(172071);function o(e,t){return new Promise(((n,o)=>{if(document.querySelector(`script[src="${e}"]`)){let e=0;if("FACEBOOK"===t)if(window.FB)n();else{const t=setInterval((()=>{window.FB||20===e?(clearInterval(t),n()):(e+=1,r.Z.increment(`mweb.loadScript.facebook.tries_${e}`,.01))}),100)}else if("GSI"===t)if(window.google)n();else{const t=setInterval((()=>{window.google||20===e?(clearInterval(t),n()):(e+=1,r.Z.increment(`mweb.loadScript.gsi.tries_${e}`,.01))}),100)}else n()}else{const t=document.createElement("script");t.src=e,t.async=!0,t.addEventListener("load",(()=>n())),t.addEventListener("error",o),document.getElementsByTagName("head")[0].appendChild(t)}}))}},524172:(e,t,n)=>{n.d(t,{M:()=>g,Z:()=>h});var r=n(667294),o=n(914772),a=n(366284),s=n(773285),i=n(50286),c=n(780280),u=n(425288),l=n(304930),d=n(83969),_=n(785893);const{Provider:p,useMaybeHook:g}=(0,u.Z)("GoogleSignInApi");function h({children:e}){const t=(()=>{const e=(0,i.HG)(),{checkExperiment:t}=(0,s.F)();return!(0,l.ZP)()||t(e?"web_google_disabled":"mweb_google_disabled").anyEnabled})(),n=(()=>{const{userAgent:e}=(0,c.B)(),{browserName:t,platform:n}=e,r=null!=t?t:"";return(0,a.G6)(r)||"ios"===n})(),u=(0,l.j_)(),g=(0,l.Or)(),h=(0,r.useRef)("enabled_allow_duplicated_handlers"===u),f=(0,r.useRef)(null),m=(0,r.useRef)(new Set),v=(0,r.useRef)(new Set),w=(0,r.useRef)(null);(0,r.useEffect)((()=>{if(t)m.current.clear(),v.current.clear();else{window.onGoogleLibraryLoad=()=>{(0,o.Z)({type:"loadScript",status:"success"});const e=(0,d.Fm)();(0,o.Z)({type:"apiClient",valid:!!e}),e&&(w.current=e,v.current.forEach((t=>t(e))),v.current.clear(),(0,d.OY)({autoSelect:!0,itpSupport:n},(e=>{if((0,o.Z)({type:"response",valid:!!e}),!e)return;const t=(0,d.PL)(e.select_by);var n;if(g("sdk_manager_received_response",t),h.current)return null===(n=f.current)||void 0===n||n.call(f,e),void m.current.forEach((t=>t(e)));if("SIGN_IN_WITH_GOOGLE_BUTTON"===t){const t=Array.from(m.current),n=t[t.length-1];n&&n(e)}else{var r;null===(r=f.current)||void 0===r||r.call(f,e)}})))};(async()=>{(0,o.Z)({type:"loadScript",status:"start"});try{await(0,d.Px)({unsafe:!0})}catch(e){}})()}}),[t,n,g]);const b=(0,r.useRef)({ensureInit:(e,t)=>("button"===e?m.current.add(t):f.current=t,new Promise((e=>{w.current?e(w.current):v.current.add(e)}))),removeCallback:e=>{m.current.delete(e)}});return(0,_.jsx)(p,{value:b.current,children:e})}},79830:(e,t,n)=>{n.d(t,{I6:()=>p,Ib:()=>f,PF:()=>_,Tr:()=>m,W7:()=>a,YC:()=>c,a2:()=>d,a7:()=>l,h5:()=>r,hC:()=>s,lA:()=>v,n$:()=>o,oo:()=>g,s7:()=>u,vI:()=>i,vq:()=>h});const r="MULTIPLE_ACCOUNTS",o="MULTIPLE_ACCOUNTS_GROUP",a="account_switcher_flyout",s="account_switcher_modal",i="vmp_account_switcher_modal",c="account_recovery",u="closeup",l="google_one_tap_modal",d="hybrid_clickthrough",_="pin_image",p="response_flyout",g="unauth_header",h="facebook",f="twitter",m="google",v="microsoft"},83969:(e,t,n)=>{n.d(t,{Fm:()=>s,OY:()=>c,PL:()=>l,Px:()=>i,mK:()=>d,ru:()=>u});var r=n(713930),o=n(966113),a=n(867820);const s=()=>{var e,t,n;return null===(e=window)||void 0===e||null===(t=e.google)||void 0===t||null===(n=t.accounts)||void 0===n?void 0:n.id},i=e=>(0,r.Z)("https://accounts.google.com/gsi/client",null!=e&&e.unsafe?null:"GSI"),c=({autoSelect:e,itpSupport:t},n)=>{var r;null===(r=s())||void 0===r||r.initialize({auto_select:null!=e&&e,client_id:o.Z.settings.GPLUS_CLIENT_ID,callback:n,cancel_on_tap_outside:!1,context:"use",itp_support:t})},u=({buttonRef:e,isDesktop:t})=>{const n=s();if(n&&e.current){const t=e.current.offsetWidth;n.renderButton(e.current,{size:"large",shape:"pill",text:"continue_with",theme:"outline",width:t+"px"})}else(0,a.My)((t?"unauth_web":"unauth_mweb")+".gsi_button.not_initialized")},l=e=>"auto"===e?"AUTO_LOGIN":e.startsWith("btn")?"SIGN_IN_WITH_GOOGLE_BUTTON":"ONE_TAP_PROMPT",d=e=>{switch(e){case"SIGN_IN_WITH_GOOGLE_BUTTON":return"gsi_btn";case"ONE_TAP_PROMPT":return"onetap_btn";default:return"other"}}},45169:(e,t,n)=>{n.d(t,{E_:()=>c,NN:()=>s,Y:()=>a,du:()=>i});var r=n(966113),o=n(693099);const a=e=>e.facebook_id?"facebook":e.google_open_id_token?"google_one_tap":e.gplus_code||e.gplus_id_token?"google":e.line_id_token?"line":e.email?"email":"other",s=(e="")=>e in r.Z.settings.MINIMUM_AGE_BY_EU_COUNTRY,i=e=>o.rT.includes(e)||o.ZR.has(e)||s(e),c={GOOGLE:"g",FACEBOOK:"fb",PINTEREST:"p",APPLE:"apl",LINE:"ln",UNKNOWN:"unk"}},914772:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(701563),o=n(867820);const a=e=>(0,o.dy)({event:e,provider:"google"}),s=e=>(0,r.RP)("google_autologin",e),i=e=>(0,r.M3)("google_autologin",e),c=e=>{switch(e.type){case"loadScript":"start"===e.status?(a("start"),a("load_script_start"),i("autoLoginGoogleStart")):"success"===e.status?a("load_script_success"):a("load_script_failure");break;case"apiClient":e.valid?(a("initialize_library"),i("autoLoginGoogleInitEnd")):(s("noAccountFound"),a("global_object_not_found"));break;case"response":e.valid?a("receive_credential_response_from_provider"):s("noResponse");break;case"autologin":"start"===e.status?(a("pinterest_login_start"),(0,o.NC)("press_google_one_tap_other"),(0,r.M3)("google_autologin","autoLoginGoogleEnd"),(0,r.PA)("google_autologin")):"success"===e.status?(a("pinterest_login_success"),a("end")):(a("pinterest_login_failure"),a("end"));break;case"oneTapPromptLoginAttempt":(0,o.NC)("press_google_one_tap"),(0,r.PA)("google_autologin")}}},304930:(e,t,n)=>{n.d(t,{Or:()=>d,ZP:()=>_,j_:()=>l});var r=n(667294),o=n(466225),a=n(19121),s=n(867820),i=n(773285),c=n(50286);const u=()=>{const e=(0,c.HG)(),{isAuth:t}=(0,a.Z)();return t?e?"auth_dweb_auth_google_sign_in_safe_mode":"auth_mweb_auth_google_sign_in_safe_mode":e?"unauth_dweb_auth_google_sign_in_safe_mode":"unauth_mweb_auth_google_sign_in_safe_mode"},l=()=>{const{checkExperiment:e}=(0,i.F)();return e(u()).group},d=()=>{const{checkExperiment:e}=(0,i.F)(),t=u();return(0,r.useCallback)(((n,r)=>{const{group:o}=e(t,{dangerouslySkipActivation:!0});o&&(0,s.My)("pinner_conversion.gsi_safe_mode_exp",{expName:t,group:o,event:n,selectByType:null!=r?r:"none"})}),[t,e])},_=()=>(0,o.Z)(l())},466225:(e,t,n)=>{n.d(t,{Z:()=>r});const r=e=>e.startsWith("enabled")||e.startsWith("employee")},701563:(e,t,n)=>{n.d(t,{M3:()=>h,PA:()=>f,RP:()=>g,gq:()=>_});var r=n(729524),o=n(991067),a=n(543059),s=n(358864),i=n(558775),c=n(985271),u=n(638089),l=n(790348);const d={},_=(e,t)=>{t.forEach((t=>{d[t]=(({name:e,pwtStaticContext:t})=>{if(!c.Z||!(0,o.Z)())return null;const n={type:"stopwatch",name:e},a=[];let l=!0;return{abort:e=>{l&&(l=!1,(0,i.Z)({metricId:n,pwtStaticContext:t,result:{type:"ABORT",reason:e}}))},annotate:e=>{l&&a.push({label:e,timestamp:c.Z.now()})},stop:()=>{if(!l)return;l=!1;const e={type:"COMPLETE",traceId:(0,s.Z)(),startTime:0,endTime:c.Z.now(),spans:[],annotationMap:(0,r.Z)(a),binaryAnnotationMap:(0,u.ng)({metricId:n,pwtStaticContext:t})};(0,i.Z)({metricId:n,pwtStaticContext:t,result:e})}}})({name:t,pwtStaticContext:e})}))},p=e=>d[e],g=(e,t)=>{const n=p(e);if(n)try{n.abort(t)}catch(r){(0,l.H)("app_load_stopwatch_error",{name:e,result:"abort"})}},h=(e,t)=>{const n=p(e);n&&(n.annotate(t),(0,a.ZP)(`stopwatch_${e}_${t}`))},f=e=>{const t=p(e);if(t)try{t.stop()}catch(n){(0,l.H)("app_load_stopwatch_error",{name:e,result:"complete"})}}},729524:(e,t,n)=>{n.d(t,{Z:()=>r});const r=e=>{let t={};e.forEach((({label:e,timestamp:n})=>{t={...t,[e]:(t[e]||[]).concat([n])}}));let n=Object.freeze({});return Object.keys(t).forEach((e=>{(t[e]||[]).forEach(((t,r)=>{const o=r?`${e}_${r+1}`:e;n={...n,[o]:t}}))})),n}},874103:(e,t,n)=>{n.d(t,{OA:()=>l,f$:()=>g,rY:()=>c,sk:()=>h,wQ:()=>d,xW:()=>_,yc:()=>u,ys:()=>p});var r=n(172071);const o="onloadRecaptchaJsCallback",a="6Ldx7ZkUAAAAAF3SZ05DRL2Kdh911tCa3qFP0-0r",s="recaptcha-enterprise-src",i=(e,t,n)=>{r.Z.increment("recaptcha_v3.request_token.attempt",.1,{action:n}),void 0===window.grecaptcha||void 0===window.grecaptcha.enterprise?(t(new Error("Error loading reCAPTCHA Enterprise")),r.Z.increment("recaptcha_v3.request_token.js_loading_error",.1,{action:n})):window.grecaptcha.enterprise.ready((()=>{try{window.grecaptcha.enterprise.execute(a,{action:n}).then(e).catch(t)}catch(o){r.Z.increment("recaptcha_v3.request_token.exec_error",.1,{action:n}),t(o)}}))},c=(e,t,n)=>{if(window[o]=function(){return i(e,t,n)},document.getElementById(s))i(e,t,n);else{const e=document.createElement("script");e.id=s,e.src=`https://www.recaptcha.net/recaptcha/enterprise.js?onload=${o}&render=${a}`;const t=document.getElementsByTagName("script")[0];t.parentNode&&t.parentNode.insertBefore(e,t)}},u=105e3,l=8e3,d="mweb_auth",_="mweb_login",p="mweb_signup",g="web_auth",h="web_unauth"},829407:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(667294);const o=e=>{(0,r.useEffect)(e,[])}},807609:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(411465),o=n(966476);const a=()=>{const e=(0,r.Z)(),t=(0,o.Z)();return e&&!t}},411465:(e,t,n)=>{n.d(t,{G:()=>i,Z:()=>c});var r=n(667294),o=n(276775),a=n(785893);const s=(0,r.createContext)(!0);function i({children:e}){const t=(0,o.TH)(),[n,i]=(0,r.useState)(!0),c=(0,r.useRef)(t);return(0,r.useEffect)((()=>{c.current!==t&&(c.current=t,i(!1))}),[t]),(0,a.jsx)(s.Provider,{value:n,children:e})}function c(){return(0,r.useContext)(s)}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/37595-fac0d2703492e26a.mjs.map