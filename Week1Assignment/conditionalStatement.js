function browserName(browser) {
    if (browser == "chrome") {
        console.log("Chrome browser launched")
    }
    else if (browser == "firefox") {
        console.log("firefox browser launched")
    }
    else {
        console.log("Default browser launched")
    }
}

function runTest(testType) {

    switch (testType) {
        case "smoke":
            console.log("smoke testing triggered")
            break
        case "sanity":
            console.log("sanity testing triggered")
            break
        case "regression":
            console.log("regression testing triggered")
            break
        default:
            console.log("functional testing triggered")
    }

    /*     if (testType =="smoke") {
            console.log("smoke testing triggered")
        }
        else if (testType =="sanity") {
            console.log("sanity testing triggered")
        }
        else if (testType =="regression") {
            console.log("Regression testing trigerred")
        }
        else {
            console.log("functional testing triggered")
        } */
}

browserName("firefox")
runTest("sanity")