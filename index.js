   // menu bar
   var open = document.getElementById("open");
   var close = document.getElementById("close");
   let menubar = document.getElementById("menu");


   open.addEventListener("click", (e) => {
       e.preventDefault();
       // menubar.style.transform="translateX(0)"
       menubar.style.right = "05%";
       menubar.style.top = "20% !imporant";
       open.style.display = "none";
       close.style.display = "unset";

   });

   close.addEventListener("click", (e) => {
    e.preventDefault();
       // menubar.style.transform="translateX(300px)"
       menubar.style.right = "-100%";
       close.style.display = "none";
       open.style.display = "unset";
   });

   AOS.init();