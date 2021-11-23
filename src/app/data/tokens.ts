import { Token } from "../components/modals/token-selector/token";

let ETHEREUM_MAINNET: Token[] = [
  {
    "name": "Ethereum",
    "symbol": "ETH",
    "thumb": "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
    "address": "0x0000000000000000000000000000000000000000",
    "decimals": 18,
    "isBase": true
  },
  {
    "name": "Ethbox Token",
    "symbol": "ebox",
    "thumb": "https://assets.coingecko.com/coins/images/14528/thumb/ethbox.PNG",
    "address": "0x33840024177a7daca3468912363bed8b425015c5",
    "decimals": 18
  },
  {
    "name": "USD Tether",
    "symbol": "usdt",
    "thumb": "https://assets.coingecko.com/coins/images/325/thumb/Tether-logo.png",
    "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
    "decimals": 6
  },
  {
    "name": "Uniswap",
    "symbol": "uni",
    "thumb": "https://assets.coingecko.com/coins/images/12504/thumb/uniswap-uni.png",
    "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
    "decimals": 18
  },
  {
    "name": "Chainlink",
    "symbol": "link",
    "thumb": "https://assets.coingecko.com/coins/images/877/thumb/chainlink-new-logo.png",
    "address": "0x514910771af9ca656af840dff83e8264ecf986ca",
    "decimals": 18
  },
  {
    "name": "USD Coin",
    "symbol": "usdc",
    "thumb": "https://assets.coingecko.com/coins/images/6319/thumb/USD_Coin_icon.png",
    "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    "decimals": 6
  },
  {
    "name": "Wrapped Bitcoin",
    "symbol": "wbtc",
    "thumb": "https://assets.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png",
    "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
    "decimals": 8
  },
  {
    "name": "Binance USD",
    "symbol": "busd",
    "thumb": "https://assets.coingecko.com/coins/images/9576/thumb/BUSD.png",
    "address": "0x4fabb145d64652a948d72533023f6e7a623c7c53",
    "decimals": 18
  },
  {
    "name": "OKB",
    "symbol": "okb",
    "thumb": "https://assets.coingecko.com/coins/images/4463/thumb/okb_token.png",
    "address": "0x75231f58b43240c9718dd58b4967c5114342a86c",
    "decimals": 18
  },
  {
    "name": "Crypto.com Coin",
    "symbol": "cro",
    "thumb": "https://assets.coingecko.com/coins/images/7310/thumb/cypto.png",
    "address": "0xa0b73e1ff0b80914ab6fe0444e65848c4c34450b",
    "decimals": 8
  },
  {
    "name": "Aave",
    "symbol": "aave",
    "thumb": "https://assets.coingecko.com/coins/images/12645/thumb/AAVE.png",
    "address": "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
    "decimals": 18
  },
  {
    "name": "cUSDC",
    "symbol": "cusdc",
    "thumb": "https://assets.coingecko.com/coins/images/9442/thumb/Compound_USDC.png",
    "address": "0x39aa39c021dfbae8fac545936693ac917d5e7563",
    "decimals": 8
  },
  {
    "name": "cETH",
    "symbol": "ceth",
    "thumb": "https://assets.coingecko.com/coins/images/10643/thumb/ceth2.JPG",
    "address": "0x4ddc2d193948926d02f9b1fe9e1daa0718270ed5",
    "decimals": 8
  },
  {
    "name": "FTX Token",
    "symbol": "ftt",
    "thumb": "https://assets.coingecko.com/coins/images/9026/thumb/F.png",
    "address": "0x50d1c9771902476076ecfc8b2a83ad6b9355a4c9",
    "decimals": 18
  },
  {
    "name": "Maker",
    "symbol": "mkr",
    "thumb": "https://assets.coingecko.com/coins/images/1364/thumb/Mark_Maker.png",
    "address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
    "decimals": 18
  },
  {
    "name": "Huobi Token",
    "symbol": "ht",
    "thumb": "https://assets.coingecko.com/coins/images/2822/thumb/huobi-token-logo.png",
    "address": "0x6f259637dcd74c767781e37bc6133cd6a68aa161",
    "decimals": 18
  },
  {
    "name": "Dai",
    "symbol": "dai",
    "thumb": "https://assets.coingecko.com/coins/images/9956/thumb/dai-multi-collateral-mcd.png",
    "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
    "decimals": 18
  },
  {
    "name": "cDAI",
    "symbol": "cdai",
    "thumb": "https://assets.coingecko.com/coins/images/9281/thumb/cDAI.png",
    "address": "0x5d3a536e4d6dbd6114cc1ead35777bab948e3643",
    "decimals": 8
  },
  {
    "name": "Compound",
    "symbol": "comp",
    "thumb": "https://assets.coingecko.com/coins/images/10775/thumb/COMP.png",
    "address": "0xc00e94cb662c3520282e6f5717214004a7f26888",
    "decimals": 18
  },
  {
    "name": "Chiliz",
    "symbol": "chz",
    "thumb": "https://assets.coingecko.com/coins/images/8834/thumb/Chiliz.png",
    "address": "0x3506424f91fd33084466f402d5d97f05f8e3b4af",
    "decimals": 18
  },
  {
    "name": "Synthetix Network Token",
    "symbol": "snx",
    "thumb": "https://assets.coingecko.com/coins/images/3406/thumb/SNX.png",
    "address": "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
    "decimals": 18
  },
  {
    "name": "Holo",
    "symbol": "hot",
    "thumb": "https://assets.coingecko.com/coins/images/3348/thumb/Holologo_Profile.png",
    "address": "0x6c6ee5e31d828de241282b9606c8e98ea48526e2",
    "decimals": 18
  },
  {
    "name": "Celsius Network",
    "symbol": "cel",
    "thumb": "https://assets.coingecko.com/coins/images/3263/thumb/CEL_logo.png",
    "address": "0xaaaebe6fe48e54f431b0c390cfaf0b017d09d42d",
    "decimals": 4
  },
  {
    "name": "LEO Token",
    "symbol": "leo",
    "thumb": "https://assets.coingecko.com/coins/images/8418/thumb/leo-token.png",
    "address": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3",
    "decimals": 18
  },
  {
    "name": "Enjin Coin",
    "symbol": "enj",
    "thumb": "https://assets.coingecko.com/coins/images/1102/thumb/enjin-coin-logo.png",
    "address": "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
    "decimals": 18
  },
  {
    "name": "NEXO",
    "symbol": "nexo",
    "thumb": "https://assets.coingecko.com/coins/images/3695/thumb/nexo.png",
    "address": "0xb62132e35a6c13ee1ee0f84dc5d40bad8d815206",
    "decimals": 18
  },
  {
    "name": "Polygon",
    "symbol": "matic",
    "thumb": "https://assets.coingecko.com/coins/images/4713/thumb/matic___polygon.jpg",
    "address": "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
    "decimals": 18
  },
  {
    "name": "Sushi",
    "symbol": "sushi",
    "thumb": "https://assets.coingecko.com/coins/images/12271/thumb/512x512_Logo_no_chop.png",
    "address": "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2",
    "decimals": 18
  },
  {
    "name": "TerraUSD",
    "symbol": "ust",
    "thumb": "https://assets.coingecko.com/coins/images/12681/thumb/UST.png",
    "address": "0xa47c8bf37f92abed4a126bda807a7b7498661acd",
    "decimals": 18
  },
  {
    "name": "The Graph",
    "symbol": "grt",
    "thumb": "https://assets.coingecko.com/coins/images/13397/thumb/Graph_Token.png",
    "address": "0xc944e90c64b2c07662a292be6244bdf05cda44a7",
    "decimals": 18
  },
  {
    "name": "Amp",
    "symbol": "amp",
    "thumb": "https://assets.coingecko.com/coins/images/12409/thumb/amp-200x200.png",
    "address": "0xff20817765cb7f73d4bde2e66e067e58d11095c2",
    "decimals": 18
  },
  {
    "name": "Fei Protocol",
    "symbol": "fei",
    "thumb": "https://assets.coingecko.com/coins/images/14570/thumb/ZqsF51Re_400x400.png",
    "address": "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
    "decimals": 18
  },
  {
    "name": "yearn.finance",
    "symbol": "yfi",
    "thumb": "https://assets.coingecko.com/coins/images/11849/thumb/yfi-192x192.png",
    "address": "0x0bc529c00c6401aef6d220be8c6ea1667f6ad93e",
    "decimals": 18
  },
  {
    "name": "Decentraland",
    "symbol": "mana",
    "thumb": "https://assets.coingecko.com/coins/images/878/thumb/decentraland-mana.png",
    "address": "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
    "decimals": 18
  },
  {
    "name": "Basic Attention Token",
    "symbol": "bat",
    "thumb": "https://assets.coingecko.com/coins/images/677/thumb/basic-attention-token.png",
    "address": "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
    "decimals": 18
  },
  {
    "name": "UMA",
    "symbol": "uma",
    "thumb": "https://assets.coingecko.com/coins/images/10951/thumb/UMA.png",
    "address": "0x04fa0d235c4abf4bcf4787af4cf447de572ef828",
    "decimals": 18
  },
  {
    "name": "Huobi BTC",
    "symbol": "hbtc",
    "thumb": "https://assets.coingecko.com/coins/images/12407/thumb/Unknown-5.png",
    "address": "0x0316eb71485b0ab14103307bf65a021042c6d380",
    "decimals": 18
  },
  {
    "name": "Liquity USD",
    "symbol": "lusd",
    "thumb": "https://assets.coingecko.com/coins/images/14666/thumb/Group_3.png",
    "address": "0x5f98805a4e8be255a32880fdec7f6728c6568ba0",
    "decimals": 18
  },
  {
    "name": "Waves",
    "symbol": "waves",
    "thumb": "https://assets.coingecko.com/coins/images/425/thumb/waves.png",
    "address": "0x1cf4592ebffd730c7dc92c1bdffdfc3b9efcf29a",
    "decimals": 18
  },
  {
    "name": "0x",
    "symbol": "zrx",
    "thumb": "https://assets.coingecko.com/coins/images/863/thumb/0x.png",
    "address": "0xe41d2489571d322189246dafa5ebde1f4699f498",
    "decimals": 18
  },
  {
    "name": "Reserve Rights Token",
    "symbol": "rsr",
    "thumb": "https://assets.coingecko.com/coins/images/8365/thumb/Reserve_Rights.png",
    "address": "0x8762db106b2c2a0bccb3a80d1ed41273552616e8",
    "decimals": 18
  },
  {
    "name": "Bancor Network Token",
    "symbol": "bnt",
    "thumb": "https://assets.coingecko.com/coins/images/736/thumb/bancor.png",
    "address": "0x1f573d6fb3f13d689ff844b4ce37794d79a7ff1c",
    "decimals": 18
  },
  {
    "name": "Paxos Standard",
    "symbol": "pax",
    "thumb": "https://assets.coingecko.com/coins/images/6013/thumb/paxos_standard.png",
    "address": "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
    "decimals": 18
  },
  {
    "name": "SwissBorg",
    "symbol": "chsb",
    "thumb": "https://assets.coingecko.com/coins/images/2117/thumb/YJUrRy7r_400x400.png",
    "address": "0xba9d4199fab4f26efe3551d490e3821486f135ba",
    "decimals": 8
  },
  {
    "name": "OMG Network",
    "symbol": "omg",
    "thumb": "https://assets.coingecko.com/coins/images/776/thumb/OMG_Network.jpg",
    "address": "0xd26114cd6ee289accf82350c8d8487fedb8a0c07",
    "decimals": 18
  },
  {
    "name": "Ankr",
    "symbol": "ankr",
    "thumb": "https://assets.coingecko.com/coins/images/4324/thumb/U85xTl2.png",
    "address": "0x8290333cef9e6d528dd5618fb97a76f268f3edd4",
    "decimals": 18
  },
  {
    "name": "KuCoin Token",
    "symbol": "kcs",
    "thumb": "https://assets.coingecko.com/coins/images/1047/thumb/sa9z79.png",
    "address": "0xf34960d9d60be18cc1d5afc1a6f012a723a28811",
    "decimals": 6
  },
  {
    "name": "Fantom",
    "symbol": "ftm",
    "thumb": "https://assets.coingecko.com/coins/images/4001/thumb/Fantom.png",
    "address": "0x4e15361fd6b4bb609fa63c81a2be19d873717870",
    "decimals": 18
  },
  {
    "name": "HUSD",
    "symbol": "husd",
    "thumb": "https://assets.coingecko.com/coins/images/9567/thumb/HUSD.jpg",
    "address": "0xdf574c24545e5ffecb9a659c229253d4111d87e1",
    "decimals": 8
  },
  {
    "name": "Bitmax Token",
    "symbol": "btmx",
    "thumb": "https://assets.coingecko.com/coins/images/5003/thumb/BTMX.jpg",
    "address": "0xcca0c9c383076649604ee31b20248bc04fdf61ca",
    "decimals": 18
  },
  {
    "name": "Pundi X [OLD]",
    "symbol": "npxs",
    "thumb": "https://assets.coingecko.com/coins/images/2170/thumb/pundi-x.png",
    "address": "0xa15c7ebe1f07caf6bff097d8a589fb8ac49ae5b3",
    "decimals": 18
  },
  {
    "name": "Curve DAO Token",
    "symbol": "crv",
    "thumb": "https://assets.coingecko.com/coins/images/12124/thumb/Curve.png",
    "address": "0xd533a949740bb3306d119cc777fa900ba034cd52",
    "decimals": 18
  },
  {
    "name": "Pundi X",
    "symbol": "pundix",
    "thumb": "https://assets.coingecko.com/coins/images/14571/thumb/vDyefsXq_400x400.jpg",
    "address": "0x0fd10b9899882a6f2fcb5c371e17e70fdee00c38",
    "decimals": 18
  },
  {
    "name": "xSUSHI",
    "symbol": "xsushi",
    "thumb": "https://assets.coingecko.com/coins/images/13725/thumb/xsushi.png",
    "address": "0x8798249c2e607446efb7ad49ec89dd1865ff4272",
    "decimals": 18
  },
  {
    "name": "1inch",
    "symbol": "1inch",
    "thumb": "https://assets.coingecko.com/coins/images/13469/thumb/1inch-token.png",
    "address": "0x111111111117dc0aa78b770fa6a738034120c302",
    "decimals": 18
  },
  {
    "name": "REN",
    "symbol": "ren",
    "thumb": "https://assets.coingecko.com/coins/images/3139/thumb/REN.png",
    "address": "0x408e41876cccdc0f92210600ef50372656052a38",
    "decimals": 18
  },
  {
    "name": "Livepeer",
    "symbol": "lpt",
    "thumb": "https://assets.coingecko.com/coins/images/7137/thumb/logo-circle-green.png",
    "address": "0x58b6a8a3302369daec383334672404ee733ab239",
    "decimals": 18
  },
  {
    "name": "Dent",
    "symbol": "dent",
    "thumb": "https://assets.coingecko.com/coins/images/1152/thumb/gLCEA2G.png",
    "address": "0x3597bfd533a99c9aa083587b074434e61eb0a258",
    "decimals": 8
  },
  {
    "name": "Voyager Token",
    "symbol": "vgx",
    "thumb": "https://assets.coingecko.com/coins/images/794/thumb/Voyager-vgx.png",
    "address": "0x5af2be193a6abca9c8817001f45744777db30756",
    "decimals": 8
  },
  {
    "name": "Bounce [old]",
    "symbol": "bot",
    "thumb": "https://assets.coingecko.com/coins/images/11984/thumb/photo_2020-10-19_09.17.57.jpeg",
    "address": "0x5beabaebb3146685dd74176f68a0721f91297d37",
    "decimals": 18
  },
  {
    "name": "Loopring",
    "symbol": "lrc",
    "thumb": "https://assets.coingecko.com/coins/images/913/thumb/LRC.png",
    "address": "0xbbbbca6a901c926f240b89eacb641d8aec7aeafd",
    "decimals": 18
  },
  {
    "name": "Nexus Mutual",
    "symbol": "nxm",
    "thumb": "https://assets.coingecko.com/coins/images/11810/thumb/nexus-mutual.jpg",
    "address": "0xd7c49cee7e9188cca6ad8ff264c1da2e69d4cf3b",
    "decimals": 18
  },
  {
    "name": "renBTC",
    "symbol": "renbtc",
    "thumb": "https://assets.coingecko.com/coins/images/11370/thumb/renBTC.png",
    "address": "0xeb4c2781e4eba804ce9a9803c67d0893436bb27d",
    "decimals": 8
  },
  {
    "name": "Status",
    "symbol": "SNT",
    "thumb": "https://assets.coingecko.com/coins/images/779/thumb/status.png",
    "address": "0x744d70fdbe2ba4cf95131626614a1763df805b9e",
    "decimals": 18
  },
  {
    "name": "Balancer",
    "symbol": "bal",
    "thumb": "https://assets.coingecko.com/coins/images/11683/thumb/Balancer.png",
    "address": "0xba100000625a3754423978a60c9317c58a424e3d",
    "decimals": 18
  },
  {
    "name": "Lido Staked Ether",
    "symbol": "steth",
    "thumb": "https://assets.coingecko.com/coins/images/13442/thumb/steth_logo.png",
    "address": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84",
    "decimals": 18
  },
  {
    "name": "Oxygen",
    "symbol": "oxy",
    "thumb": "https://assets.coingecko.com/coins/images/13509/thumb/8DjBZ79V_400x400.jpg",
    "address": "0x965697b4ef02f0de01384d0d4f9f782b1670c163",
    "decimals": 6
  },
  {
    "name": "cUSDT",
    "symbol": "cusdt",
    "thumb": "https://assets.coingecko.com/coins/images/11621/thumb/cUSDT.png",
    "address": "0xf650c3d88d12db855b8bf7d11be6c55a4e07dcc9",
    "decimals": 8
  },
  {
    "name": "Mirror Protocol",
    "symbol": "mir",
    "thumb": "https://assets.coingecko.com/coins/images/13295/thumb/mirror_logo_transparent.png",
    "address": "0x09a3ecafa817268f77be1283176b946c4ff2e608",
    "decimals": 18
  },
  {
    "name": "GateToken",
    "symbol": "gt",
    "thumb": "https://assets.coingecko.com/coins/images/8183/thumb/gt.png",
    "address": "0xe66747a101bff2dba3697199dcce5b743b454759",
    "decimals": 18
  },
  {
    "name": "Quant",
    "symbol": "qnt",
    "thumb": "https://assets.coingecko.com/coins/images/3370/thumb/5ZOu7brX_400x400.jpg",
    "address": "0x4a220e6096b25eadb88358cb44068a3248254675",
    "decimals": 18
  },
  {
    "name": "ZKSwap",
    "symbol": "zks",
    "thumb": "https://assets.coingecko.com/coins/images/13585/thumb/hfmvDpha_400x400.jpg",
    "address": "0xe4815ae53b124e7263f08dcdbbb757d41ed658c6",
    "decimals": 18
  },
  {
    "name": "Tribe",
    "symbol": "tribe",
    "thumb": "https://assets.coingecko.com/coins/images/14575/thumb/tribe.PNG",
    "address": "0xc7283b66eb1eb5fb86327f08e1b5816b0720212b",
    "decimals": 18
  },
  {
    "name": "Ocean Protocol",
    "symbol": "ocean",
    "thumb": "https://assets.coingecko.com/coins/images/3687/thumb/ocean-protocol-logo.jpg",
    "address": "0x967da4048cd07ab37855c090aaf366e4ce1b9f48",
    "decimals": 18
  },
  {
    "name": "Kyber Network Crystal Legacy",
    "symbol": "kncl",
    "thumb": "https://assets.coingecko.com/coins/images/947/thumb/logo-kncl.png",
    "address": "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
    "decimals": 18
  },
  {
    "name": "Axie Infinity",
    "symbol": "axs",
    "thumb": "https://assets.coingecko.com/coins/images/13029/thumb/axie_infinity_logo.png",
    "address": "0xf5d669627376ebd411e34b98f19c868c8aba5ada",
    "decimals": 18
  },
  {
    "name": "Band Protocol",
    "symbol": "band",
    "thumb": "https://assets.coingecko.com/coins/images/9545/thumb/band-protocol.png",
    "address": "0xba11d00c5f74255f56a5e366f4f77f5a186d7f55",
    "decimals": 18
  },
  {
    "name": "Reef Finance",
    "symbol": "reef",
    "thumb": "https://assets.coingecko.com/coins/images/13504/thumb/Group_10572.png",
    "address": "0xfe3e6a25e6b192a42a44ecddcd13796471735acf",
    "decimals": 18
  },
  {
    "name": "cUNI",
    "symbol": "cuni",
    "thumb": "https://assets.coingecko.com/coins/images/12696/thumb/compound-uni.png",
    "address": "0x35a18000230da775cac24873d00ff85bccded550",
    "decimals": 8
  },
  {
    "name": "NKN",
    "symbol": "nkn",
    "thumb": "https://assets.coingecko.com/coins/images/3375/thumb/nkn.png",
    "address": "0x5cf04716ba20127f1e2297addcf4b5035000c9eb",
    "decimals": 18
  },
  {
    "name": "Golem",
    "symbol": "glm",
    "thumb": "https://assets.coingecko.com/coins/images/542/thumb/Golem_Submark_Positive_RGB.png",
    "address": "0x7dd9c5cba05e151c895fde1cf355c9a1d5da6429",
    "decimals": 18
  },
  {
    "name": "Tokamak Network",
    "symbol": "ton",
    "thumb": "https://assets.coingecko.com/coins/images/12260/thumb/D919x5-s_400x400.png",
    "address": "0x2be5e8c109e2197d077d13a82daead6a9b3433c5",
    "decimals": 18
  },
  {
    "name": "StormX",
    "symbol": "stmx",
    "thumb": "https://assets.coingecko.com/coins/images/1369/thumb/StormX.png",
    "address": "0xbe9375c6a420d2eeb258962efb95551a5b722803",
    "decimals": 18
  },
  {
    "name": "DODO",
    "symbol": "dodo",
    "thumb": "https://assets.coingecko.com/coins/images/12651/thumb/dodo_logo.png",
    "address": "0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd",
    "decimals": 18
  },
  {
    "name": "Numeraire",
    "symbol": "nmr",
    "thumb": "https://assets.coingecko.com/coins/images/752/thumb/numeraire.png",
    "address": "0x1776e1f26f98b1a5df9cd347953a26dd3cb46671",
    "decimals": 18
  },
  {
    "name": "Origin Protocol",
    "symbol": "ogn",
    "thumb": "https://assets.coingecko.com/coins/images/3296/thumb/op.jpg",
    "address": "0x8207c1ffc5b6804f6024322ccf34f29c3541ae26",
    "decimals": 18
  },
  {
    "name": "Ampleforth",
    "symbol": "ampl",
    "thumb": "https://assets.coingecko.com/coins/images/4708/thumb/Ampleforth.png",
    "address": "0xd46ba6d942050d489dbd938a2c909a5d5039a161",
    "decimals": 9
  },
  {
    "name": "Telcoin",
    "symbol": "tel",
    "thumb": "https://assets.coingecko.com/coins/images/1899/thumb/tel.png",
    "address": "0x467bccd9d29f223bce8043b84e8c8b282827790f",
    "decimals": 2
  },
  {
    "name": "Alpha Finance",
    "symbol": "alpha",
    "thumb": "https://assets.coingecko.com/coins/images/12738/thumb/AlphaToken_256x256.png",
    "address": "0xa1faa113cbe53436df28ff0aee54275c13b40975",
    "decimals": 18
  },
  {
    "name": "SKALE",
    "symbol": "skl",
    "thumb": "https://assets.coingecko.com/coins/images/13245/thumb/SKALE_token_300x300.png",
    "address": "0x00c83aecc790e8a4453e5dd3b0b4b3680501a7a7",
    "decimals": 18
  },
  {
    "name": "Serum",
    "symbol": "srm",
    "thumb": "https://assets.coingecko.com/coins/images/11970/thumb/serum-logo.png",
    "address": "0x476c5e26a75bd202a9683ffd34359c0cc15be0ff",
    "decimals": 6
  },
  {
    "name": "RedFOX Labs",
    "symbol": "rfox",
    "thumb": "https://assets.coingecko.com/coins/images/12956/thumb/logo-200.png",
    "address": "0xa1d6df714f91debf4e0802a542e13067f31b8262",
    "decimals": 18
  },
  {
    "name": "TrueUSD",
    "symbol": "tusd",
    "thumb": "https://assets.coingecko.com/coins/images/3449/thumb/tusd.png",
    "address": "0x0000000000085d4780b73119b644ae5ecd22b376",
    "decimals": 18
  },
  {
    "name": "Orbs",
    "symbol": "orbs",
    "thumb": "https://assets.coingecko.com/coins/images/4630/thumb/Orbs.jpg",
    "address": "0xff56cc6b1e6ded347aa0b7676c85ab0b3d08b0fa",
    "decimals": 18
  },
  {
    "name": "FUNToken",
    "symbol": "fun",
    "thumb": "https://assets.coingecko.com/coins/images/761/thumb/funfair.png",
    "address": "0x419d0d8bdd9af5e606ae2232ed285aff190e711b",
    "decimals": 8
  },
  {
    "name": "Civic",
    "symbol": "cvc",
    "thumb": "https://assets.coingecko.com/coins/images/788/thumb/civic.png",
    "address": "0x41e5560054824ea6b0732e656e3ad64e20e94e45",
    "decimals": 8
  },
  {
    "name": "Alien Worlds",
    "symbol": "tlm",
    "thumb": "https://assets.coingecko.com/coins/images/14676/thumb/kY-C4o7RThfWrDQsLCAG4q4clZhBDDfJQVhWUEKxXAzyQYMj4Jmq1zmFwpRqxhAJFPOa0AsW_PTSshoPuMnXNwq3rU7Imp15QimXTjlXMx0nC088mt1rIwRs75GnLLugWjSllxgzvQ9YrP4tBgclK4_rb17hjnusGj_c0u2fx0AvVokjSNB-v2poTj0xT9BZRCbzRE3-lF1.jpg",
    "address": "0x888888848b652b3e3a0f34c96e00eec0f3a23f72",
    "decimals": 4
  },
  {
    "name": "SAND",
    "symbol": "sand",
    "thumb": "https://assets.coingecko.com/coins/images/12129/thumb/sandbox_logo.jpg",
    "address": "0x3845badade8e6dff049820680d1f14bd3903a5d0",
    "decimals": 18
  },
  {
    "name": "Wootrade Network",
    "symbol": "woo",
    "thumb": "https://assets.coingecko.com/coins/images/12921/thumb/w2UiemF__400x400.jpg",
    "address": "0x4691937a7508860f876c9c0a2a617e7d9e945d4b",
    "decimals": 18
  },
  {
    "name": "Swipe",
    "symbol": "sxp",
    "thumb": "https://assets.coingecko.com/coins/images/9368/thumb/swipe.png",
    "address": "0x8ce9137d39326ad0cd6491fb5cc0cba0e089b6a9",
    "decimals": 18
  },
  {
    "name": "sETH",
    "symbol": "seth",
    "thumb": "https://assets.coingecko.com/coins/images/8843/thumb/sETH.png",
    "address": "0x5e74c9036fb86bd7ecdcb084a0673efc32ea31cb",
    "decimals": 18
  }
];

