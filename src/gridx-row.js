import VGridxCell from './gridx-cell';
import CollapseTransition from './collapse-transition'

export default {
  name: 'VGridxRow',

  data () {
    return {
      expanded: false
    }
  },

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
      expanded: this.expanded,
      children: this.value.children || [],
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
      if (this.expanded) {
        this.expanded = false;
        this.row.expanded = false;
      } else {
        this.expanded = true;
        this.row.expanded = true;
      }
    }
  },

  computed: {
    columns () {
      return this.store.states.columns;
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
          <div v-show={ this.expanded } class="gridx-subnode">
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