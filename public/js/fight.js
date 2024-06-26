const CrounusXEXContractAddress = "0x87392db2862174f359574e2394a98626d006005F"
const XEXContractAddress = "0xa41A879bcFdd75983a987FD6b68fae37777e8b28"
const XDONContractAddress = "0x6ef08f3f88aa089a392fa2460543262a93d43637"

const IERC20ABI = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "function"
    }
]
const CrounusXEXABI = [
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_rewardToken",
                "type": "address"
            },
            {
                "internalType": "contract IERC721",
                "name": "_xdonToken",
                "type": "address"
            }
        ],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "player",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "number",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "result",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "winAmount",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "jackpotAmount",
                "type": "uint256"
            }
        ],
        "name": "PlayGame",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "Received",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DECIMALS",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "GAME_RANDOM_RANGE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "GAME_WIN_RATE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "JACKPOT_RANDOM_RANGE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "JACKPOT_REWARD_RATE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "JACKPOT_WIN_RATE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "MIN_PLAY_ROUNDS",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "WIN_POINTS_RANGE",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "defaultPlayPoints",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "extraWinPointsMultiplier",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "jackpotPoints",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "masterWallet",
        "outputs": [
            {
                "internalType": "address payable",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rewardToken",
        "outputs": [
            {
                "internalType": "contract IERC20",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "userPoints",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "winPointsMultiplier",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "xdonToken",
        "outputs": [
            {
                "internalType": "contract IERC721",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "stateMutability": "payable",
        "type": "receive",
        "payable": true
    },
    {
        "inputs": [],
        "name": "getRewardToken",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_rewardToken",
                "type": "address"
            }
        ],
        "name": "setRewardToken",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getWinPointsMultiplier",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_winPointsMultiplier",
                "type": "uint256"
            }
        ],
        "name": "setWinPointsMultiplier",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getExtraWinPointsMultiplier",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_extraWinPointsMultiplier",
                "type": "uint256"
            }
        ],
        "name": "setExtraWinPointsMultiplier",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getDefaultPlayPoints",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_defaultPlayPoints",
                "type": "uint256"
            }
        ],
        "name": "setDefaultPlayPoints",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getBalance",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
            }
        ],
        "name": "withdraw",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "inputPoints",
                "type": "uint256"
            }
        ],
        "name": "playGame",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "payable",
        "type": "function",
        "payable": true
    },
    {
        "inputs": [],
        "name": "getUsersPlayedPoint",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "address",
                        "name": "user",
                        "type": "address"
                    },
                    {
                        "internalType": "uint256",
                        "name": "point",
                        "type": "uint256"
                    }
                ],
                "internalType": "struct CrounusXEX.UserPoint[]",
                "name": "",
                "type": "tuple[]"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    }
]
const XDONABI = [
    {
        "inputs": [],
        "stateMutability": "nonpayable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "approved",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "ApprovalForAll",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_fromTokenId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_toTokenId",
                "type": "uint256"
            }
        ],
        "name": "BatchMetadataUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_tokenId",
                "type": "uint256"
            }
        ],
        "name": "MetadataUpdate",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "getApproved",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            }
        ],
        "name": "isApprovedForAll",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "ownerOf",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "bytes",
                "name": "data",
                "type": "bytes"
            }
        ],
        "name": "safeTransferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "operator",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "approved",
                "type": "bool"
            }
        ],
        "name": "setApprovalForAll",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "uri",
                "type": "string"
            }
        ],
        "name": "safeMint",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
            }
        ],
        "name": "tokenURI",
        "outputs": [
            {
                "internalType": "string",
                "name": "",
                "type": "string"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    },
    {
        "inputs": [
            {
                "internalType": "bytes4",
                "name": "interfaceId",
                "type": "bytes4"
            }
        ],
        "name": "supportsInterface",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function",
        "constant": true
    }
]
const REVERTED_MESSAGES = {
    OUT_OF_REWARD_POOL: "CrounusXEX::playGame: The event have end! Try later!",
    INSUFFICIENT_XEX_FUND: "CrounusXEX::playGame: Insufficient fund!",
    GAS_TRANSFER_FAILED: "CrounusXEX::playGame: Gas transfer failed!"
}
const ERROR_REVERTED_MESSAGES = {
    OUT_OF_REWARD_POOL: "Sorry. We’ve run out of XEX. Please come back later after we refill the reward pool.",
    INSUFFICIENT_XEX_FUND: "You don’t have enough XEX in your wallet.",
    GAS_TRANSFER_FAILED: "Transaction failed. Please try again.",
    INTERNAL: "Oop! Some thing went wrong!"
}

