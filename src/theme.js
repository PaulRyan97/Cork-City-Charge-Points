/**
 * Created by Paul on 04/08/2019.
 */
// @flow
import { createMuiTheme } from '@material-ui/core/styles';


export const aquaElectric = '#00796B';
export const grey = '#6B6B6B';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: aquaElectric,
        },
        secondary: {
            main: grey
        }
    }
});