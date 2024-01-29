document.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout-button');
    if (logoutButton) {
        logoutButton.addEventListener('click', handleLogout);
    }
});

function handleLogout(event) {
    event.preventDefault();
    console.log('Выход из системы');
    localStorage.removeItem('userLoggedIn');
    window.location.href = 'login.html';
}

