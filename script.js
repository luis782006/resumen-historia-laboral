document.addEventListener('DOMContentLoaded', () => {
    // --- Data Configuration ---
    const organismosDataBase = {"AITDF":{"nombre":"AGENCIA DE INNOVACION DE LA PROVINCIA DE TDF","escalafones":[{"codigo":"CAPAC","nombre":"AIF - CAPACITADORES"},{"codigo":"EPU","nombre":"AIF - EPU"},{"codigo":"FUNCIO","nombre":"AIF - Funcionarios"},{"codigo":"SECOS","nombre":"AIF - SECOS"},{"codigo":"TIC","nombre":"AIF - TIC"},{"codigo":"GABINE","nombre":"AIF- GABINETE"}]},"AREF":{"nombre":"AGENCIA RECAUDACION FUEGUINA","escalafones":[{"codigo":"ADSCRI","nombre":"AREF - Adscriptos"},{"codigo":"EPU","nombre":"AREF - EPU"},{"codigo":"POLIT","nombre":"AREF - Planta Politica"},{"codigo":"SECOS","nombre":"AREF - SECOS"},{"codigo":"RETVOL","nombre":"AREF - Secos Retiro Voluntario"}]},"BTF":{"nombre":"BANCO DE LA PROV.DE TIERRA DEL FUEGO","escalafones":[{"codigo":"BTF2","nombre":"BTF - Administrativo"},{"codigo":"BTF4","nombre":"BTF - Funcionario"},{"codigo":"BTF1","nombre":"BTF - Maestranza"},{"codigo":"BTF5","nombre":"BTF - No Categorizado"},{"codigo":"BTFPLA","nombre":"BTF - Planta"},{"codigo":"BTF3","nombre":"BTF - Servicio"},{"codigo":"BTF6","nombre":"Retiro Volunatrio"}]},"CPSPTF":{"nombre":"CAJA JUBILACIONES PROV. TIERRA DEL FUEGO","escalafones":[{"codigo":"FUNCIO","nombre":"CPSPTF - Funcionarios"},{"codigo":"CPSPTF","nombre":"CPSPTF - Planta"}]},"CPP":{"nombre":"CAJA POLICIAL S/LEY 834","escalafones":[{"codigo":"PERCAJ","nombre":"Personal Caja Jubilacion Policial"}]},"CONTOL":{"nombre":"CONCEJO TOLHUIN","escalafones":[{"codigo":"PLANTA","nombre":"Planta Permanente"}]},"CONMAG":{"nombre":"CONSEJO DE LA MAGISTRATURA","escalafones":[{"codigo":"PLANTA","nombre":"Consejo Magistratura - Planta"}]},"DPOSS":{"nombre":"DIR. PROV. DE OBRAS Y SERV.SANITARIOS","escalafones":[{"codigo":"FUNCIO","nombre":"DPOSS - Funcionarios"},{"codigo":"DPOSS","nombre":"DPOSS - Planta"}]},"DPV":{"nombre":"DIR. PROVINCIAL DE VIALIDAD","escalafones":[{"codigo":"FUNCIO","nombre":"DPV - Funcionarios"},{"codigo":"DPV-PL","nombre":"DPV - Planta"}]},"DPE":{"nombre":"DIRECCION PROVINCIAL DE ENERGIA","escalafones":[{"codigo":"DPE-ADS","nombre":"DPE - Adscriptos"},{"codigo":"FUNCIO","nombre":"DPE - Funcionarios"},{"codigo":"DPE-PL","nombre":"DPE - Planta"}]},"DPP":{"nombre":"DIRECCION PROVINCIAL DE PUERTOS","escalafones":[{"codigo":"DPPFUN","nombre":"DIRECCION PROVINCIAL DE PUERTOS - FUNCIONARIOS"},{"codigo":"DPPPLA","nombre":"DIRECCION PROVINCIAL DE PUERTOS - PERSONAL DE PLANTA"}]},"FE":{"nombre":"FISCALIA DE ESTADO","escalafones":[{"codigo":"FE-PLA","nombre":"FE - Planta"}]},"GOBTDF":{"nombre":"GOBIERNO DE LA PROVINCIA DE T.D.F.","escalafones":[{"codigo":"EPU","nombre":"Escalafon Profesional Universitario"},{"codigo":"GOBTDF","nombre":"GOBTDF - Funcionario"},{"codigo":"PARQUE","nombre":"GUARDAPARQUES"},{"codigo":"PENIT","nombre":"Penitenciarios - Personal Civil"},{"codigo":"POLCIV","nombre":"Personal Civil de Policia Provincial"},{"codigo":"DOCENT","nombre":"Personal Docente"},{"codigo":"DOCPRI","nombre":"Personal Docente Primario"},{"codigo":"DOCSEC","nombre":"Personal Docente Secundario"},{"codigo":"SECOS","nombre":"Personal de Administracion Central"},{"codigo":"AERO","nombre":"Personal de Aeronautica"},{"codigo":"SALUD","nombre":"Personal de Salud"},{"codigo":"RETIRO","nombre":"Retiro Voluntario"},{"codigo":"SAT","nombre":"Sindicato Argentino de Television"},{"codigo":"UPMF","nombre":"Unidad Provincial de Manejo de Fuego"}]},"IPAUSS":{"nombre":"I.P.A.U.S.S.","escalafones":[{"codigo":"IPAUSS","nombre":"Instituto Provincial Autarquico Unificado de Seguridad Social"}]},"IPRA":{"nombre":"I.P.R.A.","escalafones":[{"codigo":"FUNCIO","nombre":"IPRA - Funcionarios"},{"codigo":"IPRA-P","nombre":"IPRA - Planta"}]},"INFUTU":{"nombre":"IN.FUE.TUR","escalafones":[{"codigo":"AutSup","nombre":"Autoridades Superiores"},{"codigo":"Profes","nombre":"Escalafon Profesional"},{"codigo":"Seco","nombre":"Escalafon Seco"},{"codigo":"SecoBA","nombre":"Escalafon Seco Deleg. Bs. As."},{"codigo":"Histor","nombre":"Historicos"},{"codigo":"Pasant","nombre":"Pasantes"}]},"IPV":{"nombre":"INSTITUTO PROV. VIVIENDA (I.P.V.)","escalafones":[{"codigo":"FUNCIO","nombre":"IPV - Funcionarios"},{"codigo":"IPV-PL","nombre":"IPV - Planta"}]},"LABFINMUN":{"nombre":"LABORATORIO DEL FIN DEL MUNDO","escalafones":[{"codigo":"LABTDF","nombre":"Laboratorio del Fin del Mundo"}]},"LEGPRO":{"nombre":"LEGISLATURA PROVINCIAL","escalafones":[{"codigo":"LP-FUN","nombre":"Legislatura Provincial - Funcionario"},{"codigo":"LP-PLA","nombre":"Legislatura Provincial - Planta"}]},"MUNRGR":{"nombre":"MUNICIPALIDAD DE RIO GRANDE","escalafones":[{"codigo":"MUNRGC","nombre":"Concejo Deliberante Rio Grande"},{"codigo":"MUNRGR","nombre":"Municipalidad Rio Grande"},{"codigo":"MUNRGO","nombre":"Obras Sanitarias"}]},"MUNTOL":{"nombre":"MUNICIPALIDAD DE TOLHUIN","escalafones":[{"codigo":"MUNTOL","nombre":"Municipalidad Tolhuin"}]},"MUNUSH":{"nombre":"MUNICIPALIDAD DE USHUAIA","escalafones":[{"codigo":"MU04","nombre":"MUSH - Autoridades"},{"codigo":"MU06","nombre":"MUSH - Casa Tierra del Fuego"},{"codigo":"MU05","nombre":"MUSH - Concejo Deliberante PP"},{"codigo":"MU15","nombre":"MUSH - Concejo Deliberante PT"},{"codigo":"MU07","nombre":"MUSH - Convencionales Constituyentes"},{"codigo":"MU09","nombre":"MUSH - Convenio Municipal de Empleo P"},{"codigo":"MU19","nombre":"MUSH - Convenio Municipal de Empleo T"},{"codigo":"MU08","nombre":"MUSH - Maternidad"},{"codigo":"MU01","nombre":"MUSH - Planta Actual"},{"codigo":"MU02","nombre":"MUSH - Planta Historica"},{"codigo":"MU03","nombre":"MUSH - Planta Profesores"},{"codigo":"MU12","nombre":"MUSH - Regimen Especial Ley 1076 PP"},{"codigo":"MU22","nombre":"MUSH - Regimen Especial Ley 1076 PT"},{"codigo":"MU10","nombre":"MUSH - Sindicatura General"}]},"OSPTF":{"nombre":"OBRA SOCIAL PROV. TIERRA DEL FUEGO","escalafones":[{"codigo":"FUNCIO","nombre":"OSPTF - Funcionarios"},{"codigo":"OSPTF","nombre":"Obra Social - Planta"}]},"SINMUS":{"nombre":"SINDICATURA MUN. USHUAIA","escalafones":[{"codigo":"SINMUS","nombre":"Sindicatura"}]},"STJ":{"nombre":"SUPERIOR TRIBUNAL DE JUSTICIA","escalafones":[{"codigo":"STJ","nombre":"Superior Tribunal de Justicia"}]},"TCP":{"nombre":"TRIBUNAL DE CUENTAS","escalafones":[{"codigo":"TCPFUN","nombre":"TCP - Funcionarios"},{"codigo":"TCPPLA","nombre":"TCP - Planta"}]},"TCPMRG":{"nombre":"TRIBUNAL DE CUENTAS MUN. RIO GDE.","escalafones":[{"codigo":"TCMMRG","nombre":"Tribunal de Cuentas Rio Grande"}]},"USHINT":{"nombre":"USHUAIA INTEGRAL SOCIEDAD DE ESTADO","escalafones":[{"codigo":"Planta","nombre":"Ushuaia Integral"}]}};
    let organismosData = {};

    const coloresEstados = {
        "Aprobada": "#2ECC71", 
        "SIN PRESENTACIÓN": "#B0BEC5", 
        "Pendiente de Aprobacion": "#f39c12", 
        "Error al Totalizar": "#e74c3c", 
        "Pendiente de Configuracion": "#CF7023", 
        "Iniciada": "#3498db", 
        "Rechazada": "#c0392b",
        "A Confirmar": "#8e44ad",
        "Cerrada": "#34495e"
    };

    const explicacionesEstados = {
        "Aprobada": "DDJJ que está validada y aprobada por Acreencias cumpliendo con todos los aportes y contribuciones informados en Balance y en DDJJ.",
        "Pendiente de Aprobacion": "DDJJ que está validada en su formato pero aún no ha sido verificada por el departamento de Acreencias para corroborar los montos informados en la DDJJ.",
        "Pendiente de Configuracion": "DDJJ que está validada en su formato pero corresponde que sus conceptos sean configurados en el sistema. Esto involucra a ambas partes: Organismo y Caja Previsional.",
        "Error al Totalizar": "DDJJ que está validada pero debido a una configuración errónea de la naturaleza de los conceptos no puede ser aprobada hasta tanto no se regularice el estado de los mismos.",
        "Rechazada": "DDJJ que fue rechazada por no tener la correcta configuración de conceptos o por error: los valores informados en la DDJJ no coinciden con el Balance a pesar de una correcta configuración de conceptos.",
        "Iniciada": "DDJJ que ingresó al sistema y por motivos externos no quedó en el mismo (ej. cortes de conexión, manipulación errónea del sistema).",
        "SIN PRESENTACIÓN": "El organismo no ha presentado la declaración jurada para el período correspondiente.",
        "A Confirmar": "DDJJ en proceso de confirmación de datos por parte del sistema.",
        "Cerrada": "DDJJ cerrada para el período correspondiente."
    };

    function obtenerExplicacion(estado) {
        const estNorm = estado ? estado.toString().trim() : '';
        if (estNorm === "Rechaza" || estNorm === "Rechazada") return explicacionesEstados["Rechazada"];
        if (estNorm === "Pendiente a Aprobacion" || estNorm === "Pendiente de Aprobacion") return explicacionesEstados["Pendiente de Aprobacion"];
        if (estNorm === "Pendiente a Configuracion" || estNorm === "Pendiente de Configuracion") return explicacionesEstados["Pendiente de Configuracion"];
        return explicacionesEstados[estNorm] || "Sin explicación disponible para este estado.";
    }

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

    // --- Initialize Data ---
    function resetData() {
        // Deep copy of the base structure
        organismosData = JSON.parse(JSON.stringify(organismosDataBase));
        
        // Initialize stats
        Object.keys(organismosData).forEach(orgKey => {
            organismosData[orgKey].escalafones.forEach(esc => {
                esc.total_declaraciones = 0;
                esc.estados_totales = {};
                esc.periodos = [];
                // Contadores por tipo de liquidación
                esc.mensuales_count = 0;
                esc.sac_count = 0;
                esc.comp_count = 0;
            });
        });
    }

    // --- File Handling Logic ---
    uploadSection.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) processExcelFile(file);
    });

    uploadSection.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadSection.style.borderColor = 'var(--accent-orange)';
    });

    uploadSection.addEventListener('dragleave', () => {
        uploadSection.style.borderColor = 'var(--accent-cyan)';
    });

    uploadSection.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadSection.style.borderColor = 'var(--accent-cyan)';
        const file = e.dataTransfer.files[0];
        if (file) processExcelFile(file);
    });

    function processExcelFile(file) {
        fullHeader.textContent = "Procesando archivo...";
        headerOutput.style.display = 'block';

        const reader = new FileReader();
        reader.onload = function(e) {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, {type: 'array'});
                
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                
                const jsonRows = XLSX.utils.sheet_to_json(worksheet, { defval: "" });
                
                processExcelData(jsonRows);

                // Parse filename: NAME_YYYYMMDD_HHMMSS.ext
                // Extract title (everything before the date segment) + month + year
                const nameWithoutExt = file.name.replace(/\.[^.]+$/, ''); // strip extension
                const dateMatch = nameWithoutExt.match(/^(.+?)_(\d{4})(\d{2})(\d{2})_\d{6}$/);
                
                let headerText;
                if (dateMatch) {
                    const rawTitle = dateMatch[1].replace(/_/g, ' ');
                    const year = dateMatch[2];
                    const month = parseInt(dateMatch[3], 10);
                    const monthName = months[month - 1] || '';
                    headerText = `${rawTitle} - ${monthName} de ${year}`;
                } else {
                    // Fallback: just show cleaned filename
                    headerText = nameWithoutExt.replace(/_/g, ' ');
                }

                fullHeader.textContent = headerText;
            } catch (error) {
                console.error("Error al procesar el Excel:", error);
                fullHeader.textContent = "Error al procesar el archivo Excel. Verifica el formato.";
            }
        };
        reader.readAsArrayBuffer(file);
    }

    function processExcelData(rows) {
        resetData();

        rows.forEach(row => {
            const orgCode = row['OrganismoCodigo'] ? row['OrganismoCodigo'].toString().trim() : 'Desconocido';
            const orgNombre = row['OrganismoNombre'] ? row['OrganismoNombre'].toString().trim() : orgCode;
            const escCode = row['EscalafonCodigo'] ? row['EscalafonCodigo'].toString().trim() : 'Desconocido';
            const escNombre = row['EscalafonNombre'] ? row['EscalafonNombre'].toString().trim() : escCode;
            const periodoRaw = row['Periodo'] ? row['Periodo'].toString().trim() : 'Sin Período';
            // Use EstadoFinal, if not available try Estado
            let estado = 'Desconocido';
            if (row['EstadoFinal'] && row['EstadoFinal'] !== "") {
                estado = row['EstadoFinal'].toString().trim();
            } else if (row['Estado'] && row['Estado'] !== "") {
                estado = row['Estado'].toString().trim();
            }

            // Create organism if it doesn't exist in base configuration
            if (!organismosData[orgCode]) {
                organismosData[orgCode] = {
                    nombre: orgNombre,
                    escalafones: []
                };
            }

            // Find or create escalafon
            let esc = organismosData[orgCode].escalafones.find(e => e.codigo === escCode);
            if (!esc) {
                esc = {
                    codigo: escCode,
                    nombre: escNombre,
                    total_declaraciones: 0,
                    estados_totales: {},
                    periodos: [],
                    mensuales_count: 0,
                    sac_count: 0,
                    comp_count: 0
                };
                organismosData[orgCode].escalafones.push(esc);
            }

            // Ensure stats structure exists (for dynamically created ones or missed initialization)
            esc.total_declaraciones = esc.total_declaraciones || 0;
            esc.estados_totales = esc.estados_totales || {};
            esc.periodos = esc.periodos || [];
            esc.mensuales_count = esc.mensuales_count || 0;
            esc.sac_count = esc.sac_count || 0;
            esc.comp_count = esc.comp_count || 0;

            // Update stats
            esc.total_declaraciones += 1;

            // Classify by TipoDeLiquidacion
            // Support both column name variants: 'TipoDeLiquidacion' and 'TipoLiquidacion'
            const tipoRawValue = row['TipoDeLiquidacion'] || row['TipoLiquidacion'] || '';
            const tipoRaw = tipoRawValue.toString().trim().toLowerCase();

            if (tipoRaw === 'sac') {
                esc.sac_count += 1;
            } else if (tipoRaw === 'complementaria') {
                esc.comp_count += 1;
            } else {
                // 'mensual' or any unrecognized type counts as monthly
                esc.mensuales_count += 1;
            }
            
            // Update global escalafon states
            esc.estados_totales[estado] = (esc.estados_totales[estado] || 0) + 1;

            // Update period stats
            let perObj = esc.periodos.find(p => p.periodo === periodoRaw);
            if (!perObj) {
                perObj = { periodo: periodoRaw, cantidad: 0, estados: {} };
                esc.periodos.push(perObj);
            }
            perObj.cantidad += 1;
            perObj.estados[estado] = (perObj.estados[estado] || 0) + 1;
        });

        // After processing, if no declarations exist, mark as "SIN PRESENTACIÓN"
        Object.keys(organismosData).forEach(orgKey => {
            organismosData[orgKey].escalafones.forEach(esc => {
                if (esc.total_declaraciones === 0) {
                    esc.estados_totales["SIN PRESENTACIÓN"] = 1;
                    esc.periodos.push({
                        periodo: "Sin Período",
                        cantidad: 0,
                        estados: { "SIN PRESENTACIÓN": 1 }
                    });
                }
            });
        });

        initDashboard();
        
        // Refresh view if an organism is already selected
        if (currentOrganismo && organismosData[currentOrganismo]) {
            if (currentView === 'organismo') {
                selectOrganismo(currentOrganismo);
            } else if (currentView === 'escalafon' && currentEscalafon) {
                selectEscalafon(currentEscalafon);
            }
        }
    }

    // --- Dashboard Logic ---
    function initDashboard() {
        organismoSelect.innerHTML = '<option value="">Seleccione un organismo...</option>';
        
        const sortedKeys = Object.keys(organismosData).sort((a, b) => {
            return organismosData[a].nombre.localeCompare(organismosData[b].nombre);
        });

        sortedKeys.forEach(key => {
            const option = document.createElement('option');
            option.value = key;
            option.textContent = organismosData[key].nombre;
            // Retain selection
            if (key === currentOrganismo) {
                option.selected = true;
            }
            organismoSelect.appendChild(option);
        });

        // only add event listener once
        if (!organismoSelect.hasAttribute('data-initialized')) {
            organismoSelect.addEventListener('change', (e) => {
                selectOrganismo(e.target.value);
            });
            backBtn.addEventListener('click', goBack);
            organismoSelect.setAttribute('data-initialized', 'true');
        }
        
        if (typeof lucide !== "undefined" && lucide.createIcons) lucide.createIcons();
    }

    function selectOrganismo(orgCode) {
        if (!orgCode) {
            escalafonList.innerHTML = '<div class="no-data">Seleccione un organismo para ver sus escalafones</div>';
            document.getElementById('chart').innerHTML = '';
            document.getElementById('legend-container').innerHTML = '';
            updateStatsEmpty();
            currentOrganismo = null;
            return;
        }

        currentOrganismo = orgCode;
        currentView = 'organismo';
        backBtn.style.display = 'none';

        const org = organismosData[orgCode];
        escalafonList.innerHTML = '';

        org.escalafones.forEach(esc => {
            const item = document.createElement('div');
            item.className = 'escalafon-item';

            // Build tipo badges: always show all 3 types, even if count is 0
            const hasTipoData = esc.total_declaraciones > 0;
            let badgesHtml = '';
            if (hasTipoData) {
                const isMensualFull = esc.mensuales_count >= 12;
                const isSacFull = esc.sac_count >= 2;
                const badges = [
                    `<span class="liq-badge badge-mensual ${isMensualFull ? 'badge-full' : ''}">${esc.mensuales_count}/12 Mens.</span>`,
                    `<span class="liq-badge badge-sac ${isSacFull ? 'badge-full' : ''}">${esc.sac_count}/2 SAC</span>`,
                    `<span class="liq-badge badge-comp">Comp: ${esc.comp_count}</span>`
                ];
                badgesHtml = `<div class="escalafon-badges">${badges.join('')}</div>`;
            } else {
                badgesHtml = `<div class="escalafon-count">${esc.total_declaraciones} declaraciones</div>`;
            }

            item.innerHTML = `
                <div class="escalafon-name">${esc.nombre}</div>
                ${badgesHtml}
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
        
        if (labels.length === 0) {
            document.getElementById('chart').innerHTML = '<div class="no-data">No hay datos para mostrar</div>';
            document.getElementById('legend-container').innerHTML = '';
            return;
        }

        const colors = labels.map(e => coloresEstados[e] || getRandomColor(e));

        const data = [{
            values: values,
            labels: labels,
            type: 'pie',
            hole: 0.4,
            marker: {
                colors: colors,
                line: { color: '#32333D', width: 2 }
            },
            textinfo: 'label+value',
            textposition: 'outside',
            automargin: true,
            insidetextfont: { color: '#FFFFFF' },
            outsidetextfont: { color: '#FFFFFF' },
            hovertemplate: '<b>%{label}</b><br>Cantidad: %{value}<extra></extra>'
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
            plot_bgcolor: 'rgba(0,0,0,0)',
            // White text on hover tooltip for contrast
            hoverlabel: {
                font: { color: '#FFFFFF', size: 13 },
                bordercolor: 'rgba(255,255,255,0.2)'
            }
        };

        Plotly.newPlot('chart', data, layout, {responsive: true});
        updateLegend(labels, colors, 'organismo');
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

        if (!periodos || periodos.length === 0) {
            document.getElementById('chart').innerHTML = `
                <div class="no-data">
                    <h3>${esc.nombre}</h3>
                    <p>No hay declaraciones presentadas</p>
                </div>`;
            document.getElementById('legend-container').innerHTML = '';
            return;
        }

        const labels = periodos.map(p => {
            if (p.periodo === "Sin Período") return p.periodo;
            // Assuming period is YYYYMM
            let str = p.periodo.toString();
            if (str.length === 6) {
                const year = str.substring(0, 4);
                const month = str.substring(4, 6);
                const monthName = months[parseInt(month) - 1] || month;
                return `${monthName}-${year}`;
            }
            return str;
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
            return coloresEstados[state] || getRandomColor(state);
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
            textinfo: 'label+value',
            textposition: 'outside',
            automargin: true,
            insidetextfont: { color: '#FFFFFF' },
            outsidetextfont: { color: '#FFFFFF' },
            customdata: customTexts,
            hovertemplate: '<b>Período: %{label}</b><br>Total DDJJ: %{value}<br><br><b>Estados:</b><br>%{customdata}<extra></extra>'
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
            // White text on hover tooltip for contrast
            hoverlabel: {
                font: { color: '#FFFFFF', size: 13 },
                bordercolor: 'rgba(255,255,255,0.2)'
            },
            annotations: [{
                text: `${esc.total_declaraciones}<br>DDJJ`,
                x: 0.5,
                y: 0.5,
                font: { size: 14, color: '#FFFFFF', weight: 'bold' },
                showarrow: false
            }]
        };

        Plotly.newPlot('chart', data, layout, {responsive: true});
        // Pass escalafon states so the legend shows semantic colors
        updateLegend(labels, colors, 'escalafon', esc.estados_totales);
    }

    function goBack() {
        if (currentView === 'escalafon' && currentOrganismo) {
            selectOrganismo(currentOrganismo);
        }
    }

    // view: 'organismo' | 'escalafon'
    // estadosTotales: only passed in escalafon view to show the semantic state legend
    function updateLegend(labels, colors, view, estadosTotales) {
        const container = document.getElementById('legend-container');
        container.innerHTML = '';

        // Restablecer estilos base responsivos del contenedor
        container.style.flexDirection = 'row';
        container.style.alignItems = 'center';
        container.style.justifyContent = 'center';
        container.style.gap = '15px';

        // In escalafon view: render a semantic legend by STATE color, not by period, with detailed explanation cards
        if (view === 'escalafon' && estadosTotales && Object.keys(estadosTotales).length > 0) {
            container.style.flexDirection = 'column';
            container.style.alignItems = 'stretch';
            container.style.gap = '12px';

            // Title
            const title = document.createElement('div');
            title.style.cssText = 'width: 100%; text-align: center; font-size: 0.85rem; font-weight: 700; opacity: 0.7; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 1.5px; border-bottom: 1px solid var(--glass-border); padding-bottom: 8px; color: var(--text-white);';
            title.textContent = 'Guía y Explicación de Estados';
            container.appendChild(title);

            Object.entries(estadosTotales).sort((a, b) => b[1] - a[1]).forEach(([estado, cantidad]) => {
                const stateColor = coloresEstados[estado] || getRandomColor(estado);
                const explicacion = obtenerExplicacion(estado);
                
                const item = document.createElement('div');
                item.className = 'legend-item';
                item.style.cssText = 'display: flex; flex-direction: column; gap: 6px; padding: 14px; background: rgba(255, 255, 255, 0.01); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.03); transition: all 0.2s ease;';
                
                // Dynamic Hover Interaction
                item.onmouseenter = () => {
                    item.style.background = 'rgba(255, 255, 255, 0.03)';
                    item.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                    item.style.transform = 'translateY(-1px)';
                };
                item.onmouseleave = () => {
                    item.style.background = 'rgba(255, 255, 255, 0.01)';
                    item.style.borderColor = 'rgba(255, 255, 255, 0.03)';
                    item.style.transform = 'translateY(0)';
                };

                item.innerHTML = `
                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; width: 100%;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <div style="width: 12px; height: 12px; border-radius: 50%; background: ${stateColor}; flex-shrink: 0; box-shadow: 0 0 8px ${stateColor}80;"></div>
                            <span style="color: var(--text-white); font-weight: 600; font-size: 0.9rem;">${estado}</span>
                        </div>
                        <span style="font-size: 0.8rem; background: rgba(255, 255, 255, 0.05); padding: 2px 10px; border-radius: 12px; opacity: 0.8; font-weight: 600; color: var(--accent-cyan);">Total: ${cantidad}</span>
                    </div>
                    <div style="font-size: 0.8rem; opacity: 0.7; padding-left: 22px; line-height: 1.45; color: var(--text-main); text-align: left;">
                        ${explicacion}
                    </div>
                `;
                container.appendChild(item);
            });
            return;
        }

        // Default: show period labels with their colors
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

    function updateStatsEmpty() {
        document.getElementById('total-ddjj').textContent = '-';
        document.getElementById('total-periodos').textContent = '-';
        document.getElementById('total-estados').textContent = '-';
    }
    
    // Hash string to color for unknown states
    function getRandomColor(str) {
        if (!str) return '#999';
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        let color = '#';
        for (let i = 0; i < 3; i++) {
            let value = (hash >> (i * 8)) & 0xFF;
            // Make colors a bit brighter for dark mode
            value = Math.max(value, 100); 
            color += ('00' + value.toString(16)).substr(-2);
        }
        return color;
    }

    // Startup
    resetData();
    initDashboard();
});