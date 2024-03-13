import { FaVk, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="h-screen flex flex-col justify-center lg:justify-end text-center">
      <h2 className="text-4xl font-bold">Contacts</h2>
      <p className="text-[18px] font-medium mt-10 mb-10">Want to know more or just chat? <br/> You are welcome</p>
      <a className="w-[315px] bg-black mx-auto text-white py-3 rounded-[50px] text-[18px]" href="#">Send message</a>
      <div className="flex justify-evenly mt-12 lg:mt-44">
        <FaVk className="hover:scale-110 duration-200" size={40} />
        <FaInstagram className="hover:scale-110 duration-200" size={40} />
        <FaTelegramPlane className="hover:scale-110 duration-200" size={40} />
        <FaWhatsapp className="hover:scale-110 duration-200" size={40} />
      </div>
      <p className="mt-12 lg:mt-20 pb-3">Like me on <br/> VKontakte, Instagram, Telegram, WhatsApp</p>
    </section>
  )
}

export default ContactPage