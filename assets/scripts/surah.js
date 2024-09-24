const urlParams = new URLSearchParams(window.location.search);
const surahNumber = urlParams.get('surah') || 1;
const apiURL = `https://api.alquran.cloud/v1/surah/${surahNumber}/quran-simple-enhanced`

axios.get(apiURL)
    .then(response => {
        let [basmala, ayahs] = processAyahs(response.data.data.ayahs);
        setSurahName(response.data.data.name);
        if (surahNumber != 1)
            displayBasmala(basmala);
        displayAyahs(ayahs);
    })
    .catch(error => {
        console.error('There was an error fetching the API:', error);
    });


function processAyahs(ayahs_api){
    first_ayah = ayahs_api.shift().text;
    let basmala = '';
    if (surahNumber != 1) {
        basmala = first_ayah.slice(0, 39);
        first_ayah = first_ayah.slice(39).trim();
    }
    else {
        basmala = first_ayah
    }
    let ayahs = `${first_ayah} <span>(1)</span>`

    ayahs_api.forEach((ayah, index) => { 
        ayahs += ` ${ayah.text} <span>(${index + 2})</span>`;
    });

    return [basmala, ayahs];

}


function setSurahName(name) {
    const surahNameElement = document.getElementById('surah-name');
    surahNameElement.textContent = name;
}

function displayBasmala(basmala) {
    const basmala_element = document.getElementById('basmala');
    basmala_element.innerHTML = `<div class="basmala">${basmala}</div>`
}

function displayAyahs(ayahs) {
    const ayahs_element = document.getElementById('ayahs');

    ayahs_element.innerHTML =`<div>${ayahs}</div>` 
}

