main.templates["Impressum"] = () => {
    let html = ``;

    return new Promise((resolve, reject) => {
        resolve({html: `
        <div class="container">
            <div class="card mt-5">
                <div class="card-body">
                    <h1 class="card-title">Impressum</h1>

                    <p class="card-text">
                        Diese WebApp wird durch den Hochbegabtenzug des Heinrich-Suso-Gymnasiums Konstanz angeboten.<br>
                        Um uns zu kontaktieren oder mehr über uns zu erfahren können Sie unsere <a href="https://hbz.suso.schulen.konstanz.de">Homepage</a> besuchen.
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