let myTitle = document.getElementById("myHeadTitle")
let changeColorOfmyTitle = function () {
    let ChangeFontSize = function () {


        if (document.body.style.backgroundColor = "white") {
            myTitle.style.color = "orange"
            myTitle.style.fontSize = "50px"
            document.body.style.backgroundColor = "rgba(131, 169, 131, 1)"
        }
        else {
            myTitle.style.color = "blue"
        }
    }

    setTimeout(ChangeFontSize, 5000)
}
myTitle.onload = changeColorOfmyTitle();
