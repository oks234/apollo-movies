import { useMutation, useQuery, gql } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Container, Main } from "../components/styled";
import Header from "../components/Header";
import Loading from "../components/Loading";
// import LikeButton from "../components/LikeButton";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      id
      title
      medium_cover_image
      description_intro
      rating
      language
      isLiked @client
    }
    suggestions(id: $id) {
      id
      medium_cover_image
    }
  }
`;

// const Loading = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   font-size: 20px;
//   transform: translate(-50%, -50%);
// `;

const Content = styled.div`
  padding: 8px;
`;

const Title = styled.div`
  margin-bottom: 12px;
  font-size: 40px;
  font-weight: 600;
`;

const Subtitle = styled.div`
  margin-bottom: 12px;
  font-size: 12px;
`;

const Description = styled.div`
  font-size: 20px;
`;

const Poster = styled.img``;

function Detail() {
  const { id } = useParams();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: parseInt(id) },
  });

  return (
    <Container>
      <Header title="Apollo Movies" />
      <Main>
        {!loading && (
          <Content>
            <Title>{data?.movie?.title}</Title>
            <Subtitle>English &bull; {data?.movie?.rating}</Subtitle>
            <Description>{data?.movie?.description_intro}</Description>
            {/* <div>
              <LikeButton id={data?.id} isLiked={data?.isLiked} />
            </div> */}
          </Content>
        )}
        {!loading && (
          <Poster
            src={data?.movie?.medium_cover_image}
            alt={data?.movie?.title}
          />
        )}
        {loading && <Loading type={"spinningBubbles"} size={60} />}
      </Main>
    </Container>
  );
}

export default Detail;
