const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
const path = require('path');

const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.MessageContent
    ] 
});

client.once('ready', () => {
    console.log('ThankYouBot is online!');
});

client.on('messageCreate', message => {
    if (!message.author.bot) {
        message.channel.send(`Thank you for interacting, ${message.author.username}!`);
    }
});

client.on('voiceStateUpdate', async (oldState, newState) => {
    if (!oldState.channel && newState.channel) {
        const user = newState.member.user;
        const textChannel = newState.guild.systemChannel || newState.guild.channels.cache.find(channel => channel.type === 'GUILD_TEXT');
        if (textChannel) {
            textChannel.send(`Thank you for joining the voice channel, ${user.username}!`);
        }

        // Join the voice channel and play a sound
        const voiceChannel = newState.channel;
        if (voiceChannel) {
            const connection = joinVoiceChannel({
                channelId: voiceChannel.id,
                guildId: voiceChannel.guild.id,
                adapterCreator: voiceChannel.guild.voiceAdapterCreator,
            });

            const player = createAudioPlayer();
            const resource = createAudioResource(path.join(__dirname, 'bechfa lik saydi ra2is.mp3')); 

            player.play(resource);
            connection.subscribe(player);

            player.on(AudioPlayerStatus.Idle, () => {
                connection.destroy();
            });

            player.on('error', error => {
                console.error(`Error: ${error.message}`);
            });
        }
    }
});

client.login('MTI2NTIwMzAxMzU4MTAxNzIxMA.GeDBCS.m7YIn7aCriGcer6TaZ8pPnEUFCTyBRC5IX6u58');
