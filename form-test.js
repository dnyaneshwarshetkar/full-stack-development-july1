function submitEventHandler(e){
    e.preventDefault();
    console.log(e)

    let formData = new FormData(e.target);
    let obj = {};
    for (const value of formData.entries()) {
        console.log(value, value[0], value[1]);
        obj[value[0]] = value[1];
    }
    console.log(obj);

    if(obj.firstName.length <= 5){
        document.getElementById("firstNameError").style.display = "block";
        document.getElementById("firstName").style.borderColor = "red";
        return;
    }

    console.log(JSON.stringify(obj));
}



/*document.getElementById("registrationForm").addEventListener("formdata", (e)=>{
    const data = e.formData;
    for (const value of data.values()) {
        console.log(value);
    }
})*/