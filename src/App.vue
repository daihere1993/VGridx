<template>
  <div id="app" style="width: 760px;">
    <v-gridx :data="gridData">
      <v-gridx-column label="日期" prop="date" width="180" type="date" canExpand=true></v-gridx-column>
      <v-gridx-column label="姓名" prop="name" width="180" type="string"></v-gridx-column>
      <!-- <v-gridx-column lebel="民族" prop="nation" width="180" type="enum" :enumItems="nations"></v-gridx-column> -->
      <v-gridx-column label="地址" prop="address" width="400" type="string"></v-gridx-column>
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
      nations: [{
        name: "han",
        label: "汉族"
      }, {
        name: "she",
        label: "畲族"
      }, {
        name: "wei",
        label: "维吾尔族"
      }],
      gridData: [{
        date: new Date(),
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        children: [{
          date: new Date(),
          name: '王大虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }]
      }, {
        date: new Date(),
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        children: [{
          date: new Date(),
          name: '王大虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }]
      }, {
        date: new Date(),
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: new Date(),
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
