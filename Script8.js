const fileInput = document.getElementById('fileInput');
const viewer = document.getElementById('viewer');
const fullscreenBtn = document.getElementById('fullscreenBtn');

fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const fileURL = URL.createObjectURL(file);

        if (file.type === 'application/pdf') {
            viewer.src = fileURL;
            fullscreenBtn.style.display = 'inline-block';
        } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
                   file.type === 'application/msword') {
            alert('Word documents are not natively supported in most browsers.');
            fullscreenBtn.style.display = 'none';
        } else {
            alert('Unsupported file format. Please upload a PDF or Word document.');
            fullscreenBtn.style.display = 'none';
        }
    }
});

fullscreenBtn.addEventListener('click', function() {
    if (viewer.requestFullscreen) {
        viewer.requestFullscreen();
    } else if (viewer.mozRequestFullScreen) { // Firefox
        viewer.mozRequestFullScreen();
    } else if (viewer.webkitRequestFullscreen) { // Chrome, Safari and Opera
        viewer.webkitRequestFullscreen();
    } else if (viewer.msRequestFullscreen) { // IE/Edge
        viewer.msRequestFullscreen();
    }
});



document.getElementById('Home').addEventListener('click', function() {
    window.location.href = 'index.html';
});