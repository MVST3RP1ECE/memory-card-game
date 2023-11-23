const animationWrapF = document.querySelector(".grid_1")
const grid_2 = document.querySelector(".grid_2");
const grid__wrapper = document.querySelector(".grid__wrapper");

animationWrapF.addEventListener("click", function(){
    // grid_2.classList.toggle("wrap_hidden");
    // grid__wrapper.classList.toggle("modify__grid_F");

    animationWrapF.classList.toggle("animation__F");
    console.log(animationWrapF); 
})
console.log(animationWrapF);