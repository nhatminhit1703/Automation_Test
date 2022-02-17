# How to register Nodes to Selenium HUB

I wanna register to the HUB a node with below info:
    . Windows
    . 4 Chrome sessions
    . 4 FF sessisons
    . 1 Microsoft Edge Session


# Steps
1. Download all browser driver
    . Google Chrome: chromedriver
    . FF: geckodriver
    . Microsoft Edge

2. Create a folder to gather all stuffs

3. Create a node_configuration file

4. Create a file which contains command to start node

5. Start HUB

6. Start node

GUIDE 

Step1.
java -jar selenium-server-standalone-3.5.3.jar -role hub -port 4444
Step2.
java -jar -Dwebdriver.gecko.driver=./geckodriver.exe \
-Dwebdriver.chrome.driver=./chromedriver.exe \
-Dwebdriver.edge.driver=./msedgedriver.exe \
./selenium-server-standalone-3.5.3.jar -role node -nodeConfig ./node_config.json
Step3.
 npm test selenium.conf.js -- --suite login