const dateOfBirth= document.querySelector("#date-of-birth")
const luckyNumber= document.querySelector("#lucky-number")
const checkNumberButton=document.querySelector("#check-number")
const outputBox=document.querySelector("#output-box")



function calculateSum(dob){
    dob=dob.replaceAll("-","")
    let sum=0;
    for(let i=0;i<dob.length;i++)
    {
        sum=sum + Number(dob.charAt(i))
    }
     return sum

}

function checkBirthdayIsLucky(){
    const dob=dateOfBirth.value
    const sum=calculateSum(dob)
    compareValues(sum,luckyNumber.value)


}
function compareValues(sum,luckyNumber) {
    if(sum%luckyNumber==0){
        outputBox.innerText="Your Birthday is lucky"
    }
    else{
        outputBox.innerText="your Birthday is not lucky"
    }

}


checkNumberButton.addEventListener("click",checkBirthdayIsLucky)

            












