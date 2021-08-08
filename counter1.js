
//I set the counter to 0 at first
let counter = 0;

// here i grabbed element in my html 
const value = document.getElementById('value'); const btns = document.querySelectorAll('.btn')

// since the button classes are group together here i try to get each class seperate when ever i click on each buttton. 


btns.forEach(function (btn){
    btn.addEventListener("click",function(e){
        const count = e.currentTarget.classList;// .currentTarget was used to get the current button i clicked and .classList gives me the value of the class and it was passed into the count

        // the if statement here took care of each cases of the button
        if(count.contains("decrease")){
                counter--;
        }else if(count.contains("increase")){
                counter++;
        }
        else {
           counter = 0;
        }
   // changing the color of the counter
        if (counter > 0){
            value.style.color= "green"
        } else if(counter < 0) {
            value.style.color= "red"
        }else {
            value.style.color =""
        }

        value.textContent = counter;
    })
})
