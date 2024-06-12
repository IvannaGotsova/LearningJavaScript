// Callbacks

function helloWorldCallbacks(callbackFunction) {
    setTimeout(() => {
        callbackFunction('Hello World - Callbacks!')
    }, 10000);
}

helloWorldCallbacks((message) => {
    document.getElementById("callback").innerHTML = message
});




//Promises

function helloWorldPromises() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello World - Promises!');
        }, 1000);
    });
}

helloWorldPromises()
    .then((message) => {
        document.getElementById("promise").innerHTML = message
    })
    .catch((error) => {
        document.getElementById("promise").innerHTML = error
    });



// Async Await

async function helloWorldAsync() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello World - Async Await!')
        }, 5000);
    });
}

async function helloWorldAwait() {
    try {
        let message = await helloWorldAsync()
        document.getElementById("async-await").innerHTML = message
    } catch (error) {
        document.getElementById("async-await").innerHTML = error
    }
}

helloWorldAwait();