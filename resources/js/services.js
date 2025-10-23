// 🔍 Filter fitur pencarian
var searchBar = document.getElementById('serviceSearch')
if (searchBar) {
  searchBar.addEventListener('keyup', filterServices)
}

function filterServices() {
  const filter = searchBar.value.toLowerCase()
  const cards = document.querySelectorAll('.service-cards')

  cards.forEach((card) => {
    const title = card.querySelector('h2').textContent.toLowerCase()
    const desc = card.querySelector('p').textContent.toLowerCase()
    card.style.display = title.includes(filter) || desc.includes(filter) ? '' : 'none'
  })
}

// ❤️ Add to Wishlist
document.querySelectorAll('.add-to-wishlist').forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.service-cards')
    const title = card.querySelector('h2').textContent.trim()
    const desc = card.querySelector('p').textContent.trim()
    const id = card.dataset.id

    let wishlist = JSON.parse(localStorage.getItem('wishlist')) || []
    const exists = wishlist.some((item) => item.id === id)
    if (!exists) {
      wishlist.push({ id, title, desc })
      localStorage.setItem('wishlist', JSON.stringify(wishlist))
      showNotification(`${title} added to wishlist!`)
    } else {
      showNotification(`${title} already in wishlist.`)
    }
  })
})

function showNotification(message) {
  const notif = document.createElement('div')
  notif.textContent = message
  notif.className = 'wishlist-notif'
  document.body.appendChild(notif)
  setTimeout(() => notif.remove(), 2000)
}
