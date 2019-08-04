/**
 * Created by Paul on 03/08/2019.
 */
// @flow
import React, { Component} from "react";
import StyleObject from "./Utils/StyleObject";
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import {theme} from "./theme";
import NavigationBarComponent from "./Navigation/components/NavigationBarComponent";

type AppComponentPropsType =
{
    //From Parent
    //From mapStateToProps
    //From matchDispatchToProps
    //Other
};

const appStyle = new StyleObject()
    .setBasics("100%", "100%", 0, 0 )
    .setPosition("absolute")
    .getStyle();

class App extends Component<AppComponentPropsType>{
    render(){
        return(
            <MuiThemeProvider theme={theme}>
                <div style={appStyle}>
                <NavigationBarComponent/>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;