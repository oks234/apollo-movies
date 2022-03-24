import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://movie-graphql-1.herokuapp.com/",
  cache: new InMemoryCache(),
  resolvers: {
    Movie: {
      isLiked: () => false,
    },
    Mutation: {
      toggleMovieLike: (_, { id }, { cache }) => {
        cache.modify({
          id: `Movie:${id}`,
          fields: {
            isLiked: (isLiked) => !isLiked,
          },
        });
      },
    },
  },
});

export default client;
