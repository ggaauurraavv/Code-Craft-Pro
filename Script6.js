const startBtn = document.getElementById('start-btn');
        const stopBtn = document.getElementById('stop-btn');
        const textBox = document.getElementById('text-box');
        let recognition;

        if ('webkitSpeechRecognition' in window) {
            recognition = new webkitSpeechRecognition();
            recognition.continuous = true;
            recognition.interimResults = true;
            recognition.lang = 'en-US';

            recognition.onstart = function() {
                startBtn.disabled = true;
                stopBtn.disabled = false;
            };

            recognition.onresult = function(event) {
                let interimTranscript = '';
                let finalTranscript = '';

                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        finalTranscript += event.results[i][0].transcript;
                    } else {
                        interimTranscript += event.results[i][0].transcript;
                    }
                }
                textBox.value = finalTranscript + interimTranscript;
            };

            recognition.onerror = function(event) {
                console.error(event.error);
            };

            recognition.onend = function() {
                startBtn.disabled = false;
                stopBtn.disabled = true;
            };
        } else {
            alert('Speech recognition not supported in this browser.');
        }

        startBtn.addEventListener('click', () => {
            recognition.start();
        });

        stopBtn.addEventListener('click', () => {
            recognition.stop();
        });

        document.getElementById('Home').addEventListener('click', function() {
            window.location.href = 'index.html';
        });