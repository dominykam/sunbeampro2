

function myFunction (){

    let numberOfPeople = document.getElementById("persons")
   
    let Suzuki = document.getElementById("container-for-suzuki")
    let Mazda =  document.getElementById("container-for-mazda")
    let Citroen =  document.getElementById("container-for-citroen")
  
   
  
   
   
    if(numberOfPeople.value <= 2 ) {
  
      Suzuki.style.display = "grid";
      Mazda.style.display = "grid";
      Citroen.style.display = "grid";  
  
    } else if (numberOfPeople.value >= 3 && numberOfPeople.value <=5 ){
  
      Suzuki.style.display = "grid";
      Mazda.style.display = "grid";
  
  
    } else if (numberOfPeople.value == 6 ) {
      Suzuki.style.display = "grid";
  
    }
  
  
  
      }


