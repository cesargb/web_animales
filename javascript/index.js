function toggleMenu() {
  const submenuTypeAnimals = document.getElementById('submenu_type_animals')

  submenuTypeAnimals.classList.toggle('hidden')
}

function closeMenu() {
  document.getElementById('submenu_type_animals').classList.add('hidden')
}