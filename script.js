document.getElementById("installButton").addEventListener("click", function () {
	var downloadLink = document.createElement("a")
	downloadLink.href = "EWT.rar"
	downloadLink.download = "EWT.rar"
	downloadLink.style.display = "none"
	document.body.appendChild(downloadLink)
	downloadLink.click()
	document.body.removeChild(downloadLink)
})

document.getElementById("githubButton").addEventListener("click", function () {
	window.location.href = "https://github.com/LouSkull/EasyWindowsTool-Reborn"
})

document.getElementById("contactButton").addEventListener("click", function () {
	window.location.href = "https://t.me/EWTDeveloperOfficial"
})
