// ---------------------------------Class-----------------------------------------//
class Product {
    constructor(name, price, img,type){
        this.name = name
        this.price = price
        this.img = img
        this.type = type
    }
    getName(){return this.name}
    setName(name_){return this.name = name_}
    getPrice(){return this.price}
    setPrice(price_){return this.price = price_}
    getImg(){return this.img}
    setImg(img_){return this.img = img_}
}
class Accout{
    constructor(name_user, id, password, admin){
        this.name = name_user
        this.id = id
        this.password = password
        this.buy = []
        this.cart = []
        this.admin = admin
    }
    getBuy(){return this.buy}
    setBuy(buy_){return this.buy = buy_}
    getCart(){return this.cart}
    setCart(cart_){return this.cart = cart_}
    getId(){return this.id}
    getPassword(){return this.password}
}
// ----------------------------------Function------------------------------------//
// tao san pham
function createProduct(createName, createPirce, createImg, type) {
    var a = new Product(createName, createPirce, createImg, type)
    dataProduct.push(a)
}
// hàm chạy card HTML 
function stringHtml(i) {
    let string = `<div class="col">
        <div class="card shadow-sm">
        <img src="${dataProduct[i].getImg()}" style="height: 150px;" alt="">
        <div class="card-body">
            <p class="card-text">${dataProduct[i].getName()}</p>
            <div class="d-flex justify-content-between align-items-center">
            <div style="display: flex; justify-content: space-between; width: 100%;" class="btn-group">
                <div><small>${dataProduct[i].getPrice()/1000000}.000.000 .đ</small></div>
                <div style="text-align: right">
                <button onclick="buy(${i})" type="button" class="btn btn-sm btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg></button>
                <button onclick="addCart(${i})" type="button" class="btn btn-sm btn-outline-secondary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
                    <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
                </svg></button>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>`
    return string
}
// hàm chạy display sản phẩm
function getProduct() {
    let string = ''

    for (let i = 0; i < dataProduct.length; i++){
        string+= stringHtml(i)
    }
    document.getElementById('product').innerHTML = string
}
// nút mua
function buy(index) {
    user.buy.push(dataProduct[index]) 
}
// nút thêm sản phẩm vào giỏ hàng
function addCart(index) {
    user.cart.push(dataProduct[index])
    document.getElementById("numberCardRed").hidden = false
    document.getElementById("numberCardRed").innerHTML = user.cart.length
    resetRedDotOfListCart()
}
// chạy display liscart
function listCart() {
    totalPrice()
    if (user.cart == 0){
        document.getElementById('listCart').innerHTML = ''
        return
    }
    let string = ''
    function stringHtml(name_, price_, img_,index) {
        let string = `      
        <div class="cardProduct">
        <img src="${img_}" style="width: 100px; height: 100%;" alt="">
        <div style="padding: 20px;">${name_} <br>${price_} </div>
        <div>
            <button style="height: 100% ;" type="button" class="btn btn-outline-danger" onclick="deleteProductListCart(${index})">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"></path>
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"></path>
                </svg>
              </button>
        </div>
        </div>`
        return string
    }
    for ( var i = 0 ; i < user.cart.length; i++){
        string += stringHtml(user.cart[i].name, user.cart[i].price, user.cart[i].img,i)
    }
    document.getElementById('listCart').innerHTML = string

    function totalPrice() {
        let totalPrice = 0
        for (let i = 0 ; i < user.cart.length ; i ++){
            totalPrice += user.cart[i].price/1000000
        }
        if (user.cart.length == 0){
            document.getElementById('totalCart').innerHTML = ''

        }else{
            document.getElementById('totalCart').innerHTML = 'Tổng' + totalPrice + '.000.000 đ'
 
        }
        
    }
    
}
function listBuy() {
    if (user.buy == 0){
        document.getElementById('listBuy').innerHTML = ''
        return
    }
    let string = ''
    function stringHtml(name_, price_, img_,index) {
        let string = `      
        <div class="cardProduct">
        <img src="${img_}" style="width: 100px; height: 100%;" alt="">
        <div style="padding: 20px;">${name_} <br>${price_} </div>
        </div>`
        return string
    }
    for ( var i = 0 ; i < user.buy.length; i++){
        string += stringHtml(user.buy[i].name, user.buy[i].price, user.buy[i].img,i)
    }
    document.getElementById('listBuy').innerHTML = string

    function totalPrice() {
        let totalPrice = 0
        for (let i = 0 ; i < user.buy.length ; i ++){
            totalPrice += user.buy[i].price/1000000
        }
        document.getElementById('totalBuy').innerHTML = 'Tổng' + totalPrice + '.000.000 đ'
        
    }
    totalPrice()
}
// reset Red-Dot display của list cart
function resetRedDotOfListCart() {
    if (user.cart.length == 0){
        document.getElementById("numberCardRed").hidden = true
        return
    }else{
        document.getElementById("numberCardRed").hidden = false
        document.getElementById("numberCardRed").innerHTML = user.cart.length
    }
}
// xóa sản phẩm trong list cart
function deleteProductListCart(i) {
    console.log(user.cart);
    user.cart.splice(i,1)
    console.log(user.cart);
    listCart()
    resetRedDotOfListCart()

}
// thông tin tài khoản
function infoAccout() {
    alert(`Name: ${user.name} , Id: ${user.id}, Password: ${user.password}, admin: ${user.admin} `)

}
// đổi mật khẩu
function changePassword() {
    let password = prompt('Nhập mật khẩu mới')
    user.password = password
    alert('Đổi mật khẩu thành công')
}
// đăng xuất
function signOut() {
    let signOut = confirm('Hẹn gặp lại')
    if (signOut){
        localStorage.setItem("indexAccout", JSON.stringify(null))
        loadPage()

    }
    pushJson()
}
// set product
function setProduct(){
    function randomPrice() {
        let price = (Math.floor(Math.random()*20)+10)*1000000
        return price
    }
    for (let i = 0 ; i < 10; i ++){
        createProduct(`Pc Product 1.${i}`,randomPrice(), `img/pc${i}.jpg`,'pc')
    }
    for (let i = 0 ; i < 10; i ++){
        createProduct(`Laptop Product 1.${i}`,randomPrice(), `img/laptop${i}.jpg`,'laptop')
    }

}
// chuyển cart vào mục buy
function buyInCart() {
    function inputBuy() {
        for (let i = 0 ; i < user.cart.length ; i ++){
            user.buy.push(user.cart[i])
        }
    }
    inputBuy()
    user.cart = []
    resetRedDotOfListCart()
    console.log(user.buy);
}
function setNameAccout() {
    document.getElementById('nameAccout').innerText = user.name
}
// lọc sản phẩm pc
function productChoice(choice) {
    console.log(choice);
    let string = ''
    for (let i = 0; i < dataProduct.length; i++) {
        if (dataProduct[i].type == choice ){
            string += stringHtml(i)
        }
        
    }
    document.getElementById('product').innerHTML = string
}
function seachProduct(text) {
    let string = ''
    for (let i = 0; i < dataProduct.length; i++) {
        if (dataProduct[i].name.indexOf(text)!=-1){
            string += stringHtml(i)
        }
        
    }
    document.getElementById('product').innerHTML = string
}


