'Init
SystemUtil.Run "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe", "https://opensource-demo.orangehrmlive.com/"


Browser("OrangeHRM").Page("OrangeHRM").WebElement("Username").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtUsername").Set "Admin" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtPassword").SetSecure "62cd822dad0cbae86c8b3a06d4851a0123d906778ae1" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("OrangeHRM").Page("OrangeHRM").WebButton("LOGIN").Click @@ script infofile_;_ZIP::ssf4.xml_;_
