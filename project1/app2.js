const Web3=require("web3")


async function main(){
    let web3Object=new Web3("http://127.0.0.1:7545")
    //await is javascript
    let accounts=await web3Object.eth.getAccounts()
    console.log(accounts)

    console.log("")
    let Account1=accounts[0]
    let Account2=accounts[1]
    console.log("Account From:", Account1)
    console.log("Account To:", Account2)
    
   web3Object.eth.sendTransaction(
        {
            from: Account1,
            to: Account2,
            value:web3Object.utils.toWei("5")
        }
   )

   
}

main();
