const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");
const axios = require("axios");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('pegar-cargos')
        .setDescription('Sincroniza os seus cargos com o system'),
    async execute(interaction) {

        await interaction.deferReply();
        const userProfile = (await axios.get("http://pmesystem.com.br:5000/users/discordRoles/" + encodeURIComponent(interaction.member.nickname), {headers: {Authorization: process.env.SYSTEM_API_TOKEN}})).data

        const errorSystem = new EmbedBuilder()
            .setColor("#ff0000")
            .setDescription("Você precisa ser um militar cadastrado no system para conseguir os cargos ")
            .setTimestamp()

        const errorVerify = new EmbedBuilder()
            .setColor("#ff0000")
            .setDescription("Você precisa ser um militar cadastrado no system para conseguir os cargos ")
            .setTimestamp()

        if(interaction.member.roles.cache.has("1208899371337515119") === false)
            return await interaction.editReply({
                embeds: [errorVerify]
            })

        if(!userProfile) {
            return await interaction.editReply({
                embeds: [errorSystem]
            })
        }

        const cargos = ["Soldado", "Cabo", "Sargento", "Subtenente", "Aspirante a Oficial", "Tenente", "Capitão", "Major", "Coronel", "Comandante", "Comandante-Geral", "Estagiário", "Analista", "Agente", "Inspetor", "Perito", "Escrivão", "Investigador", "Delegado", "Comissário", "Diretor", "Chanceler"]

        try {
            await interaction.member.roles.add("1208913800997240872");
        } catch {
            console.log("Não foi possível colocá-lo como militar");
        }

        for (const role of interaction.guild.roles.cache) {
            try {
                if (role[1].name === userProfile.roleName) {
                    await interaction.member.roles.add(role[1].id)
                }
                else if (interaction.member.roles.cache.has(role[1].id) && cargos.includes(role[1].name))
                    await interaction.member.roles.remove(role[1].id);
            } catch {
                console.log("Não foi possível adicionar/remover" + role[1].name);
            }
        }

        if(userProfile.role.hierarchyKind === "EXECUTIVE") {
           try {
               await interaction.member.roles.add("1213504437444681728")
           } catch {
               console.log("Não foi possível colocá-lo como executivo");
           }
        } else {
            try {
                if (userProfile.role.hierarchyPosition >= 6)
                    await interaction.member.roles.add("1208902206393286827")
            } catch {
                console.log("Não foi possível colocá-lo como oficial")
            }
            try {
                if (userProfile.role.hierarchyPosition >= 9)
                    await interaction.member.roles.add("1208902269387669565")
            } catch {
                console.log("Não foi possível colocá-lo como Oficial-General")
            }
            try {
                if (userProfile.role.hierarchyPosition >= 11)
                    await interaction.member.roles.add("1208902321879392306")
            } catch {
                console.log("Não foi possível colocá-lo como Alto Escalão")
            }
        }

        interaction.editReply({
          content: "Cargos atualizados"
        })

    },
};
