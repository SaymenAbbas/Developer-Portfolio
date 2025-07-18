
function removeCookie() {
    const cookie_popup = document.getElementsByClassName("cookie-wrapper")[0]

    if (cookie_popup.style.display === "none") {
        cookie_popup.style.display = "block";
    } else {
        cookie_popup.style.display = "none";
    }
}
