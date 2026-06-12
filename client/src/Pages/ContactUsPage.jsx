//Components import
import Footer from '../Components/Footer';
import AppNavbar from '../Components/Header';
//framer motion import
import { motion } from 'framer-motion';
//icons import
import { Mail, MapPin, Phone } from 'lucide-react';
//third party toast import
import toast from 'react-hot-toast';
const ContactUsPage = () => {
  //method to render the toast
  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append('access_key', 'e71a65d6-b342-4f83-94c9-fd41094dca66');

    const toastId = toast.loading('Sending message...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const res = await response.json();

      if (res.success) {
        toast.success('Form submitted successfully!', {
          id: toastId,
        });

        event.target.reset();
      } else {
        toast.error('Failed to submit form', {
          id: toastId,
        });
      }
    } catch (error) {
      toast.error(error.message, {
        id: toastId,
      });
    }
  };
  return (
    <main>
      <AppNavbar />
      <section
        aria-label="Contact hero"
        className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#eef2f5] px-4 text-center dark:bg-black"
      >
        {/* Eyebrow */}
        <p className="relative z-10 mb-8 text-[11px] font-medium tracking-[0.3em] text-slate-400 uppercase">
          Velaforge &mdash; Contact
        </p>

        {/* Headline */}
        <h1 className="relative z-10 max-w-4xl font-serif text-[clamp(3rem,8vw,5.5rem)] leading-[1.05] text-slate-900 dark:text-white">
          <span className="font-normal">Let&rsquo;s Build </span>

          <span className="relative inline-block">
            {/* Blue glow */}
            <span
              aria-hidden="true"
              className="bg-primary/20 absolute top-1/2 hidden h-[240%] w-[240%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl dark:block"
            />

            <em className="relative font-normal text-slate-400 italic">
              What&rsquo;s
            </em>
          </span>

          <span className="font-normal"> Next.</span>
        </h1>

        {/* Subheading */}
        <p className="relative z-10 mt-7 max-w-md text-[1.0625rem] leading-relaxed text-slate-500">
          Tell us about your idea. We&rsquo;ll help transform it into a
          world&#8209;class digital experience.
        </p>

        {/* CTA */}
        <a
          href="#contact-form"
          className="dark:hover:border-primary dark:hover:shadow-primary relative z-10 mt-12 inline-flex items-center justify-center rounded-full border px-8 py-4 text-[0.9375rem] font-medium backdrop-blur-sm transition-all duration-300 select-none hover:scale-105 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 dark:border-gray-900 dark:bg-black dark:text-white"
          aria-label="Start a conversation with Velaforge"
        >
          Start a Conversation
        </a>

        {/* Scroll indicator */}
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        >
          <span className="text-[10px] tracking-[0.25em] text-slate-400 uppercase">
            Scroll
          </span>
          <div className="relative h-14 w-px overflow-hidden bg-slate-300">
            <span className="absolute inset-0 origin-top animate-[growY_1.2s_ease-out_forwards] bg-slate-400" />
          </div>
        </div>
      </section>
      <section
        className="relative overflow-hidden bg-white py-24 dark:bg-[#020814]"
        id="contact-form"
      >
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="mx-auto max-w-7xl px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="font-serif text-4xl font-light tracking-tight text-slate-900 md:text-6xl dark:text-white">
              Share your vision with us.
            </h2>
          </motion.div>

          {/* Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.005 }}
            className="mx-auto max-w-4xl rounded-[32px] border border-slate-200 bg-white/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl md:p-14 dark:border-white/10 dark:bg-[#071A2F]/80 dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]"
          >
            <form onSubmit={onSubmit} className="space-y-8">
              {/* Row 1 */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-xs font-medium tracking-[0.2em] text-slate-500 dark:text-slate-400"
                  >
                    FULL NAME
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Alex Rivera"
                    required
                    className="h-14 w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 text-slate-900 transition-all duration-300 outline-none placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-[#10233C] dark:text-white dark:placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-xs font-medium tracking-[0.2em] text-slate-500 dark:text-slate-400"
                  >
                    EMAIL ADDRESS
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="alex@company.com"
                    required
                    className="h-14 w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 text-slate-900 transition-all duration-300 outline-none placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-[#10233C] dark:text-white dark:placeholder:text-slate-500"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="company"
                    className="mb-3 block text-xs font-medium tracking-[0.2em] text-slate-500 dark:text-slate-400"
                  >
                    COMPANY
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Acme Corp"
                    className="h-14 w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 text-slate-900 transition-all duration-300 outline-none placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-[#10233C] dark:text-white dark:placeholder:text-slate-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="projectType"
                    className="mb-3 block text-xs font-medium tracking-[0.2em] text-slate-500 dark:text-slate-400"
                  >
                    PROJECT TYPE
                  </label>

                  <select
                    id="projectType"
                    name="projectType"
                    className="h-14 w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 text-slate-900 transition-all duration-300 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-[#10233C] dark:text-white"
                  >
                    <option>Select an option</option>
                    <option>Web Development</option>
                    <option>Mobile App</option>
                    <option>UI/UX Design</option>
                    <option>AI Solutions</option>
                    <option>Branding</option>
                  </select>
                </div>
              </div>

              {/* Budget */}
              <div>
                <label
                  htmlFor="budget"
                  className="mb-3 block text-xs font-medium tracking-[0.2em] text-slate-500 dark:text-slate-400"
                >
                  BUDGET RANGE
                </label>

                <select
                  id="budget"
                  name="budget"
                  className="h-14 w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 text-slate-900 transition-all duration-300 outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-[#10233C] dark:text-white"
                >
                  <option>Select an option</option>
                  <option>$1k - $5k</option>
                  <option>$5k - $10k</option>
                  <option>$10k - $25k</option>
                  <option>$25k+</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-3 block text-xs font-medium tracking-[0.2em] text-slate-500 dark:text-slate-400"
                >
                  TELL US ABOUT YOUR PROJECT
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="What are you building? What problem does it solve? What's your timeline?"
                  className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-slate-900 transition-all duration-300 outline-none placeholder:text-slate-400 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-[#10233C] dark:text-white dark:placeholder:text-slate-500"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="rounded-full bg-[#c97509] px-10 py-4 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:bg-[#dd840d] active:scale-95"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
      <section className="dark:bg-surface w-full bg-gradient-to-b from-slate-50 to-white px-6 py-24 dark:bg-none">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="mt-3 font-serif text-4xl text-slate-900 md:text-5xl dark:text-white">
            Reach us directly.
          </h2>
        </div>

        {/* Cards Container */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {/* Email */}
          <div className="rounded-2xl bg-white p-8 text-center shadow-md transition hover:shadow-xl dark:bg-black">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-500 dark:bg-black dark:text-white">
              <Mail />
            </div>
            <p className="text-xs tracking-widest text-slate-400 uppercase">
              Email
            </p>
            <p className="mt-2 text-lg font-medium text-slate-900 dark:text-white">
              velaforgetech@gmail.com
            </p>
            <p className="mt-1 text-sm text-slate-500">
              We respond within 24 hours
            </p>
          </div>

          {/* Phone */}
          <div className="rounded-2xl bg-white p-8 text-center shadow-md transition hover:shadow-xl dark:bg-black">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-500 dark:bg-black dark:text-white">
              <Phone />
            </div>
            <p className="text-xs tracking-widest text-slate-400 uppercase">
              Phone
            </p>
            <p className="mt-2 text-lg font-medium text-slate-900 dark:text-white">
              +91 73825 48937
            </p>
            <p className="mt-1 text-sm text-slate-500">Mon-Fri, 9am-6pm PT</p>
          </div>
          <div className="rounded-2xl bg-white p-8 text-center shadow-md transition hover:shadow-xl dark:bg-black">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-500 dark:bg-black dark:text-white">
              <MapPin />
            </div>
            <p className="text-xs tracking-widest text-slate-400 uppercase">
              Location
            </p>
            <p className="mt-2 text-lg font-medium text-slate-900 dark:text-white">
              Remote and Worldwide
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ContactUsPage;
