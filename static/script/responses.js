const getBotResponse = (input) => {
  if (input == "Musculação") {
    return "De segunda a sexta das 5h às 1h30, aos sábados das 9h às 17h e domingos e feriados das 9h às 15h.";
  } else if (input == "SPARK") {
    return "De segunda a sexta de manhã e de tarde. Verificar horários específicos em https://dkacademia.com.br/quadro-de-aulas/";
  } else if (input == "EPOC") {
    return "De segunda a quinta às 15h. Verificar outros horários em https://dkacademia.com.br/quadro-de-aulas/";
  } else if (input == "Alongamentos") {
    return "De segunda a quarta. Verificar horários específicos em https://dkacademia.com.br/quadro-de-aulas/";
  } else if (input == "FITDANCE") {
    return "De segunda a sábado. Verificar horários específicos em https://dkacademia.com.br/quadro-de-aulas/";
  } else if (input == "Danças") {
    return "De segunda a sábado. Verificar horários específicos em https://dkacademia.com.br/quadro-de-aulas/";
  } else if (input == "Lutas") {
    return "De segunda a sábado. Verificar horários específicos em https://dkacademia.com.br/quadro-de-aulas/";
  } else if (input == "Não sei por onde começar...") {
    return "Então acesse o nosso site para saber mais a respeito: https://dkacademia.com.br";
  }

  //
  if (input == "Bom dia!") {
    return "Bom dia! Qual de nossas modalidades gostaria de pesquisar?";
  } else if (input == "Boa tarde!") {
    return "Boa tarde! Qual de nossas modalidades gostaria de pesquisar?";
  } else if (input == "Boa noite!") {
    return "Boa noite! Qual de nossas modalidades gostaria de pesquisar?";
  } else if (input == "Adorei!") {
    return "Que ótimo! Que outra modalidade gostaria de pesquisar?";
  } else if (input == "Obrigado") {
    return "De nada! Até mais!";
  } else {
    return "Não entendi! Tente novamente.";
  }
};
