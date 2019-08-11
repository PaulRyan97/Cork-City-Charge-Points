/**
 * Created by Paul on 03/08/2019.
 */
// @flow
import React, { Component} from "react";
import StyleObject from "./Utils/StyleObject";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {theme} from "./theme";
import NavigationBarComponent from "./Navigation/components/NavigationBarComponent";
import HeaderBarComponent from "./Navigation/components/HeaderComponent";
import ChargePointPageComponent from "./ChargingPointPage/components/ChargePointPageComponent";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {readChargePointData} from "./ChargingPointPage/actions/chargePointPageActions";
import type {APP_TABS_TYPE} from "./Navigation/actions/navigationActions";
import {APP_TABS} from "./Navigation/actions/navigationActions";
import MapPageView from "./MapViewPage/components/MapViewPageComponent";

type AppComponentPropsType =
{
    //From Parent
    //From mapStateToProps
    currentTab: APP_TABS_TYPE,
    //From matchDispatchToProps
    readChargePointData: Function
    //Other
};

const appStyle = new StyleObject()
    .setBasics("100%", "100%", 0, 0 )
    .setPosition("absolute")
    .getStyle();

class App extends Component<AppComponentPropsType>{
    constructor(props)
    {
        super(props);
        this.props = props;
    }

    componentDidMount()
    {
        this.props.readChargePointData();
    }

    render(){
        return(
            <MuiThemeProvider theme={theme}>
                <div style={appStyle}>
                    {this.props.currentTab !== APP_TABS.MAP_VIEW ?
                        <HeaderBarComponent/> : null
                    }
                    {this.props.currentTab === APP_TABS.CHARGER_VIEW ?
                    <ChargePointPageComponent/> : null }
                    {this.props.currentTab === APP_TABS.MAP_VIEW ?
                    <MapPageView/> : null}
                    <NavigationBarComponent/>
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (store) =>
{
    return {
        currentTab: store.navigationState.currentTab
    }
};

const matchDispatchToProps = (dispatch) =>
{
    return bindActionCreators({
        readChargePointData: readChargePointData
    }, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(App);