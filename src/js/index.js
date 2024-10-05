document.getElementById('quotesAnime').addEventListener('click', function() {
    fetch('https://api.lolhuman.xyz/api/random/quotesnime?apikey=wikenn')
    .then(response => response.json())
    .then(data => {
        const quotesNim = document.getElementById('animeResult');
        if (quotesNim && data.result) {
            // Buat elemen baru untuk menampilkan quote
            const quoNim = document.createElement('li');
            quoNim.innerHTML = `<strong>Quote:</strong> ${data.result.quote} <br>
                                <strong>Character:</strong> ${data.result.character} <br>
                                <strong>Anime:</strong> ${data.result.anime} <br>
                                <strong>Episode:</strong> ${data.result.episode}`;

            quotesNim.appendChild(quoNim);
        } else {
            console.error('Element #animeResult not found or data.result is invalid');
        }
    })
    .catch(error => console.error('Error:', error));
});
