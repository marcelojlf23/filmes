import React, { useState } from 'react';

import { Container, ListMovies } from './styles';
import Header from '../../components/Header';

import { getMoviesSave } from '../../utils/storage';
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
                    />
                )}
            />
        </Container>
     );
}
 
export default Movies;