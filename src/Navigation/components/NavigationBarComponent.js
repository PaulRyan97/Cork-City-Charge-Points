/**
 * Created by Paul on 04/08/2019.
 */
// @flow
import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {BottomNavigation} from "@material-ui/core";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MapIcon from "@material-ui/icons/Map";
import ChargerIcon from "@material-ui/icons/EvStation";
import FavouriteIcon from "@material-ui/icons/Favorite";
import StyleObject from "../../Utils/StyleObject";
import {APP_TABS, switchAppTab} from "../actions/navigationActions";
import type {APP_TABS_TYPE} from "../actions/navigationActions";

type NavigationBarComponentPropsType =
{
    //From Parent
    //From mapStateToProps
    currentTab: APP_TABS_TYPE,
    //From matchDispatchToProps
    switchAppTab: Function
    //Other
};

const bottomNavBarStyle = new StyleObject()
    .setWidth("100%")
    .setPosition("absolute")
    .setHeight(64)
    .setBoxShadow("0 2px 2px 2px rgba( 0, 0, 0, 0.2)")
    .setBottom(0)
    .getStyle();

const NavigationBarComponent = (props: NavigationBarComponentPropsType) =>
{
    return (
        <BottomNavigation
            value={props.currentTab}
            onChange={(event, value) =>
            {
                props.switchAppTab(value)
            }}
            style={bottomNavBarStyle}
            showLabels={true}
        >
            <BottomNavigationAction
                value={APP_TABS.MAP_VIEW}
                label={"Map View"}
                icon={<MapIcon/>}/>
            <BottomNavigationAction
                value={APP_TABS.CHARGER_VIEW}
                label={"Chargers"}
                icon={<ChargerIcon/>}/>
            <BottomNavigationAction
                value={APP_TABS.FAVOURITES_VIEW}
                label={"Favourites"}
                icon={<FavouriteIcon/>}/>
        </BottomNavigation>
    );
};


const mapStateToProps = (store) =>
{
    return {
        currentTab: store.navigationState.currentTab
    }
};

const matchDispatchToProps = (dispatch) =>
{
    return bindActionCreators({
        switchAppTab: switchAppTab
    }, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(NavigationBarComponent);