        let employeesData = [
            { id: "PP-0001", name: "Ali Ahmad", email: "ali.ahmad@peoplepulse.io", phone: "5123456789", dept: "Engineering", title: "Senior Developer", project: "SwapIt", workMode: "onsite", status: "Present", lateBy: 0, location: "Amman – HQ Tower, Floor 4", initials: "AA", color: "#c98bfa", photo: null, dob: "1994-03-12", startDate: "2022-01-10", endDate: "", lat: 31.9539, lng: 35.9106, checkIn: { lat: 31.9541, lng: 35.9108, label: "Amman – HQ Tower", match: true } },
            { id: "PP-0002", name: "Ameen Taylor", email: "ameen.taylor@peoplepulse.io", phone: "6234567890", dept: "Sales", title: "Account Executive", project: "CRM v2", workMode: "remote", status: "Late", lateBy: 23, location: "Remote – Amman", initials: "AT", color: "#ff9b7c", photo: null, dob: "1991-07-22", startDate: "2022-06-15", endDate: "", lat: 31.9454, lng: 35.9284, checkIn: { lat: 31.9002, lng: 35.8752, label: "Cafe near Abdoun (not home)", match: false } },
            { id: "PP-0003", name: "Rola Vance", email: "rola.vance@peoplepulse.io", phone: "7345678901", dept: "Design", title: "UI/UX Designer", project: "Brand Redesign", workMode: "mixed", status: "Absent", lateBy: 0, location: "Amman – HQ Tower, Floor 2", initials: "RV", color: "#ff8fd1", photo: null, dob: "1996-11-05", startDate: "2023-02-01", endDate: "2026-09-20", lat: 31.9539, lng: 35.9106, checkIn: null },
            { id: "PP-0004", name: "Elena Rostova", email: "elena.rostova@peoplepulse.io", phone: "8456789012", dept: "Marketing", title: "Growth Lead", project: "Q3 Campaign", workMode: "remote", status: "Present", lateBy: 0, location: "Remote – Irbid", initials: "ER", color: "#78b7ff", photo: null, dob: "1993-02-18", startDate: "2021-11-20", endDate: "", lat: 32.5556, lng: 35.85, checkIn: { lat: 32.5559, lng: 35.8498, label: "Remote – Irbid", match: true } },
            { id: "PP-0005", name: "David Kim", email: "david.kim@peoplepulse.io", phone: "9567890123", dept: "Engineering", title: "Backend Engineer", project: "API Gateway", workMode: "onsite", status: "Present", lateBy: 0, location: "Amman – HQ Tower, Floor 4", initials: "DK", color: "#ff8fd1", photo: null, dob: "1990-09-30", startDate: "2022-09-05", endDate: "", lat: 31.9539, lng: 35.9106, checkIn: { lat: 31.9538, lng: 35.9105, label: "Amman – HQ Tower", match: true } },
            { id: "PP-0006", name: "Rana Martinez", email: "rana.martinez@peoplepulse.io", phone: "5678901234", dept: "Product", title: "Product Manager", project: "SwapIt", workMode: "mixed", status: "Late", lateBy: 14, location: "Amman – HQ Tower, Floor 3", initials: "RM", color: "#c98bfa", photo: null, dob: "1995-05-14", startDate: "2023-04-18", endDate: "", lat: 31.9539, lng: 35.9106, checkIn: { lat: 31.954, lng: 35.9109, label: "Amman – HQ Tower", match: true } },
            { id: "PP-0007", name: "Alia Zaid", email: "alia.zaid@peoplepulse.io", phone: "6789012345", dept: "Engineering", title: "DevOps Engineer", project: "Cloud Migration", workMode: "onsite", status: "Absent", lateBy: 0, location: "Amman – HQ Tower, Floor 4", initials: "AZ", color: "#ff9b7c", photo: null, dob: "1992-12-01", startDate: "2023-08-01", endDate: "", lat: 31.9539, lng: 35.9106, checkIn: null },
            { id: "PP-0008", name: "Yousef Haddad", email: "yousef.haddad@peoplepulse.io", phone: "7890123456", dept: "Sales", title: "Sales Manager", project: "CRM v2", workMode: "onsite", status: "Present", lateBy: 0, location: "Amman – HQ Tower, Floor 3", initials: "YH", color: "#4dd8f0", photo: null, dob: "1989-08-09", startDate: "2024-01-15", endDate: "", lat: 31.9539, lng: 35.9106, checkIn: { lat: 31.9537, lng: 35.9104, label: "Amman – HQ Tower", match: true } },
            { id: "PP-0009", name: "Lana Odeh", email: "lana.odeh@peoplepulse.io", phone: "8901234567", dept: "Design", title: "Product Designer", project: "Brand Redesign", workMode: "remote", status: "Present", lateBy: 0, location: "Remote – Zarqa", initials: "LO", color: "#ff8fd1", photo: null, dob: "1997-04-27", startDate: "2024-03-10", endDate: "", lat: 32.0728, lng: 36.0876, checkIn: { lat: 32.0731, lng: 36.0879, label: "Remote – Zarqa", match: true } },
            { id: "PP-0010", name: "Karim Nasser", email: "karim.nasser@peoplepulse.io", phone: "9012345678", dept: "Marketing", title: "Content Strategist", project: "Q3 Campaign", workMode: "mixed", status: "Late", lateBy: 8, location: "Amman – HQ Tower, Floor 2", initials: "KN", color: "#ffcf6b", photo: null, dob: "1994-10-16", startDate: "2024-05-20", endDate: "", lat: 31.9539, lng: 35.9106, checkIn: { lat: 31.9601, lng: 35.9187, label: "WeWork Abdali (not HQ)", match: false } },
            { id: "PP-0011", name: "Sara Hijazi", email: "sara.hijazi@peoplepulse.io", phone: "5012345678", dept: "Product", title: "Product Analyst", project: "SwapIt", workMode: "onsite", status: "Present", lateBy: 0, location: "Amman – HQ Tower, Floor 3", initials: "SH", color: "#c98bfa", photo: null, dob: "1993-06-03", startDate: "2024-07-08", endDate: "", lat: 31.9539, lng: 35.9106, checkIn: { lat: 31.954, lng: 35.9107, label: "Amman – HQ Tower", match: true } },
            { id: "PP-0012", name: "Omar Fares", email: "omar.fares@peoplepulse.io", phone: "6123456780", dept: "Engineering", title: "QA Engineer", project: "API Gateway", workMode: "remote", status: "Absent", lateBy: 0, location: "Remote – Irbid", initials: "OF", color: "#ff9b7c", photo: null, dob: "1996-01-25", startDate: "2024-09-01", endDate: "", lat: 32.5556, lng: 35.85, checkIn: null }
        ];

        let uploadedImageBase64 = null;
        const ATT_TODAY = new Date(2026, 8, 8); // Sept 8, 2026
        let currentAttHistoryEmpId = null;

        function pad2(n) { return n.toString().padStart(2, '0'); }

        function minutesToTime(mins) {
            const h = Math.floor(mins / 60), m = mins % 60;
            return pad2(h) + ':' + pad2(m);
        }
        function hashSeed(str) {
            let h = 0;
            for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
            return h;
        }

        function buildDayRecord(emp, dateObj) {
            const dow = dateObj.getDay(); // Jordan weekend: Friday(5) & Saturday(6)
            if (dow === 5 || dow === 6) return { date: dateObj, status: 'Weekend' };
            if (dateObj > ATT_TODAY) return { date: dateObj, status: 'Upcoming' };

            const iso = dateObj.getFullYear() + '-' + pad2(dateObj.getMonth() + 1) + '-' + pad2(dateObj.getDate());
            const seed = hashSeed(emp.id + '-' + iso);
            const r = seed % 100;

            let status;
            if (r < 76) status = 'Present';
            else if (r < 89) status = 'Late';
            else if (r < 96) status = 'Absent';
            else status = 'Leave';

            const record = { date: dateObj, status };

            if (status === 'Present' || status === 'Late') {
                const inOffset = status === 'Late' ? (16 + (seed % 40)) : (-10 + (seed % 15));
                const checkInMinutes = 9 * 60 + inOffset;
                const outOffset = Math.floor(seed / 7) % 40;
                const checkOutMinutes = 17 * 60 + outOffset;

                record.checkIn = minutesToTime(checkInMinutes);
                record.checkOut = minutesToTime(checkOutMinutes);
                record.lateBy = status === 'Late' ? Math.max(0, checkInMinutes - 9 * 60) : 0;

                record.breakTaken = (seed % 10) < 8; // ~80% take a break
                if (record.breakTaken) {
                    const breakStartMinutes = 13 * 60 + (Math.floor(seed / 11) % 30);
                    const breakDur = 25 + (Math.floor(seed / 13) % 30);
                    record.breakStart = minutesToTime(breakStartMinutes);
                    record.breakEnd = minutesToTime(breakStartMinutes + breakDur);
                }

                if (emp.workMode === 'remote') record.location = emp.location || 'Remote';
                else if (emp.workMode === 'mixed') record.location = (Math.floor(seed / 3) % 2 === 0) ? (emp.location || 'Office') : 'Remote';
                else record.location = emp.location || 'Office';
            }

            return record;
        }

        function getMonthAttendance(emp, year, month) {
            const daysInMonth = new Date(year, month + 1, 0).getDate();
            const records = [];
            for (let d = 1; d <= daysInMonth; d++) records.push(buildDayRecord(emp, new Date(year, month, d)));
            return records;
        }

        function getWeekAttendance(emp) {
            const records = [];
            for (let i = 6; i >= 0; i--) {
                const d = new Date(ATT_TODAY);
                d.setDate(d.getDate() - i);
                records.push(buildDayRecord(emp, d));
            }
            return records;
        }

        function getPeriodAttendance(emp, period) {
            return period === 'week' ? getWeekAttendance(emp) : getMonthAttendance(emp, ATT_TODAY.getFullYear(), ATT_TODAY.getMonth());
        }

        function summarizeRecords(records) {
            const counts = { Present: 0, Late: 0, Absent: 0, Leave: 0 };
            records.forEach(r => { if (counts[r.status] !== undefined) counts[r.status]++; });
            const workingDays = records.filter(r => r.status !== 'Weekend' && r.status !== 'Upcoming').length;
            return { counts, workingDays };
        }

        function populateReportDeptSelect() {
            const select = document.getElementById('reportDeptSelect');
            if (!select) return;
            const deptNames = Array.from(new Set([...(typeof departmentsList !== 'undefined' ? departmentsList : []), ...employeesData.map(e => e.dept)]));
            const current = select.value;
            select.innerHTML = `<option value="All">All departments</option>` + deptNames.map(d => `<option value="${d}">${d}</option>`).join('');
            if (deptNames.includes(current)) select.value = current;
        }

        function renderAttendanceReport() {
            populateReportDeptSelect();
            const deptSelect = document.getElementById('reportDeptSelect');
            const periodSelect = document.getElementById('reportPeriodSelect');
            const empSearchEl = document.getElementById('reportEmpSearch');
            if (!deptSelect || !periodSelect || !empSearchEl) return;

            const dept = deptSelect.value || 'All';
            const period = periodSelect.value;
            const empQuery = empSearchEl.value.trim().toLowerCase();

            let pool = employeesData;
            if (empQuery) pool = pool.filter(e => e.name.toLowerCase().includes(empQuery));
            else if (dept !== 'All') pool = pool.filter(e => e.dept === dept);

            const summaryEl = document.getElementById('reportSummary');
            const listEl = document.getElementById('reportEmployeeList');
            if (!pool.length) {
                summaryEl.innerHTML = '<div class="cmdk-empty">No employees match.</div>';
                listEl.innerHTML = '';
                return;
            }

            let totalCounts = { Present: 0, Late: 0, Absent: 0, Leave: 0 }, totalWorkingDays = 0;
            const perEmp = pool.map(emp => {
                const records = getPeriodAttendance(emp, period);
                const { counts, workingDays } = summarizeRecords(records);
                Object.keys(counts).forEach(k => totalCounts[k] += counts[k]);
                totalWorkingDays += workingDays;
                return { emp, counts, workingDays };
            });

            const presentPct = totalWorkingDays ? Math.round((totalCounts.Present / totalWorkingDays) * 100) : 0;
            const latePct = totalWorkingDays ? Math.round((totalCounts.Late / totalWorkingDays) * 100) : 0;
            const absencePct = totalWorkingDays ? Math.round((totalCounts.Absent / totalWorkingDays) * 100) : 0;
            const highAbsence = absencePct >= 15;

            const label = empQuery ? `matches for "${empQuery}"` : (dept === 'All' ? 'the whole company' : dept);
            summaryEl.innerHTML = `
                <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center;">
                    <span style="font-size:12.5px;opacity:.75;">Over the selected ${period === 'week' ? 'week' : 'month'} for <b>${label}</b>:</span>
                    <span style="padding:4px 10px;border-radius:20px;background:rgba(201,139,250,.12);color:#c98bfa;font-size:12px;">${presentPct}% present</span>
                    <span style="padding:4px 10px;border-radius:20px;background:rgba(255,207,107,.12);color:#ffcf6b;font-size:12px;">${latePct}% late</span>
                    <span style="padding:4px 10px;border-radius:20px;background:${highAbsence ? 'rgba(255,107,107,.24)' : 'rgba(255,107,107,.12)'};color:#ff6b6b;font-size:12px;${highAbsence ? 'font-weight:800;' : ''}">${absencePct}% absent${highAbsence ? ' ⚠ notably high' : ''}</span>
                </div>
            `;

            listEl.innerHTML = perEmp.map(({ emp, counts, workingDays }) => {
                const empAbsPct = workingDays ? Math.round((counts.Absent / workingDays) * 100) : 0;
                return `<div class="dept-row">
                    <div class="dept-top"><span class="dept-name"><i style="background:${emp.color}"></i>${emp.name} <small style="opacity:.55;">(${emp.dept})</small></span><strong>${counts.Present}P · ${counts.Late}L · ${counts.Absent}A · ${counts.Leave}Lv</strong></div>
                    <div class="bar"><span style="width:${empAbsPct}%;background:#ff6b6b"></span></div>
                </div>`;
            }).join('');
        }

        function exportAttendanceReportCSV() {
            const dept = document.getElementById('reportDeptSelect').value || 'All';
            const period = document.getElementById('reportPeriodSelect').value;
            const empQuery = document.getElementById('reportEmpSearch').value.trim().toLowerCase();
            let pool = employeesData;
            if (empQuery) pool = pool.filter(e => e.name.toLowerCase().includes(empQuery));
            else if (dept !== 'All') pool = pool.filter(e => e.dept === dept);

            const header = ['Employee', 'Department', 'Present', 'Late', 'Absent', 'Leave', 'Working Days'];
            const rows = pool.map(emp => {
                const { counts, workingDays } = summarizeRecords(getPeriodAttendance(emp, period));
                return [emp.name, emp.dept, counts.Present, counts.Late, counts.Absent, counts.Leave, workingDays];
            });
            downloadCSV(`peoplepulse-attendance-report-${dept}-${period}.csv`, [header, ...rows]);
            notify('Attendance report exported', 'Your CSV download is ready.');
        }

        function populateAttHistoryControls() {
            const list = document.getElementById('attHistorySuggestions');
            if (list) {
                const deptNames = Array.from(new Set([...(typeof departmentsList !== 'undefined' ? departmentsList : []), ...employeesData.map(e => e.dept)]));
                const empNames = employeesData.map(e => e.name);
                const allSuggestions = Array.from(new Set([...empNames, ...deptNames]));
                list.innerHTML = allSuggestions.map(n => `<option value="${n}">`).join('');
            }

            if (!currentAttHistoryEmpId || !employeesData.some(e => e.id === currentAttHistoryEmpId)) {
                currentAttHistoryEmpId = employeesData[0] ? employeesData[0].id : null;
            }
            const searchInput = document.getElementById('attHistorySearch');
            const current = employeesData.find(e => e.id === currentAttHistoryEmpId);
            if (searchInput && current && !searchInput.value) searchInput.value = current.name;
            toggleAttHistorySearchBtn();

            const monthSelect = document.getElementById('attHistoryMonth');
            if (monthSelect && !monthSelect.dataset.filled) {
                const months = [];
                for (let i = 11; i >= 0; i--) months.push(new Date(ATT_TODAY.getFullYear(), ATT_TODAY.getMonth() - i, 1));
                monthSelect.innerHTML = months.map(d => {
                    const val = d.getFullYear() + '-' + pad2(d.getMonth() + 1);
                    const label = d.toLocaleString('en-US', { month: 'long', year: 'numeric' });
                    return `<option value="${val}">${label}</option>`;
                }).join('');
                monthSelect.value = ATT_TODAY.getFullYear() + '-' + pad2(ATT_TODAY.getMonth() + 1);
                monthSelect.dataset.filled = '1';
            }
        }

        function toggleAttHistorySearchBtn() {
            const input = document.getElementById('attHistorySearch');
            const btn = document.getElementById('attHistorySearchBtn');
            if (!input || !btn) return;
            btn.style.display = input.value.trim() ? 'inline-flex' : 'none';
        }

        function onAttHistorySearchInput() {
            toggleAttHistorySearchBtn();
        }

        function runAttHistorySearch() {
            const val = document.getElementById('attHistorySearch').value.trim().toLowerCase();
            if (!val) return;

            // First, try to match this against an employee's name (exact match wins over partial)
            const exactName = employeesData.find(e => e.name.toLowerCase() === val);
            const partialName = exactName || employeesData.find(e => e.name.toLowerCase().includes(val));

            if (partialName) {
                currentAttHistoryEmpId = partialName.id;
                renderAttendanceHistory();
                return;
            }

            // Otherwise, treat it as a department search and jump to the first matching employee
            const deptMatch = employeesData.find(e => e.dept.toLowerCase().includes(val));
            if (deptMatch) {
                currentAttHistoryEmpId = deptMatch.id;
                const searchInput = document.getElementById('attHistorySearch');
                if (searchInput) searchInput.value = deptMatch.name;
                renderAttendanceHistory();
                return;
            }

            notify('No match found', `No employee or department matches "${val}"`);
        }

        function renderAttendanceHistory() {
            const monthSelect = document.getElementById('attHistoryMonth');
            const container = document.getElementById('attHistoryLog');
            const summaryEl = document.getElementById('attHistorySummary');
            if (!monthSelect || !container || !monthSelect.value) return;

            const emp = employeesData.find(e => e.id === currentAttHistoryEmpId) || employeesData[0];
            if (!emp) return;

            const [yearStr, monthStr] = monthSelect.value.split('-');
            const year = parseInt(yearStr, 10), month = parseInt(monthStr, 10) - 1;

            const records = getMonthAttendance(emp, year, month);
            const workingRecords = records.filter(r => r.status !== 'Weekend' && r.status !== 'Upcoming');

            const counts = { Present: 0, Late: 0, Absent: 0, Leave: 0 };
            workingRecords.forEach(r => { counts[r.status] = (counts[r.status] || 0) + 1; });

            if (summaryEl) {
                summaryEl.innerHTML = `
                    <div class="att-stat present"><strong>${counts.Present}</strong><span>Present</span></div>
                    <div class="att-stat late"><strong>${counts.Late}</strong><span>Late</span></div>
                    <div class="att-stat absent"><strong>${counts.Absent}</strong><span>Absent</span></div>
                    <div class="att-stat leave"><strong>${counts.Leave}</strong><span>Leave</span></div>
                `;
            }

            container.innerHTML = workingRecords.slice().reverse().map(r => {
                const dayLabel = r.date.toLocaleString('en-US', { month: 'short', day: 'numeric' });
                const weekdayLabel = r.date.toLocaleString('en-US', { weekday: 'short' });

                if (r.status === 'Absent') {
                    return `<div class="att-log-row" data-status="Absent">
                        <div class="att-log-date"><strong>${dayLabel}</strong><small>${weekdayLabel}</small></div>
                        <div class="att-log-main">
                            <div class="att-log-top"><span class="status absent"><b></b>Absent</span></div>
                            <div class="att-log-times"><span>No check-in recorded</span></div>
                        </div>
                    </div>`;
                }
                if (r.status === 'Leave') {
                    return `<div class="att-log-row" data-status="Leave">
                        <div class="att-log-date"><strong>${dayLabel}</strong><small>${weekdayLabel}</small></div>
                        <div class="att-log-main">
                            <div class="att-log-top"><span class="status leave"><b></b>Leave</span></div>
                            <div class="att-log-times"><span>Approved leave day</span></div>
                        </div>
                    </div>`;
                }

                const breakText = r.breakTaken ? `Break <b>${r.breakStart}–${r.breakEnd}</b>` : 'No break taken';
                const lateText = r.status === 'Late' ? ` <strong class="late-by">(+${r.lateBy}m)</strong>` : '';

                return `<div class="att-log-row" data-status="${r.status}">
                    <div class="att-log-date"><strong>${dayLabel}</strong>${weekdayLabel}</div>
                    <div class="att-log-main">
                        <div class="att-log-top"><span class="status ${r.status.toLowerCase()}"><b></b>${r.status}${lateText}</span><span class="att-log-loc">📍 ${r.location}</span></div>
                        <div class="att-log-times"><span>In <b>${r.checkIn}</b></span><span>Out <b>${r.checkOut}</b></span><span>${breakText}</span></div>
                    </div>
                </div>`;
            }).join('') || '<p style="padding:10px 0;color:#6c7187;font-size:10px;">No records for this month.</p>';
        }

        function previewImage(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    uploadedImageBase64 = e.target.result;
                    const box = document.getElementById('previewBox');
                    box.innerHTML = `<img src="${uploadedImageBase64}" alt="Preview" />`;
                };
                reader.readAsDataURL(file);
            }
        }

        let uploadedDocFiles = { cv: null, criminalCert: null, passport: null };

        function onDocFileChange(event, key) {
            const file = event.target.files[0];
            uploadedDocFiles[key] = file ? file.name : null;
            const labelEl = document.getElementById('emp' + key.charAt(0).toUpperCase() + key.slice(1) + 'Name');
            if (labelEl) labelEl.textContent = file ? `✓ ${file.name}` : 'No file selected';
        }

        let employeeStatusFilter = 'All';
        let employeePageIndex = 0;
        const EMPLOYEE_PAGE_SIZE = 8;

        function setEmployeeStatusFilter(status) {
            employeeStatusFilter = status;
            employeePageIndex = 0;
            document.querySelectorAll('#statusChipRow .status-chip').forEach(c => c.classList.toggle('active', c.dataset.status === status));
            renderEmployees(getSearchFilteredEmployees());
        }

        function goToEmployeePage(i) {
            employeePageIndex = i;
            renderEmployees(getSearchFilteredEmployees());
            document.getElementById('employeesPanelFull').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        function renderEmployees(list = employeesData) {
            const countEl = document.getElementById('empCount');
            const container = document.getElementById('employeeRows');
            const paginationEl = document.getElementById('employeePagination');

            const filteredByStatus = employeeStatusFilter === 'All' ? list : list.filter(e => e.status === employeeStatusFilter);
            if (countEl) countEl.textContent = filteredByStatus.length;
            if (!container) return;

            const totalPages = Math.max(1, Math.ceil(filteredByStatus.length / EMPLOYEE_PAGE_SIZE));
            if (employeePageIndex >= totalPages) employeePageIndex = totalPages - 1;
            if (employeePageIndex < 0) employeePageIndex = 0;
            const pageSlice = filteredByStatus.slice(employeePageIndex * EMPLOYEE_PAGE_SIZE, (employeePageIndex + 1) * EMPLOYEE_PAGE_SIZE);

            container.innerHTML = pageSlice.map(emp => {
                const lateTag = (emp.status === 'Late' && emp.lateBy) ? `<span class="late-min-tag">+${emp.lateBy}m</span>` : '';
                return `
                                <div class="row" id="emp-row-${emp.id}">
                                  <div class="employee">
                                    ${emp.photo ? `<img src="${emp.photo}" class="employee-img" />` : `<div class="employee-avatar" style="background:${emp.color}; color:#132226;">${emp.initials}</div>`}
                                    <div>
                                      <strong>${emp.name}</strong>
                                      <small class="emp-id-line copy-line"><span>ID: ${emp.id} • ${emp.email}</span><button class="copy-btn" title="Copy email" onclick="event.stopPropagation(); copyToClipboard('${emp.email}', 'Email')">⧉</button></small>
                                      <small class="copy-line" style="margin-top:2px;"><span>Phone: ${emp.phone}</span><button class="copy-btn" title="Copy phone" onclick="event.stopPropagation(); copyToClipboard('${emp.phone}', 'Phone')">⧉</button></small>
                                    </div>
                                  </div>
                                  <div class="dept">${emp.dept}</div>
                                  <div class="info-col"><strong>${emp.title || '—'}</strong><small>${emp.project ? 'Proj: ' + emp.project : 'No project'}</small></div>
                                  <div><span class="status ${emp.workMode}"><b></b>${emp.workMode.charAt(0).toUpperCase() + emp.workMode.slice(1)}</span></div>
                                  <div><span class="status ${emp.status.toLowerCase()}"><b></b>${emp.status}${lateTag}</span></div>
                                  <div class="row-actions">
                                    <button class="icon-action-btn edit" title="Edit employee" onclick="openEditEmployee('${emp.id}')">✎</button>
                                    <button class="icon-action-btn delete" title="Delete employee" onclick="confirmDeleteEmployee('${emp.id}')">🗑</button>
                                  </div>
                                </div>
                            `;
            }).join('') || '<div class="cmdk-empty">No employees match this view.</div>';

            if (paginationEl) {
                if (totalPages <= 1) {
                    paginationEl.innerHTML = '';
                } else {
                    let pageBtns = '';
                    for (let p = 0; p < totalPages; p++) {
                        pageBtns += `<button class="${p === employeePageIndex ? 'active' : ''}" onclick="goToEmployeePage(${p})">${p + 1}</button>`;
                    }
                    paginationEl.innerHTML = `
                        <button onclick="goToEmployeePage(${employeePageIndex - 1})" ${employeePageIndex === 0 ? 'disabled' : ''}>‹</button>
                        ${pageBtns}
                        <button onclick="goToEmployeePage(${employeePageIndex + 1})" ${employeePageIndex >= totalPages - 1 ? 'disabled' : ''}>›</button>
                        <span style="opacity:.5;margin-left:8px;">${filteredByStatus.length} total</span>
                    `;
                }
            }

            renderEmployeesMini();
            renderAttendanceOverview();
            renderDepartmentsGrid();
        }

        let currentMiniStatusFilter = null;
        function renderAttendanceOverview() {
            const total = employeesData.length || 1;
            const counts = { Present: 0, Late: 0, Absent: 0, Leave: 0 };
            employeesData.forEach(e => { counts[e.status] = (counts[e.status] || 0) + 1; });
            const pct = k => Math.round((counts[k] / total) * 100);
            const pPresent = pct('Present'), pLate = pct('Late'), pAbsent = pct('Absent'), pLeave = pct('Leave');

            const setTxt = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v + '%'; };
            setTxt('attendancePct', pPresent + pLate);
            setTxt('pctPresent', pPresent);
            setTxt('pctLate', pLate);
            setTxt('pctAbsent', pAbsent);
            setTxt('pctLeave', pLeave);

            const donut = document.getElementById('attendanceDonut');
            if (donut) {
                const a = pPresent, b = a + pLate, c = b + pAbsent;
                donut.style.background = `conic-gradient(#c98bfa 0 ${a}%,#5f9eff ${a}% ${b}%,#ed8066 ${b}% ${c}%,#8b6edf ${c}% 100%)`;
            }
        }
        function renderEmployeesMini(list) {
            if (!list) {
                list = currentMiniStatusFilter
                    ? employeesData.filter(emp => emp.status === currentMiniStatusFilter)
                    : employeesData;
            }
            const container = document.getElementById('employeeRowsMini');
            const countEl = document.getElementById('empCountMini');

            if (countEl) countEl.textContent = list.length;
            if (!container) return;

            container.innerHTML = list.map(emp => {
                const lateTag = (emp.status === 'Late' && emp.lateBy) ? `<span class="late-min-tag">+${emp.lateBy}m</span>` : '';
                return `
                                <div class="mini-row" data-status="${emp.status}">
                                  <div class="employee">
                                    ${emp.photo ? `<img src="${emp.photo}" class="employee-img" />` : `<div class="employee-avatar" style="background:${emp.color}; color:#132226;">${emp.initials}</div>`}
                                    <div>
                                      <strong>${emp.name}</strong>
                                      <small>${emp.title || ''}</small>
                                    </div>
                                  </div>
                                  <div class="dept">${emp.dept}</div>
                                  <div><span class="status ${emp.status.toLowerCase()}"><b></b>${emp.status}${lateTag}</span></div>
                                </div>
                            `;
            }).join('');
        }
        let departmentsList = ['Engineering', 'Sales', 'Design', 'Marketing', 'Product', 'Computer Science', 'AI', 'IoT'];
        const deptColors = ['#c98bfa', '#4dd8f0', '#b69bff', '#ff9b7a', '#5fd3d0', '#f0c869', '#ff8fb0', '#8be0c4'];

        let deptGridExpanded = false;

        function renderDepartmentsGrid() {
            const grid = document.getElementById('deptGrid');

            if (grid) {
                const allNames = Array.from(new Set([...departmentsList, ...employeesData.map(e => e.dept)]));
                const visibleNames = deptGridExpanded ? allNames : allNames.slice(0, 3);
                const hiddenCount = allNames.length - visibleNames.length;

                const cardsHtml = visibleNames.map(name => {
                    const i = allNames.indexOf(name);
                    const members = employeesData.filter(e => e.dept === name);
                    const total = members.length;
                    const present = members.filter(e => e.status === 'Present' || e.status === 'Late').length;
                    const away = total - present;
                    const pct = total ? Math.round((present / total) * 100) : 0;
                    const color = deptColors[i % deptColors.length];

                    return `
                        <div class="dept-card">
                            <div class="dept-card-top">
                                <span class="dept-icon" style="background:${color}"></span>
                                <div class="dept-card-actions">
                                    <button title="Rename" onclick="renameDepartment('${name.replace(/'/g, "\\'")}')">✎</button>
                                    <button title="Delete" onclick="deleteDepartment('${name.replace(/'/g, "\\'")}')">🗑</button>
                                </div>
                            </div>
                            <div class="dept-card-name">${name}</div>
                            <div class="bar"><span style="width:${pct}%;background:${color}"></span></div>
                            <div class="dept-card-meta"><span>${present} present</span><span>${away} away</span><span style="font-weight:800;color:${color};">${pct}%</span></div>
                        </div>`;
                }).join('');

                const viewMoreHtml = hiddenCount > 0
                    ? `<button class="dept-card view-more-dept" onclick="toggleDeptGridExpanded()"><span>＋${hiddenCount}</span>View more</button>`
                    : (allNames.length > 3
                        ? `<button class="dept-card view-more-dept" onclick="toggleDeptGridExpanded()"><span>−</span>Show less</button>`
                        : '');

                grid.innerHTML = cardsHtml + viewMoreHtml + `
                        <button class="dept-card add-dept" onclick="addDepartment()">
                            <span>＋</span>Add department
                        </button>`;
            }

            populateDeptDatalist();
            renderOrgRadial();
        }

        function renderOrgRadial() {
            const wrap = document.getElementById('orgRadial');
            if (!wrap) return;

            const allNames = Array.from(new Set([...departmentsList, ...employeesData.map(e => e.dept)]));
            const n = allNames.length;
            if (!n) { wrap.innerHTML = '<div class="cmdk-empty">No departments yet.</div>'; return; }

            const cx = 50, cy = 50;
            const maxR = n > 20 ? 30 : n > 12 ? 32 : 34;
            const labelRatio = n > 20 ? 1.1 : n > 12 ? 1.14 : 1.18;
            const fontSize = n > 20 ? 8.5 : n > 12 ? 9.5 : 10.5;
            const angleFor = i => (i / n) * 2 * Math.PI - Math.PI / 2;
            const pt = (i, ratio) => {
                const a = angleFor(i);
                return { x: cx + maxR * ratio * Math.cos(a), y: cy + maxR * ratio * Math.sin(a) };
            };

            const maxHeadcount = Math.max(1, ...allNames.map(name => employeesData.filter(e => e.dept === name).length));
            const seriesHeadcount = allNames.map(name => employeesData.filter(e => e.dept === name).length / maxHeadcount);
            const seriesAttendance = allNames.map(name => {
                const members = employeesData.filter(e => e.dept === name);
                if (!members.length) return 0;
                const presentCount = members.filter(e => e.status === 'Present' || e.status === 'Late').length;
                return presentCount / members.length;
            });

            let gridSvg = '';
            [0.25, 0.5, 0.75, 1].forEach(ratio => {
                const pts = allNames.map((_, i) => { const p = pt(i, ratio); return `${p.x},${p.y}`; }).join(' ');
                gridSvg += `<polygon points="${pts}" fill="none" stroke="rgba(255,255,255,.14)" stroke-width="0.3" stroke-dasharray="1,1.4" />`;
            });

            let axisSvg = '';
            allNames.forEach((_, i) => {
                const p = pt(i, 1);
                axisSvg += `<line x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}" stroke="rgba(255,255,255,.1)" stroke-width="0.3" />`;
            });

            const seriesPolygon = (series, color) => {
                const pts = series.map((v, i) => { const p = pt(i, Math.max(0.04, v)); return `${p.x},${p.y}`; }).join(' ');
                return `<polygon points="${pts}" fill="${color}" fill-opacity="0.16" stroke="${color}" stroke-width="0.8" />`;
            };
            const seriesDots = (series, color) => series.map((v, i) => {
                const p = pt(i, Math.max(0.04, v));
                return `<circle cx="${p.x}" cy="${p.y}" r="0.9" fill="${color}" />`;
            }).join('');

            const labelsHtml = allNames.map((name, i) => {
                const p = pt(i, labelRatio);
                const members = employeesData.filter(e => e.dept === name).length;
                return `<div class="radar-label" id="radarLabel-${name.replace(/[^a-zA-Z0-9]/g, '')}" style="left:${p.x}%;top:${p.y}%;font-size:${fontSize}px;" onclick="navigateToPage('Departments');">${name}<small>${members}</small></div>`;
            }).join('');

            wrap.innerHTML = `
                <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                    ${gridSvg}${axisSvg}
                    ${seriesPolygon(seriesHeadcount, '#4dd8f0')}
                    ${seriesPolygon(seriesAttendance, '#c98bfa')}
                    ${seriesDots(seriesHeadcount, '#4dd8f0')}
                    ${seriesDots(seriesAttendance, '#c98bfa')}
                    <circle cx="${cx}" cy="${cy}" r="0.8" fill="rgba(255,255,255,.5)" />
                </svg>
                ${labelsHtml}
            `;
        }

        function searchOrgRadial() {
            const q = document.getElementById('orgSearchInput').value.trim().toLowerCase();
            document.querySelectorAll('.radar-label').forEach(n => n.classList.remove('org-node-highlight'));
            if (!q) return;

            const allNames = Array.from(new Set([...departmentsList, ...employeesData.map(e => e.dept)]));
            let matchDept = allNames.find(d => d.toLowerCase().includes(q));
            if (!matchDept) {
                const emp = employeesData.find(e => e.name.toLowerCase().includes(q));
                if (emp) matchDept = emp.dept;
            }
            if (matchDept) {
                const node = document.getElementById('radarLabel-' + matchDept.replace(/[^a-zA-Z0-9]/g, ''));
                if (node) node.classList.add('org-node-highlight');
            }
        }

        function toggleDeptGridExpanded() {
            deptGridExpanded = !deptGridExpanded;
            renderDepartmentsGrid();
        }

        function addDepartment() {
            const name = prompt('New department name:');
            if (!name || !name.trim()) return;
            const clean = name.trim();
            const allNames = Array.from(new Set([...departmentsList, ...employeesData.map(e => e.dept)]));
            if (allNames.some(n => n.toLowerCase() === clean.toLowerCase())) {
                notify('Department exists', `"${clean}" is already on the list.`);
                return;
            }
            departmentsList.push(clean);
            renderDepartmentsGrid();
            notify('Department added', `"${clean}" now appears in By department.`);
        }

        function renameDepartment(oldName) {
            const name = prompt('Rename department to:', oldName);
            if (!name || !name.trim() || name.trim() === oldName) return;
            const clean = name.trim();
            departmentsList = departmentsList.map(n => n === oldName ? clean : n);
            if (!departmentsList.includes(clean)) departmentsList.push(clean);
            employeesData.forEach(e => { if (e.dept === oldName) e.dept = clean; });
            renderEmployees();
            renderDepartmentsGrid();
            notify('Department renamed', `"${oldName}" is now "${clean}".`);
        }

        function deleteDepartment(name) {
            const memberCount = employeesData.filter(e => e.dept === name).length;
            if (memberCount > 0) {
                if (!confirm(`${memberCount} employee(s) are in "${name}". Delete anyway? They will keep this department label until reassigned.`)) return;
            } else {
                if (!confirm(`Delete department "${name}"?`)) return;
            }
            departmentsList = departmentsList.filter(n => n !== name);
            renderDepartmentsGrid();
            notify('Department deleted', `"${name}" was removed.`);
        }

        function hashProgress(seed) {
            let h = 0;
            for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 97;
            return 40 + (h % 56); // a stable pseudo-progress between 40% and 95%
        }

        let projectsList = [];
        let projectsMeta = { "CRM v2": { startDate: "2026-06-01", endDate: "2026-09-12", notes: "" } }; // { [projectName]: { startDate, endDate, notes } }
        let editingProjectName = null;

        function getAllProjectNames() {
            const fromEmployees = employeesData.flatMap(e => (e.project || '').split(',').map(p => p.trim()).filter(Boolean));
            return Array.from(new Set([...projectsList, ...fromEmployees]));
        }

        function populateProjectDatalist() {
            const list = document.getElementById('projSuggestions');
            if (!list) return;
            list.innerHTML = getAllProjectNames().map(n => `<option value="${n}">`).join('');
        }

        function populateProjectEmployeeSelect(selectedIds = []) {
            projAssignedIds = [...selectedIds];
            renderProjectAssignUI();
        }

        let projAssignedIds = [];

        function renderProjectAssignUI() {
            const poolList = document.getElementById('dndPoolList');
            const assignedList = document.getElementById('dndAssignedList');
            const chipsEl = document.getElementById('dndDeptChips');
            if (!poolList || !assignedList) return;

            const q = (document.getElementById('projAssignSearch').value || '').trim().toLowerCase();
            const deptNames = Array.from(new Set(employeesData.map(e => e.dept)));

            const cardHtml = (e) => `
                <div class="dnd-card" draggable="true" ondragstart="dragEmployee(event,'${e.id}')">
                    <span class="dnd-avatar" style="background:${e.color};color:#132226;">${e.initials}</span>
                    <div><strong>${e.name}</strong><small>${e.dept}</small></div>
                </div>`;

            const assigned = employeesData.filter(e => projAssignedIds.includes(e.id));
            const pool = employeesData.filter(e => !projAssignedIds.includes(e.id) &&
                (!q || e.name.toLowerCase().includes(q) || e.dept.toLowerCase().includes(q)));

            if (chipsEl) {
                chipsEl.innerHTML = deptNames.map(d => `
                    <span class="dnd-dept-chip" draggable="true" ondragstart="dragDept(event,'${d.replace(/'/g, "\\'")}')" title="Drag to assign the whole ${d} department">▦ ${d}</span>
                `).join('');
            }

            poolList.innerHTML = pool.map(cardHtml).join('') || '<div class="dnd-empty">No matches</div>';
            assignedList.innerHTML = assigned.map(cardHtml).join('') || '<div class="dnd-empty">Drop employees or a department here</div>';

            document.getElementById('dndPoolCount').textContent = pool.length;
            document.getElementById('dndAssignedCount').textContent = assigned.length;
        }

        function dragEmployee(event, id) {
            event.dataTransfer.setData('type', 'employee');
            event.dataTransfer.setData('id', id);
        }
        function dragDept(event, dept) {
            event.dataTransfer.setData('type', 'dept');
            event.dataTransfer.setData('id', dept);
        }
        function allowDrop(event) { event.preventDefault(); }

        function dropToAssigned(event) {
            event.preventDefault();
            const type = event.dataTransfer.getData('type');
            const id = event.dataTransfer.getData('id');
            if (type === 'employee') {
                if (!projAssignedIds.includes(id)) projAssignedIds.push(id);
            } else if (type === 'dept') {
                employeesData.filter(e => e.dept === id).forEach(e => {
                    if (!projAssignedIds.includes(e.id)) projAssignedIds.push(e.id);
                });
            }
            renderProjectAssignUI();
        }

        function dropToPool(event) {
            event.preventDefault();
            const type = event.dataTransfer.getData('type');
            const id = event.dataTransfer.getData('id');
            if (type === 'employee') {
                projAssignedIds = projAssignedIds.filter(i => i !== id);
            } else if (type === 'dept') {
                const deptIds = employeesData.filter(e => e.dept === id).map(e => e.id);
                projAssignedIds = projAssignedIds.filter(i => !deptIds.includes(i));
            }
            renderProjectAssignUI();
        }

        function toggleAddProjectSection() {
            const section = document.getElementById('addProjectSection');
            const tile = document.getElementById('addProjectTile');
            if (!section) return;
            const opening = section.style.display === 'none';
            cancelEditProject();
            section.style.display = opening ? 'block' : 'none';
            if (tile) tile.style.display = opening ? 'none' : 'flex';
            if (opening) {
                populateProjectEmployeeSelect();
                setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
            }
        }

        function cancelEditProject() {
            editingProjectName = null;
            document.getElementById('addProjectSectionTitle').textContent = 'Add New Project';
            document.getElementById('addProjectSectionDesc').textContent = "Set the timeline, any special requirements, and who's on it.";
            document.getElementById('projSubmitBtn').textContent = 'Save Project';
            const banner = document.getElementById('editProjectModeBanner');
            if (banner) banner.style.display = 'none';
            document.getElementById('projName').value = '';
            document.getElementById('projName').disabled = false;
            document.getElementById('projStartDate').value = '';
            document.getElementById('projEndDate').value = '';
            document.getElementById('projNotes').value = '';
            document.getElementById('projAssignSearch').value = '';
            projAssignedIds = [];
            const section = document.getElementById('addProjectSection');
            const tile = document.getElementById('addProjectTile');
            if (section) section.style.display = 'none';
            if (tile) tile.style.display = 'flex';
        }

        function openEditProject(name) {
            editingProjectName = name;
            const meta = projectsMeta[name] || {};
            const assignedIds = employeesData.filter(e => (e.project || '').split(',').map(p => p.trim()).includes(name)).map(e => e.id);

            document.getElementById('projName').value = name;
            document.getElementById('projName').disabled = true;
            document.getElementById('projStartDate').value = meta.startDate || '';
            document.getElementById('projEndDate').value = meta.endDate || '';
            document.getElementById('projNotes').value = meta.notes || '';
            populateProjectEmployeeSelect(assignedIds);

            document.getElementById('addProjectSectionTitle').textContent = 'Edit Project';
            document.getElementById('addProjectSectionDesc').textContent = `You're updating ${name}.`;
            document.getElementById('projSubmitBtn').textContent = 'Save Changes';

            const banner = document.getElementById('editProjectModeBanner');
            banner.style.display = 'flex';
            banner.innerHTML = `<span>✎ &nbsp;Editing <b>${name}</b></span><button onclick="cancelEditProject()">Cancel</button>`;

            const section = document.getElementById('addProjectSection');
            const tile = document.getElementById('addProjectTile');
            if (section) section.style.display = 'block';
            if (tile) tile.style.display = 'none';
            setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
        }

        function submitProject() {
            const name = document.getElementById('projName').value.trim();
            const startDate = document.getElementById('projStartDate').value;
            const endDate = document.getElementById('projEndDate').value;
            const notes = document.getElementById('projNotes').value.trim();
            const selectedIds = [...projAssignedIds];

            if (!name) {
                notify('Please name the project', 'Project name cannot be empty');
                return;
            }

            const targetName = editingProjectName || name;
            if (!editingProjectName) {
                const existing = getAllProjectNames().map(n => n.toLowerCase());
                if (existing.includes(name.toLowerCase())) {
                    notify('Project exists', `"${name}" is already on the list — edit it instead.`);
                    return;
                }
                projectsList.push(name);
            }

            projectsMeta[targetName] = { startDate, endDate, notes };

            // Sync employee assignments to match the selection
            employeesData.forEach(emp => {
                const projNames = (emp.project || '').split(',').map(p => p.trim()).filter(Boolean);
                const isAssigned = projNames.includes(targetName);
                const shouldBeAssigned = selectedIds.includes(emp.id);
                if (shouldBeAssigned && !isAssigned) {
                    emp.project = [...projNames, targetName].filter(Boolean).join(', ');
                } else if (!shouldBeAssigned && isAssigned) {
                    emp.project = projNames.filter(p => p !== targetName).join(', ');
                }
            });

            renderEmployees();
            renderProjects();
            populateAttHistoryControls();

            notify(editingProjectName ? 'Project updated' : 'Project added', `${targetName} — ${selectedIds.length} member${selectedIds.length !== 1 ? 's' : ''} assigned`);
            cancelEditProject();
        }

        function renderProjects() {
            const grid = document.getElementById('projectsGrid');
            if (!grid) return;

            const projects = {};
            getAllProjectNames().forEach(name => {
                projects[name] = { name, members: [], depts: new Set() };
            });
            employeesData.forEach(emp => {
                const projNames = (emp.project || '').split(',').map(p => p.trim()).filter(Boolean);
                if (!projNames.length) projNames.push('Unassigned');
                projNames.forEach(key => {
                    if (!projects[key]) projects[key] = { name: key, members: [], depts: new Set() };
                    projects[key].members.push(emp);
                    projects[key].depts.add(emp.dept);
                });
            });

            const palette = ["#c98bfa", "#4dd8f0", "#ff8fd1", "#ff9b7c"];

            grid.innerHTML = Object.values(projects).map((proj, i) => {
                const progress = proj.members.length ? hashProgress(proj.name) : 0;
                const color = palette[i % palette.length];
                const shown = proj.members.slice(0, 4);
                const extra = proj.members.length - shown.length;
                const meta = projectsMeta[proj.name] || {};

                const avatars = shown.map(m =>
                    m.photo
                        ? `<span style="background:transparent;padding:0;overflow:hidden;"><img src="${m.photo}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;" /></span>`
                        : `<span style="background:${m.color};color:#132226;">${m.initials}</span>`
                ).join('');
                const extraAvatar = extra > 0 ? `<span>+${extra}</span>` : '';
                const deptLabel = proj.depts.size ? [...proj.depts].join(' · ') : 'Not yet assigned';
                const dateLabel = (meta.startDate || meta.endDate)
                    ? `${meta.startDate ? formatShortDate(meta.startDate) : '—'} → ${meta.endDate ? formatShortDate(meta.endDate) : 'ongoing'}`
                    : '';

                return `
                            <div class="project-card">
                                <div class="project-top">
                                    <div>
                                        <strong>${proj.name}</strong>
                                        <span>${deptLabel}</span>
                                        ${dateLabel ? `<span style="display:block;margin-top:3px;font-size:11px;opacity:.65;">📅 ${dateLabel}</span>` : ''}
                                    </div>
                                    <span class="project-pill" style="color:${color};background:${color}22;">${proj.members.length} member${proj.members.length !== 1 ? 's' : ''}</span>
                                </div>
                                <div class="project-progress">
                                    <div class="project-progress-head"><span>Progress</span><span>${progress}%</span></div>
                                    <div class="bar"><span style="width:${progress}%;background:${color}"></span></div>
                                </div>
                                ${meta.notes ? `<div style="margin-top:10px;padding:9px 11px;border-radius:8px;background:rgba(255,203,107,.1);border:1px solid rgba(255,203,107,.25);font-size:11.5px;line-height:1.5;">📌 <b>Special requirements:</b> ${meta.notes}</div>` : ''}
                                <div class="project-team">
                                    <div class="leave-avatars" style="position:static;display:flex;">${avatars}${extraAvatar}</div>
                                    <button class="text-btn" onclick="openEditProject('${proj.name.replace(/'/g, "\\'")}')">Edit ✎</button>
                                </div>
                            </div>
                        `;
            }).join('');

            populateProjectDatalist();
        }

        function formatShortDate(iso) {
            if (!iso) return '';
            const d = new Date(iso + 'T00:00:00');
            if (isNaN(d)) return iso;
            return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        }

        function toggleMenu() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('open');
        }

        function setActiveNav(el, label) {
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            el.classList.add('active');
            document.getElementById('currentPage').textContent = label;
        }
        function showPage(el, pageName) {
            setActiveNav(el, pageName);
            document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
            const target = document.getElementById('page-' + pageName);
            if (target) target.style.display = 'block';
            if (pageName === 'Projects') renderProjects();
            if (pageName === 'Location') renderLocations();
            if (pageName === 'Analytics') renderAnalytics();
            if (pageName === 'OrgChart') renderOrgChart();
            hideBackToDashboard();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (window.innerWidth <= 720) document.getElementById('sidebar').classList.remove('open');
        }
        function goToSection(el, label, sectionId) {
            document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
            document.getElementById('page-Dashboard').style.display = 'block';
            hideBackToDashboard();
            setActiveNav(el, label);
            if (window.innerWidth <= 720) document.getElementById('sidebar').classList.remove('open');
            setTimeout(() => {
                const target = document.getElementById(sectionId);
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }
        function comingSoon(el, label) {
            setActiveNav(el, label);
            notify(label + ' — coming soon', 'This module is still under development.');
        }

        function copyToClipboard(text, label) {
            const done = () => notify(`${label} copied`, text);
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
            } else {
                fallbackCopy(text, done);
            }
        }

        function fallbackCopy(text, done) {
            const ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            try { document.execCommand('copy'); done(); } catch (e) { /* no-op */ }
            document.body.removeChild(ta);
        }

        // ===== Your profile photo (top-right avatar) =====
        function setMyAvatar(event) {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = e => {
                const dataUrl = e.target.result;
                applyMyAvatar(dataUrl);
                try { localStorage.setItem('myAvatar', dataUrl); } catch (e2) { /* storage full — still applied for this session */ }
            };
            reader.readAsDataURL(file);
        }

        function applyMyAvatar(dataUrl) {
            const el = document.getElementById('myAvatar');
            if (!el) return;
            el.style.backgroundImage = `url('${dataUrl}')`;
            el.textContent = '';
        }

        (function restoreMyAvatar() {
            let saved = null;
            try { saved = localStorage.getItem('myAvatar'); } catch (e) { /* no-op */ }
            if (saved) document.addEventListener('DOMContentLoaded', () => applyMyAvatar(saved));
        })();

        function notify(title, subtitle = '') {
            const existingToast = document.querySelector('.toast');
            if (existingToast) existingToast.remove();

            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.innerHTML = `<strong>${title}</strong>${subtitle ? '<small>' + subtitle + '</small>' : ''}`;
            document.body.appendChild(toast);

            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(10px)';
                toast.style.transition = 'all 0.25s ease-out';
                setTimeout(() => toast.remove(), 250);
            }, 3000);
        }

        // ===== Global search (Ctrl/Cmd + K) =====
        function navigateToPage(pageName) {
            const navBtn = document.querySelector(`.nav-item[onclick*="'${pageName}'"]`);
            if (navBtn) { showPage(navBtn, pageName); return; }
            document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
            const target = document.getElementById('page-' + pageName);
            if (target) target.style.display = 'block';
            const pageTitleEl = document.getElementById('currentPage');
            if (pageTitleEl) pageTitleEl.textContent = pageName;
            if (pageName === 'Projects') renderProjects();
            if (pageName === 'Location') renderLocations();
            hideBackToDashboard();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function highlightRowById(domId) {
            setTimeout(() => {
                const el = document.getElementById(domId);
                if (!el) return;
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                el.classList.remove('row-highlight');
                void el.offsetWidth;
                el.classList.add('row-highlight');
            }, 80);
        }

        function openGlobalSearch() {
            document.getElementById('cmdkOverlay').classList.add('open');
            const input = document.getElementById('cmdkInput');
            input.value = '';
            input.focus();
            runGlobalSearch();
        }

        function closeGlobalSearch() {
            document.getElementById('cmdkOverlay').classList.remove('open');
        }

        function onCmdkKeydown(event) {
            if (event.key === 'Escape') closeGlobalSearch();
            if (event.key === 'Enter') {
                const first = document.querySelector('#cmdkResults .cmdk-item');
                if (first) first.click();
            }
        }

        function runGlobalSearch() {
            const q = document.getElementById('cmdkInput').value.trim().toLowerCase();
            const resultsEl = document.getElementById('cmdkResults');
            if (!q) {
                resultsEl.innerHTML = '<div class="cmdk-empty">Start typing to search across the whole workspace…</div>';
                return;
            }

            const empMatches = employeesData.filter(e =>
                e.name.toLowerCase().includes(q) ||
                e.email.toLowerCase().includes(q) ||
                e.dept.toLowerCase().includes(q) ||
                (e.title && e.title.toLowerCase().includes(q))
            ).slice(0, 6);

            const deptMatches = Array.from(new Set(employeesData.map(e => e.dept)))
                .filter(d => d.toLowerCase().includes(q)).slice(0, 4);

            const projMatches = getAllProjectNames().filter(p => p.toLowerCase().includes(q)).slice(0, 4);
            const locMatches = getAllLocationNames().filter(l => l.toLowerCase().includes(q)).slice(0, 4);

            const groups = [
                { label: 'Employees', icon: '🧑', items: empMatches.map(e => ({ title: e.name, sub: `${e.title || e.dept} • ${e.dept}`, action: `navigateToPage('Employees'); highlightRowById('emp-row-${e.id}'); closeGlobalSearch();` })) },
                { label: 'Departments', icon: '▦', items: deptMatches.map(d => ({ title: d, sub: 'Department', action: `navigateToPage('Departments'); closeGlobalSearch();` })) },
                { label: 'Projects', icon: '◫', items: projMatches.map(p => ({ title: p, sub: 'Active project', action: `navigateToPage('Projects'); closeGlobalSearch();` })) },
                { label: 'Locations', icon: '⌖', items: locMatches.map(l => ({ title: l, sub: 'Location', action: `navigateToPage('Location'); closeGlobalSearch();` })) }
            ].filter(g => g.items.length);

            if (!groups.length) {
                resultsEl.innerHTML = `<div class="cmdk-empty">No results for "${q}"</div>`;
                return;
            }

            resultsEl.innerHTML = groups.map(g => `
                <div class="cmdk-group-label">${g.label}</div>
                ${g.items.map(it => `
                    <div class="cmdk-item" onclick="${it.action}">
                        <span class="cmdk-icon">${g.icon}</span>
                        <div><strong>${it.title}</strong><small>${it.sub}</small></div>
                    </div>
                `).join('')}
            `).join('');
        }

        document.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                openGlobalSearch();
            }
        });

        // ===== Konami code easter egg (developer mode) =====
        const KONAMI_CODE = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];
        let konamiProgress = [];
        document.addEventListener('keydown', (e) => {
            konamiProgress.push(e.key.toLowerCase());
            konamiProgress = konamiProgress.slice(-KONAMI_CODE.length);
            if (konamiProgress.join(',') === KONAMI_CODE.join(',')) {
                konamiProgress = [];
                triggerDeveloperMode();
            }
        });

        function triggerDeveloperMode() {
            const colors = ['#c98bfa', '#4dd8f0', '#ff8fd1', '#69d39c', '#ffcf6b'];
            for (let i = 0; i < 60; i++) {
                const piece = document.createElement('div');
                piece.style.cssText = `position:fixed;top:-12px;left:${Math.random() * 100}vw;width:8px;height:8px;background:${colors[Math.floor(Math.random() * colors.length)]};z-index:9999;border-radius:2px;pointer-events:none;animation:confettiFall ${2 + Math.random() * 2}s linear forwards;`;
                document.body.appendChild(piece);
                setTimeout(() => piece.remove(), 4200);
            }
            notify('🎮 Developer Mode Unlocked!', `You found the easter egg — ${employeesData.length} employees, ${getAllProjectNames().length} active projects tracked here.`);
        }

        // ===== Notifications center =====
        function toggleNotificationsPanel() {
            const panel = document.getElementById('notifPanel');
            const isOpen = panel.classList.contains('open');
            if (isOpen) { panel.classList.remove('open'); return; }
            renderNotificationsPanel();
            panel.classList.add('open');
        }

        document.addEventListener('click', (e) => {
            const wrap = document.querySelector('.notif-wrap');
            const panel = document.getElementById('notifPanel');
            if (wrap && panel && panel.classList.contains('open') && !wrap.contains(e.target)) {
                panel.classList.remove('open');
            }
        });

        function renderNotificationsPanel() {
            const list = document.getElementById('notifList');
            const dot = document.getElementById('notifDot');
            if (!list) return;

            const notifs = [];
            const pendingLeaves = (typeof leaveRequestsData !== 'undefined') ? leaveRequestsData.filter(r => r.status === 'pending') : [];
            pendingLeaves.forEach(r => {
                const emp = employeesData.find(e => e.id === r.empId);
                notifs.push({
                    color: '#ff9b78',
                    title: `${emp ? emp.name : r.empId} requested ${r.type}`,
                    sub: `${r.from} → ${r.to} • Awaiting your approval`
                });
            });

            const absentToday = employeesData.filter(e => e.status === 'Absent');
            if (absentToday.length) {
                notifs.push({
                    color: '#ff6b6b',
                    title: `${absentToday.length} employee${absentToday.length > 1 ? 's are' : ' is'} absent today`,
                    sub: absentToday.map(e => e.name).join(', ')
                });
            }

            const contractsEndingSoon = employeesData.filter(e => {
                if (!e.endDate) return false;
                const end = new Date(e.endDate + 'T00:00:00');
                const daysLeft = Math.round((end - ATT_TODAY) / 86400000);
                return daysLeft >= 0 && daysLeft <= 14;
            });
            contractsEndingSoon.forEach(emp => {
                const end = new Date(emp.endDate + 'T00:00:00');
                const daysLeft = Math.round((end - ATT_TODAY) / 86400000);
                notifs.push({
                    color: '#ffcf6b',
                    title: `${emp.name}'s contract ends in ${daysLeft} day${daysLeft !== 1 ? 's' : ''}`,
                    sub: `Decide whether to renew the contract or offboard — ends ${formatShortDate(emp.endDate)}`
                });
            });

            // Projects nearing their deadline (within 7 days)
            if (typeof projectsMeta !== 'undefined') {
                Object.entries(projectsMeta).forEach(([projName, meta]) => {
                    if (!meta.endDate) return;
                    const end = new Date(meta.endDate + 'T00:00:00');
                    const daysLeft = Math.round((end - ATT_TODAY) / 86400000);
                    if (daysLeft >= 0 && daysLeft <= 7) {
                        const team = employeesData.filter(e => (e.project || '').split(',').map(p => p.trim()).includes(projName));
                        notifs.push({
                            color: '#4dd8f0',
                            title: `"${projName}" is due in ${daysLeft} day${daysLeft !== 1 ? 's' : ''}`,
                            sub: team.length ? `Remind the team: ${team.map(e => e.name).join(', ')}` : 'No one is currently assigned to this project'
                        });
                    }
                });
            }

            // Yearly document renewal reminder (CV / Certificate of Good Conduct / Passport) — fires in the last 30 days of the year
            const daysUntilYearEnd = Math.round((new Date(ATT_TODAY.getFullYear(), 11, 31) - ATT_TODAY) / 86400000);
            if (daysUntilYearEnd >= 0 && daysUntilYearEnd <= 30) {
                const withDocs = employeesData.filter(e => e.cvFileName || e.criminalCertFileName || e.passportFileName);
                if (withDocs.length) {
                    notifs.push({
                        color: '#ff8fd1',
                        title: `Annual document renewal — ${daysUntilYearEnd} day${daysUntilYearEnd !== 1 ? 's' : ''} left in the year`,
                        sub: `${withDocs.length} employee${withDocs.length !== 1 ? 's' : ''} may need their CV, Certificate of Good Conduct, or Passport renewed before year end`
                    });
                }
            }

            if (dot) dot.style.display = notifs.length ? 'block' : 'none';

            list.innerHTML = notifs.length
                ? notifs.map(n => `<div class="notif-item"><span class="notif-dot" style="background:${n.color}"></span><div><strong>${n.title}</strong><small>${n.sub}</small></div></div>`).join('')
                : '<div class="notif-empty">You are all caught up — no new notifications.</div>';
        }

        // ===== CSV export =====
        function downloadCSV(filename, rows) {
            const csv = rows.map(row => row.map(cell => {
                const val = (cell === null || cell === undefined) ? '' : String(cell);
                return /[",\n]/.test(val) ? '"' + val.replace(/"/g, '""') + '"' : val;
            }).join(',')).join('\r\n');

            const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        }

        function exportEmployeesCSV() {
            const header = ['ID', 'Name', 'Date of Birth', 'Email', 'Phone', 'Department', 'Title', 'Project(s)', 'Location(s)', 'Work Mode', 'Status', 'Start Date', 'End Date'];
            const rows = employeesData.map(e => [e.id, e.name, e.dob || '', e.email, e.phone, e.dept, e.title || '', e.project || '', e.location || '', e.workMode, e.status, e.startDate || '', e.endDate || '']);
            downloadCSV('peoplepulse-employees.csv', [header, ...rows]);
            notify('Employees exported', `${employeesData.length} records downloaded as CSV.`);
        }

        function exportAttendanceCSV() {
            const header = ['ID', 'Name', 'Department', 'Status', 'Late by (min)', 'Work Mode'];
            const rows = employeesData.map(e => [e.id, e.name, e.dept, e.status, e.lateBy || 0, e.workMode]);
            const dateLabel = ATT_TODAY.toISOString().slice(0, 10);
            downloadCSV(`peoplepulse-attendance-${dateLabel}.csv`, [header, ...rows]);
            notify('Attendance report exported', 'Your CSV download is ready.');
        }



        // ===== Reports & Analytics =====
        function renderAnalytics() {
            const total = employeesData.length || 1;
            const counts = { Present: 0, Late: 0, Absent: 0, Leave: 0 };
            employeesData.forEach(e => { counts[e.status] = (counts[e.status] || 0) + 1; });
            const attendancePct = Math.round(((counts.Present + counts.Late) / total) * 100);
            const pendingLeaves = (typeof leaveRequestsData !== 'undefined') ? leaveRequestsData.filter(r => r.status === 'pending').length : 0;
            const activeProjectsCount = getAllProjectNames().length;

            const kpis = document.getElementById('analyticsKpis');
            if (kpis) {
                kpis.innerHTML = `
                    <div class="kpi-card"><span>Total employees</span><strong>${total}</strong><small>${Object.keys(groupBy(employeesData, 'dept')).length} departments</small></div>
                    <div class="kpi-card"><span>Attendance today</span><strong>${attendancePct}%</strong><small>${counts.Present} present · ${counts.Late} late</small></div>
                    <div class="kpi-card"><span>Pending leave requests</span><strong>${pendingLeaves}</strong><small>Needs your review</small></div>
                    <div class="kpi-card"><span>Active projects</span><strong>${activeProjectsCount}</strong><small>${getAllLocationNames().length} locations in use</small></div>
                `;
            }

            const donut = document.getElementById('analyticsDonut');
            const donutPct = document.getElementById('analyticsDonutPct');
            if (donut && donutPct) {
                donutPct.textContent = attendancePct + '%';
                const pPresent = Math.round((counts.Present / total) * 100);
                const pLate = Math.round((counts.Late / total) * 100);
                const pAbsent = Math.round((counts.Absent / total) * 100);
                const pLeave = Math.max(0, 100 - pPresent - pLate - pAbsent);
                donut.style.background = `conic-gradient(#c98bfa 0 ${pPresent}%, #ffcf6b ${pPresent}% ${pPresent + pLate}%, #ff6b6b ${pPresent + pLate}% ${pPresent + pLate + pAbsent}%, #4dd8f0 ${pPresent + pLate + pAbsent}% 100%)`;
            }
            const legend = document.getElementById('analyticsLegend');
            if (legend) {
                const rows = [
                    ['Present', counts.Present, '#c98bfa'],
                    ['Late', counts.Late, '#ffcf6b'],
                    ['Absent', counts.Absent, '#ff6b6b'],
                    ['Leave', counts.Leave, '#4dd8f0']
                ];
                legend.innerHTML = rows.map(([label, count, color]) => `
                    <div><span class="dot" style="background:${color}"></span><div><strong>${label}</strong><small>${count} (${Math.round((count / total) * 100)}%)</small></div></div>
                `).join('');
            }

            renderBarList('analyticsDeptList', groupBy(employeesData, 'dept'), total);
            renderBarList('analyticsWorkModeList', groupBy(employeesData, 'workMode'), total);
            renderAttendanceReport();

            const projGroups = {};
            getAllProjectNames().forEach(p => { projGroups[p] = 0; });
            employeesData.forEach(e => (e.project || '').split(',').map(p => p.trim()).filter(Boolean).forEach(p => { projGroups[p] = (projGroups[p] || 0) + 1; }));
            renderBarList('analyticsProjectList', projGroups, Math.max(1, ...Object.values(projGroups)), true);
        }

        function groupBy(list, key) {
            const groups = {};
            list.forEach(item => { const k = item[key] || 'Unassigned'; groups[k] = (groups[k] || 0) + 1; });
            return groups;
        }

        function renderBarList(containerId, groups, total, byMax = false) {
            const el = document.getElementById(containerId);
            if (!el) return;
            const palette = ["#c98bfa", "#4dd8f0", "#ff8fd1", "#ff9b7a", "#ffcf6b"];
            const max = byMax ? total : total;
            el.innerHTML = Object.entries(groups).map(([label, count], i) => {
                const pct = Math.round((count / (max || 1)) * 100);
                const color = palette[i % palette.length];
                return `<div class="dept-row">
                    <div class="dept-top"><span class="dept-name"><i style="background:${color}"></i>${label}</span><strong>${count}</strong></div>
                    <div class="bar"><span style="width:${pct}%;background:${color}"></span></div>
                </div>`;
            }).join('') || '<div class="cmdk-empty">No data yet.</div>';
        }

        // ===== Org chart (grouped by department) =====
        function renderOrgChart() {
            const el = document.getElementById('orgChart');
            if (!el) return;
            const palette = ["#c98bfa", "#4dd8f0", "#ff8fd1", "#ff9b7a"];
            const groups = groupByList(employeesData, 'dept');

            el.innerHTML = Object.entries(groups).map(([dept, emps], i) => {
                const color = palette[i % palette.length];
                return `
                    <div class="org-dept-block">
                        <div class="org-dept-head"><i style="background:${color}"></i>${dept}<span>${emps.length} member${emps.length !== 1 ? 's' : ''}</span></div>
                        <div class="org-dept-employees">
                            ${emps.map(m => `
                                <div class="org-emp-card">
                                    <div class="org-avatar" style="background:${m.color};color:#132226;">${m.photo ? `<img src="${m.photo}"/>` : m.initials}</div>
                                    <div><strong>${m.name}</strong><small>${m.title || '—'}</small></div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }).join('') || '<div class="cmdk-empty">No employees yet.</div>';
        }

        function groupByList(list, key) {
            const groups = {};
            list.forEach(item => {
                const k = item[key] || 'Unassigned';
                if (!groups[k]) groups[k] = [];
                groups[k].push(item);
            });
            return groups;
        }

        let editingEmployeeId = null;

        // --- Quick Actions + Recent Activity feed ---
        let recentActivity = [
            { icon: '#c98bfa', text: 'Justin Mason checked in on time', time: '8 min ago' },
            { icon: '#ff9b78', text: 'Amanda Taylor checked in late (+23m)', time: '35 min ago' },
            { icon: '#4dd8f0', text: 'Weekly attendance report exported', time: '2 hr ago' },
            { icon: '#ff8fd1', text: 'Sophia Martinez added to Product', time: 'Yesterday' }
        ];

        function logActivity(color, text) {
            recentActivity.unshift({ icon: color, text, time: 'Just now' });
            recentActivity = recentActivity.slice(0, 6);
            renderRecentActivity();
        }

        function renderRecentActivity() {
            const el = document.getElementById('recentActivityList');
            if (!el) return;
            el.innerHTML = recentActivity.map(a => `
                <div class="activity-item">
                    <span class="activity-dot" style="background:${a.icon}"></span>
                    <div>${a.text}<small>${a.time}</small></div>
                </div>
            `).join('');
        }

        function showBackToDashboard() {
            const btn = document.getElementById('backToDashboardBtn');
            if (btn) btn.style.display = 'flex';
        }

        function hideBackToDashboard() {
            const btn = document.getElementById('backToDashboardBtn');
            if (btn) btn.style.display = 'none';
        }

        function backToDashboard() {
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            const dashNavBtn = document.querySelector('.nav-item[onclick*="Dashboard"]');
            if (dashNavBtn) setActiveNav(dashNavBtn, 'Dashboard');
            else document.getElementById('currentPage').textContent = 'Dashboard';
            document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
            document.getElementById('page-Dashboard').style.display = 'block';
            hideBackToDashboard();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function goToQuickPage(pageId, label, renderFn) {
            document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
            document.getElementById('currentPage').textContent = label;
            document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
            const target = document.getElementById('page-' + pageId);
            if (target) target.style.display = 'block';
            if (renderFn) renderFn();
            showBackToDashboard();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (window.innerWidth <= 720) document.getElementById('sidebar').classList.remove('open');
        }

        function openLeaveRequestsPage(el) {
            if (el) setActiveNav(el, 'Leave Requests');
            else {
                document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
                document.getElementById('currentPage').textContent = 'Leave Requests';
            }
            document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
            document.getElementById('page-ApproveLeave').style.display = 'block';
            renderLeaveRequestsPage();
            showBackToDashboard();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (window.innerWidth <= 720) document.getElementById('sidebar').classList.remove('open');
        }

        function quickAction(type) {
            switch (type) {
                case 'recordAttendance':
                    goToQuickPage('RecordAttendance', 'Record Attendance', renderRecordAttendancePage);
                    break;

                case 'approveLeave':
                    openLeaveRequestsPage();
                    break;

                case 'exportReport':
                    goToQuickPage('ExportReport', "Export Today's Report", renderExportReportPage);
                    break;

                case 'sendAnnouncement':
                    goToQuickPage('SendAnnouncement', 'Send Announcement', populateAnnouncementAudience);
                    break;

                case 'createReport':
                    goToQuickPage('CreateReport', 'HR Summary Report', renderHrReportPage);
                    logActivity('#6d78e8', 'HR summary report generated');
                    break;
            }
        }

        function renderRecordAttendancePage() {
            const container = document.getElementById('recordAttendanceRows');
            if (!container) return;
            container.innerHTML = employeesData.map(emp => `
                <div class="row" data-emp="${emp.id}">
                    <div class="employee">
                        ${emp.photo ? `<img src="${emp.photo}" class="employee-img" />` : `<div class="employee-avatar" style="background:${emp.color}; color:#132226;">${emp.initials}</div>`}
                        <div><strong>${emp.name}</strong><small>${emp.title || ''}</small></div>
                    </div>
                    <div class="dept">${emp.dept}</div>
                    <div>
                        <select class="ra-status" data-id="${emp.id}" onchange="onRaStatusChange('${emp.id}')">
                            <option value="Present" ${emp.status === 'Present' ? 'selected' : ''}>Present</option>
                            <option value="Late" ${emp.status === 'Late' ? 'selected' : ''}>Late</option>
                            <option value="Absent" ${emp.status === 'Absent' ? 'selected' : ''}>Absent</option>
                            <option value="Leave" ${emp.status === 'Leave' ? 'selected' : ''}>Leave</option>
                        </select>
                    </div>
                    <div>
                        <input type="number" min="0" class="ra-late" data-id="${emp.id}" value="${emp.lateBy || 0}" ${emp.status === 'Late' ? '' : 'disabled'} />
                    </div>
                </div>
            `).join('');
        }

        function onRaStatusChange(id) {
            const select = document.querySelector(`.ra-status[data-id="${id}"]`);
            const lateInput = document.querySelector(`.ra-late[data-id="${id}"]`);
            if (lateInput) lateInput.disabled = select.value !== 'Late';
        }

        function saveAttendanceRecords() {
            document.querySelectorAll('.ra-status').forEach(select => {
                const emp = employeesData.find(e => e.id === select.dataset.id);
                if (!emp) return;
                emp.status = select.value;
                const lateInput = document.querySelector(`.ra-late[data-id="${emp.id}"]`);
                emp.lateBy = emp.status === 'Late' ? (parseInt(lateInput.value, 10) || 0) : 0;
            });
            renderEmployees();
            renderProjects();
            populateAttHistoryControls();
            renderLocations();
            renderNotificationsPanel();
            notify('Attendance saved', "Today's statuses were updated across the dashboard.");
            logActivity('#3fbfa0', "Today's attendance was recorded");
        }

        let leaveRequestsData = [
            { id: 'LR-1', empId: 'PP-0002', type: 'Annual Leave', from: 'Sep 10, 2026', to: 'Sep 12, 2026', reason: 'Family trip', status: 'pending' },
            { id: 'LR-2', empId: 'PP-0004', type: 'Sick Leave', from: 'Sep 9, 2026', to: 'Sep 9, 2026', reason: 'Not feeling well', status: 'pending' },
            { id: 'LR-3', empId: 'PP-0006', type: 'Unpaid Leave', from: 'Sep 15, 2026', to: 'Sep 16, 2026', reason: 'Personal matters', status: 'pending' }
        ];

        function updateLeaveBadge() {
            const pending = leaveRequestsData.filter(r => r.status === 'pending').length;
            document.querySelectorAll('.leave-badge').forEach(b => b.textContent = pending);
            const qa = document.getElementById('qaLeaveCount');
            if (qa) qa.textContent = pending === 0 ? 'All caught up — no pending requests' : `${pending} request${pending === 1 ? '' : 's'} waiting for review`;
            const countEl = document.getElementById('leaveReqCount');
            if (countEl) countEl.textContent = pending;
        }

        function renderLeaveRequestsPage() {
            const container = document.getElementById('leaveRequestsList');
            if (!container) return;
            container.innerHTML = leaveRequestsData.map(r => {
                const emp = employeesData.find(e => e.id === r.empId);
                const name = emp ? emp.name : 'Former employee';
                const dept = emp ? emp.dept : '—';
                const statusColor = r.status === 'pending' ? '#ff9b78' : (r.status === 'approved' ? '#c98bfa' : '#ff6b6b');
                const actions = r.status === 'pending'
                    ? `<button class="icon-action-btn edit" title="Approve" onclick="approveLeaveRequest('${r.id}')">✓</button><button class="icon-action-btn delete" title="Reject" onclick="rejectLeaveRequest('${r.id}')">✕</button>`
                    : `<span class="status" style="color:${statusColor}"><b></b>${r.status.charAt(0).toUpperCase() + r.status.slice(1)}</span>`;
                return `
                    <div class="activity-item" style="align-items:flex-start; justify-content:space-between; gap:14px;">
                        <div style="display:flex; gap:10px;">
                            <span class="activity-dot" style="background:${statusColor}; margin-top:6px;"></span>
                            <div>
                                <strong style="display:block; font-size:12px;">${name} • ${r.type}</strong>
                                <span style="display:block; font-size:10px; color:#8b8fa3; margin-top:2px;">${dept} · ${r.from} → ${r.to}</span>
                                <span style="display:block; font-size:10px; color:#8b8fa3; margin-top:2px;">${r.reason}</span>
                                ${r.status === 'rejected' && r.rejectionReason ? `<span style="display:block; font-size:10px; color:#ff8a8a; margin-top:4px;"><b>Rejection reason:</b> ${r.rejectionReason}</span>` : ''}
                            </div>
                        </div>
                        <div class="row-actions">${actions}</div>
                    </div>`;
            }).join('') || '<p style="padding:10px 0;color:#6c7187;font-size:10px;">No leave requests.</p>';
            updateLeaveBadge();
        }

        function approveLeaveRequest(id) {
            const req = leaveRequestsData.find(r => r.id === id);
            if (!req) return;
            req.status = 'approved';
            const emp = employeesData.find(e => e.id === req.empId);
            if (emp) {
                emp.status = 'Leave';
                renderEmployees();
                renderProjects();
                populateAttHistoryControls();
                renderLocations();
            }
            renderLeaveRequestsPage();
            renderNotificationsPanel();
            notify('Leave request approved', req.reason);
            logActivity('#c98bfa', `Leave request for ${emp ? emp.name : req.empId} approved`);
        }

        function rejectLeaveRequest(id) {
            const req = leaveRequestsData.find(r => r.id === id);
            if (!req) return;
            const reason = prompt('Reason for rejecting this leave request:');
            if (reason === null) return; // cancelled
            req.status = 'rejected';
            req.rejectionReason = reason.trim() || 'No reason provided';
            renderLeaveRequestsPage();
            renderNotificationsPanel();
            notify('Leave request rejected', req.rejectionReason);
            logActivity('#ff6b6b', `Leave request for ${req.empId} rejected — ${req.rejectionReason}`);
        }

        function renderExportReportPage() {
            const container = document.getElementById('exportReportRows');
            if (!container) return;
            container.innerHTML = employeesData.map(emp => `
                <div class="row">
                    <div class="employee">
                        ${emp.photo ? `<img src="${emp.photo}" class="employee-img" />` : `<div class="employee-avatar" style="background:${emp.color}; color:#132226;">${emp.initials}</div>`}
                        <div><strong>${emp.name}</strong><small>${emp.title || ''}</small></div>
                    </div>
                    <div class="dept">${emp.dept}</div>
                    <div><span class="status ${emp.status.toLowerCase()}"><b></b>${emp.status}</span></div>
                </div>
            `).join('');
        }

        function populateAnnouncementAudience() {
            const list = document.getElementById('annAudienceList');
            if (!list) return;
            const deptNames = Array.from(new Set([...(typeof departmentsList !== 'undefined' ? departmentsList : []), ...employeesData.map(e => e.dept)]));
            const options = ['Everyone', 'Managers only', ...deptNames.map(d => d + ' only'), ...employeesData.map(e => e.name)];
            list.innerHTML = options.map(o => `<option value="${o}">`).join('');
        }

        function resolveAnnouncementAudience(text) {
            const q = text.trim().toLowerCase();
            if (!q || q === 'everyone') return employeesData;
            if (q === 'managers only' || q === 'managers') return employeesData.filter(e => (e.title || '').toLowerCase().includes('manager'));

            const deptNames = Array.from(new Set([...(typeof departmentsList !== 'undefined' ? departmentsList : []), ...employeesData.map(e => e.dept)]));
            const deptMatch = deptNames.find(d => q === d.toLowerCase() || q === (d + ' only').toLowerCase());
            if (deptMatch) return employeesData.filter(e => e.dept === deptMatch);

            const empMatch = employeesData.filter(e => e.name.toLowerCase().includes(q));
            return empMatch;
        }

        function sendAnnouncement() {
            const audience = document.getElementById('annAudience').value;
            const subject = document.getElementById('annSubject').value.trim();
            const message = document.getElementById('annMessage').value.trim();
            if (!subject || !message) {
                notify('Please fill in the announcement', 'Subject and message cannot be empty');
                return;
            }
            const recipients = resolveAnnouncementAudience(audience);
            if (!recipients.length) {
                notify('No matching recipients', `Couldn't match "${audience}" to a department or employee`);
                return;
            }
            notify('Announcement sent', `Your message was sent to ${recipients.length} ${recipients.length === 1 ? 'person' : 'people'} (${audience || 'Everyone'}).`);
            logActivity('#c06a8a', `Announcement "${subject}" sent to ${audience || 'Everyone'}`);
            document.getElementById('annSubject').value = '';
            document.getElementById('annMessage').value = '';
        }

        function renderHrReportPage() {
            const box = document.getElementById('hrReportPageBox');
            if (box) {
                const total = employeesData.length;
                const present = employeesData.filter(e => e.status === 'Present').length;
                const late = employeesData.filter(e => e.status === 'Late').length;
                const absent = employeesData.filter(e => e.status === 'Absent').length;
                const leave = employeesData.filter(e => e.status === 'Leave').length;

                box.innerHTML = `
                    <div class="hr-stat"><strong>${total}</strong><span>Total staff</span></div>
                    <div class="hr-stat"><strong style="color:#c98bfa">${present}</strong><span>Present</span></div>
                    <div class="hr-stat"><strong style="color:#ff9b78">${late}</strong><span>Late</span></div>
                    <div class="hr-stat"><strong style="color:#5ce1f2">${absent}</strong><span>Absent</span></div>
                    <div class="hr-stat"><strong style="color:#ff8fd1">${leave}</strong><span>Leave</span></div>
                `;
            }

            const grid = document.getElementById('hrReportDeptGrid');
            if (grid) {
                const allNames = Array.from(new Set([...departmentsList, ...employeesData.map(e => e.dept)]));
                grid.innerHTML = allNames.map((name, i) => {
                    const members = employeesData.filter(e => e.dept === name);
                    const total = members.length;
                    const present = members.filter(e => e.status === 'Present' || e.status === 'Late').length;
                    const pct = total ? Math.round((present / total) * 100) : 0;
                    const color = deptColors[i % deptColors.length];
                    return `
                        <div class="dept-card">
                            <div class="dept-card-top"><span class="dept-icon" style="background:${color}"></span><strong>${pct}%</strong></div>
                            <div class="dept-card-name">${name}</div>
                            <div class="bar"><span style="width:${pct}%;background:${color}"></span></div>
                            <div class="dept-card-meta"><span>${total} employees</span></div>
                        </div>`;
                }).join('');
            }
        }

        function renderHrReportBox() {
            const box = document.getElementById('hrReportBox');
            if (!box) return;

            const isOpen = box.style.display !== 'none';
            if (isOpen) {
                box.style.display = 'none';
                return;
            }

            const total = employeesData.length;
            const present = employeesData.filter(e => e.status === 'Present').length;
            const late = employeesData.filter(e => e.status === 'Late').length;
            const absent = employeesData.filter(e => e.status === 'Absent').length;

            box.innerHTML = `
                <div class="hr-stat"><strong>${total}</strong><span>Total staff</span></div>
                <div class="hr-stat"><strong style="color:#c98bfa">${present}</strong><span>Present</span></div>
                <div class="hr-stat"><strong style="color:#ff9b78">${late}</strong><span>Late</span></div>
                <div class="hr-stat"><strong style="color:#5ce1f2">${absent}</strong><span>Absent</span></div>
            `;
            box.style.display = 'grid';
        }

        function updateFinalSalaryPreview() {
            const basic = parseFloat(document.getElementById('empBasicSalary').value) || 0;
            const transport = parseFloat(document.getElementById('empTransportDeduction').value) || 0;
            const food = parseFloat(document.getElementById('empFoodAllowance').value) || 0;
            const final = basic - transport + food;
            document.getElementById('empFinalSalaryPreview').value = (basic || transport || food) ? `${final} JOD` : '';
        }

        function generateNextEmployeeId() {
            const nums = employeesData.map(e => parseInt((e.id || '').replace(/\D/g, ''), 10)).filter(n => !isNaN(n));
            const next = (nums.length ? Math.max(...nums) : 0) + 1;
            return 'PP-' + String(next).padStart(4, '0');
        }

        function submitNewEmployee() {
            const name = document.getElementById('empName').value.trim();
            const dob = document.getElementById('empDOB').value;
            const email = document.getElementById('empEmail').value.trim();
            const phone = document.getElementById('empPhone').value.trim();

            const phoneOnlyDigits = phone.replace(/\D/g, '');

            const dept = document.getElementById('empDept').value;
            const title = document.getElementById('empTitle').value.trim();
            const workMode = document.getElementById('empWorkMode').value;
            const project = document.getElementById('empProject').value.trim();
            const startDate = document.getElementById('empStartDate').value;
            const endDate = document.getElementById('empEndDate').value;
            const basicSalary = parseFloat(document.getElementById('empBasicSalary').value) || 0;
            const transportDeduction = parseFloat(document.getElementById('empTransportDeduction').value) || 0;
            const foodAllowance = parseFloat(document.getElementById('empFoodAllowance').value) || 0;
            const finalSalary = basicSalary - transportDeduction + foodAllowance;

            if (!name || !email || !phoneOnlyDigits) {
                notify('Please fill in required fields', 'Name, Email and Phone cannot be empty');
                return;
            }

            if (phoneOnlyDigits.length !== 10) {
                notify('Invalid phone number', 'Phone must be exactly 10 digits');
                return;
            }

            if (!editingEmployeeId && (!uploadedDocFiles.cv || !uploadedDocFiles.criminalCert || !uploadedDocFiles.passport)) {
                notify('Missing required documents', 'CV, Certificate of Good Conduct, and Passport copy are all required to add a new employee');
                return;
            }

            if (editingEmployeeId) {
                const emp = employeesData.find(e => e.id === editingEmployeeId);
                if (!emp) {
                    notify('Could not find this employee', 'They may have been deleted already');
                    cancelEditEmployee();
                    return;
                }

                emp.name = name;
                emp.dob = dob || emp.dob || '';
                emp.email = email;
                emp.phone = phoneOnlyDigits;
                emp.dept = dept;
                emp.title = title || 'Staff';
                emp.project = project || 'General';
                emp.workMode = workMode;
                emp.location = workMode === 'remote' ? (emp.location && emp.location.startsWith('Remote') ? emp.location : 'Remote') : (emp.location && !emp.location.startsWith('Remote') ? emp.location : 'Amman – HQ Tower');
                emp.startDate = startDate || emp.startDate || '';
                emp.endDate = endDate || '';
                emp.basicSalary = basicSalary;
                emp.transportDeduction = transportDeduction;
                emp.foodAllowance = foodAllowance;
                emp.finalSalary = finalSalary;
                emp.initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
                if (uploadedImageBase64) emp.photo = uploadedImageBase64;
                if (uploadedDocFiles.cv) emp.cvFileName = uploadedDocFiles.cv;
                if (uploadedDocFiles.criminalCert) emp.criminalCertFileName = uploadedDocFiles.criminalCert;
                if (uploadedDocFiles.passport) emp.passportFileName = uploadedDocFiles.passport;

                renderEmployees();
                renderProjects();
                populateAttHistoryControls();
                renderLocations();

                notify('Employee updated', `${name}'s profile was saved`);
                logActivity('#4dd8f0', `${name}'s profile was updated`);
                cancelEditEmployee();
                return;
            }

            const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
            const colors = ["#c98bfa", "#4dd8f0", "#ff8fd1", "#ff9b7c"];
            const color = colors[Math.floor(Math.random() * colors.length)];
            const empId = generateNextEmployeeId();

            employeesData.unshift({
                id: empId,
                name,
                dob: dob || '',
                email,
                phone: phoneOnlyDigits,
                dept,
                title: title || 'Staff',
                project: project || 'General',
                workMode,
                status: 'Present',
                lateBy: 0,
                location: workMode === 'remote' ? 'Remote' : 'Amman – HQ Tower',
                startDate: startDate || new Date().toISOString().slice(0, 10),
                endDate: endDate || '',
                basicSalary,
                transportDeduction,
                foodAllowance,
                finalSalary,
                initials,
                color,
                photo: uploadedImageBase64,
                cvFileName: uploadedDocFiles.cv,
                criminalCertFileName: uploadedDocFiles.criminalCert,
                passportFileName: uploadedDocFiles.passport
            });

            renderEmployees();
            renderProjects();
            populateAttHistoryControls();
            renderLocations();
            resetEmployeeForm();
            populateDeptDatalist();

            const section = document.getElementById('addEmployeeSection');
            const tile = document.getElementById('addEmployeeTile');
            if (section) section.style.display = 'none';
            if (tile) tile.style.display = 'flex';

            notify('Employee added successfully', `${name} joined ${dept} as ${empId}`);
            logActivity('#c98bfa', `${name} added to ${dept}`);
        }

        function resetEmployeeForm() {
            document.getElementById('empName').value = '';
            document.getElementById('empDOB').value = '';
            document.getElementById('empEmail').value = '';
            document.getElementById('empPhone').value = '';
            document.getElementById('empDept').value = '';
            document.getElementById('empTitle').value = '';
            document.getElementById('empProject').value = '';
            document.getElementById('empStartDate').value = '';
            document.getElementById('empEndDate').value = '';
            document.getElementById('empBasicSalary').value = '';
            document.getElementById('empTransportDeduction').value = '';
            document.getElementById('empFoodAllowance').value = '';
            document.getElementById('empFinalSalaryPreview').value = '';
            document.getElementById('empPhotoFile').value = '';
            document.getElementById('previewBox').innerHTML = 'Photo';
            uploadedImageBase64 = null;

            document.getElementById('empCV').value = '';
            document.getElementById('empCriminalCert').value = '';
            document.getElementById('empPassport').value = '';
            document.getElementById('empCvName').textContent = 'No file selected';
            document.getElementById('empCriminalCertName').textContent = 'No file selected';
            document.getElementById('empPassportName').textContent = 'No file selected';
            uploadedDocFiles = { cv: null, criminalCert: null, passport: null };
        }

        function openEditEmployee(id) {
            const emp = employeesData.find(e => e.id === id);
            if (!emp) return;

            editingEmployeeId = id;

            document.getElementById('empName').value = emp.name;
            document.getElementById('empDOB').value = emp.dob || '';
            document.getElementById('empEmail').value = emp.email;
            document.getElementById('empPhone').value = emp.phone;
            document.getElementById('empDept').value = emp.dept;
            document.getElementById('empTitle').value = emp.title || '';
            document.getElementById('empProject').value = emp.project || '';
            document.getElementById('empStartDate').value = emp.startDate || '';
            document.getElementById('empEndDate').value = emp.endDate || '';
            document.getElementById('empBasicSalary').value = emp.basicSalary || '';
            document.getElementById('empTransportDeduction').value = emp.transportDeduction || '';
            document.getElementById('empFoodAllowance').value = emp.foodAllowance || '';
            document.getElementById('empWorkMode').value = emp.workMode;
            updateFinalSalaryPreview();
            uploadedImageBase64 = emp.photo || null;
            document.getElementById('previewBox').innerHTML = emp.photo
                ? `<img src="${emp.photo}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;" />`
                : 'Photo';

            uploadedDocFiles = { cv: emp.cvFileName || null, criminalCert: emp.criminalCertFileName || null, passport: emp.passportFileName || null };
            document.getElementById('empCvName').textContent = emp.cvFileName ? `✓ ${emp.cvFileName}` : 'No file selected';
            document.getElementById('empCriminalCertName').textContent = emp.criminalCertFileName ? `✓ ${emp.criminalCertFileName}` : 'No file selected';
            document.getElementById('empPassportName').textContent = emp.passportFileName ? `✓ ${emp.passportFileName}` : 'No file selected';

            document.getElementById('addEmployeeSectionTitle').textContent = 'Edit Employee';
            document.getElementById('addEmployeeSectionDesc').textContent = `You're updating ${emp.name}'s profile.`;
            document.getElementById('empSubmitBtn').textContent = 'Save Changes';

            const banner = document.getElementById('editModeBanner');
            banner.style.display = 'flex';
            banner.innerHTML = `<span>✎ &nbsp;Editing <b>${emp.name}</b> <small style="opacity:.6;">(ID: ${emp.id})</small></span><button onclick="cancelEditEmployee()">Cancel</button>`;

            document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
            document.getElementById('page-Employees').style.display = 'block';
            const empNavBtn = document.getElementById('navEmployees');
            if (empNavBtn) setActiveNav(empNavBtn, 'Employees');
            hideBackToDashboard();
            const section = document.getElementById('addEmployeeSection');
            if (section) section.style.display = 'block';
            const tile = document.getElementById('addEmployeeTile');
            if (tile) tile.style.display = 'none';
            setTimeout(() => {
                const target = document.getElementById('addEmployeeSection');
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }

        function toggleAddEmployeeSection() {
            const section = document.getElementById('addEmployeeSection');
            const tile = document.getElementById('addEmployeeTile');
            if (!section) return;
            const opening = section.style.display === 'none';
            cancelEditEmployee();
            section.style.display = opening ? 'block' : 'none';
            if (tile) tile.style.display = opening ? 'none' : 'flex';
            if (opening) {
                setTimeout(() => section.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
            }
        }

        function populateDeptDatalist() {
            const list = document.getElementById('deptList');
            if (!list) return;
            const allNames = Array.from(new Set([...departmentsList, ...employeesData.map(e => e.dept)]));
            list.innerHTML = allNames.map(n => `<option value="${n}">`).join('');
        }

        function cancelEditEmployee() {
            editingEmployeeId = null;
            document.getElementById('addEmployeeSectionTitle').textContent = 'Add New Employee';
            document.getElementById('addEmployeeSectionDesc').textContent = 'Fill in the details, job information, upload a photo, and register a new team member.';
            document.getElementById('empSubmitBtn').textContent = 'Save New Employee';
            const banner = document.getElementById('editModeBanner');
            if (banner) banner.style.display = 'none';
            resetEmployeeForm();
            const section = document.getElementById('addEmployeeSection');
            const tile = document.getElementById('addEmployeeTile');
            if (section) section.style.display = 'none';
            if (tile) tile.style.display = 'flex';
        }

        function confirmDeleteEmployee(id) {
            const emp = employeesData.find(e => e.id === id);
            if (!emp) return;
            if (!confirm(`Delete ${emp.name}? This cannot be undone.`)) return;

            employeesData = employeesData.filter(e => e.id !== id);
            if (editingEmployeeId === id) cancelEditEmployee();

            renderEmployees();
            renderProjects();
            populateAttHistoryControls();
            renderLocations();
            notify('Employee deleted', `${emp.name} was removed from the roster`);
            logActivity('#ff8b8b', `${emp.name} was removed from the roster`);
        }
        function getSearchFilteredEmployees() {
            const query = (document.getElementById('employeeSearch').value || '').toLowerCase();
            return employeesData.filter(emp =>
                emp.name.toLowerCase().includes(query) ||
                emp.dept.toLowerCase().includes(query) ||
                emp.email.toLowerCase().includes(query) ||
                (emp.title && emp.title.toLowerCase().includes(query)) ||
                (emp.project && emp.project.toLowerCase().includes(query)) ||
                (emp.id && emp.id.toLowerCase().includes(query)) ||
                (emp.phone && emp.phone.includes(query))
            );
        }

        function filterEmployees() {
            employeePageIndex = 0;
            renderEmployees(getSearchFilteredEmployees());
        }
        const LOCATION_LANDMARKS = {
            "Amman – HQ Tower, Floor 4": "Near Mecca Street, Abdali",
            "Amman – HQ Tower, Floor 3": "Near Mecca Street, Abdali",
            "Amman – HQ Tower, Floor 2": "Near Mecca Street, Abdali",
            "Remote – Amman": "Near Rainbow Street, Jabal Amman",
            "Remote – Irbid": "Near Al-Hashemi Street, Irbid",
            "Remote – Zarqa": "Near King Faisal Street, Zarqa"
        };

        function renderLocations(list = employeesData) {
            const container = document.getElementById('locationRows');
            const countEl = document.getElementById('locCount');

            if (countEl) countEl.textContent = list.length;
            if (container) {
                container.innerHTML = list.map(emp => {
                    const today = buildDayRecord(emp, ATT_TODAY);
                    const timesLabel = (today.checkIn || today.checkOut)
                        ? `In <b>${today.checkIn || '—'}</b> · Out <b>${today.checkOut || '—'}</b>`
                        : 'No check-in today';

                    let checkInBadge;
                    if (!emp.checkIn) {
                        checkInBadge = `<span class="status" style="color:#8b8fa3;"><b></b>No check-in</span>`;
                    } else if (emp.checkIn.match) {
                        checkInBadge = `<span class="status present" title="${emp.checkIn.lat.toFixed(4)}, ${emp.checkIn.lng.toFixed(4)}"><b></b>Matches</span>`;
                    } else {
                        checkInBadge = `<span class="status absent" style="background:rgba(255,107,107,.14);color:#ff6b6b;" title="${emp.checkIn.lat.toFixed(4)}, ${emp.checkIn.lng.toFixed(4)} — ${emp.checkIn.label}">⚠ ${emp.checkIn.label}</span>`;
                    }
                    return `
                    <div class="row" id="locRow-${emp.id}" style="cursor:pointer;" onclick="locateEmployeeOnMap('${emp.id}')" title="Click to locate on the map">
                      <div class="employee">
                        ${emp.photo ? `<img src="${emp.photo}" class="employee-img" />` : `<div class="employee-avatar" style="background:${emp.color}; color:#132226;">${emp.initials}</div>`}
                        <div>
                          <strong>${emp.name}</strong>
                          <small>${typeof emp.lat === 'number' ? `📍 ${emp.lat.toFixed(4)}, ${emp.lng.toFixed(4)}` : 'No coordinates'}</small>
                        </div>
                      </div>
                      <div class="dept">${emp.dept}</div>
                      <div class="info-col"><strong>${emp.location || '—'}</strong><small>${timesLabel}</small></div>
                      <div><span class="status ${emp.workMode}"><b></b>${emp.workMode.charAt(0).toUpperCase() + emp.workMode.slice(1)}</span></div>
                      <div>${checkInBadge}</div>
                    </div>
                `;
                }).join('');
            }
            renderLocationSummary();
            renderGeoMap(list);
        }

        function locateEmployeeOnMap(id) {
            document.getElementById('geoMap').scrollIntoView({ behavior: 'smooth', block: 'center' });
            setTimeout(() => highlightGeoPinForEmployee(id), 350);
        }

        let leafletMapInstance = null;
        let leafletMarkersLayer = null;
        let leafletMarkersById = {}; // empId -> [L.Marker,...]

        function ensureLeafletMap() {
            if (leafletMapInstance || typeof L === 'undefined') return leafletMapInstance;
            const el = document.getElementById('geoMap');
            if (!el) return null;

            const jordanBounds = L.latLngBounds([29.0, 34.8], [33.5, 39.5]);

            leafletMapInstance = L.map('geoMap', {
                scrollWheelZoom: false,
                maxBounds: jordanBounds,
                maxBoundsViscosity: 1.0,
                minZoom: 7
            }).setView([31.9539, 35.9106], 12);
            L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                maxZoom: 20,
                subdomains: 'abcd',
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
            }).addTo(leafletMapInstance);
            leafletMarkersLayer = L.layerGroup().addTo(leafletMapInstance);
            return leafletMapInstance;
        }

        function makeDivIcon(color, big) {
            const size = big ? 34 : 24;
            return L.divIcon({
                className: '',
                html: `<div style="width:${size}px;height:${size}px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:${color};border:2px solid #fff;box-shadow:0 2px 8px rgba(0,0,0,.4);${big ? 'animation:geoPinBounce 1s ease-in-out infinite;' : ''}"></div>`,
                iconSize: [size, size],
                iconAnchor: [size / 2, size]
            });
        }

        function renderGeoMap(list = employeesData) {
            const map = ensureLeafletMap();
            if (!map || !leafletMarkersLayer) return;

            leafletMarkersLayer.clearLayers();
            leafletMarkersById = {};

            const points = [];
            list.forEach(emp => {
                if (typeof emp.lat === 'number') points.push({ lat: emp.lat, lng: emp.lng, kind: emp.checkIn ? 'assigned-has-checkin' : 'assigned-no-checkin', emp });
                if (emp.checkIn) points.push({ lat: emp.checkIn.lat, lng: emp.checkIn.lng, kind: emp.checkIn.match ? 'match' : 'mismatch', emp });
            });
            if (!points.length) return;

            const colorFor = kind => kind === 'match' ? '#c98bfa' : kind === 'mismatch' ? '#ff6b6b' : '#4dd8f0';
            const bounds = [];

            points.forEach(p => {
                const kindLabel = p.kind === 'match' ? 'Checked in here ✓' : p.kind === 'mismatch' ? `⚠ Checked in from ${p.emp.checkIn.label}` : (p.kind === 'assigned-no-checkin' ? 'Assigned location (no check-in today)' : 'Assigned location');
                const marker = L.marker([p.lat, p.lng], { icon: makeDivIcon(colorFor(p.kind)) })
                    .bindPopup(`<b>${p.emp.name}</b><br>${kindLabel}<br><span style="opacity:.7;">${p.lat.toFixed(4)}, ${p.lng.toFixed(4)}</span>`);
                marker.addTo(leafletMarkersLayer);
                bounds.push([p.lat, p.lng]);
                if (!leafletMarkersById[p.emp.id]) leafletMarkersById[p.emp.id] = [];
                leafletMarkersById[p.emp.id].push({ marker, kind: p.kind, lat: p.lat, lng: p.lng });
            });

            if (bounds.length && !map._userHasPanned) {
                map.fitBounds(bounds, { padding: [30, 30], maxZoom: 14 });
            }

            map.on('dragstart zoomstart', () => { map._userHasPanned = true; });
            // Re-render tiles correctly once the container's real size is known (it's inside a page that may have been display:none)
            setTimeout(() => map.invalidateSize(), 150);
        }

        function highlightGeoPinForEmployee(id) {
            const map = leafletMapInstance;
            if (!map) return;
            const entries = leafletMarkersById[id];
            if (!entries || !entries.length) return;

            // Prefer the check-in point (match or mismatch) over the plain assigned pin for focusing
            const target = entries.find(e => e.kind === 'match' || e.kind === 'mismatch') || entries[0];
            map.setView([target.lat, target.lng], 15, { animate: true });
            target.marker.setIcon(makeDivIcon(target.kind === 'mismatch' ? '#ff3b3b' : (target.kind === 'match' ? '#c98bfa' : '#4dd8f0'), true));
            target.marker.openPopup();
        }

        function filterLocations() {
            const query = document.getElementById('locationSearch').value.toLowerCase();
            const filtered = employeesData.filter(emp =>
                emp.name.toLowerCase().includes(query) ||
                emp.dept.toLowerCase().includes(query) ||
                (emp.location && emp.location.toLowerCase().includes(query))
            );
            renderLocations(filtered);

            if (query && filtered.length === 1) {
                highlightGeoPinForEmployee(filtered[0].id);
            } else if (query && filtered.length > 1) {
                const deptMatch = employeesData.some(e => e.dept.toLowerCase().includes(query));
                if (deptMatch) highlightGeoPinForEmployee(filtered[0].id);
            }
        }

        let locationsList = [];

        function getAllLocationNames() {
            const fromEmployees = employeesData.flatMap(e => (e.location || '').split(',').map(l => l.trim()).filter(Boolean));
            return Array.from(new Set([...locationsList, ...fromEmployees]));
        }

        function populateLocationDatalist() {
            const list = document.getElementById('locSuggestions');
            if (!list) return;
            list.innerHTML = getAllLocationNames().map(n => `<option value="${n}">`).join('');
        }

        function addLocation() {
            const name = prompt('New location name (e.g. "Amman – HQ Tower, Floor 5"):');
            if (!name || !name.trim()) return;
            const clean = name.trim();
            const existing = getAllLocationNames();
            if (existing.some(l => l.toLowerCase() === clean.toLowerCase())) {
                notify('Location exists', `"${clean}" is already on the list.`);
                return;
            }
            locationsList.push(clean);
            renderLocationSummary();
            notify('Location added', `"${clean}" now appears in By location — assign it, or more than one project, to that spot whenever you're ready.`);
        }

        function renderLocationSummary() {
            const el = document.getElementById('locationSummaryList');
            if (!el) return;

            const groups = {};
            getAllLocationNames().forEach(loc => { groups[loc] = 0; });
            employeesData.forEach(emp => {
                const locs = (emp.location || '').split(',').map(l => l.trim()).filter(Boolean);
                if (!locs.length) locs.push('Unassigned');
                locs.forEach(key => { groups[key] = (groups[key] || 0) + 1; });
            });

            const total = employeesData.length || 1;
            const palette = ["#c98bfa", "#4dd8f0", "#ff8fd1", "#ff9b7a"];

            el.innerHTML = Object.entries(groups).map(([loc, count], i) => {
                const pct = Math.round((count / total) * 100);
                const color = palette[i % palette.length];
                return `<div class="dept-row">
                    <div class="dept-top"><span class="dept-name"><i style="background:${color}"></i>${loc}</span><strong>${count}</strong></div>
                    <div class="bar"><span style="width:${pct}%;background:${color}"></span></div>
                </div>`;
            }).join('') + `<button class="full" onclick="addLocation()">＋ &nbsp; Add location</button>`;

            populateLocationDatalist();
        }

        window.onload = function () {
            renderEmployees();
            renderProjects();
            renderLocations();
            populateAttHistoryControls();
            renderAttendanceHistory();
            renderRecentActivity();
            renderNotificationsPanel();
        };


        function applyTheme(theme) {
            const isLight = theme === 'light';

            document.body.classList.toggle('light', isLight);

            const themeToggle = document.getElementById('themeToggle');

            if (themeToggle) {
                themeToggle.textContent = isLight ? '🌙' : '☀️';
                themeToggle.title = isLight
                    ? 'Switch to dark mode'
                    : 'Switch to light mode';
            }

            localStorage.setItem('theme', theme);

            if (isLight) startLightModeContrastFix();
            else stopLightModeContrastFix();
        }

        // Sweeps every inline-styled text color across the whole app and darkens any
        // low-saturation light/muted gray so nothing washes out on the light background —
        // catches labels generated dynamically by JS that a one-by-one CSS pass would miss.
        let lightModeContrastInterval = null;

        function darkenElementIfMutedLight(el) {
            const inlineColor = el.style && el.style.color;
            if (!inlineColor) return;
            const m = inlineColor.match(/^#([0-9a-fA-F]{6})$/);
            if (!m) return;
            const hex = m[1];
            const r = parseInt(hex.substr(0, 2), 16), g = parseInt(hex.substr(2, 2), 16), b = parseInt(hex.substr(4, 2), 16);
            const brightness = (r + g + b) / 3;
            const max = Math.max(r, g, b), min = Math.min(r, g, b);
            const saturation = max === 0 ? 0 : (max - min) / max;
            if (brightness > 135 && brightness < 235 && saturation < 0.28) {
                el.style.setProperty('color', '#3d5266', 'important');
            }
        }

        function sweepLightModeContrast() {
            if (!document.body.classList.contains('light')) return;
            document.querySelectorAll('[style*="color"]').forEach(darkenElementIfMutedLight);
        }

        function startLightModeContrastFix() {
            sweepLightModeContrast();
            if (lightModeContrastInterval) return;
            lightModeContrastInterval = setInterval(sweepLightModeContrast, 700);
        }

        function stopLightModeContrastFix() {
            if (lightModeContrastInterval) {
                clearInterval(lightModeContrastInterval);
                lightModeContrastInterval = null;
            }
        }

        function toggleTheme() {
            const currentTheme = document.body.classList.contains('light')
                ? 'light'
                : 'dark';
            applyTheme(currentTheme === 'light' ? 'dark' : 'light');
        }
        window.addEventListener('DOMContentLoaded', function () {
            const savedTheme = localStorage.getItem('theme') || 'dark';
            applyTheme(savedTheme);
        });
        // Connects "Today's attendance" (Present / Late / Absent) to the mini employee cards on the home page.
        document.addEventListener('DOMContentLoaded', () => {
            const legendItems = document.querySelectorAll('.legend > div[data-status]');

            legendItems.forEach(item => {
                item.addEventListener('click', () => {
                    const selectedStatus = item.getAttribute('data-status');
                    if (currentMiniStatusFilter === selectedStatus) {
                        currentMiniStatusFilter = null;
                        legendItems.forEach(i => i.style.transform = 'none');
                        renderEmployeesMini();
                        hideMiniFilterNotice();
                        return;
                    }

                    currentMiniStatusFilter = selectedStatus;
                    legendItems.forEach(i => i.style.transform = 'none');
                    item.style.transform = 'scale(1.08)';

                    renderEmployeesMini();

                    const matched = document.querySelectorAll('#employeeRowsMini .mini-row');
                    matched.forEach(row => {
                        row.classList.add('highlight-pulse');
                        setTimeout(() => row.classList.remove('highlight-pulse'), 1500);
                    });

                    showMiniFilterNotice(selectedStatus, matched.length);
                    document.getElementById('employeesPanelMini').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                });
            });
        });
        function showMiniFilterNotice(status, count) {
            const notice = document.getElementById('miniFilterNotice');
            if (!notice) return;
            notice.style.display = 'flex';
            notice.innerHTML = `
                <span>⚡ Active Filter: Showing <b>${status}</b> employees (${count} found)</span>
                <button id="resetMiniFilter">Show All</button>
            `;
            document.getElementById('resetMiniFilter').addEventListener('click', resetMiniFilter);
        }

        function hideMiniFilterNotice() {
            const notice = document.getElementById('miniFilterNotice');
            if (notice) notice.style.display = 'none';
        }
        function resetMiniFilter() {
            currentMiniStatusFilter = null;
            document.querySelectorAll('.legend > div').forEach(i => i.style.transform = 'none');
            hideMiniFilterNotice();
            renderEmployeesMini();
        }
        function updateDate() {
            const dateElement = document.getElementById('currentDate');
            const options = {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            };
            const currentDate = new Date().toLocaleDateString('en-US', options);
            if (dateElement) {
                dateElement.textContent = currentDate;
            }
        }
        updateDate();
        renderEmployees();
        renderProjects();
        populateAttHistoryControls();
        renderLocations();
        updateLeaveBadge();
