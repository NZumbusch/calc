var trickData = false;
main.templates["Tricks"] = () => {
    let html = ``;

    return new Promise((resolve, reject) => {
        html = `
        <div class="container">
            <div class="card mt-5">
                <div class="card-body">
                    <h1 class="card-title">Tricks</h1>

                    <div class="tricks">
                        <div class="tricks-navigation">
                            <div class="tricks-navigation-upper">
                                <span>
                                    <i class="bi bi-list tricks-navigation-upper-list" onclick="document.querySelector('.tricks-list').classList.add('wide');"></i>
                                    <i class="bi bi-square tricks-navigation-upper-square" onclick="document.querySelector('.tricks-list').classList.remove('wide');"></i>
                                </span>
                                
                                <div class="tricks-navigation-upper-show">Filter</div>
                            </div>
                            <div class="tricks-navigation-lower"></div>
                        </div>
                        <div class="tricks-list ${window.innerWidth > 700 ? 'wide' : ''}">

                        </div>
                    </div>
                </div>

                ${main.utility.containerFooter()}
            </div>
        </div>
        `;

        resolve({html: html, callback: () => {
            axios
                .post("/kr/?type=getTricks")
                .then((resolve) => {
                    if (resolve.data.type === "success") {
                        resolve.data.data.sort((a, b) => {
                            if (a.trickDifficulty === b.trickDifficulty) {
                                return a.trickId - b.trickId;
                            } else {
                                return a.trickDifficulty - b.trickDifficulty;
                            }
                        })

                        trickData = resolve.data.data;
                        for (let trick of resolve.data.data) {
                            let trickDifficult = '';
                            switch (parseInt(trick.trickDifficulty)) {
                                case 0: case 1:
                                    trickDifficult = '<i class="bi bi-check-lg"></i> Einfach';
                                    break;
                                case 2: case 3:
                                    trickDifficult = 'Mittelschwer';
                                    break; 
                                case 4: case 5:
                                    trickDifficult = '<i class="bi bi-exclamation-square"></i>Schwer';
                                    break; 
                                case 6:
                                    trickDifficult = 'Meisterlich';
                                    break; 
                            }

                            document.querySelector(".tricks-list").innerHTML += `
                                <div class="tricks-list-element ${trick.trickLearned ? 'learned' : 'unknown'}">
                                    <p class="tricks-list-element-difficulty ${parseInt(trick.trickDifficulty)<2 ? `easy` : `${parseInt(trick.trickDifficulty)>3 ? `hard` : `medium`}`}">${trickDifficult}</p>
                                    
                                    <h2 class="tricks-list-element-title" onclick="showTrickModal(${trick.trickId})">${trick.trickTitle}</h2>

                                    <p class="tricks-list-element-marklearned"><span onclick="practiceTrick(${trick.trickId})">Trick üben</span>${trick.trickLearned ? '' : ` / <span onclick="markTrickLearned(${trick.trickId}, this);">Wissen testen</span>`}</p>
                                    <p class="tricks-list-element-author">${trick.trickAuthor}</p>
                                </div>
                            `;
                        }
                    }
                })
        }});
    })
}


function showTrickModal (trickId) {
    for (let trick of trickData) {
        if (parseInt(trick.trickId) !== parseInt(trickId)) { continue; }

        if (document.querySelector(".trick-modal") === undefined || document.querySelector(".trick-modal") === null) {
            document.body.innerHTML += `<div class="trick-modal" style="display: none;"></div>`;
        }
        

        document.querySelector(".trick-modal").style.display = '';
        document.querySelector(".trick-modal").innerHTML = `
        <div class="trick-modal-navigation">
            <div class="trick-modal-navigation-heading"><i class="bi bi-list-ol"></i> Trick-Ansicht von "${trick.trickTitle}"</div>

            <div class="trick-modal-navigation-close" onclick="document.querySelector('.trick-modal').style.display = 'none';"><i class="bi bi-house-door-fill"></i> Zurueck zur Homepage</div>
        </div>

        <!--
        Code from https://pdfjs.express/blog/how-embed-pdf-in-html-website
        Example PDF: https://pdfjs-express.s3-us-west-2.amazonaws.com/docs/choosing-a-pdf-viewer.pdf
        -->
        <div class="trick-modal-container">
            <object
                data='/kr/?type=getTrickPDF&trickId=${trick.trickId}'
                type="application/pdf"
                width="${window.innerWidth}"
                height="${window.innerHeight - 30}"
                id="trickModalPDFJSObject"
            >
            
                <iframe
                    src='/kr/?type=getTrickPDF&trickId=${trick.trickId}'
                    width="${window.innerWidth}"
                    height="${window.innerHeight - 30}"
                    id="trickModalPDFJSIframe"
                >
                    <p>This browser does not support PDF!</p>
                </iframe>
            </object>
        </div>
        `;
    }
}


window.addEventListener("resize", (e) => {
    try {
        document.getElementById("trickModalPDFJSObject").width = window.innerWidth;
        document.getElementById("trickModalPDFJSObject").height = window.innerHeight - 30;
        document.getElementById("trickModalPDFJSIframe").width = window.innerWidth;
        document.getElementById("trickModalPDFJSIframe").height = window.innerHeight - 30;
    } catch {}
})


function markTrickLearned (trickId) {
    exerciseSettings = {
        type: "test",
        testTrickId: trickId
    };

    window.location.hash = "exercise";
}


function practiceTrick (trickId) {
    exerciseSettings = {
        type: "training",
        trainingTrickId: trickId,
        amount: user.getSetting("defaultTrainingExerciseAmount")
    };

    window.location.hash = "exercise";
}