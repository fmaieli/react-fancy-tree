var $ = require('jquery');

export default class FancyTreeMapper {
  map(data) {
    var self = this;
    var arrayResult = [];

    $.each(data, function(key, elem) {
      var newOption = self.mapToOption(elem);
      arrayResult.push(newOption);
    });

    return arrayResult;
  }

  mapToOption(element) {
    var self = this;
    var combinaciones = element.Combinaciones;
    var combinations = null;

    if (combinaciones.length > 0) {
      combinations = [];
      combinaciones.forEach(comb => {
        var newCombinationOption = self.mapToOption(comb);
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
