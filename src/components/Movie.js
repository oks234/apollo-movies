import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMutation, gql } from "@apollo/client";

const LIKE_MOIVE = gql`
  mutation likeMovie($id: Int!) {
    likeMovie(id: $id) @client
  }
`;

const Container = styled.div`
  padding: 8px;
  font-size: 20px;
`;

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
`;

const Title = styled.div`
  display: inline-block;
  color: black;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export default function Movie({ id, title, medium_cover_image, isLiked }) {
  const [likeMovie] = useMutation(LIKE_MOIVE, { variables: { id: id } });
  return (
    <Container>
      <Link to={`/${id}`}>
        <Image src={medium_cover_image} alt={title} />
        <Title>{title}</Title>
      </Link>
      <div>
        <button onClick={likeMovie}>
          {isLiked ? "Unlike" : "Like"}
        </button>
      </div>
    </Container>
  );
}
