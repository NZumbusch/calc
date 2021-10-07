main.templates["Account"] = () => {
    let html = ``;

    return new Promise((resolve, reject) => {
        resolve({html: `
        <div class="container">
            <div class="account-container">
                <div class="account-container-section">
                    <h1 class="account-container-section-title">Generelle Daten</h1>
                    <p class="account-container-section-text"><i class="bi bi-chat-right-quote"></i> ${user.userSurname}, ${user.userName}</p>
                    <p class="account-container-section-text"><i class="bi bi-calendar-week"></i>${user.userBirthday}</p>
                    <p class="account-container-section-text"><i class="bi bi-mailbox2"></i>${user.userMail}</p>

                    <p class="account-container-section-more" onclick="openModal('profile-settings');"Ändern...</p>
                </div>

                <div class="account-container-section">
                    <h1 class="account-container-section-title">Wettbewerbe</h1>
                    <p class="account-container-section-text"><i class="bi bi-award"></i>${user.userElo} Elo</p>
                    <!--<p class="account-container-section-text"><i class="bi bi-list-ol"></i>15ter Platz overall!</p>-->
                </div>

                <div class="account-container-section">
                    <h1 class="account-container-section-title">Aufgaben-History</h1>
                    <p class="account-container-section-text"><i class="bi bi-list-ol"></i>Eine Liste all deiner bisher gelösten Aufgaben.</p>
                    <p class="account-container-section-more" onclick="openModal('exercise-history');">Öffnen...</p>
                </div>
            </div>
            <div class="card mt-1 mb-5">
                <div class="card-body">
                    <h1 class="card-title">Einstellungen</h1>

                    <div class="account-settings">
                        <h1 class="account-settings-title" style="width: 100%;">Browserspezifische Einstellungen <i class="bi bi-upload  account-settings-title-upload" onclick="importBrowserSettings()"></i><i class="bi bi-download account-settings-title-download" onclick="main.utility.downloadObjectAsJson(user.getCookieSettings(), 'browsereinstellungen');"></i></h1>
                        <div class="account-settings-browser"></div>

                        <h1 class="account-settings-title">Farbschema <i class="bi bi-upload  account-settings-title-upload" onclick="importColorTheme()"></i><i class="bi bi-download account-settings-title-download" onclick="main.utility.downloadObjectAsJson(main.usedTheme, 'farbschema');"></i></h1>
                        <div class="account-settings-theme">
                            <div class="account-settings-theme-element" propertyName="--primary">
                                <p class="account-settings-theme-element-title">Dunkelere Hauptfarbe</p>
                                <input type="color" class="account-settings-theme-element-picker" onchange="themeColorPicker(this);" value="${getThemeColorValue("--primary")}">
                            </div>

                            <div class="account-settings-theme-element" propertyName="--primary-opaque">
                                <p class="account-settings-theme-element-title">Durchsichtige Hauptfarbe</p>
                                <input type="color" class="account-settings-theme-element-picker" onchange="themeColorPicker(this);"  value="${getThemeColorValue("----primary-opaque")}">
                            </div>

                            <div class="account-settings-theme-element" propertyName="--link-font-color">
                                <p class="account-settings-theme-element-title">Link-Schriftfarbe</p>
                                <input type="color" class="account-settings-theme-element-picker" onchange="themeColorPicker(this);"  value="${getThemeColorValue("--link-font-color")}">
                            </div>

                            <div class="account-settings-theme-element" propertyName="--secondary">
                                <p class="account-settings-theme-element-title">Zweite Farbe</p>
                                <input type="color" class="account-settings-theme-element-picker" onchange="themeColorPicker(this);"  value="${getThemeColorValue("--secondary")}">
                            </div>

                            <div class="account-settings-theme-element" propertyName="--dark">
                                <p class="account-settings-theme-element-title">Dunkel</p>
                                <input type="color" class="account-settings-theme-element-picker" onchange="themeColorPicker(this);"  value="${getThemeColorValue("--dark")}">
                            </div>

                            <div class="account-settings-theme-element" propertyName="--lighter-dark">
                                <p class="account-settings-theme-element-title">Helleres Dunkel</p>
                                <input type="color" class="account-settings-theme-element-picker" onchange="themeColorPicker(this);"  value="${getThemeColorValue("--lighter-dark")}">
                            </div>

                            <div class="account-settings-theme-element" propertyName="--light">
                                <p class="account-settings-theme-element-title">Hell</p>
                                <input type="color" class="account-settings-theme-element-picker" onchange="themeColorPicker(this);"  value="${getThemeColorValue("--light")}">
                            </div>

                            <div class="account-settings-theme-element" propertyName="--gray">
                                <p class="account-settings-theme-element-title">Grau</p>
                                <input type="color" class="account-settings-theme-element-picker" onchange="themeColorPicker(this);"  value="${getThemeColorValue("--gray")}">
                            </div>

                            <div class="account-settings-theme-element" propertyName="--teal">
                                <p class="account-settings-theme-element-title">Accentfarbe</p>
                                <input type="color" class="account-settings-theme-element-picker" onchange="themeColorPicker(this);"  value="${getThemeColorValue("--teal")}">
                            </div>

                            <div class="account-settings-theme-element" propertyName="--teal-opaque">
                                <p class="account-settings-theme-element-title">Accentfarbe durchsichtig</p>
                                <input type="color" class="account-settings-theme-element-picker" onchange="themeColorPicker(this);"  value="${getThemeColorValue("--teal-opaque")}">
                            </div>

                            <div class="account-settings-theme-element" propertyName="--white">
                                <p class="account-settings-theme-element-title">Weis</p>
                                <input type="color" class="account-settings-theme-element-picker" onchange="themeColorPicker(this);"  value="${getThemeColorValue("--white")}">
                            </div>
                        </div>

                        <h1 class="account-settings-title" style="width: 100%;">Verbundene Codes</h1>
                        <p class="account-settings-warning">
                        Achtung! Inhaber verbundener Codes können sich jederzeit Ihr Profil und Daten ansehen, selbst wenn Sie Ihr Profil auf privat gestellt haben.
                        </p>
                        <div class="account-settings-codes">
                        </div>
                        <span class="account-settings-linkcode-container"><div class="account-settings-linkcode" onclick="openModal('link-code')"><i class="bi bi-link" style="margin-right: 0.3rem;"></i>Neu Verbinden</div></span>


                        <h1 class="account-settings-title" style="width: 100%;">Erstellte Codes</h1>
                        <p class="account-settings-warning">
                        Achtung! Verbundene Nutzer können über Ihre Codes Ihren Benutzernamen jederzeit sehen.
                        </p>
                        <div class="account-settings-owncodes">
                        </div>
                        <span class="account-settings-linkcode-container"><div class="account-settings-linkcode" onclick="openModal('create-code')"><i class="bi bi-link" style="margin-right: 0.3rem;"></i>Neuen Code erstellen</div></span>
                    </div>
                </div>
            </div>
        </div>
        `, callback: () => {
            setupIconColors();
            setupBrowserSettings();
            setupCodes();
            setupOwnCodes();
        }});
    })
}


