import React, { useState } from 'react';

import { Container, ListMovies } from './styles';
import Header from '../../components/Header';

import { getMoviesSave, deleteMovie } from '../../utils/storage';
import { useEffect } from 'react/cjs/react.development';

import FavoriteItem from '../../components/FavoriteItem';
import { useNavigation } from '@react-navigation/native';

function Movies(){
    const navigation = useNavigation();
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

    function navigateToDetail(id){
        navigation.navigate('Detail', {id});
    }

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
                        navigatePage={()=>navigateToDetail(item.id)}
                    />
                )}
            />
        </Container>
     );
}
 
export default Movies;