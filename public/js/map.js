console.log("Map Token:", mapToken);

mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [77.2090, 28.6139],
  zoom: 9
});

// Add marker
new mapboxgl.Marker()
  .setLngLat([77.2090, 28.6139])
  .addTo(map);