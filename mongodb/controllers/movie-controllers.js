const Movie = require('../models/movie.js');

const getMovies = (req, res) => {
    Movie
        .find()
        .sort({title: 1})
        .then((movies) => {
            res.status(200).json(movies)
        })
        .catch(() => {
            res.status(500).json({msg: "Something went wrong"})
        })
}

const getMovie = (req, res) => {
    try {
        Movie
        .findById(req.params.id)
        .then((movie) => {
            if (movie) {
                res.status(200).json(movie);
            } else {
                res.status(404).json({ msg: 'Movie not found' });
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ msg: 'Something went wrong' });
        });
    } catch (error) {
        res.status(400).json({ msg: 'Invalid movie ID' });
    }
}

const deleteMovie = (req, res) => {
    try {
        Movie
            .findByIdAndDelete(req.params.id)
            .then((result) => {
                if (result) {
                    res.status(200).json({ msg: 'Movie deleted successfully' });
                } else {
                    res.status(404).json({ msg: 'Movie not found' });
                }
            })
            .catch((error) => {
                console.error(error);
                res.status(500).json({ msg: 'Something went wrong' });
            });
    } catch (error) {
        res.status(400).json({ msg: 'Invalid movie ID' });
    }
}

const addMovie = (req, res) => {
    const movie = new Movie(req.body)
    try {
        movie
            .save()
            .then((result) => {
                res.status(201).json(result);
            })
            .catch((error) => {
                console.error(error);
                res.status(500).json({ msg: 'Something went wrong' });
            });
    } catch (error) {
        res.status(400).json({ msg: 'Invalid movie data' });
    }
}

const updateMovie = (req, res) => {
    try {
        Movie
            .findByIdAndUpdate(req.params.id, req.body)
            .then((updatedMovie) => {
                if (updatedMovie) {
                    res.status(200).json({ msg: 'Movie updated successfully', updatedMovie });
                } else {
                    res.status(404).json({ msg: 'Movie not found' });
                }
            })
            .catch((error) => {
                console.error(error);
                res.status(500).json({ msg: 'Something went wrong' });
            });
    } catch (error) {
        res.status(400).json({ msg: 'Invalid movie ID' });
    }
}

module.exports = {
    getMovies,
    getMovie,
    deleteMovie,
    addMovie,
    updateMovie
}