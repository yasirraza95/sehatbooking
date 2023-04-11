import * as Yup from "yup";

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

export const signUpSchema = Yup.object({
  username: Yup.string().min(2).required("Please enter the Username"),
  fname: Yup.string().min(2).required("Please enter the First Name"),
  lname: Yup.string().min(2).required("Please enter the Last Name"),
  // ssn: Yup.string().min(9).required("Please enter the SSN").typeError("SSN must be a number"),
  ssn: Yup.string()
    .min(11, "please enter valid ssn")
    .max(11, "please enter complete ssn")
    .required("Please enter the SSN"),

  address1: Yup.string().min(2).required("Please enter the Address1"),
  city: Yup.string().required("Please select the City"),
  zipcode: Yup.number().min(5).required("Please enter the Zip Code"),
  email: Yup.string().email().required("Please enter the Email"),
  phone: Yup.string().required("Please enter the Phone"),
  fax: Yup.number().min(5).required("Please enter the Fax"),
  stateprov: Yup.number().required("Please select the State"),
  stateprov2: Yup.number().required("Please select the State"),
  store: Yup.number().required("Please select the Store"),
  // stateprov2: Yup.number().required("Please enter the State"),
  city2: Yup.number().required("Please enter the City"),
  role: Yup.number().required("Please select the Role"),
  manager_signature: Yup.string()
    .notRequired()
    .when("role", {
      is: (val) => val === 1,
      then: Yup.string().required("Please enter the Signature"),
      otherwise: Yup.string().notRequired(),
    }),
  signature: Yup.string().min(2).required("Please enter the Signature"),
  email: Yup.string().email().required("Please enter the Email"),
  password: Yup.string()
    .min(6, "Your password must be at least 6 characters long")
    .required("Please enter the Password")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/,
      "Please enter atleast 1 uppercase,1 lowercase and 1 digit."
    ),
  termsAndConditions: Yup.bool().oneOf(
    [true],
    "You need to agree  the terms and conditions"
  ),
  iAgree: Yup.bool().oneOf([true], "Please accept our agreement"),
  // name: Yup.string().min(2).max(10).required("Please enter the Name"),
  confirm_password: Yup.string()
    .required("Please enter the Password again")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
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