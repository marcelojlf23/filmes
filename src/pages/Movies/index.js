import React, { useState } from 'react';

import { Container, ListMovies } from './styles';
import Header from '../../components/Header';

import { getMoviesSave, deleteMovie } from '../../utils/storage';
import { useEffect } from 'react/cjs/react.development';

import FavoriteItem from '../../components/FavoriteItem';

function Movies(){

    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        
        let isActive = true;

        async function getFavoriteMovies(){
            const result = await getMoviesSave('@primereact');
        
            if(isActive){
                setMovies(result);
            }
        }

        if(isActive){
            getFavoriteMovies();
        }

        return () => {
            isActive = false;
        }

    }, []);

    async function handleDelete(id) {
        const result = await deleteMovie(id);
        setMovies(result);
    }

    function

    return ( 
        <Container>
            <Header title="Meus filmes" />

            <ListMovies 
                showsVerticalScrollIndicator={false}
                data={movies}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                    <FavoriteItem
                        data={item}
                        deleteMovie={handleDelete}
                    />
                )}
            />
        </Container>
     );
}
 
export default Movies;