const XEXContractAddress = "0xa41A879bcFdd75983a987FD6b68fae37777e8b28"
const XDONContractAddress = "0x6ef08f3f88aa089a392fa2460543262a93d43637"
const BASE_API_URL = "https://crounus-xex-ranking.vercel.app"

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
const web3 = new Web3(new Web3.providers.HttpProvider(rpcURL))

const xexContract = new web3.eth.Contract(IERC20ABI, XEXContractAddress)
const xdonContract = new web3.eth.Contract(XDONABI, XDONContractAddress)

let currentAccount = localStorage.getItem('sserdda')
const start = document.getElementById('start-btn')
const xexBalanceBlock = document.getElementById('xex-balance')
const connectModal = document.getElementById('connect-modal')
const mainMenu = document.getElementById('main-menu')
const xdonHolder = document.getElementById('xdon-holder')
const btnXdonHolderInfo = document.getElementById("btn-xdon-info")
const xdonHolderInfo = document.getElementById("xdon-holder-info")
const toggleSound = document.getElementById("toggle-sound")
const audioPlayer = document.getElementById("audio-player")
let isSoundOn = false
const disconnectButton = document.getElementById("disconnect-button")
const disconnectContainer = document.getElementById("disconnect-container")
const disconnectBackButton = document.getElementById("disconnect-back-button")
const rankingButton = document.getElementById("ranking-button")
const globalRankingButton = document.getElementById("global-ranking-button")
const rankingCloseButton = document.getElementById("ranking-close-button")
const rankingContainer = document.getElementById("ranking-container")
const rankingContent = document.getElementById("ranking-content")

let xdonAmount = 0

ethereum
    .request({method: 'eth_accounts'})
    .then(async (accounts) => {
        const isDisconnect = localStorage.getItem('disconnect')
        if (isDisconnect === '1') return
        if (accounts.length !== 0) {
            let account = accounts[0]
            xdonAmount = await xdonContract.methods.balanceOf(account).call();
            if (xdonAmount < 1) xdonHolder.classList.add("hidden")
            walletID.innerHTML = `<span>${account.substr(0, 5)}...${account.substr(account.length - 4)}</span>`;
        }
    })
    .catch(console.error);

start.addEventListener('click', () => {
    localStorage.setItem('startGame', '1')
    ethereum.request({method: 'eth_accounts'}).then(handleAccountsChanged).catch(console.error);
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
    if (isDisconnect === '0') disconnectContainer.classList.remove('hidden')
})

disconnectBackButton.addEventListener("click", () => {
    disconnectContainer.classList.add("hidden")
})
disconnectButton.addEventListener("click", () => {
    walletID.innerHTML = 'Not Connected'
    disconnectContainer.classList.add('hidden');
    localStorage.setItem('disconnect', '1');
})

rankingButton.addEventListener("click", async () => {
    let row = ''
    try {
        const url = `${BASE_API_URL}/api/ranking`
        const res = await fetch(url);
        const data = await res.json()

        const result = Array(...data.result)

        result.forEach(function (datum, index) {
            row += `<div class="user-ranking"><div class="user-no">${index + 1}</div><div class="user-address">${datum.user}</div><div class="user-point">${datum.point}</div></div>`
        })
    } catch (e) {
        console.log(e)
        row = ''
    }

    rankingContent.innerHTML = row
    rankingContainer.classList.remove('hidden')
})
globalRankingButton.addEventListener("click", async () => {
    let row = ''
    try {
        const url = `${BASE_API_URL}/api/global-ranking`
        const res = await fetch(url);
        const data = await res.json()

        const result = Array(...data.result)

        result.forEach(function (datum, index) {
            row += `<div class="user-ranking"><div class="user-no">${index + 1}</div><div class="user-address">${datum.user}</div><div class="user-point">${datum.point}</div></div>`
        })
    } catch (e) {
        console.log(e)
        row = ''
    }

    rankingContent.innerHTML = row
    rankingContainer.classList.remove('hidden')
})
rankingCloseButton.addEventListener("click", () => {
    rankingContainer.classList.add('hidden')
})

function handleAccountsChanged(accounts) {
    const isDisconnect = localStorage.getItem('disconnect')
    if (accounts.length === 0 || isDisconnect === '1') {
        mainMenu.classList.add("hidden");
        connectModal.classList.remove("hidden");
        return;
    }

    if (accounts[0] !== currentAccount) {
        currentAccount = accounts[0];
        localStorage.setItem('sserdda', currentAccount)
    }
    window.location.replace('/game/index.html')
}

async function getTokenBalance() {
    try {
        const accounts = await ethereum.request({method: 'eth_requestAccounts'});
        if (accounts[0] !== currentAccount) {
            currentAccount = accounts[0];
            localStorage.setItem('sserdda', currentAccount)
        }
        let result = await xexContract.methods.balanceOf(currentAccount).call();
        // Convert the value from Wei to Ether
        const formattedResult = web3.utils.fromWei(result, "ether");
        xexBalanceBlock.innerHTML = new Intl.NumberFormat("en-US").format(formattedResult)
    } catch (error) {
        console.log("getTokenBalanceError", error)
    }
}

getTokenBalance();

