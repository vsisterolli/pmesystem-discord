const { Events, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder} = require('discord.js');
const path = require("node:path");
const fs = require("node:fs");
const axios = require("axios");

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
         if (interaction.isButton()) {
            const buttonsPath = path.join(__dirname, 'button');
            const filePath = path.join(buttonsPath, interaction.customId + ".js");
            const event = require(filePath);
            if(event)
                return event.execute(interaction);
        } else if (interaction.isModalSubmit()) {
            const userNick = interaction.fields.getTextInputValue("nickInput");
             await interaction.deferReply({
                 ephemeral: true
             });

             let userData;
             try {
                userData = await axios.get("https://www.habbo.com.br/api/public/users?name=" + userNick);
             } catch {
                 return await interaction.editReply({
                     content: "O usuário não foi encontrado no habbo, verifique o nick digitado e tente novamente."
                 })
             }

            if(userData.data.motto !== interaction.customId)
                return await interaction.editReply({
                    content: "A missão está incorreta, certifique-se de colocar o código na missão antes de enviar o formulário."
                })

            try {
                await Promise.all[
                    interaction.guild.members.cache.get(interaction.user.id).roles.add("1208899371337515119"),
                    interaction.guild.members.cache.get(interaction.user.id).roles.remove("1208589502998642698"),
                    interaction.guild.members.cache.get(interaction.user.id).setNickname(userNick)
                ];
            } catch(e) {
                console.log(e)
            }

            await interaction.editReply({
                content: "Conta verificada com sucesso!",
                ephemeral: true
            })

        }
    },
};