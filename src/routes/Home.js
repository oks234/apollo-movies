import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import styled from "styled-components";
import { LAYOUT, Container, Main } from "../components/styled";
import Movie from "../components/Movie";
import Header from "../components/Header";
import Loading from "../components/Loading";

const GET_MOVIES = gql`
  query getMovies($limit: Int, $rating: Float, $sort_by: String, $genre: String) {
    movies(limit: $limit, rating: $rating, sort_by: $sort_by, genre: $genre) {
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
  width: ${LAYOUT.extraSmall.width};
  margin: 0 ${LAYOUT.extraSmall.margin};
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;

  @media (min-width: ${LAYOUT.small_1.minSize}) {
    width: ${LAYOUT.small_1.body};
    margin: 0 ${LAYOUT.small_1.margin};
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (min-width: ${LAYOUT.small_2.minSize}) {
    width: ${LAYOUT.small_2.body};
    margin: 0 ${LAYOUT.small_2.margin};
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: ${LAYOUT.medium.minSize}) {
    width: ${LAYOUT.medium.body};
    margin: 0 ${LAYOUT.medium.margin};
    /* gap: 36px; */
  }

  @media (min-width: ${LAYOUT.large.minSize}) {
    width: ${LAYOUT.large.body};
    margin: 0 ${LAYOUT.large.margin};
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Home = () => {
  const [ sortBy, setSortBy ] = useState("year");
  const [ genre, setGenre ] = useState("Sci-Fi");
  const { loading, data } = useQuery(GET_MOVIES, {
    variables: { limit: 20, rating: 0, sort_by: sortBy, genre },
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
