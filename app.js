function changes(details){
    Cookies.set(`button_clicked`, `yes`);

}

let head = document.getElementById(`here`);
    head.addEventListener(`click`,changes);