import axios from "./axios-config";

export const register = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post("v1/register", { ...data })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const login = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/v1/login", { ...data })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const forgetPassword = (data) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/v1/forgot-password", { ...data })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const resetPassword = (data: {
  otp_code: string;
  password: string;
  confirm_password: string;
}) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/v1/reset-password", { ...data })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const changePassword = (data: {
  old_password: string;
  new_password: string;
  confirm_password: string;
}) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/v1/update-password", { ...data })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateImage = (data: { image: string }) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/v1/update-user-image", { ...data })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const verifyEmail = (data: { otp_code: string }) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/v1/verify-email", { ...data })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const emailResend = (data: { email: string }) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/v1/email/resend", { ...data })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const me = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/v1/get-user")
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err.response ? err.response.data : err.message);
      });
  });
};

export const getUser = (id: number) => {
  return new Promise((resolve, reject) => {
    axios
      .get("/v1/get-user/" + id)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err.response ? err.response.data : err.message);
      });
  });
};

export const subscribe = (data: { email: string }) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/v1/subscribe", { ...data })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err.response ? err.response.data : err.message);
      });
  });
};

export const unsubscribe = (data: { hash: string }) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/v1/unsubscribe", { ...data })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err.response ? err.response.data : err.message);
      });
  });
};

export const resubscribe = (data: { hash: string }) => {
  return new Promise((resolve, reject) => {
    axios
      .post("/v1/resubscribe", { ...data })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err.response ? err.response.data : err.message);
      });
  });
};

export const checkUserSubscription = () => {
  return new Promise((resolve, reject) => {
    axios
      .get("/v1/check-user-subscription")
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err.response ? err.response.data : err.message);
      });
  });
};
