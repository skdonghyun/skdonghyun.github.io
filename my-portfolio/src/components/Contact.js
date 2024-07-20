import React from 'react';

function Contact() {
  return (
    <section id="contact" className="mb-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">연락처</h2>
      <div className="text-center">
        <p className="mb-2">
          <span className="font-semibold text-blue-600">이메일:</span> your.email@example.com
        </p>
        <p className="mb-2">
          <span className="font-semibold text-blue-600">LinkedIn:</span> linkedin.com/in/yourprofile
        </p>
        <p className="mb-2">
          <span className="font-semibold text-blue-600">GitHub:</span> github.com/yourusername
        </p>
      </div>
    </section>
  );
}

export default Contact;