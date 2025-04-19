import React from "react";

const Contact = () => {
  return (
    <div className="py-10 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

      {/* ===== Official Contact Section ===== */}
      <section className="official-contact mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Official Contact Information</h2>
        <ul className="list-none space-y-3">
          <li>
            <strong>Official Website:</strong>{" "}
            <a
              href="https://scaler.com"
              className="text-blue-500 hover:underline"
            >
              https://scaler.com
            </a>
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@scaler.com" className="text-blue-500 hover:underline">
              info@scaler.com
            </a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+911234567890" className="text-blue-500 hover:underline">
              +91 123 456 7890
            </a>
          </li>
        </ul>
      </section>

      {/* ===== Faculty Contact Section ===== */}
      <section className="faculty-contact mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Faculty Contact</h2>
        <ul className="list-none space-y-3">
          <li>
            <strong>Anshuman Singh:</strong>{" "}
            <a href="mailto:anshuman.singh@scaler.com" className="text-blue-500 hover:underline">
              anshuman.singh@scaler.com
            </a>{" "}
            |{" "}
            <a href="tel:+911234567891" className="text-blue-500 hover:underline">
              +91 123 456 7891
            </a>
          </li>
          <li>
            <strong>Abhimanyu Singh:</strong>{" "}
            <a href="mailto:abhimanyu.singh@scaler.com" className="text-blue-500 hover:underline">
              abhimanyu.singh@scaler.com
            </a>{" "}
            |{" "}
            <a href="tel:+911234567892" className="text-blue-500 hover:underline">
              +91 123 456 7892
            </a>
          </li>
          <li>
            <strong>Manmeet Singh Akali:</strong>{" "}
            <a href="mailto:manmeet.singh@scaler.com" className="text-blue-500 hover:underline">
              manmeet.singh@scaler.com
            </a>
          </li>
        </ul>
      </section>

      {/* ===== Student Council Contact Section ===== */}
      <section className="student-council-contact mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-blue-700">Student Council</h2>
        <p className="text-lg mb-4">Meet your Student Council Members. They are here to represent and support you:</p>

        {/* Grid of Student Council Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="member-card bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-blue-700">President (Male)</h3>
            <p className="mt-2 text-blue-500">Hardik Jumnani</p>
          </div>
          <div className="member-card bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-blue-700">President (Female)</h3>
            <p className="mt-2 text-blue-500">Srinidhi Narendran</p>
          </div>
          <div className="member-card bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-blue-700">General Secretary</h3>
            <p className="mt-2 text-blue-500">Tirth Shah</p>
          </div>
          <div className="member-card bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-blue-700">Treasurer</h3>
            <p className="mt-2 text-blue-500">Ajij Uttam</p>
          </div>
          <div className="member-card bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-blue-700">CR (Batch A)</h3>
            <p className="mt-2 text-blue-500">Ashmit Kumar Nayak</p>
          </div>
          <div className="member-card bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold text-blue-700">CR (Batch B)</h3>
            <p className="mt-2 text-blue-500">Adam Sohe</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
