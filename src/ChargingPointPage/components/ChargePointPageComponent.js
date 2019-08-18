import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import React from "react";
import type {ChargePoint} from "../actions/chargePointPageActions";
import ChargePointCardComponent from "./ChargePointCardComponent";
import StyleObject from "../../Utils/StyleObject";
import {HEADER_BAR_HEIGHT, NAV_BAR_HEIGHT, SMALL_PADDING, TRANSITION_SPEEDS} from "../../Constants/STYLE_CONSTANTS";
import type {APP_TABS_TYPE} from "../../Navigation/actions/navigationActions";
import {APP_TABS} from "../../Navigation/actions/navigationActions";

/**
 * Created by Paul on 05/08/2019.
 */
// @flow

type ChargePointPageComponentPropsType =
{
    //From Parent
    currentTab: APP_TABS_TYPE,
    //From mapStateToProps
    chargePoints: Array<ChargePoint>,
    //From matchDispatchToProps
    //Other
};

const ChargePointPageComponent = (props: ChargePointPageComponentPropsType) =>
{

    let isCurrentTab = props.currentTab === APP_TABS.CHARGER_VIEW;

    let chargePointCards = props.chargePoints.map((point: ChargePoint, index: number) =>
    {
        return <ChargePointCardComponent chargePoint={point} key={index}/>
    });

    let chargePointPageStyle = new StyleObject()
        .setHeight("calc(100% - " + (NAV_BAR_HEIGHT + HEADER_BAR_HEIGHT + (SMALL_PADDING * 2)) + "px)")
        .setWidth("100%")
        .setOverflowY("auto")
        .setLeft(isCurrentTab ? 0 : "100%")
        .setOpacity(isCurrentTab ? 1 : 0)
        .setPosition("absolute")
        .setTransition("left", TRANSITION_SPEEDS.NORMAL)
        .setTransition("opacity", TRANSITION_SPEEDS.NORMAL)
        .setPaddingTop(SMALL_PADDING)
        .setPaddingBottom(SMALL_PADDING)
        .getStyle();

    return (
        <div style={chargePointPageStyle}>
            {chargePointCards}
        </div>
    );
};


const mapStateToProps = (store) =>
{
    return {
        chargePoints: store.chargePointPageState.chargePoints
    }
};

const matchDispatchToProps = (dispatch) =>
{
    return bindActionCreators({
    }, dispatch)
};

export default connect(mapStateToProps, matchDispatchToProps)(ChargePointPageComponent);