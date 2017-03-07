<template>
  <div>
    <div class="hidden-columns" ref="hiddenColumns"><slot></slot></div>
    <div class="grix-header">
      <v-gridx-header :store="store"></v-gridx-header>
    </div>
    <div class="gridx-main">
      <v-gridx-body :store="store"></v-gridx-body>
    </div>
    <div class="grix-footer"></div>
  </div>
</template>

<script>
  import VGridxBody from './gridx-body'
  import VGridxHeader from './gridx-header'
  import Store from './gridx-store'

  function _rowDataFormat (row, parent) {
    const children = row.children;

    if (parent) {
      row.parent = parent;
    }
    if (children && children.length) {
      children.forEach(item => {
        _rowDataFormat(item, row);
      });
    }
  }

  export default {
    name: 'VGridx',
    
    data () {
      const store = new Store(this, { data: this.data });

      return {
        store
      }
    },

    props: {
      data: {
        type: Array,
        default: function () {
          return [];
        }
      }
    },

    created () {
      this.data.forEach(row => { _rowDataFormat(row) });
    },

    components: {
      VGridxBody,
      VGridxHeader
    }
  }
</script>

<style>
  .hidden-columns {
    display: none;
  }

  .cell-expand-icon {
    display: inline;
    margin-right: 10px;
  }
</style>
