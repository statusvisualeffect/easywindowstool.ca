document.getElementById("installButton").addEventListener("click", function () {
	var downloadLink = document.createElement("a")
	downloadLink.href = "files/EWT.rar"
	downloadLink.download = "files/EWT.rar"
	downloadLink.style.display = "none"
	document.body.appendChild(downloadLink)
	downloadLink.click()
	document.body.removeChild(downloadLink)
})

document
	.getElementById("oldVersionsButton")
	.addEventListener("click", function () {
		var oldVersionsWindow = window.open("", "_blank")
		oldVersionsWindow.document.write(`
        <html>
        <head>
            <title>Old Versions of EasyWindowsTool</title>
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                ul { list-style-type: none; }
                li { margin: 10px 0; }
                a { text-decoration: none; color: #007bff; }
                a:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <h1>Old Versions of EasyWindowsTool</h1>
            <ul>
                <li><a href="files/1_7.exe" download="files/1_7.exe">Download Version 1.7</a></li>
                <li><a href="files/1_8.exe" download="files/1_8.exe">Download Version 1.8</a></li>
                <li><a href="files/1_9.exe" download="files/1_9.exe">Download Version 1.9</a></li>
                <li><a href="files/2_0.exe" download="files/2_0.exe">Download Version 2.0</a></li>
                <li><a href="files/2_1.exe" download="files/2_1.exe">Download Version 2.1</a></li>
            </ul>
        </body>
        </html>
    `)
	})

document.getElementById("githubButton").addEventListener("click", function () {
	window.location.href = "https://github.com/LouSkull/EasyWindowsTool-Reborn"
})

document.getElementById("contactButton").addEventListener("click", function () {
	window.location.href = "https://t.me/EWTDeveloperOfficial"
})
