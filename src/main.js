import './style.css'
//------------menue open an close -----------------
      let hed = document.querySelector('header');
      let menue = document.querySelector('.menue');
      let menueli = document.querySelectorAll('.menue li');
      let bar = document.querySelector('.bar');
      let openn = document.querySelector('.open');
      let closee = document.querySelector('.close');
            
      function btnbarli(){
        menueli.forEach((lii)=>{
        lii.addEventListener('click',()=>{
           menue.classList.add('hidden');
        })
      })
      }
      openn.addEventListener('click',()=>{
        menue.classList.add('h-screen','bg-black','justify-start','absolute','top-[-60px]','left-0','w-full');
        btnbarli();
        menue.classList.remove('hidden');
        bar.classList.remove('hidden');
        closee.classList.remove('hidden');
        openn.classList.add('hidden');
      })
        closee.addEventListener('click',()=>{
        menue.classList.remove('h-screen','bg-black','justify-start','absolute','top-[-60px]','left-0','w-full');
        bar.classList.add('hidden');
        closee.classList.add('hidden');
        openn.classList.remove('hidden');
      })


// --------------------------------------------------------
       let barlia = document.querySelectorAll('.bar li a');
       
       let btnha = document.querySelector('.btnh a');

       let btnda = document.querySelector('.btnd a');
       let btnalld = document.querySelectorAll('.btnalld button a');
      

       let moon = document.querySelector('.moon');
       let mars = document.querySelector('.mars');
       let eurpa = document.querySelector('.eurpa');
       let titan = document.querySelector('.titan');
    

       let headd = document.querySelector('.head');
       let textt = document.querySelector('.text');
       let bot1 = document.querySelector('.bot1');
       let bot2 = document.querySelector('.bot2');
       let imgd = document.querySelector('.imgd');

fetch(`${import.meta.env.BASE_URL}data.json`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    



              //---distnation active----
  btnalld.forEach((ba) => {
  ba.addEventListener('click', () => {

    btnalld.forEach((item) => {
      item.classList.remove('active');
    });

    ba.classList.add('active');
  });
});
//------------------tec -----------------
let texttec = document.querySelector('.text-tec');
let headtec = document.querySelector('.head-tec');
let imgtec = document.querySelector('.img-tec');
let spans = document.querySelectorAll('.spans span');

function showtec(index){
  const tecn = data.technology[index];
  headtec.innerHTML = tecn.name;
  texttec.innerHTML = tecn.description;
 imgtec.src = `${import.meta.env.BASE_URL}${tecn.images.portrait.replace(/^\.\//, '')}`;

  if(window.innerWidth<=768){
  imgtec.src = `${import.meta.env.BASE_URL}${tecn.images.landscape.replace(/^\.\//, '')}`;
}else{
  imgtec.src = `${import.meta.env.BASE_URL}${tecn.images.portrait.replace(/^\.\//, '')}`;

}
}
spans.forEach((ss,index)=>{
   ss.addEventListener("click",()=>{
    spans.forEach((tt)=>{
      tt.classList.remove('active3');
    });
    ss.classList.add('active3');
    showtec(index);
   });
});


//------------------crew -----------------
    const role = document.querySelector('.role-crew');
    const headcrew = document.querySelector('.head-crew');
    const textcrew = document.querySelector('.text-crew');
    const imgcrew = document.querySelector('.img-crew');

    const dots = document.querySelectorAll('.crew-dot');

    function showcrew(indexc) {
      const member = data.crew[indexc];

      role.textContent = member.role;
      headcrew.textContent = member.name;
      textcrew.textContent = member.bio;
     imgcrew.src = `${import.meta.env.BASE_URL}${member.images.png.replace(/^\.\//, '')}`;
    }

    dots.forEach((dot, indexc) => {
      dot.addEventListener('click', () => {

        dots.forEach(item => {
          item.classList.remove('activee');
        });

        dot.classList.add('activee');

        showcrew(indexc);
      });
    });


//---------------destination-----------------------
    
function showDestination(index) {
  const destination = data.destinations[index];

  headd.textContent = destination.name;
  textt.innerHTML = destination.description;
  bot1.innerHTML = ` ${destination.bot1} <br> <p class="text-2xl">${destination.distance}</p>`;
  bot2.innerHTML = ` ${destination.bot2} <br> <p class="text-2xl">${destination.travel}</p>`;
 imgd.src = `${import.meta.env.BASE_URL}${destination.images.png.replace(/^\.\//, '')}`;
}

moon.addEventListener('click', () => showDestination(0));
mars.addEventListener('click', () => showDestination(1));
eurpa.addEventListener('click', () => showDestination(2));
titan.addEventListener('click', () => showDestination(3));





 }).catch(error => {
  console.error('Error loading data:', error);
});
