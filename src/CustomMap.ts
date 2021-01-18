// Instructions to every other class on how
// they can be an argument to 'addMarker'
interface Mappable {
  location: {
    lat: number;
    lng: number
  }
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(markerType: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: markerType.location.lat,
        lng: markerType.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: "Hi there"
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
