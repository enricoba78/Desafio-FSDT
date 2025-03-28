const form = document.getElementById("contactForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Captura os valores dos campos do formulário
    const names = [
        document.getElementById("name1").value,
        document.getElementById("name2").value,
        document.getElementById("name3").value,
        document.getElementById("name4").value,
        document.getElementById("name5").value,
    ];
    const message = document.getElementById("message").value;

    // Criação do payload no formato especificado
    const payload = {
        names: names,
        message: message
    };

    try {
        // Envia a requisição POST para a API
        const response = await fetch("https://fsdt-contact.onrender.com/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        // Tratamento de sucesso ou erro
        if (response.ok) {
            alert("Enviado com sucesso!");
            form.reset(); // Limpa os campos do formulário
        } else {
            alert("Ocorreu um erro ao enviar o formulário.");
        }
    } catch (error) {
        alert("Erro de conexão com o servidor.");
    }
});
