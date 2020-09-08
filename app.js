let links = document.getElementsByClassName("link")

Array(...links).forEach(ele=>{
    ele.addEventListener("click",function () {
        let a = document.createElement("a")
        a.href = "http://" + this.textContent
        a.target = "_blank"
        a.click()
    })
})