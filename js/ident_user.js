class Logado{
	constructor(logado)
	{
     	this.logado = logado;
	}
	salvar(){
		localStorage.setItem("logado",this.logado)
	}
}