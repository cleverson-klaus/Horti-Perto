// Criação de container oculto para testes
const testContainer = document.createElement('div');
testContainer.style.display = 'none';
testContainer.id = 'test-container';
document.body.appendChild(testContainer);

function runComponentTests() {
  testar("COMPONENT - Formulário deve estar presente na página", () => {
    const form = document.getElementById("form");
    if (!form) throw new Error("Formulário não encontrado");
  });

  testar("COMPONENT - Inputs devem receber valores corretamente", () => {
    const input1 = document.getElementById("num1");
    const input2 = document.getElementById("num2");

    input1.value = "10";
    input2.value = "5";

    if (input1.value !== "10" || input2.value !== "5") {
      throw new Error("Inputs não aceitaram valores corretamente");
    }
  });

  testar("COMPONENT - Formulário dispara evento de submit", () => {
    const form = document.getElementById("form");
    let chamado = false;

    const listener = (e) => {
      chamado = true;
      e.preventDefault();
      form.removeEventListener("submit", listener);
    };

    form.addEventListener("submit", listener);
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));

    if (!chamado) throw new Error("Evento de submit não foi chamado");
  });

  testar("COMPONENT - Input type text aceita valor", () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.value = 'abc';
    testContainer.appendChild(input);
    if (input.value !== 'abc') throw new Error('Input text não aceitou valor');
    testContainer.removeChild(input);
  });

  testar("COMPONENT - Checkbox marca e desmarca", () => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    testContainer.appendChild(checkbox);
    checkbox.checked = true;
    if (!checkbox.checked) throw new Error('Checkbox não marcou');
    checkbox.checked = false;
    if (checkbox.checked) throw new Error('Checkbox não desmarcou');
    testContainer.removeChild(checkbox);
  });

  testar("COMPONENT - Select muda valor", () => {
    const select = document.createElement('select');
    const opt1 = document.createElement('option');
    opt1.value = '1';
    opt1.text = 'Um';
    const opt2 = document.createElement('option');
    opt2.value = '2';
    opt2.text = 'Dois';
    select.appendChild(opt1);
    select.appendChild(opt2);
    testContainer.appendChild(select);
    select.value = '2';
    if (select.value !== '2') throw new Error('Select não mudou valor');
    testContainer.removeChild(select);
  });

  testar("COMPONENT - Textarea aceita texto", () => {
    const textarea = document.createElement('textarea');
    textarea.value = 'Texto de teste';
    testContainer.appendChild(textarea);
    if (textarea.value !== 'Texto de teste') throw new Error('Textarea não aceitou texto');
    testContainer.removeChild(textarea);
  });

  testar("COMPONENT - Radio buttons funcionam corretamente", () => {
    const radio1 = document.createElement('input');
    radio1.type = 'radio';
    radio1.name = 'grupo';
    radio1.value = 'a';
    const radio2 = document.createElement('input');
    radio2.type = 'radio';
    radio2.name = 'grupo';
    radio2.value = 'b';
    testContainer.appendChild(radio1);
    testContainer.appendChild(radio2);
    radio1.checked = true;
    if (!radio1.checked) throw new Error('Radio1 não marcou');
    radio2.checked = true;
    if (!radio2.checked || radio1.checked) throw new Error('Radio2 não marcou corretamente');
    testContainer.removeChild(radio1);
    testContainer.removeChild(radio2);
  });

  testar("COMPONENT - Label associa ao input", () => {
    const input = document.createElement('input');
    input.type = 'text';
    input.id = 'input-label';
    const label = document.createElement('label');
    label.htmlFor = 'input-label';
    label.textContent = 'Teste';
    testContainer.appendChild(input);
    testContainer.appendChild(label);
    if (label.htmlFor !== input.id) throw new Error('Label não associou ao input');
    testContainer.removeChild(input);
    testContainer.removeChild(label);
  });

  testar("COMPONENT - Botão dispara evento de click", () => {
    const button = document.createElement('button');
    let clicado = false;
    button.addEventListener('click', () => { clicado = true; });
    testContainer.appendChild(button);
    button.click();
    if (!clicado) throw new Error('Botão não disparou evento de click');
    testContainer.removeChild(button);
  });

  testar("COMPONENT - Elemento é removido do DOM", () => {
    const div = document.createElement('div');
    testContainer.appendChild(div);
    testContainer.removeChild(div);
    if (testContainer.contains(div)) throw new Error('Elemento não foi removido do DOM');
  });

  testar("COMPONENT - Formulário valida campo obrigatório", () => {
    const form = document.createElement('form');
    const input = document.createElement('input');
    input.required = true;
    form.appendChild(input);
    testContainer.appendChild(form);
    let validou = form.checkValidity();
    if (validou) throw new Error('Formulário validou campo obrigatório vazio');
    input.value = 'ok';
    validou = form.checkValidity();
    if (!validou) throw new Error('Formulário não validou campo preenchido');
    testContainer.removeChild(form);
  });

  testar("COMPONENT - Dispara evento customizado", () => {
    const div = document.createElement('div');
    let chamado = false;
    div.addEventListener('meu-evento', () => { chamado = true; });
    testContainer.appendChild(div);
    div.dispatchEvent(new CustomEvent('meu-evento'));
    if (!chamado) throw new Error('Evento customizado não foi disparado');
    testContainer.removeChild(div);
  });
}

// Limpeza do container de teste após os testes
window.addEventListener('unload', () => {
  if (testContainer.parentNode) {
    testContainer.parentNode.removeChild(testContainer);
  }
});
