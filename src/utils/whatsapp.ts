/**
 * Official WhatsApp Business details for Local Rise Web Studio
 */
export const WHATSAPP_PHONE_RAW = '919597482991';
export const WHATSAPP_PHONE_DISPLAY = '+91 95974 82991';
export const WHATSAPP_LABEL = 'WhatsApp Business';

export const DEFAULT_WHATSAPP_MESSAGE =
  "Hi Local Rise Web Studio, I'm interested in your services. I'd like to discuss my project requirements and pricing.";

/**
 * Creates a valid HTTPS WhatsApp click-to-chat URL with safely encoded message
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const text = customMessage?.trim() || DEFAULT_WHATSAPP_MESSAGE;
  return `https://wa.me/${WHATSAPP_PHONE_RAW}?text=${encodeURIComponent(text)}`;
}

/**
 * Generates specific inquiry text for a service package
 */
export function getPackageQuoteMessage(packageName: string, price: string, isStarting = false): string {
  const priceDisplay = isStarting ? `${price}+` : price;
  return `Hi Local Rise Web Studio, I'm interested in the ${packageName} package starting at ${priceDisplay}. Please share the details and final quotation.`;
}
