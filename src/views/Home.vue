<template>
    <div class="container">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column :label="$t('user.id')" width="180">
                <template slot-scope="scope">
                    <span>{{ scope.row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('user.account')" width="180">
                <template slot-scope="scope">
                    <!-- <i class="el-icon-time"></i> -->
                    <!-- <span style="margin-left: 10px">{{ scope.row.date }}</span> -->
                    <span>{{ scope.row.account }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('user.name')" width="180">
                <template slot-scope="scope">
                    <span>{{ scope.row.name }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('user.active')" width="180">
                <template slot-scope="scope">
                    <span>{{ scope.row.active }}</span>
                </template>
            </el-table-column>
            <el-table-column :label="$t('user.created_at')" width="180">
                <template slot-scope="scope">
                    <span>{{ scope.row.created_at }}</span>
                </template>
            </el-table-column>
            </el-table-column>
            <el-table-column :label="$t('user.updated_at')" width="180">
                <template slot-scope="scope">
                    <span>{{ scope.row.updated_at }}</span>
                </template>
            </el-table-column>
            <!-- <el-table-column :label="user.name" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>Name: {{ scope.row.name }}</p>
            <p>Addr: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="Operations">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete
          </el-button>
        </template>
      </el-table-column> -->
        </el-table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [
                {
                    id: 1,
                    account: "admin",
                    name: "管理者",
                    active: 1,
                    created_at: "2020-06-06 09:40:08",
                    updated_at: "2020-06-07 17:42:31",
                },
            ],
        };
    },
    beforeMount() { },
};
</script>

<style scoped>
.container {
    width: 90%;
}
</style>