function setupIconColors () {
    let counter = 1;
    document.querySelectorAll(".account-container-section-text > i").forEach((element, index) => {
        if (counter > 9) {counter = 1;}

        element.classList.add("i" + counter);

        counter++;
    })
}



function getThemeColorValue (key) {
    if (main.utility.getCookie("kopfrechnenTheme").length < 2) {
        return main.usedTheme[key];
    } else {
        let jsonCustumSettings = JSON.parse(main.utility.getCookie("kopfrechnenTheme"));
        return jsonCustumSettings[key];
    }
}


function themeColorPicker (element) {
    let key = element.parentElement.getAttribute("propertyName");
    
    main.usedTheme[key] = element.value;

    main.utility.setCookie("kopfrechnenTheme", JSON.stringify(main.usedTheme));

    main.setColorTheme(main.usedTheme);
}


function importBrowserSettings () {
    let promise = main.utility.getTextFile();

    promise.then((text) => {
        text = text.replace("\n", "").replace("\r", "");

        if (main.utility.isJSON(text)) {
            let json = JSON.parse(text);

            for (let key in json) {
                if (key in browserSettings) {
                    user.setCookieSetting(key, json[key]);
                }
            }
        } else {
            alert("Text not JSON, see debug console for more info...");
            console.debug("Text not JSON. Text: ", [text])
        }
    })
}




function importColorTheme () {
    let promise = main.utility.getTextFile();

    promise.then((text) => {
        text = text.replace("\n", "").replace("\r", "");

        if (main.utility.isJSON(text)) {
            let json = JSON.parse(text);

            for (let key in json) {
                if (key in main.usedTheme) {
                    main.usedTheme[key] = json[key];
                }
            }

            main.utility.setCookie("kopfrechnenTheme", JSON.stringify(main.usedTheme));
            main.setColorTheme(main.usedTheme);
        } else {
            alert("Text not JSON, see debug console for more info...");
            console.debug("Text not JSON. Text: ", [text])
        }
    })
}


