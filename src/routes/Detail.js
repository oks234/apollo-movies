import { useMutation, useQuery, gql } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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

const LIKE_MOIVE = gql`
  mutation likeMovie($id: Int!) {
    likeMovie(id: $id) @client
  }
`;

const Container = styled.div`
  display: flex;
  flex-direciton: column;
  margin: 0 auto;
`;

const Loading = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 20px;
  transform: translate(-50%, -50%);
`;

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
  const [likeMovie] = useMutation(LIKE_MOIVE, { variables: { id: id } });

  return (
    <Container>
      <Content>
        <Title>{data?.movie?.title}</Title>
        {loading || <Subtitle>English &bull; {data?.movie?.rating}</Subtitle>}
        <Description>{data?.movie?.description_intro}</Description>
        <div>
          <button onClick={likeMovie}>
            {data?.movie?.isLiked ? "Unlike" : "Like"}
          </button>
        </div>
      </Content>
      <Poster src={data?.movie?.medium_cover_image} alt={data?.movie?.title} />
      {loading && <Loading>...Loading</Loading>}
    </Container>
  );
}

export default Detail;
