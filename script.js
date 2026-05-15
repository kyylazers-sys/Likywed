function openInvitation(){

const opening = document.getElementById('opening');

opening.style.opacity='0';

setTimeout(()=>{
opening.style.display='none';
},1000);

const music = document.getElementById('music');
music.play();

}

function toggleMusic(){

const music = document.getElementById('music');

if(music.paused){
music.play();
}else{
music.pause();
}

}

function openGift() {
  document.getElementById("giftModal").style.display = "flex";
}

function closeGift() {
  document.getElementById("giftModal").style.display = "none";
}

function copyText(id) {
  let text = "";

  if (id === "dana1") text = "0895379015100";
  if (id === "dana2") text = "089668125101";
  if (id === "bni1") text = "1817720468";

  navigator.clipboard.writeText(text);
  alert("Nomor berhasil disalin: " + text);
}

const targetDate = new Date(
'June 01, 2026 09:00:00'
).getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const countdown = document.getElementById('countdown');

  countdown.innerHTML = `
    <div class="countdown-wrapper">

      <div class="time-box">
        <div class="time-number">${days}</div>
        <div class="time-label">Hari</div>
      </div>

      <div class="time-box">
        <div class="time-number">${hours}</div>
        <div class="time-label">Jam</div>
      </div>

      <div class="time-box">
        <div class="time-number">${minutes}</div>
        <div class="time-label">Menit</div>
      </div>

      <div class="time-box">
        <div class="time-number">${seconds}</div>
        <div class="time-label">Detik</div>
      </div>

    </div>
  `;

}, 1000);


const params = new URLSearchParams(window.location.search);
const guest = params.get('to');

if(guest){
document.getElementById('guestName').innerText = guest;
}

const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{

reveals.forEach((el)=>{

const top = el.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
el.classList.add('active');
}

});

});

const form = document.getElementById('commentForm');
const commentList = document.getElementById('commentList');

form.addEventListener('submit',(e)=>{

 e.preventDefault();

 const name = document.getElementById('name').value;
 const attendance = document.getElementById('attendance').value;
 const message = document.getElementById('message').value;

 const div = document.createElement('div');

 div.classList.add('comment-item');

 div.innerHTML = `
 <h3>${name} ✔</h3>
 <span class="comment-info">${attendance} • baru saja</span>
 <p>${message}</p>
 `;

 commentList.prepend(div);

 form.reset();

});