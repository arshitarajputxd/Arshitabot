module.exports.config = {
    name: "antichangegroupname",
    version: "1.0.0",
    credits: "𝐀𝐫𝐬𝐡𝐢𝐭𝐚 𝐑𝐚𝐣𝐩𝐮𝐭",
    hasPermssion: 1,
    description: "Use this for stupid members Name\nMade by Arshita Rajput",
    usages: "antichangegroupname on/off",
    commandCategory: "System",
    cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    let data = (await Threads.getData(event.threadID)).data || {};
    if (!permission == 0 (event.senderID)) return api.sendMessage("You don't have permission to use this command. only admin can use this command", event.threadID, event.messageID);
    
    if (typeof data["antichangegroupname"] == "undefined" || data["antichangegroupname"] == false) data["antichangegroupname"] = true;
    else data["antichangegroupname"] = false;
    
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(parseInt(event.threadID), data);
    
    return api.sendMessage(`✅ Done ${(data["antichangegroupname"] == true) ? "turn on" : "Turn off"} successful Anti Change Group Name!`, event.threadID);

}
