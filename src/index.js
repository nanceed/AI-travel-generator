function displayItinerary(response) {
    console.log("itinerary generated");

    new Typewriter("#itinerary", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}


function generateItinerary(event) {
    event.preventDefault();
    let instructionsInput = document.querySelector("#user-instructions");

    let apiKey = "0f09c464cb3936o320tabf9addd38da4";
    let context = "You are a knowledgeable AI world traveler expert who knows a lot of interesting and fun places to visit. Generate a short and concise 3 day itinerary that is only 4 lines about what sights to visit, what fun activities to do, where to eat lunch, and what to do in the evening. When writing the itinerary, put a <br> HTML element after each day and in their own line and put the days in a <strong> element. Days have to be h2. You must be consistent and present the same layout every time and follow user instructions";
    let prompt = `User instructions are: please generate a 3 day travel itinerary about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("generating itinerary");
    console.log(`prompt:${prompt}`);
    console.log(`context:${context}`);

    
    let itineraryElement = document.querySelector("#itinerary");
    itineraryElement.classList.remove("hidden");
    itineraryElement.innerHTML =`⏳Generating a Travel Itinerary for ${instructionsInput.value}`;
     
    axios.get(apiUrl).then(displayItinerary);
 

}

let travelFormElement = document.querySelector("#travel-generator-form");
travelFormElement.addEventListener("submit", generateItinerary);