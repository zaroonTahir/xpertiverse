import React from 'react'
import contactus from '../assets/images/contactus.jpg'
const Contactform = () => {
  return (
    <div className="w-full bg-black py-12 px-4 sm:px-6 lg:px-20 pt-30">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch gap-10">
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div>
              <h2 className="text-[#DC2828] text-[14px] border border-gray-500/40 px-3 py-2.5 inline-block">
                Contact us
              </h2>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-white">
            Get In
            </span>
          
           <span class="bg-linear-to-r from-[#F56716] to-[#EA4920] text-transparent bg-clip-text"> Touch
            </span>
          </h2>
              <p className="text-[#B2B3C7] text-[15px] mt-3">
                Have questions about our IT solutions? Our team is ready to help 
                you with consultation, project inquiries, or technical support.
              </p>
            </div>
            <div className="border border-gray-500/40 rounded-2xl p-6 bg-transparent h-full">
            <form className="flex flex-col gap-4">
  <div className="flex flex-col sm:flex-row gap-4">
    <div className="flex-1">
      <label className="text-[#E3E9FB] block mb-2">First Name</label>
      <input
        type="text"
        placeholder="First Name"
        className="w-full bg-[#080F20] border border-gray-500/40 text-[#B2B3C7] px-4 py-3 rounded-lg focus:outline-none focus:border-[#DC2828] transition-colors duration-300"
      />
    </div>
    <div className="flex-1">
      <label className="text-[#E3E9FB] block mb-2">Last Name</label>
      <input
        type="text"
        placeholder="Last Name"
        className="w-full bg-[#080F20] border border-gray-500/40 text-[#B2B3C7] px-4 py-3 rounded-lg focus:outline-none focus:border-[#DC2828] transition-colors duration-300"
      />
    </div>
  </div>

  <div className="flex flex-col sm:flex-row gap-4">
    <div className="flex-1">
      <label className="text-[#E3E9FB] block mb-2">Email Address</label>
      <input
        type="email"
        placeholder="Email Address"
        className="w-full bg-[#080F20] border border-gray-500/40 text-[#B2B3C7] px-4 py-3 rounded-lg focus:outline-none focus:border-[#DC2828] transition-colors duration-300"
      />
    </div>
    <div className="flex-1">
      <label className="text-[#E3E9FB] block mb-2">Subject</label>
      <input
        type="text"
        placeholder="Subject"
        className="w-full bg-[#080F20] border border-gray-500/40 text-[#B2B3C7] px-4 py-3 rounded-lg focus:outline-none focus:border-[#DC2828] transition-colors duration-300"
      />
    </div>
  </div>

  <div>
    <label className="text-[#E3E9FB] block mb-2">Comments</label>
    <textarea
      placeholder="Comments"
      className="w-full bg-[#080F20] border border-gray-500/40 text-[#B2B3C7] px-4 py-3 rounded-lg focus:outline-none focus:border-[#DC2828] transition-colors duration-300 h-32"
    ></textarea>
  </div>

  <button
    className="cursor-pointer bg-[#DC2828] text-white border border-transparent
      hover:border-[#DC2828] hover:text-[#DC2828] hover:bg-transparent
      rounded-md px-4 py-2 font-semibold transition duration-300 mt-2 self-start"
  >
    Send Message
  </button>
</form>

            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={contactus}
              alt="Contact"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contactform
