
function replaceUniqueChars(str) {
    const uniqChars = Array.from(new Set(str)).join('')
    return uniqChars.replaceAll(/./g, '~')
}


console.log(replaceUniqueChars('eellhhaadjj'))