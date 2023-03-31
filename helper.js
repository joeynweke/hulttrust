
const senderName = document.getElementById("sender-name");
const amountSent = document.getElementById("amount");
const hide = document.getElementById("hide");
const date = document.getElementById("date")
const get = JSON.parse(localStorage.getItem('Data'))
const set = JSON.parse(localStorage.getItem('items'))
if(get) {
    date.style.color = 'blue';
    senderName.style.textTransform = 'Capitalize';
    senderName.innerHTML = get.sender
    amountSent.innerHTML = `-${Number(set.moneySent).toLocaleString()}`
    date.innerHTML = get.date
    hide.classList.remove('hide')
}