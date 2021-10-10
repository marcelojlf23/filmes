import React from 'react';
import { Text, View } from 'react-native';

import { Container, SearchContainer, SearchButton, Input } from './styles';
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';

function Home() {
    return (
        <Container>
            <Header title="React Prime"/>

            <SearchContainer>
                <Input
                    placeholder="Ex Vingadores"
                    placeholderTextColor="#ddd"
                />
                <SearchButton>
                    <Feather name="search" size={30} color="#FFF"/>
                </SearchButton>
            </SearchContainer>
            <Text>HOME</Text>
        </Container>
    );
}

export default Home;