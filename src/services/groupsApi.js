const uri = "https://api-projeto-contatos.vercel.app";

export const getAllGroups = async () => {
  try {
    const res = await fetch(`${uri}/groups`);
    if (!res.ok) throw new Error("Erro ao buscar os grupos");
    const data = res.json();
    return data;
  } catch (error) {
    console.log(`Erro ao buscar grupos: ${error}`);
    return [];
  }
};
