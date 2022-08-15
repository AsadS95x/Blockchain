console.log("Hello my friends")
console.log("Welcome to learning JavaScript")
console.log("The Basic Essentials")
console.log("ps Shoutout to UNcle Shafeeq")
A=10
B=90
C=A+B
console.log(C)
quantity=20
price=2
bill=quantity*price
console.log("your bill is:"+bill)

console.log("")
console.log("IFs and Elses")
temp=90
if(temp>30){
    console.log("The Temp is "+ temp + " OHMYGod! Its sweltering")
}
else if(temp<30){console.log("The Temp is "+ temp + "Its freezing, I'm about to become an isicle")}
else{console.log("The Temp is "+ temp + "The weather is not bad, a banging day to do something")}

salary=1000
if(salary<1000){
    tax=0
}if(salary>=1000 && salary<=2000){
    tax=salary*15/100
}if(salary>=2000){
    tax=salary*21/100
}
net= salary-tax
console.log("The tax you will be paying on salary "+ salary + " is £"+ tax)
console.log("Your net pay for this month is £"+ net)

console.log("")
console.log("While Loops")
A=1
while(A<=7){
    console.log("A:"+A)
    A=A+1
}

console.log("")
console.log("Multiple Initialisations: For Loop")
for(A=1,B=25,C=10;A<=10, B<=30;A+=1,B+=1,C+=15){
    console.log("A: "+ A)
    console.log("B: "+ B)
    console.log("C: "+ C)
}
console.log("")
console.log("Not initialising: For Loop")
A=1,B=10,C=100
for(;A<10;){
    console.log("A: "+ A)
    console.log("B: "+ B)
    console.log("C: "+ C)
    A+=1
    B+=10
    C+=100
}
console.log("")
console.log("Breaking Loops")
A=1
for (;;){
    console.log(A)
    if (A==5){
    break}
    A=A+1
}
console.log("")
console.log("Increments and Decrements")
A=10
console.log("A++ Output gives when A is 10:" + A++)
console.log("+ +A Output gives when is A 10:" + +A)

console.log("")
console.log("Building Functions and passing Input")
function message(name){
    console.log("--------")
    console.log("Salam and goodbye "+name)
    console.log("To my friends")
    console.log("To the people who looove me")
    console.log("--------")
}
message("Asad")
console.log(1)
console.log(2)
message("World")
console.log("your boy is back")

console.log("")
console.log("Fucntions Continued")

function taxes(salary){
    t=salary*21/100
    return t
}
mysalary=2100
console.log("My Salary is "+mysalary)
console.log("My taxes are "+taxes(mysalary))
console.log("My net pay will be "+(mysalary-taxes(mysalary)))