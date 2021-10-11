import React from 'react';
import { ScrollView } from 'react-native';

import { Container, SearchContainer, SearchButton, Input, Title, BannerButton, Banner } from './styles';
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

            <ScrollView>
                <Title>Em Cartaz</Title>

                <BannerButton>
                    <Banner
                        resizeMethod="resize"
                        source={{ uri: "https://images.unsplash.com/photo-1602461601079-fb03b7b35e61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"}}
                    />
                </BannerButton>
            </ScrollView>
        </Container>
    );
}

export default Home;