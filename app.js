console.log("Let's get this party started!");


const api_key = 'nFeZnWEDeYeHWWQqxLBSKCo79MDxE5C8';
const form = document.getElementById("giphysearch-form");
const searchInput = document.getElementById("search");
const gifGallery = document.getElementById("gif-gallery");
const removeBtn = document.getElementById("remove-btn");
const searchTerm = searchInput.value;

function displayGif(response) {
    let results = response.data.length;
    if (results) {
        let randomGif = Math.floor(Math.random() * results);
        let gifDiv = document.createElement('div');
        gifDiv.classList.add('col-md-4', 'mb-4');
        gifDiv.innerHTML = `
            <div class="gif-card">
                <img src="${response.data[randomGif].images.original.url}" class="w-100" alt="${randomGif.title}">
            </div>
        `;
        gifGallery.append(gifDiv);
    }
}
    

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    let searchTerm = searchInput.value;
    searchInput.value = "";

    const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            api_key: api_key,
            q: searchTerm,
        }
    });
    displayGif(response.data);
});

removeBtn.addEventListener('click', (e) => {
    e.preventDefault;
    gifGallery.innerHTML = '';
});



