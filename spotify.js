// ---------SETUP NODE FUNCTIONS---------
require("dotenv").config();
var keys = require("./keys");
var Spotify = require("node-spotify-api");

var musicArray = [];

// ---------CONVERT CSV TO ARRAY---------

csv();

function csv() {
    var columns = ["column1"];
    require("csv-to-array")({
        file: "data.csv",
        columns: columns
    }, function (err, array) {
        console.log(err || array);
        // console.log(err);
        var musicArray = array;
        console.log(musicArray[0].column1);

        var spotify = new Spotify(keys.spotify);

        for (i = 0; i < musicArray.length; i++) {
            var query = "'" + musicArray[i].column1 + "'";
            
            spotify.search({
                type: "track",
                query: query,
                limit: 1
            }, function (err, data) {
                if (err) {
                    console.log("Error occurred: " + err);
                    return;
                } else {
                    console.log("-------------------------");
                    console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
                    console.log("Song: " + data.tracks.items[0].name);
                    console.log("Preview link: " + data.tracks.items[0].external_urls.spotify);
                    console.log("-------------------------");
                }
            });
        }
    });
};

// ---------------------------------------

// ---------SPOTIFY THIS SONG---------

// spotifyThisSong();

function spotifyThisSong() {
    var spotify = new Spotify(keys.spotify);
    
    spotify.search({
        type: "track",
        query: "Robert Plant - Big Log",
        limit: 1
    }, function (err, data) {
        if (err) {
            console.log("Error occurred: " + err);
            return;
        }
        console.log("-------------------------");
        console.log("Artist: " + data.tracks.items[0].album.artists[0].name);
        console.log("Song: " + data.tracks.items[0].name);
        console.log("Preview link: " + data.tracks.items[0].external_urls.spotify);
        console.log("Album: " + data.tracks.items[0].album.name);
        console.log("-------------------------");
    });
};
// ---------------------------------------