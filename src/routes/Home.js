import React from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import { Container, Main } from "../components/styled";
import Movie from "../components/Movie";
import Header from "../components/Header";
import Loading from "../components/Loading";

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

// const Loading = styled.div`
//   font-size: 20px;
// `;

const Movies = styled.div`
  display: grid;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 8px;
  grid-template-columns: repeat(2, 1fr);
  /* max-width: 600px; */
`;

const Home = () => {
  const { loading, data } = useQuery(GET_MOVIES, {
    variables: { limit: 50, rating: 9 },
  });

  return (
    <Container>
      <Header title="Apollo Movies" />
      <Main>
        {loading ? (
          <Loading type={"spinningBubbles"} size={60} />
        ) : (
          <Movies>
            {data?.movies?.map((movie) => (
              <Movie key={movie.id} {...movie} />
            ))}
          </Movies>
        )}
      </Main>
    </Container>
  );
};
export default Home;
