const {Events, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder} = require("discord.js");
module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {

        const code = Math.floor(Math.random() * (9999 - 1000) + 1000);

        const modal = new ModalBuilder()
            .setCustomId('PME' + code)
            .setTitle('Verificar Conta')

        const habboNick = new TextInputBuilder()
            .setCustomId('nickInput')
            .setLabel(`Coloque PME${code} na sua missão do Habbo`)
            .setPlaceholder('Digite o nick da conta usada na PME')
            .setStyle(TextInputStyle.Short)
            .setRequired(true);

        const firstActionRow = new ActionRowBuilder().addComponents(habboNick);
        modal.addComponents(firstActionRow);
        await interaction.showModal(modal);
    },
};