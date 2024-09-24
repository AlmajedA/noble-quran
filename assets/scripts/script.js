const surahNumber = 12;
const apiURL = `http://api.alquran.cloud/v1/surah/${surahNumber}/quran-unicode`

axios.get(apiURL)
    .then(response => {
        setSurahName(response.data.data.name);
        displayAyahs(response.data.data.ayahs);
    })
    .catch(error => {
        console.error('There was an error fetching the API:', error);
    });

function displayAyahs(ayahs_api) {
    const ayahs = document.getElementById('ayahs');
    ayahs_api.forEach((ayah, index) => { 
        ayahs.innerHTML += `
            ${ayah.text} <span>(${index + 1})</span>
        `;
    });
    ayahs.innerHTML =`<div>${ayahs.innerHTML}</div>` 
}

function setSurahName(name) {
    const surahNameElement = document.getElementById('surah-name');
    surahNameElement.textContent = name;
}

