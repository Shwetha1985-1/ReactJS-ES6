const oscarMovies = [
    { title: "Parasite", year: 2020, genre: "Thriller", director: "Bong Joon Ho" },
    { title: "Green Book", year: 2019, genre: "Drama", director: "Peter Farrelly" },
    { title: "The Shape of Water", year: 2018, genre: "Fantasy", director: "Guillermo del Toro" },
    // Add more movies as needed
   ];

   console.log("USING FOREACH METHOD");
   oscarMovies.forEach((element,index,array) => {

    let sentence = `index: ${index} , Title: ${element.title} ,Movie: ${element}`; //displaying index,Movie title
  console.log(sentence);
    console.log('index:'+index,'Title:'+element.title,element); //display original array
}
);

console.log("***********************");
console.log("USING FOR LOOP METHOD");

for(let i=0;i<oscarMovies.length;i++){
    let sentence = `index: ${i} , Title: ${oscarMovies[i].title} ,Movie: ${oscarMovies[i]}`; //displaying index,Movie title

    console.log(i,oscarMovies[i].title,oscarMovies[i]); //simple log message
    console.log(sentence); //using back tik
}