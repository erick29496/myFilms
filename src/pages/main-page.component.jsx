import * as React from 'react';

import Box from '@mui/material/Box';
import CardList from '../components/card-list/card-list.component';
import Container from '@mui/material/Container';
import FilmDialog from '../components/info-modal/info-modal.component';
import Layout from '../components/layout/layout.component';
import SearchBox from '../components/search-box/search-box.component';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const MainPage = () => {
  
  const [searchField, setSearchField] = useState('');
  const [films, setFilms] = useState([]);
  const [open, setDialogOpen] = useState(false);
  const [selectedFilm, setSelectedFilm] = useState();
  const [filmStatusList, setFilmStatusList] = useState([]);
  const [selectedFilmStatus, setSelectedFilmStatus] = useState('0');

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const onSearchClick = (event) => {
    fetch(`https://www.omdbapi.com/?s=${searchField}&apikey=5c18216f`)
      .then(response => response.json())
      .then(response => {
        console.log(response.Search);
        setFilms(response.Response === 'True' ? response.Search : []);
      })
      .catch(err => console.error(err));
  };

  const handleClickDialogOpen = (id) => {
    fetch(`http://www.omdbapi.com/?i=${id}&plot=full&apikey=5c18216f`)
      .then(response => response.json())
      .then(response => {
        setSelectedFilm(response);
        setDialogOpen(true);
      })
      .catch(err => console.error(err));
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleFilmStatusChange = (event) => {
    setSelectedFilmStatus(event?.target?.value)
  };

  const handleFilmStatusSave = () => {
    handleDialogClose();
  };

  return (
    <Layout>
      <main className='App'>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              My Films
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
            Find and collect your favorite movies of all time.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
            >
              <SearchBox
                  onChangeHandler={onSearchChange}
                  onClickHandler={onSearchClick}
              />
            </Stack>
          </Container>
        </Box>
        <Container maxWidth="md">
          <CardList films={films} onOpenHandler={(id) => handleClickDialogOpen(id)} />
          <FilmDialog open={open} film={selectedFilm} filmStatus={selectedFilmStatus} onCloseHandler={handleDialogClose} 
              onChangeFilmStatusHandler={handleFilmStatusChange} onSaveFilmStatusHandler={handleFilmStatusSave}></FilmDialog>
        </Container>
      </main>
    </Layout>
    
  );
};

export default MainPage;