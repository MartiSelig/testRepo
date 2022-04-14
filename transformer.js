export function latLngToText(latLng, precision = 2) {
	const lat = latLng?.lat ?? latLng?.latitude;
	const lng = latLng?.lng ?? latLng?.longitude;
    return latLng && lat !== undefined && lng !== undefined ? `${lat.toFixed(precision)}°${evaluateLatLng(lat, 'lat')}, ${lng.toFixed(precision)}°${evaluateLatLng(lng, 'lng')}` : "";
}

export function placeToLatLng(place) {
    return place && place.latitude !== undefined && place.longitude !== undefined ? { lat: parseFloat(place.latitude), lng: parseFloat(place.longitude) } : place;
}

export function latLngToPlace(latLng) {
    return latLng && latLng.lat !== undefined && latLng.lng !== undefined ? { latitude: latLng.lat.toString(), longitude: latLng.lng.toString() } : latLng;
}

// function evaluateLatLng(val, type){
// 	if (val > 0) {
// 		if(type = 'lat'){
// 			return 'N';
// 		}
// 		else if(type = 'lng'){
// 			return 'E';
// 		}
// 		else{
// 			return '';
// 		}
// 	} else if (val < 0) {
// 		if(type = 'lat'){
// 			return 'S';
// 		}
// 		else if (type = 'lng'){
// 			return 'W';
// 		}
// 		else{
// 			return '';
// 		}
// 	} else {
// 		return '';
// 	}
// }

function evaluateLatLng(val, type){
	if (val > 0 && type === 'lat') {
		return 'N';
	}
	else if(val > 0 && type === 'lng'){
		return 'E';
	} 
	else if (val < 0 && type === 'lat'){
		return 'S';
	}
	else if (val < 0 && type === 'lng'){
		return 'W';
	}
	else {
		return '';
	}
}
