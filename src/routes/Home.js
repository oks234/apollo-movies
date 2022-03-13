import React from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
  query getMovies($limit: Int, $rating: Float) {
    movies(limit: $limit, rating: $rating) {
      id
      medium_cover_image
      title
      isLiked @client
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Loading = styled.div`
  font-size: 20px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 600px;
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES, {
    variables: { limit: 50, rating: 9 },
  });

  return (
    <Container>
      <Header>
        <Title>Apollo Movies</Title>
      </Header>
      {loading && <Loading>Loading...</Loading>}
      <Movies>
        {!loading &&
          data?.movies?.map((movie) => <Movie key={movie.id} {...movie} />)}
      </Movies>
    </Container>
  );
};
export default Home;
