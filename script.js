let items = document.querySelectorAll(".item");
let carousel = document.querySelector(".carousel");

document.addEventListener("scroll", ()=>{
    let proportion = carousel.getBoundingClientRect().top / window.innerHeight;
    let index = Math.ceil(-1*(proportion+0.5))

    index.forEach((item, i) => {
        item.classname = "item";
        if(i==index){
            item.classname = "item active"
        }
    });
})