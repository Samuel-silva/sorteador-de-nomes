!function(){"use strict";const e=document.getElementById("selectorMode"),t=document.querySelector(".names-list__list"),n=[];function s(e){document.querySelector(".names-list").classList.remove("d-none"),n.push(e),function(e){const t=document.getElementById("prizeDraw");t.classList.remove("disabled")}(),d(e,n.length-1)}function d(e,n){const s=document.createElement("li"),d=document.createElement("div"),c=document.createElement("a");c.innerHTML='<i class="bi bi-person-x p-1"></i>',c.title="Excluir",c.classList.add("names-list__link","text-danger","ps-2"),c.dataset.index=n,c.addEventListener("click",l),d.classList.add("names-list__item","d-flex","align-items-center","justify-content-between","py-2"),d.appendChild(document.createTextNode(e)),d.appendChild(c),s.appendChild(d),t.appendChild(s)}function l(){n.splice(this.dataset.index,1),t.innerHTML="",n.map(((e,t)=>{d(e,t)}))}e.addEventListener("change",(()=>{const e=document.getElementById("selectorMode").checked;document.querySelector("html").dataset.bsTheme=e?"dark":"light"})),document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("button-add"),t=document.getElementById("name"),d=document.getElementById("prizeDraw"),l=document.querySelector(".result__box"),c=document.querySelector(".result__text"),o=document.querySelector(".result__icon");function a(e){l.classList.remove("alert-success","p-0"),l.classList.add("alert-danger"),o.classList.add("d-none"),c.textContent=e}document.querySelector(".names-list"),t.addEventListener("keypress",(function(e){"Enter"===e.key&&this.value.length>0&&(e.preventDefault(),s(this.value.trim()),this.value="")})),e.addEventListener("click",(function(e){e.preventDefault(),s(t.value.trim()),t.value="",t.focus()})),d.addEventListener("click",(function(){const e=parseInt(document.getElementById("amount").value);if(0===n.length)a("Digite pelo menos um nome.");else if(e<=0||e>n.length||""===e)a("Digite uma quantidade válida.");else if(l.classList.remove("alert-danger","p-0"),l.classList.add("alert-success"),o.classList.remove("d-none"),c.textContent="",1===e){const e=Math.floor(Math.random()*n.length);c.textContent+=n[e]}else for(let t=0;t<e;t++){const e=Math.floor(Math.random()*n.length);c.textContent+=0===t?n[e]:`, ${n[e]}`}}))}))}();