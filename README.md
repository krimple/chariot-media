chariot-media
=============

A media consumer application written with PhoneGap and JS libraries

To build
--------

    cd angular
    grunt
    cd ..
    cordova build ios
    cordova emulate ios

Requirements
------------

    npm install -g ios-sim cordova phonegap
    
    # for testing support via karma:
    npm install -g karma yeoman bower grunt-cli grunt-karma karma-ng-scenario
    
    # for launching apps with cordova emulate:
    brew install ios-sim
    

To run the tests
-----------------

End-to-End tests are run with:

    grunt karma:e2e
    
Unit tests are run with (still no tests yet on this):

    grunt karma:unit


 
