module.exports.run = async (bot, message, args) => {
    
    let xp = require("./xp.json");

    let xpAdd = Math.floor(Math.random() * 7) + 8
    console.log(xpAdd);

    if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp:0,
            level:1
        };
    }

    let curXp = xp[message.author.id].xp;
    let curLvl = xp[message.author.id].level;
    let nxtLvl = xp[message.author.id].level * 300;
    xp[message.author.id].xp = curXp + xpAdd;
    if(nxtLvl <= xp[message.author.id]){
        xp[message.author.id].level = curLvl + 1;

    }

    fs.writeFile("./xp.json", JSON.stringify(xp), (err) => {
        if (err) console.log(err)
    });
}

module.exports.help = {
    name: "level"
}