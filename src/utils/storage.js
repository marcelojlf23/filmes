import AsyncStorage from "@react-native-async-storage/async-storage";

// Buscar os filmes salvos
export async function getMoviesSave(key) {
    const myMovies = await AsyncStorage.getItem(key);
    
    
    let moviesSave  = JSON.parse(myMovies) || [];

    return moviesSave;
}
