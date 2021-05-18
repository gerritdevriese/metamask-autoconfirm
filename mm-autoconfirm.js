if (confirm('Warning! This will auto approve ALL transactions until the page is refreshed, continue?')) {

    setInterval(function () {

        console.log("Scanning for new transactions...");

        var a = document.getElementsByTagName("div");
        var queue;
        for (var i = 0; i < a.length; i++) {
            if (a[i].classList.contains("transaction-list-item--unconfirmed")) {
                queue = a[i];
                break;
            }
        }

        if (typeof queue !== 'undefined') {
            if (queue.getElementsByTagName("h3")[0].getElementsByTagName("div")[0].textContent == "Unapproved") {
                console.log("New transaction found");
                queue.click();
            }
        }

        var c = document.getElementsByTagName("button");
        var btnConfirm;
        for (var i = 0; i < c.length; i++) {
            if (c[i].textContent == "Confirm") {
                btnConfirm = c[i];
                break;
            }
        }
        var btnReject;
        for (var j = 0; j < c.length; j++) {
            if (c[j].textContent == "Reject") {
                btnReject = c[j];
                break;
            }
        }

        if (typeof btnConfirm !== 'undefined' && typeof btnReject !== 'undefined') {
            if (!btnConfirm.disabled) {
                btnConfirm.click();
            }
            else {
                btnReject.click();
            }
        }



    }, 1000)
}