console.log("hi")

simpleCart.bind( 'beforeCheckout' , function( data ){  
data.first_name = document.getElementById("fname").value;
data.last_name = document.getElementById("lname").value;
data.phone_number = document.getElementById("phone_number").value;
data.email_address = document.getElementById("email_address").value;
data.address_street_1 = document.getElementById("address_street_1").value;
data.address_street_2 = document.getElementById("address_street_2").value;
data.city= document.getElementById("address_city").value;
data.state = document.getElementById("address_state_province").value;
data.postcode = document.getElementById("postal_code").value;
data.country = document.getElementById("country").value;
data.cc_mastercard = document.getElementById("cc_mastercard").checked;
data.cc_visa = document.getElementById("cc_visa").checked;
data.cc_amex = document.getElementById("cc_amex").checked;
data.ccname = document.getElementById("credit_card_name").value;
data.ccnumber = document.getElementById("credit_card_number").value;
data.ccsecuritycode = document.getElementById("credit_card_security_code").value;
});