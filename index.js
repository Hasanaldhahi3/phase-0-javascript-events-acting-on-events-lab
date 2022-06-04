



const dodger = document.getElementById('dodger')
function moveDodgerLeft() {
    // dodger.style.left = "179px"
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    console.log(left)
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }

}


function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    console.log(left)
    if (left > 0) {
        dodger.style.left = `${left + 1}px`
    }
}





document.addEventListener("keydown", function (e) {

    if (e.key === "ArrowLeft") {
        moveDodgerLeft()
    }
})




document.addEventListener("keydown", function (e) {

    if (e.key === "ArrowRight") {
        moveDodgerRight()
    }
})