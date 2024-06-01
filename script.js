document.addEventListener('DOMContentLoaded', () => {
    const addMovieForm = document.getElementById('add-movie-form');
    const movieList = document.getElementById('movies');

    // Function to add a movie
    const addMovie = (title, genre, rating) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            <div>
                <h5 class=" text-uppercase">${title}</h5>
                <p>Genre: ${genre}</p>
                <p>Rating: ${rating}</p>
            </div>
            <button class="btn btn-danger btn-sm delete">Delete</button>
        `;
        movieList.appendChild(li);
    };

    // Event listener for form submission
    addMovieForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const genre = document.getElementById('genre').value;
        const rating = document.getElementById('rating').value;

        addMovie(title, genre, rating);

        // Clear form fields
        addMovieForm.reset();
    });

    // Event listener for delete button
    movieList.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete')) {
            e.target.parentElement.remove();
        }
    });
});
