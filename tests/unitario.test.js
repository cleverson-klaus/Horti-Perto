  function testar(descricao, callback) {
    try {
      callback();
      console.log(`✅ ${descricao}`);
    } catch (error) {
      console.error(`❌ ${descricao}: ${error.message}`);
    }
  }

  // Testes de potenciação
  testar("UNIT - Potenciação comum", () => {
    if (potencia(2, 3) !== 8) throw new Error("Esperado 8");
  });

  testar("UNIT - Potenciação expoente zero", () => {
    if (potencia(5, 0) !== 1) throw new Error("Esperado 1");
  });

  // Testes de raiz quadrada
  testar("UNIT - Raiz quadrada exata", () => {
    if (raizQuadrada(9) !== 3) throw new Error("Esperado 3");
  });

  testar("UNIT - Raiz quadrada de zero", () => {
    if (raizQuadrada(0) !== 0) throw new Error("Esperado 0");
  });

  // Teste de número par
  testar("UNIT - Verifica número par", () => {
    if (!ehPar(4)) throw new Error("Esperado true para número par");
    if (ehPar(5)) throw new Error("Esperado false para número ímpar");
  });

  // Teste de inversão de string
  testar("UNIT - Inversão de string", () => {
    if (inverterString("abc") !== "cba") throw new Error("Esperado 'cba'");
  });

  // Teste de palíndromo
  testar("UNIT - Verifica palíndromo", () => {
    if (!ehPalindromo("arara")) throw new Error("Esperado true para 'arara'");
    if (ehPalindromo("banana")) throw new Error("Esperado false para 'banana'");
  });

  // Teste de fatorial
  testar("UNIT - Fatorial de 5", () => {
    if (fatorial(5) !== 120) throw new Error("Esperado 120");
  });

  // Teste de máximo em array
  testar("UNIT - Máximo em array", () => {
    if (maxArray([1, 5, 3]) !== 5) throw new Error("Esperado 5");
  });

  // Teste de média em array
  testar("UNIT - Média de array", () => {
    if (mediaArray([2, 4, 6]) !== 4) throw new Error("Esperado 4");
  });

  // Teste de busca em array
  testar("UNIT - Busca valor em array", () => {
    if (!buscaArray([1, 2, 3], 2)) throw new Error("Esperado true para valor presente");
    if (buscaArray([1, 2, 3], 5)) throw new Error("Esperado false para valor ausente");
  });

  // Teste de remoção de duplicatas
  testar("UNIT - Remove duplicatas de array", () => {
    const resultado = removeDuplicatas([1, 2, 2, 3, 1]);
    if (resultado.length !== 3 || !resultado.includes(1) || !resultado.includes(2) || !resultado.includes(3)) {
      throw new Error("Esperado array sem duplicatas");
    }
  });

