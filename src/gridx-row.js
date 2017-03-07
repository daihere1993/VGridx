import VGridxCell from './gridx-cell';
import CollapseTransition from './collapse-transition'

export default {
  name: 'VGridxRow',

  props: {
    value: {
      required: true
    },
    store: {
      required: true
    },
    parent: {}
  },

  created () {
    this.row = {
      show: this.show,
      children: this.value.children,
      value: this.value,
      parent: this.parent,
      expand: this.expand
    };
    delete this.value.children;
  },

  mounted () {
    this.store.commit('insertRow', this.row);
  },

  methods: {
    expand () {
      this.show = true;
      console.log("expand");
    }
  },

  computed: {
    columns () {
      return this.store.states.columns;
    },

    show () {
      return this.value.children ? false : true;
    }
  },

  components: {
    VGridxCell,
    CollapseTransition
  },

  render (h) {
    return (
      <div class="gridx-row">
        <table
          cellspaceing="0"
          cellpadding="0"
          border="0">
          <colgroup>
            {
              this._l(this.columns, column =>
                <col width={ column.width }/>)
            }
          </colgroup>
          <tbody>
            <tr>
              {
                this._l(this.columns, (column, cellIndex) =>
                  <v-gridx-cell column={ column } row={ this.row }></v-gridx-cell>  
                )
              }
            </tr>
          </tbody>
        </table>
        <collapse-transition>
          <div v-show={ this.show }>
            {
              this._l(this.row.children, child => 
                <v-gridx-row store={ this.store } value={ child } parent={ this.row }></v-gridx-row> 
              )
            }
          </div>
        </collapse-transition>
      </div>
    )
  }
}