/**
 * Created by Paul on 04/08/2019.
 */
import * as _ from 'lodash';

export const buildMultiActionReducer = (defaultState, handlers) =>
{
    return (oldState = defaultState, action) =>
    {
        let handler = _.find(handlers, (handler: Handler) => handler.handlesActionType(action.type));
        if (handler)
        {
            return handler.reducer(handler.requestPreCopy ? _.cloneDeep(oldState) : oldState, action);
        }
        return oldState;
    };
};

/**
 * Stores info for distributing actions to each sub reducer based on the type of the action
 * */
export class Handler
{
    constructor(types, reducer, requestPreCopy: boolean)
    {
        this.requestPreCopy = requestPreCopy === undefined ? true : requestPreCopy;
        this.types = types;
        this.reducer = reducer;
    }

    handlesActionType(actionType: String)
    {
        if (this.types instanceof Array)
        {
            return this.types.some((supportedType: String) => actionType === supportedType);
        } else
        {
            return this.types === actionType;
        }
    }
}
