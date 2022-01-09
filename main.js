var tracker = document.getElementById('tracker')

function htmlTemplate(title, watched) {
    return `<div class="row mt-2">
                <div class="card ${watched ? 'bg-success' : 'bg-danger'}">
                    <div class="card-body">
                        <div class="row">
                            <div class="col">
                                <h3 class="card-title text-center">${title}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
}

fetch(`/.netlify/functions/lookup`)
    .then((response) => response.json())
    .then((responseJSON) => {
        results = responseJSON.results;

        for (i = 0; i < results.length; i++) {
            tracker.innerHTML += htmlTemplate(results[i].properties.name.title[0].plain_text, results[i].properties.watched.checkbox)
        }
    })