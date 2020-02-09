<template>
  <el-form @submit.native.prevent="saveArticle" ref="form" :model="article" label-width="80px">
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input type="textarea" v-model="article.body"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      article: {}
    };
  },
  methods: {
    saveArticle() {
      // 此处由于eslint判断创建的变量未使用会报错，故加上下面那行注释来解决
      this.$http.post("articles", this.article).then(res => {// eslint-disable-line no-unused-vars
        this.$message({
          message: "文章创建成功",
          type: "success"
        });
        this.$router.push('/articles/index')
      });
    }
  }
};
</script>