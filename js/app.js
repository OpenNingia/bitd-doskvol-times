data = {
    "issues": [
        {
            "title": "Uscita #1, Akoros - 24th Kalivet, 848",
            "link": "issues/issue001.html",
            "excerpt": "<ul><li>Riapre la vecchia tratta commerciale</li></ul>"
        },
        {
            "title": "Lettera anonima",
            "link": "props/props001.html",
            "excerpt": "<ul><li>Un offerta di lavoro</li></ul>"
        },
        {
            "title": "Uscita #2, Akoros - 31th Kalivet, 848",
            "link": "issues/issue002.html",
            "excerpt": "<ul><li>Processo in crisi</li></ul>"
        }     
    ]
}

document.addEventListener('alpine:init', () => {
    Alpine.data('data', () => data)
})