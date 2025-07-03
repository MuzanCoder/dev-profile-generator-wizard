import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const { toast } = useToast();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      message: `${form.subject}\n\n${form.message}`
    };

    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      if (result.success) {
        toast({
          title: '✅ Message Sent!',
          description: 'Thanks for reaching out. Redirecting you...',
          duration: 2000
        });

        setTimeout(() => navigate('/thank-you'), 2000);
      } else {
        toast({
          variant: 'destructive',
          title: '❌ Message Failed',
          description: 'Something went wrong. Please try again later.'
        });
      }
    } catch (err) {
      toast({
        variant: 'destructive',
        title: '🚫 Server Error',
        description: 'Backend is not responding or misconfigured.'
      });
      console.error(err);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm excited to start my career and open to entry-level opportunities, internships, and collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                As a fresh graduate, I'm eager to learn and contribute to meaningful projects.
                I'm looking for opportunities where I can grow my skills while adding value to your team.
                Let's discuss how I can help bring your ideas to life!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-400">sandeepprajapati7900@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-400">+91 72650 75618</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-400">Mumbai, Delhi, Gurugram</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-semibold mb-4">Find Me Online</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/MuzanCoder" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/sandeep-prajapati-450934263/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <Input name="firstName" value={form.firstName} onChange={handleChange} type="text" placeholder="Sandeep" className="bg-slate-700 border-slate-600 text-white placeholder-gray-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <Input name="lastName" value={form.lastName} onChange={handleChange} type="text" placeholder="Prajapati" className="bg-slate-700 border-slate-600 text-white placeholder-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Sandy@email.com" className="bg-slate-700 border-slate-600 text-white placeholder-gray-400" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Subject</label>
                <Input name="subject" value={form.subject} onChange={handleChange} type="text" placeholder="Job Opportunity / Collaboration" className="bg-slate-700 border-slate-600 text-white placeholder-gray-400" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea name="message" value={form.message} onChange={handleChange} placeholder="I'd love to hear about opportunities or discuss potential collaborations..." rows={5} className="bg-slate-700 border-slate-600 text-white placeholder-gray-400 resize-none" />
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
