<template>
  <span class="code-preview">
    <el-button 
      type="text" 
      class="preview-button" 
      @pointerup.native="onPreview">
      <i class="el-icon-warning"></i> {{ curDemoTitle }}Demo源码
    </el-button>
    <el-dialog
      append-to-body
      :title="curDemoTitle + ' - 源码'"
      :visible.sync="preview"
      width="100%">
      <div class="code-box" ref="codeBox">
        <pre><code class="hljs language-handlebars" v-html="curDemoCode"></code></pre>
      </div>
    </el-dialog>
  </span>
</template>

<script>
import hljs from 'highlight.js' 
import 'highlight.js/styles/atom-one-light.css'

export default {
  name: 'code-preview',
  data () {
    return {
      demoCodes: process.env.demoFiles,
      preview: false,
      isDraging: false,
      curDemoCode: null,
      x: window.innerWidth - 80
    }
  },
  computed: {
    curCode () {
      return this.$route.query.code
    },
    curDemoTitle () {
      return this.$route.query.codeTitle
    }
  },
  methods: {
    onDragging (e) {
      console.log(e, 'drag')
    },
    async onPreview () {
      this.preview = true
      const demoCode = this.demoCodes[this.curCode]
      this.curDemoCode = hljs.highlight(demoCode, {
        language: 'html'
      }).value
    }
  }
}
</script>

<style lang='less'>
.code-preview {
  margin-right: 10px;
}
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
  padding: 20px 15px 25px !important;
}

.preview-button {
  font-size: 16px;
  cursor: pointer;
}
.code-box {
  padding: 0 5px;
  code {
    border-radius: 4px;
  }
}
</style>