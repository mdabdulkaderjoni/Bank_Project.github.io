
//login evenethandler

const enterBtn = document.getElementById('enter-btn');
enterBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const mainArea = document.getElementById('main');
    mainArea.style.display = 'block';


});

//deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {

    const depositAmount = document.getElementById('depositValue').value;
    const depositNumber = parseFloat(depositAmount);

    if (depositNumber != NaN) {
        //adding value in deposit
        updateSpanText('currentDeposit', depositNumber);

        // //adding value in balance
        updateSpanText('currentBalance', depositNumber);
    }



    function updateSpanText(id, depositNumber) {
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const total = currentNumber + depositNumber;
        document.getElementById(id).innerText = total;

        document.getElementById('depositValue').value = '';

    }
    


})



