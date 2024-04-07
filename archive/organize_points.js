var fs = require("fs");
const points = require("./points.json");


const main = () => {
    var coordinates = points;
    var result = [];

    for(var i = 0; i < 50; i++){
        // This array will hold the power of 32 base and also the additional coefficients of 1-8
        result.push([]);

        for(var j = 0; j < 8; j++) {
            result[i].push([coordinates[j * 100 + i * 2], coordinates[j * 100 + i * 2 + 1]]);
        }
    }

    fs.writeFileSync("P2.json", JSON.stringify(result, 0, 4));
}

main();