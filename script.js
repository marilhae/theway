document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;

    let message = 'Dados enviados com sucesso!\n';
    message += `Nome: ${name}\n`;
    message += `Idade: ${age}\n`;
    message += `Email: ${email}`;

    document.getElementById('message').innerText = message;
});
