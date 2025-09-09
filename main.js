var script = document.createElement('script')

if (window.location.href.includes("https://quizlet.com")) {
    script.src = "https://cdn.jsdelivr.net/gh/educwiol/Hax@main/quizlet.js"
    document.append(script)
}