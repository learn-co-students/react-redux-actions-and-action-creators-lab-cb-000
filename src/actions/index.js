// define your actions here!
export function addMovie(movie) {
    return {
        type: 'ADD_MOVIE',
        movie
    };
}

export function deleteMovie(movie) {
    return {
        type: 'DELETE_MOVIE',
        movie
    };
}

export function updateUsername(username) {
    return {
        type: 'UPDATE_USERNAME',
        username
    }
}

export function resetUsername(username) {
    return {
        type: 'RESET_USERNAME',
        username: 'default'
    };
}