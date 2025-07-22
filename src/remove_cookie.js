
const savedCookie = localStorage.getItem('display');

const cookie_popup = document.getElementsByClassName('cookie-wrapper')[0]

if (!savedCookie) {
    // First time visit: popup is shown
    cookie_popup.style.display = 'block';
} else if (savedCookie === 'none') {
    cookie_popup.style.display = 'none';
} else {
    // Fallback: show popup
    cookie_popup.style.display = 'block'
}

function removeCookie() {
    cookie_popup.style.display = 'none';
    localStorage.setItem('display', 'none');

}
