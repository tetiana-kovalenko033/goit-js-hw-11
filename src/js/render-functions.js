// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

// const form = document.querySelector(".form");
// const list = document.querySelector(".gallery-list");
// const container = document.querySelector(".gallery");
// const textInput = document.querySelector('input[name = "search-text"]');

// import { getImagesByQuery } from "./pixabay-api";

// export function createGallery(images) {
//     images.map((image) =>
//         `<div class="gallery">
//          <li class="gallery-item">       
//         <a class="gallery-item-link" href=`${image.webformatURL }`>
//         <img class="item-image"
//         src=`${ image.largeImageURL }`
//         alt=`${ image.tags }`
//         />        
//         </a>            
//         <h3>`${image.likes}`</h3>
//         <h4>`${image.views}`</h4>
//         <h5>`${image.comments}`</h5>
//         <p>`${ image.downloads }`</p>
//         </div>         
//         </li> `
//     ).join("");    
//     lightbox.refresh();
// };


// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//     captionDelay: 250,
  
// });
// clearGallery()
// showLoader()
// hideLoader()