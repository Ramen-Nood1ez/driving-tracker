function updatehours() {
    setCookie("test", "this is a test!", 365)
    console.log("Test")
    if (getCookie("dayhours") == "") {
        setCookie("dayhours", 0, 365)
    }

    if (getCookie("nighthours") == "") {
        setCookie("nighthours", 0, 365)
    }

    const dayhours = getCookie("dayhours")
    const nighthours = getCookie("nighthours")

    $("#totalhours").text(parseInt(dayhours) + parseInt(nighthours))
}

    

function deleteCookie(cname) {
    document.cookie = `${cname}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname += "="
    let decodeCookie = decodeURIComponent(document.cookie)
    let ca = decodeCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i]
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}