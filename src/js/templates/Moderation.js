main.templates["Moderation"] = () => {
    let html = ``;

    return new Promise((resolve, reject) => {
        html += `
        <div class="container">
            <div class="card mt-5">
                <div class="card-body">
                    <h1 class="card-title">Moderation</h1>
                    <p class="card-text">
                        Dies ist die Moderationsseite des Kopfrechenprojektes. Hier koennen Aufgaben erstellt und versteckt werden, Tricks hinzugefuegt und Seasons verwaltet.
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
                    </p>
                </div>
            </div>

            <div class="card mt-5">
                <div class="card-body">
                    <h1 class="card-title">Aufgaben-Verwaltung</h1>
                    <p class="card-text">
                        Management der auf der Seite verfuegbaren Aufgaben.

                        <table class="exercise-table moderation-table" cellspacing="0">
                            <tr><th>exerciseId</th><th>exerciseCode</th><th>exerciseMultiplier</th><th>exerciseText</th><th>exerciseTip</th><th>trickId</th><th>exerciseAnswer</th><th>Optionen</th></tr>
                        </table>
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