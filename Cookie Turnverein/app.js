const cookieBox = document.querySelector(".wrapper"),
acceptBtn = cookieBox.querySelector(".buttons button");

acceptBtn.onclick = ()=>{
    console.log("Cookies wurden akzeptiert")
    document.cookie = "Cookies = Tv.Weitersburg; dauer der Cookies"+60*60*24*30;
    if(document.cookie){
        cookieBox.classList.add("hide");

    }else{
        alert("Cookies koenen nich gesetzt werden");
    }
}

let checkCookie = document.cookie.indexOf("Cookies = Tv.Weitersburg")
checkCookie != -1 ? cookieBox.classList.add("hide"): cookieBox.classList.remove("hide");