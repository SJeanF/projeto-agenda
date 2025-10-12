const url = "https://api-projeto-contatos.vercel.app";

export const getAllContacts = async () => {
  try {
    const res = await fetch(`${url}/contacts`);
    if (!res.ok) throw new Error("Erro ao buscar contatos");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Erro ao buscar contatos:", error);
    return []; // sempre retorna array, mesmo em caso de erro
  }
};

export const getContactById = async (id) => {
  try {
    const res = await fetch(`${url}/contact/${id}`);
    if (!res.ok) throw new Error("Erro ao busca o contato");
    const data = res.json();
    return data;
  } catch (error) {
    console.error("Erro ao busca o contato:", error);
    return {};
  }
};

export const queryContactByName = async (query) => {
  try {
    const res = await fetch(`${url}/contacts/search?name=${query}`);
    if (!res.ok) throw new Error("Erro ao buscar contato pelo nome");
    const data = res.json();
    return data;
  } catch (error) {
    console.error(`Erro ao buscar contato: ${error}`);
  }
};

export const putContact = async (id, contact) => {
  try {
    const res = await fetch(`${url}/contact/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });

    if (!res.ok) throw new Error("Erro ao atualizar");
  } catch (error) {
    console.error(`Erro ao atualizar contato: ${error}`);
  }
};

export const patchContact = async (id, updates) => {
  try {
    const res = await fetch(`${url}/contact/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });

    if (!res.ok) throw new Error("Erro ao atualizar parcialmente");
  } catch (error) {
    console.error(`Erro ao atualizar parcialmente: ${error}`);
  }
};

export const deleteContact = async (id) => {
  try {
    const res = await fetch(`${url}/contact/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) throw new Error("Erro ao apagar contato");
  } catch (error) {
    console.error(`Erro ao apagar contato: ${error}`);
  }
};

export const postNewContact = async (contact) => {
  try {
    const res = await fetch(`${url}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });

    if (!res.ok) throw new Error("Erro ao tentar criar novo contato");
  } catch (error) {
    console.error(`Erro ao tentar criar novo contado: ${error}`);
  }
};
