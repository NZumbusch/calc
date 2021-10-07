main.templates["Login"] = () => {
    let html = ``;

    return new Promise((resolve, reject) => {
        html += `
        <div class="wrapper login-wrapper">
            <div class="form-box">
                <div class="login-container">
                    <h1 class="login-welcome-text">Willkommen</h1>
                    
                    

                    <form class="form login-form">
                        <p class="login-signup" onclick="window.location.hash = 'signup';">Zur Registrierung...</p>

                        <input type="text" placeholder="Mail-Addresse" class="login-mail">
                        <input type="password" placeholder="Passwort" class="login-password">
                        <button id="login-button">Anmelden</button>

                        <p class="login-forgotpassword" onclick="resetPassword();">Password vergessen?</p>
                    </form>
                </div>
            </div>
            
            <ul class="bg-bubbles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>`;
        
        resolve({html: html, callback: () => {
            document.getElementById("login-button").addEventListener("click", (e) => {
                e.preventDefault();


                let form = new FormData();
                form.append("type", "login");
                form.append("userPassword", document.querySelector(".login-password").value);
                form.append("userMail", document.querySelector(".login-mail").value);

                axios
                    .post("/kr/?type=login", form)
                    .then((resolve) => {
                        if (resolve.data.type === "success") {
                            axios.defaults.headers.common = {
                                "X-Requested-With": "XMLHttpRequest",
                                "X-Requested-CSRF": resolve.data.data.csrf
                            }

                            loginUser(resolve.data.data);

                            main.utility.fadeOutEffect(document.querySelector(".login-form"));
                            document.querySelector(".login-wrapper").classList.add("form-success")
                            setTimeout((e) => {document.querySelector(".login-welcome-text").innerHTML += "."}, 500)
                            setTimeout((e) => {document.querySelector(".login-welcome-text").innerHTML += "."}, 1000)
                            setTimeout((e) => {document.querySelector(".login-welcome-text").innerHTML += "."}, 1500)
                            setTimeout((e) => {document.querySelector(".login-welcome-text").innerHTML += "."}, 2000)
                            setTimeout((e) => {window.location.hash = '';}, 2500)
                        }
                    }, (reject) => {throw new Error(reject)})
                    .catch((e) => main.debug)
            })
        }});
    })
}



function resetPassword () {
    if (document.querySelector(".login-mail").value.length < 2) {
        alert("Bitte geben Sie zuerst eine valide Mailaddresse ein...")
    }

    axios
        .post("/kr/?type=resetPassword&userMail=" + document.querySelector(".login-mail").value)
        .then((resolve) => { alert("Ihr Passwort wurde erfolgreich zurueckgesendet. Sie können Ihr neues Passwort in Ihrem Mail-Postfach finden."); })
}