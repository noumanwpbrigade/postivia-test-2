    // JS for calendar

    var type = document.getElementById("dateInput");

    type.addEventListener('focus', function () {
        if (this.type === "text") {
            this.type = 'date';
        } else {
            this.type = 'text';  // Use assignment operator '=' here
        }
    });

    type.addEventListener('blur', function () {
        if (this.type === 'date') {
            this.type = 'text';
        }
    });