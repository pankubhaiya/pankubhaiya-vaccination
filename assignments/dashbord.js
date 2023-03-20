
let data = JSON.parse(localStorage.getItem("masai-vaccin")) || []

let Donedata = JSON.parse(localStorage.getItem("vaccnated")) || []

let tbody = document.getElementById("tbody")




make(data)
function make(data){
    tbody.innerHTML=null

    data.forEach((element,index) => {
         if(element.name){
             let tr = document.createElement("tr")
            let td = document.createElement("td")
             td.innerText = index +1
             let td1 = document.createElement("td")
             td1.innerText = element.name
             let td2 = document.createElement("td")
             td2.innerText= element.age
             let td3 = document.createElement("td")
              td3.innerText  = element.category
              let td7 = document.createElement("td")
              td7.innerText  = element.Priority

             let td4 = document.createElement("td")

             td4.innerText = element.Vaccine

             let td5 = document.createElement("td")

             td5.innerText = "Vaccinate"
             td5.style.backgroundColor = "green"
             td5.style.Color = "white"
             td5.style.textAlign = "center"


             td5.addEventListener("click",()=>{
                //   document.getElementById("promt").style.display="block"
                alert(` Please enter  OTP ${element.otp}`)
                  document.getElementById("otpBtn").addEventListener("click",()=>{
                      let otpbox = document.getElementById("otpbox")

                      if(otpbox.value == element.otp){
                        alert(`${element.name} added to queue`)
                        setTimeout(() => {
                            alert(`Vaccinating  ${element.Vaccine}`)
                            
                        }, 1000);
                        setTimeout(()=>{
                            alert(`${element.name} Vaccinated`)
                            Donedata.push(element)
                            data.splice(index,1);
                            localStorage.setItem("masai-vaccin",JSON.stringify(data))
                            localStorage.setItem("vaccnated",JSON.stringify(Donedata));
                            make(data)

                        },2000)
                      }
                  })
             })

             let td6 = document.createElement("button")
             td6.innerText = "Delete"
             td6.style.color = "white"
             td6.style.backgroundColor = "red"
              td6.style.display="block"
              td6.style.fontSize="100%"
              td6.style.margin="auto"
             td6.addEventListener("click",()=>{
                
                   data.splice(index,1);
                   make(data)
                   localStorage.setItem("masai-vaccin",JSON.stringify(data))
             })

             tr.append(td,td1,td2,td3,td7,td4,td5,td6)
             tbody.append(tr)


         }
    });
}


// dropdown js
function opennav(){
    document.getElementById("myslide").style.width="200px"
  
  
 }
 
 function closenav(){
    document.getElementById("myslide").style.width="0"
  
    

 }


//  filtte of vacceen

let filter = document.getElementById("Vaccine")

filter.addEventListener("change", (e) => {
//   console.log("YES")
    let newfilter = data.filter((ele, ind) => {

        if (e.target.value === ele.Vaccine) {
            return ele
           
        }

    })
    console.log(newfilter)
    if (newfilter.length == 0) {
        make(data)
       
   
    }
    else {
        make(newfilter)
      
    }

})


// fillter Priority
let Priority  = document.getElementById("Priority")

Priority.addEventListener("change", (e) => {
  console.log("YES")
    let newfilter = data.filter((ele, ind) => {

        if (e.target.value === ele.Priority) {
            return ele
           
        }

    })
    // console.log(newfilter)
    if (newfilter.length == 0) {
        make(data)
       
   
    }
    else {
        make(newfilter)
      
    }

})


// age fillter
// let age  = document.getElementById("age")
let high = document.getElementById("high")
let low = document.getElementById("low")

high.addEventListener("click",()=>{

      data.sort((a,b)=>b.age-a.age)
      make(data)
})
low.addEventListener("click",()=>{

    data.sort((a,b)=>a.age-b.age)
    make(data)
})
  