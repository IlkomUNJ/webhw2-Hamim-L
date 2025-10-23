// document.addEventListener('DOMContentLoaded', () => {
//   const loginForm = document.getElementById('loginForm')
//   const loginError = document.getElementById('loginError')

//   loginForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const email = document.getElementById('email').value.trim()
//     const password = document.getElementById('password').value.trim()

//     // Dummy credentials (kamu bisa ubah sesuai keinginan)
//     const adminEmail = 'admin@redo.com'
//     const adminPassword = '123'

//     if (email === adminEmail && password === adminPassword) {
//       // Simpan status login
//       localStorage.setItem('isLoggedIn', 'true')
//       localStorage.setItem('userEmail', email)

//       alert('Login successful! Redirecting...')
//       window.location.href = '/pages/seller/seller_dashboard' // arahkan ke halaman utama
//     } else {
//       loginError.style.display = 'block'
//     }
//   })
// })
