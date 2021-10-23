import React, {useState, useEffect} from 'react';
import { Container, Name } from './styles';

import { useNavigation, useRoute } from '@react-navigation/native';

function Search() {
    const navigation = useNavigation();
    const route = useRoute();

    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
    
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