const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "zKBHyKhY#p_RauXGnHRagdMQISOsFoqZk283hpwxmtaqbtIUqey0",
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech',  
ALIVE_IMG: process.env.ALIVE_IMG || "https://pomf2.lain.la/f/147pvvp2.jpg",
PREFIX: process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
STATUS_VIEW: process.env.STATUS_VIEW || false,
MODE: process.env.MODE || "public",
OWNER: process.env.OWNER || '+94758900210',
};
