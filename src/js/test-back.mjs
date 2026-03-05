import { addNewMaison } from "./backend.mjs";
import { addNewAgent } from "./backend.mjs";
import { DeleteMaisonById } from "./backend.mjs";

try {
  const newMaison = {
    nom_maison: "maison ville",
    prix: "500000",
    nombre_de_chambre: "3",
    nombre_de_salles_de_bain: "1",
    adresse: "32 rue de la fin",
    superficie: "70",
    favori: true,
    agent: "axdo5bzmzzukqka",
  };
  await addNewMaison(newMaison);
} catch (error) {
  console.log("Une erreur est survenue en ajoutant la maison de test", error);
}
/*
try {
  const newAgent = {
    nom: "renard",
    prenom: "oscar",
    email: "oscarrenard@gmail.com",
  };
  await addNewAgent(newAgent);
} catch (error) {
  console.log("Une erreur est survenue en ajoutant la maison de test", error);
}
*/