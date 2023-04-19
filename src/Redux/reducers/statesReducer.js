import secureLocalStorage from "react-secure-storage";

const id = secureLocalStorage.getItem("_id");
const name = secureLocalStorage.getItem("name");
const accessToken = secureLocalStorage.getItem("accessToken");
const forgotToken = secureLocalStorage.getItem("forgotToken");

const initialState = {
  id: id ? id : null,
  name: name ? name : null,
  accessToken: accessToken ? accessToken : null,
  forgotToken: forgotToken ? forgotToken : null,
};

const reducer = (state = initialState, action) => {
  if (action.type === "login") {
    secureLocalStorage.setItem("accessToken", action.payload.accessToken);
    secureLocalStorage.setItem("_id", action.payload.id);
    secureLocalStorage.setItem("name", action.payload.name);

    return {
      ...state,
      accessToken: action.payload.accessToken,
      id: action.payload.id,
      name: action.payload.name,
    };
  } else if (action.type === "updateprofile") {
    secureLocalStorage.setItem("_id", action.payload.id);
    secureLocalStorage.setItem("uType", action.payload.uType);
    secureLocalStorage.setItem("uName", action.payload.uName);
    secureLocalStorage.setItem("name", action.payload.name);
    return {
      ...state,
      id: action.payload.id,
      uType: action.payload.uType,
      uName: action.payload.uName,
      name: action.payload.name,
    };
  } else if (action.type === "updatename") {
    secureLocalStorage.setItem("name", action.payload.name);
    return {
      ...state,
      name: action.payload.name,
    };
  } else if (action.type === "logout") {
    secureLocalStorage.clear();
    return {
      ...state,
      accessToken: null,
      id: null,
      name: null,
    };
  } else if (action.type === "forgot") {
    secureLocalStorage.setItem("forgotToken", action.payload.forgotToken);
    return {
      // ...state,
      forgotToken: action.payload.forgotToken,
    };
  } else if (action.type === "removeForgot") {
    secureLocalStorage.removeItem("forgotToken");
    return {
      // ...state,
      forgotToken: null,
    };
  } else {
    return state;
  }
};
export default reducer;
