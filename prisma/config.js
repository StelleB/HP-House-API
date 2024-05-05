const { PrismaClient } = require("@prisma/client");

/**
 * Expose le client prisma (interaction avec la base de données) partout et on y accède en faisant
 * const prisma = require("/chemin/vers/la/config.js");
 * 
 * exemple: fichier utils/house.js
 */
module.exports = new PrismaClient();