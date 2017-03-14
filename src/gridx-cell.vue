<template>
  <td :class="getCellClass">
    <div class="gridx-cell">
      <div 
        class="cell-expand-icon" 
        @click="row.expand"
        v-show="column.canExpand"
        :style="{ visibility: iconVisible }">
        <i class="fa" :class="[row.expanded ? 'fa-minus-square-o' : 'fa-plus-square-o']"></i>
      </div>
      <div class="gridx-cell-value" v-if="!isEditing" v-on:click="edit">
        {{ row.value[column.prop] }}
      </div>
      <component :is="asyncWidget" v-model="value" style="width: 100%;" v-clickoutside="handleClose" v-else></component>
    </div>
  </td>
</template>

<script>
  import { DatePicker } from 'element-ui';
  import Clickoutside from './clickoutside.js'

  export default {
    name: 'VGridxCell',

    data () {
      return {
        asyncWidget: DatePicker,
        isEditing: false,
        value: ""
      }
    },

    props: {
      row: {
        required: true
      },
      column: {
        required: true
      }
    },
    
    directives: { Clickoutside },

    computed: {
      getCellClass () {
        if (this.column.canExpand) {
          if (this.row.parent) {
            return 'gridx-tree-expand-cell'
          }
        }
      },
      iconVisible () {
        if (this.row.children && this.row.children.length && this.column.canExpand) {
          return 'visible';
        } else {
          return 'hidden';
        }
      }
    },

    methods: {
      edit () {
        this.value = this.row.value[this.column.prop];
        this.isEditing = true;
        // event.stopPropagation();
      },
      handleClose () {
        this.isEditing = false;
      }
    }
  }
</script>
