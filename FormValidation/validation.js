const myForm = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const errors = document.querySelectorAll(".error");
const required =["email","password","repeatpassword","firstname","lastname","gender","age"]; 

myForm.addEventListener("submit",validation);

function validation(e){
   let  data = {};
    e.preventDefault();
    errors.forEach(function(item){
        item.classList.add("hide");
    })
    let error =false;
    inputs.forEach( function(el) {
      
        let tempName = el.getAttribute("name");
        console.log(tempName);
        if(tempName != null){
            el.style.borderColor = "#ddd";
            if(el.value.length == 0 && required.includes(tempName)){
                addError(el,"Required Field", tempName);
                error = true;
            }
            if(tempName == "email"){
                let exp=/([A-Za-z0-9._-]+@[A-Za-z]+\.[A-Za-z])\w+/;
                let result = exp.test(el.value);
            if(!result){
                addError(el,"Required Field", tempName);
                error = true;
            }
            }
            if(tempName == "password"){
                let exp=/[A-Za-z0-9]+/;
                let result = exp.test(el.value);
            if(!result){
                addError(el,"Only numbers and letters", tempName);
                error = true;
            }
            if(!(el.value.length>3 && el.value.length <12)){
                addError(el,"Needs to be between 3-8 characters",tempName);
            }
            }
            if(tempName == "repeatpassword"){
                let exp=/[A-Za-z0-9]+/;
                let result = exp.test(el.value);
            if(!result){
                addError(el,"Only numbers and letters", tempName);
                error = true;
            }
            if(!(el.value.length>3 && el.value.length <12)){
                addError(el,"Needs to be between 3-8 characters",tempName);
            }
            if(el.value[1] !== el.value[2]){
                addError(el,"passwords must be same", tempName);
            }
            }

            if(tempName == "firstname"){
                let exp=/[A-Za-z]/;
                let result = exp.test(el.value);
            if(!result){
                addError(el,"Only letters", tempName);
                error = true;
            }
            if(!el.value.length >25){
                addError(el,"max length should be 25 characters",tempName);
            }
            }

            if(tempName == "lastname"){
                let exp=/[A-Za-z]/;
                let result = exp.test(el.value);
            if(!result){
                addError(el,"Only letters", tempName);
                error = true;
            }
            if(!el.value.length >25){
                addError(el,"max length should be 25 characters",tempName);
            }
            }
            if(tempName == "age"){
                if(!isNaN || el.value>86|| el.value<0){
                    addError(el,"age must be between 0 and 85", tempName);
                    error = true;
                }
            }

            data[tempName] = el.value;

        }
        
    })

console.log(data);
}

function addError(el,message,fieldName){
    let temp = el.nextElementSibling;
    temp.classList.remove("hide");
    temp.textContent = fieldName.toUpperCase()+ " " +message;
    el.style.borderColor = "red";
    el.focus();


}