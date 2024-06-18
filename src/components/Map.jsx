import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import "./Mapa.css";
import { Marker, Popup, MapContainer, TileLayer } from "react-leaflet";

function Map({data}) {
  console.log(data);
  const position = [41.223135, 1.536092];
/*   const position2 = [41.223135, 1.736092]; */

  useEffect(() => {}, [data]);

  return (
    <section className="listCards">
      <MapContainer
        center={position}
        zoom={10}
        scrollWheelZoom={false}
        className="mapa"
      >
        {data.map((foto, i) => (
          <Marker key={i} position={foto}>
            <Popup>
              {foto}. <br /> Easily customizable.
            </Popup>
          </Marker>
        ))}

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </MapContainer>
    </section>
  );
}

export default Map;
