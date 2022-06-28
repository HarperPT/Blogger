<template>
  <div class="container">
    <el-button
      size="mini"
      type="success"
      @click="handleCreate()"
      style="float: right"
    >
      {{ $t("action.create") }}
    </el-button>
    <el-table :data="tableData" style="">
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
      <el-table-column :label="$t('user.active')">
        <template slot-scope="scope">
          <span>{{ scope.row.active }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('user.created_at')">
        <template slot-scope="scope">
          <span>{{ scope.row.created_at }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="$t('user.updated_at')">
        <template slot-scope="scope">
          <span>{{ scope.row.updated_at }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Info">
        <template slot-scope="scope">
          <el-button
            size="mini"
            icon="el-icon-search"
            type="primary"
            plain
            @click="getUserInfo(scope.$index, scope.row)"
          >
          </el-button>
        </template> </el-table-column
      >k
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

export default {
  components: { UserDialog },
  data() {
    return {
      userForm: new User(),
      mode: DIALOG_MODE.INFO,
      tableData: [],
    };
  },
  computed: {
    showDialog() {
      return this.$store.state.showUserDialog;
    },
  },
  methods: {
    async loadUserList() {
      try {
        const { data } = await UserApi.getUsers();
        console.log(data.result);
        this.tableData = data.result;
      } catch (error) {
        console.log(error);
      }
    },
    async getUserInfo(index, row) {
      const account = row.account;
      this.mode = DIALOG_MODE.INFO;
      try {
        const { data } = await UserApi.getUserInfo(account);
        this.userForm.data = data.result;
        console.log(data.result);
        this.showUserDialog();
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
    handleDelete(index, row) {
      this.mode = DIALOG_MODE.DELETE;
    },

    showUserDialog() {
      this.$store.dispatch("showUserDialog");
    },
  },
  beforeMount() {
    this.loadUserList();
  },
};
</script>

<style scoped>
/* * {
  outline: 1px solid red;
} */

.container {
  width: 90%;
}
</style>
