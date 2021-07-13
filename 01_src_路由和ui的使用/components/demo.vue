<template>
  <el-table :data="tableData"
            border>
    <el-table-column prop="date"
                     label="日期">
    </el-table-column>
    <el-table-column prop="name"
                     label="姓名">
    </el-table-column>
    <el-table-column prop="address"
                     label="地址">
    </el-table-column>
    <el-table-column>
      <el-tooltip class="item"
                  effect="dark"
                  content="修改"
                  placement="top">
        <el-button type="primary"
                   icon="el-icon-edit"
                   circle></el-button>
      </el-tooltip>
      <el-tooltip class="item"
                  effect="dark"
                  content="删除"
                  placement="top">
        <el-button type="danger"
                   icon="el-icon-delete"
                   circle></el-button>
      </el-tooltip>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  }
}
</script>

<style scoped >
</style>
