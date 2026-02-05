
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

// ============================================
// IMPORTANT: Replace with your Google Maps API Key
// Get your API key at: https://console.cloud.google.com/google/maps-apis
// ============================================
const GOOGLE_MAPS_API_KEY = 'AIzaSyCOGbdu_4SDRXLD9JKViLRX-DEo3OlEMRw';

// Florida center coordinates and zoom level
const FLORIDA_CENTER = { lat: 27.6648, lng: -81.5158 };
const ZOOM_LEVEL = 7;

// Placeholder locations in Florida
const locations = [
    {
        id: 'location-a',
        name: 'Location A',
        city: 'Miami',
        position: { lat: 25.7617, lng: -80.1918 },
        description: 'Way Ahead Brews - Miami Location',
        address: '123 Ocean Drive, Miami, FL 33139'
    },
    {
        id: 'location-b',
        name: 'Location B',
        city: 'Orlando',
        position: { lat: 28.5383, lng: -81.3792 },
        description: 'Way Ahead Brews - Orlando Location',
        address: '456 Magic Ave, Orlando, FL 32801'
    },
    {
        id: 'location-c',
        name: 'Location C',
        city: 'Tallahassee',
        position: { lat: 30.4383, lng: -84.2807 },
        description: 'Way Ahead Brews - Tallahassee Location',
        address: '789 Capitol Blvd, Tallahassee, FL 32301'
    }
];

declare global {
    interface Window {
        google: typeof google;
        initMap: () => void;
    }
}

