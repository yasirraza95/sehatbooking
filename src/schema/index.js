import * as Yup from "yup";
const phoneRegExp = /^(03)([0-9]{9})$/gm;

export const contactValidation = Yup.object().shape({
  first_name: Yup.string().required("Please enter First Name"),
  last_name: Yup.string().required("Please enter Last Name"),
  email: Yup.string()
    .email("Please enter a valid Email Address")
    .required("Please enter Email Address"),
  subject: Yup.string().required("Please enter Subject"),
  message: Yup.string().required("Please enter Message"),
  // captcha: Yup.string().required("Captcha is required"),
});

export const loginValidation = Yup.object().shape({
  username: Yup.string().required("Please enter Username"),
  password: Yup.string().required("Please enter Password"),
});

export const newsletterValidation = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid Email Address")
    .required("Please enter Email Address"),
});

export const passwordsValidation = Yup.object().shape({
  new_password: Yup.string()
    .required("Please enter Password")
    .min(6, "Your password must be at least 6 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
      "Please enter atleast 1 uppercase,1 lowercase and 1 digit."
    ),

  confirm_password: Yup.string()
    .required("Please enter Password")
    .min(6, "Your password must be at least 6 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
      "Please enter atleast 1 uppercase,1 lowercase and 1 digit."
    )
    .oneOf([Yup.ref("new_password"), null], "Passwords must match"),
});

export const donorSearch = Yup.object().shape({
  city: Yup.string().required("Please select City"),
  area: Yup.string().required("Please select City Area"),
  group: Yup.string().required("Please select Blood Group"),
});

export const bloodRequest = Yup.object().shape({
  state: Yup.string().required("Please select State"),
  city: Yup.string().required("Please select City"),
  area: Yup.string().required("Please select City Area"),
  group: Yup.string().required("Please select Blood Group"),
  phone: Yup.string()
    .required("Please enter Phone No.")
    .matches(phoneRegExp, "Please enter valid Phone No."),
});

export const signImSchema = Yup.object({
  name: Yup.string()
    .min(2, "User Name must greater than 2")
    .max(50, "Length exceeds")
    .required("Please enter the User Name"),
  password: Yup.string()
    .min(2, "Password must greater than 2")
    .max(100, "Length exceeds")
    .required("Please enter the Password"),
});

export const UpAdminSchema = Yup.object({
  fname: Yup.string().min(2).required("Please enter the First Name"),
  lname: Yup.string().min(2).required("Please enter the Last Name"),
  email: Yup.string().min(2).required("Please enter the Email"),
  address1: Yup.string().min(2).required("Please enter the Address1"),
  state: Yup.string().required("Please enter the State"),
  city: Yup.string().required("Please enter the City"),
  phone: Yup.string().required("Please enter the Phone"),
  zipcode: Yup.string().min(5).required("Please enter the Zip Code"),
  // password: Yup.string()
  // .when({
  //   is: (password) => password,
  //   then: Yup.string()
  //     .required("Please enter the Password")
  //     .min(6, "Your password must be at least 6 characters long")
  //     .matches(
  //       /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
  //       "Please enter atleast 1 uppercase,1 lowercase and 1 digit."
  //     ),
  //   otherwise: Yup.string().notRequired(),
  // }),
  new_password: Yup.string().when({
    is: (new_password) => new_password,
    then: Yup.string()
      .required("Please enter the Password")
      .min(6, "Your password must be at least 6 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
        "Please enter atleast 1 uppercase,1 lowercase and 1 digit."
      ),
    otherwise: Yup.string().notRequired(),
  }),

  confirm_password: Yup.string()
    .when("new_password", {
      is: (new_password) => new_password,
      then: Yup.string().required("Please enter the Password again"),
      otherwise: Yup.string().notRequired(),
    })
    .oneOf([Yup.ref("new_password"), null], "Passwords must match"),
});

export const forgotPassword = Yup.object({
  email: Yup.string().email().required("Please enter the Email"),
});

export const updateRegisterStoreSchema = Yup.object({
  stateprov: Yup.number().required("Please enter the State"),
  city: Yup.number()
    .required("Please enter the City")
    .typeError("City must be a number"),
  store: Yup.number()
    .required("Please enter the Store")
    .typeError("Store must be a number"),
});

export const updateStoreSchema = Yup.object({
  stateprov: Yup.number().required("Please enter the State"),
  city: Yup.number().required("Please enter the City"),
  store: Yup.number().required("Please enter the Store"),
});

export const registerValidation = Yup.object({
  first_name: Yup.string().min(2).required("Please enter First Name"),
  last_name: Yup.string().min(2).required("Please enter Last Name"),
  email: Yup.string()
    .email("Please enter a valid Email Address")
    .required("Please enter Email Address"),
  phone: Yup.string()
    .required("Please enter Phone No.")
    .matches(phoneRegExp, "Please enter valid Phone No."),
  password: Yup.string()
    .required("Please enter Password")
    .min(6, "Your password must be at least 6 characters long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
      "Please enter atleast 1 uppercase,1 lowercase and 1 digit."
    ),
  address: Yup.string().required("Please enter Address"),
  state: Yup.string().required("Please select State"),
  city: Yup.string().required("Please select City"),
  city_area: Yup.string().min(2).required("Please enter City Area"),

  group: Yup.string().required("Please select Blood Group"),
  dob: Yup.string().required("Please select Date of Birth"),
  last_bleed: Yup.string().required("Please select Last Bleed Date"),
  // captcha: Yup.string().required("Captcha is required"),
});

export const addState = Yup.object({
  stateName: Yup.string().required("Please fill the State Name"),
});
export const quizSearch = Yup.object({
  fieldtype: Yup.number().required("Please Select a Column"),
  searchval: Yup.string().required("Please fill the search field"),
});
export const addCity = Yup.object({
  cityName: Yup.string().required("Please fill the City Name"),
  zipCode: Yup.string().min(5).required("Please enter the Zip Code"),
  stateName: Yup.number().required("Please Select a State Name"),
});
export const UpdateProduct = Yup.object({
  price: Yup.string().required("Please fill the Price"),
});
export const addStore = Yup.object({
  storeName: Yup.string().required("Please fill the Store Name"),
  storeAccount: Yup.number().required("Please fill the Store Account"),
  storeAddress: Yup.string().required("Please fill the Store Address"),
  zipCode: Yup.string().min(5).required("Please fill the Zip code"),
  city: Yup.number().required("Please Select the City"),
  dos: Yup.number().required("Please Select the DOS"),
  ndos: Yup.number().required("Please Select the NDOS"),
});

export const addProductSchema = Yup.object({
  productName: Yup.string().required("Please fill the Product Name"),
  productNumber: Yup.string().required("Please fill the Product Number"),
});

export const addProductSizeSchema = Yup.object({
  productName: Yup.string().required("Please Select Product"),
  productSize: Yup.string().required("Please Select Product Size:"),
  productPrice: Yup.string().required("Please fill Product Price"),
});
