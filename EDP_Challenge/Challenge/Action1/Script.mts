SystemUtil.Run "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe", "https://opensource-demo.orangehrmlive.com/"
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtUsername").Set "Admin" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtPassword").SetSecure "62ce73fbecc12da9c494c79aebf3141615e37c04d68c" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("OrangeHRM").Page("OrangeHRM").WebButton("LOGIN").Click @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("OrangeHRM").Close @@ hightlight id_;_66644_;_script infofile_;_ZIP::ssf5.xml_;_
