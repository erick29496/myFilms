import './card-list.styles.css';

import * as React from 'react';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FilmCard from '../card/card.component';
import Grid from '@mui/material/Grid';

const CardList = ({ films, onOpenHandler }) => {

  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        {films.map((film) => (
          <Grid item key={film.key} xs={12} sm={6} md={4}>
            <Button key={film.imdbID} onClick={() => onOpenHandler(film.imdbID)}>
              <FilmCard film={film} />
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
) };

export default CardList;
