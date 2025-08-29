const services = [
  { id:'nat-emergency', nameBn:'জাতীয় জরুরি সেবা', nameEn:'National Emergency', number:'999', category:'সরকারি', icon:'assets/emergency.png' },
  { id:'police', nameBn:'পুলিশ', nameEn:'Police', number:'999', category:'পুলিশ', icon:'assets/police.png' },
  { id:'fire', nameBn:'ফায়ার সার্ভিস', nameEn:'Fire Service', number:'999', category:'ফায়ার', icon:'assets/fire-service.png' },
  { id:'ambulance', nameBn:'অ্যাম্বুলেন্স', nameEn:'Ambulance', number:'1994-999999', category:'স্বাস্থ্য', icon:'assets/ambulance.png' },
  { id:'women-child', nameBn:'নারী ও শিশু সহায়তা', nameEn:'Women & Child Helpline', number:'109', category:'সহায়তা', icon:'assets/emergency.png' },
  { id:'anti-corruption', nameBn:'দুদক', nameEn:'Anti-Corruption', number:'106', category:'সরকারি', icon:'assets/emergency.png' },
  { id:'electricity', nameBn:'বিদ্যুৎ বিভ্রাট', nameEn:'Electricity Outage', number:'16216', category:'বিদ্যুৎ', icon:'assets/emergency.png' },
  { id:'brac', nameBn:'ব্র্যাক', nameEn:'Brac', number:'16445', category:'এনজিও', icon:'assets/brac.png' },
  { id:'rail', nameBn:'বাংলাদেশ রেলওয়ে', nameEn:'Bangladesh Railway', number:'163', category:'পরিবহন', icon:'assets/Bangladesh-Railway.png' }
];

let likeCount = 0;
let coinCount = 100;
let copyCount = 0;

const likeCountEl = document.getElementById('likeCount');
const coinCountEl = document.getElementById('coinCount');
const copyCountEl = document.getElementById('copyCount');
const cardsContainer = document.getElementById('cardsContainer');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistoryBtn');

function updateNav() {
  likeCountEl.textContent = String(likeCount);
  coinCountEl.textContent = String(coinCount);
  copyCountEl.textContent = String(copyCount);
}

function renderCards() {
  const frag = document.createDocumentFragment();
  services.slice(0,9).forEach(s => {
    const el = document.createElement('article');
    el.className = 'card';
    el.dataset.serviceId = s.id;
    el.innerHTML = `
      <div class="card-head">
        <div class="head-left">
          <div class="service-icon"><img src="${s.icon}" alt="${s.nameEn}"></div>
          <div>
            <div class="service-title">${s.nameBn}</div>
            <div class="service-sub">${s.nameEn}</div>
          </div>
        </div>
        <button class="like" data-action="like" aria-label="like"><img src="assets/heart.png" alt="heart" class="icon-small"></button>
      </div>
      <div class="number" data-number>${s.number}</div>
      <div class="badge">${s.category}</div>
      <div class="actions">
        <button class="btn" data-action="copy">📋 Copy</button>
        <button class="btn btn-primary" data-action="call">📞 Call</button>
      </div>
    `;
    frag.appendChild(el);
  });
  cardsContainer.appendChild(frag);
}

function timeNow() {
  const opt = { hour:'2-digit', minute:'2-digit', second:'2-digit' };
  return new Intl.DateTimeFormat(undefined, opt).format(new Date());
}

function addHistory(name, number) {
  const row = document.createElement('div');
  row.className = 'history-item';
  row.innerHTML = `
    <div>
      <div class="history-name">${name}</div>
      <div class="history-sub">${number}</div>
    </div>
    <div class="time">${timeNow()}</div>
  `;
  historyList.prepend(row);
}

cardsContainer.addEventListener('click', async (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;
  const card = btn.closest('.card');
  const svc = services.find(x => x.id === card.dataset.serviceId);
  if (!svc) return;
  const action = btn.dataset.action;
  if (action === 'like') {
    likeCount++; updateNav(); return;
  }
  if (action === 'copy') {
    try {
      await navigator.clipboard.writeText(svc.number);
      copyCount++; updateNav();
      alert(`Copied: ${svc.number}`);
    } catch {
      alert('Copy failed.');
    }
    return;
  }
  if (action === 'call') {
    if (coinCount < 20) { alert('Not enough coins. Need 20.'); return; }
    coinCount -= 20; updateNav();
    alert(`Calling ${svc.nameEn} (${svc.nameBn}) at ${svc.number}`);
    addHistory(svc.nameBn, svc.number);
    return;
  }
});

clearHistoryBtn.addEventListener('click', () => {
  historyList.innerHTML = '';
});

renderCards();
updateNav();