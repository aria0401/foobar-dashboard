// ---------- CLOCK --------- //

// Funktion der viser hvor lang tid der er tilbage til baren lukker
function getTime(parm) {
    let d = new Date(parm.timestamp);
    let dDate = d.getDate();
    let dMonth = d.getMonth() + 1;
    let dYear = d.getFullYear();
    // Set the date we're counting down to
    let countDownDate = new Date(`${dMonth} ${dDate}, ${dYear} ${parm.bar.closingTime}`).getTime();

    // Update the count down every 1 second
    let x = setInterval(function () {

        // Get todays date and time
        let now = new Date().getTime();

        // Find the distance between now an the count down date
        let distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.querySelector(".closingTime").innerHTML = "CLOSING IN " + ((hours < 10 ? '0' : '') +
                hours) + ":" +
            ((minutes < 10 ? '0' : '') + minutes) + ":" + ((seconds < 10 ? '0' : '') + seconds);

        // If the count down is finished, write some text 
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".closingTime").innerHTML = "CLOSED";
        }
    }, 1000);
}
// ---------- CLOCK SLUT --------- //
