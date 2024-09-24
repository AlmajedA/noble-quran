axios.get('navbar.html')
            .then(function (response) {
                document.getElementById('navbar').innerHTML = response.data;
            })
            .catch(function (error) {
                console.error('Error loading the navbar:', error);
            });