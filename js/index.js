
        var showModalButton = document.getElementById('showModal');
        var closeModalButton = document.getElementById('closeModal');
        var modal = document.getElementById('myModal');

        showModalButton.addEventListener('click', function () {
            modal.style.display = 'block';
        });

        closeModalButton.addEventListener('click', function () {
            modal.style.display = 'none';
        });
