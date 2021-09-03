main.templates["Competition"] = () => {
    let html = ``;

    return new Promise((resolve, reject) => {
        resolve({html: `
        <div class="container">
            <div class="card mt-5">
                <div class="card-body">
                    <h1 class="card-title">Competition</h1>

                    <p class="card-text">
                        Nachdem du im <a href="#training" data-link>Training</a> deine Faehigkeiten im Kopfrechnen auf den besten Stand gebracht hast kannst du hier um Elo kaempfen. Dabei gilt: Je schwerer die Aufgabe, desto mehr Punkte gibt Sie, je hoeher deine Elo, je laenger du brauchst, desto weniger Punkte bekommst du pro Aufgabe.
                    </p>
                </div>

                ${main.utility.containerFooter()}
            </div>
        </div>
        `});
    })
}