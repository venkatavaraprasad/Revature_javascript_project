import { image } from "./constants.js";
function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function displayDate() {
  let dateDiv = document.getElementById("dateDisplay");
  if (!dateDiv) {
    dateDiv = document.createElement("div");
    dateDiv.id = "dateDisplay";
    const introSection = document.querySelector("#intro");
    introSection.appendChild(dateDiv);
  }
  dateDiv.textContent = `Today's Date: ${getCurrentDate()}`;
}


function getJoke() {
  const jokeContainer=document.createElement('div');

  const intro = document.getElementById("intro");
  intro.append(jokeContainer);
  

  // fetch("https://v2.jokeapi.dev/joke/Programming")
  //   .then(res => res.json())
  //   .then(data => {
  //     let jokeHtml = data.type === "single"
  //       ? `<p>${data.joke}</p>`
  //       : `<p><strong>Setup:</strong> ${data.setup}</p>
  //          <p><strong>Punchline:</strong> ${data.delivery}</p>`;
  //     jokeContainer.innerHTML = jokeHtml;
  //     console.log(data);
  //   })
  //   .catch(err => {
  //     console.error("Error fetching joke:", err);
  //     jokeContainer.innerHTML = "Sorry, couldn't fetch a joke.";
  //   });

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
        jokeContainer.id="joke-container";
        jokeContainer.appendChild(newmovie);


  }))
  .catch(err => {
  console.error("Error fetching movies:", err);
  jokeContainer.textContent = "Sorry, could not load movies right now.";
  });

}


document.getElementById("dateBtn").addEventListener("click", displayDate);

document.getElementById("jokeBtn").addEventListener("click", getJoke);

// Simple form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const successMessage = document.getElementById("successMessage");
  successMessage.textContent = "✓ Form submitted successfully!";
  successMessage.style.color = "green";
  successMessage.style.fontWeight = "bold";
  // const form=document.getElementById("form-section");

  // form.append(successMessage);
  
  // Clear form
  this.reset();
});
// document.getElementById("contactForm").addEventListener("submit", function(event) {
//   event.preventDefault();
  
//   const successMessage = document.getElementById("successMessage");
//   successMessage.textContent = "✓ Form submitted successfully!";
//   successMessage.style.color = "green";
//   successMessage.style.fontWeight = "bold";

//   // No need to append again if it's already in the page
//   // successMessage is updated in place

//   this.reset();
// });

