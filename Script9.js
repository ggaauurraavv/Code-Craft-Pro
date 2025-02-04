function formatText(command) {
    document.execCommand(command, false, null);
}

function downloadDocument() {
    const editorContent = document.getElementById('editor').innerHTML;
    const blob = new Blob(['<html><body>' + editorContent + '</body></html>'], { type: 'application/msword' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'document.doc';
    link.click();
}


document.getElementById('Home').addEventListener('click', function() {
    window.location.href = 'index.html';
});
