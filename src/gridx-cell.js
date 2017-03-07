export default {
  name: 'VGridxCell',

  props: {
    row: {
      required: true
    },
    column: {
      required: true
    }
  },

  render (h) {
    return (
      <td class={ this.getCellClass() }>
        {
          this.column && this.column.renderCell.call(this._renderProxy, h, { column: this.column, row: this.row })
        }
      </td>
    )
  },

  methods: {
    getCellClass () {
      if (this.column.canExpand) {
        if (this.row.parent) {
          return 'gridx-tree-expand-cell'
        } else if (!this.row.children.length){
          return 'gridx-tree-nochildren-cell'
        }
      }
    }
  }
}