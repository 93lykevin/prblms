const { get } = require("http");

const temperatureUrls = ["someUrls", "someUrls", "someUrls", "someUrls"];

async function getTemps(urls, successCallback, errorCallback) {
    let successCalled = false;

    for (let url of urls) {
        get(url).then((res) => {
            if (!successCalled) {
                successCalled = true;
                successCallback(res);
            }
        });
    }
}
