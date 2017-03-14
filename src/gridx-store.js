function Store (grid, options) {
  this.states = {
    data: null,
    columns: [],
    rows: [],
    isTree: false,
    isEditing: false
  };

  for (let name in options) {
    if (options.hasOwnProperty(name) && this.states.hasOwnProperty(name)) {
      this.states[name] = options[name];
    }
  }

  if (!grid) {
    throw new Error('Table is no Required.')
  }
}

Store.prototype.mutations = {
  insertColumn: function (store, column) {
    this.states.columns.push(column);
  },

  insertRow: function (store, row) {
    this.states.rows.push(row);
  }
}

Store.prototype.commit = function (name, ...args) {
  const mutations = this.mutations;
  if (mutations[name]) {
    mutations[name].apply(this, [this.states].concat(args))
  } else {
    throw new Error(`Action ont found: ${name}`);
  }
}

export default Store
