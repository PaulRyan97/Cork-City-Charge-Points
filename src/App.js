/**
 * Created by Paul on 03/08/2019.
 */
// @flow
import React, { Component} from "react";
import StyleObject from "./Utils/StyleObject";

type AppComponentPropsType =
{
    //From Parent
    //From mapStateToProps
    //From matchDispatchToProps
    //Other
};

const testStyle = new StyleObject().getStyle();

class App extends Component<AppComponentPropsType>{
    render(){
        return(
            <div>
                <h1 style={testStyle}> Welcome </h1>
            </div>
        );
    }
}

export default App;