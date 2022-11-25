<template>
  <div class="code-preview">
    <el-link>
      <el-tag 
        class="preview-button" 
        @click.native="onPreview">
        demo源码
      </el-tag>
    </el-link>
    <el-dialog
      :title="curDemoTitle + ' - 源码'"
      :visible.sync="preview"
      width="100%">
      <div class="code-box" ref="codeBox" :key="curDemoCode">
        <pre><code>{{curDemoCode}}</code></pre>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import hljs from 'highlight.js' 
import 'highlight.js/styles/atom-one-dark.css'

export default {
  name: 'code-preview',
    data () {
    return {
      demoCodes: process.env.demoFiles,
      preview: false,
      curDemoCode: null,
      curDemoTitle: ''
    }
  },
  methods: {
    async onPreview () {
      this.preview = true
      this.curDemoCode = this.demoCodes[window._tab]
      this.curDemoTitle = window._tabLabel
      
      await this.$nextTick()
      const block = this.$refs.codeBox.querySelector('pre code')
      hljs.highlightBlock(block)
    }
  }
}
</script>

<style lang='less'>
.el-dialog {
  max-width: 1100px;
}
.el-dialog__header {
  box-sizing: border-box;
  height: 56px;
  padding: 16px 24px 15px;
  border-bottom: 1px solid #EDEDED;
  border-radius: 4px 4px 0 0;
  background-color: #ffffff;
}
.el-dialog__title {
  font-size: 16px;
  font-weight: 700;
}
.el-dialog__body {
  padding: 25px 20px !important;
}

.preview-button {
  position: fixed;
  right: 0;
  top: 45px;
  z-index: 100;
}
.code-box {
  padding: 0 5px;
  code {
    border-radius: 4px;
  }
}
</style>