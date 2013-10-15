var RaspiCam = require("raspicam");


var camera = new RaspiCam({
	mode: "timelapse",
	output: "./timelapse/image_%06d.jpg", // image_000001.jpg, image_000002.jpg,...
	encoding: "jpg",
	timelapse: 3000, // take a picture every 3 seconds
	timeout: 86400000 // take a total of 28800 pictures over 24 hours
});

camera.on("start", function( err, timestamp ){
	console.log("timelapse started at " + timestamp);
});

camera.on("read", function( err, timestamp, filename ){
	console.log("timelapse image captured with filename: " + filename);
});

camera.on("exit", function( timestamp ){
	console.log("timelapse child process has exited");
});

camera.on("stop", function( err, timestamp ){
	console.log("timelapse child process has been stopped at " + timestamp);
});

camera.start();

