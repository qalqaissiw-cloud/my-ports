import Script from "next/script";

const CODE = `(function(){function k(){["nl-badge-frame","nl-hud-frame"].forEach(function(id){var e=document.getElementById(id);if(e)e.remove();});document.querySelectorAll('script[src*="/.netlify/scripts/hud"]').forEach(function(s){s.remove();});}var o=new MutationObserver(k);function start(){k();o.observe(document.documentElement,{childList:true,subtree:true});}if(document.documentElement)start();else document.addEventListener("DOMContentLoaded",start);var ce=Document.prototype.createElement;Document.prototype.createElement=function(n,i){var el=ce.call(this,n,i);if(String(n).toLowerCase()==="iframe"){try{var d=Object.getOwnPropertyDescriptor(HTMLElement.prototype,"id")||Object.getOwnPropertyDescriptor(Element.prototype,"id");if(d&&d.set){Object.defineProperty(el,"id",{configurable:true,enumerable:true,get:function(){return d.get.call(this);},set:function(v){d.set.call(this,v);if(v==="nl-badge-frame"||v==="nl-hud-frame"){var t=this;queueMicrotask(function(){try{t.remove();}catch(e){}});}}});}}catch(e){}}return el;};})();`;

/** Strips Netlify’s edge-injected “Powered by Netlify” badge iframe. */
export function HideNetlifyBadge() {
  return (
    <Script id="hide-netlify-badge" strategy="beforeInteractive">
      {CODE}
    </Script>
  );
}
