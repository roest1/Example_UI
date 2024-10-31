import React from "react";
import DeckGL from "@deck.gl/react";
import { HeatmapLayer } from "@deck.gl/aggregation-layers";
import { Map } from "react-map-gl/maplibre";

// Initial view state for the map
const INITIAL_VIEW_STATE = {
    longitude: -73.75,
    latitude: 40.73,
    zoom: 9,
    maxZoom: 16,
    pitch: 0,
    bearing: 0,
};

// Data URL for the heatmap
const DATA_URL =
    "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/screen-grid/uber-pickup-locations.json";

// Map style for the basemap
const MAP_STYLE =
    "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json";

// Define a custom color range
const COLOR_RANGE = [
    [0, 0, 255],    // Blue
    [0, 255, 255],  // Cyan
    [0, 255, 0],    // Green
    [255, 255, 0],  // Yellow
    [255, 0, 0],    // Red
];

// HeatMap2 Component
export default function HeatMap2({
    data = DATA_URL,
    intensity = 2,
    threshold = 0.05,
    radiusPixels = 40,
    mapStyle = MAP_STYLE,
}) {
    const layers = [
        new HeatmapLayer({
            data,
            id: "heatmap-layer2",
            pickable: false,
            getPosition: (d) => [d[0], d[1]],
            getWeight: (d) => d[2],
            radiusPixels,
            intensity,
            threshold,
            colorRange: COLOR_RANGE,
        }),
    ];

    return (
        <div className="map-container">
            <DeckGL
                initialViewState={INITIAL_VIEW_STATE}
                controller={true}
                layers={layers}
            >
                <Map reuseMaps mapStyle={mapStyle} />
            </DeckGL>
            {/* Legend */}
            <div className="map-legend">
                <h4>Emissions Severity</h4>
                <div className="legend-scale">
                    <ul className="legend-labels">
                        <li><span style={{ backgroundColor: 'rgb(0, 0, 255)' }}></span>Low</li>
                        <li><span style={{ backgroundColor: 'rgb(0, 255, 255)' }}></span>Moderate</li>
                        <li><span style={{ backgroundColor: 'rgb(0, 255, 0)' }}></span>Elevated</li>
                        <li><span style={{ backgroundColor: 'rgb(255, 255, 0)' }}></span>High</li>
                        <li><span style={{ backgroundColor: 'rgb(255, 0, 0)' }}></span>Severe</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
