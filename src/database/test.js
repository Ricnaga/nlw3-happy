const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {
    await saveOrphanage(db, {
        lat: "-27.2225626",
        lng: "-49.6451208",
        name: "Lar das meninas",
        about: "Preste assistência a crianças de 06 a 16 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "9 98765432",
        images: [
            "https://images.unsplash.com/photo-1597385573259-d2d9f0b7135d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1582167410766-a90eea4787ae?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência pra dar",
        opening_hours: "Horário de visitas Das 18h até 8h",
        opening_on_weekends: "1"
    })

    const selectOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectOrphanages)

    const selectIdOrphanages = await db.all('SELECT * FROM orphanages WHERE id ="1"');
    console.log(selectIdOrphanages)

    console.log(await db.run('DELETE FROM orphanages WHERE id ="4"'));
})