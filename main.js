var script = document.createElement('script')

if (window.location.href.includes("https://quizlet.com")) {
    script.src = "https://cdn.jsdelivr.net/gh/educwiol/Hax@refs/heads/main/quizlet.js"
    document.body.append(script)
}
else if (window.location.href.includes("blooket.com")) {
    script.src = 
    document.body.append(script)
} else {
    alert("Please open Quizlet or Blooket for this to work.")
}

