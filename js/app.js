function cadastro() {
	var user = document.getElementById('new_user').value;
	var senha = document.getElementById('new_pass').value;
	var conf_senha = document.getElementById('new_pass_confirmation').value;
	var nivel = 0;
	var score = 0;
	var usuario = new User(user, senha, nivel, score);
	var bd = new Banco();

	if (senha == conf_senha) {
		bd.inserir(usuario);
    	var logado = user; 
    	var log = new Logado(logado);
    	var lga = log.salvar();
		document.getElementById('new_user').value = "";
		document.getElementById('new_pass').value = "";
		document.getElementById('new_pass_confirmation').value = "";
		window.location.href = 'menu.html';
	} else {
		alert("As senhas não correspondem");
	}
}

function login() {
	var bancda = new Banco();
	var vetor = bancda.listar();
	var l;
	var li;
	var user = document.getElementById('user').value;
	var senha = document.getElementById('password').value;

	for (var i = 0; i < vetor.length; i++) {
		if ((vetor[i].user == user) && (vetor[i].senha == senha)) {
			l = 1;
			li = i;
		}
	}
	if (l == 1) {
		var logado = document.getElementById("user").value;
		var log = new Logado(logado);
		var lga = log.salvar();
		window.location.href = 'menu.html';
		document.getElementById('user').value = "";
		document.getElementById('password').value = "";
	}else {
		alert('Usuario não cadastrado.')
		alert('Se Cadastre.')
		document.getElementById("user").value = "";
		document.getElementById("password").value = "";
		document.getElementById("new_user").focus();
	}
}
