// wwwroot/js/download.js
function downloadCardAsImage(elementId) {
    const cardElement = document.getElementById(elementId);
    html2canvas(cardElement).then(canvas => {
        const link = document.createElement('a');
        link.download = 'profile-card.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}