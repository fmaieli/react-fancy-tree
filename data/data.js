var manejoCombinados = {
  Id: 112,
  Nombre: 'MANEJO DC COMBINADOS',
  IdEstadoMaterialPadre: null,
  Comportamiento: 2,
  Combinaciones: [
    {
      Id: 113,
      Nombre: 'TRATSEM*FUNG(N°APL)',
      IdEstadoMaterialPadre: 112,
      Comportamiento: 2,
      Combinaciones: [],
      DatosComplementarios: null
    },
    {
      Id: 116,
      Nombre: 'DENS*FERT',
      IdEstadoMaterialPadre: 112,
      Comportamiento: 2,
      Combinaciones: [],
      DatosComplementarios: null
    },
    {
      Id: 117,
      Nombre: 'FS*DENS',
      IdEstadoMaterialPadre: 112,
      Comportamiento: 2,
      Combinaciones: [],
      DatosComplementarios: null
    },
    {
      Id: 118,
      Nombre: 'DIST*DENS',
      IdEstadoMaterialPadre: 112,
      Comportamiento: 2,
      Combinaciones: [],
      DatosComplementarios: null
    },
    {
      Id: 119,
      Nombre: 'RIE/SEC*DENS',
      IdEstadoMaterialPadre: 112,
      Comportamiento: 2,
      Combinaciones: [],
      DatosComplementarios: null
    },
    {
      Id: 120,
      Nombre: 'EPOC*DENS',
      IdEstadoMaterialPadre: 112,
      Comportamiento: 2,
      Combinaciones: [],
      DatosComplementarios: null
    },
    {
      Id: 121,
      Nombre: 'FERT*RIE/SEC',
      IdEstadoMaterialPadre: 112,
      Comportamiento: 2,
      Combinaciones: [],
      DatosComplementarios: null
    },
    {
      Id: 122,
      Nombre: 'TRATSEM*FUNG(PR/MOM)',
      IdEstadoMaterialPadre: 112,
      Comportamiento: 2,
      Combinaciones: [],
      DatosComplementarios: null
    },
    {
      Id: 123,
      Nombre: 'FS*DIST',
      IdEstadoMaterialPadre: 112,
      Comportamiento: 2,
      Combinaciones: [],
      DatosComplementarios: null
    },
    {
      Id: 125,
      Nombre: 'EPOC*FERT',
      IdEstadoMaterialPadre: 112,
      Comportamiento: 2,
      Combinaciones: [],
      DatosComplementarios: null
    }
  ],
  DatosComplementarios: null
};

var manejoSimples = {
  Id: 111,
  Nombre: 'MANEJO DC SIMPLES',
  IdEstadoMaterialPadre: null,
  Comportamiento: 2,
  Combinaciones: [
    {
      Id: 126,
      Nombre: 'FERT',
      IdEstadoMaterialPadre: 111,
      Comportamiento: 2,
      Combinaciones: [],
      DatosComplementarios: null
    },
    {
      Id: 127,
      Nombre: 'TRATSEM',
      IdEstadoMaterialPadre: 111,
      Comportamiento: 2,
      Combinaciones: [],
      DatosComplementarios: null
    },
    {
      Id: 129,
      Nombre: 'FUNG(PR/MOM)',
      IdEstadoMaterialPadre: 111,
      Comportamiento: 2,
      Combinaciones: [],
      DatosComplementarios: null
    },
    {
      Id: 130,
      Nombre: 'DENS',
      IdEstadoMaterialPadre: 111,
      Comportamiento: 2,
      Combinaciones: [],
      DatosComplementarios: null
    },
    {
      Id: 131,
      Nombre: 'FS',
      IdEstadoMaterialPadre: 111,
      Comportamiento: 2,
      Combinaciones: [],
      DatosComplementarios: null
    },
    {
      Id: 132,
      Nombre: 'DIST',
      IdEstadoMaterialPadre: 111,
      Comportamiento: 2,
      Combinaciones: [],
      DatosComplementarios: null
    },
    {
      Id: 134,
      Nombre: 'EPOC',
      IdEstadoMaterialPadre: 111,
      Comportamiento: 2,
      Combinaciones: [],
      DatosComplementarios: null
    }
  ],
  DatosComplementarios: null
};

var tiposDeEnsayo = [
  {
    Id: 100,
    Nombre: 'ECR',
    IdEstadoMaterialPadre: null,
    Comportamiento: 1,
    Combinaciones: [],
    DatosComplementarios: null
  },
  {
    Id: 108,
    Nombre: 'DEMO',
    IdEstadoMaterialPadre: null,
    Comportamiento: 1,
    Combinaciones: [],
    DatosComplementarios: null
  },
  {
    Id: 109,
    Nombre: 'GENERICO',
    IdEstadoMaterialPadre: null,
    Comportamiento: 1,
    Combinaciones: [],
    DatosComplementarios: null
  },
  {
    Id: 110,
    Nombre: 'MANEJO EXPLORATORIO',
    IdEstadoMaterialPadre: null,
    Comportamiento: 2,
    Combinaciones: [],
    DatosComplementarios: null
  },
  manejoCombinados,
  manejoSimples
];

export default tiposDeEnsayo;
