import PocketBase from "pocketbase";

const db = new PocketBase("http://127.0.0.1:8090");

export async function getOffres() {
  try {
    let data = await db.collection("Maison").getFullList({
      sort: "-created",
    });
    return data;
  } catch (error) {
    console.log(
      "Une erreur est survenue en lisant la liste des maisons",
      error,
    );
    return [];
  }
}

export async function getImageUrl(record, recordImage) {
  return db.files.getURL(record, recordImage);
}

//backend.js
export async function getOffre(id) {
  try {
    const data = await db.collection("Maison").getOne(id);
    return data;
  } catch (error) {
    console.log("Une erreur est survenue en lisant la maison", error);
    return null;
  }
}

export async function bySurface(surface) {
  const records = await db
    .collection("Maison")
    .getFullList({ filter: `superficie > ${surface}` });
  return records;
}

export async function byPrice(prix) {
  const records = await db
    .collection("Maison")
    .getFullList({ filter: `prix < ${prix}` });
  return records;
}

export async function byPriceMinMax(prixmin, prixmax) {
  const records = await db
    .collection("Maison")
    .getFullList({ filter: `prix > ${prixmin} && prix < ${prixmax}` });
  return records;
}

export async function addOffre(house) {
  try {
    await db.collection("Maison").create(house);
    return {
      success: true,
      message: "Offre ajoutée avec succès",
    };
  } catch (error) {
    console.log("Une erreur est survenue en ajoutant la maison", error);
    return {
      success: false,
      message: "Une erreur est survenue en ajoutant la maison",
    };
  }
}

export async function addNewMaison(newMaison) {
  await db.collection("Maison").create(newMaison);
}

export async function addNewAgent(newAgent) {
  await db.collection("Agent").create(newAgent);
}

export async function DeleteMaisonById() {
  await db.collection("Maison").delete("2m7uo5csaa9emzg");
}

export async function DeleteAgentById() {
  await db.collection("Agent").delete("1bdmvzljiks36ik");
}

export async function updateMaisonById(id, Data) {
  await db.collection("Maison").update(id, Data);
}

export async function updateAgentById(id, Data) {
  await db.collection("Agent").update(id, Data);
}

export async function superUserauth() {
  await db.collection("users").authWithPassword("test@test.fr", "123456");
}

export async function getOneAgent() {
  try {
    let agents = await pb.collection("agent").get({
      expand: "agent",
    });
    return agents;
  } catch (error) {
    console.error("Error fetching artistes:", error);
    return [];
  }
}

export async function getOffreByEmail(email) {
  try {
    const data = await db.collection("Maison").getOne(email);
    return data;
  } catch (error) {
    console.log("Une erreur est survenue en lisant la maison", error);
    return null;
  }
}
export async function getAllAgents() {
  try {
    let data = await db.collection("Agent").getFullList();
    return data;
  } catch (error) {
    console.log("Une erreur est survenue en lisant la liste des agents", error);
    return [];
  }
}
