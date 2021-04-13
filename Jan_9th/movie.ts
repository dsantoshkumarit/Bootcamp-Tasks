class Movie{
    title:string;
    studio:string;
    rating:string;

    constructor(movienm:string, studio:string,rating:string='PG')
    {
        this.title=movienm;
        this.studio=studio;
        this.rating=rating;
    }

    getPG(moviesarr:Array<Movie>):Array<Movie>{
        let pgMovies:Array<Movie>=[];
        moviesarr.forEach(movie=>{
            if(movie.rating==='PG')
                pgMovies.push(movie);
        })
        return pgMovies;
    }
}

const instances_to_string=(obj_arr)=>{
    let ret_str='';
    
    obj_arr.forEach((movie,i)=>{
        ret_str+="Movie "+(i+1)+' : {\n'
        ret_str+="Movie Title : "+movie.title+',\n';
        ret_str+="Movie Studio : "+movie.studio+',\n';
        ret_str+="Movie Rating : "+movie.rating+'\n';
        ret_str+='},\n';
    });
    return ret_str;
};

let movie1=new Movie('Casino Royale', 'Eon Production','PG13');
let movie2=new Movie('Casino Royale 2', 'Eon Production','PG13');
let movie3=new Movie('COCO', 'Eon Production','PG');
let movie4=new Movie('Inside Out', 'Eon Production','PG');
let inp_movie_arr=[movie1,movie2,movie3,movie4];
let PG_Movie_arr=(new Movie('','')).getPG(inp_movie_arr);
console.log(PG_Movie_arr);

let inp_movie_str='[\n'+instances_to_string(inp_movie_arr)+']';
document.querySelector('.input-data').innerHTML=inp_movie_str;

document.querySelector('.output-data').innerHTML='[\n'+instances_to_string(PG_Movie_arr)+']';
