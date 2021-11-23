import { BigNumber } from "@ethersproject/bignumber";

export interface Token {
    address: string;
    name: string;
    symbol: string;
    decimals: string|number;
    thumb?: string;
    isBase?: boolean; 
    isCustom?: boolean;
    weiBalance?: BigNumber;
    weiAllowance?: BigNumber;
}
