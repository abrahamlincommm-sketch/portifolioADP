function wa(e,f){e.preventDefault();var t=[];new FormData(f).forEach(function(v,k){if(v)t.push(k+': '+v)});var u='https://wa.me/5589994756236?text='+encodeURIComponent('Olá! '+t.join(' | '));window.open(u,'_blank')||(location.href=u)}
function show(h){document.querySelectorAll('.pg').forEach(function(p){p.classList.toggle('on',p.id==h)});
document.querySelectorAll('nav a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')=='#'+h)});scrollTo(0,0)}
document.addEventListener('click',function(e){var a=e.target.closest('a[href^=\'#\']');
if(!a)return;e.preventDefault();var h=a.getAttribute('href').slice(1),t=h&&document.getElementById(h);
if(!t)return;
if(t.classList.contains('pg'))show(h);else t.scrollIntoView({behavior:'smooth'})});
if(document.querySelector('.pg'))show('inicio');
