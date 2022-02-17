java -jar -Dwebdriver.gecko.driver=./geckodriver.exe \
-Dwebdriver.chrome.driver=./chromedriver.exe \
-Dwebdriver.edge.driver=./msedgedriver.exe \
./selenium-server-standalone-3.5.3.jar -role node -nodeConfig ./node_config.json


java -jar -Dwebdriver.gecko.driver=./geckodriver.exe \
-Dwebdriver.chrome.driver=./chromedriver.exe \
-Dwebdriver.edge.driver=" C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe" \
./selenium-server-standalone-3.5.3.jar -role node -nodeConfig ./node_config.json