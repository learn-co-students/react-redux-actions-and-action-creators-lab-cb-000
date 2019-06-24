// define your actions here!
export function addMovie(movie){
  return {
    type: 'ADD_MOVIE',
    movie: {
      id: movie.id,
      title: movie.title,
      year: movie.year
    }
  }
}

export function deleteMovie(movie){
  return {
    type: 'DELETE_MOVIE',
    movie: {
      id: movie.id,
      title: movie.title,
      year: movie.year
    }
  }
}

export function updateUsername(username){
  return {
    type: 'UPDATE_USERNAME',
    username: username
  }
}

export function resetUsername(){
  return {
    type: 'RESET_USERNAME',
    username: 'default'
  }
}

     //TypeError: (0 , _actions.resetUsername) is not a function

