import { useCallback, useEffect, useRef, useState } from 'react';

import L from 'leaflet';
import MarkerIcon from '../../../node_modules/leaflet/dist/images/marker-icon.png';
import MarkerShadow from '../../../node_modules/leaflet/dist/images/marker-shadow.png';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import {
  ButtonForm,
  FormBox,
  Header,
  HeaderForm,
  HeaderFormTitle,
} from './Map.styles';

type Cordinates = {
  lat: number;
  long: number;
  zoom: number;
};

const Map = () => {
  const [coordinate, setCoordinate] = useState<Cordinates>({
    lat: 0,
    long: 0,
    zoom: 0,
  });

  const latitudeRef = useRef<HTMLInputElement>(null);
  const longitudeRef = useRef<HTMLInputElement>(null);
  const zoomRef = useRef<HTMLInputElement>(null);

  const handleSaveData = useCallback(() => {
    setCoordinate({
      lat: +latitudeRef.current!.value,
      long: +longitudeRef.current!.value,
      zoom: +zoomRef.current!.value,
    });
  }, [setCoordinate]);

  console.log(coordinate);

  function ChangeView() {
    const map = useMap();

    map.setView([coordinate.lat, coordinate.long], coordinate.zoom);
    return null;
  }

  // const getLocation = () => {
  //   navigator.geolocation.getCurrentPosition(function (pos) {
  //     setCoordinate({
  //       lat: pos.coords.latitude,
  //       long: pos.coords.longitude,
  //       zoom: 13,
  //     });
  //   });
  // };

  // useEffect(() => {
  //   getLocation();
  //   handleSaveData();
  // }, [handleSaveData]);

  return (
    <div>
      <Header>
        <HeaderFormTitle>Ponto e Zoom iniciais</HeaderFormTitle>
        <FormBox>
          <HeaderForm method="get" action="#">
            <label htmlFor="latitude">Latitude: </label>
            <input
              type="text"
              id="latitude"
              name="latitude"
              ref={latitudeRef}
            />

            <label htmlFor="longitude">Longitude: </label>
            <input
              type="text"
              id="longitude"
              name="longitude"
              ref={longitudeRef}
            />
            <label htmlFor="zoom">Zoom: </label>
            <input type="text" id="zoom" name="zoom" ref={zoomRef} />
          </HeaderForm>

          <ButtonForm className="btn-submit" onClick={handleSaveData}>
            Salvar
          </ButtonForm>
        </FormBox>
      </Header>

      <MapContainer
        style={{
          height: 'calc(100vh - 120px)',
          width: '100vw',
        }}
        center={[coordinate.lat, coordinate.long]}
        zoom={coordinate.zoom}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ChangeView />

        {/* <Marker
          icon={
            new L.Icon({
              iconUrl: MarkerIcon.src,
              iconRetinaUrl: MarkerIcon.src,
              iconSize: [25, 41],
              iconAnchor: [12.5, 41],
              popupAnchor: [0, -41],
              shadowUrl: MarkerShadow.src,
              shadowSize: [41, 41],
            })
          }
          position={[-22.769445, -42.897108]}
        >
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
};

export default Map;
