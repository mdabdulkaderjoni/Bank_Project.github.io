
//login evenethandler

const enterBtn = document.getElementById('enter-btn');
enterBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const mainArea = document.getElementById('main');
    mainArea.style.display = 'block';

});

//function for events

function updateSpanText(id, Number) {
    const getBalance=document.getElementById('currentBalance').innerText;
    const checkZero=parseFloat(getBalance);

    if(checkZero==0){
          return alert('Can not withdraw, Your balance is over');
    } 
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + Number;
    document.getElementById(id).innerText = total;

    if(total<=0 ){
        document.getElementById(id).innerText=0;        
        alert('Your balance is over'); 
        
    }
    
}

//deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {

    const depositAmount = document.getElementById('depositValue').value;
    const depositNumber = parseFloat(depositAmount);

    document.getElementById('depositValue').value = '';

        if(depositNumber>0){
            //adding value in deposit
        updateSpanText('currentDeposit', depositNumber);

        // //adding value in balance
        updateSpanText('currentBalance', depositNumber);
   
        }

})


//withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function () {

    const withdrawAmount = document.getElementById('withdrawValue').value;
    const withdrawNumber = parseFloat(withdrawAmount);

    document.getElementById('withdrawValue').value = '';

        if(withdrawNumber>0){
            //adding value in withdraw
        updateSpanText('currentWithdraw', withdrawNumber);

        // //removing value in balance
        updateSpanText('currentBalance', -1 * withdrawNumber);
      
        }
})



