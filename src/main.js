import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import axios from "axios";

const form = document.querySelector(".form");
const list = document.querySelector(".gallery-list");
const container = document.querySelector(".gallery");
const textInput = document.querySelector('input[name = "search-text"]');
const loader = document.querySelector("#loader");

const API_KYE = "49643910-5d5e059a0d787f0a1574b38c1";

// const lightbox = new SimpleLightbox('.gallery a', {
//       captionsData: 'alt',
//         captionDelay: 250,
  
//     });

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    loader.classList.remove("hidden");
    const query = textInput.value.trim();

    if (query === "") {
        alert('Будь ласка, введіть пошуковий запит!');
        return;
    }
    getImagesByQuery(query)
        .then(response => {
                if (response.data.hits.length) {
                    console.log(response.data.hits);
                    return response.data.hits;                           

                } else {
                    alert('Sorry, there are no images matching your search query. Please try again!')
            }
            list.insertAdjacentHTML("beforeend", createGallery(response.data.hits));
                
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                loader.classList.add("hidden");
            })
  
}
          
// list.innerHTML = '';

    function getImagesByQuery(query) {
        const params = new URLSearchParams({
            key: API_KYE,
            q: query,
            orientation: "horizontal",
            safesearch: true
            
        });
         return axios(`https://pixabay.com/api/?${params}`)
        
    };


    
     function createGallery(images) {        
        return  images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
            `<div class="gallery">
         <li class="gallery-item">       
        <a class="gallery-item-link" href="${webformatURL}">
        <img class="item-image"
        src="${largeImageURL}"
        alt="${tags}"
        />        
        </a>            
        <h3>Likes:"${likes}"</h3>
        <h4>Views:"${views}"</h4>
        <h5>Comments:"${comments}"</h5>
        <p>Downloads:"${downloads}"</p>                
        </li>
        </div> `
        }).join("")    
    
        
       };


// lightbox.refresh();




    
    // clearGallery();
    // showLoader();
    // hideLoader();

