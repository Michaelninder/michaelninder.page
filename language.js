function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function btnPress(obj) {
    // currently useless line (may be used in the future)
    let btn = document.getElementById(obj);

    console.log("obj '" + obj + "' was pressed.");

    if (document.cookie.length == 0) {
        setCookie("language", obj, 365);
        console.log(document.cookie);
    }

    window.open("./main/" + obj + "/")
}

.rotate-center {
	animation: rotate-center 1.2s ease-out 0.4s infinite forwards;
}