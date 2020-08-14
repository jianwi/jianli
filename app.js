let links = document.getElementsByClassName("link")

Array(...links).forEach(ele=>{
    ele.addEventListener("click",function () {
        window.location.href = "http://" + this.textContent
    })
})