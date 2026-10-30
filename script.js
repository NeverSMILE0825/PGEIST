(()=>{'use strict';
  const config=window.PEPEGEIST_CONFIG||{};
  const address=(config.contractAddress||'Coming Soon..').trim();
  const byId=(id)=>document.getElementById(id);
  document.querySelectorAll('[data-contract-text]').forEach(el=>{el.textContent=address;});
  const toast=byId('toast');let toastTimer;
  function message(value){ if(!toast) return;clearTimeout(toastTimer);toast.textContent=value;toast.classList.add('visible');toastTimer=setTimeout(()=>toast.classList.remove('visible'),3600); }
  async function copyText(text){
    try{ if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(text);return true;} }catch{}
    const input=document.createElement('textarea');input.value=text;input.setAttribute('readonly','');input.style.cssText='position:fixed;top:-1000px;opacity:0;';document.body.appendChild(input);input.select();let success=false;
    try{success=document.execCommand('copy');}catch{}
    input.remove();return success;
  }
  document.querySelectorAll('[data-copy-contract]').forEach(btn=>btn.addEventListener('click',async()=>{
    const copied=await copyText(address);
    message(copied?`Copied: ${address}`:`Select and copy the contract text: ${address}`);
  }));
  document.querySelectorAll('[data-social]').forEach(link=>link.addEventListener('click',event=>{
    const key=link.dataset.social==='x'?'socialX':'socialTelegram';const url=(config[key]||'').trim();
    if(url&&/^https:\/\//i.test(url)){event.preventDefault();window.open(url,'_blank','noopener,noreferrer');return;}
    event.preventDefault();message(`${link.dataset.social==='x'?'X':'Telegram'} community link: Coming Soon..`);
  }));
  const mobileToggle=byId('menu-toggle'),menu=byId('site-nav');
  function closeMenu(){if(!menu||!mobileToggle)return;menu.classList.remove('is-open');mobileToggle.setAttribute('aria-expanded','false');mobileToggle.setAttribute('aria-label','Open menu');}
  mobileToggle?.addEventListener('click',()=>{let open=menu.classList.toggle('is-open');mobileToggle.setAttribute('aria-expanded',String(open));mobileToggle.setAttribute('aria-label',open?'Close menu':'Open menu');});
  document.querySelectorAll('#site-nav a').forEach(link=>link.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
  document.addEventListener('click',e=>{if(menu?.classList.contains('is-open')&&!e.target.closest('.site-header'))closeMenu();});
  const header=byId('site-header');
  const onScroll=()=>header?.classList.toggle('is-scrolled',window.scrollY>34);window.addEventListener('scroll',onScroll,{passive:true});onScroll();
  function updateCountdown(){
    // A fixed 2026 target; never silently roll the event over to Halloween 2027.
    const current=new Date(),year=Number(config.halloweenYear)||2026;
    const target=new Date(year,9,31,0,0,0,0);
    const end=new Date(year,10,1,0,0,0,0);
    const delta=Math.max(0,Math.floor((target-current)/1000));
    const values={days:Math.floor(delta/86400),hours:Math.floor(delta/3600)%24,minutes:Math.floor(delta/60)%60,seconds:delta%60};
    Object.entries(values).forEach(([name,value])=>{const cell=byId('count-'+name);if(cell)cell.textContent=String(value).padStart(2,'0');});
    const status=byId('countdown-message');if(!status)return;
    if(current>=end){status.textContent=`Halloween ${year} has passed. The Pepegeist story lives on.`;}
    else if(current>=target){status.textContent='Happy Halloween. The night of ghosts is here.';}
    else{status.textContent=`Midnight, October 31, ${year} · Your local time.`;}
  }
  updateCountdown();setInterval(updateCountdown,1000);
  const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if('IntersectionObserver' in window && !reduced){
    const observer=new IntersectionObserver(items=>{items.forEach(item=>{if(item.isIntersecting){item.target.classList.add('in-view');observer.unobserve(item.target);}});},{rootMargin:'0px 0px -45px 0px',threshold:.07});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  } else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('in-view'));
  if(!reduced&&window.matchMedia('(pointer: fine)').matches){
    const cursor=byId('ambient-cursor');let raf=0,x=0,y=0;
    document.addEventListener('pointermove',e=>{x=e.clientX;y=e.clientY;if(raf)return;raf=requestAnimationFrame(()=>{cursor.style.transform=`translate(${x-25}px,${y-25}px)`;raf=0;});},{passive:true});
  }
  const haunt=byId('haunt-toggle');haunt?.addEventListener('click',()=>{
    const pressed=haunt.getAttribute('aria-pressed')!=='true';haunt.setAttribute('aria-pressed',String(pressed));document.body.classList.toggle('haunt-mode',pressed);message(pressed?'Haunted atmosphere activated.':'Haunted atmosphere dimmed.');
  });
  const copyright=byId('copyright-year');if(copyright)copyright.textContent=String(Math.max(2026,new Date().getFullYear()));
})();
