<template>
  <div id="app" style="width: 760px;">
    <v-gridx :data="gridData">
      <v-gridx-column label="日期" prop="date" width="180" canExpand=true></v-gridx-column>
      <v-gridx-column label="姓名" prop="name" width="180"></v-gridx-column>
      <v-gridx-column label="地址" prop="address" width="400"></v-gridx-column>
    </v-gridx>
  </div>
</template>

<script>
import VGridx from './gridx'
import VGridxColumn from './gridx-column'

export default {
  name: 'app',

  data () {
    return {
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        children: [{
          date: '2016-05-04',
          name: '王大虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }]
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        children: [{
          date: '2016-05-04',
          name: '王大虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }]
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
  },

  components: {
    VGridx,
    VGridxColumn
  }
}
</script>
