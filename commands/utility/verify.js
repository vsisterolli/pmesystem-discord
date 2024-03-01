const {SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder} = require("discord.js");


module.exports = {
    data: new SlashCommandBuilder()
        .setName('canalverificacao')
        .setDescription('Configura o canal de verificação.!'),
    async execute(interaction) {

        const confirm = new ButtonBuilder()
            .setCustomId('initiateVerify')
            .setLabel('Iniciar Verificação')
            .setStyle(ButtonStyle.Success);

        const row = new ActionRowBuilder()
            .addComponents(confirm);

        if(interaction.user.globalName !== "sisterolli" && interaction.user.globalName !== "s.kull" && interaction.user.globalName !== "biel.ev") {
            return await interaction.reply({
                ephemeral: true,
                content: "Você não tem permissão para usar esse comando."
            })
        }

        await interaction.reply({
            content: "Precisamos verificar sua identidade antes de liberar o uso do canal, clique no botão abaixo para iniciar:",
            components: [row]
        });
    },
};
