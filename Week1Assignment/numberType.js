function numberType(n) {
    if (typeof (n) == "number") {
        if (n > 0) {
            console.log("Positive number " + n)
        }
        else if (n < 0) {
            console.log("Negative number " + n)
        }
        else {
            console.log("Number is equal to 0 " + n)
        }
    }
    else {
        console.log("Enter valid number")
    }
}

numberType("hi")