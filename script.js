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
