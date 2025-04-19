import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Feed = () => {
  const navigate = useNavigate();
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [showQueryForm, setShowQueryForm] = useState(false);
  const [showComplaintForm, setShowComplaintForm] = useState(false);
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  const [queryText, setQueryText] = useState('');
  const [complaintText, setComplaintText] = useState('');
  const [feedbackText, setFeedbackText] = useState('');

  const handleQuerySubmit = () => {
    if (queryText.trim()) {
      alert('Your query has been submitted!');
      setQueryText('');
    }
  };

  const handleComplaintSubmit = () => {
    if (complaintText.trim()) {
      alert('Your complaint has been submitted!');
      setComplaintText('');
    }
  };

  const handleFeedbackSubmit = () => {
    if (feedbackText.trim()) {
      alert('Your feedback has been submitted!');
      setFeedbackText('');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start py-10 px-4 md:px-20">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to the Feed Page
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-600 text-center mb-10 max-w-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Here you will find all the updates and notifications regarding college activities and events. Stay tuned and never miss out!
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10 w-full max-w-6xl">
        {/* Event Notifications */}
        <motion.div
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white shadow-lg p-6 rounded-xl cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl"
          onClick={() => setShowEventDetails(!showEventDetails)}
          whileHover={{ rotate: 2 }}
          whileTap={{ scale: 0.97 }}
        >
          <h2 className="text-xl font-bold mb-2 text-center">Event Notifications</h2>
          <p className="text-sm text-center">Click here to view upcoming events and their schedules.</p>
          {showEventDetails && (
            <div className="mt-4 bg-white p-4 rounded-lg text-gray-800 shadow-inner transition duration-300">
              <h3 className="text-md font-semibold mb-2">Final Club Calendar</h3>
              <p className="text-sm mb-2">Click below to view the complete club event schedule:</p>
              <a
                href="https://docs.google.com/spreadsheets/d/13DKnzTOpezzisZnTW7EhGVZdE8CgVWHpE6B4B6lyDsM/edit?gid=2007073382#gid=2007073382"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline text-sm"
              >
                View Final Club Calendar
              </a>
            </div>
          )}
        </motion.div>

        {/* Exams */}
        <motion.div
          className="bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg p-6 rounded-xl flex flex-col justify-center items-center cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl"
          onClick={() => navigate('/exams')}
          whileHover={{ rotate: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <h2 className="text-xl font-bold mb-2 text-center">Upcoming Exams</h2>
          <p className="text-sm text-center">Click here to view upcoming exams and schedules.</p>
        </motion.div>

        {/* Interview Updates */}
        <motion.div
          className="bg-gradient-to-r from-teal-400 to-amber-500 text-white shadow-lg p-6 rounded-xl flex flex-col justify-center items-center cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl"
          onClick={() => navigate('/interviews')}
          whileHover={{ rotate: 2 }}
          whileTap={{ scale: 0.97 }}
        >
          <h2 className="text-xl font-bold mb-2 text-center">Interview/Viva Updates</h2>
          <p className="text-sm text-center">Click here to view updates on upcoming interviews and vivas.</p>
        </motion.div>

        {/* Student Queries */}
        <motion.div
          className="bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg p-6 rounded-xl flex flex-col cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl"
          onClick={() => setShowQueryForm(!showQueryForm)}
          whileHover={{ rotate: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <h2 className="text-xl font-bold mb-2 text-center">Student Queries</h2>
          <p className="text-sm text-center">Ask questions or find answers shared by other students here.</p>
          {showQueryForm && (
            <div className="mt-4 bg-white p-4 rounded-lg text-gray-800 shadow-inner" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-md font-semibold mb-2">Raise Your Query</h3>
              <textarea
                className="w-full border border-gray-300 p-2 rounded-md text-sm mb-2"
                rows="4"
                placeholder="Type your query here..."
                value={queryText}
                onChange={(e) => setQueryText(e.target.value)}
              />
              <button
                className="bg-purple-500 text-white px-4 py-1 rounded hover:bg-purple-600 text-sm"
                onClick={handleQuerySubmit}
              >
                Submit
              </button>
            </div>
          )}
        </motion.div>

        {/* Complaints */}
        <motion.div
          className="bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg p-6 rounded-xl flex flex-col cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl"
          onClick={() => setShowComplaintForm(!showComplaintForm)}
          whileHover={{ rotate: 2 }}
          whileTap={{ scale: 0.97 }}
        >
          <h2 className="text-xl font-bold mb-2 text-center">Complaints</h2>
          <p className="text-sm text-center">Raise any concerns or issues that need attention from CRs or faculty.</p>
          {showComplaintForm && (
            <div className="mt-4 bg-white p-4 rounded-lg text-gray-800 shadow-inner" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-md font-semibold mb-2">Raise a Complaint</h3>
              <textarea
                className="w-full border border-gray-300 p-2 rounded-md text-sm mb-2"
                rows="4"
                placeholder="Type your complaint here..."
                value={complaintText}
                onChange={(e) => setComplaintText(e.target.value)}
              />
              <button
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 text-sm"
                onClick={handleComplaintSubmit}
              >
                Submit
              </button>
            </div>
          )}
        </motion.div>

        {/* Feedback */}
        <motion.div
          className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white shadow-lg p-6 rounded-xl flex flex-col cursor-pointer transition duration-300 hover:scale-105 hover:shadow-xl"
          onClick={() => setShowFeedbackForm(!showFeedbackForm)}
          whileHover={{ rotate: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <h2 className="text-xl font-bold mb-2 text-center">Feedback</h2>
          <p className="text-sm text-center">Submit your feedback about facilities, teaching, or overall experience.</p>
          {showFeedbackForm && (
            <div className="mt-4 bg-white p-4 rounded-lg text-gray-800 shadow-inner" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-md font-semibold mb-2">Submit Feedback</h3>
              <textarea
                className="w-full border border-gray-300 p-2 rounded-md text-sm mb-2"
                rows="4"
                placeholder="Type your feedback here..."
                value={feedbackText}
                onChange={(e) => setFeedbackText(e.target.value)}
              />
              <button
                className="bg-indigo-500 text-white px-4 py-1 rounded hover:bg-indigo-600 text-sm"
                onClick={handleFeedbackSubmit}
              >
                Submit
              </button>
            </div>
          )}
        </motion.div>
      </div>

      {/* Important Links */}
      <motion.div
        className="w-full max-w-4xl mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Important Links & Resources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            href="https://sst-student-council.notion.site/1c4dfe6e33018008bafcdffd9dd1a163?v=1c4dfe6e3301803ebcdb000c80d5f96f&pvs=73"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 hover:border-blue-400 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-lg font-bold text-blue-600">Student Council Notion Page</h3>
            <p className="text-sm text-gray-600 mt-1">All updates, reports, and initiatives by the student council.</p>
          </a>
          <a
            href="https://forms.gle/mSb9FgXbJt5ZuBEw7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border border-gray-200 hover:border-green-400 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300"
          >
            <h3 className="text-lg font-bold text-green-600">Raise an Issue (Google Form)</h3>
            <p className="text-sm text-gray-600 mt-1">Report any issue to the council or college team confidentially.</p>
          </a>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <p className="text-gray-500">
          Need help?{' '}
          <span
            onClick={() => navigate('/contact')}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            Reach out to us
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Feed;
