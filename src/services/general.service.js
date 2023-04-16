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
      username: values.name,
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

const listDonors = (pageNo) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.get(`${API_URL}/list-donor?page=${pageNo}`, {
    headers: headers,
  });
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

const getCityByStateId = (values) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.get(
    `${API_URL}/get-city-by-state-id/${values.id}`,
    {
      username: values.name,
      password: values.password,
    },
    {
      headers: headers,
    }
  );
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

const forgot = (email) => {
  const headers = {
    "Content-Type": "application/json",
  };
  return axios.post(
    `${API_URL}/forgot`,
    {
      email: email,
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
      updated_by: values.updated_by,
      updated_at: values.updated_at,
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
  getCityByStateId,
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
};

export default GeneralService;
