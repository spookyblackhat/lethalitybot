module.exports = {
    config: {
        name: 'eval',
        aliases: [],
    },
    execute: async(client, msg, args) => {
        if (!['921379270260035585', '921379356239093790'].includes(msg.author.id)) return
        try {
            await eval(`(async () => {${args.join(' ')}})()`)
        } catch (e) {
            msg.channel.send(e.message)
            console.log(e)
        }
    }
}