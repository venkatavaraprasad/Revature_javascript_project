
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
    const introSection = document.querySelector(".intro");
    introSection.appendChild(dateDiv);
  }
  dateDiv.textContent = `Today's Date: ${getCurrentDate()}`;
}


function getJoke() {
  const jokeContainer = document.getElementById("joke-container");
  jokeContainer.innerHTML = "Finding a good joke...";

  fetch("https://v2.jokeapi.dev/joke/Programming")
    .then(res => res.json())
    .then(data => {
      let jokeHtml = data.type === "single"
        ? `<p>${data.joke}</p>`
        : `<p><strong>Setup:</strong> ${data.setup}</p>
           <p><strong>Punchline:</strong> ${data.delivery}</p>`;
      jokeContainer.innerHTML = jokeHtml;
      console.log(data);
    })
    .catch(err => {
      console.error("Error fetching joke:", err);
      jokeContainer.innerHTML = "Sorry, couldn't fetch a joke.";
    });


}


document.getElementById("dateBtn").addEventListener("click", displayDate);
document.getElementById("jokeBtn").addEventListener("click", getJoke);
