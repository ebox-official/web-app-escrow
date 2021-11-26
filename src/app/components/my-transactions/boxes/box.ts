import { Token } from "src/app/components/modals/token-selector/token";
import { BigNumber } from '@ethersproject/bignumber';

export interface BlockchainBox {
   passHashHash: string;
   recipient: string;
   requestToken: string;
   requestValue: BigNumber;
   sendToken: string;
   sendValue: BigNumber;
   sender: string;
   taken: boolean;
   timestamp: BigNumber;
}

export interface BlockchainBoxPrivacy {
    passHashHash: string;
    recipientHash: string;
    sendToken: string;
    sendValue: BigNumber;
    senderHash: string;
    taken: boolean;
    timestamp: BigNumber;
}

// AppBox is the result of runtime manipulation to BlockchainBox
export interface AppBox {
    mode: string; // "One-way" or "OTC trade"
    status: string; // "Pending" or "Pomplete"

    id: string;
    timestamp: string;
    isPrivate: boolean;

    sender: string;
    senderName?: string;
    recipient: string;
    recipientName?: string;
    passHashHash: string;

    sendTokenInfo: Token;
    sendValueWei: BigNumber;
    sendValueDecimal: string;

    requestTokenInfo?: Token;
    requestValueWei?: BigNumber;
    requestValueDecimal?: string;
}

export let ONE_WAY = "One-way";
export let OTC_TRADE = "OTC trade";
export let PENDING = "Pending";
export let COMPLETE = "Complete";
