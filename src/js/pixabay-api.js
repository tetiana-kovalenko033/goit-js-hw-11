
import axios from "axios";
const API_KEY = "49643910-5d5e059a0d787f0a1574b38c1";

export function getImagesByQuery(query) {
    
    const params = new URLSearchParams({
        key: API_KEY,        
        q: query,
        orientation: "horizontal",
        safesearch: true,
        image_type: "photo"
            
    });         
    return axios(`https://pixabay.com/api/?${params}`)
        .then(({data}) => data)
};

