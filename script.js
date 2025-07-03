function showCitation(id) {
    document.getElementById(id).style.display = 'block';
    document.getElementById('popup-overlay').style.display = 'block';

    document.removeEventListener('click', outsideClickListener);

    setTimeout(() => {
        document.addEventListener('click', outsideClickListener);
    }, 0);
}

function hideCitation(id) {
    document.getElementById(id).style.display = 'none';
    document.getElementById('popup-overlay').style.display = 'none';
    document.removeEventListener('click', outsideClickListener);
}

function hideAllCitations() {
    document.querySelectorAll('.citation-popup').forEach(popup => popup.style.display = 'none');
    document.getElementById('popup-overlay').style.display = 'none';
    document.removeEventListener('click', outsideClickListener);
}

function outsideClickListener(event) {
    const popup = document.querySelector('.citation-popup[style*="block"]');
    if (popup && !popup.contains(event.target) && event.target.className !== 'cite-button') {
        hideAllCitations();
    }
}

function copyCitation(id) {
    const text = document.querySelector(`#${id} pre`).innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Citation copied to clipboard!");
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('popup-overlay').addEventListener('click', hideAllCitations);
});
function toggleMenu() {
    const nav = document.querySelector("nav");
    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }
}


function toggleMenu() {
    const nav = document.querySelector("nav");
    const overlay = document.getElementById("overlay");

    if (nav.style.display === "block") {
        nav.style.display = "none";
        overlay.style.display = "none";
    } else {
        nav.style.display = "block";
        overlay.style.display = "block";
    }
}

function closeMenu() {
    const nav = document.querySelector("nav");
    const overlay = document.getElementById("overlay");

    nav.style.display = "none";
    overlay.style.display = "none";
}

