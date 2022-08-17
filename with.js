document.getElementById('btn-withdraw').addEventListener('click',function(){
    //console.log('btn-withdraw click');
const withdrawField= document.getElementById('withdraw-field');
const newWithdrawAmountString= withdrawField.value;
const newWithdrawAmount= parseFloat(newWithdrawAmountString);
console.log(newWithdrawAmount);

const withdrawTotal= document.getElementById('withdraw-total');
const previousWithdrawTotalString= withdrawTotal.innerText;
const previousWithdrawTotal= parseFloat(previousWithdrawTotalString);
const newWithdrawTotal= previousWithdrawTotal +newWithdrawAmount;
withdrawTotal.innerText= newWithdrawTotal;

//
const balanceElement= document.getElementById('balance-total');
const previousBalanceTotalString= balanceElement.innerText;
const previousBalanceTotal= parseFloat(previousBalanceTotalString);
const newBalanceTotal= previousBalanceTotal - newWithdrawAmount;
balanceElement .innerText= newBalanceTotal;

//
withdrawField.value='';
  
})