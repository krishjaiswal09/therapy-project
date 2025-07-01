import React from 'react';
import { Award, Users, Heart, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-slate-800">About Dr. Serena Blake</h2>
              <p className="text-xl text-slate-600">
                Licensed Clinical Psychologist committed to your mental wellness journey
              </p>
            </div>

            <div className="prose prose-lg text-slate-700 leading-relaxed">
              <p>
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, 
                with eight years of experience and over 500 client sessions. She blends evidence-based 
                approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, 
                personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              <p>
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, 
                Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-teal-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-800">Licensed PsyD</h3>
                  <p className="text-slate-600 text-sm">Clinical Psychology Doctorate</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-800">500+ Sessions</h3>
                  <p className="text-slate-600 text-sm">Extensive clinical experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-pink-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-800">Evidence-Based</h3>
                  <p className="text-slate-600 text-sm">CBT & Mindfulness approaches</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-800">Personalized Care</h3>
                  <p className="text-slate-600 text-sm">Tailored to your unique needs</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-lg">
              <h3 className="font-semibold text-slate-800 mb-2">Office Hours</h3>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span>In-person sessions:</span>
                  <span className="font-medium">Tue & Thu, 10 AM–6 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Virtual sessions (Zoom):</span>
                  <span className="font-medium">Mon, Wed & Fri, 1 PM–5 PM</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="/image.png"
                alt="Dr. Serena Blake, licensed clinical psychologist"
                className="rounded-2xl shadow-2xl w-full h-[700px] object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-teal-200/20 rounded-2xl transform -translate-x-4 -translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;