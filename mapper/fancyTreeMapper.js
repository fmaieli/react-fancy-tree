var $ = require('jquery');

export default class FancyTreeMapper {
  map(input, output) {
    let self = this;
    let mappedInput = input.map(x => {
      output.push(x);
      return {
        key: output.length - 1,
        title: x.Nombre,
        refKey: x.Combinaciones.length == 0 ? '1' : '0',
        children: self.map(x.Combinaciones, output)
      };
    });

    return mappedInput;
  }
}
