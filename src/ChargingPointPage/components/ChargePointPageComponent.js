import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import React from "react";
import type {ChargePoint} from "../actions/chargePointPageActions";
import ChargePointCardComponent from "./ChargePointCardComponent";

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



const ChargePointPageComponent = (props: ChargePointPageComponentPropsType) =>
{

    let chargePointCards = props.chargePoints.map((point: ChargePoint) =>
    {
        return <ChargePointCardComponent chargePoint={point}/>
    });

    return (
        <div>
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