document.getElementById('nav-btn').addEventListener('click', (e) => {
    // console.log(e.s)
    // e.target.style.color = 'red';
    const navList = document.getElementById('hided-items');

    if(navList.offsetHeight > 0) {
        navList.style.height = 0;
    } else {
        navList.style.height = "10rem";
    }
});