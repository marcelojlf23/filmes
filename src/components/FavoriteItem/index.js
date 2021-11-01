import React from "react";
import { Ionicons, Feather } from "@expo/vector-icons"

import { Container,RateContainer,Title,Rate,ActionContainer,DetailButton,DeleteButton} from './styles'

function FavoriteItem(data) {
  return (
    <Container>
      <Title size={22}>{data.title}</Title>

      <RateContainer>
        <Ionicons name="md-star" size={12} color="#e7a74e"/>
        <Rate>{data.vote_average}/10</Rate>
      </RateContainer>

      <ActionContainer>
        <DetailButton>
            <Title size={14}>Ver Detalhes</Title>
        </DetailButton>

        <DeleteButton>
            <Feather name="trash" size={24} color="#fff"/>
        </DeleteButton>
      </ActionContainer>
    </Container>
  );
}

export default FavoriteItem;