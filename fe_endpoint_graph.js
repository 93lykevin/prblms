const https = require("https");
async function getDataAndGraph() {
    async function getData() {
        let data = ".";

        const req = await https.get(
            "https://www.random.org/integers/?num=200&min=1&max=10&col=1&base=10&format=plain&rnd=new",
            (res) => {
                console.log("Got response: " + res.statusCode);

                res.on("data", (d) => {
                    // console.log(d);
                    // process.stdout.write(d);
                    data += d.toString();
                    // data += d;
                });
            }
        );
        req.on("error", (e) => {
            console.log(error);
        });

        console.log(data);
    }

    function graphData(data) {}

    let data = await getData();
}

getDataAndGraph();
