main.templates["Moderation"] = () => {
    let html = ``;

    return new Promise((resolve, reject) => {
        html += `
        <div class="container">
            <div class="card mt-5">
                <div class="card-body">
                    <h1 class="card-title">Moderation</h1>
                    <p class="card-text">
                        Dies ist die Moderationsseite des Kopfrechenprojektes. Hier können Aufgaben erstellt und versteckt werden, Tricks hinzugefuegt und Seasons verwaltet.
                    </p>
                    <p class="card-text">
                        Link zu Plesk:
                        <a href="https://plesk-belwue-03.dmz-skn.de:8443/login_up.php?success_redirect_url=%2F">https://plesk-belwue-03.dmz-skn.de:8443/login_up.php?success_redirect_url=%2F</a>
                    </p>
                </div>
            </div>

            <div class="card mt-5">
                <div class="card-body">
                    <h1 class="card-title">Trick-Verwaltung</h1>
                    <p class="card-text">
                        Management der auf der Seite verfuegbaren Tricks.

                        <table class="trick-table moderation-table" cellspacing="0">
                            <tr><th>trickId</th><th>trickTitle</th><th>trickText</th><th>trickMore</th><th>Optionen</th></tr>
                        </table>

                        <div class="moderation-table-settings">
                            <div class="moderation-table-settings-button" onclick="importTrickJSON();">JSON importieren</div>
                        </div>
                    </p>
                </div>
            </div>

            <div class="card mt-5 mb-5">
                <div class="card-body">
                    <h1 class="card-title">Aufgaben-Verwaltung</h1>
                    <p class="card-text">
                        Management der auf der Seite verfuegbaren Aufgaben.

                        <table class="exercise-table moderation-table" cellspacing="0">
                            <tr><th>exerciseId</th><th>exerciseCode</th><th>exerciseMultiplier</th><th>exerciseText</th><th>exerciseTip</th><th>trickId</th><th>exerciseAnswer</th><th>Optionen</th></tr>
                        </table>

                        <div class="moderation-table-settings">
                            <div class="moderation-table-settings-button" onclick="importExerciseJSON();">JSON importieren</div>
                        </div>
                    </p>
                </div>
            </div>
        </div>`;
        resolve({html: html, callback: () => {
            setTrickTable();
            setExerciseTable();
        }});
    })
}



function setTrickTable () {
    axios
        .post("/kr/?type=moderation&moderate=getTricks")
        .then((resolve) => {
            if (resolve.data.type === "success") {
                resolve.data.data.forEach(element => {
                    document.querySelector(".trick-table").innerHTML += `
                    <tr class="trick-table-id-${element.trickId} ${element.trickActive ? 'tableDark' : ''}" onclick="viewTrick(${element.trickId})">
                        <td>${element.trickId}</td>
                        <td>${element.trickTitle.slice(0, 40)}</td>
                        <td>${element.trickText.slice(0, 40)}</td>
                        <td>${element.trickMore.slice(0, 40)}</td>
                        <td class="moderation-table-options">
                            <!--<i class="bi bi-clipboard-check" onclick="duplicateTrick(${element.trickId})"></i>-->
                            <i class="bi bi-${element.trickActive ? 'trash' : 'tv'}" onclick="toggleTrickActive(${element.trickId})"></i>
                        </td>
                    </tr>
                    `;
                });
            }
        })
}

