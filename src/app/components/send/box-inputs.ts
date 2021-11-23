import { BigNumber } from "@ethersproject/bignumber";

export interface BoxInputs {
    mode: string;
    pass: string;
    recipient: string;
    sendToken: string;
    sendValueDecimal: string;
    requestToken?: string;
    requestValueDecimal?: string;
    isPrivate?: boolean;
}
