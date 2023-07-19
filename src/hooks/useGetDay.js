
const useGetDay = () => {
    const weekDays = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    const monthYears = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    let today = new Date();
    let day = today.getDay();
    let days = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let date = weekDays[day] + ' ' + days + ' ' + monthYears[month - 1] + ' del ' + year;

    if (days < 10) days = '0' + day;
    if (month < 10) month = '0' + month;

    return {
        date
    }
}

export default useGetDay