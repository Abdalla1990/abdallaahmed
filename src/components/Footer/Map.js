import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { API } from "../../../server/mailKeys";
const AnyReactComponent = ({ text }) => <div className='marker'></div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 49.266,
      lng: -123.00336,
    },
    zoom: 15,
  };

  render() {
    return (
      <div className='map'>
        <p> Apt# 900, 2025 Willingdon Ave Burnaby, BC V5C 0J3, Canada</p>
        <div style={{ height: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: { API },
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}>
            <AnyReactComponent lat={59.955413} lng={30.337844} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default SimpleMap;
