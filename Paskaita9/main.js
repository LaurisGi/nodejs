

const form = document.getElementById('form');
const brandInput = document.getElementById('advertBrand');
const modelInput = document.getElementById('advertModel');
const priceInput = document.getElementById('advertPrice');
const myList = document.getElementById('wrapper');


const USER_ID = '6397576e54f7e1f5227448b1'
const BASE_URL = 'http://localhost:3000'

form.addEventListener('submit', e => {
    e.preventDefault();

    // const brand = brandInput.value;
    // const model = modelInput.value;
    // const price = priceInput.value;
    const newEntry = {
        brand: brandInput.value,
        model: modelInput.value,
        price: priceInput.value,
        user_id: USER_ID
    }
    fetch(BASE_URL + '/adverts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newEntry),
    })
    });



        fetch(BASE_URL + '/adverts')
            .then((res) => res.json())
            .then((adverts) => {
                adverts.forEach((advert) => {
                    const advertCard = document.createElement('div');


                    const advertBrand = document.createElement('h3');
                    advertBrand.textContent = advert.brand;

                    const advertModel = document.createElement('h3');
                    advertModel.textContent = advert.model;

                    const advertPrice = document.createElement('h5');
                    advertPrice.textContent = advert.price;

                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'DELETE';
                    deleteButton.classList.add('delete-button');

                    console.log(advert);

                    deleteButton.addEventListener('click', () => {
                        fetch(BASE_URL + '/adverts/' + advert._id, {
                            method: 'DELETE'
                        })
                        .then(() => window.location.reload())
                    });
                    

                    advertCard.appendChild(advertBrand);
                    advertCard.appendChild(advertModel);
                    advertCard.appendChild(advertPrice);
                    advertCard.appendChild(deleteButton);

                    myList.appendChild(advertCard);
                });
                });



   