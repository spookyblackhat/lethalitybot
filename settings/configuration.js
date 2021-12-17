module.exports = {
    BOT_SETTINGS: {
        BOT_TOKEN: 'ODAxODU3MjUwMjI2NDcwOTIy.YAmxwg.YF68Y28ZxilW57YHMrR7VtOsRBg',
        YT_API_KEY: '801471804211855380',
        COMMAND_PREFIX: '!',
        EMBED_COLOR: 'BLUE',
        MUTE_ROLE: 'ROLEID',
        BANNED_WORDS: [`bitch`, `fuck`, `word3`],
        BYPASS_ROLES: [],
        BANNED_LINKS: ['www.', 'https://', '.com', '.net', '.gov', '.co', '.uk', '.gg', '.live'],
        BYPASS_LINKS_ROLES: [`745498113032323083`],
        Member_Count_Channel: '676021770289020929',
        Guild_ID: '731185647112552469',
        Kick_On_Warnings: true,
        Warnings_Until_Kick: '5',
        Time_Muted: '1m',
        Roles_On_Join: [`921384140534870016`]
    },
    VERIFICATION: {
        Enabled: true,
        Verify_Channel: '921384386455277608',
        Verify_Role: '921380178301702156',
        Role_To_Remove: '921384140534870016'
    },
    USER_DMS: {
        Enabled: true,
        Dm_Category: 'CATEGORY_ID',
        Dm_Channel_Name: 'new-dm-{user}',
        View_Dmchannels_Roles: [`ROLEID`]
    },
    Ping_Prevention: {
        Enabled: true,
        Enabled_Types: 'user',
        Max_Channel_Pings: '5',
        Max_Role_Pings: '5',
        Max_User_Pings: '5',
        Max_Pings: '10',
        Punishment: 'kick',
        Bypass_Roles: []
    },
    LOCKDOWN_KICK: {
        Enabled: true,
        Kick_Message: '{server} is currently in LOCKDOWN MODE! We have kicked you for the time, please try joining back later {member}. '
    },
    LEVELING_SYSTEM: {
        Enabled: true,
        Remove_XP_On_Leave: false,
        Level_Up_Message: '{user} has just reached level {level}!',
        Level_Up_Channel_ID: 'CHANNELID'
    },
    LOGGING: {
        Report_Channel: '921384595906252851',
        Ban_Channel_Logs: '921384553711546389',
        Unban_Channel_Logs: '921384553711546389',
        Kick_Channel_Logs: '921384553711546389',
        Warn_Channel_Logs: '921384553711546389',
        Mute_Channel_Logs: '921384553711546389',
        Lock_Channel_Logs: '921384553711546389',
        Ticket_Channel_Logs: '921384553711546389',
        Moderation_Channel_Logs: '921384553711546389',
        Server_Updates: 'CHANNELID',
        Voice_Updates: 'CHANNELID'
    },
    TICKET_SYSTEM: {
        TICKET_CATEGORY: '921384810298109972',
        SUPPORT_TEAM_ROLES: '921379548170424372',
    },
    GREETING_SYSTEM: {
        Enabled: true,
        Welcome_Channel: '921372834255740949',
        Welcome_Type: 'card',
        Welcome_Cards_Image_Link: 'https://i.ibb.co/VmGzHKv/wwwwwwwwwwwwwwww.png',
        Welcome_Message: 'Welcome {member} to the server, You are our {joinPosition} member!',
        Welcome_Embed: {
            title: '{member.username} has just joined the server!',
            description: 'Welcome {member} to the server, You are our {joinPosition} member!',
            color: 'blue'
        }
    }
}