const GoogleMap: React.FC = () => {
    const mapRef = useRef<HTMLDivElement>(null);
    const [mapLoaded, setMapLoaded] = useState(false);
    const [mapError, setMapError] = useState<string | null>(null);
    const mapInstanceRef = useRef<google.maps.Map | null>(null);
    const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);
    const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

    useEffect(() => {
        // Check if API key is set
        if (GOOGLE_MAPS_API_KEY === 'YOUR_GOOGLE_MAPS_API_KEY_HERE') {
            setMapError('Please add your Google Maps API key to enable the map.');
            return;
        }

        // Load Google Maps script
        const loadGoogleMaps = () => {
            if (window.google && window.google.maps) {
                initializeMap();
                return;
            }

            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=marker&callback=initMap`;
            script.async = true;
            script.defer = true;

            window.initMap = initializeMap;

            script.onerror = () => {
                setMapError('Failed to load Google Maps. Please check your API key.');
            };

            document.head.appendChild(script);
        };

        const initializeMap = () => {
            if (!mapRef.current) return;

            try {
                // Create the map
                const map = new window.google.maps.Map(mapRef.current, {
                    center: FLORIDA_CENTER,
                    zoom: ZOOM_LEVEL,
                    mapId: 'way_ahead_map', // Required for AdvancedMarkerElement
                    disableDefaultUI: false,
                    zoomControl: true,
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: true,
                    styles: [
                        {
                            featureType: 'water',
                            elementType: 'geometry',
                            stylers: [{ color: '#78aefd' }]
                        },
                        {
                            featureType: 'landscape',
                            elementType: 'geometry',
                            stylers: [{ color: '#f5f5f5' }]
                        },
                        {
                            featureType: 'poi.park',
                            elementType: 'geometry',
                            stylers: [{ color: '#c5e8c5' }]
                        }
                    ]
                });

                mapInstanceRef.current = map;

                // Create InfoWindow
                const infoWindow = new window.google.maps.InfoWindow();
                infoWindowRef.current = infoWindow;

                // Create AdvancedMarkerElements for each location
                locations.forEach((location) => {
                    // Create custom marker content
                    const markerContent = document.createElement('div');
                    markerContent.className = 'custom-marker';
                    markerContent.innerHTML = `
                        <div style="
                            background: #005a31;
                            border: 3px solid #f5dd12;
                            border-radius: 50%;
                            width: 40px;
                            height: 40px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                            cursor: pointer;
                            transition: transform 0.2s;
                        ">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fdf9eb" stroke-width="2">
                                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg>
                        </div>
                        <div style="
                            background: #005a31;
                            color: #fdf9eb;
                            padding: 4px 8px;
                            border-radius: 4px;
                            font-size: 12px;
                            font-weight: bold;
                            margin-top: 4px;
                            text-align: center;
                            white-space: nowrap;
                        ">${location.name}</div>
                    `;

                    // Create AdvancedMarkerElement
                    const marker = new window.google.maps.marker.AdvancedMarkerElement({
                        map,
                        position: location.position,
                        content: markerContent,
                        title: location.name
                    });

                    // Add click listener for InfoWindow
                    marker.addListener('click', () => {
                        const infoContent = `
                            <div style="padding: 12px; max-width: 250px; font-family: system-ui, sans-serif;">
                                <h3 style="margin: 0 0 8px 0; color: #005a31; font-size: 16px; font-weight: bold;">
                                    ${location.name} - ${location.city}
                                </h3>
                                <p style="margin: 0 0 8px 0; color: #333; font-size: 14px;">
                                    ${location.description}
                                </p>
                                <p style="margin: 0; color: #666; font-size: 12px;">
                                    📍 ${location.address}
                                </p>
                            </div>
                        `;
                        infoWindow.setContent(infoContent);
                        infoWindow.open(map, marker);
                    });

                    markersRef.current.push(marker);
                });

                setMapLoaded(true);
            } catch (error) {
                console.error('Error initializing map:', error);
                setMapError('Failed to initialize the map.');
            }
        };

        loadGoogleMaps();

        // Cleanup
        return () => {
            markersRef.current.forEach(marker => {
                marker.map = null;
            });
            markersRef.current = [];
        };
    }, []);

    return (
        <section className="bg-[#fdf9eb] py-16 md:py-24">
            <div className="container mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#005a31]/10 border border-[#005a31]/20 text-[#005a31] text-sm font-medium tracking-wider uppercase mb-6">
                        <MapPin className="w-4 h-4" />
                        Find Us
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#005a31] tracking-tight mb-4">
                        Our <span className="text-[#ec1c24]">Locations</span>
                    </h2>
                    <p className="text-[#005a31]/70 text-lg max-w-2xl mx-auto">
                        Visit one of our locations across Florida to experience Way Ahead Brews in person.
                    </p>
                </motion.div>

                {/* Map Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#005a31]/20"
                >
                    {/* Error State */}
                    {mapError && (
                        <div 
                            className="flex flex-col items-center justify-center bg-[#005a31]/5"
                            style={{ height: '500px', width: '100%' }}
                        >
                            <MapPin className="w-16 h-16 text-[#005a31]/30 mb-4" />
                            <p className="text-[#005a31] font-medium text-center px-4">
                                {mapError}
                            </p>
                            <p className="text-[#005a31]/60 text-sm mt-2 text-center px-4">
                                Add your API key in <code className="bg-[#005a31]/10 px-2 py-1 rounded">components/GoogleMap.tsx</code>
                            </p>
                        </div>
                    )}

                    {/* Loading State */}
                    {!mapError && !mapLoaded && (
                        <div 
                            className="absolute inset-0 flex items-center justify-center bg-[#005a31]/5 z-10"
                            style={{ height: '500px' }}
                        >
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 border-4 border-[#005a31]/20 border-t-[#005a31] rounded-full animate-spin mb-4"></div>
                                <p className="text-[#005a31] font-medium">Loading map...</p>
                            </div>
                        </div>
                    )}

                    {/* Map Element */}
                    <div 
                        ref={mapRef}
                        style={{ 
                            height: '500px', 
                            width: '100%',
                            display: mapError ? 'none' : 'block'
                        }}
                    />
                </motion.div>

                {/* Location Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="grid md:grid-cols-3 gap-6 mt-8"
                >
                    {locations.map((location) => (
                        <div 
                            key={location.id}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-[#005a31]/10 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-[#005a31] rounded-full flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-[#fdf9eb]" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#005a31]">{location.name}</h3>
                                    <p className="text-sm text-[#005a31]/60">{location.city}</p>
                                </div>
                            </div>
                            <p className="text-[#005a31]/70 text-sm">{location.address}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default GoogleMap;
