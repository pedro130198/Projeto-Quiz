function verificar(){
	let acertos = 0;

	if (document.quiz.p1a.value == 'nada') {
		alert('Por favor, selecione alguma opção da questão 1');
		return false;
	}else if (document.quiz.p1b.value == 'nada') {
		alert('Por favor, selecione alguma opção da questão 1');
		return false;
	}else if (document.quiz.p1c.value == 'nada') {
		alert('Por favor, selecione alguma opção da questão 1');
		return false;
	}else if (document.quiz.p1d.value == 'nada') {
		alert('Por favor, selecione alguma opção da questão 1');
		return false;
	}else if (document.quiz.p1e.value == 'nada') {
		alert('Por favor, selecione alguma opção da questão 1');
		return false;
	}else if (document.quiz.p2[0].checked == false && document.quiz.p2[1].checked == false && document.quiz.p2[2].checked == false && document.quiz.p2[3].checked == false) {
		alert('Por favor, selecione alguma opção da questão 2');
		return false;
	}else if (document.quiz.p3[0].checked == false && document.quiz.p3[1].checked == false && document.quiz.p3[2].checked == false && document.quiz.p3[3].checked == false) {
		alert('Por favor, selecione alguma opção da questão 3');
		return false;
	}else if (document.quiz.p4[0].checked == false && document.quiz.p4[1].checked == false && document.quiz.p4[2].checked == false && document.quiz.p4[3].checked == false && document.quiz.p4[4].checked == false && document.quiz.p4[5].checked == false) {
		alert('Por favor, selecione alguma opção da questão 4');
		return false;
	}else if(document.quiz.p5.value == ''){
		alert('Por favor, responda a questão 5');
		return false;
	}else if (document.quiz.p6[0].checked == false && document.quiz.p6[1].checked == false && document.quiz.p6[2].checked == false && document.quiz.p6[3].checked == false && document.quiz.p6[4].checked == false) {
		alert('Por favor, selecione alguma opção da questão 4');
		return false;
	}else if(document.quiz.p7.value == ''){
		alert('Por favor, responda a questão 7');
		return false;
	}else if (document.quiz.p8[0].checked == false && document.quiz.p8[1].checked == false) {
		alert('Por favor, selecione alguma opção da questão 8');
		return false;
	}else if (document.quiz.p9[0].checked == false && document.quiz.p9[1].checked == false && document.quiz.p9[2].checked == false && document.quiz.p9[3].checked == false) {
		alert('Por favor, selecione alguma opção da questão 9');
		return false;
	}

	if (document.quiz.p1a.value == 'certa') {
		acertos = acertos + 0.20;
	}
	if (document.quiz.p1b.value == 'certa') {
		acertos = acertos + 0.20;
	}
	if (document.quiz.p1c.value == 'certa') {
		acertos = acertos + 0.20;
	}
	if (document.quiz.p1d.value == 'certa') {
		acertos = acertos + 0.20;
	}
	if (document.quiz.p1e.value == 'certa') {
		acertos = acertos + 0.20;
	}
	if (document.quiz.p2[2].checked) {
		acertos++
	}
	if (document.quiz.p3[3].checked) {
		acertos++
	}
	if (document.quiz.p4[0].checked && document.quiz.p4[1].checked && document.quiz.p4[3].checked) {
		acertos++
	}
	if (document.quiz.p5.value == 'background-repeat') {
		acertos++;
	}
	if (document.quiz.p6[3].checked) {
		acertos++
	}
	if (document.quiz.p7.value == 'prompt()' || document.quiz.p7.value == 'prompt();' || document.quiz.p7.value == 'prompt' ) {
		acertos++;
	}
	if (document.quiz.p8[1].checked) {
		acertos++
	}
	if (document.quiz.p9[0].checked) {
		acertos++
	}

	document.quiz.acertos.value = acertos;

	return true;
}