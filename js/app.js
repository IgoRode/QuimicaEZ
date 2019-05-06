function cadastro() {
	var user = document.getElementById('nome').value;
	var senha = document.getElementById('senha').value;
	var conf_senha = document.getElementById('c_senha').value;
	var nivel = 0;
	var score = 0;
	var usuario = new User(user, senha, nivel, score);
	var bd = new Banco();

	if (senha == conf_senha) {
		bd.inserir(usuario);
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
		alert("Deu certo graças a Deus");
	}
}
