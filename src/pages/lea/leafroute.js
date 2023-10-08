import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";
import truck from './icons/truck.png'

const Leafroute = () => {
  const map = useMap();
  let DefaultIcon = L.icon({
    iconUrl: truck,
    iconSize: [50, 50],
  });
  useEffect(() => {
    const marker1 = L.marker([13.0418, 80.2049], { icon: DefaultIcon }).addTo(map);
  
    function handleMapClick(e) {
      L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      L.Routing.control({
        waypoints: [L.latLng(13.0418, 80.2049), L.latLng(e.latlng.lat, e.latlng.lng)],
        lineOptions: {
          styles: [
            {
              color: "blue",
              weight: 4,
              opacity: 0.7,
            },
          ],
        },
        routeWhileDragging: false,
        geocoder: L.Control.Geocoder.nominatim(),
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: true,
      })
        .on("routesfound", function (e) {
          e.routes[0].coordinates.forEach((c, i) => {
            setTimeout(() => {
              marker1.setLatLng([c.lat, c.lng]);
            }, 1500 * i);
          });
        })
        .addTo(map);
    }
  
    map.on("click", handleMapClick);
  
    // Cleanup the event listener when the component unmounts
    return () => {
      map.off("click", handleMapClick);
    };
  }, [DefaultIcon, map]);
  return null;
};

export default Leafroute;