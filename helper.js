
const senderName = document.getElementById("sender-name");
const amountSent = document.getElementById("amount");
const hide = document.getElementById("hide");
const date = document.getElementById("date")
const heading = document.getElementById("heading");
const get = JSON.parse(localStorage.getItem('Data'))
const item2 = JSON.parse(localStorage.getItem("item"))
const set = JSON.parse(localStorage.getItem('items'))
if(get || item2) {
    date.style.color = 'blue';
    senderName.style.textTransform = 'Capitalize';
    senderName.innerHTML = item2 ? item2.sender : get.sender
    heading.innerHTML = item2 ? item2.bankName : get.bankName
    amountSent.innerHTML = `-${Number(set.moneySent).toLocaleString()}`
    date.innerHTML = item2 ? item2.date : get.date
    hide.classList.remove('hide')
}