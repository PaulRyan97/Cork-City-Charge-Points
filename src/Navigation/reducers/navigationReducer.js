/**
 * Created by Paul on 05/08/2019.
 */
import {APP_TABS, NAVIGATION_ACTION_TYPES} from "../actions/navigationActions";
import {buildMultiActionReducer, Handler} from "../../Utils/MultiActionReducer";

// @flow
export type NavigationState =
{
    currentTab: APP_TABS
}

const defaultState =
{
    currentTab: APP_TABS.CHARGER_VIEW
};

export default buildMultiActionReducer(defaultState,
[
    new Handler(NAVIGATION_ACTION_TYPES.SWITCH_APP_TAB,(nextState, action) =>
    {
        nextState.currentTab = action.tab;
        return nextState;
    }, true),
]);