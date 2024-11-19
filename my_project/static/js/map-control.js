// Initialize the map
var map = L.map('map').setView([51.505, -0.09], 13); // Default location

// Set up the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

//***************Geocoder ************************** */

// Initialize the geocoder without adding to map (for programmatic usage)
var geocoder = L.Control.Geocoder.nominatim();

// Button click event
document.getElementById('geocode-button').addEventListener('click', function () {
    var address = document.getElementById('geocode-input').value;

    // Geocode the address using the Nominatim geocoder
    geocoder.geocode(address, function (results) {
        if (results && results.length > 0) {
            // Clear any existing markers
            map.eachLayer(function (layer) {
                if (layer instanceof L.Marker) {
                    map.removeLayer(layer);
                }
            });

            // Get the first result
            var bestMatch = results[0];

            // Create a marker for the best match
            var marker = L.marker(bestMatch.center).addTo(map);
            marker.bindPopup(bestMatch.name).openPopup();

            // Center the map on the result
            map.setView(bestMatch.center, 13);
        } else {
            alert("Location not found.");
        }
    });
});


//**************************Fetch Shops ********************/
// Marker group for shops
var markerData = [
    {
        "id": 1,
        "name": "Baker's Delight",
        "lat": 51.5074,
        "lng": -0.1278,
        "recipes": ["Sourdough Bread", "Chocolate Croissants", "Apple Pie"]
    },
    {
        "id": 2,
        "name": "Fresh Veggie Market",
        "lat": 51.5155,
        "lng": -0.1417,
        "recipes": ["Vegetable Stir-Fry", "Fresh Garden Salad", "Roasted Root Vegetables"]
    },
    {
        "id": 3,
        "name": "Fisherman's Wharf",
        "lat": 51.5033,
        "lng": -0.1196,
        "recipes": ["Grilled Salmon", "Fish Tacos", "Seafood Paella"]
    }
];

    // Marker layer group
    var markerLayer = L.layerGroup().addTo(map);

    // Function to filter shops within current map bounds and display them
    function searchShopsWithinBounds() {
        // Clear previous markers
        markerLayer.clearLayers();

        // Get current bounds
        var bounds = map.getBounds();

        // Loop through shop data and check if within bounds
        markerData.forEach(function(item) {
            var latLng = [item.lat, item.lng];

            // Check if the marker is inside the current bounds
            if (bounds.contains(latLng)) {
                // Create a marker for the shop
                var marker = L.marker(latLng);

                // Create popup content with name and recipes
                var popupContent = `<strong>${item.name}</strong><br>Recipes: <ul>`;
                item.recipes.forEach(function(recipe) {
                    popupContent += `<li>${recipe}</li>`;
                });
                popupContent += `</ul>`;

                marker.bindPopup(popupContent);

                // Add the marker to the layer
                marker.addTo(markerLayer);
            }
        });
    }

   // Search shops within bounds initially when the map loads
   //searchShopsWithinBounds();

   // Add an event listener to re-search shops when the map is moved or zoomed
   //map.on('moveend', function() {
   //    searchShopsWithinBounds();
   //});
