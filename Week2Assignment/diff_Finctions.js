function userProfile(name)
{
return console.log("Hello " + name);
}
userProfile("Divya")

const double = (num) =>  2*num

console.log(double(5))

setTimeout (function()
{
     
    console.log("This message is delayed by 2 seconds");
},2000)

function getUserData(callback)
{
    setTimeout(function(){callback()},3000)
     
}
getUserData(function(){
    console.log("Call back Function")
})