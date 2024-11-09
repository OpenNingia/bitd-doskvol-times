data = {
    "issues": [
        {
            "title": "Uscita #1, Akoros - 24th Kalivet, 848",
            "link": "issues/issue001.html",
            "excerpt": "<ul><li>Riapre la vecchia tratta commerciale</li></ul>"
        },
        {
            "title": "Lettera anonima",
            "link": "/props/props001.html",
            "excerpt": "<ul><li>Un offerta di lavoro</li></ul>"
        }       
    ]
}

document.addEventListener('alpine:init', () => {
    Alpine.data('data', () => data)
})