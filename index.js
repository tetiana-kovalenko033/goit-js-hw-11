import{a as f,S as p,i as n}from"./assets/vendor-BjRz3xa9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const y="49643910-5d5e059a0d787f0a1574b38c1";function h(i){const r=new URLSearchParams({key:y,q:i,orientation:"horizontal",safesearch:!0,image_type:"photo"});return f(`https://pixabay.com/api/?${r}`).then(({data:o})=>o)}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(i){const r=i.map(({webformatURL:o,largeImageURL:s,tags:e,likes:t,views:a,comments:d,downloads:m})=>`<li class="gallery-item">
        <a class="gallery-link" href="${o}">
        <img class="item-image"
        src="${s}"
        // alt="${e}" width = "360" height = "200"
        />
        </a>
        <div class="gallery-card">
        <p><b>Likes:</b> ${t}</p>
        <p><b>Views:</b> ${a}</p>
        <p><b>Comment:</b> ${d}</p>
        <p><b>Download:</b> ${m}</p>
        </div>
                </li> `).join("");c.insertAdjacentHTML("beforeend",r),g.refresh()}function L(){c.innerHTML=""}function S(){l.classList.remove("hidden")}function v(){l.classList.add("hidden")}const u=document.querySelector(".form");u.addEventListener("submit",$);function $(i){i.preventDefault(),L();const r=u.elements["search-text"].value.trim();if(r===""){n.error({class:"my-toast",title:"",timeout:1e4,message:"Будь ласка, введіть пошуковий запит!",theme:"dark",position:"topRight",backgroundColor:"red"});return}S(),h(r).then(({hits:o})=>{if(o.length===0){n.error({class:"my-toast",title:"",timeout:1e4,message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",position:"topRight",backgroundColor:"red"});return}b(o)}).catch(o=>{console.log(o)}).finally(()=>{v()})}
//# sourceMappingURL=index.js.map
