module.exports.config = {
    name: "antijoin",
    version: "1.0.0",
    credits: "𝐀𝐫𝐬𝐡𝐢𝐭𝐚 𝐑𝐚𝐣𝐩𝐮𝐭",
    hasPermssion: 1,
    description: "Turn off antijoin",
    usages: "antijoin on/off",
    commandCategory: "system",
    cooldowns: 0
};

module.exports.run = async({ api, event, Threads}) => {
    const info = await api.getThreadInfo(event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) 
      return api.sendMessage('[ 𝐀𝐍𝐓𝐈 𝐉𝐎𝐈𝐍 ] » 𝐒𝐨𝐫𝐫𝐲 𝐁𝐮𝐝𝐝𝐲 𝐍𝐨 𝐀𝐝𝐦𝐢𝐧 𝐏𝐨𝐰𝐞𝐫𝐬 𝐀𝐭𝐡𝐨𝐫𝐢𝐳𝐞𝐝 𝐏𝐥𝐞𝐚𝐬𝐞 𝐀𝐮𝐭𝐡𝐨𝐫𝐢𝐳𝐞 𝐀𝐧𝐝 𝐓𝐫𝐲 𝐀𝐠𝐚𝐢𝐧. 🖤', event.threadID, event.messageID);
    const data = (await Threads.getData(event.threadID)).data || {};
    if (typeof data.newMember == "undefined" || data.newMember == false) data.newMember = true;
    else data.newMember = false;
    await Threads.setData(event.threadID, { data });
      global.data.threadData.set(parseInt(event.threadID), data);
    return api.sendMessage(`[ 𝐀𝐍𝐓𝐈 𝐉𝐎𝐈𝐍 ] » 𝗜𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁 ${(data.newMember == true) ? "𝗢𝗻" : "𝗢𝗳𝗳"} 𝗦𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹 𝗔𝗻𝘁𝗶 𝗝𝗼𝗶𝗻 ✅`, event.threadID, event.messageID);
}
