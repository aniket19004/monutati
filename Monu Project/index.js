

// Image slider
var image=["https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220602110655/Accounting-banner.png","https://www.accoxi.com/media/1993/gst-registration.jpg","https://www.indiafilings.com/learn/wp-content/uploads/2023/01/gst-registration.jpg","https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/gst-retrun-filing.jpg"];

// var image=["https://www.linkedin.com/dms/D5606AQFOG7iQ505NwA/messaging-attachmentFile/0/1685800116664?m=AQIdtdTA-E6pJQAAAYiBhHP1-CVCIgj7slSbAAhHSOzjf-JC6KexLj7rPw&ne=1&v=beta&t=z-6ZU2b1tzvebnRHIwGljQxu4VaXYRyng4t3uc95U6o","https://www.linkedin.com/dms/D5606AQHHijF3-fVdyQ/messaging-attachmentFile/0/1685800128892?m=AQKahI0ZZ9D2IAAAAYiBhKhrwGaO-9hTi6lFxF50hIPEi2KzuK2_iNRtRQ&ne=1&v=beta&t=CKsrmsVCSIP_PpQtKDtTr4E7OtWpALcI2WWQTMJxUkw","https://www.linkedin.com/dms/D5606AQFaYm4dlPsATg/messaging-attachmentFile/0/1685800155233?m=AQLV68xGhJhbqAAAAYiBhQV0n1QCwbBE0SszL9huEmBumJir5IgIq6AXeQ&ne=1&v=beta&t=6k4FSBHoWK8D8nrf17_9kT7tnfL_R0yoad0CGlCdTpA"];
    var i=0;
    function slideshow(){
        document.getElementById("image").src=image[i];

        if(i<image.length-1){
            i++;
        }else{
            i=0;
        }
        setTimeout("slideshow()",2000);
    }
    window.onload=slideshow;

    // Book Appointment

    let button=document.querySelector("#color");

   const changeBackground=()=>{
    const hexVal=Math.floor(Math.random()*0xffffff).toString(16);
    document.body.style.background=`#${hexVal}`;
   }
   button.addEventListener("click",changeBackground);
  



// change name automatically

let nameit=document.getElementById("change");


setInterval(()=>{  
   
    let number=  Math.floor(Math.random()*10) ;
//     console.log(number);

    switch(number){
        case 0: nameit.innerText="Accounting";
                break;
        case 1: nameit.innerText="GST";
                break;
        case 2: nameit.innerText="GST Return";
                break;
        case 3: nameit.innerText="Income Tax";
                break;
        case 4:nameit.innerText="PF";
                break; 
        case 5: nameit.innerText="TDS";
                break;
        case 6:nameit.innerText="ESIC";
                break;
        case 7: nameit.innerText="ISP Certification";
                break;
        case 8:nameit.innerText="Food License";
                break;  
        case 9:nameit.innerText="Gumasta License";
                break;
                            
    }


},4000)

// form button
let btn=document.getElementById("book");
let form=document.getElementById("form");
let cross=document.getElementById("cross");

btn.addEventListener("click",()=>{
        form.style.display="flex";
})

cross.addEventListener("click",()=>{
        form.style.display="none";      
})

