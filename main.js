window.onload = function() {
    const lang = document.documentElement.lang;
    const languageSelect = document.getElementById('language');
    const question = document.getElementById('question');

    if (lang === 'es') {
        languageSelect.innerHTML = `
            <option value="1">Inglés</option>
            <option value="2" selected>Español</option>
        `;
        question.textContent = 'Escribe tu nombre';
    } else if (lang === 'en') {
        languageSelect.innerHTML = `
            <option value="1" selected>English</option>
            <option value="2">Spanish</option>
        `;
        question.textContent = 'Write your name';
    }
}