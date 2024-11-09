# MMM-History
  This day in history module for MM2
  
Examples
  
 MagicMirror/modules
 ![](Capture.jpg)
  
 git clone https://github.com/cowboysdude/MMM-History
 ![](Capture2.jpg)
  
 # Installation
```
cd ~/MagicMirror/modules
git clone https://github.com/cowboysdude/MMM-History.git

cd ~/MagicMirror/modules/MMM-History
npm install
```
 
 # Add to Config.js
```  
  {
      module: 'MMM-History',
      position: 'bottom_bar',
      config: {
                maxWidth: "300px",     // Increase to maximum px or 100% to stretch across mirror. See Examples above.
                headerDateFormat: "L"  // Specify date format used in header
              }
  },
```          
 
    maxWidth:` can be set to either px or %
    maxLength:` can be set to any number to truncate text after x characters  

    headerDateFormat: specify format, e.g.
      "L"    11/09/2024
      "l"    11/9/2024
      "LL"   November 9, 2024
      "ll"   Nov 9, 2024
  
  Restart mirror... enjoy...  
