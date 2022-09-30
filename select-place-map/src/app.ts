import axios from "axios";

const form = document.querySelector("form");
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyDeHtYwWo7dAJ5c2vp1Dw1URDYfG9YO380";

// declare var google: any;

type GoogleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

function searchAddressHandler(e: Event) {
  e.preventDefault();
  const enteredAddress = addressInput.value;

  // send this to Google API

  axios
    .get<GoogleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((res) => {
      console.log(res);
      if (res.data.status !== "OK") {
        throw new Error("Could not fetch loaction!");
      }
      const coordinates = res.data.results[0].geometry.location;
      const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: coordinates,
        zoom: 8,
      });

      new google.maps.Marker({ position: coordinates, map: map });
    })
    .catch((err) => {
      console.log(err);
      alert(err.message);
    });
}

form?.addEventListener("submit", searchAddressHandler);
