// Global variable that will tell us whether PhoneGap is read
var isPhoneGapReady = false; 

// Store the current network status
var isConnected = false;
var isHighSpeed = false;


function init() { 
// Add an event listener for deviceready

/*if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
  document.addEventListener("deviceready", onDeviceReady, false);
} 
else {
  onDeviceReady(); //this is the browser
}*/

document.addEventListener("deviceready", onDeviceReady, false);


// Older versions of Blackberry < 5.0 don't support
// PhoneGap's custom events, so instead we need to perform
// an interval check every 500 milliseconds to see whether 
// PhoneGap is ready. Once done, the interval will be 
// cleared and normal processing can begin.

/*var intervalID = window.setInterval( function() {
	if (Device.available) {
		 onDeviceReady(); 
		}
		}, 500);*/
		}
		
function onDeviceReady() {
	 //window.clearInterval(intervalID);
	  // set to true
	  isPhoneGapReady = true;
	   alert('The device is now ready'); 
	   //alert(device.name + ' ' + device.platform);
	   
	  // detect for network access
	   networkDetection();
	   
	   } 
	   
function networkDetection() {
	 if (isPhoneGapReady) {
	  // as long as the connection type is not none, 
	  // the device should have Internet access
	   if (navigator.network.connection.type != Connection.NONE) {
	    isConnected = true;
	    }
	   // determine whether this connection is high-speed
	    switch (navigator.network.connection.type) {
	    	 case Connection.UNKNOWN:
	    	 case Connection.CELL_2G:
					isHighSpeed = false;
					break;
		     default: isHighSpeed = true; break;
		      }
		   }
	 }



// Set an onload handler to call the init function

window.onload = init;




 
