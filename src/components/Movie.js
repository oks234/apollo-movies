import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LikeButton from "./LikeButton";

const Container = styled.div`
  /* padding: 8px; */
  font-size: 0;
`;

const Image = styled.img`
  max-width: 100%;
  width: 100%;
  height: auto;
`;

const Title = styled.div`
  display: inline-block;
  color: black;
  margin: 12px 0 16px;
  font-size: 28px;
  overflow: hidden;
`;

export default function Movie({ id, title, medium_cover_image, isLiked }) {
  return (
    <Container>
      <Link to={`/${id}`}>
        <Image src={medium_cover_image} alt={title} />
        <Title>{title}</Title>
      </Link>
      <div>
        <LikeButton {...{ id, isLiked }} />
      </div>
    </Container>
  );
}
