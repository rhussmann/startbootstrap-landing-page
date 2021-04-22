// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", (event) => {
    let submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click", function () {
	let emailAddressBox = document.getElementById("email-address");
	let emailAddress = emailAddressBox.value;
	console.log("Submitting email", emailAddress);
    
	fetch("https://crm.rhussmann.com/api/v1/LeadCapture/12c476975d7a2b47b58941c994958354", {
	    method: "POST",
	    mode: "cors",
	    headers: {
		"Content-Type": "application/json"
	    },
	    body: JSON.stringify({"emailAddress": emailAddress})
	}).then(() => alert("Submitted!")).catch((err) => alert(err));
    });
});