const browserSettings = {
    eloRankingShowAmount: {type: "number", default: 15, max: 100, min: 3, heading: "Anzahl an Personen im Elo-Ranking"},
    waitForServerWhenShowingNextExercise: {type: "boolean", default: true, heading: "Vor dem Anzeigen neuer Aufgaben auf den Server warten"},
    preventEloExercises: {type: "boolean", default: false, heading: "Wettkampf und Testmodi verhindern"},
    lastExercisesAmount: {type: "number", default: 50, max: 1500, min: 5, heading: "Anzahl an Aufgaben die in 'Aufgaben-History' angezeigt werden."},
    charactersOfExerciseTextInLastExercisesList: {type: "number", default: 9, min: 3, max: 4000, heading: "Zeichen von Aufgabentitel die in 'Aufgaben-History' angezeigt werden."},
    defaultCompetitionExerciseAmount: {type: "number", default: 10, min: 1, max: 50, heading: "Anzahl an Aufgaben pro Paket im Wettkampf"},
    defaultTrainingExerciseAmount: {type: "number", default: 15, min: 1, max: 50, heading: "Anzahl an Aufgaben pro Paket im Training"}
}
function setupBrowserSettings () {
    document.querySelector(".account-settings-browser").innerHTML = '';

    for (let settingName in browserSettings) {
        let setting = browserSettings[settingName];
        let currentValue = user.getSettingDefault(settingName, setting.default);
        document.querySelector(".account-settings-browser").innerHTML += `
            <div class="account-settings-browser-setting">
                <p class="account-settings-browser-setting-heading">${setting.heading}</p>
                ${
                    setting.type === "number" ? 
                    `<input type="number" min="${setting.min}" max="${setting.max}" value="${currentValue}" onkeyup="setBrowserSetting('${settingName}', this);" onclick="setBrowserSetting('${settingName}', this);">` :
                    `
                        ${setting.type === "boolean" ? 
                        `
                        <input type="checkbox" id="account-settings-browser-setting-bool-${settingName}" name="account-settings-browser-setting-bool-${settingName}" class="simpleCheckbox" ${currentValue ? 'checked' : '' }>
                        <label for="account-settings-browser-setting-bool-${settingName}" onclick="setBrowserSetting('${settingName}', this);"><p></p></label>
                        ` :
                        `<input type="text" value="${currentValue}" onkeyup="setBrowserSetting('${settingName}', this);">`
                    }`
                }

            </div>
        `;
    }
    setupPreventNonNumbers();
}
function setBrowserSetting (settingName, element) {
    if (browserSettings[settingName].type === "number") {
        if (parseInt(element.value) > browserSettings[settingName].max || parseInt(element.value) < browserSettings[settingName].min) {
            return;
        }
    } else if (browserSettings[settingName].type === "boolean") {
        user.setCookieSetting(settingName, !element.control.checked);
        return;
    }
    
    user.setCookieSetting(settingName, element.value);
}
function setupPreventNonNumbers () {
    document.querySelectorAll("input").forEach((element, index) => {
        if (element.getAttribute("type") === "number") {
            element.addEventListener("keypress", (e) => {
                if (e.keyCode < 48 || e.keyCode > 57)
                {
                    e.preventDefault();
                }
            });
            element.addEventListener('paste', e => e.preventDefault());
        }
    });
}



