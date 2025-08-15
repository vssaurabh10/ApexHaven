// mapboxgl.accessToken = mapToken;
// const map = new mapboxgl.Map({
//   container: "map",
//   style: "mapbox://styles/mapbox/streets-v12",
//   center: listing.geometry.coordinates,
//   zoom: 9,
// });

// const marker = new mapboxgl.Marker({ color: "red" })
//   .setLngLat(listing.geometry.coordinates)
//   .setPopup(
//     new mapboxgl.Popup({ offset: 25 }).setHTML(
//       `<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`
//     )
//   )
//   .addTo(map);

if (
  listing.geometry &&
  listing.geometry.coordinates &&
  listing.geometry.coordinates.length === 2
) {
  mapboxgl.accessToken = mapToken;

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates,
    zoom: 9,
  });

  new mapboxgl.Marker({ color: "red" })
    .setLngLat(listing.geometry.coordinates)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(
        `<h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`
      )
    )
    .addTo(map);
} else {
  document.getElementById("map").innerHTML =
    "<p style='color:red;'>No map location available</p>";
}
