const targetDate = new Date("2025-03-22T14:00");
const timerElement = document.getElementById("cas");
function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    timerElement.innerHTML = "Odpočet skončil!";
    clearInterval(interval); // Zastav interval
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  timerElement.innerHTML = `
    ${days} dní ${hours} hodín ${minutes} minút
  `;
}
const interval = setInterval(updateCountdown, 1000);
updateCountdown();

/* fotogaleria  */
const fotkyTL = document.getElementById('Bfotky');
const fotkyKO = document.getElementById('kontainer');
const fotkyIMG = document.querySelectorAll('#kontainer img');

fotkyTL.addEventListener('click', () => {
    if(fotkyKO.style.height == '0rem') {
      fotkyKO.style.height = '110rem';
      fotkyTL.innerHTML = 'Zavrieť';
      fotkyIMG[0].style.height = 'auto';
      fotkyIMG[1].style.height = 'auto';
      fotkyIMG[2].style.height = 'auto';
    } else {
      fotkyKO.style.height = '0rem';
      fotkyIMG[0].style.height = '0rem';
      fotkyIMG[1].style.height = '0rem';
      fotkyIMG[2].style.height = '0rem';
      fotkyTL.innerHTML = 'Prezerať fotky';
    }
  });

  // miesto cas
  const MC_TL = document.getElementById('Bmescas');
  const MC_KO = document.getElementById('kontainerM_C');
  const MC_p = document.querySelectorAll('#kontainerM_C p');
  const MC_hr = document.querySelectorAll('#kontainerM_C hr');
  const MC_Iframe = document.querySelectorAll('#kontainerM_C .mapa iframe');
  MC_TL.addEventListener('click', () => {
    if(MC_KO.style.height == '0rem') {
      MC_KO.style.height = '67rem';
      MC_p[0].style = 'font-size: 2rem;margin-top:20px';
      MC_p[1].style.fontSize = '2rem';
      MC_p[2].style.fontSize = '2rem';
      MC_p[3].style.fontSize = '3rem';
      MC_p[4].style = 'font-size: 2rem;margin-bottom:20px';
      MC_hr[0].style = 'width: 20rem;visibility: visible; margin-block: 10px';
      MC_hr[1].style = 'width: 20rem;visibility: visible; margin-block: 10px';
      MC_hr[2].style = 'width: 20rem;visibility: visible; margin-block: 10px';
      MC_Iframe[0].style.height = '30rem';
      MC_TL.innerHTML = 'Zavrieť';
    } else {
      MC_KO.style.height = '0rem';
      MC_p[0].style.fontSize = '0rem';
      MC_p[1].style.fontSize = '0rem';
      MC_p[2].style.fontSize = '0rem';
      MC_p[3].style.fontSize = '0rem';
      MC_p[4].style.fontSize = '0rem';
      MC_hr[0].style = 'width: 0rem; visibility: hidden;';
      MC_hr[1].style = 'width: 0rem; visibility: hidden;';
      MC_hr[2].style = 'width: 0rem; visibility: hidden;';
      MC_Iframe[0].style.height = '0rem';
      MC_TL.innerHTML = 'Čítať viac';
    }
  });

  // ZOOM
  const zoom_TL = document.getElementById('zoomTL');
  const zoom_KO = document.getElementById('kontainerZOOM');
  const zoom_p = document.querySelectorAll('#kontainerZOOM p');
  zoom_TL.addEventListener('click', () => {
    if(zoom_KO.style.height == '0rem') {
      zoom_KO.style.height = '2rem';
      zoom_p[0].style.fontSize = '1.5rem';
      zoom_p[1].style.fontSize = '1.5rem';
      zoom_TL.innerHTML = 'Zavrieť';
    } else {
      zoom_KO.style.height = '0rem';
      zoom_p[0].style.fontSize = '0rem';
      zoom_p[1].style.fontSize = '0rem';
      zoom_TL.innerHTML = 'Čítať viac';
    }
  });

// Ubytovanie
  const UB_TL = document.getElementById('ubyTL');
  const UB_KO = document.getElementById('kontainerUB');
  const UB_p = document.querySelectorAll('#kontainerUB .pisanie_male');
  UB_TL.addEventListener('click', () => {
    if(UB_KO.style.height == '0rem') {
      UB_KO.style.height = '10rem';
      UB_p[0].style.fontSize = '2rem';
      UB_TL.innerHTML = 'Zavrieť';
    } else {
      UB_KO.style.height = '0rem';
      UB_p[0].style.fontSize = '0rem';
      UB_TL.innerHTML = 'Čítať viac';
    }
  });

  // RAUT
  const raut_TL = document.getElementById('rautTL');
  const raut_KO = document.getElementById('kontainerRAUT');
  const raut_p = document.querySelectorAll('#kontainerRAUT p');
  raut_TL.addEventListener('click', () => {
    if(raut_KO.style.height == '0rem') {
      raut_KO.style.height = '17rem';
      raut_p[0].style.fontSize = '1.5rem';
      raut_p[1].style.fontSize = '1.5rem';
      raut_p[2].style.fontSize = '1.5rem';
      raut_TL.innerHTML = 'Zavrieť';
    } else {
      raut_KO.style.height = '0rem';
      raut_p[0].style.fontSize = '0rem';
      raut_p[1].style.fontSize = '0rem';
      raut_p[2].style.fontSize = '0rem';
      raut_TL.innerHTML = 'Čítať viac';
    }
  });



    // DARY
    const dary_TL = document.getElementById('daryTL');
    const dary_KO = document.getElementById('kontainerDARY');
    const dary_p = document.querySelectorAll('#kontainerDARY p');
    dary_TL.addEventListener('click', () => {
      if(dary_KO.style.height == '0rem') {
        dary_KO.style.height = '12rem';
        dary_p[0].style.fontSize = '1.5rem';
        dary_p[1].style.fontSize = '1.5rem';
        dary_p[2].style.fontSize = '1.5rem';
        dary_TL.innerHTML = 'Zavrieť';
      } else {
        dary_KO.style.height = '0rem';
        dary_p[0].style.fontSize = '0rem';
        dary_p[1].style.fontSize = '0rem';
        dary_p[2].style.fontSize = '0rem';
        dary_TL.innerHTML = 'Čítať viac';
      }
    });


    // Kontakt
    const kon_TL = document.getElementById('kontaktTL');
    const kon_KO = document.getElementById('kontainerKON');
    const kon_p = document.querySelectorAll('#kontainerKON p');
    kon_TL.addEventListener('click', () => {
      if(kon_KO.style.height == '0rem') {
        kon_KO.style.height = '3rem';
        kon_p[0].style.fontSize = '1.5rem';
        kon_p[1].style.fontSize = '1.5rem';
        kon_TL.innerHTML = 'Zavrieť';
      } else {
        kon_KO.style.height = '0rem';
        kon_p[0].style.fontSize = '0rem';
        kon_p[1].style.fontSize = '0rem';
        kon_TL.innerHTML = 'Čítať viac';
      }
    });
