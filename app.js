function updateProuductNumber(product, prize,isincreasing){
               const prouductInput =document.getElementById(product+'-number');
let proudectNumber =prouductInput.value; 
if(isincreasing){
               proudectNumber=parseInt(proudectNumber)+1;
}
else{
               proudectNumber =parseInt(proudectNumber)-1;           
}
prouductInput.value =proudectNumber
// update case total 
const caseTotal=document.getElementById(product +'-total');
caseTotal.innerText =proudectNumber * prize;
calculateTotal();


}


function getInputvalue(product){
               const prudectInput =document.getElementById(product +'-number');
               const  productNumber =parseInt(prudectInput.value);
               return productNumber;
}

function calculateTotal(){
               // const phoneInput =document.getElementById('phone-number');
               // const  phoneNumber =parseInt(phoneInput.value);
               const phoneTotal =getInputvalue('phone') * 1219;
               const caseTotal =getInputvalue('case')* 59;
               const subTotal=phoneTotal +caseTotal;
               const tax =subTotal /10;
               const totalPrize =subTotal + tax ;


               document.getElementById('sub-total').innerText=subTotal;
               document.getElementById('tax-total').innerText=tax;
               document.getElementById('total-prize').innerText=totalPrize;
               

}
// pjone increase decreas  events 
document.getElementById('phone-plus').addEventListener('click',function(){
              updateProuductNumber('phone', 1219,true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
               updateProuductNumber('phone',1219,false);
})

// handle case increas decrease events 
document.getElementById('case-plus').addEventListener('click',function(){         
updateProuductNumber('case',59,true);
})
document.getElementById('case-minus').addEventListener('click',function(){          
updateProuductNumber('case',59,false)
})