let ETHEREUM_TESTNET: Token[] = [
  {
    "name": "Ethereum",
    "symbol": "ETH",
    "thumb": "https://assets.coingecko.com/coins/images/279/thumb/ethereum.png",
    "address": "0x0000000000000000000000000000000000000000",
    "decimals": 18,
    "isBase": true
  },
  {
    "name": "Test Token",
    "symbol": "AAA",
    "thumb": "assets/img/crash-test.png",
    "address": "0xB89f9673c46b126d7A0052D972cdB9C448f92D35",
    "decimals": 18
  },
  {
    "name": "Test Token",
    "symbol": "BBB",
    "thumb": "assets/img/crash-test.png",
    "address": "0x0b91f9d9657e8edc725a519BC9e9fB3C785815a0",
    "decimals": 18
  },
  {
    "name": "Test Token",
    "symbol": "CCC",
    "thumb": "assets/img/crash-test.png",
    "address": "0x4B73517Ae7Ac55B46b8B993A41842Af399fbfa25",
    "decimals": 18
  }
];

let BINANCE_MAINNET: Token[] = [
  {
    "name": "Binance Coin",
    "symbol": "BNB",
    "thumb": "https://v1exchange.pancakeswap.finance/images/coins/bnb.png",
    "address": "0x0000000000000000000000000000000000000000",
    "decimals": 18,
    "isBase": true
  },
  {
    "name": "Ethbox Token",
    "symbol": "ebox",
    "thumb": "https://assets.coingecko.com/coins/images/14528/thumb/ethbox.PNG",
    "address": "0x33840024177a7daca3468912363bed8b425015c5",
    "decimals": 18
  },
  {
    "name": "Wrapped BNB",
    "symbol": "WBNB",
    "thumb": "https://pancakeswap.finance/images/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png",
    "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    "decimals": 18
  },
  {
    "name": "BUSD Token",
    "symbol": "BUSD",
    "thumb": "https://pancakeswap.finance/images/tokens/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56.png",
    "address": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    "decimals": 18
  },
  {
    "name": "SafeMoon",
    "symbol": "SAFEMOON",
    "thumb": "https://pancakeswap.finance/images/tokens/0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3.png",
    "address": "0x8076C74C5e3F5852037F31Ff0093Eeb8c8ADd8D3",
    "decimals": 9
  },
  {
    "name": "Tether USD",
    "symbol": "USDT",
    "thumb": "https://pancakeswap.finance/images/tokens/0x55d398326f99059fF775485246999027B3197955.png",
    "address": "0x55d398326f99059fF775485246999027B3197955",
    "decimals": 18
  },
  {
    "name": "BELT Token",
    "symbol": "BELT",
    "thumb": "https://pancakeswap.finance/images/tokens/0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f.png",
    "address": "0xE0e514c71282b6f4e823703a39374Cf58dc3eA4f",
    "decimals": 18
  },
  {
    "name": "Ethereum Token",
    "symbol": "ETH",
    "thumb": "https://pancakeswap.finance/images/tokens/0x2170Ed0880ac9A755fd29B2688956BD959F933F8.png",
    "address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    "decimals": 18
  },
  {
    "name": "Bunny Token",
    "symbol": "BUNNY",
    "thumb": "https://pancakeswap.finance/images/tokens/0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51.png",
    "address": "0xC9849E6fdB743d08fAeE3E34dd2D1bc69EA11a51",
    "decimals": 18
  },
  {
    "name": "BTCB Token",
    "symbol": "BTCB",
    "thumb": "https://pancakeswap.finance/images/tokens/0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c.png",
    "address": "0x7130d2A12B9BCbFAe4f2634d864A1Ee1Ce3Ead9c",
    "decimals": 18
  },
  {
    "name": "USD Coin",
    "symbol": "USDC",
    "thumb": "https://pancakeswap.finance/images/tokens/0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d.png",
    "address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    "decimals": 18
  },
  {
    "name": "Dai Token",
    "symbol": "DAI",
    "thumb": "https://pancakeswap.finance/images/tokens/0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3.png",
    "address": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
    "decimals": 18
  },
  {
    "name": "Polkadot Token",
    "symbol": "DOT",
    "thumb": "https://pancakeswap.finance/images/tokens/0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402.png",
    "address": "0x7083609fCE4d1d8Dc0C979AAb8c869Ea2C873402",
    "decimals": 18
  },
  {
    "name": "AUTOv2",
    "symbol": "AUTO",
    "thumb": "https://pancakeswap.finance/images/tokens/0xa184088a740c695E156F91f5cC086a06bb78b827.png",
    "address": "0xa184088a740c695E156F91f5cC086a06bb78b827",
    "decimals": 18
  },
  {
    "name": "VAI Stablecoin",
    "symbol": "VAI",
    "thumb": "https://pancakeswap.finance/images/tokens/0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7.png",
    "address": "0x4BD17003473389A42DAF6a0a729f6Fdb328BbBd7",
    "decimals": 18
  },
  {
    "name": "Uniswap",
    "symbol": "UNI",
    "thumb": "https://pancakeswap.finance/images/tokens/0xBf5140A22578168FD562DCcF235E5D43A02ce9B1.png",
    "address": "0xBf5140A22578168FD562DCcF235E5D43A02ce9B1",
    "decimals": 18
  },
  {
    "name": "Wrapped UST Token",
    "symbol": "UST",
    "thumb": "https://pancakeswap.finance/images/tokens/0x23396cF899Ca06c4472205fC903bDB4de249D6fC.png",
    "address": "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
    "decimals": 18
  },
  {
    "name": "Cardano Token",
    "symbol": "ADA",
    "thumb": "https://pancakeswap.finance/images/tokens/0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47.png",
    "address": "0x3EE2200Efb3400fAbB9AacF31297cBdD1d435D47",
    "decimals": 18
  },
  {
    "name": "Ellipsis",
    "symbol": "EPS",
    "thumb": "https://pancakeswap.finance/images/tokens/0xA7f552078dcC247C2684336020c03648500C6d9F.png",
    "address": "0xA7f552078dcC247C2684336020c03648500C6d9F",
    "decimals": 18
  },
  {
    "name": "ChainLink Token",
    "symbol": "LINK",
    "thumb": "https://pancakeswap.finance/images/tokens/0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD.png",
    "address": "0xF8A0BF9cF54Bb92F17374d9e9A321E6a111a51bD",
    "decimals": 18
  },
  {
    "name": "Helmet.insure Governance Token",
    "symbol": "Helmet",
    "thumb": "https://pancakeswap.finance/images/tokens/0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8.png",
    "address": "0x948d2a81086A075b3130BAc19e4c6DEe1D2E3fE8",
    "decimals": 18
  },
  {
    "name": "AlphaToken",
    "symbol": "ALPHA",
    "thumb": "https://pancakeswap.finance/images/tokens/0xa1faa113cbE53436Df28FF0aEe54275c13B40975.png",
    "address": "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
    "decimals": 18
  },
  {
    "name": "XRP Token",
    "symbol": "XRP",
    "thumb": "https://pancakeswap.finance/images/tokens/0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE.png",
    "address": "0x1D2F0da169ceB9fC7B3144628dB156f3F6c60dBE",
    "decimals": 18
  },
  {
    "name": "ElonGate",
    "symbol": "ElonGate",
    "thumb": "https://pancakeswap.finance/images/tokens/0x2A9718defF471f3Bb91FA0ECEAB14154F150a385.png",
    "address": "0x2A9718defF471f3Bb91FA0ECEAB14154F150a385",
    "decimals": 9
  },
  {
    "name": "Band Protocol Token",
    "symbol": "BAND",
    "thumb": "https://pancakeswap.finance/images/tokens/0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18.png",
    "address": "0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18",
    "decimals": 18
  },
  {
    "name": "Mobox",
    "symbol": "MBOX",
    "thumb": "https://pancakeswap.finance/images/tokens/0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377.png",
    "address": "0x3203c9E46cA618C8C1cE5dC67e7e9D75f5da2377",
    "decimals": 18
  },
  {
    "name": "Binance Beacon ETH",
    "symbol": "BETH",
    "thumb": "https://pancakeswap.finance/images/tokens/0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B.png",
    "address": "0x250632378E573c6Be1AC2f97Fcdf00515d0Aa91B",
    "decimals": 18
  },
  {
    "name": "SafePal Token",
    "symbol": "SFP",
    "thumb": "https://pancakeswap.finance/images/tokens/0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb.png",
    "address": "0xD41FDb03Ba84762dD66a0af1a6C8540FF1ba5dfb",
    "decimals": 18
  },
  {
    "name": "Venus",
    "symbol": "XVS",
    "thumb": "https://pancakeswap.finance/images/tokens/0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63.png",
    "address": "0xcF6BB5389c92Bdda8a3747Ddb454cB7a64626C63",
    "decimals": 18
  },
  {
    "name": "Swipe",
    "symbol": "SXP",
    "thumb": "https://pancakeswap.finance/images/tokens/0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A.png",
    "address": "0x47BEAd2563dCBf3bF2c9407fEa4dC236fAbA485A",
    "decimals": 18
  },
  {
    "name": "Wault Finance",
    "symbol": "WAULT",
    "thumb": "https://pancakeswap.finance/images/tokens/0x6Ff2d9e5891a7a7c554b80e0D1B791483C78BcE9.png",
    "address": "0x6Ff2d9e5891a7a7c554b80e0D1B791483C78BcE9",
    "decimals": 18
  },
  {
    "name": "BGOV Token",
    "symbol": "BGOV",
    "thumb": "https://pancakeswap.finance/images/tokens/0xf8E026dC4C0860771f691EcFFBbdfe2fa51c77CF.png",
    "address": "0xf8E026dC4C0860771f691EcFFBbdfe2fa51c77CF",
    "decimals": 18
  },
  {
    "name": "AlpacaToken",
    "symbol": "ALPACA",
    "thumb": "https://pancakeswap.finance/images/tokens/0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F.png",
    "address": "0x8F0528cE5eF7B51152A59745bEfDD91D97091d2F",
    "decimals": 18
  },
  {
    "name": "Compound Coin",
    "symbol": "COMP",
    "thumb": "https://pancakeswap.finance/images/tokens/0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8.png",
    "address": "0x52CE071Bd9b1C4B00A0b92D298c512478CaD67e8",
    "decimals": 18
  },
  {
    "name": "Trust Wallet",
    "symbol": "TWT",
    "thumb": "https://pancakeswap.finance/images/tokens/0x4B0F1812e5Df2A09796481Ff14017e6005508003.png",
    "address": "0x4B0F1812e5Df2A09796481Ff14017e6005508003",
    "decimals": 18
  },
  {
    "name": "Woonkly Power",
    "symbol": "WOOP",
    "thumb": "https://pancakeswap.finance/images/tokens/0x8b303d5BbfBbf46F1a4d9741E491e06986894e18.png",
    "address": "0x8b303d5BbfBbf46F1a4d9741E491e06986894e18",
    "decimals": 18
  },
  {
    "name": "SushiToken",
    "symbol": "SUSHI",
    "thumb": "https://pancakeswap.finance/images/tokens/0x947950BcC74888a40Ffa2593C5798F11Fc9124C4.png",
    "address": "0x947950BcC74888a40Ffa2593C5798F11Fc9124C4",
    "decimals": 18
  },
  {
    "name": "Nerve",
    "symbol": "NRV",
    "thumb": "https://pancakeswap.finance/images/tokens/0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096.png",
    "address": "0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096",
    "decimals": 18
  },
  {
    "name": "Badger Sett Badger",
    "symbol": "bBADGER",
    "thumb": "https://pancakeswap.finance/images/tokens/0x1F7216fdB338247512Ec99715587bb97BBf96eae.png",
    "address": "0x1F7216fdB338247512Ec99715587bb97BBf96eae",
    "decimals": 18
  },
  {
    "name": "SafeMars",
    "symbol": "SAFEMARS",
    "thumb": "https://pancakeswap.finance/images/tokens/0x3aD9594151886Ce8538C1ff615EFa2385a8C3A88.png",
    "address": "0x3aD9594151886Ce8538C1ff615EFa2385a8C3A88",
    "decimals": 9
  },
  {
    "name": "DODO bird",
    "symbol": "DODO",
    "thumb": "https://pancakeswap.finance/images/tokens/0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2.png",
    "address": "0x67ee3Cb086F8a16f34beE3ca72FAD36F7Db929e2",
    "decimals": 18
  },
  {
    "name": "Litentry",
    "symbol": "LIT",
    "thumb": "https://pancakeswap.finance/images/tokens/0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723.png",
    "address": "0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723",
    "decimals": 18
  },
  {
    "name": "Reef.finance",
    "symbol": "REEF",
    "thumb": "https://pancakeswap.finance/images/tokens/0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e.png",
    "address": "0xF21768cCBC73Ea5B6fd3C687208a7c2def2d966e",
    "decimals": 18
  },
  {
    "name": "TokenPocket Token",
    "symbol": "TPT",
    "thumb": "https://pancakeswap.finance/images/tokens/0xECa41281c24451168a37211F0bc2b8645AF45092.png",
    "address": "0xECa41281c24451168a37211F0bc2b8645AF45092",
    "decimals": 4
  },
  {
    "name": "Wrapped SOTE",
    "symbol": "wSOTE",
    "thumb": "https://pancakeswap.finance/images/tokens/0x541E619858737031A1244A5d0Cd47E5ef480342c.png",
    "address": "0x541E619858737031A1244A5d0Cd47E5ef480342c",
    "decimals": 18
  },
  {
    "name": "Bella Protocol",
    "symbol": "BEL",
    "thumb": "https://pancakeswap.finance/images/tokens/0x8443f091997f06a61670B735ED92734F5628692F.png",
    "address": "0x8443f091997f06a61670B735ED92734F5628692F",
    "decimals": 18
  },
  {
    "name": "bDollar",
    "symbol": "BDO",
    "thumb": "https://pancakeswap.finance/images/tokens/0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454.png",
    "address": "0x190b589cf9Fb8DDEabBFeae36a813FFb2A702454",
    "decimals": 18
  },
  {
    "name": "Goose Golden Egg",
    "symbol": "EGG",
    "thumb": "https://pancakeswap.finance/images/tokens/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6.png",
    "address": "0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6",
    "decimals": 18
  },
  {
    "name": "Berry Tributes",
    "symbol": "BRY",
    "thumb": "https://pancakeswap.finance/images/tokens/0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830.png",
    "address": "0xf859Bf77cBe8699013d6Dbc7C2b926Aaf307F830",
    "decimals": 18
  },
  {
    "name": "Zilliqa",
    "symbol": "ZIL",
    "thumb": "https://pancakeswap.finance/images/tokens/0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787.png",
    "address": "0xb86AbCb37C3A4B64f74f59301AFF131a1BEcC787",
    "decimals": 12
  },
  {
    "name": "Fuel Token",
    "symbol": "Fuel",
    "thumb": "https://pancakeswap.finance/images/tokens/0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A.png",
    "address": "0x2090c8295769791ab7A3CF1CC6e0AA19F35e441A",
    "decimals": 18
  },
  {
    "name": "Tokocrypto Token",
    "symbol": "TKO",
    "thumb": "https://pancakeswap.finance/images/tokens/0x9f589e3eabe42ebC94A44727b3f3531C0c877809.png",
    "address": "0x9f589e3eabe42ebC94A44727b3f3531C0c877809",
    "decimals": 18
  },
  {
    "name": "Switcheo Token",
    "symbol": "SWTH",
    "thumb": "https://pancakeswap.finance/images/tokens/0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C.png",
    "address": "0x250b211EE44459dAd5Cd3bCa803dD6a7EcB5d46C",
    "decimals": 8
  },
  {
    "name": "BSCX",
    "symbol": "BSCX",
    "thumb": "https://pancakeswap.finance/images/tokens/0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587.png",
    "address": "0x5Ac52EE5b2a633895292Ff6d8A89bB9190451587",
    "decimals": 18
  },
  {
    "name": "SafeGalaxy",
    "symbol": "SAFEGALAXY",
    "thumb": "https://pancakeswap.finance/images/tokens/0x6b51231c43B1604815313801dB5E9E614914d6e4.png",
    "address": "0x6b51231c43B1604815313801dB5E9E614914d6e4",
    "decimals": 9
  },
  {
    "name": "StandardBTCHashrateToken",
    "symbol": "BTCST",
    "thumb": "https://pancakeswap.finance/images/tokens/0x78650B139471520656b9E7aA7A5e9276814a38e9.png",
    "address": "0x78650B139471520656b9E7aA7A5e9276814a38e9",
    "decimals": 17
  },
  {
    "name": "Injective Protocol",
    "symbol": "INJ",
    "thumb": "https://pancakeswap.finance/images/tokens/0xa2B726B1145A4773F68593CF171187d8EBe4d495.png",
    "address": "0xa2B726B1145A4773F68593CF171187d8EBe4d495",
    "decimals": 18
  },
  {
    "name": "Eleven.finance",
    "symbol": "ELE",
    "thumb": "https://pancakeswap.finance/images/tokens/0xAcD7B3D9c10e97d0efA418903C0c7669E702E4C0.png",
    "address": "0xAcD7B3D9c10e97d0efA418903C0c7669E702E4C0",
    "decimals": 18
  },
  {
    "name": "IoTeX Network",
    "symbol": "IOTX",
    "thumb": "https://pancakeswap.finance/images/tokens/0x9678E42ceBEb63F23197D726B29b1CB20d0064E5.png",
    "address": "0x9678E42ceBEb63F23197D726B29b1CB20d0064E5",
    "decimals": 18
  },
  {
    "name": "Linear Token",
    "symbol": "LINA",
    "thumb": "https://pancakeswap.finance/images/tokens/0x762539b45A1dCcE3D36d080F74d1AED37844b878.png",
    "address": "0x762539b45A1dCcE3D36d080F74d1AED37844b878",
    "decimals": 18
  },
  {
    "name": "Nominex",
    "symbol": "NMX",
    "thumb": "https://pancakeswap.finance/images/tokens/0xd32d01A43c869EdcD1117C640fBDcfCFD97d9d65.png",
    "address": "0xd32d01A43c869EdcD1117C640fBDcfCFD97d9d65",
    "decimals": 18
  },
  {
    "name": "SafeStar",
    "symbol": "SAFESTAR",
    "thumb": "https://pancakeswap.finance/images/tokens/0x3C00F8FCc8791fa78DAA4A480095Ec7D475781e2.png",
    "address": "0x3C00F8FCc8791fa78DAA4A480095Ec7D475781e2",
    "decimals": 9
  },
  {
    "name": "τBitcoin",
    "symbol": "τBTC",
    "thumb": "https://pancakeswap.finance/images/tokens/0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c.png",
    "address": "0x2cD1075682b0FCCaADd0Ca629e138E64015Ba11c",
    "decimals": 9
  },
  {
    "name": "dego.finance",
    "symbol": "DEGO",
    "thumb": "https://pancakeswap.finance/images/tokens/0x3FdA9383A84C05eC8f7630Fe10AdF1fAC13241CC.png",
    "address": "0x3FdA9383A84C05eC8f7630Fe10AdF1fAC13241CC",
    "decimals": 18
  },
  {
    "name": "OPEN Governance Token",
    "symbol": "bOPEN",
    "thumb": "https://pancakeswap.finance/images/tokens/0xF35262a9d427F96d2437379eF090db986eaE5d42.png",
    "address": "0xF35262a9d427F96d2437379eF090db986eaE5d42",
    "decimals": 18
  },
  {
    "name": "Cosmos Token",
    "symbol": "ATOM",
    "thumb": "https://pancakeswap.finance/images/tokens/0x0Eb3a705fc54725037CC9e008bDede697f62F335.png",
    "address": "0x0Eb3a705fc54725037CC9e008bDede697f62F335",
    "decimals": 18
  },
  {
    "name": "FOX",
    "symbol": "FOX",
    "thumb": "https://pancakeswap.finance/images/tokens/0xFAd8E46123D7b4e77496491769C167FF894d2ACB.png",
    "address": "0xFAd8E46123D7b4e77496491769C167FF894d2ACB",
    "decimals": 9
  },
  {
    "name": "beefy.finance",
    "symbol": "BIFI",
    "thumb": "https://pancakeswap.finance/images/tokens/0xCa3F508B8e4Dd382eE878A314789373D80A5190A.png",
    "address": "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
    "decimals": 18
  },
  {
    "name": "Badger Sett Digg",
    "symbol": "bDIGG",
    "thumb": "https://pancakeswap.finance/images/tokens/0x5986D5c77c65e5801a5cAa4fAE80089f870A71dA.png",
    "address": "0x5986D5c77c65e5801a5cAa4fAE80089f870A71dA",
    "decimals": 18
  },
  {
    "name": "ALICE",
    "symbol": "ALICE",
    "thumb": "https://pancakeswap.finance/images/tokens/0xAC51066d7bEC65Dc4589368da368b212745d63E8.png",
    "address": "0xAC51066d7bEC65Dc4589368da368b212745d63E8",
    "decimals": 6
  },
  {
    "name": "Standard on xDai on BSC",
    "symbol": "xMARK",
    "thumb": "https://pancakeswap.finance/images/tokens/0x26A5dFab467d4f58fB266648CAe769503CEC9580.png",
    "address": "0x26A5dFab467d4f58fB266648CAe769503CEC9580",
    "decimals": 9
  },
  {
    "name": "SWINGBY token",
    "symbol": "SWINGBY",
    "thumb": "https://pancakeswap.finance/images/tokens/0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739.png",
    "address": "0x71DE20e0C4616E7fcBfDD3f875d568492cBE4739",
    "decimals": 18
  },
  {
    "name": "Nuls",
    "symbol": "NULS",
    "thumb": "https://pancakeswap.finance/images/tokens/0x8CD6e29d3686d24d3C2018CEe54621eA0f89313B.png",
    "address": "0x8CD6e29d3686d24d3C2018CEe54621eA0f89313B",
    "decimals": 8
  },
  {
    "name": "Bogged Finance",
    "symbol": "BOG",
    "thumb": "https://pancakeswap.finance/images/tokens/0xD7B729ef857Aa773f47D37088A1181bB3fbF0099.png",
    "address": "0xD7B729ef857Aa773f47D37088A1181bB3fbF0099",
    "decimals": 18
  },
  {
    "name": "RAMP DEFI",
    "symbol": "RAMP",
    "thumb": "https://pancakeswap.finance/images/tokens/0x8519EA49c997f50cefFa444d240fB655e89248Aa.png",
    "address": "0x8519EA49c997f50cefFa444d240fB655e89248Aa",
    "decimals": 18
  },
  {
    "name": "Frontier Token",
    "symbol": "FRONT",
    "thumb": "https://pancakeswap.finance/images/tokens/0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b.png",
    "address": "0x928e55daB735aa8260AF3cEDadA18B5f70C72f1b",
    "decimals": 18
  },
  {
    "name": "IceToken",
    "symbol": "ICE",
    "thumb": "https://pancakeswap.finance/images/tokens/0xf16e81dce15B08F326220742020379B855B87DF9.png",
    "address": "0xf16e81dce15B08F326220742020379B855B87DF9",
    "decimals": 18
  },
  {
    "name": "Multiplier",
    "symbol": "bMXX",
    "thumb": "https://pancakeswap.finance/images/tokens/0x4131b87F74415190425ccD873048C708F8005823.png",
    "address": "0x4131b87F74415190425ccD873048C708F8005823",
    "decimals": 18
  },
  {
    "name": "Sheesha Finance",
    "symbol": "SHEESHA",
    "thumb": "https://pancakeswap.finance/images/tokens/0x232FB065D9d24c34708eeDbF03724f2e95ABE768.png",
    "address": "0x232FB065D9d24c34708eeDbF03724f2e95ABE768",
    "decimals": 18
  },
  {
    "name": "UNFI",
    "symbol": "UNFI",
    "thumb": "https://pancakeswap.finance/images/tokens/0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B.png",
    "address": "0x728C5baC3C3e370E372Fc4671f9ef6916b814d8B",
    "decimals": 18
  },
  {
    "name": "The Force Token",
    "symbol": "FOR",
    "thumb": "https://pancakeswap.finance/images/tokens/0x658A109C5900BC6d2357c87549B651670E5b0539.png",
    "address": "0x658A109C5900BC6d2357c87549B651670E5b0539",
    "decimals": 18
  },
  {
    "name": "BitcoinAsset",
    "symbol": "BTA",
    "thumb": "https://pancakeswap.finance/images/tokens/0xAd9787017e82f6368BbE4893b475CaadA2258564.png",
    "address": "0xAd9787017e82f6368BbE4893b475CaadA2258564",
    "decimals": 18
  },
  {
    "name": "Moon Token",
    "symbol": "MOONTOKEN",
    "thumb": "https://pancakeswap.finance/images/tokens/0x81E4d494b85A24a58a6BA45c9B418b32a4E039de.png",
    "address": "0x81E4d494b85A24a58a6BA45c9B418b32a4E039de",
    "decimals": 18
  },
  {
    "name": "EOS Token",
    "symbol": "EOS",
    "thumb": "https://pancakeswap.finance/images/tokens/0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6.png",
    "address": "0x56b6fB708fC5732DEC1Afc8D8556423A2EDcCbD6",
    "decimals": 18
  },
  {
    "name": "Hakka Finance on xDai on BSC",
    "symbol": "HAKKA",
    "thumb": "https://pancakeswap.finance/images/tokens/0x1D1eb8E8293222e1a29d2C0E4cE6C0Acfd89AaaC.png",
    "address": "0x1D1eb8E8293222e1a29d2C0E4cE6C0Acfd89AaaC",
    "decimals": 18
  },
  {
    "name": "yearn.finance",
    "symbol": "YFI",
    "thumb": "https://pancakeswap.finance/images/tokens/0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e.png",
    "address": "0x88f1A5ae2A3BF98AEAF342D26B30a79438c9142e",
    "decimals": 18
  },
  {
    "name": "pTokens BTC",
    "symbol": "pBTC",
    "thumb": "https://pancakeswap.finance/images/tokens/0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C.png",
    "address": "0xeD28A457A5A76596ac48d87C0f577020F6Ea1c4C",
    "decimals": 18
  },
  {
    "name": "Cyclone Protocol",
    "symbol": "CYC",
    "thumb": "https://pancakeswap.finance/images/tokens/0x810EE35443639348aDbbC467b33310d2AB43c168.png",
    "address": "0x810EE35443639348aDbbC467b33310d2AB43c168",
    "decimals": 18
  },
  {
    "name": "DFuture Token",
    "symbol": "DFT",
    "thumb": "https://pancakeswap.finance/images/tokens/0x42712dF5009c20fee340B245b510c0395896cF6e.png",
    "address": "0x42712dF5009c20fee340B245b510c0395896cF6e",
    "decimals": 18
  },
  {
    "name": "SafeBTC",
    "symbol": "SAFEBTC",
    "thumb": "https://pancakeswap.finance/images/tokens/0x380624A4a7e69dB1cA07deEcF764025FC224D056.png",
    "address": "0x380624A4a7e69dB1cA07deEcF764025FC224D056",
    "decimals": 9
  },
  {
    "name": "AllianceBlock Token",
    "symbol": "bALBT",
    "thumb": "https://pancakeswap.finance/images/tokens/0x72fAa679E1008Ad8382959FF48E392042A8b06f7.png",
    "address": "0x72fAa679E1008Ad8382959FF48E392042A8b06f7",
    "decimals": 18
  },
  {
    "name": "yieldwatch",
    "symbol": "WATCH",
    "thumb": "https://pancakeswap.finance/images/tokens/0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0.png",
    "address": "0x7A9f28EB62C791422Aa23CeAE1dA9C847cBeC9b0",
    "decimals": 18
  },
  {
    "name": "Euler.Tools",
    "symbol": "EULER",
    "thumb": "https://pancakeswap.finance/images/tokens/0x3920123482070C1a2dff73AaD695c60e7c6F6862.png",
    "address": "0x3920123482070C1a2dff73AaD695c60e7c6F6862",
    "decimals": 18
  },
  {
    "name": "Zeppelin.dao",
    "symbol": "ZEP",
    "thumb": "https://pancakeswap.finance/images/tokens/0x2E291e1c9f85a86d0C58Ae15621aaC005a8b2EAD.png",
    "address": "0x2E291e1c9f85a86d0C58Ae15621aaC005a8b2EAD",
    "decimals": 9
  },
  {
    "name": "Tixl Token",
    "symbol": "TXL",
    "thumb": "https://pancakeswap.finance/images/tokens/0x1FFD0b47127fdd4097E54521C9E2c7f0D66AafC5.png",
    "address": "0x1FFD0b47127fdd4097E54521C9E2c7f0D66AafC5",
    "decimals": 18
  },
  {
    "name": "LTO Network",
    "symbol": "LTO",
    "thumb": "https://pancakeswap.finance/images/tokens/0x857B222Fc79e1cBBf8Ca5f78CB133d1b7CF34BBd.png",
    "address": "0x857B222Fc79e1cBBf8Ca5f78CB133d1b7CF34BBd",
    "decimals": 18
  },
  {
    "name": "UniTrade",
    "symbol": "TRADE",
    "thumb": "https://pancakeswap.finance/images/tokens/0x7af173F350D916358AF3e218Bdf2178494Beb748.png",
    "address": "0x7af173F350D916358AF3e218Bdf2178494Beb748",
    "decimals": 18
  },
  {
    "name": "DeXe",
    "symbol": "DEXE",
    "thumb": "https://pancakeswap.finance/images/tokens/0x039cB485212f996A9DBb85A9a75d898F94d38dA6.png",
    "address": "0x039cB485212f996A9DBb85A9a75d898F94d38dA6",
    "decimals": 18
  },
  {
    "name": "pTokens CGG",
    "symbol": "CGG",
    "thumb": "https://pancakeswap.finance/images/tokens/0x1613957159E9B0ac6c80e824F7Eea748a32a0AE2.png",
    "address": "0x1613957159E9B0ac6c80e824F7Eea748a32a0AE2",
    "decimals": 18
  },
  {
    "name": "BoringDAO Token",
    "symbol": "BOR",
    "thumb": "https://pancakeswap.finance/images/tokens/0x92D7756c60dcfD4c689290E8A9F4d263b3b32241.png",
    "address": "0x92D7756c60dcfD4c689290E8A9F4d263b3b32241",
    "decimals": 18
  },
  {
    "name": "Exeedme",
    "symbol": "XED",
    "thumb": "https://pancakeswap.finance/images/tokens/0x5621b5A3f4a8008c4CCDd1b942B121c8B1944F1f.png",
    "address": "0x5621b5A3f4a8008c4CCDd1b942B121c8B1944F1f",
    "decimals": 18
  }
];

