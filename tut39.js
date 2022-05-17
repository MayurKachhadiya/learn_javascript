console.log("we can see promise");

function func1() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const error = false;
            if (!error) {
                console.log("Function: Your Error is resolved");
                resolve();
            } else {
                console.log("Function: Your Error is not resolve");
                reject("Sorry not fulfilled");
            }
        }, 2000);
    })
}
func1().then(function() {
    console.log("Mayur: we can solve the problem");
}).catch(function(error) {
    console.log("Mayur: Very bad bro. Resone: " + error);
})