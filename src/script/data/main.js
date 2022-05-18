import $ from 'jquery';
const IMG_URL = 'https://image.tmdb.org/t/p/w500/';
const API_KEY = '0960e915a728e16ff143f46542084799';

const movies = () => {
    // fitur search
    const searchMovie = () => {
        $('.movie-list').html('');
        $('.merge').html('');
        $.ajax({
            url: 'https://api.themoviedb.org/3/search/movie?',
            type: 'GET',
            dataType: 'json',
            data: {
                'api_key': API_KEY,
                'query': $('#searchElement').val()
            },
            success: (data) => {
                if (data.results.length === 0) {
                    $('.error').html(
                        ` <div class="alert alert-danger d-flex align-items-center" role="alert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            <span>  Movie Not Found!</span>
                        </div>`
                    )

                } else {
                    data.results.forEach(data => {
                        $('.search-title').html(`<h2 class="text-center mb-3 mt-3">Search Result "${$('#searchElement').val()}"</h2><hr>`);
                        $('.movie-list').append(`
                        <div class="col-md-3">
                                <div class="card mb-3">
                                    <img src="${IMG_URL + data.poster_path}" class="card-img-top" alt="${data.title}">
                                    <div class="card-body style="width: 18rem;">
                                        <h5 class="card-title">${data.title}</h5>
                                        <p class="card-text">${data.release_date}</p>
                                        <button type="button" class="btn btn-primary see-detail" data-toggle="modal" data-target="#exampleModal" data-id="${data.id}">
                                        See Detail
                                        </button>
                                    </div>
                                </div>
                            </div>`)
                    });
                    $('#searchElement').val();
                };
            }
        });
        $('.movie-list').on('click', '.see-detail', () => {
            modal();
        });
    };

    // movieberdasarkan Now Playing
    const movieNowPlaying = () => {
        $('.now-playing-list').html('');
        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/now_playing?',
            type: 'GET',
            dataType: 'json',
            data: {
                'api_key': API_KEY,
                'language': 'en-US'
            },
            success: (data) => {
                data.results.forEach(data => {
                    $('.now-playing-list').append(`
                    <div class="col-md-3">
                            <div class="card mb-3">
                                <img src="${IMG_URL + data.poster_path}" class="card-img-top" alt="${data.title}">
                                <div class="card-body style="width: 18rem;">
                                    <h5 class="card-title">${data.title}</h5>
                                    <p class="card-text">${data.release_date}</p>
                                    <button type="button" class="btn btn-primary see-detail" data-toggle="modal" data-target="#exampleModal" data-id="${data.id}">
                                    See Detail
                                    </button>
                                </div>
                            </div>
                        </div>`)
                });
            }
        });
        $('.now-playing-list').on('click', '.see-detail', () => {
            modal();
        });
    };


    // movie berdasarkan upcoming
    const movieUpcoming = () => {
        $('.upcoming-list').html('');
        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/upcoming?',
            type: 'GET',
            dataType: 'json',
            data: {
                'api_key': API_KEY,
                'language': 'en-US'
            },
            success: (data) => {
                data.results.forEach(data => {
                    $('.upcoming-list').append(`
                        <div class="col-md-3">
                                <div class="card mb-3">
                                    <img src="${IMG_URL + data.poster_path}" class="card-img-top" alt="${data.title}">
                                    <div class="card-body style="width: 18rem;">
                                        <h5 class="card-title">${data.title}</h5>
                                        <p class="card-text">${data.release_date}</p>
                                        <button type="button" class="btn btn-primary see-detail" data-toggle="modal" data-target="#exampleModal" data-id="${data.id}">
                                        See Detail
                                        </button>
                                    </div>
                                </div>
                            </div>`)
                });
            }
        });
        $('.upcoming-list').on('click', '.see-detail', () => {
            modal();
        });
    };

    //movie berdasarkan popular
    const moviePopular = () => {
        $('.popular-list').html('');
        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/popular?',
            type: 'GET',
            dataType: 'json',
            data: {
                'api_key': API_KEY,
                'language': 'en-US'
            },
            success: (data) => {
                data.results.forEach(data => {
                    $('.popular-list').append(`
                        <div class="col-md-3">
                                <div class="card mb-3">
                                    <img src="${IMG_URL + data.poster_path}" class="card-img-top" alt="${data.title}">
                                    <div class="card-body style="width: 18rem;">
                                        <h5 class="card-title">${data.title}</h5>
                                        <p class="card-text">${data.release_date}</p>
                                        <button type="button" class="btn btn-primary see-detail" data-toggle="modal" data-target="#exampleModal" data-id="${data.id}">
                                        See Detail
                                        </button>
                                    </div>
                                </div>
                            </div>`)
                });
            }
        });
        $('.popular-list').on('click', '.see-detail', () => {
            modal();
        });
    };

    // movie berdasarkan top rated
    const movieTopRated = () => {
        $('.top-rated-list').html('');
        $.ajax({
            url: 'https://api.themoviedb.org/3/movie/top_rated?',
            type: 'GET',
            dataType: 'json',
            data: {
                'api_key': API_KEY,
                'language': 'en-US'
            },
            success: (data) => {
                data.results.forEach(data => {
                    $('.top-rated-list').append(`
                            <div class="col-md-3">
                                <div class="card mb-3">
                                    <img src="${IMG_URL + data.poster_path}" class="card-img-top" alt="${data.title}">
                                    <div class="card-body style="width: 18rem;">
                                        <h5 class="card-title">${data.title}</h5>
                                        <p class="card-text">${data.release_date}</p>
                                         <button type="button" class="btn btn-primary see-detail" data-toggle="modal" data-target="#exampleModal" data-id="${data.id}">
                                        See Detail
                                            </button>
                                        </div>
                                </div>
                            </div>`);
                });
            }
        });
        $('.top-rated-list').on('click', '.see-detail', (event) => {
            modal();
        });
    };

    // movie berdasarkan id untuk modal
    const modal = () => {
        const id = $(event.target).data('id');
        $.ajax({
            url: `https://api.themoviedb.org/3/movie/${id}?`,
            type: 'GET',
            dataType: 'json',
            data: {
                'api_key': API_KEY
            },
            success: (data) => {
                $('.modal-title').html(`${data.title}`);
                $('.modal-body').html(`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="${IMG_URL + data.poster_path}" class="img-fluid" alt="${data.title}">
                        </div>
                        <div class="col-md-8">
                        <ul class="list-group">
                            <li class="list-group-item"><h3>${data.title}</h3></li>
                            <li class="list-group-item">${data.overview}</li>
                            <li class="list-group-item font-weight-bold">Release Date : ${data.release_date}</li>
                            <li class="list-group-item font-weight-bold">Vote Average : ${data.vote_average}</li>
                            <li class="list-group-item font-weight-bold">Vote Count : ${data.vote_count}</li>
                        </div>
                    </div>
                </div>
            `);
            }
        });
    };

    // search klik tombol search
    $('#searchElementButton').on('click', () => {
        searchMovie();
    });

    // search menggunakan tombol enter
    $('#searchElement').on('keyup', (event) => {
        if (event.keyCode === 13) {
            searchMovie();
        };
    });

    //active navbar
    $('.nav-link').on('click', () => {
        $('.nav-link').removeClass('active');
        $(event.target).addClass('active');
    });

    $('.navbar-brand').on('click', () => {
        location.reload();
    })

    movieNowPlaying();
    movieUpcoming();
    moviePopular();
    movieTopRated();
};

export default movies;