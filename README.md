# ThankYouBot

ThankYouBot is a Discord bot that sends thank you messages when users interact in the server, such as sending a message or joining a voice channel. It also plays a sound when a user joins a voice channel.

## Features

- Sends a thank you message when a user sends a message in the server.
- Sends a thank you message when a user joins a voice channel.
- Plays a sound when a user joins a voice channel.

## Prerequisites

- Node.js (v16.6.0 or higher)
- npm (Node package manager)
- A Discord bot token (create one on the [Discord Developer Portal](https://discord.com/developers/applications))

## Getting Started

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/ThankYouBot.git
    cd ThankYouBot
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your Discord bot token:

    ```
    DISCORD_BOT_TOKEN=your_discord_bot_token
    ```

4. Ensure you have an audio file named `your-sound-file.mp3` in the root directory or update the path in the code to point to your audio file.

### Running the Bot

To start the bot, run:

```bash
npm start
