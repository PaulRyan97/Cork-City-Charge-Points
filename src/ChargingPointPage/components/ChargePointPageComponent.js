import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import React from "react";
import type {ChargePoint} from "../actions/chargePointPageActions";
import ChargePointCardComponent from "./ChargePointCardComponent";
import StyleObject from "../../Utils/StyleObject";
import {HEADER_BAR_HEIGHT, NAV_BAR_HEIGHT, SMALL_PADDING} from "../../Constants/STYLE_CONSTANTS";

/**
 * Created by Paul on 05/08/2019.
 */
// @flow

type ChargePointPageComponentPropsType =
{
    //From Parent
    //From mapStateToProps
    chargePoints: Array<ChargePoint>,
    //From matchDispatchToProps
    //Other
};


const chargePointPageStyle = new StyleObject()
    .setHeight("calc(100% - " + (NAV_BAR_HEIGHT + HEADER_BAR_HEIGHT + (SMALL_PADDING * 2)) + "px)")
    .setOverflowY("auto")
    .setPaddingTop(SMALL_PADDING)
    .setPaddingBottom(SMALL_PADDING)
    .getStyle();


const ChargePointPageComponent = (props: ChargePointPageComponentPropsType) =>
{

    let chargePointCards = props.chargePoints.map((point: ChargePoint) =>
    {
        return <ChargePointCardComponent chargePoint={point}/>
    });

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