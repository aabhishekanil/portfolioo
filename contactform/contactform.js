function sendmail() {
    let parms = {
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value,
    }
       emailjs.send("service_9zrwosf","template_e7pwimq",parms).then(alert("email send"))
    }
    function form(){
        let name=document.getElementById("name").value
        let email=document.getElementById("email").value
        if(name===""){
            alert("name not filled ");
            return false;
        }
        else if(email===""){
            alert("email is not correct");
            return false;
        }
        alert("login success");
        return true;
    }