import axios from "axios";

const create = data => {
    return axios.post("/new", data);
  };

  const update = (id, data) => {
    return axios.put(`/edit/${id}`, data);
  };

  const remove = id => {
    return axios.delete(`/delete/${id}`);
  };

  const getAll = () => {
    return axios.get("/cards");
  };

  const cardsCurd = {
    getAll,
    create,
    update,
    remove,
  };

  export default cardsCurd;