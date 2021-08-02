


function spanny(){
  var spanwords = document.querySelectorAll(".toptext7 span");
  
  
    spanwords.forEach(item=>{
      
        
      if(window.screen.width<480){
        text=""
        numdots=window.screen.width-410;
        console.log(window.screen.width)
        console.log(numdots)
      for(let i=0; i<numdots; i++){
        text+="."
      }


        text+=`${'$' + Math.floor(300*Math.random())}`
      item.textContent=text;
    }

    else if(window.screen.width > 481 && window.screen.width<552){
      text=""
      numdots=window.screen.width-480;
      console.log(numdots)
      console.log(window.screen.width)
      for(let i=0; i<numdots; i++){
        text+="."
      }
        text+=`${'$' + Math.floor(300*Math.random())}`
      item.textContent=text;
    }
    else{
      text=""
      numdots=50;
      console.log(numdots)
      console.log(window.screen.width)
      for(let i=0; i<numdots; i++){
        text+="."
      }
        text+=`${'$' + Math.floor(300*Math.random())}`
      item.textContent=text;
    } 
    }
    
    


    )}
  

spanny();













var btns7 = document.querySelectorAll(".btn7");
var cards7 = document.querySelectorAll(".card7box");
var special = document.querySelectorAll("#special");
var salad =document.querySelectorAll("#salad");
var start =document.querySelectorAll("#starter");


function remover(){
  btns7.forEach(item=>{
    item.classList.remove("active7");
  })
}



function cars(){
  cards7.forEach(item=>{
      item.classList.add("nones")
  })
}



btns7.forEach((it, ins)=>{
  it.addEventListener("click", ()=>{
    remover()
    it.classList.add("active7");
  if(ins==2){
    cars()
        salad.forEach(id=>{
        id.classList.remove("nones")
  })
}
else if(ins==3){
  cars()
      special.forEach(it=>{
      it.classList.remove("nones");
  })
}
else if(ins==1){
  cars()
  start.forEach(it=>{
  it.classList.remove("nones");
})
}
else{
  cards7.forEach(item=>{
    item.classList.remove("nones")
})}})})


fetch("https://jsonplaceholder.typicode.com/posts")
.then(res=>res.json())
.then(re =>{console.log(re)})
.catch(reds=>{
  
  console.log(Error("404 not found"))
})






var btns8 = document.querySelectorAll(".btn8");
var targetlink = document.querySelectorAll(".tor");
btns8.forEach(btn=>{
  btn.addEventListener("click", function(){
      btns8.forEach(item=>{
        item.classList.remove("active8")
      })
      btn.classList.add("active8");
      var id = btn.getAttribute("data-target");
    targetlink.forEach(item=>{
      if(item.id===id){
        targetlink.forEach(a=>{
          a.classList.remove("actives8")
          console.log(a)
        })
        item.classList.add("actives8")
      }
    })
  })
})

// section 8// section 8// section 8// section 8// section 8// section 8// section 8// section 8



var allbuttons = document.querySelectorAll("button")
console.log(allbuttons)
allbuttons.forEach(item=>{
  item.classList.add("waves")
})



// var wipers = document.querySelectorAll("[data-slide=c1]");
// var sect1 = document.getElementById("#sec1")
// function firstpage(){

// wipers.forEach(item,i,a=>{

//     if(a[i].className==="swiper-slide-active"){
//         console.log(a[i])
//     }

// })


// }


// firstpage();



