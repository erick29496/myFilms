import './card.styles.css';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const FilmCard = ({ film }) => {
  const title = film?.Title;
  const year = film?.Year;
  const img = film?.Poster;

  return (
    <main>
    <Card sx={{ width: 250, height: 500 }} className="card-container">
      <CardMedia
        component="img"
        height="350"
        image={img}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {year}
        </Typography>
      </CardContent>
    </Card>
  </main>
  );
};

export default FilmCard;
