const XEXContractAddress = "0xed8d4140f09ddcD0B62022193b9A2DdA158064a8"

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

const rpcURL = "https://rpc.testnet.fantom.network/"
const web3 = new Web3(new Web3.providers.HttpProvider(rpcURL))

const xexContract = new web3.eth.Contract(IERC20ABI, XEXContractAddress)

localStorage.setItem('startGame', '1')
let currentAccount = localStorage.getItem('sserdda')
const start = document.getElementById('start-btn')
const xexBalanceBlock = document.getElementById('xex-balance')
const connectModal = document.getElementById('connect-modal')
const mainMenu = document.getElementById('main-menu')

ethereum
    .request({ method: 'eth_accounts' })
    .then((accounts) => {
        if (accounts.length !== 0) {
            let account = accounts[0]
            walletID.innerHTML = `<span>${account.substr(0, 6)}...${account.substr(account.length - 7)}</span>`;
        }
    })
    .catch(console.error);

start.addEventListener('click', () => {
    ethereum.request({ method: 'eth_accounts' }).then(handleAccountsChanged).catch(console.error);
})

function handleAccountsChanged(accounts) {
    if (accounts.length === 0) {
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
       const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
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

