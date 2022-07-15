SystemUtil.Run "C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe", "https://opensource-demo.orangehrmlive.com/"
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtUsername").Set "Admin" @@ script infofile_;_ZIP::ssf7.xml_;_
Browser("OrangeHRM").Page("OrangeHRM").WebEdit("txtPassword").SetSecure "62d1786c4303b5dde08c100b7ba3fad039ac3b72191b" @@ script infofile_;_ZIP::ssf8.xml_;_
Browser("OrangeHRM").Page("OrangeHRM").WebButton("LOGIN").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("OrangeHRM").Close @@ hightlight id_;_68098_;_script infofile_;_ZIP::ssf10.xml_;_
