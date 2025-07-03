import { CheckCircle } from 'lucide-react';

const ThankYou = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6">
      <div className="text-center max-w-xl">
        <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
        <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
        <p className="text-lg text-gray-300">
          Your message has been successfully sent. We truly appreciate your interest and will get back to you as soon as possible.
        </p>
      </div>
    </section>
  );
};

export default ThankYou;
