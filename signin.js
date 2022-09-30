class Accout {
    constructor(name, password){
        this.name = name
        this.password = password
    }
    getName(){return this.name}
    setPassword(password_){return password_}

}
function wrongPasword() {
    document.getElementById("wrongPassword").hidden = false
    document.getElementById("wrongPassword").innerHTML = 'Mật khẩu hoặc tài khoản không đúng'   
}
function emptyInput() {
    document.getElementById("wrongPassword").hidden = false
    document.getElementById("wrongPassword").innerHTML = 'Vui lòng nhập tài khoản và mật khẩu'   
}
function resetAlert() {
    document.getElementById("wrongPassword").hidden = true
}
function signIn() {
    resetAlert()
    let accout = document.getElementById('nameAccout').value
    console.log(accout);
    let password = document.getElementById('passwordAcout').value
    console.log(password);
    if ((accout.length > 0) && (password.length > 0)){

    }else{
        emptyInput()
    }
    // window.location="https://viblo.asia.vn";
}
function createAcout(nameAccout,passwordAcout) {
    let accout = new Accout(nameAccout,passwordAcout)
    dataAccout.push(accout)
}
function saveJson(params) {
    let a = { name : "c08" }
    localStorage.setItem("item", JSON.stringify(a))
    console.log(JSON.parse());
}
var dataAccout = []
