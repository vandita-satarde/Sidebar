
function openSideBar(){
    const sidebarElement = document.getElementById('sidebar');
    sidebarElement.style.visibility = 'visible';
}

function closeSidebar(){
    const sidebarElement = document.getElementById('sidebar');
    sidebarElement.style.visibility = 'hidden';

    const hamburgerElement = document.getElementById('hamburger-menu');
    hamburgerElement.style.visibility = 'visible';
}