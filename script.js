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
                a { text-decoration: none; color: rgb(0, 123, 255); }
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

document
	.getElementById("viewImagesButton")
	.addEventListener("click", function () {
		// New Button Action
		var imagesWindow = window.open("", "_blank")
		imagesWindow.document.write(`
        <html>
        <head>
            <title>Images</title>
            <style>
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
                .gallery { display: flex; flex-wrap: wrap; justify-content: center; }
                .gallery img { margin: 10px; border: 2px solid #ddd; border-radius: 5px; transition: transform 0.2s; }
                .gallery img:hover { transform: scale(1.5); z-index: 10; }
                .gallery img:active { animation: followCursor 0.2s; }
                @keyframes followCursor {
                    0% { transform: scale(1.5); }
                    100% { transform: scale(1.5) translate(0, 0); }
                }
            </style>
        </head>
        <body>
            <h1>Images</h1>
            <div class="gallery">
                <img src="ewt-photo/EWT_1.png" alt="Image 1" width="300">
                <img src="ewt-photo/EWT_2.png" alt="Image 2" width="300">
                <img src="ewt-photo/FIX_1.png" alt="Image 3" width="300">
                <img src="ewt-photo/loader_1.png" alt="Image 4" width="300">
                <img src="ewt-photo/loader_2.png" alt="Image 5" width="300">
            </div>
        </body>
        </html>
    `)
	})
