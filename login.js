let otp = 0;

function generate(){

    let user =
    document.getElementById("name").value;

    if(user === ""){
        alert("Please enter username");
        return;
    }

    otp =
    Math.floor(
        1000 + Math.random() * 9000
    );

    alert("Your OTP is: " + otp);
}

function login(){

    let user =
    document.getElementById("name").value;

    let uotp =
    document.getElementById("otp").value;

    if(Number(uotp) === otp){

        localStorage.setItem(
            "loggedIn",
            "true"
        );

        localStorage.setItem(
            "username",
            user
        );

        otp = 0;

        window.location.href =
        "expense1.html";
    }
    else{
        alert("Invalid OTP");
    }
}
