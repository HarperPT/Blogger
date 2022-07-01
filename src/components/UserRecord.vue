<template>
  <div class="record-container">
    <el-form
      label-position="left"
      label-width="100px"
      ref="recordForm"
      :model="recordForm"
      :rules="rules"
    >
      <el-form-item :label="$t('user.account')" prop="account">
        <el-autocomplete
          class="inline-input"
          v-model="recordForm.account"
          :fetch-suggestions="querySearch"
          placeholder="Please Input"
          value-key="account"
        ></el-autocomplete>
      </el-form-item>
      <el-form-item :label="$t('action.query_time')" prop="queryTime">
        <el-date-picker
          v-model="recordForm.queryTime"
          type="datetimerange"
          start-placeholder="Start Date"
          end-placeholder="End Date"
          :default-time="['12:00:00']"
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button size="medium" type="primary" @click="handleRecord">
          {{ $t("action.record") }}
        </el-button>
      </el-form-item>
    </el-form>
    <div>
      <p>
        {{ result == "" ? "No Data" : result }}
      </p>
    </div>
  </div>
</template>

<script>
import UserApi from "@/api/user";
export default {
  name: "UserRecord",
  props: {
    userList: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    users() {
      const users = this.userList.map((user) => {
        return {
          value: user,
        };
      });
      return users;
    },
  },
  data() {
    return {
      result: "",
      recordForm: {
        account: "",
        queryTime: "",
      },
      rules: {
        account: [
          { min: 4, max: 12, message: "4 ~ 12個字元", trigger: "blur" },
          {
            pattern: /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/,
            message: "中英文數字組合",
            trigger: "submit",
          },
        ],
        queryTime: [{ required: true, message: "請輸入時間", trigger: "blur" }],
      },
      pickerOptions: {
        disabledDate: this.disabledDate,
        shortcuts: [
          {
            text: "Last week",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "Last month",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "Last 3 months",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
    };
  },
  methods: {
    querySearch(queryString, cb) {
      var users = this.userList;
      var results = queryString
        ? users.filter(this.createFilter(queryString))
        : users;
      // call callback function to return suggestions
      cb(results);
    },
    createFilter(queryString) {
      return (user) => {
        return user.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    },
    async handleRecord() {
      if (!(await this.validation())) return;
      const req = {
        account: this.recordForm.account,
        start_time: this.recordForm.queryTime[0],
        end_time: this.recordForm.queryTime[1],
      };
      try {
        const { data } = await UserApi.getUserRecord(req);
        this.result = data.result;
      } catch (error) {
        this.$alert(error);
      }
    },
    async validation() {
      return new Promise((res, rej) => {
        this.$refs["recordForm"].validate((valid) => {
          if (valid) {
            res(valid);
          } else {
            this.$alert("Form Valid");
            res(valid);
          }
        });
      });
    },
    disabledDate(date) {
      if (this.fromDate) {
        return this.fromDate > date;
      }
      return false;
    },
  },
};
</script>

<style scoped>
* {
  /* outline: red 1px solid;  */
}

.record-container {
  width: 100%;
  background-color: rgb(253, 255, 223);
}

.record-container > * {
  margin-top: 5%;
  display: flex;
  /* justify-content: left; */
  flex-direction: row;
  align-items: center;
}
</style>
