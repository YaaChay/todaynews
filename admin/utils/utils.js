var Utils = {
    currentDate: function () {
        var now = new Date();
        var day = now.getDay();
        var date = now.getDate();
        var month = now.getMonth();
        var year = now.getFullYear();

        var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sataday"];
        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var result = dayNames[day] + ", " + monthNames[month] + " " + date + ", " + year;
        return result;
    },
    currentWealther: function () {
        var key = "cd84db133806e2395670669c67a0e29f";

    }
}

export { Utils };