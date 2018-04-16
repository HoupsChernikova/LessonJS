function timer (){
	//Timer
    let deadline = '2018-04-04';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        if (t < 0) {
            return {
                "total": 0,
                "hours": '00',
                "minutes": '00',
                "seconds": '00'
            };
        }


    };

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;
            let timeInterval = setInterval(updateClock, 1000);

            if (t.total <= 0) {
                clearInterval(timeInterval);

            }

        }
        updateClock();

    }
    setClock('timer', deadline);
}
module.exports = timer;