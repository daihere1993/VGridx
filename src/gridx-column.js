import { DatePicker } from 'element-ui'

export default {
  name: 'VGridxColumn',

  data () {
    return {
      columns: [],
      column: {},
      rowExpanded: false,
      cellComponent: DatePicker
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
      canExpand: this.canExpand
    };
  },

  mounted () {
    const parent = this.$parent;

    parent.store.commit('insertColumn', this.column);
  }
}
