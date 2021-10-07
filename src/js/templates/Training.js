main.templates["Training"] = () => {
    let html = ``;

    return new Promise((resolve, reject) => {
        resolve({html: `
        <div class="container">
            <div class="card mt-5">
                <div class="card-body">
                    <h1 class="card-title">Training</h1>

                    <p class="card-text">
                        Du kannst diesen Modus dafuer verwenden, deine Kopfrechenkuenste zu probieren und trainieren.
                    </p>


                    <p class="card-text">
                       Im Trainingsmodus hast du die Möglichkeit werden dir keine Punkte auf deine Elo-verrechnet. Auch kannst du dir Tips, Lösungen und die Trickbeschreibung zu den Aufgaben anzeigen lassen. <br>
                       Ein weitere Besonderheit des Trainings-Modus ist, dass du dir die Tricks aussuchen kannst, zu denen du trainieren willst.
                    </p>


                    <p class="card-text">
                        <div class="competition-start">
                            <p>Starten...</p>

                            <a onclick="joinTraining();" data-link class="roundBtn">
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


function joinTraining () {
    exerciseSettings = {
        type: "training",
        amount: user.getSettingDefault("defaultTrainingExerciseAmount", 15)
    }

    
    window.location.hash = "exercise";
}