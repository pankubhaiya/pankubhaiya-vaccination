let Donedata = JSON.parse(localStorage.getItem("vaccnated")) || []

let tbody = document.getElementById("tobody")
make(Donedata)
function make(Donedata){

    tbody.innerHTML=null

    Donedata.forEach((element,index) => {
         if(element.name){
             let tr = document.createElement("tr")
             let td = document.createElement("td")
             td.innerText = ++index
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
            
             tr.append(td,td1,td2,td3,td7,td4)
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

//  priorty fillter

 let Priority  = document.getElementById("Priority")

 Priority.addEventListener("change", (e) => {
  console.log("YES")
    let newfilter = Donedata.filter((ele, ind) => {

        if (e.target.value === ele.Priority) {
            return ele
           
        }

    })
    // console.log(newfilter)
    if (newfilter.length == 0) {
        make(Donedata)
       
   
    }
    else {
        make(newfilter)
      
    }

})




//  filtte of vacceen

let filter = document.getElementById("Vaccine")

filter.addEventListener("change", (e) => {
//   console.log("YES")
    let newfilter = Donedata.filter((ele, ind) => {

        if (e.target.value === ele.Vaccine) {
            return ele
           
        }

    })
    // console.log(newfilter)
    if (newfilter.length == 0) {
        make(Donedata)
       
   
    }
    else {
        make(newfilter)
      
    }

})


// age fillter

let high = document.getElementById("high")
let low = document.getElementById("low")

high.addEventListener("click",()=>{

    Donedata.sort((a,b)=>b.age-a.age)
      make(Donedata)
})
low.addEventListener("click",()=>{

    Donedata.sort((a,b)=>a.age-b.age)
    make(Donedata)
})