main.templates["Signup"] = () => {
    let html = ``;

    return new Promise((resolve, reject) => {
        html += `
        <div class="wrapper signup-wrapper">
            <div class="form-box">
                <div class="signup-container">
                    <h1 class="signup-welcome-text">Registrieren</h1>

                    <form class="form signup-form">
                        <p class="signup-login" onclick="window.location.hash = '#login';">Zur Anmeldung...</p>


                        <div class="signup-column-container">
                            <div class="signup-left">
                                <input type="text" placeholder="Vorname" id="userName">
                                <input type="text" placeholder="Nachname" id="userSurname">
                                <input type="text" placeholder="Mailadresse" id="userMail">
                            </div>
                            <div class="signup-right">
                                <input type="text" placeholder="Geburtsdatum" id="userBirthday">
                                <input type="password" placeholder="Passwort" id="userPassword1">
                                <input type="password" placeholder="Passwort wiederholen" id="userPassword2">
                            </div>
                        </div>
                        


                        <img style="margin-top: 30px;" class="signup-captcha-image" src="/kr/?type=captcha">
                        <p class="signup-captcha-new" onclick="refreshCaptcha();">Neues Bild...</p>
                        <input type="text" id="captcha" placeholder="Captcha-Text">
                        


                        <button id="signup-button">Anmelden</button>
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
            document.getElementById("signup-button").addEventListener("click", (e) => {
                e.preventDefault();

                if (document.getElementById("userPassword1").value !== document.getElementById("userPassword2").value) {
                    alert("Passwords do not match");
                    return;
                }

                let form = new FormData();
                form.append("type", "signup");
                form.append("userName", document.getElementById("userName").value);
                form.append("userSurname", document.getElementById("userSurname").value);
                form.append("userMail", document.getElementById("userMail").value);
                form.append("userBirthday", document.getElementById("userBirthday").value);
                form.append("userRelation", 0);
                form.append("userPassword", document.getElementById("userPassword1").value);
                form.append("captchaCode", document.getElementById("captcha").value);

                axios
                    .post("/kr/?type=signup", form)
                    .then((resolve) => {
                        if (resolve.data.type === "success") {
                            axios
                                .post("/kr/?type=getCurrentUser")
                                .then((resolve) => {
                                    if (resolve.data.type === "success") {
                                        loginUser(resolve.data.data);

                                        axios.defaults.headers.common = {
                                            "X-Requested-With": "XMLHttpRequest",
                                            "X-Requested-CSRF": resolve.data.data.csrf
                                        }

                                        main.utility.fadeOutEffect(document.querySelector(".signup-form"));
                                        document.querySelector(".signup-wrapper").classList.add("form-success")
                                        setTimeout((e) => {document.querySelector(".signup-welcome-text").innerHTML += "."}, 500)
                                        setTimeout((e) => {document.querySelector(".signup-welcome-text").innerHTML += "."}, 1000)
                                        setTimeout((e) => {document.querySelector(".signup-welcome-text").innerHTML += "."}, 1500)
                                        setTimeout((e) => {document.querySelector(".signup-welcome-text").innerHTML += "."}, 2000)
                                        setTimeout((e) => {window.location.hash = '';}, 2500)
                                    }
                                    checkedUserLogged = true;
                                })
                        } else if (resolve.data.error === "Requesterror" && resolve.data.debug.indexOf("exists") !== -1) {
                            alert("Es existiert bereits ein Nutzer mit dieser Mailadresse...")
                        }
                    }, (reject) => {throw new Error(reject)})
                    .catch((e) => main.debug)
            })
        }});
    })
}




function refreshCaptcha () {
    document.querySelector('.signup-captcha-image').src = '/kr/?type=captcha&rand=' + Math.round(Math.random() * 1000);
}