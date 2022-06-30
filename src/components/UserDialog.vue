<template>
  <el-dialog :title="title" :visible.sync="showDialog">
    <el-form ref="userForm" :model="userForm" :rules="rules">
      <el-form-item :label="$t('user.id')" v-if="showField(FORM_FIELD.ID)">
        <el-input
          v-model="userForm.id"
          :disabled="disabledFiled(FORM_FIELD.ID)"
        ></el-input>
      </el-form-item>
      <el-form-item
        :label="$t('user.account')"
        prop="account"
        v-if="showField(FORM_FIELD.ACCOUNT)"
      >
        <el-input
          v-model="userForm.account"
          :disabled="disabledFiled(FORM_FIELD.ACCOUNT)"
        ></el-input>
      </el-form-item>
      <el-form-item
        :label="$t('user.password')"
        prop="password"
        v-if="showField(FORM_FIELD.PASSWORD)"
      >
        <el-input
          v-model="userForm.password"
          :disabled="disabledFiled(FORM_FIELD.PASSWORD)"
        ></el-input>
      </el-form-item>
      <el-form-item
        :label="$t('user.passwordConfirmation')"
        prop="passwordConfirmation"
        v-if="showField(FORM_FIELD.PASSWORD_CONFIRM)"
      >
        <el-input
          v-model="userForm.passwordConfirmation"
          :disabled="disabledFiled(FORM_FIELD.PASSWORD_CONFIRM)"
        >
        </el-input>
      </el-form-item>
      <el-form-item
        :label="$t('user.name')"
        prop="name"
        v-if="showField(FORM_FIELD.NAME)"
      >
        <el-input
          v-model="userForm.name"
          :disabled="disabledFiled(FORM_FIELD.NAME)"
        ></el-input>
      </el-form-item>
      <el-form-item
        :label="$t('user.token')"
        prop="token"
        v-if="showField(FORM_FIELD.TOKEN)"
      >
        <el-input
          v-model="userForm.token"
          :disabled="disabledFiled(FORM_FIELD.TOKEN)"
        ></el-input>
      </el-form-item>
      <el-form-item
        :label="$t('user.active')"
        prop="active"
        v-if="showField(FORM_FIELD.ACTIVE)"
      >
        <el-input
          v-model="userForm.active"
          :disabled="disabledFiled(FORM_FIELD.ACTIVE)"
        ></el-input>
      </el-form-item>
      <el-form-item
        :label="$t('user.created_at')"
        prop="account"
        v-if="showField(FORM_FIELD.CREATED_AT)"
      >
        <el-input
          v-model="userForm.createdAt"
          :disabled="disabledFiled(FORM_FIELD.CREATED_AT)"
        ></el-input>
      </el-form-item>
      <el-form-item
        :label="$t('user.updated_at')"
        prop="updatedAt"
        v-if="showField(FORM_FIELD.UPDATED_AT)"
      >
        <el-input
          v-model="userForm.updatedAt"
          :disabled="disabledFiled(FORM_FIELD.UPDATED_AT)"
        ></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button
        type="primary"
        v-if="showActionButton('INFO')"
        @click="handleConfirm"
        >Confirm</el-button
      >
      <el-button
        type="primary"
        v-if="showActionButton('CREATE')"
        @click="handleCreate"
        >Create</el-button
      >
      <el-button
        type="primary"
        v-if="showActionButton('EDIT')"
        @click="handleEdit"
        >Edit</el-button
      >
      <el-button
        type="primary"
        v-if="showActionButton('DELETE')"
        @click="handleDelete"
        >Delete</el-button
      >
    </span>
  </el-dialog>
</template>

<script>
import UserApi from "@/api/user";
import User, { FORM_FIELD, DIALOG_MODE } from "@/models/user";

export default {
  name: "UserDialog",
  props: {
    operation: {
      type: String,
      default: "",
    },
    userForm: {
      type: Object,
      default: () => {
        return new User();
      },
    },
    mode: {
      type: Object,
      default: () => {
        return DIALOG_MODE.CREATE;
      },
    },
  },
  data() {
    var checkSamePassword = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("請輸入密碼"));
      } else if (value !== this.userForm.password) {
        callback(new Error("密碼不相同"));
      } else {
        callback();
      }
    };
    return {
      FORM_FIELD,
      rules: {
        account: [
          { required: true, message: "請輸入帳號", trigger: "blur" },
          { min: 4, max: 12, message: "4 ~ 12個字元", trigger: "blur" },
          {
            pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
            message: "中英文數字組合",
            trigger: "submit",
          },
        ],
        password: [
          { required: true, message: "請輸入密碼", trigger: "blur" },
          { min: 8, max: 12, message: "8 ~ 12個字元", trigger: "blur" },
          {
            pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
            message: "中英文數字組合",
            trigger: "submit",
          },
        ],
        passwordConfirmation: [
          { required: true, message: "請輸入名稱", trigger: "blur" },
          { validator: checkSamePassword, trigger: "blur" },
        ],
        name: [
          { required: true, message: "請輸入名稱", trigger: "blur" },
          { max: 10, message: "最大為10個字元", trigger: "blur" },
          {
            pattern: /^[\w]{0,10}$/,
            message: "中英文數字組合",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    title() {
      return `${this.operation} ${this.$t("label.user")}`;
    },
    showDialog: {
      set(value) {
        if (!value) {
          this.resetValidation();
        }
        this.$store.commit("showDialog", value);
      },
      get() {
        return this.$store.getters.showUserDialog;
      },
    },
  },
  created() {},
  watch: {},
  methods: {
    async validation() {
      this.$refs["userForm"].validate((valid) => {
        // 驗證通過為true，有一個不通過就是false
        if (valid) {
          // 通過校驗
        } else {
          // alert(valid)
          // 沒通過校驗
        }
      });
    },
    resetValidation() {
      this.userForm.clear();
      this.$refs["userForm"].resetFields();
    },
    async handleConfirm() {
      this.closeDialog();
    },
    async handleCreate() {
      this.validation();
      const req = this.userForm.reqCreate;
      try {
        const { data } = await UserApi.createUser(req);
        this.successAction();
      } catch (error) {
        console.log(error);
      }
    },
    async handleEdit() {
      this.validation();
      const req = this.userForm.reqEdit;
      try {
        const  data  = await UserApi.editUser(req);
        this.successAction();
      } catch (error) {
        console.log(error);
      }
    },
    async handleDelete() {
      this.validation();
      const req = this.userForm.reqDelete;
      try {
        const { data } = await UserApi.deleteUser(req);
        this.successAction();
      } catch (error) {
        console.log(error);
      }
    },
    showActionButton(modeId) {
      return this.mode.id == modeId;
    },
    showField(formField) {
      return this.mode.fields.includes(formField);
    },
    disabledFiled(formField) {
      return this.mode.disableds.includes(formField);
    },
    closeDialog() {
      this.$store.commit("showDialog", false);
    },
    successAction() {
      this.$store.commit("showDialog", false);
      this.$emit("loadData");
    },
  },
};
</script>

<style></style>
