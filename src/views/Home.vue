<template>
  <div class="container">
    <div class="table-container">
      <div>
        <el-button size="mini" type="success" @click="handleCreate()">
          {{ $t("action.create") }}
        </el-button>
      </div>

      <el-table
        :data="tableData"
        :default-sort="{ prop: 'date', order: 'ascending' }"
        border
      >
        <el-table-column :label="$t('user.id')" width="50">
          <template slot-scope="scope">
            <span>{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('user.account')" max-width="100">
          <template slot-scope="scope">
            <!-- <i class="el-icon-time"></i> -->
            <!-- <span style="margin-left: 10px">{{ scope.row.date }}</span> -->
            <span>{{ scope.row.account }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('user.name')">
          <template slot-scope="scope">
            <span>{{ scope.row.name }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('user.active')" width="80">
          <template slot-scope="scope">
            <el-tag type="success" v-if="scope.row.active == 1">Active</el-tag>
            <el-tag type="danger" v-if="scope.row.active == 2">Inactive</el-tag>
          </template>
        </el-table-column>
        <el-table-column :label="$t('user.created_at')" sortable prop="date">
          <template slot-scope="scope">
            <span>{{ scope.row.created_at }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('user.updated_at')">
          <template slot-scope="scope">
            <span>{{ scope.row.updated_at }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Info" width="70">
          <template slot-scope="scope">
            <el-button
              size="mini"
              icon="el-icon-search"
              type="primary"
              plain
              @click="getUserInfo(scope.$index, scope.row)"
            >
            </el-button>
          </template>
        </el-table-column>
        <el-table-column label="Operations">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
              >Edit
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <user-record :user-list="tableData"></user-record>
    </div>
    <user-dialog
      :user-form="userForm"
      :mode="mode"
      @loadData="loadUserList()"
    ></user-dialog>
  </div>
</template>

<script>
import UserApi from "@/api/user";
import User, { DIALOG_MODE } from "@/models/user";
import UserDialog from "@/components/UserDialog.vue";
import UserRecord from "@/components/UserRecord.vue";

export default {
  components: { UserDialog, UserRecord },
  data() {
    return {
      userForm: new User(),
      mode: DIALOG_MODE.INFO,
      tableData: [],
    };
  },
  computed: {},
  methods: {
    async loadUserList() {
      try {
        const { data } = await UserApi.getUsers();
        this.tableData = data.result;
      } catch (error) {}
    },
    async getUserInfo(index, row) {
      const account = row.account;
      this.mode = DIALOG_MODE.INFO;
      try {
        const { data } = await UserApi.getUserInfo(account);
        this.userForm.data = data.result;
        await this.showUserDialog();
      } catch (error) {
        console.log(error);
      }
    },
    handleCreate(index, row) {
      this.mode = DIALOG_MODE.CREATE;
      this.userForm = new User();
      this.showUserDialog();
    },
    handleEdit(index, row) {
      this.mode = DIALOG_MODE.EDIT;
      this.userForm.data = row;
      this.showUserDialog();
    },
    async handleDelete(index, row) {
      this.mode = DIALOG_MODE.DELETE;
      this.userForm.data = row;
      this.showUserDialog();
    },
    async showUserDialog() {
      this.$store.dispatch("showUserDialog");
    },
  },
  mounted() {
    this.loadUserList();
  },
};
</script>

<style scoped>
/* * {
  outline: 1px solid red;
} */

.container {
  width: 100%;
}

.table-container {
  width: 80%;
  margin-left: 10%;
  margin-top: 5%;
  padding: 1% 0;
}

.table-container > div {
  float: right;
}

.table-container > div > button {
  margin-bottom: 2%;
  padding: 10px 20px;
}
</style>
