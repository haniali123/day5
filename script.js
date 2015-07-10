function Movie(title, runningTimeInMinutes, year, genre, desc){
    this.title = title;
    this.runningTimeInMinutes = runningTimeInMinutes;
    this.year = year;
    this.genre = genre;
    this.desc = desc;
}
Movie.prototype = {
  runningTimeInMinutes: function(){
    return ( this.runningTimeInMinutes / 60 + 'hours');
  },
  desc: function(){
    return(this.desc.slice(0,50) + '... ');
  }
};
var style = document.getElementById('movieArr');
style.addEventListener('submit', function(evt){
    evt.preventDefault();
    var movieArray = [];
    var title = document.getElementById('title').value;
    var runningTime = document.getElementById('runningTime').value;
    var year = document.getElementById('year').value;
    var genrie = document.getElementsByName('genre');
    var desc = document.getElementById('desc').value;

    for (var i = 0; i < genrie.length; i++) {
       var genreInput = genrie[i];
    if (genreInput.checked) {
        genre = genreInput.value;
    }
    // pushing in the empty array
    movieArray.push(title);
    movieArray.push(runningTime);
    movieArray.push(year);
    movieArray.push(genre);
    movieArray.push(desc);

    console.log(movieArray);
    console.log(genrie);

 }

console.log(genrie);

function e(elementType, text, attributes, styles) {
    attributes = attributes || {};
    styles = styles || {};

    var newElement = document.createElement(elementType);

    if (text) {
        newElement.textContent = text;
    }
    //set the attributes on the tag
    for (var attr in attributes) {
        if (attributes.hasOwnProperty(attr)) {
            newElement.setAttribute(attr, attributes[attr]);
        }
    }
    //set the styles
    for (var style in styles) {
        if (styles.hasOwnProperty(style)) {
            newElement.style[style] = styles[style];
        }
    }

    return newElement;
}
var genreInputs = document.getElementById("genre");

genreInputs.addEventListener("submit", function () {

    var theMovie = document.getElementById("movieArr").value;
    alert(theMovie);

});

var Movie1 = new Movie('The Hulk', 150, 2015 );

// Create a new <li> element (remember our e function? might be handy here). 
// Set the text of the li element to be the movie title.
var ul = e("ul");
var movieList = document.getElementById('genre');

var li = e("li", movieArray[0], {}, {});

ul.appendChild(li);

document.getElementById("myul").addEventListener("click", function (evt) {
    alert(evt.target.textContent);
});

li.addEventListener('click', function(){
  alert(movieArray[4].slice(0,50) + '...');
});
// appending the li to the movielist as a parent.
movieList.appendChild(li);

 });
