// set up map
/////////////////////

const stadiumMap = L.map('stadium-map').setView([37.0902, -95.7129], 4);
L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution : '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>'
}).addTo(stadiumMap);




// add stadiums to map
//////////////////////
const yankeeStadium = L.marker([40.8296, -73.9262]).addTo(stadiumMap);
yankeeStadium.bindPopup(`
  <h1>Yankee Stadium</h1>
  <h3>3.5/5</h3>
  <img src="images/yankee-stadium.jpg" />
  <p><strong>The good:</strong> Historic, awe-striking. Feel the presence of Ruth, Gherig, and Mantle when you walk through the columns. </p>
  <p><strong>The bad:</strong> Subway after game, very concrete and closed in.</p>
`);

const fenwayPark = L.marker([42.3467, -71.0972]).addTo(stadiumMap);
fenwayPark.bindPopup(`
  <h1>Fenway Park</h1>
  <h3>5.0/5</h3>
  <p><strong>The good:</strong> The mecca of America's pastime. </p>
  <p><strong>The bad:</strong> No complaints. </p>
`);

const citiField = L.marker([40.7571, -73.8458]).addTo(stadiumMap);
citiField.bindPopup(`
  <h1>Citi Field</h1>
  <h3>3.8/5</h3>
  <p><strong>The good:</strong> Lorem ipsum dolor sit amet</p>
  <p><strong>The bad:</strong> Excepteur sint occaecat cupidatat non proident</p>
`);

const buschStadium = L.marker([38.6226, -90.1928]).addTo(stadiumMap);
buschStadium.bindPopup(`
  <h1>Busch Stadium</h1>
  <h3>4.0/5</h3>
  <p><strong>The good:</strong> Lorem ipsum dolor sit amet</p>
  <p><strong>The bad:</strong> Excepteur sint occaecat cupidatat non proident</p>
`);

const camdenYards = L.marker([39.2839, -76.6216]).addTo(stadiumMap);
camdenYards.bindPopup(`
  <h1>Oriole Park at Camden Yards</h1>
  <h3>4.2/5</h3>
  <p><strong>The good:</strong> Lorem ipsum dolor sit amet</p>
  <p><strong>The bad:</strong> Excepteur sint occaecat cupidatat non proident</p>
`);

const nationalsPark = L.marker([38.8730, -77.0074]).addTo(stadiumMap);
nationalsPark.bindPopup(`
  <h1>Nationals Park</h1>
  <h3>3.0/5</h3>
  <p><strong>The good:</strong> Lorem ipsum dolor sit amet</p>
  <p><strong>The bad:</strong> Excepteur sint occaecat cupidatat non proident</p>
`);

const tropicanaField = L.marker([27.7682, -82.6534]).addTo(stadiumMap);
tropicanaField.bindPopup(`
  <h1>Tropicana Field</h1>
  <h3>1.0/5</h3>
  <p><strong>The good:</strong> Lorem ipsum dolor sit amet</p>
  <p><strong>The bad:</strong> Excepteur sint occaecat cupidatat non proident</p>
`);

const greatAmerican = L.marker([39.0974, -84.5071]).addTo(stadiumMap);
greatAmerican.bindPopup(`
  <h1>Great American Ballpark</h1>
  <h3>3.2/5</h3>
  <p><strong>The good:</strong> Lorem ipsum dolor sit amet</p>
  <p><strong>The bad:</strong> Excepteur sint occaecat cupidatat non proident</p>
`);

const citizensBank = L.marker([39.9061, -75.1665]).addTo(stadiumMap);
citizensBank.bindPopup(`
  <h1>Citizens Bank Park</h1>
  <h3>4.2/5</h3>
  <p><strong>The good:</strong> Lorem ipsum dolor sit amet</p>
  <p><strong>The bad:</strong> Excepteur sint occaecat cupidatat non proident</p>
`);

