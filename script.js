function goToHeart() {
    window.location.href = "into.html";
}

function openLetter() {
    window.location.href = "letter.html";
}
const titleText = "Dear Love...❤️";
const letterText =
"Love youuuuu....."
let tIndex = 0;
let lIndex = 0;

function typeLetter() {
    if (!document.getElementById("title")) return;

    if (tIndex < titleText.length) {
        document.getElementById("title").textContent += titleText[tIndex];
        tIndex++;
        setTimeout(typeLetter, 100);
    } else if (lIndex < letterText.length) {
        document.getElementById("letter").textContent += letterText[lIndex];
        lIndex++;
        setTimeout(typeLetter, 40);
    }
}

typeLetter();



