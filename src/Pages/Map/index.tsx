import { useState } from 'react';
import MapGL, { Source } from 'react-map-gl';
import data from './data.json';

// import "https://api.mapbox.com/mapbox-gl-js/v2.0.0/mapbox-gl.css";\

const MAPBOX_TOKEN = "pk.eyJ1Ijoid2FuZ2NvZGUiLCJhIjoiY2tpbWx1ZHFzMGxvczJ6b2FwbHg4MG54biJ9.Lhmn_bHKkjnsT7wdU3zdFA"

const PageMap: React.FC = () => {

    const [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        zoom: 8
    });


    // const clusterLayer: any = {
    //     id: 'clusters',
    //     type: 'circle',
    //     source: 'earthquakes',
    //     // filter: ['has', 'point_count'],
    //     paint: {
    //         'circle-color': ['step', ['get', 'point_count'], '#51bbd6', 100, '#f1f075', 750, '#f28cb1'],
    //         'circle-radius': ['step', ['get', 'point_count'], 20, 100, 30, 750, 40]
    //     }
    // };

    return (

        <MapGL
            {...viewport}
            width="100vw"
            height="100vh"
            // mapStyle="mapbox://styles/mapbox/dark-v9"
            // onViewportChange={this._onViewportChange}
            onViewportChange={(viewport) => setViewport(viewport)}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            // interactiveLayerIds={[clusterLayer.id]}
            onLoad={e => console.log(e)}
        >
            <Source
                type="geojson"
                data={data as any}
                cluster={true}
                clusterMaxZoom={1}
                clusterRadius={50}
            >
            {/* <Layer
                id="point"
                type="circle"
                paint={{
                'circle-radius': 10,
                'circle-color': '#007cbf'
                }} /> */}
            </Source>
        </MapGL>

    )
}

export default PageMap;