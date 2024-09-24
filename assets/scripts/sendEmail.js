function sendEmail() {


    document.getElementById('email-form').addEventListener('submit', function (event) {
        event.preventDefault();

        let params = {
            from_name: document.getElementById('from_name').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value,
        };

        emailjs.send("service_x2fguis", "template_p8994vh", params)
            .then(function (response) {
                console.log('استلمنا طلبك', response.status, response.text);
                alert('لقد تم ارسال طلبك، شكرا لك!');
            }, function (error) {
                console.log('لم يتم الارسال', error);
                alert('حدث خطأ اثناء الارسال، يرجى المحاولة مرة اخرى');
            });
    });
};