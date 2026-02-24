import{S as m,a as g,i as a}from"./assets/vendor-Cv5j3NfU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new m(".gallery a",{captionsData:"alt",captionDelay:250});function y(n){const r=n.map(({webformatURL:i,largeImageURL:o,tags:e,likes:t,views:s,comments:p,downloads:d})=>`
    <li class="gallery-item">
      <a href="${o}">
        <img src="${i}" alt="${e}" />
      </a>
      <div class="info">
        <p>Likes <br> ${t}</p>
        <p>Views <br> ${s}</p>
        <p>Comments <br> ${p}</p>
        <p>Downloads <br> ${d}</p>
      </div>
    </li>
  `).join("");l.insertAdjacentHTML("beforeend",r),h.refresh()}function b(){l.innerHTML=""}function L(){u.classList.remove("hidden")}function v(){u.classList.add("hidden")}const S="https://pixabay.com/api/",$="54780926-f74047f8bb106b77773b760bb";function q(n){return g.get(S,{params:{key:$,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const f=document.querySelector(".form"),c=f.querySelector("input");f.addEventListener("submit",w);function w(n){n.preventDefault();const r=c.value.trim();if(!r){a.error({message:"Поле не може бути порожнім. Введіть запит для пошуку.",position:"topRight"});return}b(),L(),q(r).then(i=>{const o=i.hits;if(o.length===0){a.warning({message:"На жаль, за вашим запитом нічого не знайдено. Спробуйте інший запит.",position:"topRight"});return}console.log(`Знайдено ${o.length} зображень`),y(o)}).catch(i=>{console.error(i),a.error({message:"Сталася помилка при завантаженні зображень.",position:"topRight"})}).finally(()=>{v(),c.value=""})}
//# sourceMappingURL=index.js.map
