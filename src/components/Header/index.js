import React from 'react';
import { Container,MenuButton, Title } from './styles';

import { Feather } from '@expo/vector-icons';

function Header() {
    return (
        <Container>
            <MenuButton>
                <Feather name="menu" size={36} color="#fff" />
                <Title>React Prime</Title>
            </MenuButton>
        </Container>
    );
}

export default Header;