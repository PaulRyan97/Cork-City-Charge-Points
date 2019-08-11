/**
 * Created by Paul on 11/08/2019.
 */
// @flow
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import React from "react";
import StyleObject from "../../Utils/StyleObject";
import {NAV_BAR_HEIGHT} from "../../Constants/STYLE_CONSTANTS";
import {MAPS_API_KEY} from "../../Constants/COMMON_CONSTANTS";
import { Map, GoogleApiWrapper } from 'google-maps-react';


type MapViewPageComponentPropsType =
    {
        //From Parent
        //From mapStateToProps
        //From matchDispatchToProps
        //Other
    };


const mapViewPageComponentStyle = new StyleObject()
    .setHeight("calc(100% - " + NAV_BAR_HEIGHT+ "px)")
    .setOverflowY("auto")
    .getStyle();

const mapStyle = new StyleObject()
    .setBasics("100%", "100%", 0 , 0)
    .getStyle();

const MapViewPageComponent = (props: MapViewPageComponentPropsType) =>
{

    return <div style={mapViewPageComponentStyle}>
            <Map
                google={props.google}
                initialCenter={{lat: 51.8963441827223, lng: -8.47335349073475}}
                style={mapStyle}
                fullscreenControl={false}
                streetViewControl={false}
                zoomControl={false}
             />
            </div>

};


const mapStateToProps = (store) =>
{
    return {
    }
};

const matchDispatchToProps = (dispatch) =>
{
    return bindActionCreators({
    }, dispatch)
};

const MapPageView = GoogleApiWrapper({apiKey: MAPS_API_KEY})(MapViewPageComponent);

export default connect(mapStateToProps, matchDispatchToProps)(MapPageView);