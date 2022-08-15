// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

// Abstrat Contracts can only be used for inheritance. 
abstract contract Bank{
    function openAccount() virtual pure public returns (string memory);
    
    function showBalance() virtual pure public returns (string memory);

}

contract FirstContract{

    function deposit() pure public returns (string memory){
        return "You have deposited Money";
    }

        function add(int a, int b) pure public returns (int){
        int v=a+b;
        return v;
    }

}
