


function openFunction(){
    document.getElementById("test").style.opacity="1"
    document.getElementById("test-2").style.backgroundColor="#000"
    document.getElementById("btnOpen").style.display = "none"
    document.getElementById("btnClose").style.display = "block"
    document.getElementById("nav-bar").style.display ="block"
    document.getElementById("mainMsg").style.display ="none"

}


function closeFunction(){

    document.getElementById("nav-bar").style.display ="none"
    document.getElementById("test").style.opacity="1"
    document.getElementById("test-2").style.backgroundColor="transparent"
    document.getElementById("btnOpen").style.display = "block"
    document.getElementById("btnClose").style.display = "none"
    document.getElementById("mainMsg").style.display ="block"
   
}