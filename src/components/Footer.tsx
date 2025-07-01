import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Dr. Serena Blake</h3>
            <p className="text-slate-300">
              Licensed Clinical Psychologist providing compassionate, evidence-based therapy 
              for anxiety, relationships, and trauma recovery.
            </p>
            <p className="text-sm text-slate-400">
              PsyD | 8 Years Experience | 500+ Sessions
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Anxiety & Stress Management</li>
              <li>Relationship Counseling</li>
              <li>Trauma Recovery</li>
              <li>Individual Therapy</li>
              <li>Couples Therapy</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(323) 555-0192</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>serena@blakepsychology.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>1287 Maplewood Drive<br />Los Angeles, CA 90026</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Office Hours</h4>
            <div className="space-y-2 text-slate-300">
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-1" />
                <div>
                  <p className="font-medium">In-Person</p>
                  <p className="text-sm">Tue & Thu, 10 AM–6 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="w-4 h-4 mt-1" />
                <div>
                  <p className="font-medium">Virtual (Zoom)</p>
                  <p className="text-sm">Mon, Wed & Fri, 1 PM–5 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Dr. Serena Blake, PsyD. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-slate-400 text-sm">
                Licensed Clinical Psychologist | California License #PSY12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;