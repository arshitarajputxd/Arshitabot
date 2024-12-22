const schedule = require('node-schedule');
const moment = require('moment-timezone');
const chalk = require('chalk');

module.exports.config = {
    name: 'autosent',
    version: '10.0.0',
    hasPermssion: 0,
    credits: '𝐀𝐫𝐬𝐡𝐢𝐭𝐚 𝐑𝐚𝐣𝐩𝐮𝐭',
    description: 'Set Karne Ke Bad Automatically Msg Send Karega',
    commandCategory: 'group messenger',
    usages: '[]',
    cooldowns: 3
};

const messages = [
    { time: '12:00 AM', message: 𝐊𝐨𝐧 𝐊𝐨𝐧 𝐉𝐚𝐚𝐠 𝐑𝐡𝐚 𝐇𝐚𝐢 𝐈𝐬 𝐖𝐚𝐤𝐭 🖤},
    { time: '1:00 AM', message: 𝐒𝐨𝐣𝐚 𝐌𝐮𝐧𝐧𝐚 𝐒𝐨𝐣𝐚 𝐖𝐚𝐫𝐧𝐚 𝐒𝐮𝐛𝐚𝐡 𝐔𝐭𝐡𝐧𝐞 𝐌𝐞 𝐋𝐚𝐭𝐞 𝐇𝐨 𝐉𝐚𝐲𝐞𝐠𝐚 🙂 },
    { time: '2:00 AM', message: '𝐘𝐞 𝐁𝐡𝐨𝐨𝐭 𝐋𝐨𝐠𝐨 𝐤𝐞 𝐉𝐚𝐚𝐠𝐧𝐞 𝐊𝐚𝐚 𝐓𝐢𝐦𝐞 𝐇𝐚𝐢 𝐊𝐲𝐚 𝐀𝐚𝐩 𝐋𝐨𝐠 𝐁𝐡𝐢 𝐉𝐚𝐚𝐠 𝐑𝐚𝐡𝐞 𝐇𝐚𝐢?' },
    { time: '3:00 AM', message: '𝐆𝐨𝐨𝐝  𝐍𝐢𝐠𝐡𝐭 𝐒𝐥𝐞𝐞𝐩 𝐓𝐢𝐠𝐡𝐭 𝐀𝐥𝐥 𝐆𝐮𝐲𝐬 𝐒𝐞𝐞 𝐘𝐨𝐮 𝐍𝐞𝐱𝐭 𝐌𝐨𝐫𝐧𝐢𝐧𝐠 💔' },
    { time: '4:00 AM', message: '𝐒𝐮𝐛𝐚𝐡 𝐇𝐨 𝐆𝐚𝐲𝐢 𝐌𝐚𝐠𝐚𝐫 𝐀𝐚𝐩 𝐋𝐨𝐠 𝐓𝐨 𝐒𝐨 𝐑𝐡𝐞 𝐇𝐨𝐧𝐠𝐞 𝐏𝐚𝐤𝐤𝐚 🙂' },
    { time: '5:00 AM', message: '𝐆𝐨𝐨𝐝 𝐌𝐨𝐫𝐧𝐢𝐧𝐠 𝐔𝐭𝐡 𝐆𝐚𝐲𝐞 𝐇𝐨 𝐓𝐨𝐡 𝐌𝐞𝐫𝐞 𝐋𝐢𝐲𝐞 𝐄𝐤 𝐂𝐮𝐩 𝐂𝐡𝐚𝐢 𝐁𝐚𝐧𝐚 𝐃𝐨 🥹' },
    { time: '6:00 AM', message: '𝐂𝐡𝐚𝐥𝐨 𝐁𝐚𝐜𝐜𝐡𝐨 𝐏𝐨𝐥𝐬 𝐀𝐚𝐲𝐢 𝐏𝐨𝐥𝐬 𝐀𝐚𝐠𝐲𝐢 😀' },
    { time: '7:00 AM', message: '𝐇𝐚𝐯𝐞 𝐀 𝐆𝐫𝐞𝐚𝐭 𝐃𝐚𝐲 𝐄𝐯𝐞𝐫𝐲𝐨𝐧𝐞 💖' },
    { time: '8:00 AM', message: '𝐊𝐚𝐚𝐦 𝐊𝐚𝐫𝐭𝐞 𝐊𝐚𝐫𝐭𝐞 𝐓𝐡𝐚𝐤 𝐆𝐚𝐲𝐢 𝐁𝐡𝐨𝐭 𝐁𝐨𝐫 𝐇𝐨 𝐆𝐚𝐲𝐢 𝐌𝐞 🤍' },
    { time: '9:00 AM', message: '𝐂𝐡𝐚𝐢 𝐊𝐚 𝐓𝐢𝐦𝐞 𝐇𝐨 𝐆𝐚𝐲𝐚 𝐇𝐚𝐢 𝐒𝐚𝐛𝐡𝐢 𝐋𝐨𝐠 𝐏𝐢 𝐋𝐨 𝐇𝐕𝐞 𝐚 𝐆𝐫𝐞𝐚𝐭 𝐓𝐞𝐚 🫖' },
    { time: '10:00 AM', message: '𝐉𝐚𝐲 𝐒𝐡𝐫𝐞𝐞 𝐊𝐫𝐢𝐬𝐡𝐧𝐚 𝐒𝐚𝐛𝐡𝐢 𝐊𝐨 🙏🏻' },
    { time: '11:00 AM', message: '𝐋𝐮𝐧𝐜𝐡 𝐓𝐢𝐦𝐞 𝐇𝐨 𝐆𝐚𝐲𝐚 𝐌𝐞 𝐊𝐡𝐚𝐧𝐚 𝐊𝐡𝐚 𝐋𝐞𝐭𝐢 𝐇𝐮 𝐓𝐚𝐛 𝐓𝐚𝐤 𝐊𝐞 𝐋𝐢𝐲𝐞 𝐁𝐲𝐞 🥳' },
    { time: '12:00 PM', message: '𝐚𝐝𝐡𝐚 𝐃𝐢𝐧 𝐆𝐮𝐣𝐚𝐫 𝐆𝐚𝐲𝐚 𝐁𝐚𝐤𝐢 𝐊𝐚 𝐀𝐝𝐡𝐚 𝐁𝐡𝐢 𝐆𝐮𝐣𝐚𝐫 𝐉𝐚𝐲𝐞𝐠𝐚 ' },
    { time: '1:00 PM', message: '𝐎𝐲𝐞 𝐇𝐨𝐲𝐞 𝐀𝐚𝐲𝐞 𝐇𝐚𝐲𝐞 𝐁𝐚𝐝𝐨 𝐁𝐚𝐝𝐢 𝐁𝐚𝐝𝐨 𝐁𝐚𝐝𝐢 😂' },
    { time: '2:00 PM', message: '𝐌𝐞𝐫𝐢 𝐂𝐡𝐮𝐭𝐭𝐡𝐢 𝐇𝐨 𝐆𝐚𝐲𝐢 𝐀𝐛 𝐌𝐞 𝐂𝐡𝐚𝐥𝐢 𝐆𝐡𝐚𝐫 🎵' },
    { time: '3:00 PM', message: '𝐇𝐚𝐲𝐞 𝐊𝐢𝐭𝐧𝐢 𝐏𝐲𝐚𝐫𝐢 𝐏𝐲𝐚𝐫𝐢 𝐁𝐚𝐭𝐞𝐢𝐧 𝐊𝐚𝐫𝐭𝐞 𝐇𝐨 𝐀𝐚𝐩 ☺️' },
    { time: '4:00 PM', message: '𝐒𝐡𝐚𝐦 𝐇𝐨𝐧𝐞 𝐖𝐚𝐥𝐢 𝐇𝐚𝐢 𝐀𝐩𝐤𝐢 𝐂𝐡𝐮𝐭𝐭𝐡𝐢 𝐊𝐚𝐛 𝐇𝐨𝐠𝐢' },
    { time: '5:00 PM', message: '𝐇𝐚𝐲𝐞 𝐊𝐢𝐭𝐧𝐢 𝐇𝐚𝐬𝐞𝐞𝐧 𝐒𝐡𝐚𝐦 𝐇𝐚𝐢 ' },
    { time: '6:00 PM', message: '𝐄𝐯𝐞𝐫𝐲𝐭𝐡𝐢𝐧𝐠 𝐈𝐬 𝐓𝐞𝐦𝐩𝐫𝐨𝐫𝐲 𝐁𝐮𝐭 𝟗 𝐓𝐨 𝟓 𝐉𝐨𝐛 𝐈𝐬 𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 ☹️' },
    { time: '7:00 PM', message: '𝐈𝐭𝐬 𝐓𝐢𝐦𝐞 𝐓𝐨 𝐄𝐚𝐭 𝐒𝐨𝐦𝐞 𝐒𝐧𝐚𝐜𝐬 𝐀𝐧𝐝 𝐅𝐨𝐨𝐝𝐬 😐' },
    { time: '8:00 PM', message: '𝐉𝐢𝐧𝐤𝐞 𝐒𝐚𝐩𝐧𝐞 𝐏𝐮𝐫𝐞 𝐍𝐡𝐢 𝐇𝐨𝐭𝐞 𝐖𝐨 𝐃𝐞𝐫 𝐓𝐚𝐤 𝐒𝐨𝐭𝐞 𝐡𝐚𝐢 😂' },
    { time: '9:00 PM', message: '𝐃𝐢𝐧𝐧𝐞𝐫 𝐓𝐢𝐦𝐞 𝐇𝐨 𝐆𝐚𝐲𝐚 𝐆𝐮𝐲𝐬 𝐊𝐡𝐚𝐧𝐚 𝐊𝐡𝐚 𝐋𝐞𝐭𝐢 𝐇𝐮 𝐀𝐛 ❤️' },
    { time: '10:00 PM', message: '𝐀𝐩𝐤𝐞 𝐒𝐚𝐭𝐡 𝐓𝐢𝐦𝐞 𝐁𝐢𝐭𝐚 𝐤𝐞 𝐀𝐜𝐜𝐡𝐚 𝐥𝐚𝐠𝐚 🖤' },
    { time: '11:00 PM', message: '𝐇𝐚𝐯𝐞 𝐀 𝐆𝐨𝐨𝐝 𝐍𝐢𝐠𝐡𝐭 ❤️' }
];

module.exports.onLoad = ({ api }) => {
    console.log(chalk.bold.hex("#00c300")("============ SUCCESFULLY LOADED THE AUTOSENT COMMAND ============"));

    messages.forEach(({ time, message }) => {
        const [hour, minute, period] = time.split(/[: ]/);
        let hour24 = parseInt(hour, 10);
        if (period === 'PM' && hour !== '12') {
            hour24 += 12;
        } else if (period === 'AM' && hour === '12') {
            hour24 = 0;
        }

        const scheduledTime = moment.tz({ hour: hour24, minute: parseInt(minute, 10) }, 'Asia/Kolkata').toDate();

        schedule.scheduleJob(scheduledTime, () => {
            global.data.allThreadID.forEach(threadID => {
                api.sendMessage(message, threadID, (error) => {
                    if (error) {
                        console.error(`Failed to send message to ${threadID}:`, error);
                    }
                });
            });
        });
    });
};

module.exports.run = () => {
    // This function can be left empty as the main logic is handled in onLoad
};