//----------------------------Khai bao---------------------------------------------//
var dataProduct = [];
var dataAccout = [];
var user;
var indexAccout;
//-----------------------------Main----------------------------------------------//
function loadPage() {

    pullJson()
    indexAccout = JSON.parse(localStorage.getItem("indexAccout"))
    console.log("loadPage ~ indexAccout", indexAccout)
    if ((indexAccout == undefined) || (indexAccout == null)){
        window.location="signIn.html"
    }
    // set Product 

    user = dataAccout[indexAccout]
    dataProduct = []
    setProduct()
    getProduct() 
    setNameAccout()
}
// --------------------------------SignIn---------------------------------------------
// Class---------------

// Function -----------
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
    let check = checkAccout( accout , password )
    console.log(check);
    if ((accout.length > 0) && (password.length > 0)){
        if (check != -1 ){
            localStorage.setItem("indexAccout", JSON.stringify(check))
            window.location="index.html";
            
        }else{
            wrongPasword()
        }
        
    }else{
        emptyInput()
    }
    // window.location="https://viblo.asia.vn";
}
function createAcout() {
    let nameAccout;
    let passwordAcout;
    let accout = new Accout(nameAccout,passwordAcout)
    dataAccout.push(accout)
}
function pushJson() {
    localStorage.setItem("dataAccout", JSON.stringify(dataAccout))
    localStorage.setItem("dataProduct", JSON.stringify(dataProduct))
}
function pullJson() {
    dataAccout = JSON.parse(localStorage.getItem("dataAccout"))
    dataProduct = JSON.parse(localStorage.getItem("dataProduct"))
}
function firtRun() {
    let nowJson = JSON.parse(localStorage.getItem("dataAccout"))
    if (nowJson == null){
        localStorage.setItem("dataAccout", JSON.stringify([]))
    }else{
        pullJson()
    }
    
}
// check accout, true back index, false back  -1
function checkAccout(id, password) {
    let flag = false
    let index;
    for (let i = 0; i < dataAccout.length; i++){
        if ((dataAccout[i].id == id) && (dataAccout[i].password == password)){
            flag = true
            index = i
            break
        }
    }
    if (flag){
        return index
    }else{
        return -1
    }
    
}
// create admin accout and use accout
function createAdminAndUserAccout() {
    let adminAccout = new Accout('admin','admin','ninh123',true)
    let userAccout = new Accout('user','user','ninh123',false)
    dataAccout.push(adminAccout)
    dataAccout.push(userAccout)
    pushJson()
}
// var ------------------

// Main
function mainSignin() {
    firtRun()
    console.log(dataAccout);
    if ((dataAccout.length == 0)){
        createAdminAndUserAccout()
        pushJson()
    }
    console.log(dataAccout[0].name);

}







