import {bindActionCreators} from "redux";
import React from "react";
import {connect} from "react-redux";
import type {ChargePoint} from "../actions/chargePointPageActions";
import StyleObject from "../../Utils/StyleObject";
import {NORMAL_PADDING} from "../../Constants/STYLE_CONSTANTS";
import {Style} from "@material-ui/icons";

/**
 * Created by Paul on 05/08/2019.
 */
// @flow

type ChargePointCardComponentPropsType =
{
    //From Parent
    chargePoint: ChargePoint,
    //From mapStateToProps
    //From matchDispatchToProps
    //Other
};

const chargePointCardStyle = new StyleObject()
    .setHeight("30%")
    .setWidth("90%")
    .setMargin("auto")
    .setMarginBottom(NORMAL_PADDING)
    .setBorder("1px solid rgba(107,107,107, 0.2)")
    .setBoxShadow("0px 3px 5px 2px rgba( 0, 0, 0, 0.1)")
    .setBorderRadius(10)
    .setPosition("relative")
    .getStyle();

const nameStyle = new StyleObject()
    .setFontSize(20)
    .setWidth("60%")
    .setOverflow("auto")
    .setTextOverflow("ellipsis")
    .setWhiteSpace("nowrap")
    .setMarginBottom(15)
    .getStyle();

const cardContentStyle = new StyleObject()
    .setMarginTop(15)
    .setMarginLeft(15)
    .getStyle();

const operatorStyle = new StyleObject()
    .setFontSize(18)
    .getStyle();

const mapsThumbnailStyle = new StyleObject()
    .setWidth(100)
    .setHeight(100)
    .setRight(15)
    .setTop(15)
    .setPosition("absolute")
    .setBorder("1px solid rgba(107,107,107, 0.2)")
    .setBorderRadius(10)
    .getStyle();

const ChargePointCardComponent = (props: ChargePointCardComponentPropsType) =>
{
    return <div style={chargePointCardStyle}>
        <div style={cardContentStyle}>
            <div style={nameStyle}><b>{props.chargePoint.name}</b></div>
            <div style={operatorStyle}>{props.chargePoint.operator}</div>
            <div style={mapsThumbnailStyle}></div>
        </div>
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

export default connect(mapStateToProps, matchDispatchToProps)(ChargePointCardComponent);