import axios from "axios";

export default {
  login(params) {
    return new Promise((res, rej) => {
      axios
        .post("/api/v1/user/login", params)
        .then((response) => {
          res(response);
        })
        .catch((error) => {
          rej(error);
        });
    });
  },
  getUsers() {
    return new Promise((res, rej) => {
      axios
        .get("/api/v1/user")
        .then((response) => {
          res(response);
        })
        .catch((error) => {
          rej(error);
        });
    });
  },
  getUserInfo(account) {
    return new Promise((res, rej) => {
      axios
        .get(`/api/v1/user/${account}`)
        .then((response) => {
          res(response);
        })
        .catch((error) => {
          rej(error);
        });
    });
  },
  createUser(body) {
    return new Promise((res, rej) => {
      axios
        .post(`/api/v1/user`, body)
        .then((response) => {
          res(response);
        })
        .catch((error) => {
          rej(error);
        });
    });
  },
  editUser(body) {
    return new Promise((res, rej) => {
      axios
        .put(`/api/v1/user`,body)
        .then((response) => {
          res(response);
        })
        .catch((error) => {
          rej(error);
        });
    });
  },
  deleteUser(params) {
    return new Promise((res, rej) => {
      axios
        .delete(`/api/v1/user`, { params: params })
        .then((response) => {
          res(response);
        })
        .catch((error) => {
          rej(error);
        });
    });
  },
};
