class Banco{
	constructor()
	{
		this.nome = "Users"
		this.dados = JSON.parse(localStorage.getItem(this.nome)) ||[];
	}
	inserir(obj)
	{
		this.dados.push(obj);
		localStorage.setItem(this.nome, JSON.stringify(this.dados));
	}
	listar()
	{
		this.dados = JSON.parse(localStorage.getItem(this.nome));
		return this.dados;
	}
}