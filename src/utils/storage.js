import AsyncStorage from "@react-native-async-storage/async-storage";

// Buscar os filmes salvos
export async function getMoviesSave(key) {
    const myMovies = await AsyncStorage.getItem(key);
    
    
    let moviesSave  = JSON.parse(myMovies) || [];

    return moviesSave;
}

// Salvor um novo filme
export async function saveMovie(key, newMovie) {
    let moviesStored = await getMoviesSave(key);

    // se tiver algum filme salvo com esse mesmo id / ou duplicado ignorar
    const hasMovie = moviesStored.some(movie => movie.id === newMovie.id);

    if (hasMovie) {
        return;
    }

    moviesStored.push(newMovie);

    await AsyncStorage.setItem(key, JSON.stringify(moviesStored)); 
}



// Deletar um filme específico

export async function deleteMovie(id) {
    let moviesStored = await getMoviesSave('@primereact');
    
    let myMovies  = moviesStored.filter(movie => movie.id !== id);

    await AsyncStorage.setItem('@primereact', JSON.stringify(myMovies));
    
    return myMovies;
}

// filtrar algum filme se ja esta salvo