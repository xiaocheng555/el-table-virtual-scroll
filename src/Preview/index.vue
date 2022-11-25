<template>
  <div class="code-preview">
    <VueDragResize 
      :w="76" 
      :h="32" 
      :x="x" 
      :y="50" 
      :z="999"
      :isResizable="false" 
      @dragging="onDragging">
      <el-tag 
        class="preview-button" 
        @pointerup.native="onPreview">
        demo源码
      </el-tag>
    </VueDragResize>
    <el-dialog
      :title="curDemoTitle + ' - 源码'"
      :visible.sync="preview"
      width="100%">
      <div class="code-box" ref="codeBox">
        <pre><code class="hljs language-handlebars" v-html="curDemoCode"></code></pre>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import hljs from 'highlight.js' 
import 'highlight.js/styles/atom-one-light.css'
import VueDragResize from 'vue-drag-resize'

export default {
  name: 'code-preview',
    components: {
      VueDragResize
    },
    data () {
    return {
      demoCodes: process.env.demoFiles,
      preview: false,
      curDemoCode: null,
      curDemoTitle: '',
      isDraging: false,
      x: window.innerWidth - 80
    }
  },
  methods: {
    onDragging (e) {
      console.log(e, 'drag')
    },
    async onPreview () {
      this.preview = true
      const demoCode = this.demoCodes[window._tab]
      this.curDemoCode = hljs.highlight(demoCode, {
        language: 'html'
      }).value
      this.curDemoTitle = window._tabLabel
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
  padding: 20px 15px 25px !important;
}

.preview-button {
  cursor: pointer;
}
.code-box {
  padding: 0 5px;
  code {
    border-radius: 4px;
  }
}
</style>