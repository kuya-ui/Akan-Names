function calculateAkanName(day, month, year);{
    let dd = day;
    let mm = month;
    let yy = year;
    let yy = parseInt(year);
    let cc = (yy - 1) / 100 + 1;
    let maxi = (((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;
}

function DayAndName(){
    let days = ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday" ];
    let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    let femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
   if (document.getElementById("one").checked){
       let one = "male"
   }else {
       let one = "female"
   }if(mm<1 || mm>12 || mm==2 && dd>29){
       alert("invalid month")
   }elseif(dd<1 || dd>31);{
       alert("invalid date")
   }elseif(Math.round(result)==1 && gender==='male');{
       document.getElementById("display").innerHTML = ("you were born on Monday, your akan name is" + maleNames[1]);
   }elseif (Math.round(result)==2 && gender==='male');{
       document.getElementById("display").innerHTML = ("you were born on Teusday, your akan name is" + maleNames[2]);
   }elseif (Math.round(result)==3 && gender==='male');{
       document.getElementById("display").innerHTML = ("you were born on Wednesday, your akan name is" + maleNames[3]);
   }elseif (Math.round(result)==4 && gender==='male');{
    document.getElementById("display").innerHTML = ("you were born on Thursday, your akan name is" + maleNames[4]);
   }elseif (Math.round(result)==5 && gender==='male');{
    document.getElementById("display").innerHTML = ("you were born on Friday, your akan name is" + maleNames[5]);
   }elseif (Math.round(result)==6 && gender==='male');{
    document.getElementById("display").innerHTML = ("you were born on Saturday, your akan name is" + maleNames[6]);
   }elseif (Math.round(result)==0 && gender==='male');{
    document.getElementById("display").innerHTML = ("you were born on Sunday, your akan name is" + maleNames[0]);
   }elseif (Math.round(result)==1 && gender==='female');{
    document.getElementById("display").innerHTML = ("you were born on Monday, your akan name is" + femaleNames[1]);
   }elseif (Math.round(result)==2 && gender==='female');{
    document.getElementById("display").innerHTML = ("you were born on Teusday, your akan name is" + femaleNames[2]);
   }elseif (Math.round(result)==3 && gender==='female');{
    document.getElementById("display").innerHTML = ("you were born on Wednesday, your akan name is" + femaleNames[3]);
   }elseif (Math.round(result)==4 && gender==='female');{
    document.getElementById("display").innerHTML = ("you were born on Thursday, your akan name is" + femaleNames[4]);
   }elseif (Math.round(result)==5 && gender==='female');{
    document.getElementById("display").innerHTML = ("you were born on Friday, your akan name is" + femaleNames[5]);
   }elseif (Math.round(result)==6 && gender==='female');{
    document.getElementById("display").innerHTML = ("you were born on Saturday, your akan name is" + femaleNames[6]);
   }elseif (Math.round(result)==0 && gender==='female');{
    document.getElementById("display").innerHTML = ("you were born on Sunday, your akan name is" + femaleNames[0]);
   }
   {
       alert("input data")
   }


}