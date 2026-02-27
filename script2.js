let papersData = {

   bsc: {
      sem1: {
         // physics: {
         //    "2023": "Bsc/sem3/physicssem3.pdf",
         //    "2024": "papers/bsc/sem1/physics/2023.pdf",
         //    "2026": "papers/bsc/sem1/physics/2023.pdf"
         // },
         // chemistry: {
         //    "2023": "papers/bsc/sem1/chemistry/2023.pdf"
         // },
         computer_science:{
            " Dec-2024":"BSc/sem1/sem1cs.pdf"
         }
      },
      sem2: {
         Mathematics: {
            "June-2025": "BSc/sem2/mathssem2.pdf"
         },
         physics: {
            "June-2025":"BSc/sem2/physem2.pdf"
         }
      },
       sem3: {
         computer_science: {
            "Dec-2025": "BSc/sem3/cssem3.pdf"
         },
         Mathematics: {
            "Dec-2025": "BSc/sem3/mathssem3.pdf"
         },
         physics: {
            "Dec-2025": "BSc/sem3/physem3.pdf"
         }
      }
      
   },

   bcom: {
      sem1: {
         Business_law: {
            "Dec-2025": "Bcom/sem1/Blawdec25.pdf"
         },
         Business_economics: {
            "Dec-2025": "Bcom/sem1/Beco2025.pdf"
         },
         Fundamental_accounting: {
            "Dec-2025": "Bcom/sem1/Facc2025.pdf"
         }
      },
      // sem3: {
      //    businesslaw: {
      //       "2023": "papers/bcom/sem3/businesslaw/2023.pdf"
      //    }
      // }
   },

   // 🔥 NEW COURSE → BSc Bio
   // bscbio: {
   //    sem1: {
   //       botany: {
   //          "2023": "papers/bscbio/sem1/botany/2023.pdf"
   //       },
   //       zoology: {
   //          "2023": "papers/bscbio/sem1/zoology/2023.pdf"
   //       }
   //    },
   //    sem3: {
   //       genetics: {
   //          "2023": "papers/bscbio/sem3/genetics/2023.pdf"
   //       }
   //    }
   // }

};



let course = document.getElementById("course");
let semester = document.getElementById("semester");
let subject = document.getElementById("subject");
let btn = document.getElementById("showBtn");
let result = document.getElementById("result");



course.addEventListener("change", function () {

   semester.innerHTML = "<option value=''>Select Semester</option>";
   subject.innerHTML = "<option value=''>Select Subject</option>";

   let selectedCourse = course.value;

   if (!papersData[selectedCourse]) return;

   for (let sem in papersData[selectedCourse]) {
      semester.innerHTML += `<option value="${sem}">${sem}</option>`;
   }

});



semester.addEventListener("change", function () {

   subject.innerHTML = "<option value=''>Select Subject</option>";

   let selectedCourse = course.value;
   let selectedSem = semester.value;

   if (!papersData[selectedCourse]?.[selectedSem]) return;

   for (let sub in papersData[selectedCourse][selectedSem]) {
      subject.innerHTML += `<option value="${sub}">${sub}</option>`;
   }

});

btn.addEventListener("click", function () {

   result.innerHTML = "";

   let selectedCourse = course.value;
   let selectedSem = semester.value;
   let selectedSub = subject.value;

   let subjectData =
      papersData[selectedCourse]?.[selectedSem]?.[selectedSub];

   if (!subjectData) {
      result.innerHTML = "Paper not available";
      return;
   }

   for (let year in subjectData) {
      let filePath = subjectData[year];

      result.innerHTML += `
      <p>
        ${year} Paper 
        <button class ="bttn" onclick="window.open('${filePath}')">
          Open
        </button>
      </p>
    `;
   }

});