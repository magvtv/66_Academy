funciton validateForm() {
    let f = document.forms["form"]["regno"].value;
    if (f == "") {
        alert("Please insert your registration number");
        return false;
    }
}