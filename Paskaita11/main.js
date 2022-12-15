

const form = document.getElementById('form');
const editForm = document.getElementById('edit-form')
const brandInput = document.getElementById('advertBrand');
const modelInput = document.getElementById('advertModel');
const priceInput = document.getElementById('advertPrice');
const advertsOutput = document.getElementById('adverts');

const editBrand = document.getElementById('edit-brand-input');
const editModel = document.getElementById('edit-model-input');
const editPrice = document.getElementById('edit-price-input');

let editAdvertId;

editForm.addEventListener('submit', () => {
    const updatedAdvert = {
        brand: editBrand.value,
        model: editModel.value,
        price: editPrice.value
    };

    fetch(BASE_URL + '/adverts/' + editAdvertId, {
        
    })
})

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
                    advertCard.classList.add('advert-card');


                    const advertBrand = document.createElement('h3');
                    advertBrand.textContent = advert.brand;

                    const advertModel = document.createElement('h3');
                    advertModel.textContent = advert.model;

                    const advertPrice = document.createElement('h5');
                    advertPrice.textContent = advert.price;

                    const deleteButton = document.createElement('button');
                    deleteButton.textContent = 'DELETE';
                    deleteButton.classList.add('delete-button');

                    const editButton = document.createElement('button');
                    editButton.textContent = 'EDIT';
                    editButton.classList.add('edit-button');

                    editForm.addEventListener('submit', () => {

                    })

                    editButton.addEventListener('click', () => {
                        editForm.classList.toggle('hidden');
                        editButton.textContent = 'X';

                        editBrand.value = advert.brand;
                        editModel.value = advert.model;
                        editPrice.value = advert.price;


                    })

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
                    advertCard.appendChild(editButton);

                    advertsOutput.appendChild(advertCard);
                });
                });



   