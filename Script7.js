function convertTextToSpeech() {
    const text = document.getElementById('text-input').value;
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

document.getElementById('Home').addEventListener('click', function() {
    window.location.href = 'index.html';
});