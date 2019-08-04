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

type NavigationBarComponentPropsType =
{
    //From Parent
    //From mapStateToProps
    //From matchDispatchToProps
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
            value={1}
            style={bottomNavBarStyle}
            showLabels={true}
        >
            <BottomNavigationAction label={"Map View"} icon={<MapIcon/>}/>
            <BottomNavigationAction label={"Chargers"} icon={<ChargerIcon/>}/>
            <BottomNavigationAction label={"Favourites"} icon={<FavouriteIcon/>}/>
        </BottomNavigation>
    );
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

export default connect(mapStateToProps, matchDispatchToProps)(NavigationBarComponent);