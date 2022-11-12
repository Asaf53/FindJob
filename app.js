function openMenu() {
    document.getElementById('nav').style.left = "0";
    document.getElementById('closeBtn').style.display = "block";
    document.getElementById('openBtn').style.display = "none";
}
function closeMenu() {
    document.getElementById('nav').style.left = "-100%";
    document.getElementById('closeBtn').style.display = "none";
    document.getElementById('openBtn').style.display = "block";
}