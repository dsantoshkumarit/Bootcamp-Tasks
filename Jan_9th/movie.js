var Movie = /** @class */ (function () {
    function Movie(movienm, studio, rating) {
        if (rating === void 0) { rating = 'PG'; }
        this.title = movienm;
        this.studio = studio;
        this.rating = rating;
    }
    Movie.prototype.getPG = function (moviesarr) {
        var pgMovies = [];
        moviesarr.forEach(function (movie) {
            if (movie.rating === 'PG')
                pgMovies.push(movie);
        });
        return pgMovies;
    };
    return Movie;
}());
var instances_to_string = function (obj_arr) {
    var ret_str = '';
    obj_arr.forEach(function (movie, i) {
        ret_str += "Movie " + (i + 1) + ' : {\n';
        ret_str += "Movie Title : " + movie.title + ',\n';
        ret_str += "Movie Studio : " + movie.studio + ',\n';
        ret_str += "Movie Rating : " + movie.rating + '\n';
        ret_str += '},\n';
    });
    return ret_str;
};
var movie1 = new Movie('Casino Royale', 'Eon Production', 'PG13');
var movie2 = new Movie('Casino Royale 2', 'Eon Production', 'PG13');
var movie3 = new Movie('COCO', 'Eon Production', 'PG');
var movie4 = new Movie('Inside Out', 'Eon Production', 'PG');
var inp_movie_arr = [movie1, movie2, movie3, movie4];
var PG_Movie_arr = (new Movie('', '')).getPG(inp_movie_arr);
console.log(PG_Movie_arr);
var inp_movie_str = '[\n' + instances_to_string(inp_movie_arr) + ']';
document.querySelector('.input-data').innerHTML = inp_movie_str;
document.querySelector('.output-data').innerHTML = '[\n' + instances_to_string(PG_Movie_arr) + ']';
