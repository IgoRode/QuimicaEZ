function resposta1(resposta) {
    var texto;
    texto = document.getElementById("id_resposta");
    texto.innerHTML = " ";
    var valor = document.getElementById('barra').value;
    valor = valor + 20;
    document.getElementById('barra').value = valor;
    if (resposta==8) {
      texto.innerHTML = "<p>" + resposta + "</p>" + "<p>" + "Resposta Certa" + "</p>";
    }else{
      texto.innerHTML = "<p>" + resposta + "</p>" + "<p>" + "Resposta Errada" + "</p>";
    }
    document.getElementById("botons").className = 'invisivel';
    document.getElementById("quiz").className = 'invisivel';
    document.getElementById("quiz2").className = 'quiz';
}


function resposta2(resposta) {
    var texto;
    texto = document.getElementById("id_resposta2");
    texto.innerHTML = " ";  
    var valor = document.getElementById('barra').value;
    valor = valor + 20;
    document.getElementById('barra').value = valor;
    if (resposta==4) {
      texto.innerHTML = "<p>" + resposta + "</p>" + "<p>" + "Resposta Certa" + "</p>";
    }else{
      texto.innerHTML = "<p>" + resposta + "</p>" + "<p>" + "Resposta Errada" + "</p>";
    }
    document.getElementById("botons2").className = 'invisivel';
    document.getElementById("quiz2").className = 'invisivel';
    document.getElementById("quiz3").className = 'quiz';
}


function resposta3(resposta) {
    var texto;
    texto = document.getElementById("id_resposta3");
    texto.innerHTML = " ";  
    var valor = document.getElementById('barra').value;
    valor = valor + 20;
    document.getElementById('barra').value = valor;
    if (resposta==6) {
      texto.innerHTML = "<p>" + resposta + "</p>" + "<p>" + "Resposta Certa" + "</p>";
    }else{
      texto.innerHTML = "<p>" + resposta + "</p>" + "<p>" + "Resposta Errada" + "</p>";
    }
    document.getElementById("botons3").className = 'invisivel';
    document.getElementById("quiz3").className = 'invisivel';
    document.getElementById("quiz4").className = 'quiz';
}


function resposta4(resposta) {
    var texto;
    texto = document.getElementById("id_resposta4");
    texto.innerHTML = " ";
    var valor = document.getElementById('barra').value;
    valor = valor + 20;
    document.getElementById('barra').value = valor;
    if (resposta==10) {
      texto.innerHTML = "<p>" + resposta + "</p>" + "<p>" + "Resposta Certa" + "</p>";
    }else{
      texto.innerHTML = "<p>" + resposta + "</p>" + "<p>" + "Resposta Errada" + "</p>";
    }
    document.getElementById("botons4").className = 'invisivel';
    document.getElementById("quiz4").className = 'invisivel';
    document.getElementById("quiz5").className = 'quiz';
}



function resposta5(resposta) {
    var texto;
    texto = document.getElementById("id_resposta5");
    texto.innerHTML = " ";
    var valor = document.getElementById('barra').value;
    valor = valor + 20;
    document.getElementById('barra').value = valor;
    if (resposta==12) {
      texto.innerHTML = "<p>" + resposta + "</p>" + "<p>" + "Resposta Certa" + "</p>";
    }else{
      texto.innerHTML = "<p>" + resposta + "</p>" + "<p>" + "Resposta Errada" + "</p>";
    }
    document.getElementById("botons5").className = 'invisivel';
    document.getElementById("quiz").className = 'quiz'
    document.getElementById("quiz2").className = 'quiz'
    document.getElementById("quiz3").className = 'quiz'
    document.getElementById("quiz4").className = 'quiz'
    document.getElementById("quiz5").className = 'quiz'
}