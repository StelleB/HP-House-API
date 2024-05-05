// Importe le client prisma
const prisma = require("../prisma/config.js");

// Récupère la maison stocké
const getHouse = async () => {
    return await prisma.house.findUnique({
        where: {
            id: 1
        }
    });
}

// Créer / Initiailser la première ligne de la table de la base de données
const createHouse = async (houseName) => {
    return await prisma.house.create({
        data: {
            house: houseName
        }
    })
}

// Modifie la maison
const updateHouse = async (houseName) => {
    return await prisma.house.update({
        where: { id: 1 },
        data: { 
            house: houseName 
        },
    })
}


module.exports = {
    getHouse,
    createHouse,
    updateHouse
}