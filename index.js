// Exemplo de curto-circuito em JavaScript

// Operador || (OU lógico) - Retorna o primeiro valor verdadeiro encontrado
const nome = "";
const usuario = nome || "Visitante";
console.log(usuario); // 'Visitante'

// Operador && (E lógico) - Retorna o primeiro valor falso encontrado
const logado = true;
logado && console.log("Usuário autenticado!"); // 'Usuário autenticado!'

// Definir valores padrão
const usuarioConfig = { corPreferida: "" };
const cor = usuarioConfig.corPreferida || "Azul";
console.log(cor); // 'Azul'

// Executar função somente se condição for verdadeira
function enviarNotificacao() {
  console.log("Notificação enviada!");
}
const usuarioAtivo = true;
usuarioAtivo && enviarNotificacao(); // 'Notificação enviada!'

// Evitar if desnecessários
const permissao = "admin";
function permitirAcesso() {
  console.log("Acesso permitido!");
}
permissao === "admin" && permitirAcesso(); // 'Acesso permitido!'
