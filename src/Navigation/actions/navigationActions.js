/**
 * Created by Paul on 05/08/2019.
 */
// @flow
export const NAVIGATION_ACTION_TYPES = Object.freeze(
{
    SWITCH_APP_TAB: "SWITCH_APP_TAB"
});

export const APP_TABS =
{
    MAP_VIEW: "MAP_VIEW",
    CHARGER_VIEW: "CHARGER_VIEW",
    FAVOURITES_VIEW: "FAVOURITES_VIEW"
};

export type APP_TABS_TYPE = $Keys<typeof APP_TABS>;

export const switchAppTab = (tab: APP_TABS_TYPE) =>
{
    return {type: NAVIGATION_ACTION_TYPES.SWITCH_APP_TAB, tab: tab};
};