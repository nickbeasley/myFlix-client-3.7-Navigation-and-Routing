import React from "react";
import { Card, ListGroup } from "react-bootstrap";

export const FavoriteMovie = ({
  movies,
  user,
  favoriteMoviesList,
  removeMovie,
}) => {
  const favoriteMovies = movies.filter((m) =>
    favoriteMoviesList.includes(m._id)
  );

  function removeMovie(movieId) {
    const newFavoriteMovies = favoriteMovies.filter((m) => m._id !== movieId);
    handleFavoriteMovieChange(newFavoriteMovies);
  }

  return (
    <ListGroup>
      {favoriteMovies.map((m) => (
        <ListGroup.Item
          key={m._id}
          className="d-flex justify-content-between align-items-center"
        >
          <div>
            {m.Title}
            {m.Year}
          </div>
          <div>
            <button onClick={() => removeMovie(user.Username, m._id)}>
              Remove
            </button>
          </div>
        </ListGroup.Item>
      ))}
      {favoriteMovies.length === 0 && (
        <Card.Text>No favorite movies selected yet.</Card.Text>
      )}
    </ListGroup>
  );
};
