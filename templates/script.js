document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('prediction-form');
    const loader = document.querySelector('.loader');
    const resultDiv = document.getElementById('result');
    const resultText = document.getElementById('result-text');
    const restartBtn = document.getElementById('restart-btn');
    const learnMoreBtn = document.getElementById('learn-more-btn');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        loader.style.display = 'block';
        resultDiv.style.display = 'none';

        // Mengumpulkan data dari form
        const formData = new FormData(form);
        const gender = form.querySelector('input[name="GENDER"]:checked').value;
        const birthdate = new Date(formData.get('age'));
        const age = new Date().getFullYear() - birthdate.getFullYear();
        
        const data = {
            GENDER: gender,
            AGE: age,
            SMOKING: formData.get('SMOKING'),
            YELLOW_FINGERS: formData.get('YELLOW_FINGERS'),
            ANXIETY: formData.get('ANXIETY'),
            PEER_PRESSURE: formData.get('PEER_PRESSURE'),
            CHRONIC_DISEASE: formData.get('CHRONIC_DISEASE'),
            FATIGUE: formData.get('FATIGUE'),
            ALLERGY: formData.get('ALLERGY'),
            WHEEZING: formData.get('WHEEZING'),
            ALCOHOL_CONSUMING: formData.get('ALCOHOL_CONSUMING'),
            COUGHING: formData.get('COUGHING'),
            SHORTNESS_OF_BREATH: formData.get('SHORTNESS_OF_BREATH'),
            SWALLOWING_DIFFICULTY: formData.get('SWALLOWING_DIFFICULTY'),
            CHEST_PAIN: formData.get('CHEST_PAIN')
        };

        // Kirim data ke Flask backend
        fetch('/predict', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            loader.style.display = 'none';
            resultDiv.style.display = 'block';
            // Tampilkan hasil prediksi
            resultText.textContent = data.prediction === 'positive' ? 'Sayangnya, Anda memiliki kemungkinan untuk terkena kanker paru-paru.' : 'Selamat! Kesehatan Anda masih baik.';
        })
        .catch(error => {
            console.error('Error:', error);
            loader.style.display = 'none';
        });
    });

    restartBtn.addEventListener('click', function() {
        form.reset();
        resultDiv.style.display = 'none';
    });

    learnMoreBtn.addEventListener('click', function() {
        // Redirect ke halaman pelajari lebih lanjut tentang kanker paru-paru
        window.location.href = 'learn_more.html';
    });

    document.querySelector('input[name="GENDER"][value="1"]').addEventListener('click', function() {
        document.getElementById('gender-info').textContent = 'Jenis Kelamin Kamu adalah Laki-laki';
    });

    document.querySelector('input[name="GENDER"][value="2"]').addEventListener('click', function() {
        document.getElementById('gender-info').textContent = 'Jenis Kelamin Kamu adalah Perempuan';
    });

    document.getElementById('birthdate').addEventListener('change', function() {
        var birthdate = new Date(this.value);
        var age = calculateAge(birthdate);
        document.getElementById('age-info').textContent = 'Usia Kamu adalah ' + age + ' tahun';
    });

    function calculateAge(birthdate) {
        var today = new Date();
        var age = today.getFullYear() - birthdate.getFullYear();
        var month = today.getMonth() - birthdate.getMonth();
        if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        return age;
    }
});
