"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reactInputValidate = exports.reactInputOnChange = void 0;
const __reactInputOnChange = (event, stateAction, transformer) => {
    if (transformer && typeof transformer === 'function') {
        stateAction(transformer(event.target.value));
    }
    else {
        stateAction(event.target.value);
    }
};
exports.reactInputOnChange = __reactInputOnChange;
const __reactInputValidate = ({ value, type, message }, onSuccess, onFail) => {
    if (type === "name") {
        if (!(value.toString().trim() || value.toString().length >= 2)) {
            if (onFail && typeof onFail === "function") {
                onFail(message.fail);
            }
            return false;
        }
    }
    else if (type === "email") {
        if (!(value.toString().includes("@") || value.toString().length >= 4)) {
            if (onFail && typeof onFail === 'function') {
                onFail(message.fail);
            }
            return false;
        }
    }
    else if (type === "number") {
        if (!Number(value) && value !== 0) {
            if (onFail && typeof onFail === 'function') {
                onFail(message.fail);
            }
            return false;
        }
    }
    else {
        if (onFail && typeof onFail === 'function') {
            onFail(message.fail);
        }
        return false;
    }
    if (onSuccess && typeof onSuccess === 'function') {
        onSuccess(message.success);
    }
    return true;
};
exports.reactInputValidate = __reactInputValidate;
//# sourceMappingURL=index.js.map