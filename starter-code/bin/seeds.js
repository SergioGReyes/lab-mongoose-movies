const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');


mongoose.connect('mongodb://localhost/movies');

const movies = [
  {
    title: 'Regreso al futuro',
    genre: 'Ciencia ficción',
    plot: 'Viajes en el tiempo',
  },
  {
    title: 'Regreso al futuro 2',
    genre: 'Ciencia ficción',
    plot: 'Viajes en el tiempo',
  },
  {
    title: 'Regreso al futuro 3',
    genre: 'Ciencia ficción',
    plot: 'Viajes en el tiempo',
  },

];

Movie.create(movies, (err) => {
  if (err) { throw (err) }
  mongoose.connection.close()
});



const celebrities = [

  {
    name: "Vivien Leigh",
    occupation: "Actress",
    catchPhrase: "Tara! Home. I'll go home.And I'll think of some way to get him back. After all... tomorrow is another day."
  },
  {
    name: "Ingrid Bergman",
    occupation: "Actress",
    catchPhrase: "Play it once, Sam. For old times' sake."
  },
  {
    name: "Marilyn Monroe",
    occupation: "Actress",
    catchPhrase: "Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring."
  }

];

Celebrity.create(celebrities, (err) => {
  if (err) { throw (err) }
  mongoose.connection.close()
});
