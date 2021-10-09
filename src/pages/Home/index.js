import React from 'react';
import { Text, View } from 'react-native';

import { Container } from './styles';

import Header from '../../components/Header';

function Home() {
    return (
        <Container>
            <Header />
            <Text>HOME</Text>
        </Container>
    );
}

export default Home;