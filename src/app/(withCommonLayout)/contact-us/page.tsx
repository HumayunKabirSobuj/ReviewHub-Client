import ContactForm from "@/components/modules/HomePage/ContactForm";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Users,
  Shield,
  Star,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ArrowRight,
} from "lucide-react";


const ContactPage = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help with your account, reviews, or technical issues",
      contact: "support@reviewportal.com",
      action: "Send Email",
      color: "bg-black",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our customer service team",
      contact: "+8801747477746",
      action: "Call Now",
      color: "bg-black",
      lightColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available 24/7",
      action: "Start Chat",
      color: "bg-black",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
  ];

  const officeHours = [
    { day: "Monday - Friday", time: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", time: "10:00 AM - 4:00 PM EST" },
    { day: "Sunday", time: "Closed" },
  ];

  const departments = [
    {
      icon: Users,
      title: "General Support",
      description: "Account issues, general questions",
      email: "support@reviewportal.com",
    },
    {
      icon: Shield,
      title: "Content Moderation",
      description: "Report inappropriate content",
      email: "moderation@reviewportal.com",
    },
    {
      icon: Star,
      title: "Premium Support",
      description: "Premium review and payment issues",
      email: "premium@reviewportal.com",
    },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      url: "#",
      color: "hover:text-blue-600",
    },
    { icon: Twitter, name: "Twitter", url: "#", color: "hover:text-blue-400" },
    {
      icon: Instagram,
      name: "Instagram",
      url: "#",
      color: "hover:text-pink-600",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "#",
      color: "hover:text-blue-700",
    },
  ];

  return (
    <div className="min-h-screen max-w-6xl mx-auto bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br  text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get in Touch
            </h1>
            <p className="text-xl sm:text-2xl text-black mb-8 max-w-3xl mx-auto">
              We are here to help you make the most of your Product Review
              Portal experience
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-black">
                <Clock className="w-5 h-5" />
                <span>Response time: Within 24 hours</span>
              </div>
              <div className="flex items-center gap-2 text-black">
                <Users className="w-5 h-5" />
                <span>24/7 Live Chat Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Preferred Contact Method
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer multiple ways to get in touch. Pick the one that works best
            for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl h-[360px] shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex flex-col justify-between  h-[300px] ">
                  <div>
                    <div
                      className={`w-16 h-16 ${method.lightColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <method.icon className={`w-8 h-8 ${method.textColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <div className="space-y-3">
                      <p className={`font-semibold ${method.textColor}`}>
                        {method.contact}
                      </p>
                    </div>
                  </div>

                  <div>
                    <button
                      className={`w-full ${method.color} hover:opacity-90 text-white py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all duration-200`}
                    >
                      <span>{method.action}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Office Hours & Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Office Hours */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
            </div>
            <div className="space-y-4">
              {officeHours.map((schedule, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0"
                >
                  <span className="font-medium text-gray-900">
                    {schedule.day}
                  </span>
                  <span className="text-gray-600">{schedule.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Location</h3>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Headquarters
                </h4>
                <p className="text-gray-600">Dhaka Bangladesh</p>
              </div>
              <div className="pt-4">
                <button className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2">
                  <span>View on Google Maps</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Department Contacts */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Department Contacts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reach out to the right team for faster assistance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                    <dept.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <h3 className="font-bold text-gray-900">{dept.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{dept.description}</p>
                <a
                  href={`mailto:${dept.email}`}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  {dept.email}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  How do I create a review?
                </h3>
                <p className="text-gray-600">
                  Simply sign up, navigate to Create Review and fill out the
                  form. Your review will be submitted for admin approval.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  What are premium reviews?
                </h3>
                <p className="text-gray-600">
                  Premium reviews are in-depth, high-quality reviews that
                  require a one-time payment to access full content.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  How do I report inappropriate content?
                </h3>
                <p className="text-gray-600">
                  Use the report button on any review or contact our moderation
                  team directly.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Can I edit my reviews?
                </h3>
                <p className="text-gray-600">
                  Yes, you can edit your reviews before they are published.
                  After publication, contact support for changes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  How do payments work?
                </h3>
                <p className="text-gray-600">
                  We use secure payment gateways. Once payment is confirmed, you
                  get immediate access to premium content.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Is my data secure?
                </h3>
                <p className="text-gray-600">
                  Yes, we use industry-standard encryption and security measures
                  to protect your personal information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Additional Info */}
        <div className="border border-primary p-4 rounded-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
              <p className="text-gray-700 mb-6">
                Follow us on social media for updates, tips, and community
                highlights
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`w-12 h-12 bg-background hover:bg-accent rounded-lg flex items-center justify-center transition-colors duration-200 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
            <div className="text-center lg:text-right">
              <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
              <p className="text-gray-300 mb-4">
                Our live chat is available 24/7 for urgent issues
              </p>
              <button className="bg-primary hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200">
                Start Live Chat
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
