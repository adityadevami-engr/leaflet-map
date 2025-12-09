// 1) Map + proper OSM attribution
const myMap = L.map('map').setView([23.6850, 90.3563], 7.3);

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const attribution =
  'Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>';

L.tileLayer(tileUrl, { attribution }).addTo(myMap);

// 2) REMAL best-track data ( new storeList from previous step)

// 3) Generate side list using date/time instead of name/address
function generateList() {
  const ul = document.querySelector('.list');
  ul.innerHTML = '';

  // sort by date + time
  const features = [...storeList].sort((a, b) =>
    (a.properties.date + a.properties.timeUTC)
      .localeCompare(b.properties.date + b.properties.timeUTC)
  );

  features.forEach((pt) => {
    const li = document.createElement('li');
    const div = document.createElement('div');
    const a = document.createElement('a');
    const p = document.createElement('p');

    a.addEventListener('click', () => {
      flyToStore(pt);
    });

    div.classList.add('shop-item');
    a.innerText = `${pt.properties.date} ${pt.properties.timeUTC} UTC`;
    a.href = '#';
    p.innerText =
      `CI: ${pt.properties.ciNumber}, ` +
      `Pressure: ${pt.properties.centralPressure_hPa} hPa, ` +
      `Wind: ${pt.properties.maxWind_kt} kt, ` +
      `Grade: ${pt.properties.grade}`;

    div.appendChild(a);
    div.appendChild(p);
    li.appendChild(div);
    ul.appendChild(li);
  });
}

generateList();

// 4) Popup content for each time step
function makePopupContent(pt) {
  const props = pt.properties;
  return `
    <div>
      <h4>${props.date} ${props.timeUTC} UTC</h4>
      <p>CI: ${props.ciNumber}</p>
      <p>Central pressure: ${props.centralPressure_hPa} hPa</p>
      <p>Max sustained wind: ${props.maxWind_kt} kt</p>
      <p>Pressure drop at centre: ${props.pressureDrop_hPa} hPa</p>
      <p>Grade: ${props.grade}</p>
      <p>Phase: ${props.phase}</p>
    </div>
  `;
}

function onEachFeature(feature, layer) {
  layer.bindPopup(makePopupContent(feature), {
    closeButton: false,
    offset: L.point(0, -8)
  });
}

// 5) Marker icon + layer
const myIcon = L.icon({
  iconUrl: 'cyclone icon.png',
  iconSize: [20, 30]
});

const shopsLayer = L.geoJSON(storeList, {
  onEachFeature: onEachFeature,
  pointToLayer: function (feature, latlng) {
    return L.marker(latlng, { icon: myIcon });
  }
}).addTo(myMap);

// --- District color logic ---
function districtStyle(feature) {
  if (feature.properties.severity === "most") {
    return {
      color: "#b30000",
      fillColor: "#ff1a1a",
      fillOpacity: 0.5,
      weight: 2
    };
  }

  return {
    color: "#cc7000",
    fillColor: "#ffb84d",
    fillOpacity: 0.4,
    weight: 1
  };
}

// --- Popup on districts ---
function districtPopup(feature, layer) {
  const sev = feature.properties.severity === "most"
    ? "Most affected district"
    : "Less affected district";

  layer.bindPopup(`<b>${feature.properties.name}</b><br>${sev}`);
}


// 6) Fly-to behaviour (unchanged, just renamed semantically)
function flyToStore(store) {
  const lat = store.geometry.coordinates[1];
  const lng = store.geometry.coordinates[0];

  myMap.flyTo([lat, lng], 8, { duration: 3 });

  setTimeout(() => {
    L.popup({ closeButton: false, offset: L.point(0, -8) })
      .setLatLng([lat, lng])
      .setContent(makePopupContent(store))
      .openOn(myMap);
  }, 3000);
}
