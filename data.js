(function() {
    var datepicker = {};

    datepicker.getMonthData = function(year, month) {

        var ret = [];

        if ((!year || !month) && (month !== 0)) {
            var today = new Date();
            year = today.getFullYear();
            month = today.getMonth() + 1;
        }

        var firstDay = new Date(year, month - 1, 1);
        var firstDayWeekDay = firstDay.getDay(); // 本月1号星期几
        if (firstDayWeekDay === 0) firstDayWeekDay = 7;

        year = firstDay.getFullYear();
        month = firstDay.getMonth() + 1;

        var lastDayOfLastMonth = new Date(year, month - 1, 0);
        var lastDateOfLastMonth = lastDayOfLastMonth.getDate(); // 上个月的最后一天是几号

        var preMonthDayCount = firstDayWeekDay - 1; // 上个月最后一天星期几

        var lastDay = new Date(year, month, 0);
        var lastDate = lastDay.getDate(); // 本月的最后一天是几号

        for (var i = 0; i < 7 * 6; i++) {
            var date = i + 1 - preMonthDayCount;
            var showDate = date;
            var thisMonth = month;
            if (date <= 0) {
                // 上一月
                thisMonth = month - 1;
                showDate = lastDateOfLastMonth + date;
            } else if (date > lastDate) {
                // 下一月
                thisMonth = month + 1;
                showDate = showDate - lastDate;
            }

            if (thisMonth === 0) thisMonth = 12;
            if (thisMonth === 13) thisMonth = 1;

            ret.push({
                month: thisMonth,
                date: date,
                showDate: showDate
            });

        }

        return {
            year: year,
            month: month,
            days: ret
        };

    }


    window.datepicker = datepicker;
})();
