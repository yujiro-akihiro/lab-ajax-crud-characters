class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.axiosInstance = axios.create({
      baseURL: this.BASE_URL
    });
  }

  getFullList() {
    return this.axiosInstance.get('/characters')
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => console.error('Error fetching all characters:', error));
  }

  getOneRegister(id) {
    return this.axiosInstance.get(`/characters/${id}`)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => console.error(`Error fetching character with id ${id}:`, error));
  }

  createOneRegister(characterData) {
    return this.axiosInstance.post('/characters', characterData)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => console.error('Error creating new character:', error));
  }

  updateOneRegister(id, updateData) {
    return this.axiosInstance.put(`/characters/${id}`, updateData)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => console.error(`Error updating character with id ${id}:`, error));
  }

  deleteOneRegister(id) {
    return this.axiosInstance.delete(`/characters/${id}`)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
      .catch(error => console.error(`Error deleting character with id ${id}:`, error));
  }
}
