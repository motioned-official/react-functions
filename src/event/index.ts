const __reactInputOnChange = (event : React.ChangeEvent<HTMLInputElement>, stateAction : React.Dispatch<React.SetStateAction<any>>, transformer? : (textTargetValue : any) => any) => {
    if(transformer && typeof transformer === 'function') {
        stateAction(transformer(event.target.value));
    } else {
        stateAction(event.target.value);
    }
};

export {__reactInputOnChange as reactInputOnChange}

interface ValidatorInterface {
    value: string | number | undefined;
    type: "email" | "name" | "number";
    message?: {
        success: string | 200;
        fail: string | 400;
    }
}

const __reactInputValidate = ({value, type, message} : ValidatorInterface, onSuccess? : (message: string | 200 | undefined) => void, onFail? : (message: string | 400 | undefined) => void) => {
    if (type === "name") {
        if(!(value.toString().trim() || value.toString().length >= 2)) {
            if(onFail && typeof onFail === "function") {
                onFail(message.fail);
            }
            return false;
        }
    }
    else if (type === "email") {
        if(!(value.toString().includes("@") || value.toString().length >= 4)) {
            if(onFail && typeof onFail === 'function') {
                onFail(message.fail);
            }
            return false;
        }
    }
    else if (type === "number") {
        if(!Number(value) && value !== 0) {
            if(onFail && typeof onFail === 'function') {
                onFail(message.fail);
            }
            return false;
        }
    }
    else {
        if(onFail && typeof onFail === 'function') {
            onFail(message.fail);
        }
        return false; 
    }

    if(onSuccess && typeof onSuccess === 'function') {
        onSuccess(message.success);
    }
    return true;
}

export {__reactInputValidate as reactInputValidate}