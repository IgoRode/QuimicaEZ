class User_logado{
	constructor(logado)
	{
		this.user_log = logado;
	}
	salvar(){
		localStorage.setItem('logado',this.logado);
	}
}