function openModal (type, userId=false) {
    let contentHtml = '';
    let callback = false;
    switch (type) {
        case 'exercise-history':
            contentHtml = `
                <h1 class="account-modal-heading">Erledigte Aufgaben</h1>
                <i class="bi bi-download exercise-history-download" onclick="window.location = '/kr/?type=downloadAllExercises';"></i>

                <div class="exercise-history-sort">
                
                </div>
                <ul class="exercise-history-list">
                    
                </ul>
            `;
            callback = () => {
                axios
                    .post("/kr/?type=getLastExercises&amount=" + user.getSettingDefault("lastExercisesAmount", 50).toString())
                    .then((resolve) => {
                        if (resolve.data.type === "success") {
                            for (let done of resolve.data.data) {
                                document.querySelector(".exercise-history-list").innerHTML += `
                                    <div class="exercise-history-list-element ${done.doneAnswered===done.exerciseAnswer ? 'correct' : 'mistake'}"><span>${done.doneId}:</span> ${done.exerciseText.slice(0, user.getSetting("charactersOfExerciseTextInLastExercisesList"))}... - Erwartet: ${done.exerciseAnswer}, Abgegeben: ${done.doneAnswered}</div>
                                `;
                            }
                        }
                    })
            };
            break;
        case 'link-code':
            contentHtml = `
                <h1 class="account-modal-heading">Mit Code verbinden</h1>

                <div class="account-modal-code">
                    <input class="account-modal-code-name" placeholder="Bitte geben Sie hier den Code ein..."></input>
                    <div class="account-modal-code-submit">Verbinden</div>
                </div>

                <div class="account-modal-code-error" style="display: none;"></div>
            `;
            callback = () => {
                document.querySelector(".account-modal-code-submit").addEventListener("click", (e) => {
                    let codeName = document.querySelector(".account-modal-code-name").value;
                    
                    if (codeName.length < 3) {
                        document.querySelector('.account-modal-code-error').style.display = '';
                        document.querySelector(".account-modal-code-error").innerHTML = 'Bitte geben Sie einen vollen Code ein...';
                    }

                    document.querySelector('.account-modal-code-error').style.display = 'none';

                    axios
                        .post("/kr/?type=code&code=linkCode&codeName=" + codeName)
                        .then((resolve) => {
                            if (resolve.data.type === "success") {
                                setupCodes();
                                document.querySelector('.account-modal').style.display = 'none';
                            } else if (resolve.data.error === "Requesterror") {
                                document.querySelector('.account-modal-code-error').style.display = '';
                                document.querySelector(".account-modal-code-error").innerHTML = 'Dieser Code scheint nicht zu existieren. Pruefen Sie nochmals, ob Sie wirklich den richtigen Code eingegeben haben und bitten Sie sonst um einen neuen.';
                            } else if (resolve.data.error === "Permissionerror" && resolve.data.debug.indexOf("already linked") !== -1) {
                                document.querySelector('.account-modal-code-error').style.display = '';
                                document.querySelector(".account-modal-code-error").innerHTML = 'Dieser Code ist bereits mit jemandem verbunden. Bitte bitten Sie um einen neuen Code.';
                            } else if (resolve.data.error === "Permissionerror") {
                                document.querySelector('.account-modal-code-error').style.display = '';
                                document.querySelector(".account-modal-code-error").innerHTML = 'Du kannst dich nicht mit deinem eigenen Code verbinden...';
                            }
                        })
                })
            };
            break;
        case 'create-code':
            contentHtml = `
                <h1 class="account-modal-heading">Neuen Code erstellen</h1>

                <div class="account-modal-owncode-submit">Erstellen</div>

                <div class="account-modal-code-error" style="display: none;"></div>
            `;
            callback = () => {
                document.querySelector(".account-modal-owncode-submit").addEventListener("click", (e) => {
                    document.querySelector('.account-modal-code-error').style.display = 'none';

                    axios
                        .post("/kr/?type=code&code=createCode")
                        .then((resolve) => {
                            if (resolve.data.type === "success") {
                                setupOwnCodes();

                                document.querySelector('.account-modal').style.display = 'none';
                            } else if (resolve.data.error === "Permissionerror") {
                                document.querySelector('.account-modal-code-error').style.display = '';
                                document.querySelector(".account-modal-code-error").innerHTML = 'Sie haben bereits die Maximalanzahl an Codes erreicht.';
                            }
                        })
                })
            };
            break;
        case 'profile-settings': 
            contentHtml = `
                <h1 class="account-modal-heading">Generelle Daten ändern</h1>
            `;
            callback = () => {
                
            };
            break;
        case 'linked-user':
            contentHtml = `
                <h1 class="account-modal-heading">Verbundener Nutzer</h1>

                <div class="account-modal-connecteduser-info"><
                
                /div>
            `;
            callback = () => {
                axios
                    .post("/kr/?type=code&code=getUser&userId=" + userId)
                    .then((resolve) => {
                        let lastExerciseInfo = resolve.data.data.userLastExercises.sort((a, b) => {return b["doneDate"] - a["doneDate"];})[0];

                        document.querySelector(".account-modal-connecteduser-info").innerHTML = `
                            <div class="account-modal-connecteduser-info-name">Benutzername: <span>${resolve.data.data.userSurname}, ${resolve.data.data.userName}</span></div>
                            <div class="account-modal-connecteduser-info-name">Emailaddresse: <span>${resolve.data.data.userMail}</span></div>
                            <div class="account-modal-connecteduser-info-name">Geburtsdatum: <span>${resolve.data.data.userBirthday}</span></div>
                            <div class="account-modal-connecteduser-info-name">Elo: <span>${resolve.data.data.userElo}</span></div>
                            <div class="account-modal-connecteduser-info-name">Richtig / Falsch: <span>${resolve.data.data.userWins} / ${resolve.data.data.userLosses}</div>
                            <div class="account-modal-connecteduser-info-name">Letzte Aufgabe gemacht am <span>${main.utility.timeConverter(lastExerciseInfo.doneDate)}</span>: <br><span>"${lastExerciseInfo.exerciseText.slice(0, user.getSetting("charactersOfExerciseTextInLastExercisesList"))}..."</span> - Erwartet: <span>${lastExerciseInfo.exerciseAnswer}</span>, Abgegeben: <span>${lastExerciseInfo.doneAnswered}</span>, Elo: <span>${lastExerciseInfo.doneElo}</span></div>
                        `;
                    })
            };
            break;
    }


    document.querySelector(".account-modal").innerHTML = `
        <p class="account-modal-close" onclick="document.querySelector('.account-modal').style.display = 'none';">Schliessen...</p>

        ${contentHtml}`;
    document.querySelector(".account-modal").style.display = "";


    if (callback !== false) {callback();};
}





