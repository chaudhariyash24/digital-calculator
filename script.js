const d=document.getElementById('display');let exp='';
const update=()=>d.textContent=exp||'0';
function calc(){try{exp=String(eval(exp));}catch{exp='Error';}update();}
document.querySelectorAll('button').forEach(b=>b.onclick=()=>{
if(b.dataset.action==='clear')exp='';
else if(b.dataset.action==='delete')exp=exp.slice(0,-1);
else if(b.dataset.action==='equals')return calc();
else exp+=b.dataset.value;
update();
});
document.addEventListener('keydown',e=>{
if(/[0-9]/.test(e.key)) exp+=e.key;
else if(['+','-','*','/','.','%'].includes(e.key)) exp+=e.key;
else if(e.key==='Enter') return calc();
else if(e.key==='Backspace') exp=exp.slice(0,-1);
else if(e.key==='Escape') exp='';
update();
});