burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')




burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})


const searchFun = () =>{
    let filter = document.querySelector('#search').value.toUpperCase();

    let paras = document.querySelector('.paras');

    let p = paras.querySelector('p');

    for(var i=0; i<p.clientHeight; i++){
        let p = p[i].querySelector('p')[0];

        if(p){
            let textvalue = p.textContent || p.innerHTML;

            if(textvalue.toUpperCase().indexOf(filter) > -1){
                p[i].style.display = "";
            }else{
                p[i].style.display = "none";
            }
        }
    }

}