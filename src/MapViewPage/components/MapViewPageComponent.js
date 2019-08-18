/**
 * Created by Paul on 11/08/2019.
 */
// @flow
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import React from "react";
import StyleObject from "../../Utils/StyleObject";
import {NAV_BAR_HEIGHT, TRANSITION_SPEEDS} from "../../Constants/STYLE_CONSTANTS";
import {MAPS_API_KEY} from "../../Constants/COMMON_CONSTANTS";
import { Map, GoogleApiWrapper } from 'google-maps-react';
import type {APP_TABS_TYPE} from "../../Navigation/actions/navigationActions";
import {APP_TABS} from "../../Navigation/actions/navigationActions";


type MapViewPageComponentPropsType =
    {
        //From Parent
        currentTab: APP_TABS_TYPE
        //From mapStateToProps
        //From matchDispatchToProps
        //Other
    };

const mapStyle = new StyleObject()
    .setBasics("100%", "100%", 0 , 0)
    .getStyle();

const MapViewPageComponent = (props: MapViewPageComponentPropsType) =>
{

    let isCurrentTab = props.currentTab === APP_TABS.MAP_VIEW;

    let mapViewPageComponentStyle = new StyleObject()
        .setHeight("calc(100% - " + NAV_BAR_HEIGHT+ "px)")
        .setWidth("100%")
        .setLeft(isCurrentTab ? 0 : "-100%")
        .setOpacity(isCurrentTab ? 1 : 0)
        .setPosition("absolute")
        .setTransition("left", TRANSITION_SPEEDS.NORMAL)
        .setTransition("opacity", TRANSITION_SPEEDS.NORMAL)
        .setOverflowY("auto")
        .getStyle();

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