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
      <div class="gridx-cell-value" v-if="!isEditing" v-on:dblclick="edit">
        {{ fomattedValue }}
      </div>
      <keep-alive v-else>
        <component :is="asyncComponent" v-model="value" style="width: 100%;" v-clickoutside="handleClose"></component>
      </keep-alive>
    </div>
  </td>
</template>

<script>
  import mo2js from 'mo2js';
  import ELComponents from 'element-ui';
  import Clickoutside from './clickoutside.js';

  export default {
    name: 'VGridxCell',

    data () {
      return {
        isEditing: false,
        value: this.row.value[this.column.prop]
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
      asyncComponent () {
        let component_name, component;
        const column_type = this.column.type;
        switch (column_type) {
          case 'date':
            component_name = 'DatePicker';
            break;
          case 'enum':
            component_name = 'Select';
            break;
          default: 
            component_name = 'Input';
            break;
        }
        component = ELComponents[component_name];
        return component;
      },
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
      },
      fomattedValue () {
        if (this.value instanceof Date) {
          return mo2js.date.format(this.value, 'YYYY-MM-DD');
        } else {
          return this.value;
        }
      }
    },

    methods: {
      edit () {
        if (!this.row.store.states.isEditing) {
          event.stopPropagation();
        }
        this.isEditing = this.row.store.states.isEditing = true;
      },
      handleClose () {
        this.isEditing = this.row.store.states.isEditing = false;
      }
    }
  }
</script>
