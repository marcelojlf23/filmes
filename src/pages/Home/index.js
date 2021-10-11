import React, {useState, useEffect} from 'react';
import { ScrollView } from 'react-native';

import { Container, SearchContainer, SliderMovie, SearchButton, Input, Title, BannerButton, Banner } from './styles';
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';

import api, {key} from '../../services/api'

function Home() {

    const [nowMovies, setNowMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topMovies, setTopMovies] = useState([]);

    useEffect(() =>{
        let isActive = true;

        async function getMovies() {
            const [nowData, popularData, topData] = await Promise.all([
                api.get('/movie/now_playing', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),
                api.get('/movie/popular', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),
                api.get('/movie/top_rated', {
                    params: {
                        api_key: key,
                        language: 'pt-BR',
                        page: 1
                    }
                }),
            ])
            
            setNowMovies(nowData.data.results);
        }
    })

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

            <ScrollView showsVerticalScrollIndicator={false}>
                <Title>Em Cartaz</Title>

                <BannerButton 
                    activeOpacity={0.9} onPress={()=>alert('teste')}>
                    <Banner
                        resizeMethod="resize"
                        source={{ uri: "https://images.unsplash.com/photo-1602461601079-fb03b7b35e61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"}}
                    />
                </BannerButton>

                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4]}
                    renderItem={({item}) => <SliderItem />}
                />

                <Title>Populares</Title>
                    
                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4]}
                    renderItem={({item}) => <SliderItem />}
                />
                
                <Title>Os mais Votados</Title>
                    
                <SliderMovie
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={[1,2,3,4]}
                    renderItem={({item}) => <SliderItem />}
                />
            </ScrollView>
        </Container>
    );
}

export default Home;