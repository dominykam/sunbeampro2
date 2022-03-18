function JeepTransferData (){

    const noOfpeople = document.getElementById("persons").value;
    const noOfsuitcases = document.getElementById("suitcases").value;
    const pickUpDate = document.getElementById("Pick-up").value;
    const handInDate = document.getElementById("Hand-in").value;




    sessionStorage.setItem("persons", noOfpeople);
    sessionStorage.setItem("suitcases", noOfsuitcases );
    sessionStorage.setItem("Pick-up", pickUpDate );
    sessionStorage.setItem("Hand-in", handInDate );


    document.location.href = "second-page.html";
}

// showing transfer output
const placeForTransferedData = document.getElementById("place-for-transfered-data");
const placeForTransferPickUpDate = document.getElementById("transfer-of-pick-up-date");
const placeForTransferHandkInDate = document.getElementById("transfer-of-hand-in-date");

{
    placeForTransferedData.innerHTML = "<p>Number of people: " + sessionStorage.getItem('persons')
    + "<p>Number of suitcases: " + sessionStorage.getItem('suitcases');  
   
    placeForTransferPickUpDate.innerHTML = "<p>Pick up date: " + sessionStorage.getItem('Pick-up');
    placeForTransferHandkInDate.innerHTML = "<p>Hand in date: " + sessionStorage.getItem('Hand-in');
}