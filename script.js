document.addEventListener("DOMContentLoaded", function () {
    const calendarContainer = document.querySelector(".calendar");

    // Nombres de los meses y días de la semana
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];
    const daysOfWeek = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

    // Obtener el año actual
    const currentYear = new Date().getFullYear();

    // Nombres de las imágenes de fondo para cada mes
    const monthBackgrounds = [
        "imagenes/enero.jpg", "imagenes/febrero.jpg", "imagenes/marzo.jpg", "imagenes/abril.jpg",
        "imagenes/mayo.jpg", "imagenes/junio.jpg", "imagenes/julio.jpg", "imagenes/agosto.jpg",
        "imagenes/septiembre.jpg", "imagenes/octubre.jpg", "imagenes/noviembre.jpg", "imagenes/diciembre.jpg"
    ];

    // Crear calendario para cada mes
    for (let monthIndex = 0; monthIndex < months.length; monthIndex++) {
        const month = months[monthIndex];
        const daysInMonth = new Date(currentYear, monthIndex + 1, 0).getDate();
        const firstDayOfWeek = new Date(currentYear, monthIndex, 1).getDay();

        const monthContainer = document.createElement("div");
        monthContainer.classList.add("month");

        monthContainer.style.backgroundImage = `url('${monthBackgrounds[monthIndex]}')`;
        
        monthContainer.innerHTML += `
            <h2>${month}</h2>
            <table>
                <tr>
                    ${daysOfWeek.map(day => `<th>${day}</th>`).join("")}
                </tr>
            </table>
        `;

        const table = monthContainer.querySelector("table");
        let dayCount = 1;

        for (let i = 0; i < 6; i++) {
            const row = document.createElement("tr");
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDayOfWeek) {
                    row.innerHTML += "<td></td>";
                } else if (dayCount <= daysInMonth) {
                    const cell = document.createElement("td");
                    cell.innerHTML = `<strong style="color: black;">${dayCount}</strong>`;
                    row.appendChild(cell);
                    dayCount++;
                } else {
                    row.innerHTML += "<td></td>";
                }
            }
            table.appendChild(row);
        
        }

        calendarContainer.appendChild(monthContainer);
    }
});
    