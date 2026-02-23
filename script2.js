 let course = document.querySelector("#course");
 let select=document.querySelector("#semester");
 let selectsub=document.querySelector("#subject");
 let btn=document.querySelector("#showBtn");
 let result=document.querySelector("#result");
 let main=document.querySelector(".main-container");
 let showa=document.querySelector(".btn");
 let p=document.querySelector("p");
 let filename="";
 
 
 
 

btn.addEventListener("click",()=>{
   if(selectsub.value==="physics"&& select.value==="sem3"){
      result.innerHTML=`
      
       <p> Dec - 2025 paper <a href="${filename}"  class="btn">Open</a> </p>
      
       `;
   
   }
   else if(selectsub.value==="cs" && select.value==="sem3"){
      result.innerHTML=`<p>  Dec - 2025  <a href="${filename}" class="btn">Open</a></p>`;
   }
    filename= "BSc/"+select.value+ "/"+selectsub.value+select.value+".pdf";
 
 

 });
 result.addEventListener("click",(e)=>{
   if(e.target.classList.contains("btn")){
      
window.open(filename,"_blank");
   }
});


