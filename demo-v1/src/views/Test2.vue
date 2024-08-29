<template>
  <div class="custom-tree-table">
    <el-table
      ref="tableDataRef"
      :data="tableData"
      max-height="400"
      row-key="id"
      border
      :tree-props="{ children: 'child' }"
      default-expand-all
    >
      <el-table-column width="55" align="center" type="index" label="序号" />
      <el-table-column label="参数名" prop="key" min-width="200">
        <template #default="{ row }">
          <el-input v-if="row.isEdit" v-model="row.key" placeholder="请输入" />
          <span v-else>{{ row.key }}</span>
        </template>
      </el-table-column>
      <el-table-column label="数据类型" prop="type" min-width="200">
        <template #default="{ row }">
          <el-select
            v-if="row.isEdit"
            v-model="row.type"
            filterable
            clearable
            placeholder="请选择"
            style="width: 100%"
            @change="handleDataTypeChange($event, row)"
          >
            <el-option
              v-for="item in source.dataTypeOptions"
              :key="item.value"
              :value="item.value"
              :label="item.label"
            />
          </el-select>
          <span v-else>{{ row.type }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" min-width="100">
        <template slot="header">
          <el-tooltip
            :hide-after="500"
            class="item"
            effect="dark"
            content="添加根节点"
            placement="top"
          >
            <el-button
              type="text"
              icon="el-icon-circle-plus-outline"
              @click="onAddRoot"
            />
          </el-tooltip>
        </template>
        <template #default="{ row, $index }">
          <el-tooltip
            :hide-after="hideAfter"
            :open-delay="openDelay"
            effect="dark"
            content="添加"
            placement="top"
          >
            <el-button
              type="text"
              icon="el-icon-plus"
              @click="onAddSibling(row, $index)"
            />
          </el-tooltip>

          <el-tooltip
            v-if="row.type === 'object'"
            :hide-after="hideAfter"
            :open-delay="openDelay"
            effect="dark"
            content="添加子节点"
            placement="top"
          >
            <el-button
              type="text"
              icon="el-icon-circle-plus-outline"
              @click="onAddChild(row, $index)"
            />
          </el-tooltip>

          <el-tooltip
            v-if="!row.isEdit"
            :hide-after="hideAfter"
            :open-delay="openDelay"
            effect="dark"
            content="编辑"
            placement="top"
          >
            <el-button
              type="text"
              icon="el-icon-edit"
              @click="onEdit(row, $index)"
            />
          </el-tooltip>

          <el-tooltip
            v-if="row.isEdit"
            :hide-after="hideAfter"
            :open-delay="openDelay"
            effect="dark"
            content="保存"
            placement="top"
          >
            <el-button
              type="text"
              icon="el-icon-circle-check"
              @click="onSave(row, $index)"
            />
          </el-tooltip>

          <el-tooltip
            :hide-after="hideAfter"
            :open-delay="openDelay"
            effect="dark"
            content="删除"
            placement="top"
          >
            <el-button
              type="text"
              icon="el-icon-delete"
              @click="onDelete(row, $index)"
            />
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'CustomTreeTable',
  data() {
    return {
      source: {
        dataTypeOptions: [
          { label: 'Array', value: 'array' },
          { label: 'String', value: 'string' },
          { label: 'Boolean', value: 'boolean' },
          { label: 'Object', value: 'object' },
          { label: 'Number', value: 'number' }
        ]
      },
      hideAfter: 1500,
      openDelay: 500,
      // 数据示例
      tableData: [
        {
          key: 'name',
          type: 'string',
          child: null
        },
        {
          key: 'age',
          type: 'integer',
          child: null
        },
        {
          key: 'response',
          type: 'object',
          child: [
            {
              key: 'childrenone',
              type: 'string',
              child: null
            },
            {
              key: 'childrentwo',
              type: 'boolean',
              child: null
            }
          ]
        },
        {
          key: 'address',
          type: 'string',
          child: null
        }
      ]
    }
  },
  created() {
    this.tableData = this.handleTableDataFormat(this.tableData)
  },
  methods: {
    // 数据准备 生成 id 和 parentId
    handleTableDataFormat(data) {
      const tableFormat = (tableData, parentId) => {
        tableData.forEach((item) => {
          item.isEdit = false
          item.parentId = parentId || '0'
          item.id = this.generateId()
          if (item.child && item.child.length > 0) {
            tableFormat(item.child, item.id)
          }
        })
      }

      tableFormat(data)
      console.log('Format tableData', data)
      return data
    },
    /**
     * 生成简单id 树形列表必须有id
     */
    generateId() {
      return `id_${new Date().getTime()}${Math.floor(Math.random() * 10000)}`
    },
    // 数据类型改变
    handleDataTypeChange(val, row) {
      row.type = val
      this.$set(row, 'type', val)
      // 对象类型存在子节点
      if (val === 'object') {
        this.$set(row, 'child', [])
      }
    },
    /**
     * 生成一行数据
     */
    generateRow(parentId) {
      return {
        id: this.generateId(),
        key: '',
        type: '',
        isEdit: true,
        parentId
      }
    },
    // 添加根节点
    onAddRoot() {
      this.tableData.push(this.generateRow('0'))
    },
    /**
     * 处理添加一行数据
     * @param {object} row 当前节点
     * @param {number} index
     * @param {string} type 操作类型 SIBLING 同级 / CHILD 子级
     */
    handleAddOneRow(row, index, type) {
      const { parentId, id } = row
      const curId = type === 'SIBLING' ? parentId : id
      let curRow = {}
      // 在 tableData 中，找到当前节点
      const findRow = (data) => {
        data.forEach((item) => {
          if (item.id === curId) {
            curRow = { ...item }
          }
          if (item.child && item.child.length) {
            findRow(item.child)
          }
        })
      }

      findRow(this.tableData)

      const { id: generateParentId, child } = curRow

      if (child) {
        child.push(this.generateRow(generateParentId))
      } else {
        this.$set(curRow, 'child', [this.generateRow(generateParentId)])
      }
    },
    // 添加同级节点
    onAddSibling(row, index) {
      console.log('onAddSibling', row, index)
      const { parentId } = row
      // 先判断是不是根节点
      if (parentId === '0') {
        // 当前节点直接添加
        this.tableData.push(this.generateRow('0'))
      } else {
        this.handleAddOneRow(row, index, 'SIBLING')
      }
    },
    // 添加子节点  todo
    onAddChild(row, index) {
      this.handleAddOneRow(row, index, 'CHILD')
    },
    // 编辑
    onEdit(row) {
      this.$set(row, 'isEdit', true)
    },
    // 保存
    onSave(row) {
      this.$set(row, 'isEdit', false)
    },
    // 删除当前节点及对应子节点数据
    onDelete(row) {
      const msg =
        '<div><span style="color: #F56C6C">删除后将不可恢复</span>，你还要继续吗？</div>'
      this.$confirm(msg, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        dangerouslyUseHTMLString: true,
        type: 'warning'
      })
        .then(() => {
          const { parentId, id } = row
          // 根节点直接删除
          if (parentId === '0') {
            const delIndex = this.tableData.findIndex((item) => item.id === id)
            this.tableData.splice(delIndex, 1)
          } else {
            // 找到父节点，通过父节点删除
            let parentRow = {}
            const findRow = (data) => {
              data.forEach((item) => {
                if (item.id === parentId) {
                  parentRow = { ...item }
                }
                if (item.child && item.child.length) {
                  findRow(item.child)
                }
              })
            }
            findRow(this.tableData)

            const { child } = parentRow

            const delIndex = child.findIndex((item) => item.id === id)

            child.splice(delIndex, 1)
          }
        })
        .catch(() => {})
    }
  }
}
</script>
<style lang="less" scoped>
.custom-tree-table {
  height: 100%;
  background-color: #fff;
  padding: 20px;
}
</style>
