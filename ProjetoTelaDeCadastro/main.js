'use strict'

const openModal = () => document.getElementById('modal').classList.add('active');

const closeModal = () => {
    clearFields();
    document.getElementById('modal').classList.remove('active');
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_client'))??[];
const setLocalStorage = (db) => 
    localStorage.setItem('db_client', JSON.stringify(dbClient));

const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client);
    setLocalStorage(dbClient);
}

const readClient = () => getLocalStorage();

const updateClient = (index, client) =>{
    const dbClient = readClient();
    dbClient[index] = client;
    setLocalStorage(dbClient);
}

const deleteClient = (index, client)=> {
    const dbClient = readClient();
    dbClient.splice(index, 1);
    setLocalStorage(dbClient);
}
