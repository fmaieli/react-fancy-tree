var $ = require('jquery');

export default class FancyTreeWrapper {
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
}
