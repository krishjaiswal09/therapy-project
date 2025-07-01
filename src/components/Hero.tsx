import React from 'react';
import { Calendar, Video, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                Compassionate Care for
                <span className="text-teal-600 block">Mental Wellness</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed">
                Licensed clinical psychologist helping you overcome anxiety, strengthen relationships, 
                and heal from trauma with evidence-based therapy and personalized care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToContact}
                className="bg-teal-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Book a Free Consultation
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-all duration-200"
              >
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Calendar className="w-6 h-6 text-teal-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">8 Years Experience</p>
                  <p className="text-sm text-slate-600">500+ Sessions</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Video className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Virtual Sessions</p>
                  <p className="text-sm text-slate-600">Via Zoom</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-purple-100 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="font-semibold text-slate-800">Los Angeles</p>
                  <p className="text-sm text-slate-600">In-Person Available</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Professional therapist in a calming office environment"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-teal-200/20 to-blue-200/20 rounded-2xl transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;