# controle-Escolar

OQUE È: Software simples para ajudar a controlar e definir as notas dos alunos. 

# Tecnologias e Ferramentas

O projeto controle-Escolar foi desenvolvido utilizando as seguintes tecnologias e ferramentas:

Figma: Usado para criar o design e os protótipos das telas, garantindo uma interface intuitiva antes da codificação.

VS Code: O editor de código-fonte utilizado para desenvolver e organizar o projeto.

HTML: Estrutura fundamental para a criação das páginas web (index.html e tela-notas.html).

CSS: Estilização das páginas, incluindo as cores, layout e o design responsivo para se adaptar a diferentes tamanhos de tela.

JavaScript: Lógica principal do site, responsável por funcionalidades como a validação de login e o cálculo das notas.

# Fluxo de Desenvolvimento

O desenvolvimento do projeto seguiu as seguintes etapas:

1. Design e Prototipagem (Figma)
Inicialmente, o design das telas de login e de notas foi criado no Figma. Isso permitiu visualizar o layout e a experiência do usuário, tanto para desktop quanto para dispositivos móveis, antes de começar a codificar. O protótipo ajudou a definir a estrutura e os elementos visuais, como o esquema de cores e a disposição dos campos.

2. Página de Login
A página de login foi a primeira a ser implementada.

HTML (index.html): Criada a estrutura básica com campos para nome e senha.

CSS (style.css e responsivo-login.css): Estilização da página para o tema escolar, com cores verde e cinza. A responsividade foi ajustada para garantir uma boa visualização em dispositivos móveis. * JavaScript (index.js): Implementada uma lógica simples de validação. O usuário só consegue acessar a próxima tela se inserir o nome ("fulano") e a senha ("12345") corretos. Se as credenciais estiverem erradas, uma mensagem de "login invalido" é exibida.

3. Página de Controle de Notas
Após a conclusão do login, a página de notas foi desenvolvida.

HTML (tela-notas.html): Criada a estrutura para exibir o nome e CPF do aluno, uma tabela para as notas e um botão para calcular.

CSS (notas.css e responsivo-notas.css): Estilização dos elementos da página. A responsividade foi ajustada para que a tabela de notas se adapte de forma clara em telas menores. * JavaScript (notas.js): Esta foi a parte mais complexa. O código realiza as seguintes funções:

Coleta de Dados: Pega os valores das notas (Avaliação, Participação e EAD) inseridas pelo usuário.

Cálculo da Média: Soma as notas e verifica se o total é maior ou igual a 6.

Exibição do Resultado: Mostra a soma total e informa se o aluno foi "Aprovado" (em verde) ou "Reprovado" (em vermelho).

Validação de Entrada: Limita os valores que o usuário pode inserir em cada campo de nota, evitando valores acima do permitido (4 para Avaliação e Participação, e 2 para EAD).


O desenvolvimento desta parte contou com o uso de documentações e ferramentas de IA para otimizar e refinar o código, especialmente nas funções de validação e cálculo.