const isDisconnect = localStorage.getItem('disconnect')

if (isDisconnect === '1') window.location.replace('/index.html')

ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{chainId: '0xfa'}],
}).then(() => {
    console.log("----------------SWITCH NETWORK-------------------")
    console.log("----------------CHAIN ID 0xfa--------------------")
}).catch((switchError) => {
    // This error code indicates that the chain has not been added to MetaMask.
    if (switchError.code === 4902) {

        ethereum
            .request({
                method: 'wallet_addEthereumChain',
                params: [
                    {
                        chainId: '0xfa',
                        chainName: 'Fantom Testnet',
                        rpcUrls: ['https://rpc.ankr.com/fantom/'],
                    },
                ],
            })
            .then(() => {
                console.log("----------------ADD NETWORK-------------------")
                console.log("----------------CHAIN ID 0xfa-----------------")
            })
            .catch((addError) => {
                console.log(addError, addError.code);
            })
    } else {
        // handle other "switch" errors
        console.log(switchError, switchError.code);
    }
})

const rpcURL = "https://rpc.ankr.com/fantom/"
const web3 = new Web3(new Web3.providers.HttpProvider(rpcURL));

const DEFAULT_PLAY_POINTS = 12500
const MAX_PLAY_POINTS = 1000000
let playPoints = DEFAULT_PLAY_POINTS
let currentDisableButtons = []

const xexBalanceBlock = document.getElementById('xex-balance')
const xdonHolder = document.getElementById('xdon-holder')

const provider = new ethers.providers.Web3Provider(window.ethereum, 'any')
await provider.send("eth_requestAccounts", [])
const signer = provider.getSigner()
const address = await signer.getAddress()
localStorage.setItem('sserdda', address)

const xexContract = new ethers.Contract(XEXContractAddress, IERC20ABI, signer)
const xdonContract = new ethers.Contract(XDONContractAddress, XDONABI, signer)
const crounusXEXcontract = new ethers.Contract(CrounusXEXContractAddress, CrounusXEXABI, signer);
let xdonAmount = 0;
let winPointsMultiplier = 240;
let extraWinPointsMultiplier = 280;

const death = document.getElementById("death")
const demon = document.getElementById("demon")
const skeleton = document.getElementById("skeleton")
const btnXdonHolderInfo = document.getElementById("btn-xdon-info")
const xdonHolderInfo = document.getElementById("xdon-holder-info")
const inputXexContainer = document.getElementById("input-xex-container")
const inputXex = document.getElementById("input-xex")
const rewardXex = document.getElementById("reward-xex")
const backButton = document.getElementById("back-button")
const confirmFightButton = document.getElementById("confirm-fight-button")
const confirmFightButtonText = document.getElementById("confirm-fight-text")
const rewardPool = document.getElementById("reward-pool")
const errorContainer = document.getElementById("error-container")
const errorText = document.getElementById("error-text")
const closeErrorPanel = document.getElementById("close-error-panel")
const confettiModal = document.getElementById("confetti")
const disconnectButton = document.getElementById("disconnect-button")
const disconnectContainer = document.getElementById("disconnect-container")
const disconnectBackButton = document.getElementById("disconnect-back-button")

const toggleSound = document.getElementById("toggle-sound")
const audioPlayer = document.getElementById("audio-player")
let isSoundOn = false

const reward = await xexContract.balanceOf(CrounusXEXContractAddress)
rewardPool.innerHTML = new Intl.NumberFormat("en-US").format(parseInt(ethers.utils.formatUnits(reward, 18)))

getRewardPool()
getTokenBalance()
checkSoundOn()