function setupCodes () {
    axios 
        .post("/kr/?type=code&code=getConnectedTo")
        .then((resolve) => {
            if (resolve.data.type === "success") {
                document.querySelector(".account-settings-codes").innerHTML = '';

                resolve.data.data.forEach((code) => {
                    document.querySelector(".account-settings-codes").innerHTML += `
                        <div class="account-settings-codes-code">
                            <div class="account-settings-codes-code-name">${code.codeName}</div>
                            <div class="account-settings-codes-code-author">${code.authorName}, ${code.authorSurname}</div>
                            <div class="account-settings-codes-code-unlink" onclick="unlinkCode('${code.codeName}', this);"><i class="bi bi-trash-fill" style="margin-right: 0.3em;"></i>Löschen</div>
                        </div>
                    `;
                })
            }
        })
}
function unlinkCode (codeName, element) {
    axios
        .post("/kr/?type=code&code=unlinkCode&codeName=" + codeName)
        .then((resolve) => {
            if (resolve.data.type === "success") {
                element.parentElement.remove();
            }
        })
}


function setupOwnCodes () {
    axios 
        .post("/kr/?type=code&code=getUsers")
        .then((resolve) => {
            document.querySelector(".account-settings-owncodes").innerHTML = '';

            resolve.data.data.forEach((code) => {
                document.querySelector(".account-settings-owncodes").innerHTML += `
                    <div class="account-settings-owncodes-code ${code.userName!==undefined ?  'green' : 'red'}">
                        <div class="account-settings-owncodes-code-name">${code.codeName}</div>
                        <div class="account-settings-owncodes-code-author" style="cursor: pointer;" onclick="openModal('linked-user', ${code.userId})">${code.userName!==undefined ? `${code.userName}, ${code.userSurname}` : 'Noch nicht verbunden'}</div>
                        <div class="account-settings-owncodes-code-unlink" onclick="deleteCode('${code.codeName}', this);"><i class="bi bi-trash-fill" style="margin-right: 0.3em;"></i>Löschen</div>
                    </div>
                `;
            })

            axios 
                .post("/kr/?type=code&code=getCodes")
                .then((cresolve) => {
                    cresolve.data.data.forEach((code) => {
                        if (code.userName === undefined) {
                            document.querySelector(".account-settings-owncodes").innerHTML += `
                                <div class="account-settings-owncodes-code red">
                                    <div class="account-settings-owncodes-code-name">${code.codeName}</div>
                                    <div class="account-settings-owncodes-code-unlink" onclick="deleteCode('${code.codeName}', this);"><i class="bi bi-trash-fill" style="margin-right: 0.3em;"></i>Löschen</div>
                                </div>
                            `;
                        }
                    }) 
                })
        })
}

function deleteCode (codeName, element) {
    axios
        .post("/kr/?type=code&code=deleteCode&codeName=" + codeName)
        .then((resolve) => {
            if (resolve.data.type === "success") {
                element.parentElement.remove();
            }
        })
}