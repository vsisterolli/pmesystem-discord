const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('remove-cargo-departamento')
        .setDescription('Adiciona um membro a um cargo de departamento')
        .addUserOption(option =>
            option.setRequired(true)
                .setName("user")
                .setDescription("O usuário que terá o cargo removido")
        )
        .addRoleOption(option =>
            option.setRequired(true)
                .setName("cargo")
                .setDescription("O cargo que deve ser removido")
        ),

    async execute(interaction) {

        const user = interaction.options.getUser("user");
        const role = interaction.options.getRole("cargo");

        const error = new EmbedBuilder()
            .setColor("#ff0000")
            .setDescription("Você não tem permissão para atribuir o cargo " + role.name)
            .setTimestamp()

        const receiver = await interaction.guild.members.fetch(user.id);
        const applier = await interaction.guild.members.cache.get(interaction.user.id);

        // RH
        // membro RH
        if(role.id === "1212181149711859793") {
            // cord e lid
            if(applier.roles.cache.has("1212181145043599481") || applier.roles.cache.has("1212181141784633345")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }
        // cord RH
        if(role.id === "1212181145043599481") {
            if(applier.roles.cache.has("1212181141784633345")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }
        // lid RH
        if(role.id === "1212181141784633345") {
            if(applier.roles.cache.has("1212181141784633345")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }

        // PTR
        // membro PTR
        if(role.id === "1212180877359185970") {
            // cord e lid
            if(applier.roles.cache.has("1212180874712453161") || applier.roles.cache.has("1212180867540193290")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }
        // cord PTR
        if(role.id === "1212180874712453161") {
            if(applier.roles.cache.has("1212180867540193290")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }
        // lid PTR
        if(role.id === "1212180867540193290") {
            if(applier.roles.cache.has("1212180867540193290")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }

        // MKT
        // membro MKT
        if(role.id === "1212180698371461210") {
            // cord e lid
            if(applier.roles.cache.has("1212180696463056896") || applier.roles.cache.has("1212180693170388992")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }
        // promot MKT
        if(role.id === "1223799935766630441") {
            // cord e lid
            if(applier.roles.cache.has("1212180696463056896") || applier.roles.cache.has("1212180693170388992")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }
        // cord MKT
        if(role.id === "1212180696463056896") {
            if(applier.roles.cache.has("1212180693170388992")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }
        // lid MKT
        if(role.id === "1212180693170388992") {
            if(applier.roles.cache.has("1212180693170388992")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }

        // EFEX
        // membro EFEX
        if(role.id === "1212180439179984976") {
            // cord e lid
            if(applier.roles.cache.has("1212180433891229716") || applier.roles.cache.has("1212180436722130944")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }
        // cord EFEX
        if(role.id === "1212180433891229716") {
            if(applier.roles.cache.has("1212180436722130944")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }
        // lid EFEX
        if(role.id === "1212180436722130944") {
            if(applier.roles.cache.has("1212180436722130944")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }

        // CDO
        // membro CDO
        if(role.id === "1212180330480537610") {
            // cord e lid
            if(applier.roles.cache.has("1212178726133964861") || applier.roles.cache.has("1212178742097481748")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }
        // cord CDO
        if(role.id === "1212178726133964861") {
            if(applier.roles.cache.has("1212178742097481748")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }
        // lid CDO
        if(role.id === "1212178742097481748") {
            if(applier.roles.cache.has("1212178742097481748")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }

        // ESP
        // membro ESP
        if(role.id === "1211180881209987112") {
            // cord e lid
            if(applier.roles.cache.has("1208909093197320212") || applier.roles.cache.has("1208903665151119380")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }
        // cord ESP
        if(role.id === "1208909093197320212") {
            if(applier.roles.cache.has("1208903665151119380")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }
        // lid ESP
        if(role.id === "1208903665151119380") {
            if(applier.roles.cache.has("1208903665151119380")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }

        // INS
        // membro INS
        if(role.id === "1212177840645083136") {
            // cord e lid
            if(applier.roles.cache.has("1211847864494465084") || applier.roles.cache.has("1212177648604811344")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }
        // cord INS
        if(role.id === "1211847864494465084") {
            if(applier.roles.cache.has("1212177648604811344")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }
        // lid INS
        if(role.id === "1212177648604811344") {
            if(applier.roles.cache.has("1212177648604811344")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }

        // CDT
        // membro CDT
        if(role.id === "1212181541925425202") {
            // cord e lid
            if(applier.roles.cache.has("1212181546237435934") || applier.roles.cache.has("1212181544047869972")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }
        // cord CDT
        if(role.id === "1212181546237435934") {
            if(applier.roles.cache.has("1212181544047869972")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }
        // lid CDT
        if(role.id === "1212181544047869972") {
            if(applier.roles.cache.has("1212181544047869972")) {
                receiver.roles.remove(role.id)
                interaction.reply({
                    content: `${receiver.nickname} perdeu o cargo ${role.name}.`
                })
            } else {
                interaction.reply({
                    embeds: [error],
                    ephemeral: true
                })
            }
        }


    },
};
