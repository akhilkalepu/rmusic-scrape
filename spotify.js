// ---------SETUP NODE FUNCTIONS---------
require("dotenv").config();
var keys = require("./keys");
var Spotify = require("node-spotify-api");

// ---------SPOTIFY THIS SONG---------

spotifyThisSong();

function spotifyThisSong() {
    var spotify = new Spotify(keys.spotify);
    
    spotify.search({
        type: "track",
        query: "eleanor rigby",
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
        fs.appendFile("log.txt", "\n--------------------------------------------------" + "\nSpotify This Track: " + input + "\n" + "Artist: " + data.tracks.items[0].album.artists[0].name + "\n" + "Song: " + data.tracks.items[0].name + "\n" + "Preview link: " + data.tracks.items[0].external_urls.spotify + "\n" + "Album: " + data.tracks.items[0].album.name + "\n--------------------------------------------------"),
            function (err) {
            if (err) {
                console.log(err);
            }
        }
    });
};

// -----------------------------------------------------------