const apiURL = `http://api.alquran.cloud/v1/surah`

axios.get(apiURL)
    .then(response => {
        let surahs = response.data.data;
        console.log(surahs);
        let surahsList = document.getElementById('surahs-list');
        surahs.forEach(surah => {
            let surahElement = document.createElement('div');
            // let surahElement = document.createElement('a');
            surahElement.classList.add('col');
            surahElement.innerHTML = `<a id="surah-${surah.number}" class="btn btn-outline-dark equal-size" href="./surah.html?surah=${surah.number}">${surah.name}</a>`;
            surahsList.appendChild(surahElement);
        })
    })
    .catch(error => {
        console.error('There was an error fetching the API:', error);
    });