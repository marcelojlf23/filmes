import React from 'react';

import { 
    Container,
    Header,
    HeaderButton,
    Banner
} from './styles';

import { Feather, Ionicons } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';

function Detail() {
    return (
        <Container>
            <Header>
                <HeaderButton>
                    <Feather
                        name="arrow-left"
                        size={28}
                        color="#fff"
                    />
                </HeaderButton>
                <HeaderButton>
                    <Ionicons 
                        name="bookmark"
                        size={28}
                        color="#fff"
                    />
                </HeaderButton>
            </Header>
        </Container>
    )
}

export default Detail;