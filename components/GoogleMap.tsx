
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { GoogleMap as GoogleMapComponent, useJsApiLoader, InfoWindow, Marker } from '@react-google-maps/api';

// ============================================
// Replace with your Google Maps API Key
// Get your API key at: https://console.cloud.google.com/google/maps-apis
// ============================================
const GOOGLE_MAPS_API_KEY = 'AIzaSyDmqrhs2AAP0mtjwuuLk3Hvjca-vx3oGJg';

// Florida center coordinates and zoom level
const FLORIDA_CENTER = { lat: 27.6648, lng: -81.5158 };
const ZOOM_LEVEL = 7;
const MAP_CONTAINER_STYLE = { width: '100%', height: '500px' };

// Placeholder locations in Florida
const locations = [
    {
        id: 'location-a',
        name: 'Location A',
        city: 'Miami',
        position: { lat: 25.7617, lng: -80.1918 },
        description: 'Way Ahead Brews - Miami',
        address: '123 Ocean Drive, Miami, FL 33139'
    },
    {
        id: 'location-b',
        name: 'Location B',
        city: 'Orlando',
        position: { lat: 28.5383, lng: -81.3792 },
        description: 'Way Ahead Brews - Orlando',
        address: '456 Magic Ave, Orlando, FL 32801'
    }
];

const MapContent: React.FC = () => {
    const [selectedLocation, setSelectedLocation] = React.useState<typeof locations[0] | null>(null);

    return (
        <>
            <GoogleMapComponent
                mapContainerStyle={MAP_CONTAINER_STYLE}
                center={FLORIDA_CENTER}
                zoom={ZOOM_LEVEL}
                options={{
                    zoomControl: true,
                    mapTypeControl: false,
                    streetViewControl: false,
                    fullscreenControl: true
                }}
            >
                {locations.map((location) => (
                    <Marker
                        key={location.id}
                        position={location.position}
                        title={location.name}
                        onClick={() => setSelectedLocation(location)}
                    />
                ))}
                {selectedLocation && (
                    <InfoWindow
                        position={selectedLocation.position}
                        onCloseClick={() => setSelectedLocation(null)}
                    >
                        <div style={{ padding: '4px', minWidth: '200px', fontFamily: 'system-ui, sans-serif' }}>
                            <h3 style={{ margin: '0 0 8px 0', color: '#005a31', fontSize: '16px', fontWeight: 'bold' }}>
                                {selectedLocation.name} - {selectedLocation.city}
                            </h3>
                            <p style={{ margin: '0 0 8px 0', color: '#333', fontSize: '14px' }}>
                                {selectedLocation.description}
                            </p>
                            <p style={{ margin: 0, color: '#666', fontSize: '12px' }}>
                                📍 {selectedLocation.address}
                            </p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMapComponent>
        </>
    );
};

const GoogleMap: React.FC = () => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: GOOGLE_MAPS_API_KEY
    });

    return (
        <section className="bg-[#fdf9eb] py-16 md:py-24">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-black tracking-tight mb-4">
                        Find <span className="text-[#ec1c24]">Us</span>
                    </h2>
                    <p className="text-black text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        If you are located in the United States, shop online{' '}
                        <a href="#shop-section" className="text-[#ec1c24] font-semibold underline hover:text-[#ec1c24]/80 transition-colors">here</a>.
                    </p>
                    <p className="text-black text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-2">
                        If you are in Florida, find your nearest Way Ahead retailer below.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#005a31]/20"
                >
                    {!isLoaded && !loadError && (
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

                    {loadError && (
                        <div
                            className="flex flex-col items-center justify-center bg-[#005a31]/5"
                            style={{ height: '500px', width: '100%' }}
                        >
                            <MapPin className="w-16 h-16 text-[#005a31]/30 mb-4" />
                            <p className="text-[#005a31] font-medium text-center px-4">
                                Map could not load. Add your site URLs to the API key in Google Cloud Console.
                            </p>
                            <p className="text-[#005a31]/60 text-sm mt-2 text-center px-4 max-w-md">
                                Credentials → your key → Application restrictions → HTTP referrers. Add: <code className="bg-[#005a31]/10 px-1 rounded text-xs">http://localhost:3000/*</code> and <code className="bg-[#005a31]/10 px-1 rounded text-xs">https://dev.wayaheadbrews.com/*</code>
                            </p>
                        </div>
                    )}

                    {isLoaded && <MapContent />}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="grid md:grid-cols-2 gap-6 mt-8"
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
