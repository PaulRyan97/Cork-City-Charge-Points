/**
 * Created by Paul on 04/08/2019.
 */
// @flow
import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import StyleObject from "../../Utils/StyleObject";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import {HEADER_BAR_HEIGHT} from "../../Constants/STYLE_CONSTANTS";

type HeaderBarComponentPropsType =
    {
        //From Parent
        //From mapStateToProps
        //From matchDispatchToProps
        //Other
    };

const headerBarStyle = new StyleObject()
    .setWidth("100%")
    .setPosition("sticky")
    .setDisplay("flex")
    .setBoxShadow("0px 2px 3px 1px rgba( 0, 0, 0, 0.1)")
    .setTop(0)
    .setHeight(HEADER_BAR_HEIGHT)
    .getStyle();

const titleStyle = new StyleObject()
    .setFontSize(26)
    .setMargin("auto")
    .getStyle();

const menuIconStyle = new StyleObject()
    .setPosition("absolute")
    .setMargin(2)
    .getStyle();

const HeaderBarComponent = (props: HeaderBarComponentPropsType) =>
{
    return (
        <div style={headerBarStyle}>
            <IconButton style={menuIconStyle} >
                <MenuIcon fontSize={"large"}/>
            </IconButton>
            <span style={titleStyle}>Charge Points</span>
        </div>
    );
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

export default connect(mapStateToProps, matchDispatchToProps)(HeaderBarComponent);