import React, {useState, useEffect} from 'react';
import { Container, Name } from './styles';

import { useNavigation, useRoute } from '@react-navigation/native';

function Search() {
    const navigation = useNavigation();
    const route = useRoute();

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        let isActive = true;

        async function getSearchMovie(){

        }

        if (isActive) {
            getSearchMovie();
        }

        return () => {
            isActive = false;
        }
    });

    if (loading) {  
        return(
            <Container></Container>
        )
    }
    
    return(
        <Container>
            <Name>TESTE PROCURANDO</Name>
        </Container>
    );
} 

export default Search;