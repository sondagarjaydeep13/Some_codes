function change() {
    document.getElementsByTagName("h1")[1].style.backgroundColor = "yellow"
    document.getElementsByTagName("h1")[1].style.color = "red"
}

function rechange() {
    document.getElementsByTagName("h1")[1].style.backgroundColor = "green"
    document.getElementsByTagName("h1")[1].style.color = "black"
}

function add() {

    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var result = Number(a) + Number(b);
    document.getElementById("result").innerHTML = result
}

function validation() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var fnamee = document.getElementById("fnamee");
    var lnamee = document.getElementById("lnamee");
    var btn = document.getElementById("btn")

    if (fname == "" || fname == null) {
        fnamee.innerHTML = "Fname shold not be blank"
        btn.disabled = true
    }
    else {
        fnamee.innerHTML = "";
        btn.disabled = false
    }

    if (lname == "" || lname == null) {
        lnamee.innerHTML = "Lname shold not be blank"
    }
    else {
        lnamee.innerHTML = ""
    }

}

setTimeout(() => {
    dt.innerHTML = new Date()
}, 3000);


setInterval(() => {
    dt1.innerHTML = new Date()
}, 1000);

