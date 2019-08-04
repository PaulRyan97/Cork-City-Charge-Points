/**
 * Created by Paul on 04/08/2019.
 */
// @flow

class StyleObject
{
    style: Object;

    constructor()
    {

        this.style = {};
        this.style.fontFamily = "roboto";
    }

    getStyle()
    {
        return this.style;
    }
}

export default StyleObject;