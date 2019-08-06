import {bindActionCreators} from "redux";
import React from "react";
import {connect} from "react-redux";
import type {ChargePoint} from "../actions/chargePointPageActions";

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


const ChargePointCardComponent = (props: ChargePointCardComponentPropsType) =>
{
    return <div>{props.chargePoint.name}</div>
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