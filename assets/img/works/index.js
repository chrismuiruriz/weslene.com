var http = require("https"),
    Stream = require("stream").Transform,
    fs = require("fs");

let assets = [
    {
        path: "https://mariame.netlify.app/assets/img/works/6.jpg",
        name: "6.jpg",
    },
];


// var download = function (uri, filename, callback) {
//   request.head(uri, function (err, res, body) {
//     request(uri).pipe(fs.createWriteStream(filename)).on("close", callback);
//   });
// };

assets.forEach((item, index) => {
    //   download(item.path, item.name, function () {
    //     console.log("done");
    //   });

    var url = item.path;

    http
        .request(url, function (response) {
            var data = new Stream();

            response.on("data", function (chunk) {
                data.push(chunk);
            });

            response.on("end", function () {
                fs.writeFileSync(item.name, data.read());
            });
        })
        .end();
});
