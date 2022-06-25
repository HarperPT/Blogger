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
};
