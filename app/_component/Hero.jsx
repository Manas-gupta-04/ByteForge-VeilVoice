"use client";

export default function Hero() {
  return (
    <section className="bg-gray-100 py-6 px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 ">
          <img
            src="/hero.jpg" 
            alt="College Event"
            className="w-full h-[500px] rounded-lg shadow-lg"
          />
        </div>

        
        <div className="flex flex-col gap-6">
         
          <div className="bg-red-100 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold text-red-800 mb-2">
              Events at a Glance
            </h2>
            <p className="text-sm text-gray-800 mb-3">
              <strong>Aug 2025</strong> On 5th August 2025, a comprehensive
              session on the Training and Placement Cell was organized for
              students of the First Semester.
            </p>
            <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition">
              Read more
            </button>
          </div>

         
          <div className="bg-gray-200 p-4 rounded-lg shadow">
            <h2 className="text-lg font-bold text-blue-900 mb-4">
              Departmental upcoming events at a glance.
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {[
                "PHYSICS",
                "CHEMISTRY",
                "MATHEMATICS",
                "HUMANITIES",
                "CSE",
                "CIVIL",
                "ELECTRICAL",
                "ET&T",
                "MECHANICAL",
                "MBA",
                "BCA",
                "MCA",
                "BBA",
                "NSS",
                "TNP",
              ].map((dept, index) => (
                <button
                  key={index}
                  className="bg-white text-blue-700 px-2 py-2 text-sm rounded shadow hover:bg-blue-100 transition"
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
