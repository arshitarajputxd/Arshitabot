module.exports.config = {
	name: "load",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝐀𝐫𝐬𝐡𝐢𝐭𝐚 𝐑𝐚𝐣𝐩𝐮𝐭",
	description: "reload config file data",
	commandCategory: "Admin",
	usages: "[]",
	cooldowns: 30
};
module.exports.run = async function({ api, event, args,Threads, Users }) {
delete require.cache[require.resolve(global.client.configPath)];
global.config = require(global.client.configPath);
return api.sendMessage("[OK] Reloading config...", event.threadID, event.messageID);    
} 