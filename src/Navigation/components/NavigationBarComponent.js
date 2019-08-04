/**
 * Created by Paul on 04/08/2019.
 */
// @flow
import React from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

type NavigationBarComponentPropsType =
{
    //From Parent
    //From mapStateToProps
    //From matchDispatchToProps
    //Other
};

const NavigationBarComponent = (props: NavigationBarComponentPropsType) =>
{

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

export default connect(mapStateToProps, matchDispatchToProps)(NavigationBarComponent);