var i2c = require('i2c');
var address = 0x77;
var wire = new i2c(address, {device: '/dev/i2c-0'}); // point to your i2c address, debug provides REPL interface 

var BMP280 = require('node-bmp280');
 
var barometer = new BMP280();
 
barometer.begin(function(err) {
    if (err) {
        console.info('error initializing barometer', err);
        return;
    }
 
    console.info('barometer running');
 
    setInterval(function() {
        barometer.readPressureAndTemparature(function(err, pressure, temperature) {
            console.info('barometer: ', pressure, temperature);
        });
    }, 1000);
});