let BINANCE_TESTNET: Token[] = [
  {
    "name": "Binance Coin",
    "symbol": "BNB",
    "thumb": "https://v1exchange.pancakeswap.finance/images/coins/bnb.png",
    "address": "0x0000000000000000000000000000000000000000",
    "decimals": 18,
    "isBase": true
  },
  {
    "name": "Test Token",
    "symbol": "AAA",
    "thumb": "assets/img/crash-test.png",
    "address": "0xbF2EBD4b347732F96C95f2D3116A34095baB3F90",
    "decimals": 18
  },
  {
    "name": "Test Token",
    "symbol": "BBB",
    "thumb": "assets/img/crash-test.png",
    "address": "0x6b0b8E503696076AAB140C10c689f22DC15FF87D",
    "decimals": 18
  },
  {
    "name": "Test Token",
    "symbol": "CCC",
    "thumb": "assets/img/crash-test.png",
    "address": "0x69f90E517C21E3117e1535fA2092dC1f3633F560",
    "decimals": 18
  }
];

let MATIC_MAINNET: Token[] = [
  {
    "name": "Polygon",
    "symbol": "MATIC",
    "thumb": "https://assets.coingecko.com/coins/images/4713/thumb/matic___polygon.jpg",
    "address": "0x0000000000000000000000000000000000000000",
    "decimals": "18",
  }
];

