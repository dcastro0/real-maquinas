
export const generateWhatsAppLink = (productName: string): string => {
  const PHONE_NUMBER = "5538999633303"; 
  const baseMessage = `Olá, tenho interesse no produto ${productName}. Poderia me enviar um orçamento?`;
    const encodedMessage = encodeURIComponent(baseMessage);
  
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
};