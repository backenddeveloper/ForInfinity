# ForInfinity
A single page application using raw JS to be shown at interview.

- To Develop/Extend : Modify the correct file[s] in app/development.

- To Test : Open jasmineTests/runTests.html in your favourite browser

- To build : Run app/build/assemble.bash
  NOTE: This is a BASH script designed to be run in the Linux terminal.
  This script is not meant to be modified, and serves only as a makeshift (portable) replacement for a full build system.
  
- To Deploy : Copy the file app/production/application.html to your chosen destination.
  NOTE: The page requires internet access to work.

- To Run : Open in a your browser. 
  NOTE: This project is designed to show modern coding and thus uses relies heavily on ECMA6 compatibility.
  Chrome v42+ or Firefox v40+ have both been successfully tested with this application.
  In a production environment it is trivial to change this dependency.
  
  Known bugs: Using blocking AJAX on the Main-UI thread prevents rapid selection of answers and renders a lot of network 
  recovery unnecessary, it does however mean the application freezes while retrieving an establishment list. 