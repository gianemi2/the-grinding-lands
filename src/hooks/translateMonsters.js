const isValidDictionary = (dictionary, lang) => {
    console.log(dictionary, lang)
    return dictionary.hasOwnProperty(lang) ? true : false
}

const translate = (dictionary, string, lang) => (
    dictionary[lang].hasOwnProperty(string) ? dictionary[lang][string] : false
)

function translateMonsters(lang) {
    const { monsters, dictionary } = window.globalConfig
    if (isValidDictionary(dictionary, lang)) {
        monsters.forEach(monster => {
            monster.name = translate(dictionary, monster.name, lang)
            monster.items.normal = translate(dictionary, monster.items.normal, lang)
            monster.items.tempered = translate(dictionary, monster.items.tempered, lang)
        })
    }

    return monsters

}

export default translateMonsters