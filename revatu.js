import { image } from "./constants.js";
function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// function displayDate() {
//   let dateDiv = document.getElementById("dateDisplay");
//   if (!dateDiv) {
//     dateDiv = document.createElement("div");
//     dateDiv.id = "dateDisplay";
//     const introSection = document.querySelector("#intro");
//     introSection.appendChild(dateDiv);
//   }
//   dateDiv.textContent = `Today's Date: ${getCurrentDate()}`;
// }


function getmovie() {
  let jokeContainer=document.getElementById("joke-container");
  if(jokeContainer){
    return ;
  }
  jokeContainer=document.createElement('div');
  jokeContainer.id="joke-container";

  const intro = document.getElementById("intro");
  intro.append(jokeContainer);
  

 

const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODZkOTczNjg0NzljYTY4OTNlZThkNzEzNDcwZTU3ZCIsIm5iZiI6MTczNzg2ODQ1Mi4yODE5OTk4LCJzdWIiOiI2Nzk1YzRhNGI1MDBmYzdjYTMxODYyMWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zr0jtRrSSSwdHMzL8PxKza1uJvVcHeYcBovxYCi_di4'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => json.results.forEach((result)=>{
       console.log(result.title);
       const newmovie=document.createElement("div");
       newmovie.className="movie";
       const title = document.createElement("h3");
       title.textContent = result.title;
       const img = document.createElement("img");
       img.src = image+`${result.poster_path}`
       img.alt = `${result.title} poster`;

        newmovie.appendChild(img);
        newmovie.appendChild(title);
        
        jokeContainer.appendChild(newmovie);


  }))
  .catch(err => {
  console.error("Error fetching movies:", err);
  jokeContainer.textContent = "Sorry, could not load movies right now.";
  });

}

const Searchmovie = async () => {
  const jokeContainer = document.getElementById("joke-container");
  const input = document.getElementById("input");
  const query = input.value.trim();
  if (!query) return;

  jokeContainer.replaceChildren();
  const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

  try {
    const url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
      query
    )}`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODZkOTczNjg0NzljYTY4OTNlZThkNzEzNDcwZTU3ZCIsIm5iZiI6MTczNzg2ODQ1Mi4yODE5OTk4LCJzdWIiOiI2Nzk1YzRhNGI1MDBmYzdjYTMxODYyMWEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.zr0jtRrSSSwdHMzL8PxKza1uJvVcHeYcBovxYCi_di4',
      },
    };

    const res = await fetch(url, options);
    const data = await res.json();

    if (!data.results || data.results.length === 0) {
      jokeContainer.textContent = "No movies found.";
      return;
    }

    
    const validResults = data.results.filter(
      (m) => m.poster_path && m.title
    );

    if (validResults.length === 0) {
      jokeContainer.textContent = "No complete movie info available.";
      return;
    }

    validResults.forEach((result) => {
      const newMovie = document.createElement("div");
      newMovie.className = "movie";

      const title = document.createElement("h3");
      title.textContent = result.title;

      const img = document.createElement("img");
      img.src = `${IMAGE_BASE}${result.poster_path}`;
      img.alt = `${result.title} poster`;

      newMovie.append(img, title);
      jokeContainer.appendChild(newMovie);
    });
  } catch (err) {
    console.error("Error searching movies:", err);
    jokeContainer.textContent = "Sorry, search failed.";
  }
};






getmovie();

document.getElementById("movieBtn").addEventListener("click", Searchmovie);


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const successMessage = document.getElementById("successMessage");
  successMessage.textContent = "✓ Form submitted successfully!";
  successMessage.style.color = "green";
  successMessage.style.fontWeight = "bold";

  this.reset();
});


