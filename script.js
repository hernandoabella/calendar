const prevMonthBtn = document.getElementById("prevMonth");
const nextMonthBtn = document.getElementById("nextMonth");
const currentMonthYear = document.getElementById("currentMonthYear");
const calendarDays = document.getElementById("calendarDays");

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let currentDate = new Date();

function updateCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  currentMonthYear.textContent = `${months[month]} ${year}`;
  calendarDays.innerHTML = "";

  for (let i = 1; i <= daysInMonth; i++) {
    const dayElement = document.createElement("div");
    dayElement.classList.add("calendar-day");
    dayElement.textContent = i;

    if (year === new Date().getFullYear() && month === new Date().getMonth() && i === new Date().getDate()) {
      dayElement.classList.add("today"); // Agregar clase al día actual del mes actual
    }

    calendarDays.appendChild(dayElement);
  }
}

prevMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendar();
});

nextMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendar();
});

updateCalendar();