Hello  ALL, A simple Javascript Project 
🎬 Movie Explorer App

This is a simple Movie Explorer Web App built using HTML, CSS, and JavaScript that interacts with The Movie Database (TMDb) API
.
The app allows users to:

✅ View a list of popular movies (fetched dynamically from TMDb).

✅ Search for any movie by name.

✅ Display movie posters and titles neatly.

✅ Show error messages if no results are found or API fails.

✅ Include a simple contact form with success message handling.

🚀 Features

Popular Movies Section:
On page load, the app fetches trending/popular movies from TMDb and displays them.

Search Movies:
Users can search for any movie using the search bar, and results update instantly.

Error Handling:

If the API fails → shows a friendly error message.

If a movie has no poster/title → it is skipped.

Form Submission:
Contact form has client-side handling with a success message on submit.

🛠️ Technologies Used

HTML5 – Structure of the app

CSS3 – Styling (can be extended for better UI)

JavaScript (ES6) – Core functionality, DOM manipulation, API integration

TMDb API – For fetching movies and search results

📷 Screenshots (Optional)

(Add screenshots/gifs of your app here if you want)

⚡ How It Works

On page load → getmovie() is called to display popular movies.

On clicking the Search button → Searchmovie() fetches results from TMDb and displays only movies with valid posters/titles.

Contact form submission → Shows a success message without refreshing the page.

🔑 API Key

This project uses a Bearer token (TMDb API). To use your own API key:

Sign up at TMDb

Generate an API token

Replace the token in the Authorization header inside the JS file.

📌 Future Improvements

Add movie details (rating, release date, overview)

Improve UI with CSS frameworks (Bootstrap/Tailwind)

Add pagination for search results

Deploy using GitHub Pages / Vercel
