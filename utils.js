const login = document.getElementById("login-btn");
const tagBox = document.getElementById("tag-box");
const errorText = document.getElementById("error");
const need = document.querySelector("#need-help");
const savingsAmount = document.getElementById("savings-amount");
const passwordBox = document.getElementById("password-box");
const amount = document.getElementById("amount");
const heading = document.querySelectorAll(".heading")
const quickpay = document.getElementById("quickpay")
const recharge = document.getElementById("rewards")
const rewards = document.getElementById("recharge")
const insurance = document.getElementById("insurance")
const hide = document.getElementById("hide")
const accountName = document.getElementById("account-name")
const clientName = document.querySelectorAll(".name");
const clientName2 = document.querySelectorAll("#name");
const sendNow = document.getElementById("send-now")
const sent = document.getElementById("sent");
const success = document.querySelector(".success")
const loading = document.querySelector(".loading")
const images = document.querySelectorAll(".images")
const savingsCard = document.getElementById("savings-card")
const fakeSender = document.querySelector(".fake-sender")
const logout = document.querySelectorAll(".logout");
const routing = document.getElementById("routing");
const sort = document.getElementById("sort");
const password = document.getElementById("password");
const continueBtn = document.querySelector("#continue")
const hidden = document.querySelector("#hidden")

const transactions = document.querySelector("#transactions")


const myDate = new Date()

var get = JSON.parse(localStorage.getItem("items"));

let firstAmount = {
  first: 840000,
  second: 807000
} 

localStorage.setItem('savings', firstAmount.first.toLocaleString())
//localStorage.removeItem('savings')



const Data = {
    bankingId: 'albertoferrarini5125',
    bankName: 'HULTTRUST BANK',
    name: 'Alberto Ferrarini',
    bankingPassword: 24221513,
    savings: 850456,
    fixedAmount: 33000,
    moneySent: get ? get.moneySent : null,
    sender :  'Tranz Courier' ,
    imgURL : 'images/ferrarini.jpg',
    date: `${myDate.getDate()} /${myDate.getMonth() <= 9 ? '0'+Number(myDate.getMonth() + 1) : Number(myDate.getMonth() + 1)} /${myDate.getFullYear()}`
}

const Data2 = {
    bankingId: 'albertoferrarini5125',
    bankName: 'HULTTRUST BANK',
    name: 'Alberto Ferrarini',
    bankingPassword: 24221513,
    savings: localStorage.getItem("savings2") ? localStorage.getItem("savings2") : localStorage.getItem("savings"),
    imgURL : 'images/ferrarini.jpg',
    fixedAmount: 330000,
    moneySent: get ? get.moneySent : null,
    sender :  'Tranz Courier',
    date: `${myDate.getDate()} /${myDate.getMonth() <= 9 ? '0'+Number(myDate.getMonth() + 1) : Number(myDate.getMonth() + 1)} /${myDate.getFullYear()}`
}

//

function nav(){
  try {
    need.onclick = () => (location.href = 'quickpay.html')
    savingsCard.onclick = () => (location.href = "quickpay.html");
    quickpay.onclick = () => (location.href = "quickpay.html");
    recharge.onclick = () => (location.href = "pay.html");
    rewards.onclick = () => (location.href = "offer.html");
    insurance.onclick = () => (location.href = "account.html");
  } catch (error) {
    return null
  }
}

nav()

const sending = {
    amountData : Data.savings,
    accountNameData: Data2.sender,
    date: Data.date,
    moneySent : Data.moneySent,
    bankName : Data.bankName,
    owner: Data.name,
    url: Data.imgURL
}

localStorage.setItem('items', JSON.stringify(sending));
//localStorage.removeItem ('items');
    
