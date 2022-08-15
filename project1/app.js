const Web3=require("web3")


async function main(){
    let web3Object=new Web3("http://127.0.0.1:7545")
    //await is javascript
    let accounts=await web3Object.eth.getAccounts()
    console.log(accounts)

    console.log("")
    let firstAccount=accounts[0]
    console.log("First Account:", firstAccount)
    let balance = await web3Object.eth.getBalance(firstAccount)
    console.log("Balance: ", Web3.utils.fromWei(balance, "ether"))
    //console.log(web3Object.eth.getBalance(account[1]))
}

main();
