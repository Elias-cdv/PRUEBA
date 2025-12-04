document.addEventListener("DOMContentLoaded", cargarUsuarios);

/*Función async */

async function cargarUsuarios(){
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        const tbody = document.getElementById("tabla-users");

        data.forEach(u => {
            const row =  ` <tr>
                                <td>${u.name}</td>
                                <td>${u.username}</td> 
                                <td>${u.email}</td>
                                <td>${u.address.city}</td>
                            </tr>
             `;
            tbody.innerHTML += row;
        });
    } catch (error) {
        console.error("Error: ", error);
    }
}
