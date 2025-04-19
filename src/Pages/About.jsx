import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-blue-100 via-blue-50 to-white py-16 px-8 max-w-7xl mx-auto rounded-lg shadow-xl min-h-screen overflow-x-hidden">
      <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-12 text-shadow-lg">About ScalerConnect</h1>

      {/* Introduction Section */}
      <section className="intro mb-12 max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-blue-800 mb-6">What is ScalerConnect?</h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          <span className="font-semibold text-blue-700">ScalerConnect</span> is your campus companion! A student-driven platform designed to streamline communication between students and college representatives. Whether it’s raising feedback about the mess food, or bringing academic or lifestyle queries, you can address all concerns through ScalerConnect, ensuring timely resolutions and transparency.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed mt-6">
          The platform is designed to improve student engagement by creating a space where students can voice concerns and stay updated with real-time notifications about upcoming events, academic schedules, and essential announcements.
        </p>
      </section>

      {/* Purpose Section */}
      <section className="purpose mb-12 max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-blue-800 mb-6">Our Purpose</h2>
        <div className="text-xl text-gray-700 leading-relaxed space-y-6">
          <p>
            The primary goal of <span className="font-semibold text-blue-700">ScalerConnect</span> is to provide a seamless communication platform between students and the administration. Whether you’re looking to raise a query about your academics, report an issue with the mess, or discuss improvements in campus facilities, we ensure your concerns are heard and addressed quickly.
          </p>
          <p>
            For students joining next year, ScalerConnect will be a critical tool to stay informed, raise issues, and engage in conversations with faculty and peers. It’s all about making your student experience as smooth as possible, with up-to-date information always at your fingertips.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features mb-12 max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-blue-800 mb-6">Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-xl text-gray-700">
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-blue-50 transform">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Student Feedback</h3>
            <p>Submit feedback, complaints, and queries regarding academics, mess food, campus facilities, and more with ease, and track responses seamlessly.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-blue-50 transform">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Real-time Responses</h3>
            <p>Get timely responses from college representatives, ensuring all your concerns are addressed promptly and professionally.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-blue-50 transform">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Event Notifications</h3>
            <p>Receive notifications about upcoming events and campus activities, keeping you informed about all major events like fests, cultural activities, and academic sessions.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-blue-50 transform">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">User-Friendly Interface</h3>
            <p>Navigate through the platform with ease. Everything is designed to be intuitive and user-friendly for smooth interaction.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-blue-50 transform">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Secure & Private</h3>
            <p>Your privacy and security are paramount. ScalerConnect ensures that your personal data is handled with the utmost care and confidentiality.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 hover:bg-blue-50 transform">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">Instant Support</h3>
            <p>Get assistance whenever you need it. The support system is always available to help you navigate through any queries or platform-related issues.</p>
          </div>
        </div>
      </section>

      {/* How it Helps Section */}
      <section className="how-it-helps mb-12 max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-blue-800 mb-6">How It Helps You</h2>
        <p className="text-xl text-gray-700 leading-relaxed">
          ScalerConnect helps students stay engaged with the campus and ensures that their voices are heard. Whether you're submitting a complaint about mess food or sharing your feedback on a campus event, the platform ensures that all feedback reaches the right people. 
        </p>
        <p className="text-xl text-gray-700 leading-relaxed mt-6">
          For incoming students, ScalerConnect provides a direct line to the administration and various college representatives, allowing you to stay connected with campus life and ensuring that all your questions are answered even before you join.
        </p>
      </section>

      {/* Event and Notification Section */}
      <section className="event-notifications mb-12 max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold text-blue-800 mb-6">Event Announcements & Notifications</h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-4">
          ScalerConnect ensures that you never miss an update! Receive instant notifications about events, announcements, and important campus-related news. Be it exam schedules, cultural events, or administrative updates, you will always stay informed.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed mb-4">
          The platform also facilitates academic discussions where students can engage with peers and faculty, ensuring better communication and timely assistance.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed">
          Real-time updates will help you prepare for events and exams, and you'll never miss any changes or new opportunities that arise within the campus.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="cta text-center mt-16">
        <h3 className="text-3xl font-semibold text-blue-700 mb-4">Join the ScalerConnect Community</h3>
        <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
          Whether you are a current student or a future one, ScalerConnect is the key to staying connected with your college community. Stay informed, stay engaged, and raise concerns for a smoother college life.
        </p>
        <Link
          to="/loginregister"
          className="inline-block px-8 py-4 bg-blue-700 text-white font-semibold text-xl rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 hover:scale-105"
        >
          Get Started Now
        </Link>
      </section>
    </div>
  );
};

export default About;
