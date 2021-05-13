var $ = require('jquery');

export default class FancyTreeWrapper {
  constructor(_idComponente) {
    this.idComponente = _idComponente;
  }

  callTiposEnsayos(empresa, anio, generacion) {}

  mapTiposEnsayos(data) {
    var self = this;
    var arrayResult = [];

    $.each(data, function(key, elem) {
      var newOption = self.mapTipoEnsayoToOption(elem);
      arrayResult.push(newOption);
    });

    return arrayResult;
  }

  mapTipoEnsayoToOption(element) {
    var self = this;
    var combinaciones = element.Combinaciones;
    var combinations = null;

    if (combinaciones.length > 0) {
      combinations = [];
      combinaciones.forEach(comb => {
        var newCombinationOption = self.mapTipoEnsayoToOption(comb);
        combinations.push(newCombinationOption);
      });
    }

    var newOption = {
      title: element.Nombre,
      key: element.Id,
      refKey: combinaciones.length > 0 ? '0' : '1',
      children: combinations
    };

    return newOption;
  }

  createTree(data) {
    $('#' + this.idComponente).fancytree({
      checkbox: true,
      icons: false,
      selectMode: 3,
      source: data,
      beforeSelect: function(event, data) {
        $('#Nombre').prop('disabled', false);
        $('#GID').prop('disabled', false);
        $('#btnAgregar').prop('disabled', false);
      }
    });
  }

  selectedElements() {
    var tree = $('#' + this.idComponente)
      .fancytree('getTree')
      .getSelectedNodes();
    var arraySelectedElements = [];
    var y = 0;
    var x = 0;

    for (x = 0; x < tree.length; x++) {
      if (tree[x].refKey == '1') {
        arraySelectedElements[y] = tree[x].key;
        y++;
      }
    }

    return arraySelectedElements;
  }

  getLocalidadesSeleccionadas() {
    var localidadesSeleccionadas = [];

    $('#' + this.idComponente)
      .fancytree('getRootNode')
      .visit(function(node) {
        if (!node.hasChildren() && node.selected === true) {
          localidadesSeleccionadas.push(node);
        }
      });

    return localidadesSeleccionadas;
  }
}
