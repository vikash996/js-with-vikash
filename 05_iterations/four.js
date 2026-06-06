const mylang = {
    js : "javscript",
    css: "Cascading Style Sheets",
    java: "java"
}
for(const key in mylang){
    // console.log(`${key} shortcut of ${mylang[key]}` )
}

const lag = ["java", "js", "css"];
for(const key in lag){
    console.log(`${key} laguage${lag[key]}`)
}