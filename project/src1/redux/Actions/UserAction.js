
function convertActionNameToType(actionName) {
    return actionName.replace(/([A-Z])/g, "_$1").toUpperCase();
}

export const actionsUser = new Proxy(
    {},
    {
        get: function (target, prop) {//prop="setFirstNameUser",target=undefined
            if (target[prop] === undefined) {
                debugger
                return function (args) {
                    return {
                        type: convertActionNameToType(prop),
                        payload: args
                    };
                };
            }
            else
                return target[prop]
        }
    }
)
