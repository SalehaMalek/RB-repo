function addNewWEField(){
   
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("wefield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here");



    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");
   
    weOb.insertBefore(newNode,weAddButtonOb);
}



function addNewAQField(){
    let newNode= document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder", "Enter here");
    

 
    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");
   
    aqOb.insertBefore(newNode,aqAddButtonOb);


}

//generating Resume

function generateResume(){

    let namefield = document.getElementById("namefield").value;
    let nameT1 = document.getElementById("nameT1");

    nameT1.innerHTML = namefield; 

    //direct

    document.getElementById("nameT2").innerHTML = namefield;

    document.getElementById("contactT").innerHTML = document.getElementById("contactfield").value;
   
    document.getElementById("addressT").innerHTML = document.getElementById("addressfield").value;
   

    document.getElementById("linkedT").innerHTML = document.getElementById("linkedfield").value;
   
    document.getElementById("fbT").innerHTML = document.getElementById("fbfield").value;
   
    document.getElementById("instaT").innerHTML = document.getElementById("instafield").value;
   


    //objective

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectivefield").value;
   
    // work experience
    
    let we = document.getElementById("wefield");
    
    let str = '';

    for(let e of we)
    {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;



    //academic qualification

    let aqs = document.getElementById("aqfield");

    let str1 = "";

    for(let e of aqs)
    {
        str1 += `<li> ${e.value} </li`;

    }  

    document.getElementById("aqT").innerHTML = str1;

    //setting img

    let file = document.getElementById("imgfield").files[0]

    console.log(file);

    let reader = new FileReader()

    reader.readAsDataURL(file);


console.log(reader.result);

//set the img to reader

reader.onloadend = function () {
    document.getElementById("imgT").src = reader.result;
};



    document.getElementById("Resume-form").style.display= "none";
    document.getElementById("Resume-template").style.display = "block";
}

//print resume

function printResume(){
    window.print();
}