let MATIC_TESTNET: Token[] = [
  {
    "name": "Polygon",
    "symbol": "MATIC",
    "thumb": "https://assets.coingecko.com/coins/images/4713/thumb/matic___polygon.jpg",
    "address": "0x0000000000000000000000000000000000000000",
    "decimals": 18,
    "isBase": true
  },
  {
    "name": "Test Token",
    "symbol": "AAA",
    "thumb": "assets/img/crash-test.png",
    "address": "0xE38A5C3da5FFf6E2865BF64cF6674265cFfd9e7f",
    "decimals": 18
  },
  {
    "name": "Test Token",
    "symbol": "BBB",
    "thumb": "assets/img/crash-test.png",
    "address": "0xb40d2f3B8e2465DF9132ae2DF43E80Dbb67d3369",
    "decimals": 18
  },
  {
    "name": "Test Token",
    "symbol": "CCC",
    "thumb": "assets/img/crash-test.png",
    "address": "0x7190Bb56c586Bf9Dd8013C450af8C51af5EaE156",
    "decimals": 18
  }
];

let REEF_MAINNET: Token[] = [
  {
    "name": "Reef",
    "symbol": "REEF",
    "thumb": "https://assets.coingecko.com/coins/images/13504/small/Group_10572.png?1610534130",
    "address": "0x0000000000000000000000000000000000000000",
    "decimals": 18,
    "isBase": true
  }
];

