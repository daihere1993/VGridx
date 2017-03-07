import VGridxRow from './gridx-row'

export default {
  name: 'VGridxBody',

  props: {
    store: {
      reuqired: true
    }
  },

  computed: {
    data () {
      return this.store.states.data;
    },
    columns () {
      return this.store.states.columns;
    }
  },

  components: {
    VGridxRow
  },

  render (h) {
    return (
      <div class="gridx-body">
        {
          this._l(this.data, (value) =>
            [
              <div>
                <v-gridx-row value={ value } store={ this.store }>
                </v-gridx-row>
              </div>
            ])
        }
      </div>
    );
  }
}