document.getElementById("registerForm").addEventListener("submit", function(e){
            e.preventDefault(); // Mencegah refresh halaman

            // Ambil nilai dari input
            const nama = document.getElementById("nama").value;
            const email = document.getElementById("email").value;
            const tanggal = document.getElementById("tanggal").value;

				//new
				const password = document.getElementById("password").value;
				//end new
            const gender = document.querySelector('input[name="gender"]:checked').value;

				// Simpan data pendaftaran ke Local Storage
				const user = {
       		nama: nama,
        		email: email,
        		password: password, // Simpan password
        		tanggal: tanggal,
				gender: gender
    };
    localStorage.setItem(email, JSON.stringify(user));

    alert("Pendaftaran berhasil!");

//end save local storange

            // Masukkan data ke tabel
            const table = document.getElementById("dataTable").getElementsByTagName("tbody")[0];
            const newRow = table.insertRow();

            newRow.insertCell(0).textContent = nama;
            newRow.insertCell(1).textContent = email;
            newRow.insertCell(2).textContent = tanggal;
            newRow.insertCell(3).textContent = gender;

            // Reset form setelah submit
            document.getElementById("registerForm").reset();
        });