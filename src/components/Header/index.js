import React from 'react';
import { Container,MenuButton, Title } from './styles';

import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Header({title}) {

    const navigation = useNavigation();

    return (
        <Container>
            <MenuButton onPress={()=> navigation.openDrawer() }>
                <Feather name="menu" size={36} color="#fff" />
                <Title> { title } </Title>
            </MenuButton>
        </Container>
    );
}

export default Header;