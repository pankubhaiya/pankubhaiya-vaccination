
 
 let email = document.getElementById("email")
 let name = document.getElementById("name")
 let age = document.getElementById("age")
 let Radio;
 let priority= document.getElementById("4Priority")
 let vaccine = document.getElementById("3Vaccine")

let submit = document.getElementById("submit")



submit.addEventListener("click",(e)=>{
    
 e.preventDefault()

 let data = JSON.parse(localStorage.getItem("masai-vaccin")) || []

    let useremail = true

     for(let i=0;i<data.length;i++){
        if(data[i].email==email.value){

            useremail=false

        }
     }
     if(name.value.length<4){
           alert("Your name caracter less than 4")
     }else if(useremail){

          if(age.value>17 && age.value<40 ){
              
               data.push(
                {
                 id:data.length+1, 
                 otp:otp(),
                 email : email.value,
                 name: name.value,
                 age:age.value,
                 category :Radio,
                 Priority:priority.value,
                 Vaccine:vaccine.value
                })

                localStorage.setItem("masai-vaccin",JSON.stringify(data))
                alert("Your rgistration succesfull")

          }else{
             
             alert("Please write a correct age")
          }

     }else{
        alert("you have already rgistraed")
     }

})

rediobtn = document.querySelectorAll(".radio")

rediobtn.forEach( (item) => {
     item.addEventListener("click",()=>{
        Radio=item.value

     })
});

function otp(){
   let otp = Math.floor(1000 + Math.random() * 9000)

   alert("OTP "+otp)
   return otp

}

// dropdown js
function opennav(){
   document.getElementById("myslide").style.width="200px"
 
 
}

function closenav(){
   document.getElementById("myslide").style.width="0"
  
}



