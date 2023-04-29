let arr=[
    {
    image:"https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png",
    title:"LOG CABIN"
    },
    {
     image:"https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png",
     title:"TASTY CAKE"
    },
    {
    image:"https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png",
    title:"CIRCUS TENT"
    },
    {
    image:"https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png",
    title:"CONTROLLER"
    },
    {
    image:"https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png",
    title:"LOCKED SAFE"
    },
    {
    image:"https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png",
    title:"SUBMARINE"
    }
]




document.querySelectorAll(".p-item").forEach(item=>{
    item.addEventListener("click", function(){
    document.querySelector(".my-modal").style.display="block"
    let search=arr.find(s=>s.image==this.children[1].src)
    console.log(search);
    document.querySelector(".my-modal h3").innerText=search.title
    document.querySelector(".m-img img").src=search.image
    })
})
function cl0se(){
    document.querySelector(".my-modal").style.display="none"
}
window.addEventListener("scroll", function(){
    if(window.scrollY!=0){
    document.querySelector("nav").style.height="80px"
    }
    else{
        document.querySelector("nav").style.height="120px"
    }
})
// document.querySelectorAll("nav a").forEach(x=>{
//     x.addEventListener("click",function(){
//         document.querySelectorAll("nav a").style.backgroundcolor="#1abc9c"
//     })
// })

//nav-bar ashagi dusende heightnin azalmasi,scroolla ve backgroundda renglenme hissesi