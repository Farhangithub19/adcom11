// alert('ok sudah berhasil terhubung')

// 1. set password
const password = 'password_anda'

// 2. ambil element pada html
const getUsername =document.querySelector('#username')
const getPassword =document.querySelector('#password')
const getForm = document.querySelector('form')

// 3. lakukan
getForm.addEventListener('submit',(e)=>{
    // agar saat user klik login halaman website tidak ter-refresh
    e.preventDefault()
    
    alert(getUsername.value)
    alert(getPassword.value)



})

// 4. lakukan percabangan


// 5. cek value apakah dua nilai yang diinputkan user sama dengan nilai constanta password


