function changes(details){
    Cookies.set(`button_clicked`, `yes`);

}

let head = document.getElementById(`here`);
    head.addEventListener(`click`,changes);

    let username = Cookies.get(`button_clicked`);
    if(username !== undefined) {
        document.body.insertAdjacentHTML(`beforeend`, `<h1> Congrats on the cookie!</h1>`)
    }
 

function changes2(details){
    Cookies.remove(`button_clicked`);

}
let hmm = document.getElementById(`wow`);
hmm.addEventListener(`click`,changes2)


function changes3(details){
    Cookies.set(`button_clicked`, `no`);

}

let woof = document.getElementById(`gone`);
    woof.addEventListener(`click`,changes3);


