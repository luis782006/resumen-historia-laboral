document.addEventListener('DOMContentLoaded', () => {
    // --- Data Configuration ---
    const organismosData = {"AITDF": {"nombre": "AGENCIA DE INNOVACION DE LA PROVINCIA DE TDF", "escalafones": [{"codigo": "CAPAC", "nombre": "AIF - CAPACITADORES", "periodos": [{"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Rechazada": 1}}], "estados_totales": {"Aprobada": 1, "Rechazada": 1}, "total_declaraciones": 2}, {"codigo": "EPU", "nombre": "AIF - EPU", "periodos": [{"periodo": "202602", "cantidad": 1, "estados": {"Iniciada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Error al Totalizar": 1}}], "estados_totales": {"Iniciada": 1, "Error al Totalizar": 1}, "total_declaraciones": 2}, {"codigo": "FUNCIO", "nombre": "AIF - Funcionarios", "periodos": [{"periodo": "202602", "cantidad": 1, "estados": {"Pendiente de Configuracion": 1}}], "estados_totales": {"Pendiente de Configuracion": 1}, "total_declaraciones": 1}, {"codigo": "SECOS", "nombre": "AIF - SECOS", "periodos": [{"periodo": "202602", "cantidad": 1, "estados": {"Iniciada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Rechazada": 1}}], "estados_totales": {"Iniciada": 1, "Rechazada": 1}, "total_declaraciones": 2}, {"codigo": "TIC", "nombre": "AIF - TIC", "periodos": [{"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Rechazada": 1}}], "estados_totales": {"Aprobada": 1, "Rechazada": 1}, "total_declaraciones": 2}, {"codigo": "GABINE", "nombre": "AIF- GABINETE", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}]}, "AREF": {"nombre": "AGENCIA RECAUDACION FUEGUINA", "escalafones": [{"codigo": "ADSCRI", "nombre": "AREF - Adscriptos", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}, {"codigo": "EPU", "nombre": "AREF - EPU", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 3}, "total_declaraciones": 3}, {"codigo": "POLIT", "nombre": "AREF - Planta Politica", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 3}, "total_declaraciones": 3}, {"codigo": "SECOS", "nombre": "AREF - SECOS", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 3}, "total_declaraciones": 3}, {"codigo": "RETVOL", "nombre": "AREF - Secos Retiro Voluntario", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}]}, "BTF": {"nombre": "BANCO DE LA PROV.DE TIERRA DEL FUEGO", "escalafones": [{"codigo": "BTF2", "nombre": "BTF - Administrativo", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}, {"codigo": "BTF4", "nombre": "BTF - Funcionario", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}, {"codigo": "BTF1", "nombre": "BTF - Maestranza", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}, {"codigo": "BTF5", "nombre": "BTF - No Categorizado", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}, {"codigo": "BTFPLA", "nombre": "BTF - Planta", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}, {"codigo": "BTF3", "nombre": "BTF - Servicio", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}, {"codigo": "BTF6", "nombre": "Retiro Volunatrio", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}]}, "CPSPTF": {"nombre": "CAJA JUBILACIONES PROV. TIERRA DEL FUEGO", "escalafones": [{"codigo": "FUNCIO", "nombre": "CPSPTF - Funcionarios", "periodos": [{"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 2}, "total_declaraciones": 2}, {"codigo": "CPSPTF", "nombre": "CPSPTF - Planta", "periodos": [{"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 2}, "total_declaraciones": 2}]}, "CPP": {"nombre": "CAJA POLICIAL S/LEY 834", "escalafones": [{"codigo": "PERCAJ", "nombre": "Personal Caja Jubilacion Policial", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 3}, "total_declaraciones": 3}]}, "CONTOL": {"nombre": "CONCEJO TOLHUIN", "escalafones": [{"codigo": "PLANTA", "nombre": "Planta Permanente", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202604", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 4}, "total_declaraciones": 4}]}, "CONMAG": {"nombre": "CONSEJO DE LA MAGISTRATURA", "escalafones": [{"codigo": "PLANTA", "nombre": "Consejo Magistratura - Planta", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Error al Totalizar": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}], "estados_totales": {"Pendiente de Aprobacion": 2, "Error al Totalizar": 1}, "total_declaraciones": 3}]}, "DPOSS": {"nombre": "DIR. PROV. DE OBRAS Y SERV.SANITARIOS", "escalafones": [{"codigo": "FUNCIO", "nombre": "DPOSS - Funcionarios", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202604", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 4}, "total_declaraciones": 4}, {"codigo": "DPOSS", "nombre": "DPOSS - Planta", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202604", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 4}, "total_declaraciones": 4}]}, "DPV": {"nombre": "DIR. PROVINCIAL DE VIALIDAD", "escalafones": [{"codigo": "FUNCIO", "nombre": "DPV - Funcionarios", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202604", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}], "estados_totales": {"Aprobada": 3, "Pendiente de Aprobacion": 1}, "total_declaraciones": 4}, {"codigo": "DPV-PL", "nombre": "DPV - Planta", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202604", "cantidad": 1, "estados": {"Pendiente de Configuracion": 1}}], "estados_totales": {"Aprobada": 3, "Pendiente de Configuracion": 1}, "total_declaraciones": 4}]}, "DPE": {"nombre": "DIRECCION PROVINCIAL DE ENERGIA", "escalafones": [{"codigo": "DPE-ADS", "nombre": "DPE - Adscriptos", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}], "estados_totales": {"Aprobada": 1, "Pendiente de Aprobacion": 1}, "total_declaraciones": 2}, {"codigo": "FUNCIO", "nombre": "DPE - Funcionarios", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Error al Totalizar": 1}}], "estados_totales": {"Aprobada": 1, "Error al Totalizar": 1}, "total_declaraciones": 2}, {"codigo": "DPE-PL", "nombre": "DPE - Planta", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Pendiente de Configuracion": 1}}], "estados_totales": {"Aprobada": 1, "Pendiente de Configuracion": 1}, "total_declaraciones": 2}]}, "DPP": {"nombre": "DIRECCION PROVINCIAL DE PUERTOS", "escalafones": [{"codigo": "DPPFUN", "nombre": "DIRECCION PROVINCIAL DE PUERTOS - FUNCIONARIOS", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 3}, "total_declaraciones": 3}, {"codigo": "DPPPLA", "nombre": "DIRECCION PROVINCIAL DE PUERTOS - PERSONAL DE PLANTA", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 3}, "total_declaraciones": 3}]}, "FE": {"nombre": "FISCALIA DE ESTADO", "escalafones": [{"codigo": "FE-PLA", "nombre": "FE - Planta", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202604", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 4}, "total_declaraciones": 4}]}, "GOBTDF": {"nombre": "GOBIERNO DE LA PROVINCIA DE T.D.F.", "escalafones": [{"codigo": "EPU", "nombre": "Escalafon Profesional Universitario", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Error al Totalizar": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}], "estados_totales": {"Error al Totalizar": 1, "Pendiente de Aprobacion": 1}, "total_declaraciones": 2}, {"codigo": "GOBTDF", "nombre": "GOBTDF - Funcionario", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Error al Totalizar": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}], "estados_totales": {"Error al Totalizar": 1, "Pendiente de Aprobacion": 1}, "total_declaraciones": 2}, {"codigo": "PARQUE", "nombre": "GUARDAPARQUES", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 1}, "total_declaraciones": 1}, {"codigo": "PENIT", "nombre": "Penitenciarios - Personal Civil", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 3}, "total_declaraciones": 3}, {"codigo": "POLCIV", "nombre": "Personal Civil de Policia Provincial", "periodos": [{"periodo": "202603", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}], "estados_totales": {"Pendiente de Aprobacion": 1}, "total_declaraciones": 1}, {"codigo": "DOCENT", "nombre": "Personal Docente", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Iniciada": 1}}], "estados_totales": {"Iniciada": 1}, "total_declaraciones": 1}, {"codigo": "DOCPRI", "nombre": "Personal Docente Primario", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}, {"codigo": "DOCSEC", "nombre": "Personal Docente Secundario", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}, {"codigo": "SECOS", "nombre": "Personal de Administracion Central", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Iniciada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}], "estados_totales": {"Iniciada": 1, "Pendiente de Aprobacion": 1}, "total_declaraciones": 2}, {"codigo": "AERO", "nombre": "Personal de Aeronautica", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 1}, "total_declaraciones": 1}, {"codigo": "SALUD", "nombre": "Personal de Salud", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Iniciada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}], "estados_totales": {"Iniciada": 1, "Pendiente de Aprobacion": 1}, "total_declaraciones": 2}, {"codigo": "RETIRO", "nombre": "Retiro Voluntario", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}, {"codigo": "SAT", "nombre": "Sindicato Argentino de Television", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Error al Totalizar": 1}}], "estados_totales": {"Error al Totalizar": 1}, "total_declaraciones": 1}, {"codigo": "UPMF", "nombre": "Unidad Provincial de Manejo de Fuego", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 1}, "total_declaraciones": 1}]}, "IPAUSS": {"nombre": "I.P.A.U.S.S.", "escalafones": [{"codigo": "IPAUSS", "nombre": "Instituto Provincial Autarquico Unificado de Seguridad Social", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}]}, "IPRA": {"nombre": "I.P.R.A.", "escalafones": [{"codigo": "FUNCIO", "nombre": "IPRA - Funcionarios", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202604", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 4}, "total_declaraciones": 4}, {"codigo": "IPRA-P", "nombre": "IPRA - Planta", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202604", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 4}, "total_declaraciones": 4}]}, "INFUTU": {"nombre": "IN.FUE.TUR", "escalafones": [{"codigo": "AutSup", "nombre": "Autoridades Superiores", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Error al Totalizar": 1}}], "estados_totales": {"Error al Totalizar": 1}, "total_declaraciones": 1}, {"codigo": "Profes", "nombre": "Escalafon Profesional", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}, {"codigo": "Seco", "nombre": "Escalafon Seco", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Pendiente de Configuracion": 1}}], "estados_totales": {"Pendiente de Configuracion": 1}, "total_declaraciones": 1}, {"codigo": "SecoBA", "nombre": "Escalafon Seco Deleg. Bs. As.", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}, {"codigo": "Histor", "nombre": "Historicos", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}, {"codigo": "Pasant", "nombre": "Pasantes", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}]}, "IPV": {"nombre": "INSTITUTO PROV. VIVIENDA (I.P.V.)", "escalafones": [{"codigo": "FUNCIO", "nombre": "IPV - Funcionarios", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202604", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 4}, "total_declaraciones": 4}, {"codigo": "IPV-PL", "nombre": "IPV - Planta", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202604", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 4}, "total_declaraciones": 4}]}, "LABFINMUN": {"nombre": "LABORATORIO DEL FIN DEL MUNDO", "escalafones": [{"codigo": "LABTDF", "nombre": "Laboratorio del Fin del Mundo", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 3}, "total_declaraciones": 3}]}, "LEGPRO": {"nombre": "LEGISLATURA PROVINCIAL", "escalafones": [{"codigo": "LP-FUN", "nombre": "Legislatura Provincial - Funcionario", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 3}, "total_declaraciones": 3}, {"codigo": "LP-PLA", "nombre": "Legislatura Provincial - Planta", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 3}, "total_declaraciones": 3}]}, "MUNRGR": {"nombre": "MUNICIPALIDAD DE RIO GRANDE", "escalafones": [{"codigo": "MUNRGC", "nombre": "Concejo Deliberante Rio Grande", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202604", "cantidad": 1, "estados": {"Pendiente de Configuracion": 1}}], "estados_totales": {"Aprobada": 3, "Pendiente de Configuracion": 1}, "total_declaraciones": 4}, {"codigo": "MUNRGR", "nombre": "Municipalidad Rio Grande", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202604", "cantidad": 1, "estados": {"Pendiente de Configuracion": 1}}], "estados_totales": {"Aprobada": 3, "Pendiente de Configuracion": 1}, "total_declaraciones": 4}, {"codigo": "MUNRGO", "nombre": "Obras Sanitarias", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202604", "cantidad": 1, "estados": {"Pendiente de Configuracion": 1}}], "estados_totales": {"Aprobada": 3, "Pendiente de Configuracion": 1}, "total_declaraciones": 4}]}, "MUNTOL": {"nombre": "MUNICIPALIDAD DE TOLHUIN", "escalafones": [{"codigo": "MUNTOL", "nombre": "Municipalidad Tolhuin", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202604", "cantidad": 1, "estados": {"Error al Totalizar": 1}}], "estados_totales": {"Aprobada": 3, "Error al Totalizar": 1}, "total_declaraciones": 4}]}, "MUNUSH": {"nombre": "MUNICIPALIDAD DE USHUAIA", "escalafones": [{"codigo": "MU04", "nombre": "MUSH - Autoridades", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Error al Totalizar": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}], "estados_totales": {"Pendiente de Aprobacion": 2, "Error al Totalizar": 1}, "total_declaraciones": 3}, {"codigo": "MU06", "nombre": "MUSH - Casa Tierra del Fuego", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}, {"codigo": "MU05", "nombre": "MUSH - Concejo Deliberante PP", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Error al Totalizar": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Error al Totalizar": 1}}], "estados_totales": {"Error al Totalizar": 2, "Pendiente de Aprobacion": 1}, "total_declaraciones": 3}, {"codigo": "MU15", "nombre": "MUSH - Concejo Deliberante PT", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Error al Totalizar": 1}}], "estados_totales": {"Pendiente de Aprobacion": 2, "Error al Totalizar": 1}, "total_declaraciones": 3}, {"codigo": "MU07", "nombre": "MUSH - Convencionales Constituyentes", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}, {"codigo": "MU09", "nombre": "MUSH - Convenio Municipal de Empleo P", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Error al Totalizar": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Error al Totalizar": 1}}], "estados_totales": {"Error al Totalizar": 2, "Pendiente de Aprobacion": 1}, "total_declaraciones": 3}, {"codigo": "MU19", "nombre": "MUSH - Convenio Municipal de Empleo T", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Error al Totalizar": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Pendiente de Configuracion": 1}}], "estados_totales": {"Error al Totalizar": 1, "Pendiente de Aprobacion": 1, "Pendiente de Configuracion": 1}, "total_declaraciones": 3}, {"codigo": "MU08", "nombre": "MUSH - Maternidad", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}, {"codigo": "MU01", "nombre": "MUSH - Planta Actual", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}, {"codigo": "MU02", "nombre": "MUSH - Planta Historica", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}, {"codigo": "MU03", "nombre": "MUSH - Planta Profesores", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Error al Totalizar": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Pendiente de Configuracion": 1}}], "estados_totales": {"Error al Totalizar": 1, "Pendiente de Aprobacion": 1, "Pendiente de Configuracion": 1}, "total_declaraciones": 3}, {"codigo": "MU12", "nombre": "MUSH - Regimen Especial Ley 1076 PP", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Pendiente de Configuracion": 1}}], "estados_totales": {"Pendiente de Aprobacion": 2, "Pendiente de Configuracion": 1}, "total_declaraciones": 3}, {"codigo": "MU22", "nombre": "MUSH - Regimen Especial Ley 1076 PT", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Pendiente de Aprobacion": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Error al Totalizar": 1}}], "estados_totales": {"Pendiente de Aprobacion": 2, "Error al Totalizar": 1}, "total_declaraciones": 3}, {"codigo": "MU10", "nombre": "MUSH - Sindicatura General", "periodos": [{"periodo": "Sin Período", "cantidad": 0, "estados": {"SIN PRESENTACIÓN": 1}}], "estados_totales": {"SIN PRESENTACIÓN": 1}, "total_declaraciones": 1}]}, "OSPTF": {"nombre": "OBRA SOCIAL PROV. TIERRA DEL FUEGO", "escalafones": [{"codigo": "FUNCIO", "nombre": "OSPTF - Funcionarios", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 3}, "total_declaraciones": 3}, {"codigo": "OSPTF", "nombre": "Obra Social - Planta", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 3}, "total_declaraciones": 3}]}, "SINMUS": {"nombre": "SINDICATURA MUN. USHUAIA", "escalafones": [{"codigo": "SINMUS", "nombre": "Sindicatura", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 3}, "total_declaraciones": 3}]}, "STJ": {"nombre": "SUPERIOR TRIBUNAL DE JUSTICIA", "escalafones": [{"codigo": "STJ", "nombre": "Superior Tribunal de Justicia", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 3}, "total_declaraciones": 3}]}, "TCP": {"nombre": "TRIBUNAL DE CUENTAS", "escalafones": [{"codigo": "TCPFUN", "nombre": "TCP - Funcionarios", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 3}, "total_declaraciones": 3}, {"codigo": "TCPPLA", "nombre": "TCP - Planta", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 3}, "total_declaraciones": 3}]}, "TCPMRG": {"nombre": "TRIBUNAL DE CUENTAS MUN. RIO GDE.", "escalafones": [{"codigo": "TCMMRG", "nombre": "Tribunal de Cuentas Rio Grande", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 3}, "total_declaraciones": 3}]}, "USHINT": {"nombre": "USHUAIA INTEGRAL SOCIEDAD DE ESTADO", "escalafones": [{"codigo": "Planta", "nombre": "Ushuaia Integral", "periodos": [{"periodo": "202601", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202602", "cantidad": 1, "estados": {"Aprobada": 1}}, {"periodo": "202603", "cantidad": 1, "estados": {"Aprobada": 1}}], "estados_totales": {"Aprobada": 3}, "total_declaraciones": 3}]}};
    
    const coloresEstados = {
        "Aprobada": "#2ECC71", 
        "SIN PRESENTACIÓN": "#B0BEC5", 
        "Pendiente de Aprobacion": "#f39c12", 
        "Error al Totalizar": "#e74c3c", 
        "Pendiente de Configuracion": "#CF7023", 
        "Iniciada": "#3498db", 
        "Rechazada": "#c0392b"
    };

    // Note: coloresPeriodos is now used as a fallback or for specific cases, 
    // but the logic now prioritizes state colors.
    const coloresPeriodos = {
        "Sin Período": "#B0BEC5"
    };

    const months = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    let currentOrganismo = null;
    let currentEscalafon = null;
    let currentView = 'organismo';

    // --- DOM Elements ---
    const uploadSection = document.getElementById('drop-zone');
    const fileInput = document.getElementById('file-input');
    const headerOutput = document.querySelector('.header-output');
    const fullHeader = document.getElementById('full-header');
    const organismoSelect = document.getElementById('organismo-select');
    const escalafonList = document.getElementById('escalafon-list');
    const backBtn = document.getElementById('back-btn');

    // --- File Handling Logic ---
    uploadSection.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) processFileName(file.name);
    });

    // Support drag and drop
    uploadSection.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadSection.style.borderColor = 'var(--accent-orange)';
    });

    uploadSection.addEventListener('dragleave', () => {
        uploadSection.style.borderColor = 'var(--accent-cyan)';
    });

    uploadSection.addEventListener('drop', (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) processFileName(file.name);
    });

    function processFileName(fileName) {
        const regex = /(.+)_(\d{8})_(\d{6})/;
        const match = fileName.match(regex);

        if (match) {
            const rawTitle = match[1].replace(/_/g, ' ');
            const dateStr = match[2];
            const year = dateStr.substring(0, 4);
            const month = dateStr.substring(4, 6);
            const day = dateStr.substring(6, 8);
            const monthName = months[parseInt(month) - 1];
            
            fullHeader.textContent = `${rawTitle}      ${day}-${monthName}-${year}.`;
            headerOutput.style.display = 'block';
        } else {
            fullHeader.textContent = `ARCHIVO: ${fileName}`;
            headerOutput.style.display = 'block';
        }
    }

    // --- Dashboard Logic ---
    function initDashboard() {
        const sortedKeys = Object.keys(organismosData).sort((a, b) => {
            return organismosData[a].nombre.localeCompare(organismosData[b].nombre);
        });

        sortedKeys.forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = organismosData[key].nombre;
            organismoSelect.appendChild(option);
        });

        organismoSelect.addEventListener('change', (e) => {
            selectOrganismo(e.target.value);
        });

        backBtn.addEventListener('click', goBack);
    }

    function selectOrganismo(orgCode) {
        if (!orgCode) return;

        currentOrganismo = orgCode;
        currentView = 'organismo';
        backBtn.style.display = 'none';

        const org = organismosData[orgCode];
        escalafonList.innerHTML = '';

        org.escalafones.forEach(esc => {
            const item = document.createElement('div');
            item.className = 'escalafon-item';
            item.innerHTML = `
                <div class="escalafon-name">${esc.nombre}</div>
                <div class="escalafon-count">${esc.total_declaraciones} declaraciones</div>
            `;
            item.onclick = () => selectEscalafon(esc.codigo);
            escalafonList.appendChild(item);
        });

        showOrganismoChart(org);
        updateStatsOrganismo(org);
    }

    function showOrganismoChart(org) {
        const estadosTotales = {};
        org.escalafones.forEach(esc => {
            Object.entries(esc.estados_totales).forEach(([estado, cantidad]) => {
                estadosTotales[estado] = (estadosTotales[estado] || 0) + cantidad;
            });
        });

        const labels = Object.keys(estadosTotales);
        const values = Object.values(estadosTotales);
        const colors = labels.map(e => coloresEstados[e] || '#999');

        const data = [{
            values: values,
            labels: labels,
            type: 'pie',
            hole: 0.4,
            marker: {
                colors: colors,
                line: { color: '#32333D', width: 2 }
            },
            textinfo: 'label+percent',
            textposition: 'outside',
            automargin: true,
            insidetextfont: { color: '#FFFFFF' },
            outsidetextfont: { color: '#FFFFFF' },
            hovertemplate: '<b>%{label}</b><br>Cantidad: %{value}<br>Porcentaje: %{percent}<extra></extra>'
        }];

        const layout = {
            title: {
                text: `<b>${org.nombre}</b><br><span style="font-size: 12px; opacity: 0.7;">Distribución por Estado</span>`,
                font: { color: '#FFFFFF', size: 16 }
            },
            showlegend: true,
            legend: {
                orientation: 'h',
                y: -0.1,
                font: { color: '#FFFFFF' }
            },
            margin: { t: 80, b: 80, l: 40, r: 40 },
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)'
        };

        Plotly.newPlot('chart', data, layout, {responsive: true});
        updateLegend(labels, colors);
    }

    function selectEscalafon(escCode) {
        if (!currentOrganismo) return;

        currentEscalafon = escCode;
        currentView = 'escalafon';
        backBtn.style.display = 'inline-block';

        const org = organismosData[currentOrganismo];
        const esc = org.escalafones.find(e => e.codigo === escCode);

        document.querySelectorAll('.escalafon-item').forEach((item, idx) => {
            if (org.escalafones[idx].codigo === escCode) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        showEscalafonChart(esc);
        updateStatsEscalafon(esc);
    }

    function showEscalafonChart(esc) {
        const periodos = esc.periodos;

        if (periodos.length === 0) {
            document.getElementById('chart').innerHTML = `
                <div class="no-data">
                    <h3>${esc.nombre}</h3>
                    <p>No hay declaraciones presentadas</p>
                </div>`;
            return;
        }

        const labels = periodos.map(p => {
            if (p.periodo === "Sin Período") return p.periodo;
            const year = p.periodo.substring(0, 4);
            const month = p.periodo.substring(4, 6);
            const monthName = months[parseInt(month) - 1];
            return `${monthName}-${year}`;
        });
        // Use the sum of states instead of p.cantidad to ensure periods with 0 quantity (but valid states) are shown
        const values = periodos.map(p => {
            const sum = Object.values(p.estados).reduce((a, b) => a + b, 0);
            return sum > 0 ? sum : p.cantidad;
        });
        
        // Dynamic colors based on state
        const colors = periodos.map(p => {
            if (p.periodo === "Sin Período") return coloresEstados["SIN PRESENTACIÓN"];
            
            // Get the first state available (usually there's only one per period/escalafon)
            const state = Object.keys(p.estados)[0];
            return coloresEstados[state] || '#999';
        });

        const customTexts = periodos.map(p => {
            return Object.entries(p.estados).map(([est, cant]) => `${est}: ${cant}`).join('<br>');
        });

        const data = [{
            values: values,
            labels: labels,
            type: 'pie',
            hole: 0.35,
            marker: {
                colors: colors,
                line: { color: '#32333D', width: 2 }
            },
            textinfo: 'label+percent+value',
            textposition: 'outside',
            automargin: true,
            insidetextfont: { color: '#FFFFFF' },
            outsidetextfont: { color: '#FFFFFF' },
            customdata: customTexts,
            hovertemplate: '<b>Período: %{label}</b><br>Total DDJJ: %{value}<br>%{percent}<br><br><b>Estados:</b><br>%{customdata}<extra></extra>'
        }];

        const layout = {
            title: {
                text: `<b>${esc.nombre}</b><br><span style="font-size: 12px; opacity: 0.7;">Distribución por Período</span>`,
                font: { color: '#FFFFFF', size: 16 }
            },
            showlegend: true,
            legend: {
                orientation: 'h',
                y: -0.1,
                font: { color: '#FFFFFF' }
            },
            margin: { t: 80, b: 100, l: 40, r: 40 },
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: 'rgba(0,0,0,0)',
            annotations: [{
                text: `${esc.total_declaraciones}<br>DDJJ`,
                x: 0.5,
                y: 0.5,
                font: { size: 14, color: '#FFFFFF', weight: 'bold' },
                showarrow: false
            }]
        };

        Plotly.newPlot('chart', data, layout, {responsive: true});
        updateLegend(labels, colors);
    }

    function goBack() {
        if (currentView === 'escalafon' && currentOrganismo) {
            selectOrganismo(currentOrganismo);
        }
    }

    function updateLegend(labels, colors) {
        const container = document.getElementById('legend-container');
        container.innerHTML = '';
        labels.forEach((label, i) => {
            const item = document.createElement('div');
            item.className = 'legend-item';
            item.style.display = 'inline-flex';
            item.style.alignItems = 'center';
            item.style.gap = '8px';
            item.style.margin = '5px 10px';
            item.style.fontSize = '0.8rem';
            item.innerHTML = `<div style="width: 12px; height: 12px; border-radius: 50%; background: ${colors[i]}"></div><span>${label}</span>`;
            container.appendChild(item);
        });
    }

    function updateStatsOrganismo(org) {
        let totalDDJJ = 0;
        let totalPeriodos = new Set();
        let estados = new Set();

        org.escalafones.forEach(esc => {
            totalDDJJ += esc.total_declaraciones;
            esc.periodos.forEach(p => totalPeriodos.add(p.periodo));
            Object.keys(esc.estados_totales).forEach(e => estados.add(e));
        });

        document.getElementById('total-ddjj').textContent = totalDDJJ;
        document.getElementById('total-periodos').textContent = totalPeriodos.size;
        document.getElementById('total-estados').textContent = estados.size;
    }

    function updateStatsEscalafon(esc) {
        document.getElementById('total-ddjj').textContent = esc.total_declaraciones;
        document.getElementById('total-periodos').textContent = esc.periodos.length;
        document.getElementById('total-estados').textContent = Object.keys(esc.estados_totales).length;
    }

    initDashboard();
});
