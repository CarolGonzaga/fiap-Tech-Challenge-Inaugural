document.getElementById("card").addEventListener("submit", async function (e) {
    e.preventDefault();

    const nameInputs = document.querySelectorAll('input[name="names"]');
    const namesArray = Array.from(nameInputs)
        .map((input) => input.value.trim())
        .filter((name) => name !== "");

    const storyInput = document.getElementById("story").value.trim();

    const data = {
        names: namesArray,
        story: storyInput,
    };

    try {
        const response = await fetch(
            "https://formspree.io/f/xgvlzplj",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            }
        );

        if (response.ok) {
            alert("Formulário enviado com sucesso!");
            document.getElementById("card").reset();
        } else {
            alert("Ocorreu um erro ao enviar o formulário.");
        }
    } catch (error) {
        alert("Erro de conexão. Tente novamente.");
        console.error(error);
    }
});
