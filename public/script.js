// Constants
const apiURL = '/api/whoami';

// Cached Elements
const link = document.getElementById('header-link');
const code = document.querySelector('code');

// Event Listeners
link.addEventListener('click', async () => {
    try {
        const res = await fetch(apiURL);
        const data = await res.json();
        code.innerHTML = JSON.stringify(data, null, "<br>");
    } catch (error) {
        console.error(error);
    }
})
