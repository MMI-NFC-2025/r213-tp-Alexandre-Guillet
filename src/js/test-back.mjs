import { addNewMaison } from "./backend.mjs";
import { addNewAgent } from "./backend.mjs";
import { DeleteMaisonById } from "./backend.mjs";
import { DeleteAgentById } from "./backend.mjs";
import { updateMaisonById } from "./backend.mjs";
import { updateAgentById } from "./backend.mjs";
import { superUserauth } from "./backend.mjs";
/*
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
*/
/*
try {
  const newAgent = {
    nom: "Renard",
    prenom: "Oscar",
    email: "oscarrenard@gmail.com",
  };
  await addNewAgent(newAgent);
} catch (error) {
  console.log("Une erreur est survenue en ajoutant l'agent de test", error);
}
*/
/*
try {
  await DeleteMaisonById();
  console.log("supprimé");
} catch (e) {
  console.log(e);
}
*/
/*
try {
  await DeleteAgentById();
  console.log("supprimé");
} catch (e) {
  console.log(e);
}
*/
/*
try {
  const id = "lc9nwdmogea2srj";
  const Data = {
    nom_maison: "maison villa",
  };
  await updateMaisonById(id, Data);
} catch (e) {
  console.log(e);
}
*/
/*
try {
  const id = "41vt3xwlj1o0oo9";
  const Data = {
    email: "guillaume@gmail.com",
  };
  await updateAgentById(id, Data);
} catch (e) {
  console.log(e);
}
*/
try {
    const authData =await pb.collection("users").authWithPassword("test@test.fr", "123456");
  await superUserauth();
  console.log("Authentification réussie");
} catch (e) {
  console.log("Une erreur est survenue lors de l'authentification", e);
}
