<template>
  <div>
    <el-table :data="articles">
      <el-table-column prop="title" label="标题" width="140"></el-table-column>
      <el-table-column prop="body" label="内容" width="220"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <!-- 需要的时候用scope.row来输出显示 -->
          <el-button @click="edit(scope.row._id)" type="text" size="small">编辑</el-button>
          <el-button @click="remove(scope.row._id)" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: []
    };
  },
  methods: {
    // 获取数据
    fetch() {
      this.$http.get("articles").then(res => {
        this.articles = res.data;
      });
    },
    edit(id) {
      this.$router.push(`/articles/${id}/edit`)
    },
    remove(id) {
      this.$http.delete(`articles/${id}`).then(() => {
          this.$message({
            message: "文章删除成功",
            type: "success"
          });
          this.fetch()
        }
        // 在删除了之后需要再次更新界面数据，但是如果把create里面的方法直接照搬冗余高，故写到fetch方法中
      );
    }
  },
  created() {
    this.$http.get("articles").then(res => {
      this.articles = res.data;
    });
  }
};
</script>