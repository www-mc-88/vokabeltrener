let dictionary = JSON.parse(localStorage.getItem('dictionary')) || {};
let randomGermanWord;

function addVocabulary() {
    dictionary[germanText.value] = EnglischText.value;

    germanText.value = '';
    EnglischText.value = '';

    localStorage.setItem('dictionary', JSON.stringify(dictionary));
    render();
}

function render() {
    vocaulyList.innerHTML = '';
    for (let key in dictionary) {
        vocaulyList.innerHTML += `<li>${key} - ${dictionary[key]}</li>`;
    }
}

function nextVocabulary() {
    let obj_keys = Object.keys(dictionary);
    randomGermanWord = obj_keys[Math.floor(Math.random() * obj_keys.length)];
    word.innerHTML = `${dictionary[randomGermanWord]}?`;
}

function hallo() {
    if (germanText.value == randomGermanWord) {
        text.innerHTML = 'Richtig!!';
    } else {
        text.innerHTML = 'Falsch!!';
    }
    germanText.value = '';
    nextVocabulary();
}