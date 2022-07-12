declare const __reactInputOnChange: (event: React.ChangeEvent<HTMLInputElement>, stateAction: React.Dispatch<React.SetStateAction<any>>, transformer?: (textTargetValue: any) => any) => void;
export { __reactInputOnChange as reactInputOnChange };
interface ValidatorInterface {
    value: string | number | undefined;
    type: "email" | "name" | "number";
    message?: {
        success: string | 200;
        fail: string | 400;
    };
}
declare const __reactInputValidate: ({ value, type, message }: ValidatorInterface, onSuccess?: (message: string | 200 | undefined) => void, onFail?: (message: string | 400 | undefined) => void) => boolean;
export { __reactInputValidate as reactInputValidate };
