console.log("click")
let boxes=document.querySelectorAll(".box");
let resetl=document.querySelector(".reset");
let turn0=true;
let arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8],
    [2,4,6],
]

boxes.forEach((value)=>{
    value.addEventListener("click",()=>{
        if(turn0){
            value.innerHTML="O"
            turn0=false;
           
        }
        else{
            value.innerHTML="X"
            turn0=true;
        }
        value.disabled=true;
        checkwinner();
        console.log("click")
    })
})
const disablebox=()=>{
    for(let x of boxes){
        x.disabled=true;
    }
};
const enablebox=()=>{
    for(let x of boxes){
        x.disabled=false;
        x.innerHTML=" ";
       
      }
}
const resetbut=()=>{
        turn0=true;
        enablebox();
        document.querySelector(".messg").innerHTML=" " ;
        
    };



const checkwinner=()=>{
    for(let pattern of arr){
       let val1=boxes[pattern[0]].innerText;
       let val2=boxes[pattern[1]].innerText;
       let val3=boxes[pattern[2]].innerText;
         
       if(val1!=""||val2!=""||val3!="")
       {
       if(val1==val2&&val2==val3)
       {
        console.log("winner");
        document.querySelector("h2").innerHTML=`congratulation player ${val1} you win `
        disablebox();
       }
    }

    }
}
resetl.addEventListener("click",resetbut);