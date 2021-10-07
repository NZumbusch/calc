main.templates["Competition"] = () => {
    let html = ``;

    return new Promise((resolve, reject) => {
        resolve({html: `
        <div class="container">
            <div class="card mt-5">
                <div class="card-body">
                    <h1 class="card-title">Wettkampf</h1>

                    <p class="card-text">
                        Nachdem du im <a href="#training" data-link>Training</a> deine Fähigkeiten im Kopfrechnen auf den besten Stand gebracht hast kannst du hier um Elo kämpfen. Dabei gilt: Je schwerer die Aufgabe, desto mehr Punkte gibt Sie, je höher deine Elo, je länger du brauchst, desto weniger Punkte bekommst du pro Aufgabe.
                    </p>

                    <p class="card-text">
                        Anders als im <a href="#training" data-link>Trainings</a>-Modus kannst du dir hier die Tricks nicht aussuchen. Ein Algorithmus sucht automatisch besonders herausfordernde Aufgaben heraus und mischt diese mit einfacheren und simplereren.
                    </p>


                    <p class="card-text">

                        <div class="competition-start">
                            <p>Starten...</p>

                            <a onclick="joinCompetition()" data-link class="roundBtn">
                                <i class="bi bi-play-circle"></i>
                            </a>
                        </div>
                    </p>
                </div>

                ${main.utility.containerFooter()}
            </div>
        </div>
        `});
    })
}


function joinCompetition () {
    exerciseSettings = {
        type: "competition",
        amount: user.getSettingDefault("defaultCompetitionExerciseAmount", 10)
    }


    window.location.hash = "exercise";
}