function Login(){
try {
    login.onclick = () => {
        const tagValue = tagBox.value;
        const passwordValue = passwordBox.value;
    
        try {
            if(!tagValue || !passwordValue){
                errorText.innerHTML = 'Please enter your banking ID & password'
                setTimeout(() => {
                    errorText.innerHTML = ''
                },5000)
                return
            } else if(tagValue.toLowerCase() == Data.bankingId.toLowerCase() && passwordValue == Data.bankingPassword){
                setTimeout(() => {
                    location.href = 'home.html'
                },2000)
            }  else if(tagValue.toLowerCase() == Data2.bankingId.toLowerCase() && passwordValue == Data2.bankingPassword){
                  localStorage.setItem("item", JSON.stringify(Data2));
                  setTimeout(() => {
                    location.href = 'home.html'
                    // errorText.innerHTML = 'Account is blocked for suspicious activities, contact your bank';
                    // return
                },2000);
                return
            }
            else{
                errorText.innerHTML = 'Incorrect banking ID or password';
                setTimeout(() => {
                    errorText.innerHTML = ''
                },5000)
                return
            }
            
        } catch (error) {
            return null
        }
    }
} catch (error) {
    return null
}
}
Login()

//refresh local storage
//localStorage.removeItem("item")
//localStorage.removeItem("items")
//localStorage.removeItem("Data")
let item2 = JSON.parse(localStorage.getItem("item"));
const local = JSON.parse(localStorage.getItem("Data"));

 function displayData() {
    try {
      heading.forEach((item) => {
        if(local) {
          item.innerHTML = local.bankName
        } else if(item2) {
          item.innerHTML = item2.bankName
        }
        else{
          item.innerHTML = get.bankName;
        }
      });
      images.forEach((image) => {
        if(local) {
          image.src = local.imgURL
        } else if(item2) {
          image.src = item2.imgURL
        }
        else{
          image.src = get.url
        }
      })
      
      clientName.forEach((item) => {
        if(local) {
          item.innerHTML =  local.name;
        } else if(item2){
          item.innerHTML = item2.name
        }
        else{
          item.innerHTML = get.owner;
        }
      });
      
      const savedValue = JSON.parse(localStorage.getItem("items"));

      if (savedValue && savedValue.amountData) {
        Data.savings = local ? local.savings : savedValue.amountData;
      }
      
      savingsAmount.innerHTML = "$" + Data2.savings.toLocaleString();
      
    } 
    catch (error) {
      return null
    }
  }
  
displayData()

function sendFund() {
  
    try {
      sendNow.addEventListener("click", (e) => {
        e.preventDefault();
        // setTimeout(() => {
        //   fakeSender.innerHTML = 'ERROR: You have exceeded your monthly payment limit,Try again Next Month';
        // },2000)
        
        const sentAmount = parseInt(amount.value);
        const senderValue = accountName.value

        if(senderValue.toLowerCase() !== get.accountNameData.toLowerCase()){
          setTimeout(() => {
            fakeSender.innerHTML = 'ERROR: This account is not a beneficiary';
            setTimeout(() => {
              fakeSender.innerHTML = ''
            },10000)
          },2000)
          return;
        }



        if (sentAmount <= 0 || isNaN(sentAmount)) {
          setTimeout(() => {
            fakeSender.innerHTML = 'ERROR: Please enter the amount';
            setTimeout(() => {
              fakeSender.innerHTML = ''
            },10000)
          },2000)
          return;
        }

        if(!password.value || !routing.value || !sort.value){
          setTimeout(() => {
            fakeSender.innerHTML = 'ERROR: All the informations are required';
            setTimeout(() => {
              fakeSender.innerHTML = ''
            },5000)
          },2000)
          return;
        }
      
      
        const Local = JSON.parse(localStorage.getItem("items"))
        const newSavingsAmount = Local.amountData - sentAmount;
        const newSenderVal = senderValue.toLocaleString()
        Data.savings = newSavingsAmount;
        Data.sender = newSenderVal;
        localStorage.setItem("items", JSON.stringify({ amountData: newSavingsAmount, accountNameData: newSenderVal, moneySent: amount.value, displayData}));
        if(!item2){
          localStorage.setItem("Data", JSON.stringify(Data));
        }
        loading.style.display = 'flex',
        setTimeout(() => {
          success.style.display = 'flex'
        },3000)
      });

      continueBtn.onclick = () => {
        
        location.href='home.html';
        
        Data.savings = Data.savings - amount
        
      }
      displayData();
      localStorage.setItem('hiddenDiv', true)
      localStorage.setItem('savings2', firstAmount.second.toLocaleString())
    } catch (error) {
      return error
    }
    
  }  
sendFund()

logout.forEach((item) => {
  item.onclick = () => {
    location.replace('index.html')
  }
})