ethereum
    .request({ method: 'eth_accounts' })
    .then(async (accounts) => {
        if (accounts.length !== 0) {
            let account = accounts[0]
            const result = await xdonContract.balanceOf(account);
            xdonAmount = parseInt(result)
            if (xdonAmount < 1) xdonHolder.classList.add("hidden")
            walletID.innerHTML = `<span>${account.substr(0, 5)}...${account.substr(account.length - 4)}</span>`;

            const winPointsMultiplierHex = await crounusXEXcontract.getWinPointsMultiplier()
            const extraWinPointsMultiplierHex = await crounusXEXcontract.getExtraWinPointsMultiplier()
            winPointsMultiplier = parseInt(winPointsMultiplierHex)
            extraWinPointsMultiplier = parseInt(extraWinPointsMultiplierHex)
        }
    })
    .catch(console.error);

async function approveToken() {
    try {
        let approval = await xexContract.allowance(address, CrounusXEXContractAddress)
        const formattedApproval = ethers.utils.formatUnits(approval, 18)
        if (parseInt(formattedApproval) >= parseInt(playPoints)) {
            await fight()
            return
        }

        const tx = await xexContract.approve(CrounusXEXContractAddress, ethers.utils.parseUnits(`${playPoints}`, 18));
        const rc = await tx.wait(); // 0ms, as tx is already confirmed
        await fight()

    } catch (e) {
        await getTransactionRevertReason(e)
        const timeout = setTimeout(() => {
            handleChangeConfirmFightButtonStatus("none")
            clearTimeout(timeout);
        }, 1000);
    }
}

async function fight() {
    try {
        const tx = await crounusXEXcontract.playGame(playPoints, {
            value: "100000000000000000",
            gasPrice: 115000000000,
        });
        const rc = await tx.wait(); // 0ms, as tx is already confirmed
        const event = rc.events.find(event => event.event === 'PlayGame');
        const [player, number, result, winAmount, jackpotAmount] = event.args;
        const winAmountInt = parseInt(winAmount)
        const jackpotAmountInt = parseInt(jackpotAmount)
        localStorage.setItem('transactionHash', tx?.hash)
        localStorage.setItem('winAmount', winAmountInt)

        localStorage.setItem("isWin", result)
        localStorage.setItem("isWinJackpot", jackpotAmountInt > 0)

        if (jackpotAmountInt > 0) {
            confettiModal.classList.remove("hidden")
            setTimeout(() => {
                window.location.replace("/game/index.html");
                confirmFightButton.classList.remove("loading-fight-button");
                confirmFightButtonText.classList.remove("hidden");
            }, 1800)
        } else {
            window.location.replace("/game/index.html");
            confirmFightButton.classList.remove("loading-fight-button");
            confirmFightButtonText.classList.remove("hidden");
        }

    } catch (e) {
        await getTransactionRevertReason(e)
        const timeout = setTimeout(() => {
            handleChangeConfirmFightButtonStatus("none")
            clearTimeout(timeout);
        }, 1000);
    }
}

async function getTransactionRevertReason(exception) {
    const txHash = exception.transaction?.hash
    if (txHash) {
        try {
            const transaction = await provider.getTransaction(txHash);
            let code = await provider.call(transaction, transaction.blockNumber)
        } catch (err) {
            const reason = err.data.message.replace("execution reverted: ", "")
            switch (reason) {
                case REVERTED_MESSAGES.OUT_OF_REWARD_POOL:
                    errorText.innerHTML = ERROR_REVERTED_MESSAGES.OUT_OF_REWARD_POOL
                    break;
                case REVERTED_MESSAGES.INSUFFICIENT_XEX_FUND:
                    errorText.innerHTML = ERROR_REVERTED_MESSAGES.INSUFFICIENT_XEX_FUND
                    break;
                default:
                    errorText.innerHTML = ERROR_REVERTED_MESSAGES.GAS_TRANSFER_FAILED
                    break;
            }
        }
        errorContainer.classList.remove("hidden")
        return
    }

    try {
        const reason = exception.data.message.replace("execution reverted: ", "")
        switch (reason) {
            case REVERTED_MESSAGES.OUT_OF_REWARD_POOL:
                errorText.innerHTML = ERROR_REVERTED_MESSAGES.OUT_OF_REWARD_POOL
                break;
            case REVERTED_MESSAGES.INSUFFICIENT_XEX_FUND:
                errorText.innerHTML = ERROR_REVERTED_MESSAGES.INSUFFICIENT_XEX_FUND
                break;
            default:
                errorText.innerHTML = ERROR_REVERTED_MESSAGES.GAS_TRANSFER_FAILED
                break;
        }
    } catch (err) {
        console.log(err)
        errorText.innerHTML = ERROR_REVERTED_MESSAGES.INTERNAL
    }

    errorContainer.classList.remove("hidden")
}

