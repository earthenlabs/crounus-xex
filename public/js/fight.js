const CrounusXEXContractAddress = "0xCf58501E249f37a01a70eae75c9F9A9A8aa6D800"
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
const CrounusXEXABI = [
    {
        "inputs": [
            {
                "internalType": "contract IERC20",
                "name": "_rewardToken",
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
        "name": "RANDOM_RANGE",
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
        "name": "WIN_RATE",
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
        "name": "playPoints",
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
        "inputs": [],
        "name": "winPoints",
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
        "name": "getWinPoints",
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
                "name": "_winPoints",
                "type": "uint256"
            }
        ],
        "name": "setWinPoints",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getPlayPoints",
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
                "name": "_playPoints",
                "type": "uint256"
            }
        ],
        "name": "setPlayPoints",
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
        "inputs": [],
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
    }
]

const rpcURL = "https://rpc.testnet.fantom.network/"
const web3 = new Web3(new Web3.providers.HttpProvider(rpcURL));

const playPoints = 12500
let currentDisableButtons = []

const xexBalanceBlock = document.getElementById('xex-balance')

const provider = new ethers.providers.Web3Provider(window.ethereum)
await provider.send("eth_requestAccounts", [])
const signer = provider.getSigner()
const address = await signer.getAddress()
localStorage.setItem('sserdda', address)

const xexContract = new ethers.Contract(XEXContractAddress, IERC20ABI, signer)

ethereum
    .request({ method: 'eth_accounts' })
    .then((accounts) => {
        if (accounts.length !== 0) {
            let account = accounts[0]
            walletID.innerHTML = `<span>${account.substr(0, 6)}...${account.substr(account.length - 7)}</span>`;
        }
    })
    .catch(console.error);

async function approveToken(button, text) {

    try {
        let approval = await xexContract.allowance(address, CrounusXEXContractAddress)
        const formattedApproval = ethers.utils.formatUnits(approval, 18)
        console.log("approval", formattedApproval)
        if (formattedApproval >= playPoints) {
            await fight(button, text, signer)
            handlePermitButton()
            return
        }

        const tx = await xexContract.approve(CrounusXEXContractAddress, ethers.utils.parseUnits(`${playPoints}`, 18));
        const rc = await tx.wait(); // 0ms, as tx is already confirmed

        console.log("approve rc", tx?.hash)
        await fight(button, text, signer)
        handlePermitButton()

    } catch (e) {
        console.log("approve Error", e)
        const timeout = setTimeout(() => {
            button.classList.remove("loading-fight-button");
            text.classList.remove("hidden");
            handlePermitButton()
            clearTimeout(timeout);
        }, 1000);
    }
}

async function fight(button, text, signer) {
    try {
        const contract = new ethers.Contract(CrounusXEXContractAddress, CrounusXEXABI, signer);

        const tx = await contract.playGame({
            value: "10000000000000000",
            gasLimit: 6721975,
            gasPrice: 20000000000,
        });
        const rc = await tx.wait(); // 0ms, as tx is already confirmed
        const event = rc.events.find(event => event.event === 'PlayGame');
        const [player, number, result] = event.args;
        console.log("fight result", tx?.hash, player, number, result)
        localStorage.setItem('transactionHash', tx?.hash)

        // const fightResult = document.getElementById("fight-result")
        // fightResult.innerHTML = result ? "Win" : "Lose";
        localStorage.setItem("isWin", result)

        window.location.replace("/game/index.html");
        console.log("game game")
        button.classList.remove("loading-fight-button");
        text.classList.remove("hidden");

    } catch (e) {
        console.log("sendError", e)
        const timeout = setTimeout(() => {
            button.classList.remove("loading-fight-button");
            text.classList.remove("hidden");
            clearTimeout(timeout);
        }, 1000);
    }
}


function getTransactionReceiptMined(txHash, interval) {
    const transactionReceiptAsync = function(resolve, reject) {
        web3.eth.getTransactionReceipt(txHash, (error, receipt) => {
            if (error) {
                reject(error);
            } else if (receipt == null) {
                setTimeout(
                    () => transactionReceiptAsync(resolve, reject),
                    interval ? interval : 500);
            } else {
                resolve(receipt);
            }
        });
    };

    if (Array.isArray(txHash)) {
        return Promise.all(txHash.map(
            oneTxHash => getTransactionReceiptMined(oneTxHash, interval)));
    } else if (typeof txHash === "string") {
        return new Promise(transactionReceiptAsync);
    } else {
        throw new Error("Invalid Type: " + txHash);
    }
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

getTokenBalance();

// async function getRevertReason(txHash){
//
//     const tx = await web3.eth.getTransaction(txHash)
//
//     var result = await web3.eth.call(tx, tx.blockNumber)
//
//     result = result.startsWith('0x') ? result : `0x${result}`
//
//     if (result && result.substr(138)) {
//
//         const reason = web3.utils.toAscii(result.substr(138))
//         console.log('Revert reason:', reason)
//         return reason
//
//     } else {
//
//         console.log('Cannot get reason - No return value')
//
//     }
//
// }

const death = document.getElementById("death")
const deathText = document.getElementById("death-text")
const demon = document.getElementById("demon")
const demonText = document.getElementById("demon-text")
const skeleton = document.getElementById("skeleton")
const skeletonText = document.getElementById("skeleton-text")

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

death.addEventListener('click', async () => {
    handleDisableButton([demon, skeleton])
    death.classList.add("loading-fight-button")
    deathText.classList.add("hidden")
    console.log('fight death')
    localStorage.setItem('theChosenOne', '0')
    await approveToken(death, deathText)
})
demon.addEventListener('click', async () => {
    handleDisableButton([death, skeleton])
    demon.classList.add("loading-fight-button")
    demonText.classList.add("hidden")
    console.log('fight demon');
    localStorage.setItem('theChosenOne', '1')
    await approveToken(demon, demonText)
})
skeleton.addEventListener('click', async () => {
    handleDisableButton([death, demon])
    skeleton.classList.add("loading-fight-button")
    skeletonText.classList.add("hidden")
    console.log('fight skeleton');
    localStorage.setItem('theChosenOne', '2')
    await approveToken(skeleton, skeletonText)
})
