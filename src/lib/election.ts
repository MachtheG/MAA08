/** 10 August 2027, 00:00 East Africa Time — the second Tuesday of August. */
export const ELECTION_ISO = "2027-08-10T00:00:00+03:00";

/**
 * Inline script that fills every empty `[data-cd]` countdown slot before
 * first paint. Rendered by the root layout after the header and after the
 * page content; it must stay dependency-free plain JavaScript.
 */
export const fillCountdown = `(function(){try{var s=Math.max(0,Math.floor((Date.parse("${ELECTION_ISO}")-Date.now())/1e3));document.querySelectorAll("[data-cd]").forEach(function(e){if(e.textContent)return;var k=e.getAttribute("data-cd"),v=k==="d"?Math.floor(s/86400):k==="h"?Math.floor(s/3600)%24:Math.floor(s/60)%60;e.textContent=k==="d"?String(v):(v<10?"0":"")+v})}catch(e){}})()`;
