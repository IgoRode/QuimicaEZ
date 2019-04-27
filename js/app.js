function cadastro(){
	var user = document.getElementById('nome').value;
	var senha = document.getElementById('senha').value;
	var conf_senha = document.getElementById('c_senha').value;
	var nivel = 0;
	var score = 0;
	var usuario = new User(user,senha,nivel,score);
	var bd = new Banco();

		if (senha==conf_senha) {
			bd.inserir(usuario);
			window.location.href='menu.html';
		}else{
			alert("As senhas não correspondem");
		}
}

function login(){
	var bd = new Banco();
	var vetor = bd.listar();
	var l;
	var user = document.getElementById('nome').value;
	var senha = document.getElementById('senha').value;

	for(var i=0; i<vetor.lenght; i++)
	{
		if ((vetor[i].user==user)&&(vetor[i].senha==senha)) {
			l=1;
		}else{
			l=0;
		}
	}

	if (l==1) {
		var usuario = document.getElementById('nome').value;
		var user_log = new User_logado(usuario);
		var log = user_log.salvar();
		alert("deu certo")
	}else{
		alert("erro")
	}
}