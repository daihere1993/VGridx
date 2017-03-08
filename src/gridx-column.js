import { DatePicker } from 'element-ui'

export default {
  name: 'VGridxColumn',

  data () {
    return {
      columns: [],
      column: {},
      rowExpanded: false,
      cellComponent: 'DatePicker'
    }
  },

  props: {
    type: {
      type: String,
      default: 'default'
    },
    label: String,
    prop: String,
    width: {},
    canExpand: {
      canExpand: Boolean,
      default: false
    }
  },

  watch: {
    'row.expanded' (val) {
      this.rowExpanded = val;
    }
  },

  components: {
    DatePicker
  },

  render (h) {
    return h('div', this.$slots.default);
  },

  created () {
    // init column
    this.column = {
      label: this.label,
      type: this.type,
      prop: this.prop,
      width: this.width,
      canExpand: this.canExpand,
      renderCell: (h, data) => {
        const row = data.row;
        const column = data.column;
        const columnName = column.prop;
        return (
          <div class="cell">
            <div 
              class="cell-expand-icon" 
              on-click={ row.expand }
              v-show={ row.children && row.children.length && column.canExpand }>
              <i class={['fa', row.expanded ? 'fa-minus-square-o' : 'fa-plus-square-o']}></i>
            </div>
            { row.value[columnName] }
            <component is={ this.cellComponent }></component>
          </div>)
      }
    };
  },

  mounted () {
    const parent = this.$parent;

    parent.store.commit('insertColumn', this.column);
  }
}
