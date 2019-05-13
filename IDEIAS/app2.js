var vetor = [];
var vetor2 = [];
var win = 0;
var i;
var numeros1 = [];
var numeros2 = [];

function aleatorio() {
	var total_imagens = 6;
	var numAtual = 0;
	for (i = 0; i < total_imagens; i++){
		numAtual = Math.floor(Math.random()* 6+1);
		if (numAtual !=0) {
			while(numeros1.indexOf(numAtual) != && numAtual!=0){
				numAtual = Math.floor(Math.random() * 8+1);
			}
			numeros1.push(numAtual);
		}
	}
	for (i = 0; i < total_imagens; i++){
		numAtual = Math.floor(Math.random()* 6+1);
		if (numAtual != 0) {
			while(numeros2.indexOf(numAtual) !=-1 && numAtual!=0){
			numAtual = Math.floor(Math.random()* 6+1);	
			}
			numeros2.push(numAtual);
		}
	}
	vetor = numeros1.concat(numeros2);
	numeros2 = numeros1.concat(numero2);
}
function colocar()
{
	var texto = document.getElementById('imagens');
	texto.innerHTML = "";
	texto.innerHTML = vetor1;
}
function sorteio()
{
	var texto;
	var comeco;
	for(var i=0;i<16;i++)
	{
		texto = ("<img src='imagens/"+vetor[i]+".jpg' height='120' width='120' />");
		if(i == 3 || i == 7 || i==11)
		{
			texto += "<br>"
		}
		vetor[i]=(texto);
	}
}
var valor1='', valor2='';
var cont = 0;
var cont1 = 0 ;

function virar(op)
{
	valor1=vetor1[op];
	vetor1[op] = vetor[op];
	colocar();
	if(cont == 0)
	{
		valor2 = valor1;
		cont = vetor[op];
		cont1 = op;
	}
	else
	{
		//alert(cont+"\n"+vetor[op]);
		var valor_2 = vetor[op].replace("<br>","");
		var min = cont.indexOf("<br>");
		cont = cont.replace("<br>","");
		//alert(min+"\n"+cont);
		if(cont.localeCompare(valor_2)==0)
		{
			win++;
		}
		else
		{

			vetor1[op] = valor1; 
			vetor1[cont1] = valor2;
		}
		valor1='', valor2='';
		cont1 = 0 ;cont=0;
		if(win == 8)
			{
				if(confirm("Parabéns! Ganhou o jogo! Deseja jogar novamente?"))
				{
					win = 0;
					vetor.length = 0;
					vetor1.length = 0;
					numeros1.length = 0;
					numeros2.length = 0;
					inicio();
				}
				else
				{
					alert("Obrigado por usar!");
				}
			}
	}
	
}


function inicio() {
	aleatorio();
	for(i = 0; i < 12; i++)
	{
		comeco = ("<img src='geral.jpg' height='120' width='120' id='"+i+"' onclick='virar("+i+")'/>");
		if (i == 3 || i == 7 || i == 11)
		{
			comeco +="<br>"
		}
		vetor[i] = (comeco);	
	}
	colocar();
	sorteio();
}