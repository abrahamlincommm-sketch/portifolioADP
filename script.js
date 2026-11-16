document.getElementById('ano').textContent=new Date().getFullYear();
var f=document.getElementById('f');
f.addEventListener('submit',function(e){
 e.preventDefault();
 var ok=document.getElementById('ok'),er=document.getElementById('err');
 ok.style.display=er.style.display='none';
 fetch(f.action,{method:'POST',body:new FormData(f),headers:{Accept:'application/json'}})
  .then(function(r){if(r.ok){f.reset();ok.style.display='block'}else{er.style.display='block'}})
  .catch(function(){er.style.display='block'});
});
document.addEventListener('click',function(e){var a=e.target.closest('a[href^="#"]');if(!a)return;var t=document.getElementById(a.getAttribute('href').slice(1));if(!t)return;e.preventDefault();t.scrollIntoView({behavior:'smooth'})});
