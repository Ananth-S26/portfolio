import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showAlert = (type, message) => {
    setAlert({
      show: true,
      type,
      message,
    });

    setTimeout(() => {
      setAlert({
        show: false,
        type: "",
        message: "",
      });
    }, 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // VALIDATIONS
    if (
      !formData.name.trim() &&
      !formData.email.trim() &&
      !formData.message.trim()
    ) {
      showAlert("error", "Please fill in all fields.");
      return;
    }

    if (!formData.name.trim()) {
      showAlert("error", "Name field is required.");
      return;
    }

    if (!formData.email.trim()) {
      showAlert("error", "Email address is required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      showAlert("error", "Please enter a valid email address.");
      return;
    }

    if (!formData.message.trim()) {
      showAlert("error", "Message field cannot be empty.");
      return;
    }

    if (formData.message.trim().length < 10) {
      showAlert(
        "error",
        "Message should contain at least 10 characters."
      );
      return;
    }

    // SEND EMAIL
    emailjs
      .send(
        "service_ananthportfolio",
        "ananth_portfolio-26",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "z-PFTwMjv9qB5qMnO"
      )
      .then(() => {
        showAlert("success", "Message sent successfully.");

        // RESET FORM
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        console.log(error);

        showAlert(
          "error",
          "Failed to send message. Please try again."
        );
      });
  };

  return (
    <section
      className="py-xl px-grid_gutter max-w-4xl mx-auto min-h-screen flex items-center mb-xl"
      id="contact"
    >
      <div className="glass-panel p-lg relative bg-white/40 dark:bg-zinc-900/40 border-primary/40 rounded-xl w-full">

        <div className="hud-bracket-tl"></div>
        <div className="hud-bracket-br"></div>

        {/* ALERT */}
        {alert.show && (
          <div
            className={`relative overflow-hidden mb-lg px-md py-sm rounded-lg border font-mono-code text-xs tracking-wide backdrop-blur-xl shadow-[0_0_25px_rgba(0,255,200,0.08)] transition-all duration-500 ${
              alert.type === "success"
                ? "border-primary/40 bg-primary/10 text-primary"
                : "border-red-500/40 bg-red-500/10 text-red-400"
            }`}
          >
            {/* GLOW LINE */}
            <div
              className={`absolute top-0 left-0 h-[2px] w-full animate-pulse ${
                alert.type === "success"
                  ? "bg-primary"
                  : "bg-red-400"
              }`}
            ></div>

            {/* CONTENT */}
            <div className="flex items-center gap-sm">
              <span className="material-symbols-outlined text-base">
                {alert.type === "success"
                  ? "verified"
                  : "warning"}
              </span>

              <span className="uppercase tracking-wider">
                {alert.message}
              </span>
            </div>

            {/* HUD CORNERS */}
            <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-current opacity-40"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-current opacity-40"></div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg items-center">

          {/* LEFT SIDE */}
          <div className="md:col-span-4 space-y-md">

            <div>
              <h2 className="font-display-lg text-3xl uppercase">
                Contact
              </h2>

              <p className="font-mono-code text-xs text-on-surface-variant mt-2">
                AVAILABLE_FOR_COLLABORATION
              </p>
            </div>

            <p className="text-sm text-on-surface-variant leading-relaxed">
              Interested in working together, building innovative
              systems, or discussing technology and engineering
              projects? Feel free to connect.
            </p>

            <div className="space-y-sm pt-sm">

              {/* EMAIL */}
              <div className="flex items-center gap-sm text-primary">
                <span className="material-symbols-outlined text-sm">
                  mail
                </span>

                <span className="text-xs font-mono-code">
                  ananthsivakumar.dev@gmail.com
                </span>
              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-sm text-secondary">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>

                <span className="text-xs font-mono-code">
                  Tamil Nadu, India
                </span>
              </div>

              {/* STATUS */}
              <div className="flex items-center gap-sm text-tertiary">
                <span className="material-symbols-outlined text-sm">
                  hub
                </span>

                <span className="text-xs font-mono-code">
                  OPEN_TO_INTERNSHIPS_AND_PROJECTS
                </span>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            className="md:col-span-8 space-y-md"
            onSubmit={handleSubmit}
          >

            {/* INPUTS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-md">

              <input
                className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:border-primary focus:ring-0 text-sm font-mono-code px-md py-sm transition-all rounded outline-none"
                placeholder="Your Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />

              <input
                className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:border-primary focus:ring-0 text-sm font-mono-code px-md py-sm transition-all rounded outline-none"
                placeholder="Email Address"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* MESSAGE */}
            <textarea
              className="w-full bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 focus:border-primary focus:ring-0 text-sm font-mono-code px-md py-sm transition-all resize-none rounded outline-none"
              placeholder="Write your message..."
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            {/* BUTTON */}
            <button
              className="w-full py-md bg-primary/10 border border-primary text-primary font-label-caps tracking-widest hover:bg-primary hover:text-white transition-all duration-300 glow-primary rounded"
              type="submit"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}