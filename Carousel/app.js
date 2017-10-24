
        var slide_index = 1;  
        displaySlides(slide_index);  
  
        function plusSlides(n) {  
            displaySlides(slide_index += n);  
        }  
  
        function currentSlide(n) {  
            displaySlides(slide_index = n);  
        }  
  
        function displaySlides(n) {  
            var i;  
            var susan = document.getElementsByClassName("susan1");  
            if (n > susan.length) { slide_index = 1 }  
            if (n < 1) { slide_index = susan.length }  
            for (i = 0; i < susan.length; i++) {  
                susan[i].style.display = "none";  
            }  
            susan[slide_index - 1].style.display = "block";  
        }  
        
     