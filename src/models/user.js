export default class User {
  constructor() {
    this.account = "";
    this.password = "";
    this.passwordConfirmation = "";
    this.name = "";
    this.active = "";
    this.id = "";
    this.token = "";
    this.createdAt = "";
    this.updatedAt = "";
  }

  set data(user) {
    this.account = user["account"];
    this.password = user["password"];
    this.passwordConfirmation = user["password_confirmation"];
    this.name = user["name"];
    this.active = user["active"];
    this.id = user["id"];
    this.token = user["token"];
    this.createdAt = user["created_at"];
    this.updatedAt = user["updated_at"];
  }

  get reqCreate() {
    return {
      account: this.account,
      password: this.password,
      password_confirmation: this.passwordConfirmation,
      name: this.name,
      active: this.active,
    };
  }

  get reqEdit() {
    return {
      password: this.password,
      password_confirmation: this.passwordConfirmation,
      name: this.name,
      active: this.active,
    };
  }

  get reqDelete() {
    return {
      account: this.account,
    };
  }

  clear() {
    this.account = "";
    this.password = "";
    this.passwordConfirmation = "";
    this.name = "";
    this.active = "";
    this.id = "";
    this.token = "";
    this.createdAt = "";
    this.updatedAt = "";
  }
}

export const FORM_FIELD = {
  ACCOUNT: "ACCOUNT",
  PASSWORD: "PASSWORD",
  PASSWORD_CONFIRM: "PASSWORD_CONFIRM",
  NAME: "NAME",
  ACTIVE: "ACTIVE",
  ID: "ID",
  TOKEN: "TOKEN",
  CREATED_AT: "CREATED_AT",
  UPDATED_AT: "UPDATED_AT",
};

export const DIALOG_MODE = {
  INFO: {
    id: "INFO",
    label: "action.info",
    fields: [
      FORM_FIELD.ACCOUNT,
      FORM_FIELD.PASSWORD,
      FORM_FIELD.NAME,
      FORM_FIELD.ACTIVE,
      FORM_FIELD.ID,
      FORM_FIELD.TOKEN,
      FORM_FIELD.CREATED_AT,
      FORM_FIELD.UPDATED_AT,
    ],
    disableds: [
      FORM_FIELD.ACCOUNT,
      FORM_FIELD.PASSWORD,
      FORM_FIELD.NAME,
      FORM_FIELD.ACTIVE,
      FORM_FIELD.ID,
      FORM_FIELD.TOKEN,
      FORM_FIELD.CREATED_AT,
      FORM_FIELD.UPDATED_AT,
    ],
  },
  CREATE: {
    id: "CREATE",
    label: "action.create",
    fields: [
      FORM_FIELD.ACCOUNT,
      FORM_FIELD.PASSWORD,
      FORM_FIELD.PASSWORD_CONFIRM,
      FORM_FIELD.NAME,
      FORM_FIELD.ACTIVE,
    ],
    disableds: [],
  },
  EDIT: {
    id: "EDIT",
    label: "action.edit",
    fields: [
      FORM_FIELD.PASSWORD,
      FORM_FIELD.PASSWORD_CONFIRM,
      FORM_FIELD.NAME,
      FORM_FIELD.ACTIVE,
    ],
    disableds: [],
  },
  DELETE: {
    id: "DELETE",
    label: "action.delete",
    fields: [FORM_FIELD.ACCOUNT],
    disableds: [FORM_FIELD.ACCOUNT],
  },
};

export const USER_STAUTS = [
  {
    label: "active",
    value: 1,
  },
  {
    label: "Inactive",
    value: 2,
  },
];
