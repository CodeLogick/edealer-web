import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '+919884177607';
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=Hi%20eDealer%2C%20I%20need%20help`;

  return (
    <>
      {/* Fixed WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-secondary text-white rounded-full p-4 shadow-lg hover:shadow-xl hover:scale-110 transition z-40 flex items-center justify-center"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {/* Floating label */}
      <div className="fixed bottom-24 right-6 bg-dark text-white px-4 py-2 rounded-lg shadow-lg opacity-0 hover:opacity-100 transition z-40 whitespace-nowrap">
        Chat with us!
      </div>
    </>
  );
}