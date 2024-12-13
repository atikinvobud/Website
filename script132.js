let photo = document.querySelector(".photo")
photo.addEventListener("mouseover", function(){
    photo.style.transform ="scale(1.1)";
})
photo.addEventListener("mouseout", function() {
    photo.style.transform = "scale(1)";
});
photo.addEventListener("click", function(){
    photo.src="unnamed.jpg";
})
photo.addEventListener("dblclick", function(){
    alert("Не налегай, у меня не так много любимых преподавателей");
})