let REEF_TESTNET: Token[] = [
  {
    "name": "Reef",
    "symbol": "REEF",
    "thumb": "https://assets.coingecko.com/coins/images/13504/small/Group_10572.png?1610534130",
    "address": "0x0000000000000000000000000000000000000000",
    "decimals": 18,
    "isBase": true
  },
  {
    "name": "Test Token",
    "symbol": "AAA",
    "thumb": "assets/img/crash-test.png",
    "address": "0xd8ee8B891B2800ea03D4AbBa2033b0AC80d85f79",
    "decimals": 18
  },
  {
    "name": "Test Token",
    "symbol": "BBB",
    "thumb": "assets/img/crash-test.png",
    "address": "0xe14b1a577110d94fDe19CFd01659E8041da71d83",
    "decimals": 18
  },
  {
    "name": "Test Token",
    "symbol": "CCC",
    "thumb": "assets/img/crash-test.png",
    "address": "0xCcCb0F09A72bbf7f8593D5e74d0aD7f3D687aD98",
    "decimals": 18
  }
];

let chainTokenDict = {
  1: ETHEREUM_MAINNET,
  4: ETHEREUM_TESTNET,
  56: BINANCE_MAINNET,
  97: BINANCE_TESTNET,
  137: MATIC_MAINNET,
  80001: MATIC_TESTNET,
  "reef-mainnet": REEF_MAINNET,
  "reef-testnet": REEF_TESTNET
};

export {
  chainTokenDict
};
