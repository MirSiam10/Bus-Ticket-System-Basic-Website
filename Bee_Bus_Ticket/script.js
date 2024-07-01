document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;

    const searchResults = document.getElementById('searchResults');
    const busList = searchResults.querySelector('.bus-list');
    busList.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const busItem = document.createElement('div');
        busItem.classList.add('bus-item');
        busItem.innerHTML = `
            <h3>Bus ${i + 1}</h3>
            <p>From: ${from}</p>
            <p>To: ${to}</p>
            <p>Date: ${date}</p>
            <p>Passengers: ${passengers}</p>
            <button>Book Now</button>
        `;
        busList.appendChild(busItem);
    }
    
    searchResults.style.display = 'block';
});
