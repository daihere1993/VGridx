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
      <td>
        {
          this.column && this.column.renderCell.call(this._renderProxy, h, { column: this.column, row: this.row })
        }
      </td>
    )
  }
}