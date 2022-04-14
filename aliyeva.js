
function getNow() {
let date=new Date();
let yyyy = date.getFullYear();
let mm = date.getMonth()+1;
mm=mm<10 ? "0" + mm : mm;
let dd =date.getDate();
dd=dd<10 ? "0" + dd :dd;
let stringDate =mm + "/" + dd + "/"+ yyyy;
return stringDate;
}

function handleClick(myRadio) {
   var currentValue = myRadio.value;
   if(currentValue=="3"){
           $("#hr1").show();
   }else{
           $("#hr1").hide();
   }
}



function start()  {
   let dateNode=document.createTextNode(getNow());
   let showResumeBtn=document.querySelector("#resume");
   let hidden=document.querySelector("#options-hiring");

   let showContactMeBtn=document.querySelector("#contact-me");
   let insertDate=document.querySelector("#now");
   showResumeBtn.addEventListener("click",function(){window.open("https://www.linkedin.com/in/khoshgadam-aliyeva-4864b81a5/");});
   showContactMeBtn.addEventListener("click",function(){window.open("#contactmeform",'_self');});
   
hidden,addEventListener("click",hiddenOtherOptions);
insertDate.appendChild(dateNode);
}
window.onload=start();

let form =document.querySelector("#contactme-form");
let submitBtn =document.querySelector('#Submit');
let resetBtn =document.querySelector('#Reset');

submitBtn.onclick=(event) =>{


    form.classList.add('was-validated');

};
resetBtn.onclick=(event)=> {
   form.classList.remove('was-validated');

};

form["postal-code"].oninput=(event)=> {
    let postalCode=form['postal-code'].value;
   let r= /[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d/;
};

function hiddenOtherOptions() {
   let formoption1=document.querySelector('.formoption1');
   let formoption2=document.querySelector('.formoption2');
   let formoption3=document.querySelector('.formoption3');
   let formoption4=document.querySelector('.formoption4');
   let salary1=document.querySelector('.salary1');
   let salary2=document.querySelector('.salary2');
   formoption1.getElementsByClassName.visibity="hidden";
   formoption2.getElementsByClassName.visibity="hidden";
   formoption3.getElementsByClassName.visibity="hidden";
   formoption4.getElementsByClassName.visibity="hidden";
   salary1.getElementsByClassName.visibity="visible";
   salary2.getElementsByClassName.visibity="visible";
}


