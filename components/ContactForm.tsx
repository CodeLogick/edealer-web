import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSuccess(true);
        reset();
        setTimeout(() => setSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          type="text"
          placeholder="Your Name"
          {...register('name', { required: 'Name is required' })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <input
          type="email"
          placeholder="Your Email"
          {...register('email', { required: 'Email is required' })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <input
          type="tel"
          placeholder="Your Phone"
          {...register('phone', { required: 'Phone is required' })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <textarea
          placeholder="Your Message"
          rows={5}
          {...register('message', { required: 'Message is required' })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-primary resize-none"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
      </div>

      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Message sent successfully! We'll get back to you soon.
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary/90 transition disabled:opacity-50 flex items-center justify-center gap-2"
      >
        <Send size={20} /> {loading ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}