async function getTokenBalance() {
    try {
        let currentAccount = localStorage.getItem('sserdda')
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts[0] !== currentAccount) {
            currentAccount = accounts[0];
            localStorage.setItem('sserdda', currentAccount)
        }
        let result = await xexContract.balanceOf(currentAccount);
        // Convert the value from Wei to Ether
        const formattedResult = ethers.utils.formatUnits(result, 18)
        xexBalanceBlock.innerHTML = new Intl.NumberFormat("en-US").format(formattedResult)
    } catch (error) {
        console.log("getTokenBalanceError", error)
    }
}

function handleDisableButton(buttonList) {
    buttonList.forEach((item) => {
        item.classList.remove("btn-fight")
        item.classList.add("btn-disable")
        currentDisableButtons.push(item)
    })
}

function handlePermitButton() {
    currentDisableButtons.forEach((item) => {
        item.classList.remove("btn-disable")
        item.classList.add("btn-fight")
    })
    currentDisableButtons = []
}

function handleChangeConfirmFightButtonStatus(status) {
    if (status === "fight") {
        confirmFightButton.classList.add("loading-fight-button")
        confirmFightButtonText.classList.add("hidden")
        backButton.classList.remove("btn-input")
        backButton.classList.add("btn-disable-input")
        return
    }
    confirmFightButton.classList.remove("loading-fight-button");
    confirmFightButtonText.classList.remove("hidden");
    backButton.classList.add("btn-input")
    backButton.classList.remove("btn-disable-input")
}

function calculateReward() {
    inputXexContainer.classList.remove("hidden")
    rewardXex.value = new Intl.NumberFormat("en-US")
        .format(DEFAULT_PLAY_POINTS * (xdonAmount > 0 ? extraWinPointsMultiplier : winPointsMultiplier) / 100)
}

function getRewardPool() {

    setInterval(async () => {
        const reward = await xexContract.balanceOf(CrounusXEXContractAddress)
        rewardPool.innerHTML = new Intl.NumberFormat("en-US").format(parseInt(ethers.utils.formatUnits(reward, 18)))
    }, 5000)
}

function checkSoundOn() {
    let soundOn = localStorage.getItem('soundOn')
    if (soundOn === 'true') {
        audioPlayer.muted = false
        audioPlayer.play()
        isSoundOn = true
        toggleSound.innerHTML = `<img src="/assets/icon/sound-off.svg" alt="sound off icon" class="w-6 h-6">`
        localStorage.setItem('soundOn', 'true')
        return
    }

    audioPlayer.muted = true
    isSoundOn = false
    toggleSound.innerHTML = `<img src="/assets/icon/sound.svg" alt="sound on icon" class="w-6 h-6">`
    localStorage.setItem('soundOn', 'false')
}

backButton.addEventListener("click", () => {
    inputXexContainer.classList.add("hidden")
    handlePermitButton()
})

confirmFightButton.addEventListener("click", async () => {
    handleChangeConfirmFightButtonStatus("fight")

    try {
        await ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xfa' }],
        })
    } catch (switchError) {
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
            try {
                await ethereum.request({
                    method: 'wallet_addEthereumChain',
                    params: [
                        {
                            chainId: '0xfa',
                            chainName: 'Fantom Testnet',
                            rpcUrls: ['https://rpc.ankr.com/fantom/'],
                        },
                    ],
                })
            } catch (addError) {
                console.log(addError, addError.code);
                handleChangeConfirmFightButtonStatus("none")
            }
            return
        }

        // handle other "switch" errors
        console.log(switchError, switchError.code);
        handleChangeConfirmFightButtonStatus("none")
        console.log("tôtttoototototototo")
        return

    }
    console.log("ggiggigiigiggiiggiigig")
    await approveToken()
})

