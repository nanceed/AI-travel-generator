function generateItinerary(event) {
    event.preventDefault();

let holidayElement = document.querySelector("#itinerary");

  new Typewriter("#itinerary", {
    strings: "⏳ Preparing your itinerary",
    autoStart: true,
    delay: 100,
  });

}

let travelFormElement = document.querySelector("#travel-generator-form");
travelFormElement.addEventListener("submit", generateItinerary);