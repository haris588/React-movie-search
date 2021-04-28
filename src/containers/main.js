import React from "react";
import { Main, Card } from '../components/exports';

export function MainContainer({ movies, query }) {
  return movies.length === 0 && query ? 
  <Main>
    <Main.Title>Could not find anything :(</Main.Title>
  </Main> :
    <Main>
      <Main.Row>
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => {
            return (
              <Card key={movie.id}>
                <Card.Wrapper width='small' padding='0'>
                  <Card.Image
                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                  />
                </Card.Wrapper>
                <Card.Rating rating={movie.vote_average}>
                  {movie.vote_average}
                </Card.Rating>
                <Card.Wrapper width='medium'>
                  <Card.Title>{movie.original_title}</Card.Title>
                  <Card.Wrapper padding="0">
                    <Card.Subtitle>
                      Release date: {movie.release_date}
                    </Card.Subtitle>
                    <Card.Subtitle>
                      Vote Count: {movie.vote_count}
                    </Card.Subtitle>
                    <Card.Subtitle>
                      Popularity: {movie.popularity}
                    </Card.Subtitle>
                  </Card.Wrapper>
                  <Card.Description>{movie.overview}</Card.Description>
                </Card.Wrapper>
              </Card>
            )
          })}
      </Main.Row>
    </Main>

}

