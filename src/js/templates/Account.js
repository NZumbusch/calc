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
                </div>

                <div class="account-container-section">
                    <h1 class="account-container-section-title">Wettbewerbe</h1>
                    <p class="account-container-section-text"><i class="bi bi-award"></i>${user.userElo} Elo</p>
                    <p class="account-container-section-text"><i class="bi bi-list-ol"></i>15ter Platz overall!</p>
                </div>

                <div class="account-container-section account-browser-settings">
                    <h1 class="account-container-section-title">Browserspezifische Einstellungen</h1>

                </div>
            </div>
        </div>
        `, callback: () => {
            setupIconColors();
            setupBrowserSettings();
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


const browserSettings = {
    eloRankingShowAmount: {type: "number", default: 15, max: 100, min: 3, heading: "Anzahl an Personen im Elo-Ranking"},
    testText: {type: "text", default: "Hallo", heading: "test text setting"}
}
function setupBrowserSettings () {
    for (let settingName in browserSettings) {
        let setting = browserSettings[settingName];
        let currentValue = user.getSettingDefault(settingName, setting.default);
        document.querySelector(".account-browser-settings").innerHTML += `
            <div class="account-browser-settings-setting">
                <p class="account-browser-settings-setting-heading">${setting.heading}</p>
                ${
                    setting.type === "number" ? 
                    `<input type="number" min="${setting.min}" max="${setting.max}" value="${currentValue}" onkeyup="setBrowserSetting('${settingName}', this);" onclick="setBrowserSetting('${settingName}', this);">` :
                    `
                        ${setting.type === "boolean" ? 
                        `` :
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