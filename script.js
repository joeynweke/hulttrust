
let modal = document.getElementById("modal")
let support = document.getElementById("support")
let supportCon = document.getElementById("support-con")
let goBack = document.getElementById("go-back")
const querySend = document.querySelectorAll(".support-query-btn")
const queryText = document.querySelectorAll(".support-text")
let transactions = document.getElementById("transactions")


let billTransactionValue = document.getElementById("billTransactionValue")
let billTransaction = document.getElementById("bill-transaction");
let menuBar = document.getElementById("menu-bar")
let menuCon = document.getElementById("menu-con")
let menuClose = document.getElementById("menu-close")
    

    menuBar.addEventListener("click", () => {
        if(menuCon.classList == 'menu-close') {
            menuCon.classList = 'menu-con'
        } else{
            menuCon.classList = 'menu-close'
        }
    });
    
    menuClose.addEventListener("click", () => {
        if(menuCon.classList == 'menu-con') {
            menuCon.classList = 'menu-close'
        } else{
            menuCon.classList = 'menuCon'
        }
    });



modal.addEventListener("click", () => {
    if(menuCon.classList == 'menu-con') {
        menuCon.classList = 'menu-close'
}});

support.addEventListener("click", () => {
    if(supportCon.classList == "support-con-blank") {
        supportCon.classList = "support-con"
    }
});

goBack.addEventListener("click", () => {
    if(supportCon.classList == "support-con") {
        supportCon.classList = "support-con-blank"
    }
});

querySend.forEach((item) => {
    item.onclick = () => queryText.forEach((items) => {
        items.value = ''
    })
})







