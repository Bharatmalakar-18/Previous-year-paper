 let course = document.querySelector("#course");
 let select=document.querySelector("#semester");
 let selectsub=document.querySelector("#subject");
 let btn=document.querySelector("#showBtn");
 let result=document.querySelector("#result");
 let main=document.querySelector(".main-container");
 let showa=document.querySelector(".btn");
 let p=document.querySelector("p");
 
 
 
 
 

btn.addEventListener("click",()=>{
   if(selectsub.value==="physics"&& select.value==="sem3"){
      result.innerHTML=`
      
       <p> Dec - 2025 paper <button class="btn" >open</button></p>
      //  <p>2023 paper </p>
      //  <p>2023 paper </p>
      //  <p>2023 paper </p>`
   
   }
   else if(selectsub.value==="cs" && select.value==="sem3"){
      result.innerHTML=`<p>  Dec - 2025 <button class="btn" >open</button></p>`
   }
   let filename= "BSc/"+select.value+ "/"+selectsub.value+select.value+".pdf";
 console.log(filename);
 result.addEventListener("click",(e)=>{
   if(e.target.classList.contains("btn")){
      // let file=e.target.getAttribute("data-file");
window.open(filename,"_blank");
   }
});

 });


