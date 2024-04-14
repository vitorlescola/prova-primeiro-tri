function submitQuiz() {
	const q1 = document.querySelector('input[name="q1"]:checked').value;
	const q2 = document.querySelector('input[name="q2"]:checked').value;

	let result = '';

	if (q1 === 'a' && q2 === 'a') {
		result = 'Tesouro Selic';
	}else if (q1 === 'a' && q2 === 'b') {
		result = 'CDB';
	} 
	else if (q1 === 'a' && q2 === 'c') {
		result = 'Prograns de cashback, mesmo não sendo investimentos, eles são de curto prazo e não tem um custo definido.';
	} 
	else if (q1 === 'b' && q2 === 'b') {
		result = 'Tesouro Direto';
	} else if (q1 === 'c' && q2 === 'c') {
		result = 'Poupança , mesmo com suas desvantagens a poupança pode ser útil para pessoas que ainda não sabem muito sobre investimentos e/ou estão apenas começando.';
	}
	else if (q1 === 'c' && q2 === 'a') {
		result = 'LCI e LCA';
	}
	else if (q1 === 'b' && q2 === 'c') {
		result = 'Tesouro Direto';
	}
	else if (q1 === 'b' && q2 === 'a') {
		result = 'Tesouro Direto';
	}
	else if (q1 === 'c' && q2 === 'b') {
		result = 'algum tipo de cartão de crédito mais caro, mesmo não sendo um investimento ele não tem um prazo definido e dependendo do tipo são caros.';
	} 
	document.getElementById('result').innerText = 'O tipo de investimento para você é:  ' + result;
}