death.addEventListener('click', async () => {
    handleDisableButton([demon, skeleton])
    calculateReward()
    console.log('fight death')
    localStorage.setItem('theChosenOne', '0')
})
demon.addEventListener('click', async () => {
    handleDisableButton([death, skeleton])
    calculateReward()
    console.log('fight demon');
    localStorage.setItem('theChosenOne', '1')
})
skeleton.addEventListener('click', async () => {
    handleDisableButton([death, demon])
    calculateReward()
    console.log('fight skeleton');
    localStorage.setItem('theChosenOne', '2')
})

btnXdonHolderInfo.onmouseover = function () {
    if (xdonAmount > 0) {
        xdonHolderInfo.classList.remove("hidden")
    }
    // xdonHolderInfo.classList.add("animate__animated animate__fadeInRight")
}
btnXdonHolderInfo.onmouseout = function () {
    if (xdonAmount > 0) {
        xdonHolderInfo.classList.add("hidden")
    }
    // xdonHolderInfo.classList.remove("animate__animated animate__fadeInRight")
}
btnXdonHolderInfo.addEventListener('click', () => {
    const isDisconnect = localStorage.getItem('disconnect')
    if (!isDisconnect || isDisconnect === '0') disconnectContainer.classList.remove('hidden')
})

inputXex.onkeypress = function (event) {
    const char = event.key
    const re = /\d/
    if (!re.test(char)) return false
    const inputValue = inputXex.value;
    let currentValue = inputValue + char;
    if (parseInt(currentValue) < DEFAULT_PLAY_POINTS) {
        rewardXex.value = 0
    } else if (parseInt(currentValue) > MAX_PLAY_POINTS) {
        inputXex.value = MAX_PLAY_POINTS
        rewardXex.value = new Intl.NumberFormat("en-US")
            .format(MAX_PLAY_POINTS * (xdonAmount > 0 ? extraWinPointsMultiplier : winPointsMultiplier) / 100)
        return false
    } else {
        rewardXex.value = new Intl.NumberFormat("en-US")
            .format((inputValue + char) * (xdonAmount > 0 ? extraWinPointsMultiplier : winPointsMultiplier) / 100)
    }
}
inputXex.onchange = function () {
    let inputValue = inputXex.value;
    if (inputValue < DEFAULT_PLAY_POINTS)  {
        inputValue = DEFAULT_PLAY_POINTS
    }
    playPoints = inputValue
    inputXex.value = new Intl.NumberFormat("en-US").format(inputValue)
    rewardXex.value = new Intl.NumberFormat("en-US")
        .format((inputValue) * (xdonAmount > 0 ? extraWinPointsMultiplier : winPointsMultiplier) / 100)
}

closeErrorPanel.addEventListener("click", () => {
    errorContainer.classList.add("hidden")
})

toggleSound.addEventListener('click', () => {
    if (isSoundOn) {
        audioPlayer.muted = true
        isSoundOn = false
        toggleSound.innerHTML = `<img src="/assets/icon/sound-off.svg" alt="kebab icon" class="w-6 h-6">`
        localStorage.setItem('soundOn', 'false')
        return
    }
    audioPlayer.muted = false
    audioPlayer.play()
    isSoundOn = true
    toggleSound.innerHTML = `<img src="/assets/icon/sound.svg" alt="kebab icon" class="w-6 h-6">`
    localStorage.setItem('soundOn', 'true')
})

disconnectBackButton.addEventListener("click", () => {
    disconnectContainer.classList.add("hidden")
})
disconnectButton.addEventListener("click", () => {
    walletID.innerHTML = 'Not Connected'
    disconnectContainer.classList.add('hidden');
    localStorage.setItem('disconnect', '1');
    window.location.replace("/index.html");
})
