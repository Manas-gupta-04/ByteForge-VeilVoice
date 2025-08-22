"use client";

export default function Courses() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-800">
          Courses Offered
        </h2>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 m-4 md:grid-cols-3 gap-6">
          {/* Course 1 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">B.Tech</h3>
            <p className="text-gray-600 text-sm">
              A 4-year undergraduate program in various engineering
              specializations with hands-on learning and industry exposure.
            </p>
          </div>

          {/* Course 2 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">MBA</h3>
            <p className="text-gray-600 text-sm">
              A 2-year postgraduate program focusing on business management,
              leadership skills, and entrepreneurship.
            </p>
          </div>

          {/* Course 3 */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">MCA</h3>
            <p className="text-gray-600 text-sm">
              A 3-year postgraduate program in computer applications, preparing
              students for careers in software and IT industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
