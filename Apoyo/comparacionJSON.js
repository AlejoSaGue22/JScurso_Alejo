// * **************************  COMPARACION DE ESTRUCTURA DE DOS JSON  ***************************************

// Estructura de referencia
const estructuraReferencia = {
    numDocumentoIdObligado: '',
    numFactura: '',
    tipoNota: '',
    numNota: '',
    usuarios: [
      {
        tipoDocumentoIdentificacion: '',
        numDocumentoIdentificacion: '',
        tipoUsuario: '',
        fechaNacimiento: '',
        codSexo: '',
        codPaisResidencia: '',
        codMunicipioResidencia: '',
        codZonaTerritorialResidencia: '',
        incapacidad: '',
        consecutivo: 0,
        codPaisOrigen: '',
        servicios: {
          consultas: [
            {
              codPrestador: '',
              fechaInicioAtencion: '',
              numAutorizacion: '',
              codConsulta: '',
              modalidadGrupoServicioTecSal: '',
              grupoServicios: '',
              codServicio: 0,
              finalidadTecnologiaSalud: '',
              causaMotivoAtencion: '',
              codDiagnosticoPrincipal: '',
              codDiagnosticoRelacionado1: null,
              codDiagnosticoRelacionado2: null,
              codDiagnosticoRelacionado3: null,
              tipoDiagnosticoPrincipal: '',
              tipoDocumentoIdentificacion: '',
              numDocumentoIdentificacion: '',
              vrServicio: 0,
              conceptoRecaudo: '',
              valorPagoModerador: 0,
              numFEVPagoModerador: null,
              consecutivo: 0,
            },
          ],
          procedimientos: [],
          hospitalizacion: [],
          medicamentos: [],
          otrosServicios: [],
          recienNacidos: [],
          urgencias: [],
        },
      },
    ],
  };
  
  // Estructura de referencia
  const estructuraEnviada = {
    numDocumentoIdObligado: '',
    numFactura: '',
    tipoNota: '',
    numNota: '',
    usuarios: [
      {
        tipoDocumentoIdentificacion: '',
        numDocumentoIdentificacion: '',
        tipoUsuario: '',
        fechaNacimiento: '',
        codSexo: '',
        codPaisResidencia: '',
        codMunicipioResidencia: '',
        codZonaTerritorialResidencia: '',
        incapacidad: '',
        consecutivo: 0,
        codPaisOrigen: '',
        servicios: {
          consultas: [
            {
              codPrestador: '',
              fechaInicioAtencion: '',
              numAutorizacion: '',
              codConsulta: '',
              modalidadGrupoServicioTecSal: '',
              grupoServicios: '',
              codServicio: 0,
              finalidadTecnologiaSalud: '',
              causaMotivoAtencion: '',
              codDiagnosticoPrincipal: '',
              codDiagnosticoRelacionado1: null,
              codDiagnosticoRelacionado2: null,
              codDiagnosticoRelacionado3: null,
              tipoDiagnosticoPrincipal: '',
              tipoDocumentoIdentificacion: '',
              numDocumentoIdentificacion: '',
              vrServicio: 0,
              conceptoRecaudo: '',
              valorPagoModerador: 0,
              numFEVPagoModerador: null,
              consecutivo: 0,
            },
          ],
          procedimientos: [],
          hospitalizacion: [],
          medicamentos: [],
          otrosServicios: [],
          recienNacidos: [],
          urgencias: [],
        },
      },
    ],
  };
  
  // Función para validar estructura
  const validarEstructura = (objeto, referencia) => {
    for (let clave in referencia) {
      if (!objeto.hasOwnProperty(clave)) {
        return `Falta el campo: ${clave}`;
      }
      if (typeof referencia[clave] === 'object' && referencia[clave] !== null) {
        if (Array.isArray(referencia[clave])) {
          if (!Array.isArray(objeto[clave])) {
            return `El campo ${clave} no es un array.`;
          }
          if (objeto[clave].length > 0) {
            const resultado = validarEstructura(
              objeto[clave][0],
              referencia[clave][0]
            );
            if (resultado) return resultado;
          }
        } else {
          const resultado = validarEstructura(objeto[clave], referencia[clave]);
          if (resultado) return resultado;
        }
      }
    }
    return null;
  };
  
  // Ejemplo de uso
  let resp = validarEstructura(estructuraEnviada, estructuraReferencia);
  console.log(resp);