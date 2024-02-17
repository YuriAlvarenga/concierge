export const calculateStatus = (horario) => {
  // Divide o horário em hora de abertura e hora de fechamento
  const [horaAberturaStr, horaFechamentoStr] = horario.split(" às ")

  // Extrai as horas e minutos de abertura e fechamento
  const [horaAbertura, minutoAbertura] = horaAberturaStr.split(":").map(Number)
  const [horaFechamento, minutoFechamento] = horaFechamentoStr.split(":").map(Number)

  // Obtém a data e hora atual
  const agora = new Date()
  const horaAtual = agora.getHours()
  const minutoAtual = agora.getMinutes()

  // Verifica se o horário atual está dentro do intervalo de abertura
  if (
      (horaAbertura < horaFechamento && horaAtual >= horaAbertura && horaAtual < horaFechamento) ||
      (horaAbertura > horaFechamento && (horaAtual >= horaAbertura || horaAtual < horaFechamento)) ||
      (horaAbertura === horaFechamento && (horaAtual === horaAbertura && minutoAtual >= minutoAbertura && minutoAtual < minutoFechamento))
  ) {
      return "Aberto"
  } else {
      return "Fechado"
  }
}
