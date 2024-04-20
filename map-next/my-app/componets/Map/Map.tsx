"use client";

// START: Preserve spaces to avoid auto-sorting
import "leaflet/dist/leaflet.css";

import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";

import "leaflet-defaulticon-compatibility";
// END: Preserve spaces to avoid auto-sorting
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import classes from "@styles/map/_map.module.scss";
import { useEffect, useState, FC } from "react";
import type { Coords } from "@/types/mapTypes";
import type { Locale, Museum } from "@/types/museumTypes";
import L from "leaflet";
import { useTranslation } from "@/i18n/client";

type MuseumProps = {
  data: Museum[];
  locale: Locale;
};

const Map: FC<MuseumProps> = ({ data, locale }) => {
  const [coordinates, setCordinates] = useState<Coords>({
    latitude: null,
    longitude: null,
  });
  const { t } = useTranslation(locale, "translations");

  var myIcon = new L.Icon({
    iconUrl:
      "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl:
      "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((location) =>
        setCordinates({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        })
      );
    } else {
      /* geolocation IS NOT available */
    }
  }, []);

  return (
    <>
      {coordinates.latitude && coordinates.longitude ? (
        <MapContainer
          preferCanvas={true}
          center={[coordinates.latitude, coordinates.longitude]}
          zoom={11}
          scrollWheelZoom={true}
          className={classes.mapContainer}
          // style={{ height: "400px", width: "600px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker
            icon={myIcon}
            position={[coordinates.latitude, coordinates.longitude]}
          >
            <Popup>
              <i>{t("your_location")}</i>.
            </Popup>
          </Marker>
          {data &&
            data.map((museum, i) => {
              const { latitude, longitude } = museum.coordinates;
              if (!latitude || !longitude) return <></>;
              return (
                <Marker key={i} position={[latitude, longitude]}>
                  <Popup>
                    <h3>{museum.name[locale]}</h3>
                    <span>{museum.description[locale]}</span>
                  </Popup>
                </Marker>
              );
            })}
        </MapContainer>
      ) : (
        <>t</>
      )}
    </>
  );
};
export default Map;
