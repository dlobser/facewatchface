const portrait=document.querySelector('#portrait');
const caption=document.querySelector('#portrait-caption');
const descriptions={older:['An expressive face partway through the hour','A little older. A little wiser. Still on time.'],'late-hour':['An older face toward the end of the hour','It’s been a long hour, darling.'],resting:['A youthful face with closed eyes','Resting watch face. Please do not disturb.'],cream:['A face covered in face cream','A little self-care. Time can wait a moment.']};
function showFace(name){if(!portrait||!descriptions[name])return;portrait.src=`/assets/${name}.png`;portrait.alt=descriptions[name][0];caption.textContent=descriptions[name][1];document.querySelectorAll('[data-face]').forEach(button=>{const selected=button.dataset.face===name;button.classList.toggle('active',selected);button.setAttribute('aria-pressed',String(selected));});}
document.querySelectorAll('[data-face]').forEach(button=>button.addEventListener('click',()=>showFace(button.dataset.face)));
const cream=document.querySelector('#cream');let timer;
cream?.addEventListener('click',()=>{clearTimeout(timer);showFace('cream');cream.disabled=true;cream.textContent='A moment of self-care…';timer=setTimeout(()=>{showFace('resting');cream.disabled=false;cream.textContent='Fresh-faced. Again? ✧';},1600);});
