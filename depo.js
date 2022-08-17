/*document .getElementById('btn-deposit').addEventListener('click', function(){
    //console.log('btn-deposit click me');

    const depositField= document.getElementById('deposit-field');
   const newDepositAmountString= depositField .value;
   const newDepositAmount= parseFloat( newDepositAmountString);
   //console.log( newDepositAmount);

// step-3
const deposiTotalElement= document .getElementById('deposit total');
const previousDeposiTotalString = deposiTotalElement.innerText;
const previousDeposiTotal= parseFloat(previousDeposiTotalString);
//console.log(previousDeposiTotal);
const newDepositAmountTotal=  previousDeposiTotal +  newDepositAmount;
deposiTotalElement.innerText= newDepositAmountTotal;


// step-4
 const balanceTotalElement=document.getElementById('balance-total');
 const previousBalanceTotalString = balanceTotalElement.innerText;
 const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);
 const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
 balanceTotalElement.innerText=newBalanceTotal ;
 */

 document.getElementById('btn-deposit').addEventListener('click',function(){
    //console.log('btn-deposit click');
    const depositField= document.getElementById('deposit-field');
    const newDepositAmountString= depositField.value;
    const newDepositAmount= parseFloat(newDepositAmountString);
    console.log(newDepositAmount);


    const depositTotalElement= document.getElementById('deposit-total');
    const previousDepositAmountTotalString= depositTotalElement.innerText;
    const previousDepositAmountTotal= parseFloat(previousDepositAmountTotalString);
    const newDepositAmountTotal= previousDepositAmountTotal + newDepositAmount;
    depositTotalElement.innerText=newDepositAmountTotal;


    const balanceTotalElement= document.getElementById('balance-total');
    const previousBalanceTotalString= balanceTotalElement.innerText;
    const previousBalanceTotalAmount= parseFloat(previousBalanceTotalString);
    const newBalanceTotal=previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText= newBalanceTotal;

 })



   // 
   depositField .value= '';


