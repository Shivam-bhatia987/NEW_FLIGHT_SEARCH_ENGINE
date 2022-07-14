
function validateString(id) {
    var element = document.getElementById(id);
    var regExp = /^[a-zA-Z]+$/;
    if (!regExp.test(element.value)) {
        alert("***Please enter Origin city***");
        element.style.border = "2px solid red";
        element.focus();
        return false;

    }
    element.style.border = "2px solid green";
}

function validateString1(id) {
    var element1 = document.getElementById(id);
    var regExp1 = /^[a-zA-Z]+$/;
    if (!regExp1.test(element1.value)) {
        alert("***Please enter destination city***");
        element1.style.border = "2px solid red";
        element1.focus();
        return false;

    }
    element1.style.border = "2px solid green";
    
}