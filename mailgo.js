!function(e,a){"object"==typeof exports&&"object"==typeof module?module.exports=a():"function"==typeof define&&define.amd?define([],a):"object"==typeof exports?exports.mailgo=a():e.mailgo=a()}(window,(function(){return function(e){var a={};function t(o){if(a[o])return a[o].exports;var n=a[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=a,t.d=function(e,a,o){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(o,n,function(a){return e[a]}.bind(null,n));return o},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=0)}([function(e,a,t){"use strict";var o=document.createElement("style");o.id="mailgo-style",o.type="text/css";var n=document.createTextNode('.mailgo-modal{position:fixed;top:0;right:0;bottom:0;left:0;justify-content:center;align-items:center;flex-direction:column;overflow:hidden;font-size:15px;z-index:10000}.mailgo-modal a,.mailgo-modal p,.mailgo-modal span,.mailgo-modal strong{margin:0;padding:0;font-size:100%;line-height:1;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"}.mailgo-modal strong{font-weight:700}.mailgo-modal .mailgo-modal-background{position:absolute;z-index:10001;top:0;right:0;bottom:0;left:0;background-color:rgba(32,35,42,.75);opacity:.8}.mailgo-modal .mailgo-modal-content{position:relative;z-index:10002;box-sizing:content-box;text-align:center;min-width:200px;max-width:240px;background-color:#fff;opacity:.97;border-radius:5px;box-shadow:0 3px 8px 0 rgba(32,35,42,.12);color:#4a4a4a;display:block;overflow:auto;padding:20px}.mailgo-modal .mailgo-modal-content:hover{opacity:1;box-shadow:0 18px 30px 0 rgba(32,35,42,.23)}.mailgo-modal .mailgo-modal-content .mailgo-title{display:block;margin-bottom:5px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.mailgo-modal .mailgo-modal-content .mailgo-details{margin-bottom:10px}.mailgo-modal .mailgo-modal-content .mailgo-details p{font-size:12px;margin-top:3px;margin-bottom:3px}.mailgo-modal .mailgo-modal-content a{display:block;padding:10px;color:#4a4a4a;border-radius:5px;text-decoration:none}.mailgo-modal .mailgo-modal-content a.mailgo-gmail{color:#d44638}.mailgo-modal .mailgo-modal-content a.mailgo-outlook{color:#0072c6}.mailgo-modal .mailgo-modal-content a.mailgo-copy{padding:16px 10px;font-size:16px}.mailgo-modal .mailgo-modal-content a.mailgo-copy:hover,.mailgo-modal .mailgo-modal-content a.mailgo-default:hover{background-color:rgba(0,0,0,.08);color:#4a4a4a}.mailgo-modal .mailgo-modal-content a.mailgo-outlook:hover{background-color:rgba(0,114,198,.08);color:#0072c6}.mailgo-modal .mailgo-modal-content a.mailgo-gmail:hover{background-color:rgba(212,70,56,.08);color:#d44638}.mailgo-modal .mailgo-modal-content a.mailgo-by{display:block;font-size:8px;margin-top:1rem;padding:0;color:#4a4a4a;opacity:.5}.mailgo-modal .mailgo-modal-content a.mailgo-by:hover{opacity:1}.mailgo-modal .mailgo-modal-content .mailgo-weight-500{font-weight:500}');o.appendChild(n),document.head.appendChild(o);var l={openGmail:function(e,a,t,o,n){var l="https://mail.google.com/mail/u/0/?view=cm&source=mailto&to="+encodeURIComponent(e);a&&(l=l.concat("&cc="+encodeURIComponent(a))),t&&(l=l.concat("&bcc="+encodeURIComponent(t))),o&&(l=l.concat("&subject="+o)),n&&(l=l.concat("&body="+n)),window.open(l,"_blank")},openOutlook:function(e,a,t){var o="https://outlook.live.com/owa/?path=/mail/action/compose&to="+encodeURIComponent(e);a&&(o=o.concat("&subject="+a)),t&&(o=o.concat("&body="+t)),window.open(o,"_blank")},openDefault:function(e){s(e)},openWhatsApp:function(e,a){var t="https://wa.me/"+e;window.open(t,"_blank")},openTelegram:function(e,a){var t="tg://msg?text="+(1<arguments.length&&void 0!==a?a:"")+"&to="+e;window.open(t,"_blank")},callDefault:function(e){var a="tel:"+e;window.open(a,"_blank")},copy:function(e,a){v(e),a.textContent="copied",setTimeout((function(){return a.textContent="copy"}),999)}},i=function(e,a,t,o,n,i,d){if(p())switch(event.keyCode){case 27:m();break;case 71:l.openGmail(e,a,t,o,n);break;case 79:l.openOutlook(e,o,n);break;case 32:case 13:l.openDefault(i);break;case 67:l.copy(e,d);break;default:return}};document.addEventListener("DOMContentLoaded",(function(){var e=document.createElement("div");e.style.display="none",e.id="mailgo",e.classList.add("mailgo-modal");var a=document.createElement("div");a.className="mailgo-modal-background",e.appendChild(a);var t=document.createElement("div");t.className="mailgo-modal-content",e.appendChild(t);var o=document.createElement("strong");o.id="mailgo-title",o.className="mailgo-title",t.appendChild(o);var n=document.createElement("div");n.id="mailgo-details",n.className="mailgo-details";var l=document.createElement("p");l.id="mailgo-cc";var i=document.createElement("span");i.className="mailgo-weight-500";var d=document.createTextNode("cc ");i.appendChild(d);var c=document.createElement("span");c.id="mailgo-cc-value",l.appendChild(i),l.appendChild(c),n.appendChild(l);var r=document.createElement("p");r.id="mailgo-bcc";var p=document.createElement("span");p.className="mailgo-weight-500";var s=document.createTextNode("bcc ");p.appendChild(s);var g=document.createElement("span");g.id="mailgo-bcc-value",r.appendChild(p),r.appendChild(g),n.appendChild(r);var u=document.createElement("p");u.id="mailgo-subject";var f=document.createElement("span");f.className="mailgo-weight-500";var h=document.createTextNode("subject ");f.appendChild(h);var v=document.createElement("span");v.id="mailgo-subject-value",u.appendChild(f),u.appendChild(v),n.appendChild(u);var b=document.createElement("p");b.id="mailgo-body";var y=document.createElement("span");y.className="mailgo-weight-500";var C=document.createTextNode("body ");y.appendChild(C);var x=document.createElement("span");x.id="mailgo-body-value",b.appendChild(y),b.appendChild(x),n.appendChild(b),t.appendChild(n);var w=document.createElement("a");w.id="mailgo-gmail",w.href="#mailgo-gmail",w.classList.add("mailgo-open"),w.classList.add("mailgo-gmail");var E=document.createTextNode("open in ");w.appendChild(E);var k=document.createElement("span");k.className="mailgo-weight-500";var L=document.createTextNode("Gmail");k.appendChild(L),w.appendChild(k),t.appendChild(w);var N=document.createElement("a");N.id="mailgo-outlook",N.href="#mailgo-outlook",N.classList.add("mailgo-open"),N.classList.add("mailgo-outlook");var T=document.createTextNode("open in ");N.appendChild(T);var j=document.createElement("span");j.className="mailgo-weight-500";var A=document.createTextNode("Outlook");j.appendChild(A),N.appendChild(j),t.appendChild(N);var R=document.createElement("a");R.id="mailgo-open",R.href="#mailgo-open",R.classList.add("mailgo-open"),R.classList.add("mailgo-default");var S=document.createElement("span");S.className="mailgo-weight-500";var U=document.createTextNode("open");S.appendChild(U);var O=document.createTextNode(" default");R.appendChild(S),R.appendChild(O),t.appendChild(R);var _=document.createElement("a");_.id="mailgo-copy",_.href="#mailgo-copy",_.classList.add("mailgo-copy"),_.classList.add("mailgo-weight-500");var I=document.createTextNode("copy");_.appendChild(I),t.appendChild(_);var M=document.createElement("a");M.href="https://mailgo.js.org?ref=mailgo-modal",M.className="mailgo-by",M.target="_blank",M.rel="noopener noreferrer";var z=document.createTextNode("mailgo.js.org");M.appendChild(z),t.appendChild(M),document.body.appendChild(e),a.addEventListener("click",m)})),document.addEventListener("DOMContentLoaded",(function(){var e=document.createElement("div");e.style.display="none",e.id="mailgo-tel",e.classList.add("mailgo-modal");var a=document.createElement("div");a.className="mailgo-modal-background",e.appendChild(a);var t=document.createElement("div");t.className="mailgo-modal-content",e.appendChild(t);var o=document.createElement("strong");o.id="mailgo-title",o.className="mailgo-title",t.appendChild(o);var n=document.createElement("a");n.id="mailgo-wa",n.href="#mailgo-wa",n.classList.add("mailgo-open"),n.classList.add("mailgo-wa");var l=document.createTextNode("open in ");n.appendChild(l);var i=document.createElement("span");i.className="mailgo-weight-500";var d=document.createTextNode("WhatsApp");i.appendChild(d),n.appendChild(i),t.appendChild(n);var c=document.createElement("a");c.id="mailgo-telegram",c.href="#mailgo-telegram",c.classList.add("mailgo-open"),c.classList.add("mailgo-telegram");var r=document.createTextNode("open in ");c.appendChild(r);var p=document.createElement("span");p.className="mailgo-weight-500";var s=document.createTextNode("Telegram");p.appendChild(s),c.appendChild(p),t.appendChild(c);var g=document.createElement("a");g.id="mailgo-open",g.href="#mailgo-open",g.classList.add("mailgo-open"),g.classList.add("mailgo-default");var u=document.createElement("span");u.className="mailgo-weight-500";var f=document.createTextNode("call");u.appendChild(f);var h=document.createTextNode(" default");g.appendChild(u),g.appendChild(h),t.appendChild(g);var v=document.createElement("a");v.id="mailgo-copy",v.href="#mailgo-copy",v.classList.add("mailgo-copy"),v.classList.add("mailgo-weight-500");var b=document.createTextNode("copy");v.appendChild(b),t.appendChild(v);var y=document.createElement("a");y.href="https://mailgo.js.org?ref=mailgo-modal",y.className="mailgo-by",y.target="_blank",y.rel="noopener noreferrer";var C=document.createTextNode("mailgo.js.org");y.appendChild(C),t.appendChild(y),document.body.appendChild(e),a.addEventListener("click",m)})),document.addEventListener("click",(function(e){if(document.contains(u("mailgo"))){var a=e.path||e.composedPath&&e.composedPath()||f(e.target);a&&a.forEach((function(a){return function(e){return e.href&&e.href.toLowerCase().startsWith("mailto:")&&!e.classList.contains("no-mailgo")||e.href&&"#mailgo"===e.getAttribute("href").toLowerCase()||e.classList&&e.classList.contains("mailgo")}(a)?(e.preventDefault(),void function(e){var a="",t="",o="",n="",d="",r="";if(e.href&&e.href.toLowerCase().startsWith("mailto:")){t=decodeURIComponent(e.href.split("?")[0].split("mailto:")[1].trim()),a=new URL(e.href);var m=new URLSearchParams(a.search);o=m.get("cc"),n=m.get("bcc"),d=m.get("subject"),r=m.get("body")}else t=e.getAttribute("data-address")+"@"+e.getAttribute("data-domain"),a=new URL("mailto:"+encodeURIComponent(t)),o=e.getAttribute("data-cc-address")+"@"+e.getAttribute("data-cc-domain"),n=e.getAttribute("data-bcc-address")+"@"+e.getAttribute("data-bcc-domain"),d=e.getAttribute("data-subject"),r=e.getAttribute("data-body");if(h(t.split(","))){o&&!h(o.split(","))&&(o=""),n&&!h(n.split(","))&&(n="");var p=u("mailgo-title"),s=(u("mailgo-details"),u("mailgo-cc")),f=u("mailgo-cc-value"),v=u("mailgo-bcc"),b=u("mailgo-bcc-value"),y=u("mailgo-subject"),C=u("mailgo-subject-value"),x=u("mailgo-body"),w=u("mailgo-body-value"),E=u("mailgo-gmail"),k=u("mailgo-outlook"),L=u("mailgo-open"),N=u("mailgo-copy");p.innerHTML=t.split(",").join("<br/>"),o?(s.style.display="block",f.innerHTML=o.split(",").join("<br/>")):s.style.display="none",n?(v.style.display="block",b.innerHTML=n.split(",").join("<br/>")):v.style.display="none",d?(y.style.display="block",C.textContent=d):y.style.display="none",r?(x.style.display="block",w.textContent=r):x.style.display="none",E.addEventListener("click",(function(){return l.openGmail(t,o,n,d,r)})),k.addEventListener("click",(function(){return l.openOutlook(t,d,r)}));var T=g(t);L.addEventListener("click",(function(){return l.openDefault(T)})),N.addEventListener("click",(function(){return l.copy(t,N)})),c(),document.addEventListener("keydown",(function(){return i(t,o,n,d,r,T,N)}))}}(a)):function(e){return e.href&&(e.href.toLowerCase().startsWith("tel:")||e.href.toLowerCase().startsWith("callto:"))&&!e.classList.contains("no-mailgo")}(a)?(e.preventDefault(),void function(e){var a="";e.href&&e.href.toLowerCase().startsWith("tel:")&&(a=decodeURIComponent(e.href.split("?")[0].split("tel:")[1].trim())),e.href&&e.href.toLowerCase().startsWith("callto:")&&(a=decodeURIComponent(e.href.split("?")[0].split("callto:")[1].trim()));var t=u("mailgo-title"),o=u("mailgo-wa"),n=u("mailgo-telegram"),i=u("mailgo-call"),d=u("mailgo-copy");t.innerHTML=a,o.addEventListener("click",(function(){return l.openWhatsApp(a)})),n.addEventListener("click",(function(){return l.openTelegram(a)})),i.addEventListener("click",(function(){return l.callDefault(a)})),d.addEventListener("click",(function(){return l.copy(a,d)})),r()}(a)):void 0}))}}));var d=function(e){return/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},c=function(){return u("mailgo").style.display="flex"},r=function(){return u("mailgo-tel").style.display="flex"},m=function(){return u("mailgo").style.display="none"},p=function(){return"flex"===u("mailgo").style.display},s=function(e){return window.location.href="mailto:"+atob(e)},g=function(e){return btoa(e)},u=function(e){return document.getElementById(e)},f=function(e){for(var a=[];e;){if(a.push(e),"HTML"===e.tagName)return a.push(document),a.push(window),a;e=e.parentElement}},h=function(e){return e.every(d)},v=function(e){var a=document.createElement("textarea");a.value=e,a.setAttribute("readonly",""),a.style.position="absolute",a.style.left="-9999px",document.body.appendChild(a);var t=0<document.getSelection().rangeCount&&document.getSelection().getRangeAt(0);a.select(),document.execCommand("copy"),document.body.removeChild(a),t&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(t))}}])}));