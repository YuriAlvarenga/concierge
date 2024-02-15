  // Função para calcular o status com base na hora atual e o horário de funcionamento
export const calculateStatus = (horario) => {
    const currentTime = new Date()
    const [openingTime, closingTime] = horario.split(' às ')
    const openingDateTime = new Date(currentTime)
    const closingDateTime = new Date(currentTime)
  
    // Convertendo as strings de horário para horas e minutos
    const openingHours = parseInt(openingTime.split(':')[0])
    const openingMinutes = parseInt(openingTime.split(':')[1])
    const closingHours = parseInt(closingTime.split(':')[0])
    const closingMinutes = parseInt(closingTime.split(':')[1])
  
    // Definindo a hora de abertura e de fechamento
    openingDateTime.setHours(openingHours, openingMinutes, 0)
    closingDateTime.setHours(closingHours, closingMinutes, 0)
  
    // Se a hora de fechamento for antes da hora de abertura, adiciona um dia à hora de fechamento
    if (closingDateTime < openingDateTime) {
      closingDateTime.setDate(closingDateTime.getDate() + 1)
    }
  
    // Verifica se a hora atual está entre a hora de abertura e de fechamento
    if (currentTime >= openingDateTime && currentTime <= closingDateTime) {
      return 'Aberto'
    } else {
      return 'Fechado'
    }
}
