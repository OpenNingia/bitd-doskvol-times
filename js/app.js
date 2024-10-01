data = {
    "issues": [
        {
            "title": "Uscita #1, Akoros - 24th Kalivet, 848",
            "link": "issues/issue001.html",
            "excerpt": "<ul><li>Riapre la vecchia tratta commerciale</li></ul>"
        }/*,
        {
            "title": "Uscita #1, Akoros - 24th Kalivet, 848",
            "link": "/issues/issue001.html",
            "excerpt": "<ul><li>Riapre la vecchia tratta commerciale</li></ul>"
        }*/        
    ]
}

document.addEventListener('alpine:init', () => {
    Alpine.data('data', () => data)
})