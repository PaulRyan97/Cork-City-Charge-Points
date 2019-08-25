/**
 * Created by Paul on 05/08/2019.
 */

import ChargePointData from "../../Resources/chargePointData.json";

// @flow
export const CHARGE_POINT_PAGE_ACTION_TYPES = Object.freeze(
{
    SET_CHARGE_POINT_DATA: "SET_CHARGE_POINT_DATA"
});

export type ChargePoint =
{
    id: number,
    name: string,
    details: string,
    type: string,
    location: {longitude: number, latitude: number},
    operator: string,
    points: Array<Point>
}

export type Point =
{
    Sockets: Array<Socket>
}

export type Socket =
{
    type: string,
    ChargeSpeed: number,
}


export const setChargePointData = (chargePointData: Array<ChargePoint>) =>
{
    return {type: CHARGE_POINT_PAGE_ACTION_TYPES.SET_CHARGE_POINT_DATA, data: chargePointData}
};

export const readChargePointData = () =>
{
    return (dispatch) =>
    {
        let chargePointData: Array<JSON> = ChargePointData;

        let parsedData: Array<ChargePoint> = chargePointData.map((cp) =>
        {
            let chargePoint: ChargePoint =
            {
                id: cp.ID,
                name: cp.Name,
                details: cp.Details,
                type: cp.Type,
                location: {longitude: cp.Long, latitude: cp.Latitude},
                operator: cp.Operator,
                points: cp.Points
            };

            return chargePoint;
        });

        dispatch(setChargePointData(parsedData));

    }
};
