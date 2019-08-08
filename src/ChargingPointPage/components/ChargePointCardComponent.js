import {bindActionCreators} from "redux";
import React from "react";
import {connect} from "react-redux";
import type {ChargePoint, Point, Socket} from "../actions/chargePointPageActions";
import StyleObject from "../../Utils/StyleObject";
import {NORMAL_PADDING} from "../../Constants/STYLE_CONSTANTS";
import EVStationIcon from "@material-ui/icons/EvStation";
import PlugIcon from "../../Resources/images/plugIcon.svg";

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
    .setMinHeight(200)
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
    .setMarginBottom(10)
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

const pointInfoContainerStyle = new StyleObject()
    .setDisplay("flex")
    .setWidth("60%")
    .setMarginBottom(15)
    .getStyle();

const pointsIconStyle = new StyleObject()
    .setMarginRight(50)
    .setDisplay("flex")
    .setAlignItems("center")
    .getStyle();

const socketsIconStyle = new StyleObject()
    .setMarginRight(50)
    .setDisplay("flex")
    .setAlignItems("center")
    .getStyle();

const socketsDetailsStyle = new StyleObject()
    .setMarginBottom(10)
    .getStyle();

const ChargePointCardComponent = (props: ChargePointCardComponentPropsType) =>
{
    let numSockets = 0;

    let socketsArray = [];

    props.chargePoint.points.forEach((point: Point) =>
    {
        socketsArray.push.apply(socketsArray, point.Sockets);
        numSockets = numSockets + point.Sockets.length;
    });

    let socketDetails = Object.values(socketsArray.reduce((object, socket: Socket) =>
    {
        let key = socket.type | socket.ChargeSpeed;
        if(!object[key])
        {
            object[key] = {...socket, count: 1};
        }
        else
        {
            object[key].count += 1;
        }
        return object;
    }, {}));

    let chargePointSummary = socketDetails.map((details, index) =>
    {
        let separator = index !== socketDetails.length - 1 ? ', ' : '';
        return <span>{details.count + " x " + details.ChargeSpeed + "kW " + details.type + separator}</span>
    });

    return <div style={chargePointCardStyle}>
        <div style={cardContentStyle}>
            <div style={nameStyle}><b>{props.chargePoint.name}</b></div>
            <div style={operatorStyle}>{props.chargePoint.operator}</div>
            <div style={mapsThumbnailStyle}></div>
            <div style={pointInfoContainerStyle}>
                <div style={pointsIconStyle}>
                <EVStationIcon style={{marginRight: 5}}/>
                {props.chargePoint.points.length}
                </div>
                <div style={socketsIconStyle}>
                <PlugIcon height={20} width={20} style={{marginRight: 5}}/>
                {numSockets}
                </div>
            </div>
            <div style={socketsDetailsStyle}>
                {chargePointSummary}
            </div>
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