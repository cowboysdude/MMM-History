# MMM-History
  This day in history module for MM2
  
 +# Examples
  
 -~MagicMirror/modules
 +![](Capture.jpg)
  
 -git clone https://github.com/cowboysdude/MMM-History
 +![](Capture2.jpg)
  
 +## Installation
  
 -cd
 -~MagicMirror/modules/MMM-History
 -run - npm install
 +Clone this repo into your ~MagicMirror/modules directory.
  
 -config.js
 +`git clone https://github.com/cowboysdude/MMM-History.git`
 +
 +Then `cd MMM-History`
 +
 +run - `npm install` in your `~MagicMirror/modules/MMM-History` directory.
 +
 +## Add to Config.js
  
         {
               module: 'MMM-History',
              position: 'bottom_bar',
              config: {
 -            maxWidth: "300px"
 +            maxWidth: "300px"  // Increase to maximum px or 100% to stretch across mirror. See Examples above.
              }
 -         },
 +        },
          
 -maxWidth can be set to either px or %
 +`maxWidth:` can be set to either px or %
  
  Restart mirror... enjoy...  
