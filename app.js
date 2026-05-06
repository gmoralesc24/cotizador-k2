document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('quote-form');
    
    // Inputs
    const inputs = {
        clientName: document.getElementById('clientName'),
        serviceType: document.getElementById('serviceType'),
        numAgents: document.getElementById('numAgents'),
        hoursPerShift: document.getElementById('hoursPerShift'),
        totalDays: document.getElementById('totalDays'),
        nightHoursPerShift: document.getElementById('nightHoursPerShift'),
        sundayHolidayDays: document.getElementById('sundayHolidayDays'),
        highRiskZone: document.getElementById('highRiskZone'),
        armedAgents: document.getElementById('armedAgents'),
        contractMonths: document.getElementById('contractMonths')
    };

    // Outputs
    const outputs = {
        clientName: document.getElementById('outClientName'),
        date: document.getElementById('outDate'),
        serviceType: document.getElementById('outServiceType'),
        scheme: document.getElementById('outScheme'),
        contract: document.getElementById('outContract'),
        tableBody: document.getElementById('invoiceTableBody'),
        subtotalBase: document.getElementById('outSubtotalBase'),
        
        rowNight: document.getElementById('rowNight'),
        nightSurcharge: document.getElementById('outNightSurcharge'),
        
        rowSunday: document.getElementById('rowSunday'),
        sundaySurcharge: document.getElementById('outSundaySurcharge'),
        
        rowRisk: document.getElementById('rowRisk'),
        riskSurcharge: document.getElementById('outRiskSurcharge'),
        
        rowArmed: document.getElementById('rowArmed'),
        armed: document.getElementById('outArmed'),
        
        rowDiscount: document.getElementById('rowDiscount'),
        discountLabel: document.getElementById('outDiscountLabel'),
        discount: document.getElementById('outDiscount'),
        
        subtotalNet: document.getElementById('outSubtotalNet'),
        igv: document.getElementById('outIgv'),
        grandTotal: document.getElementById('outGrandTotal')
    };

    // Formateador de moneda
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('es-PE', { style: 'currency', currency: 'PEN' }).format(amount);
    };

    // Validar y recalcular
    const calculate = () => {
        // Obtener valores
        const client = inputs.clientName.value || '-';
        const isResguardo = inputs.serviceType.value === 'resguardo';
        const baseRate = isResguardo ? 35.00 : 18.00;
        const serviceName = isResguardo ? 'Servicio 2: Resguardo' : 'Servicio 1: Vigilancia';
        
        const agents = Math.max(2, parseInt(inputs.numAgents.value) || 2);
        const hours = Math.max(1, parseInt(inputs.hoursPerShift.value) || 12);
        const days = Math.max(1, parseInt(inputs.totalDays.value) || 30);
        
        const nightHours = Math.min(hours, parseInt(inputs.nightHoursPerShift.value) || 0);
        const sundayDays = Math.min(days, parseInt(inputs.sundayHolidayDays.value) || 0);
        
        const isHighRisk = inputs.highRiskZone.checked;
        const armedQty = parseInt(inputs.armedAgents.value) || 0;
        const months = Math.max(1, parseInt(inputs.contractMonths.value) || 1);

        // 1. Cálculo Base
        const totalHours = hours * days;
        const totalManHours = totalHours * agents;
        const baseSubtotal = totalManHours * baseRate;

        // 2. Modificadores de Tiempo
        // Turno nocturno: +25% sobre horas nocturnas
        const totalNightManHours = nightHours * days * agents;
        const nightSurcharge = totalNightManHours * baseRate * 0.25;

        // Domingos/Feriados: +35% sobre horas de ese día
        const totalSundayManHours = hours * sundayDays * agents;
        const sundaySurcharge = totalSundayManHours * baseRate * 0.35;

        // 3. Riesgo Alto
        // +15% sobre el subtotal acumulado (base + tiempo)
        const accumulatedSubtotal = baseSubtotal + nightSurcharge + sundaySurcharge;
        const riskSurcharge = isHighRisk ? (accumulatedSubtotal * 0.15) : 0;

        // 4. Equipamiento Armado
        // S/ 800 mensual por agente. Calculamos el proporcional al periodo cotizado (días)
        // O asumimos tarifa plana mensual que se aplica al total del contrato. 
        // Para simplificar: S/800 * agentes armados * meses de contrato
        const armedCost = 800 * armedQty * months;

        // Subtotal Bruto antes de descuentos
        const grossSubtotal = accumulatedSubtotal + riskSurcharge + armedCost;

        // 5. Descuentos por duración
        let discountPct = 0;
        if (months >= 3 && months <= 6) discountPct = 0.05;
        else if (months >= 7 && months <= 12) discountPct = 0.10;
        else if (months > 12) discountPct = 0.15;

        const discountAmount = grossSubtotal * discountPct;

        // 6. Subtotal Neto e IGV
        const netSubtotal = grossSubtotal - discountAmount;
        const igv = netSubtotal * 0.18;
        const grandTotal = netSubtotal + igv;

        // --- ACTUALIZAR UI ---
        outputs.clientName.textContent = client;
        outputs.date.textContent = new Date().toLocaleDateString('es-PE');
        outputs.serviceType.textContent = serviceName;
        outputs.scheme.textContent = `${agents} Agentes | ${hours}h/turno | ${days} días`;
        outputs.contract.textContent = `${months} Mes(es)`;

        // Tabla
        outputs.tableBody.innerHTML = `
            <tr>
                <td>${serviceName} (Tarifa Base)</td>
                <td class="text-right">${totalManHours} hh</td>
                <td class="text-right">${formatCurrency(baseSubtotal)}</td>
            </tr>
        `;

        outputs.subtotalBase.textContent = formatCurrency(baseSubtotal);

        // Mostrar/Ocultar Modificadores
        if (nightSurcharge > 0) {
            outputs.rowNight.style.display = 'flex';
            outputs.nightSurcharge.textContent = formatCurrency(nightSurcharge);
        } else {
            outputs.rowNight.style.display = 'none';
        }

        if (sundaySurcharge > 0) {
            outputs.rowSunday.style.display = 'flex';
            outputs.sundaySurcharge.textContent = formatCurrency(sundaySurcharge);
        } else {
            outputs.rowSunday.style.display = 'none';
        }

        if (isHighRisk) {
            outputs.rowRisk.style.display = 'flex';
            outputs.riskSurcharge.textContent = formatCurrency(riskSurcharge);
        } else {
            outputs.rowRisk.style.display = 'none';
        }

        if (armedCost > 0) {
            outputs.rowArmed.style.display = 'flex';
            outputs.armed.textContent = formatCurrency(armedCost);
        } else {
            outputs.rowArmed.style.display = 'none';
        }

        if (discountAmount > 0) {
            outputs.rowDiscount.style.display = 'flex';
            outputs.discountLabel.textContent = `Descuento por Contrato (${discountPct * 100}%)`;
            outputs.discount.textContent = `-${formatCurrency(discountAmount)}`;
        } else {
            outputs.rowDiscount.style.display = 'none';
        }

        outputs.subtotalNet.textContent = formatCurrency(netSubtotal);
        outputs.igv.textContent = formatCurrency(igv);
        outputs.grandTotal.textContent = formatCurrency(grandTotal);
    };

    // Escuchar cambios en el formulario
    form.addEventListener('input', calculate);

    // Impresión / PDF
    document.getElementById('btnPrint').addEventListener('click', () => {
        window.print();
    });

    // Cálculo inicial
    calculate();
});
