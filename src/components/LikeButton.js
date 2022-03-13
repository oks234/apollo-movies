import { useMutation, gql } from "@apollo/client";
import styled from "styled-components";

const LIKE_MOIVE = gql`
  mutation ToggleMovieLike($id: Int!) {
    toggleMovieLike(id: $id) @client
  }
`;
const Button = styled.button`
  background: none;
  border: none;
  margin: 0;
  padding: 4px;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const LikeButton = ({ id, isLiked }) => {
  const [ToggleMovieLike] = useMutation(LIKE_MOIVE, { variables: { id: id } });

  return <Button onClick={ToggleMovieLike}>{isLiked ? "❤️" : "💔"}</Button>;
};

export default LikeButton;
