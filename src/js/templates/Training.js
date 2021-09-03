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
                        Als Produkt des Hochbegabtenzuges des Heinrich-Suso-Gymnasiums Konstanz ist diese WebApp und alles Beiliegende - sofern nicht anders deklariert - nicht ohne schriftliche Erlaubnis durch eben jenen zu verwenden. bei Fragen kontakieren Sie uns bitte.
                    </p>
                </div>

                ${main.utility.containerFooter()}
            </div>
        </div>
        `});
    })
}