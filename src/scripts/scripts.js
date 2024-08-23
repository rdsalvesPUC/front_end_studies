function validateForm() {
    console.log("chamou validateForm");
    return true;
}

function realizarLogin() {
	const email = document.getElementById('email').value;
	const senha = document.getElementById('senha').value;

	if (!email || !senha) {
		document.getElementById('campoObrigatorio').style.display = 'block';
		return;
	} else {
		document.getElementById('campoObrigatorio').style.display = 'none';
	}

	if (senha.length < 8 || senha.length > 16) {
		document.getElementById('tamanhoSenha').style.display = 'block';
		return;
	} else {
		document.getElementById('tamanhoSenha').style.display = 'none';
	}

	console.log('Email: ' + email);
	console.log('Senha: ' + senha);
	console.log('chamou realizar login');
}