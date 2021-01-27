
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
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + Number;
    document.getElementById(id).innerText = total;
}

//deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {

    const depositAmount = document.getElementById('depositValue').value;
    const depositNumber = parseFloat(depositAmount);

        //adding value in deposit
        updateSpanText('currentDeposit', depositNumber);

        // //adding value in balance
        updateSpanText('currentBalance', depositNumber);

        document.getElementById('depositValue').value = '';
  
    

})


//withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function () {

    const withdrawAmount = document.getElementById('withdrawValue').value;
    const withdrawNumber = parseFloat(withdrawAmount);

        //adding value in withdraw
        updateSpanText('currentWithdraw', withdrawNumber);

        // //removing value in balance
        updateSpanText('currentBalance', -1 * withdrawNumber);

        document.getElementById('withdrawValue').value = '';
  

})



