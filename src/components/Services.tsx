import React from 'react';
import { Brain, Users2, Heart, DollarSign } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Anxiety & Stress Management',
      description: 'Effective strategies to manage anxiety, panic attacks, and chronic stress using evidence-based cognitive-behavioral techniques and mindfulness practices.',
      image: 'https://images.pexels.com/photos/3958379/pexels-photo-3958379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users2,
      title: 'Relationship Counseling',
      description: 'Strengthen communication, resolve conflicts, and build deeper connections in your relationships through proven therapeutic approaches.',
      image: 'https://images.pexels.com/photos/5699475/pexels-photo-5699475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: Heart,
      title: 'Trauma Recovery',
      description: 'Compassionate support for healing from traumatic experiences using specialized trauma-informed therapeutic techniques.',
      image: 'https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-slate-800">Services & Specialties</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive mental health services tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-80`}></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-white p-3 rounded-full">
                      <IconComponent className="w-6 h-6 text-slate-700" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="bg-green-100 p-3 rounded-full">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-800">Session Fees</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Individual Session</h4>
              <p className="text-3xl font-bold text-teal-600 mb-2">$200</p>
              <p className="text-sm text-slate-600">50-minute session focused on your personal goals</p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-slate-800 mb-2">Couples Session</h4>
              <p className="text-3xl font-bold text-blue-600 mb-2">$240</p>
              <p className="text-sm text-slate-600">75-minute session for relationship counseling</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
            <p className="text-sm text-slate-700">
              <strong>Insurance:</strong> I do not accept insurance directly, but a superbill is provided for self-submission to your insurance provider for potential reimbursement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;