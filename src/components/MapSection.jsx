export default function MapSection() {
  return (
    <section className="w-full py-0 bg-[#05070D]">
      <div className="w-full h-[450px] rounded-2xl overflow-hidden relative">
        {/* Google Map */}
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56146.74625519991!2d70.26280293968846!3d28.41407730060158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39375c713b45db39%3A0x28af23c1672a0170!2sRahim%20Yar%20Khan%2C%20Pakistan!5e0!3m2!1sen!2s!4v1763540738863!5m2!1sen!2s"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        {/* Gray overlay */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
      </div>
    </section>
  );
}
