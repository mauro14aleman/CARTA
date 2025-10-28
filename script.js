// -------------------- ESCRITURA --------------------
function typeWriter(el, text, speed = 30, callback){
  let i = 0;
  el.innerHTML = '';
  el.style.opacity = 1;
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
  // Texto inicial
  typeWriter(document.getElementById('text1'),'Para mi negrito 🩷',80, ()=>{
    setTimeout(()=>{
      document.getElementById('text1').style.opacity = 0;

      // Pregunta + corazón abajo
      document.getElementById('heart').style.opacity = 1;
      typeWriter(document.getElementById('text2'),'¿Sabes por qué te amo?',60,()=>{
        setTimeout(()=>{
          document.getElementById('heart').style.opacity = 0;
          document.getElementById('text2').style.opacity = 0;

          // Carta aparece
          let envelope = document.getElementById('envelope');
          envelope.style.opacity = 1;

          // Espera 2 segundos y desliza a la izquierda
          setTimeout(()=>{
            envelope.style.transform = 'translateX(-250px) scale(1.2)';
            setTimeout(()=>{
              envelope.style.opacity = 0;
              let card = document.getElementById('card');
              card.style.transform = 'scale(1) rotateX(0deg)';

              setTimeout(()=>{
                let content = document.getElementById('cardContent');
                content.style.opacity = 1;

                // Temporizador al final
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
  const startDate = new Date("2025-08-24T05:30:00"); // fecha inicio novios
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000*60*60*24));
  const hours = Math.floor((diff % (1000*60*60*24)) / (1000*60*60));
  const minutes = Math.floor((diff % (1000*60*60)) / (1000*60));
  const seconds = Math.floor((diff % (1000*60)) / 1000);

  document.getElementById('counter').innerText = `Llevo contigo ${days}d ${hours}h ${minutes}m ${seconds}s 🩷`;
}

setInterval(updateCounter,1000);
