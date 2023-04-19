import axios from "axios";

import secureLocalStorage from "react-secure-storage";
import authHeader from "./authHeader";

const API_URL = process.env.REACT_APP_API_Link;

const login = (values) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.post(
    `${API_URL}/login`,
    {
      username: values.username,
      password: values.password,
    },
    {
      headers: headers,
    }
  );
};

const register = (values) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.post(
    `${API_URL}/register`,
    {
      phone: values.phone,
      email: values.email,
      password: values.password,
      first_name: values.first_name,
      last_name: values.last_name,
      state_id: values.state_id,
      city_id: values.city_id,
      address: values.address,
      zip: values.zip,
      notifications: values.notifications,
      donation_consent: values.donation_consent,
      register_from: values.register_from,
      ip: values.ip,
    },
    {
      headers: headers,
    }
  );
};

const recRegister = (values) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.post(
    `${API_URL}/recipient-register`,
    {
      phone: values.phone,
      email: values.email,
      password: values.password,
      first_name: values.first_name,
      last_name: values.last_name,
      state_id: values.state_id,
      city_id: values.city_id,
      address: values.address,
      zip: values.zip,
      register_from: values.register_from,
      ip: values.ip,
    },
    {
      headers: headers,
    }
  );
};

const showProfile = (accessToken) => {
  return axios.get(`${API_URL}/profle`, {
    headers: authHeader(accessToken),
  });
};

const updateProfile = (values) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.put(
    `${API_URL}/update${values.id}`,
    {
      username: values.name,
      password: values.password,
    },
    {
      headers: headers,
    }
  );
};

const listStates = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.get(`${API_URL}/list-states`, {
    headers: headers,
  });
};

const listGroups = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.get(`${API_URL}/list-blood-gp`, {
    headers: headers,
  });
};

const listBloodReq = (type) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.get(`${API_URL}/list-blood-request/${type}`, {
    headers: headers,
  });
};

const bloodRequest = (values) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.post(
    `${API_URL}/blood-request`,
    {
      type: values.emergency,
      blood: values.group,
      state: values.state,
      city: values.city,
      city_area: values.area,
      user_id: values.user,
    },
    {
      headers: headers,
    }
  );
};

const listDonors = (pageNo, city, area, group) => {
  const headers = {
    "Content-Type": "application/json",
  };
  if (city && area && group) {
    return axios.get(
      `${API_URL}/list-donor?page=${pageNo}&city=${city}&area=${area}&group=${group}`,
      {
        headers: headers,
      }
    );
  } else {
    return axios.get(`${API_URL}/list-donor?page=${pageNo}`, {
      headers: headers,
    });
  }
};

const listCities = () => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.get(`${API_URL}/list-cities`, {
    headers: headers,
  });
};

const getAreaByCity = (name) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.get(`${API_URL}/get-city-area-by-city/${name}`, {
    headers: headers,
  });
};

const getCityByState = (name) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.get(`${API_URL}/get-city-by-state/${name}`, {
    headers: headers,
  });
};

const checkEmail = (email) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.get(`${API_URL}/check-email/${email}`, {
    headers: headers,
  });
};

const checkEmailVerification = (token) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.get(`${API_URL}/check-email-verification/${token}`, {
    headers: headers,
  });
};

const validateEmailVerification = (token) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.get(`${API_URL}/validate-email-verification/${token}`, {
    headers: headers,
  });
};

const checkPhone = (phone) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.get(`${API_URL}/check-phone/${phone}`, {
    headers: headers,
  });
};

const checkPhoneVerification = (phone) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.get(`${API_URL}/check-phone-verification/${phone}`, {
    headers: headers,
  });
};

const validatePhoneVerification = (phone) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.get(`${API_URL}/validate-phone-verification/${phone}`, {
    headers: headers,
  });
};

const forgot = (values) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.post(
    `${API_URL}/forgot`,
    {
      email: values.email,
    },
    {
      headers: headers,
    }
  );
};

const checkForgotToken = (token) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.get(`${API_URL}/check-forgot/${token}`, {
    headers: headers,
  });
};

const updatePassword = (values) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.put(
    `${API_URL}/update-password/${values.token}`,
    {
      password: values.password,
    },
    {
      headers: headers,
    }
  );
};

const contactUs = (values) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.post(
    `${API_URL}/contact`,
    {
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      subject: values.subject,
      message: values.message,
    },
    {
      headers: headers,
    }
  );
};

const subscription = (values) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.post(
    `${API_URL}/subscription`,
    {
      email: values.email,
    },
    {
      headers: headers,
    }
  );
};

const GeneralService = {
  login,
  register,
  recRegister,
  showProfile,
  updateProfile,
  getAreaByCity,
  listDonors,
  listCities,
  listGroups,
  listStates,
  getCityByState,
  checkEmail,
  checkEmailVerification,
  validateEmailVerification,
  checkPhone,
  checkPhoneVerification,
  validatePhoneVerification,
  forgot,
  checkForgotToken,
  updatePassword,
  contactUs,
  bloodRequest,
  listBloodReq,
  subscription,
};

export default GeneralService;
