// -------------------- ESCRITURA --------------------
function typeWriter(el, text, speed = 30, callback){
  let i = 0;
  el.innerHTML = '';
  el.style.opacity = 1;
  el.style.transform = 'translateY(0)';
  function typing(){
    if(i < text.length){
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    } else if(callback){
      callback();
    }
  }
  typing();
}

// -------------------- SECUENCIA --------------------
setTimeout(()=>{
  const text1 = document.getElementById('text1');
  typeWriter(text1,'Para mi negrito 🩷',80, ()=>{
    setTimeout(()=>{
      text1.style.opacity = 0;

      const heartEl = document.getElementById('heart');
      heartEl.style.opacity = 1;
      typeWriter(document.getElementById('text2'),'¿Sabes por qué te amo?',60,()=>{
        setTimeout(()=>{
          heartEl.style.opacity = 0;
          document.getElementById('text2').style.opacity = 0;

          let envelope = document.getElementById('envelope');
          envelope.style.opacity = 1;

          setTimeout(()=>{
            envelope.style.transform = 'translateX(-250px) scale(1.2)';
            setTimeout(()=>{
              envelope.style.opacity = 0;
              let card = document.getElementById('card');
              card.style.transform = 'scale(1) rotateX(0deg)';

              setTimeout(()=>{
                let content = document.getElementById('cardContent');
                content.style.opacity = 1;

                setTimeout(()=>{
                  document.getElementById('counter').style.opacity = 1;
                },2000);

              },1000);

            },1000);
          },2000);

        },5000);
      });
    },4000);
  });
},500);

// -------------------- TEMPORIZADOR --------------------
function updateCounter(){
  const startDate = new Date("2025-08-24T05:30:00");
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((diff % (1000*60)) / 1000);

  document.getElementById('counter').innerText = `Llevo contigo ${days}d ${hours}h ${minutes}m ${seconds}s 🩷`;
}

setInterval(updateCounter,1000);

// -------------------- PARTICULAS BRILLANTES ROSADAS --------------------
const particlesContainer = document.getElementById('particles');

function createParticle(){
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.left = Math.random() * window.innerWidth + 'px';
  particle.style.top = Math.random() * window.innerHeight + 'px';
  const size = 2 + Math.random()*6;
  particle.style.width = particle.style.height = size + 'px';
  particle.style.opacity = 0.5 + Math.random()*0.5;
  particle.style.setProperty('--rand', Math.random()*2 - 1); 
  particle.style.animationDuration = (3 + Math.random()*2) + 's';
  particlesContainer.appendChild(particle);

  setTimeout(()=>{ particle.remove(); }, 5000);
}

setInterval(createParticle, 150);

// -------------------- CORAZONES AL TOCAR --------------------
document.body.addEventListener('click', function(e){
  const heart = document.createElement('div');
  heart.classList.add('heart-fly');
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
  document.body.appendChild(heart);

  setTimeout(()=>{ heart.remove(); }, 1500);
});

