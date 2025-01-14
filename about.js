
document.getElementById('nav_close').addEventListener('click',() => {
    document.getElementById('side_nav').style.visibility = 'hidden';
});
document.getElementById('nav_button').addEventListener('click',() => {
    document.getElementById('side_nav').style.visibility = 'visible';
    document.getElementById('side_nav').style.display = 'flex';
    console.log("clicked");
});