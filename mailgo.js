!function(e,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?exports.mailgo=a():e.mailgo=a()}(window,(function(){return function(e){var a={};function t(o){if(a[o])return a[o].exports;var n=a[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=a,t.d=function(e,a,o){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(o,n,function(a){return e[a]}.bind(null,n));return o},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=0)}([function(e,a,t){"use strict";var o=document.createElement("style");o.id="mailgo-style",o.type="text/css";var n=document.createTextNode('.mailgo-modal{position:fixed;top:0;right:0;bottom:0;left:0;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;overflow:hidden;font-size:15px;z-index:10000}.mailgo-modal a,.mailgo-modal p,.mailgo-modal span,.mailgo-modal strong{margin:0;padding:0;font-size:100%;line-height:1;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}.mailgo-modal strong{font-weight:700}.mailgo-modal .mailgo-modal-background{position:absolute;z-index:10001;top:0;right:0;bottom:0;left:0;background-color:rgba(32,35,42,.75);opacity:.8}.mailgo-modal .mailgo-modal-content{position:relative;z-index:10002;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;text-align:center;min-width:200px;max-width:240px;background-color:#fff;opacity:.97;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;-webkit-box-shadow:0 3px 8px 0 rgba(32,35,42,.12);-moz-box-shadow:0 3px 8px 0 rgba(32,35,42,.12);box-shadow:0 3px 8px 0 rgba(32,35,42,.12);color:#4a4a4a;display:block;overflow:auto;padding:20px}.mailgo-modal .mailgo-modal-content:hover{opacity:1;-webkit-box-shadow:0 18px 30px 0 rgba(32,35,42,.23);-moz-box-shadow:0 18px 30px 0 rgba(32,35,42,.23);box-shadow:0 18px 30px 0 rgba(32,35,42,.23)}.mailgo-modal .mailgo-modal-content .mailgo-title{display:block;margin-bottom:5px;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis}.mailgo-modal .mailgo-modal-content .mailgo-details{margin-bottom:10px}.mailgo-modal .mailgo-modal-content .mailgo-details p{font-size:12px;margin-top:3px;margin-bottom:3px}.mailgo-modal .mailgo-modal-content a{display:block;padding:10px;color:#4a4a4a;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;text-decoration:none}.mailgo-modal .mailgo-modal-content a.mailgo-gmail{color:#d44638}.mailgo-modal .mailgo-modal-content a.mailgo-outlook{color:#0072c6}.mailgo-modal .mailgo-modal-content a.mailgo-wa{color:#00bfa5}.mailgo-modal .mailgo-modal-content a.mailgo-telegram{color:#08c}.mailgo-modal .mailgo-modal-content a.mailgo-skype{color:#00aff0}.mailgo-modal .mailgo-modal-content a.mailgo-copy{padding:16px 10px;font-size:16px}.mailgo-modal .mailgo-modal-content a.mailgo-copy:hover,.mailgo-modal .mailgo-modal-content a.mailgo-default:hover{background-color:rgba(0,0,0,.08);color:#4a4a4a}.mailgo-modal .mailgo-modal-content a.mailgo-gmail:hover{background-color:rgba(212,70,56,.08);color:#d44638}.mailgo-modal .mailgo-modal-content a.mailgo-outlook:hover{background-color:rgba(0,114,198,.08);color:#0072c6}.mailgo-modal .mailgo-modal-content a.mailgo-telegram:hover{background-color:rgba(0,114,198,.08);color:#08c}.mailgo-modal .mailgo-modal-content a.mailgo-wa:hover{background-color:rgba(0,191,165,.08);color:#00bfa5}.mailgo-modal .mailgo-modal-content a.mailgo-skype:hover{background-color:rgba(0,175,240,.08);color:#00aff0}.mailgo-modal .mailgo-modal-content a.mailgo-by{display:block;font-size:8px;margin-top:1rem;padding:0;color:#4a4a4a;opacity:.5}.mailgo-modal .mailgo-modal-content a.mailgo-by:hover{opacity:1}.mailgo-modal .mailgo-modal-content .mailgo-weight-500{font-weight:500}');o.appendChild(n),document.head.appendChild(o);var l,i,d,c,r,m,s,p,g="mailto:",u="tel:",h="callto:",b="javascript:void(0);",f="",v="",y="",x="",C="",k="",w="",E="",L="",N="",T=function(e,a){var t=0<arguments.length&&void 0!==e?e:"mail",o=1<arguments.length?a:void 0;if("mail"===t){if(o.href&&o.href.toLowerCase().startsWith(g)){v=decodeURIComponent(o.href.split("?")[0].split(g)[1].trim()),f=new URL(o.href);var n=new URLSearchParams(f.search);x=n.get("cc"),C=n.get("bcc"),k=n.get("subject"),w=n.get("body")}else v=o.getAttribute("data-address")+"@"+o.getAttribute("data-domain"),f=new URL(g+encodeURIComponent(v)),x=o.getAttribute("data-cc-address")+"@"+o.getAttribute("data-cc-domain"),C=o.getAttribute("data-bcc-address")+"@"+o.getAttribute("data-bcc-domain"),k=o.getAttribute("data-subject"),w=o.getAttribute("data-body");if(!H(v.split(",")))return;x&&!H(x.split(","))&&(x=""),C&&!H(C.split(","))&&(C="");var b=M("mailgo-title"),T=(M("mailgo-details"),M("mailgo-cc")),A=M("mailgo-cc-value"),R=M("mailgo-bcc"),U=M("mailgo-bcc-value"),_=M("mailgo-subject"),O=M("mailgo-subject-value"),D=M("mailgo-body"),P=M("mailgo-body-value");l=M("mailgo-gmail"),i=M("mailgo-outlook"),d=M("mailgo-open"),p=M("mailgo-copy"),b.innerHTML=v.split(",").join("<br/>"),x?(T.style.display="block",A.innerHTML=x.split(",").join("<br/>")):T.style.display="none",C?(R.style.display="block",U.innerHTML=C.split(",").join("<br/>")):R.style.display="none",k?(_.style.display="block",O.textContent=k):_.style.display="none",w?(D.style.display="block",P.textContent=w):D.style.display="none",l.addEventListener("click",(function(){return j.openGmail()})),i.addEventListener("click",(function(){return j.openOutlook()})),y=I(v),d.addEventListener("click",(function(){return j.openDefault()})),p.addEventListener("click",(function(){return j.copy(v||E)}))}if("tel"===t){o.href&&o.href.toLowerCase().startsWith(u)?E=decodeURIComponent(o.href.split("?")[0].split(u)[1].trim()):o.href&&o.href.toLowerCase().startsWith(h)?E=decodeURIComponent(o.href.split("?")[0].split(h)[1].trim()):o.hasAttribute("data-tel")&&(E=o.getAttribute("data-tel"),o.getAttribute("data-msg"));var G=M("mailgo-tel-title");o.hasAttribute("data-telegram")&&(L=o.getAttribute("data-telegram")),o.hasAttribute("data-skype")&&(N=o.getAttribute("data-skype")),c=M("mailgo-telegram"),r=M("mailgo-wa"),m=M("mailgo-skype"),s=M("mailgo-call"),p=M("mailgo-tel-copy"),G.innerHTML=E,r.addEventListener("click",(function(){return j.openWhatsApp()})),L&&(W("mailgo-telegram","block"),c.addEventListener("click",(function(){return j.openTelegram()}))),m.addEventListener("click",(function(){return j.openSkype()})),s.addEventListener("click",(function(){return j.callDefault()})),p.addEventListener("click",(function(){return j.copy(E)}))}S(t),document.addEventListener("keydown",z)},j={openGmail:function(){var e="https://mail.google.com/mail/u/0/?view=cm&source=mailto&to="+encodeURIComponent(v);x&&(e=e.concat("&cc="+encodeURIComponent(x))),C&&(e=e.concat("&bcc="+encodeURIComponent(C))),k&&(e=e.concat("&subject="+k)),w&&(e=e.concat("&body="+w)),window.open(e,"_blank"),R()},openOutlook:function(){var e="https://outlook.live.com/owa/?path=/mail/action/compose&to="+encodeURIComponent(v);k&&(e=e.concat("&subject="+k)),w&&(e=e.concat("&body="+w)),window.open(e,"_blank"),R()},openDefault:function(){_(y),R()},openTelegram:function(){var e="https://t.me/"+L;window.open(e,"_blank"),R()},openSkype:function(){var e="skype:"+(""!==N?N:E);window.open(e,"_blank"),R()},openWhatsApp:function(){var e="https://wa.me/"+E;window.open(e,"_blank"),R()},callDefault:function(){var e="tel:"+E;window.open(e),R()},copy:function(e){G(e),(p=U("mail")?M("mailgo-copy"):M("mailgo-tel-copy")).textContent="copied",setTimeout((function(){p.textContent="copy",R()}),999)}},A=function(e,a){var t=1<arguments.length&&void 0!==a?a:"mail";return"mail"===t?e.href&&e.href.toLowerCase().startsWith(g)&&!e.classList.contains("no-mailgo")||e.hasAttribute("data-address")&&(e.href&&"#mailgo"===e.getAttribute("href").toLowerCase()||e.classList&&e.classList.contains("mailgo")):"tel"===t&&(e.href&&(e.href.toLowerCase().startsWith(u)||e.href.toLowerCase().startsWith(h))&&!e.classList.contains("no-mailgo")||e.hasAttribute("data-tel")&&e.href&&"#mailgo"===e.getAttribute("href").toLowerCase()||e.classList&&e.classList.contains("mailgo"))},z=function(e){if(U("mail"))switch(e.keyCode){case 27:R();break;case 71:j.openGmail();break;case 79:j.openOutlook();break;case 32:case 13:j.openDefault();break;case 67:j.copy(v);break;default:return}else if(U("tel"))switch(e.keyCode){case 27:R();break;case 84:j.openTelegram();break;case 87:j.openWhatsApp();break;case 32:case 13:j.callDefault();break;case 67:j.copy(E);break;default:return}};document.addEventListener("DOMContentLoaded",(function(){var e=document.createElement("div");e.style.display="none",e.id="mailgo",e.classList.add("mailgo-modal");var a=document.createElement("div");a.className="mailgo-modal-background",e.appendChild(a);var t=document.createElement("div");t.className="mailgo-modal-content",e.appendChild(t);var o=document.createElement("strong");o.id="mailgo-title",o.className="mailgo-title",t.appendChild(o);var n=document.createElement("div");n.id="mailgo-details",n.className="mailgo-details";var l=document.createElement("p");l.id="mailgo-cc";var i=document.createElement("span");i.className="mailgo-weight-500";var d=document.createTextNode("cc ");i.appendChild(d);var c=document.createElement("span");c.id="mailgo-cc-value",l.appendChild(i),l.appendChild(c),n.appendChild(l);var r=document.createElement("p");r.id="mailgo-bcc";var m=document.createElement("span");m.className="mailgo-weight-500";var s=document.createTextNode("bcc ");m.appendChild(s);var p=document.createElement("span");p.id="mailgo-bcc-value",r.appendChild(m),r.appendChild(p),n.appendChild(r);var g=document.createElement("p");g.id="mailgo-subject";var u=document.createElement("span");u.className="mailgo-weight-500";var h=document.createTextNode("subject ");u.appendChild(h);var f=document.createElement("span");f.id="mailgo-subject-value",g.appendChild(u),g.appendChild(f),n.appendChild(g);var v=document.createElement("p");v.id="mailgo-body";var y=document.createElement("span");y.className="mailgo-weight-500";var x=document.createTextNode("body ");y.appendChild(x);var C=document.createElement("span");C.id="mailgo-body-value",v.appendChild(y),v.appendChild(C),n.appendChild(v),t.appendChild(n);var k=document.createElement("a");k.id="mailgo-gmail",k.href=b,k.classList.add("mailgo-open"),k.classList.add("mailgo-gmail");var w=document.createTextNode("open in ");k.appendChild(w);var E=document.createElement("span");E.className="mailgo-weight-500";var L=document.createTextNode("Gmail");E.appendChild(L),k.appendChild(E),t.appendChild(k);var N=document.createElement("a");N.id="mailgo-outlook",N.href=b,N.classList.add("mailgo-open"),N.classList.add("mailgo-outlook");var T=document.createTextNode("open in ");N.appendChild(T);var j=document.createElement("span");j.className="mailgo-weight-500";var A=document.createTextNode("Outlook");j.appendChild(A),N.appendChild(j),t.appendChild(N);var z=document.createElement("a");z.id="mailgo-open",z.href=b,z.classList.add("mailgo-open"),z.classList.add("mailgo-default");var S=document.createElement("span");S.className="mailgo-weight-500";var U=document.createTextNode("open");S.appendChild(U);var _=document.createTextNode(" default");z.appendChild(S),z.appendChild(_),t.appendChild(z);var I=document.createElement("a");I.id="mailgo-copy",I.href=b,I.classList.add("mailgo-copy"),I.classList.add("mailgo-weight-500");var M=document.createTextNode("copy");I.appendChild(M),t.appendChild(I);var O=document.createElement("a");O.href="https://mailgo.js.org?ref=mailgo-modal",O.className="mailgo-by",O.target="_blank",O.rel="noopener noreferrer";var W=document.createTextNode("mailgo.js.org");O.appendChild(W),t.appendChild(O),document.body.appendChild(e),a.addEventListener("click",R);var D=document.createElement("div");D.style.display="none",D.id="mailgo-tel",D.classList.add("mailgo-modal");var P=document.createElement("div");P.className="mailgo-modal-background",D.appendChild(P);var H=document.createElement("div");H.className="mailgo-modal-content",D.appendChild(H);var G=document.createElement("strong");G.id="mailgo-tel-title",G.className="mailgo-title",H.appendChild(G);var B=document.createElement("a");B.id="mailgo-telegram",B.href=b,B.classList.add("mailgo-open"),B.classList.add("mailgo-telegram"),B.style.display="none";var Z=document.createTextNode("open in ");B.appendChild(Z);var F=document.createElement("span");F.className="mailgo-weight-500";var $=document.createTextNode("Telegram");F.appendChild($),B.appendChild(F),H.appendChild(B);var q=document.createElement("a");q.id="mailgo-wa",q.href=b,q.classList.add("mailgo-open"),q.classList.add("mailgo-wa");var J=document.createTextNode("open in ");q.appendChild(J);var K=document.createElement("span");K.className="mailgo-weight-500";var Q=document.createTextNode("WhatsApp");K.appendChild(Q),q.appendChild(K),H.appendChild(q);var V=document.createElement("a");V.id="mailgo-skype",V.href=b,V.classList.add("mailgo-open"),V.classList.add("mailgo-skype");var X=document.createTextNode("open in ");V.appendChild(X);var Y=document.createElement("span");Y.className="mailgo-weight-500";var ee=document.createTextNode("Skype");Y.appendChild(ee),V.appendChild(Y),H.appendChild(V);var ae=document.createElement("a");ae.id="mailgo-call",ae.href=b,ae.classList.add("mailgo-open"),ae.classList.add("mailgo-default");var te=document.createElement("span");te.className="mailgo-weight-500";var oe=document.createTextNode("call");te.appendChild(oe);var ne=document.createTextNode(" as default");ae.appendChild(te),ae.appendChild(ne),H.appendChild(ae);var le=document.createElement("a");le.id="mailgo-tel-copy",le.href=b,le.classList.add("mailgo-copy"),le.classList.add("mailgo-weight-500");var ie=document.createTextNode("copy");le.appendChild(ie),H.appendChild(le);var de=document.createElement("a");de.href="https://mailgo.js.org?ref=mailgo-modal",de.className="mailgo-by",de.target="_blank",de.rel="noopener noreferrer";var ce=document.createTextNode("mailgo.js.org");de.appendChild(ce),H.appendChild(de),document.body.appendChild(D),P.addEventListener("click",R)})),document.addEventListener("click",(function(e){if(document.contains(M("mailgo"))&&document.contains(M("mailgo-tel"))&&!U("mail")&&!U("tel")){var a=e.path||e.composedPath&&e.composedPath()||D(e.target);a&&a.forEach((function(a){if(!(a instanceof HTMLDocument||a instanceof Window))return A(a,"mail")?(e.preventDefault(),void T("mail",a)):A(a,"tel")?(e.preventDefault(),void T("tel",a)):void 0}))}}));var S=function(e){var a=0<arguments.length&&void 0!==e?e:"mail";"mail"!==a?"tel"!==a||W("mailgo-tel","flex"):W("mailgo","flex")},R=function(){W("mailgo","none"),W("mailgo-tel","none"),document.removeEventListener("keydown",z)},U=function(e){var a=0<arguments.length&&void 0!==e?e:"mail";return"mail"===a?"flex"===O("mailgo"):"tel"===a&&"flex"===O("mailgo-tel")},_=function(e){return window.location.href=g+atob(e)},I=function(e){return btoa(e)},M=function(e){return document.getElementById(e)},O=function(e){return M(e).style.display},W=function(e,a){return M(e).style.display=a},D=function(e){for(var a=[];e;){if(a.push(e),"HTML"===e.tagName)return a.push(document),a.push(window),a;e=e.parentElement}},P=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},H=function(e){return e.every(P)},G=function(e){var a=document.createElement("textarea");a.value=e,a.setAttribute("readonly",""),a.style.position="absolute",a.style.left="-9999px",document.body.appendChild(a);var t=0<document.getSelection().rangeCount&&document.getSelection().getRangeAt(0);a.select(),document.execCommand("copy"),document.body.removeChild(a),t&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(t))}}])}));