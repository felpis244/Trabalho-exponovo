document.addEventListener('DOMContentLoaded', function() {
    const amiiboListElement = document.getElementById('amiibo-list');

    fetch('https://amiiboapi.com/api/amiibo/')
        .then(response => response.json())
        .then(data => {
            const amiibos = data.amiibo;

            amiibos.forEach(amiibo => {
                const amiiboElement = document.createElement('div');
                amiiboElement.classList.add('amiibo');
                
                amiiboElement.innerHTML = `
                    <img src="${amiibo.image}" alt="${amiibo.name}">
                    <h3>${amiibo.name}</h3>
                    <p>Series: ${amiibo.amiiboSeries}</p>
                `;

                amiiboListElement.appendChild(amiiboElement);
            });
        })
        .catch(error => console.error('Error fetching the amiibo data:', error));
});
