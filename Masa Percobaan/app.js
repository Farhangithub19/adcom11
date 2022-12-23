//cek apakah sudah terkoneksi
// alert ("Ok sudah terhubung");

// ambil elemen
const getUsername = document.querySelector("#username");
const getPassword = document.querySelector("#password");
const getForm = document.querySelector("form");

//buat user dan password
const USERS = [
    {
        name: "farhanaja@gmail.com",
        password: "123", 
    },
];
// testing console.log('user')
console.log(USERS);

// lakukan perulangan untuk ambil dari database
USERS.forEach((user) => {
    console.log(user);
});

// tambahkan event ketika user klik login form
getForm.addEventListener("submit", (event) => {
// agar ketika user klik tidak refresh
    event.preventDefault();

 //   alert(getUsername.value);

 // lakukan percabangan dan perulangan
 USERS.forEach((user) => {
    // percabangan
    if(getUsername.value == user.name && getPassword.value == user.password) {
        alert("OK BERHASIL LOGIN");
    } else {
        alert("Invalid Credentials"); 
    }
 });
});