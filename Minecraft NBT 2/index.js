/*_________                                      
\______   \_____    _____   ___________  ___.__.
 |       _/\__  \  /     \ /  ___/\__  \<   |  |
 |    |   \ / __ \|  Y Y  \\___ \  / __ \\___  |
 |____|_  /(____  /__|_|  /____  >(____  / ____|
*/

/*let yesList = ["y", "yes", "ja", "j"];
let noList = ["n", "no", "nein"]
function switchDarkTheme() {
  alert("switching to dark theme");
}

function setCookies(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";"
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("theme");
    if (user.toLowerCase() in yesList) {
      switchDarkTheme();
    } else {
      user = prompt("Would you like to switch to dark theme? (y/n)", "");
      if (user != "" && user != null) {
        if (user.toLowerCase() == "no") {
          setCookie("theme", false);
        }
      }
    }
  }

checkCookie();
*/

function cookieAccepter() {
  console.log("opening cookie dialog")
  let all = true;
  if (all == true) {
    document.cookie = "theme=true";
    console.log(document.cookie);
  }
}

function showCookieDialog() {
  document.getElementById("cookieAccepter").style.display = "contents";
}