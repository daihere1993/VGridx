export default {
  name: 'VGridxHeader',

  props: {
    store: {
      required: true
    }
  },

  computed: {
    columns () {
      return this.store.states.columns
    }
  },

  render (h) {
    return (
      <div
        class="gridx-header">
        <table 
          cellspaceing="0"
          cellpadding="0"
          border="0">
          <colgroup>
            {
              this._l(this.columns, column => 
                <col
                  width={ column.width }
                />)
            }
          </colgroup>
          <tbody>
            <tr>
              {
                this._l(this.columns, (column, columnIndex) =>
                  <td>
                    <div>
                      {
                        column.label
                      }
                    </div>
                  </td>
                )
              }
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}