/**
 * Created by Paul on 05/08/2019.
 */
// @flow
import {buildMultiActionReducer, Handler} from "../../Utils/MultiActionReducer";
import {CHARGE_POINT_PAGE_ACTION_TYPES} from "../actions/chargePointPageActions";
import type {ChargePoint} from "../actions/chargePointPageActions";

export type ChargePointPageState =
{
    chargePoints: Array<ChargePoint>
}

const defaultState =
{
    chargePoints: []
};

export default buildMultiActionReducer(defaultState,
[
    new Handler(CHARGE_POINT_PAGE_ACTION_TYPES.SET_CHARGE_POINT_DATA,(nextState, action) =>
    {
        nextState.chargePoints = action.data;
        return nextState;
    }, true),
]);