function setExerciseTable () {
    /*
    axios
        .post("/kr/?type=moderation&moderate=getExercises")
        .then((resolve) => {
            if (resolve.data.type === "success") {
                resolve.data.data.forEach(element => {
                    document.querySelector(".exercise-table").innerHTML += `
                    <tr class="exercise-table-id-${element.exerciseId} ${element.exerciseActive ? 'tableDark' : ''}" onclick="viewExercise(${element.exerciseId})">
                        <td>${element.exerciseId}</td>
                        <td>${element.exerciseCode}</td>
                        <td>${element.exerciseMultiplier}</td>
                        <td>${element.exerciseText.slice(0, 40)}</td>
                        <td>${element.exerciseTip.slice(0, 40)}</td>
                        <td>${element.trickId}</td>
                        <td>${element.exerciseAnswer.slice(0, 40)}</td>
                        <td class="moderation-table-options">
                            <!--<i class="bi bi-clipboard-check" onclick="duplicateExercise(${element.exerciseId})"></i>-->
                            <i class="bi bi-${element.exerciseActive ? 'trash' : 'tv'}" onclick="toggleExerciseActive(${element.exerciseId})"></i>
                        </td>
                        </tr>
                    `;
                });
            }
        })
        */
}
function toggleExerciseActive (exerciseId) {
    axios
        .post("/kr/?type=moderation&moderate=toggleExerciseActive&exerciseId=" + exerciseId)
        .then((resolve) => {
            if (resolve.data.type === "success") {
                document.querySelector(".exercise-table-id-" + exerciseId).classList.toggle("tableDark")
            }
        })
}


function importExerciseJSON () {
    let promise = main.utility.getTextFile();

    promise.then((text) => {
        text = text.replace("\n", "").replace("\r", "");

        if (main.utility.isJSON(text)) {
            let json = JSON.parse(text);

            console.log(json);

            if (Array.isArray(json) || json["exerciseText"] === undefined) {
                try {
                    let promises = [];
                    json.forEach((exercise, exerciseId) => {
                        let postData = new FormData();
                        postData.append("exerciseData", JSON.stringify(exercise));

                        promises.push(axios.post("/kr/?type=moderation&moderate=createExercise", postData));
                    })
                    Promise.all(promises).then((resolve) => {
                        alert("All Exercises uploaded;")
                    }, (reject) => {alert("Failed to upload all exercises");})
                } catch (e) {
                    alert("Error whilst trying to upload exercises to server: " + e);
                }
            } else {
                try {
                    let postData = new FormData();
                    postData.append("exerciseData", JSON.stringify(json));

                    axios
                        .post("/kr/?type=moderation&moderate=createExercise", postData)
                        .then((resolve) => {
                            alert("Exercise uploaded");
                        }, (reject) => {alert("Failed to upload exercise");})
                } catch (e) {
                    alert("Error whilst trying to upload exercise to server: " + e);
                }
            }
        } else {
            alert("Text not JSON, see debug console for more info...");
            console.debug("Text not JSON. Text: ", [text])
        }
    })
}

function importTrickJSON () {
    let promise = main.utility.getTextFile();

    promise.then((text) => {
        text = text.replace("\n", "").replace("\r", "");

        if (main.utility.isJSON(text)) {
            let json = JSON.parse(text);

            console.log(json);

            if (Array.isArray(json) || json["trickText"] === undefined) {
                try {
                    let promises = [];
                    json.forEach((trick, trickId) => {
                        let postData = new FormData();
                        postData.append("trickData", JSON.stringify(trick));

                        promises.push(axios.post("/kr/?type=moderation&moderate=createTrick", postData));
                    })
                    Promise.all(promises).then((resolve) => {
                        alert("All Tricks uploaded;")
                    }, (reject) => {alert("Failed to upload all tricks");})
                } catch (e) {
                    alert("Error whilst trying to upload tricks to server: " + e);
                }
            } else {
                try {
                    let postData = new FormData();
                    postData.append("trickData", JSON.stringify(json));

                    axios
                        .post("/kr/?type=moderation&moderate=createTrick", postData)
                        .then((resolve) => {
                            alert("Trick uploaded");
                        }, (reject) => {alert("Failed to upload trick");})
                } catch (e) {
                    alert("Error whilst trying to upload trick to server: " + e);
                }
            }
        } else {
            alert("Text not JSON, see debug console for more info...");
            console.debug("Text not JSON. Text: ", [text])
        }
    })
}