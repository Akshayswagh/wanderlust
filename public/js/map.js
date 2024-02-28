mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12",
  center: listing.geometry.coordinates, // starting position [lng, lat]
  zoom: 9, // starting zoom
});

const marker1 = new mapboxgl.Marker({ color: "red" }).setLngLat(
  listing.geometry.coordinates
); // Listing.geometry.coordinates
new mapboxgl.Popup({ offset: popupOffsets, className: "my-class" })
  .setHTML(
    `<h4>${listing.title}</h4> <p>Exavt Loaction will br provided after booking</p>`
  )

  .addTo(map);
