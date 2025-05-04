// import Image from "next/image";
// import {
//   Activity,
//   ArrowRight,
//   BookOpen,
//   Building,
//   ChevronDown,
//   ChevronRight,
//   FileText,
//   Users,
// } from "lucide-react";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="relative w-full min-h-screen bg-white overflow-hidden px-4 md:px-8 lg:px-16 py-8 md:py-12">
//       {/* Decorative waves */}
//       {/* 1st section */}
//       <div className="max-w-7xl mx-auto">
//         {/* Tagline */}
//         <p className="text-gray-600 mb-4 md:mb-6">
//           &quot;Be happy stay happy&quot;
//         </p>

//         {/* Main content */}
//         <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
//           {/* Left column - Text content */}
//           <div className="w-full lg:w-1/2 space-y-6">
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 leading-tight">
//               Happy-Your partner in <br />
//               seamless <span className="text-blue-500">deliveries.</span>
//             </h1>
//             <p className="text-gray-600 max-w-md">
//               Lorem ipsum is simply dummy text of the printing and typesetting
//               industry. Lorem Ipsum has been the industry&apos;s
//             </p>
//             <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-all">
//               <span>अभी शुरू करें</span>
//               <ArrowRight className="w-5 h-5" />
//             </button>
//           </div>

//           {/* Right column - Cards */}
//           <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
//             {/* Purple card */}
//             <div className="bg-purple-500 text-white p-6 rounded-xl col-span-1 md:col-span-2 md:max-w-sm">
//               <div className="flex flex-col gap-4">
//                 <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
//                   <span className="text-white">📦</span>
//                 </div>
//                 <h3 className="text-lg font-medium">
//                   सामान पहुँच जाए मालूम चाहिए
//                 </h3>
//                 <div className="space-y-2">
//                   <div className="flex items-center gap-2">
//                     <div className="w-3 h-3 rounded-full bg-pink-400"></div>
//                     <p className="text-sm">सामान पहुँच</p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-3 h-3 rounded-full bg-pink-400"></div>
//                     <p className="text-sm">सामान पहुँच जाए</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Red card */}
//             <div className="bg-red-400 text-white p-4 rounded-xl">
//               <div className="flex flex-col gap-2">
//                 <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center">
//                   <span className="text-white">⏱️</span>
//                 </div>
//                 <h3 className="text-sm font-medium">
//                   समय पर पहुंचे समझे मालूम
//                 </h3>
//               </div>
//             </div>

//             {/* Yellow card */}
//             <div className="bg-yellow-400 text-white p-4 rounded-xl">
//               <div className="flex flex-col gap-2">
//                 <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center">
//                   <span className="text-white">🔒</span>
//                 </div>
//                 <h3 className="text-sm font-medium">
//                   सुरक्षित पहुंचे सामान आपका सुरक्षित रहेगा
//                 </h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* 2nd section */}
//       <div className="container mx-auto px-4 py-12 max-w-6xl">
//         {/* Header section */}
//         <div className="text-center mb-12">
//           <p className="text-blue-500 font-medium mb-2">পরিষেবাগুলি</p>
//           <h1 className="text-2xl md:text-3xl font-bold mb-4">
//             আপনাদের জন্য আমাদের উন্নত পরিষেবাগুলি
//           </h1>
//           <p className="text-gray-500 max-w-3xl mx-auto mb-2">
//             আমাদের সকল পরিষেবাগুলি আপনার প্রয়োজনীয় কাজে সাহায্য করবে এবং সময়
//             বাঁচাতে সাহায্য করবে।
//           </p>
//           <p className="text-gray-500 max-w-3xl mx-auto">
//             এই সকল পরিষেবাগুলি বা সেবা সমূহ আপনার ব্যবসায়িক সফল পরিচালনায়
//             সহায়ক হবে। আপনাকে ধন্যবাদ
//           </p>
//         </div>

//         {/* Services grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Service 1 */}
//           <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//             <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
//               {/* <Home className="w-6 h-6 text-red-500" /> */}
//             </div>
//             <h3 className="font-bold text-lg mb-2">পোর্টালগুলি</h3>
//             <p className="text-gray-500 mb-4">
//               আমাদের সকল পরিষেবাগুলি আপনার প্রয়োজনীয় কাজে সাহায্য করবে এবং
//               সময় বাঁচাতে সাহায্য করবে।
//             </p>
//             <Link
//               href="#"
//               className="text-blue-500 flex items-center text-sm font-medium"
//             >
//               আরও জানুন <ArrowRight className="w-4 h-4 ml-1" />
//             </Link>
//           </div>

//           {/* Service 2 */}
//           <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//               <Users className="w-6 h-6 text-blue-500" />
//             </div>
//             <h3 className="font-bold text-lg mb-2">ডিজিটাল সার্ভিসিং</h3>
//             <p className="text-gray-500 mb-4">
//               আমাদের সকল পরিষেবাগুলি আপনার প্রয়োজনীয় কাজে সাহায্য করবে এবং
//               সময় বাঁচাতে সাহায্য করবে।
//             </p>
//             <Link
//               href="#"
//               className="text-blue-500 flex items-center text-sm font-medium"
//             >
//               আরও জানুন <ArrowRight className="w-4 h-4 ml-1" />
//             </Link>
//           </div>

//           {/* Service 3 */}
//           <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//             <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
//               <Activity className="w-6 h-6 text-green-500" />
//             </div>
//             <h3 className="font-bold text-lg mb-2">ডিজাইন</h3>
//             <p className="text-gray-500 mb-4">
//               আমাদের সকল পরিষেবাগুলি আপনার প্রয়োজনীয় কাজে সাহায্য করবে এবং
//               সময় বাঁচাতে সাহায্য করবে।
//             </p>
//             <Link
//               href="#"
//               className="text-blue-500 flex items-center text-sm font-medium"
//             >
//               আরও জানুন <ArrowRight className="w-4 h-4 ml-1" />
//             </Link>
//           </div>

//           {/* Service 4 */}
//           <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//             <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
//               <BookOpen className="w-6 h-6 text-yellow-500" />
//             </div>
//             <h3 className="font-bold text-lg mb-2">
//               এটিএম/টি নেটওয়ার্ক মনিটরিং
//             </h3>
//             <p className="text-gray-500 mb-4">
//               আমাদের সকল পরিষেবাগুলি আপনার প্রয়োজনীয় কাজে সাহায্য করবে এবং
//               সময় বাঁচাতে সাহায্য করবে।
//             </p>
//             <Link
//               href="#"
//               className="text-blue-500 flex items-center text-sm font-medium"
//             >
//               আরও জানুন <ArrowRight className="w-4 h-4 ml-1" />
//             </Link>
//           </div>

//           {/* Service 5 */}
//           <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//             <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
//               <Building className="w-6 h-6 text-red-500" />
//             </div>
//             <h3 className="font-bold text-lg mb-2">কোম্পানি</h3>
//             <p className="text-gray-500 mb-4">
//               আমাদের সকল পরিষেবাগুলি আপনার প্রয়োজনীয় কাজে সাহায্য করবে এবং
//               সময় বাঁচাতে সাহায্য করবে।
//             </p>
//             <Link
//               href="#"
//               className="text-blue-500 flex items-center text-sm font-medium"
//             >
//               আরও জানুন <ArrowRight className="w-4 h-4 ml-1" />
//             </Link>
//           </div>

//           {/* Service 6 */}
//           <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
//             <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
//               <FileText className="w-6 h-6 text-blue-500" />
//             </div>
//             <h3 className="font-bold text-lg mb-2">কার্যক্রম</h3>
//             <p className="text-gray-500 mb-4">
//               আমাদের সকল পরিষেবাগুলি আপনার প্রয়োজনীয় কাজে সাহায্য করবে এবং
//               সময় বাঁচাতে সাহায্য করবে।
//             </p>
//             <Link
//               href="#"
//               className="text-blue-500 flex items-center text-sm font-medium"
//             >
//               আরও জানুন <ArrowRight className="w-4 h-4 ml-1" />
//             </Link>
//           </div>
//         </div>
//       </div>
//       {/* 3nd section */}
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         {/* Top section */}
//         <div className="bg-gray-50 p-6 rounded-lg mb-12">
//           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//             <div className="space-y-2">
//               <h2 className="text-xl font-bold">
//                 আপনার রসনা উন্নত করতে{" "}
//                 <span className="text-blue-500">যোগাযোগ করুন</span>
//               </h2>
//               <p className="text-sm text-gray-600">
//                 এটি ইতিবাচক ভাবে আপনার এবং আপনি যারা কে পরিষেবা প্রদানের মাধ্যমে
//                 সাহায্য করিবেন।
//                 <br />
//                 করুন এটা।
//               </p>
//             </div>
//             <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors">
//               <span>এখনই শুরু করুন</span>
//               <ArrowRight className="w-4 h-4" />
//             </button>
//           </div>
//         </div>

//         {/* Main section */}
//         <div className="mt-8">
//           <h3 className="text-blue-500 uppercase text-sm font-medium mb-2">
//             পদ্ধতি
//           </h3>
//           <h2 className="text-2xl font-bold mb-8">কি এবং কিভাবে কাজ করে !</h2>

//           <div className="flex flex-col md:flex-row gap-8 items-center">
//             {/* Left side - Illustration */}
//             <div className="w-full md:w-2/5">
//               <div className="relative h-64 md:h-80">
//                 <Image
//                   src="/images/review.png"
//                   alt="Delivery truck with location markers"
//                   fill
//                   className="object-contain"
//                 />
//               </div>
//             </div>

//             {/* Right side - Text content */}
//             <div className="w-full md:w-3/5 space-y-4">
//               <div className="border-l-4 border-blue-500 pl-4 py-1">
//                 <p className="text-sm text-gray-600">
//                   এটি ইতিবাচক ভাবে আপনার এবং আপনি যারা কে পরিষেবা প্রদানের
//                   মাধ্যমে সাহায্য করিবেন।
//                   <br />
//                   করুন এটা।
//                 </p>
//               </div>

//               <p className="text-gray-700 text-sm leading-relaxed">
//                 আমাদের এই সার্ভিস প্ল্যাটফর্ম দ্বারা ডিজিটাল/অনলাইন মাধ্যমে যে
//                 কোনো ডিজিটাল সেবা প্রদান করা হয়। এগুলোতে সার্ভিস প্রদানের জন্য।
//                 আমাদের প্ল্যাটফর্মে প্রতিষ্ঠিত সার্ভিস সেন্টার এবং সেবা
//                 প্রদানকারী সকল সার্ভিস প্রোভাইডার এর মাধ্যমে প্রতিষ্ঠিত।
//                 ডিজিটালাইজড প্ল্যাটফর্মের এবং সার্ভিস সেন্টার গুলোর মাধ্যমে
//                 সার্ভিসগুলো প্রদান করা হয়। আমাদের প্ল্যাটফর্মে সার্ভিস
//                 প্রদানকারী সকল সার্ভিস প্রোভাইডার এর মাধ্যমে প্রতিষ্ঠিত।
//               </p>

//               <p className="text-gray-700 text-sm leading-relaxed">
//                 আমাদের ডিজিটাল সার্ভিস প্ল্যাটফর্ম এবং সার্ভিস সেন্টার গুলোর
//                 মাধ্যমে সার্ভিসগুলো প্রদান করা হয়। আমাদের প্ল্যাটফর্মে সার্ভিস
//                 প্রদানকারী সকল সার্ভিস প্রোভাইডার এর মাধ্যমে প্রতিষ্ঠিত।
//                 ডিজিটালাইজড প্ল্যাটফর্মের এবং সার্ভিস সেন্টার গুলোর মাধ্যমে
//                 সার্ভিসগুলো প্রদান করা হয়। আমাদের প্ল্যাটফর্মে সার্ভিস
//                 প্রদানকারী সকল সার্ভিস প্রোভাইডার এর মাধ্যমে প্রতিষ্ঠিত। এবং
//                 সার্ভিস সেন্টার গুলোর মাধ্যমে সার্ভিসগুলো।
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* FAQ Section */}
//         <div className="bg-gray-50 py-12 px-4">
//           <div className="max-w-3xl mx-auto">
//             {/* FAQ Header */}
//             <h2 className="text-2xl font-bold text-center mb-8">
//               প্রায়শই জিজ্ঞাসিত প্রশ্ন এবং উত্তর
//             </h2>

//             {/* FAQ Accordion */}
//             <div className="space-y-4">
//               {/* First FAQ - Expanded */}
//               <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//                 <div className="p-4 flex justify-between items-center cursor-pointer">
//                   <h3 className="font-medium">
//                     আমি কিভাবে মুক্ত ডিজিটাল সেবা নিতে পারবো এবাং কিভাবে এটা কাজ
//                     করবে?
//                   </h3>
//                   <ChevronDown className="h-5 w-5 text-gray-500" />
//                 </div>
//                 <div className="px-4 pb-4">
//                   <p className="text-gray-600 text-sm">
//                     আমাদের ডিজিটালাইজড প্ল্যাটফর্ম এবং সার্ভিস সেন্টার গুলোর
//                     মাধ্যমে সার্ভিসগুলো প্রদান করা হয়। আমাদের প্ল্যাটফর্মে
//                     সার্ভিস প্রদানকারী সকল সার্ভিস প্রোভাইডার এর মাধ্যমে
//                     প্রতিষ্ঠিত। ডিজিটালাইজড প্ল্যাটফর্মের এবং সার্ভিস সেন্টার
//                     গুলোর মাধ্যমে সার্ভিসগুলো প্রদান করা হয়।
//                   </p>
//                 </div>
//               </div>

//               {/* Second FAQ - Collapsed */}
//               <div className="bg-white rounded-lg shadow-sm">
//                 <div className="p-4 flex justify-between items-center cursor-pointer">
//                   <h3 className="font-medium">
//                     আমি কিভাবে মুক্ত ডিজিটাল সেবা নিতে পারবো এবাং কিভাবে এটা কাজ
//                     করবে?
//                   </h3>
//                   <ChevronRight className="h-5 w-5 text-gray-500" />
//                 </div>
//               </div>

//               {/* Third FAQ - Collapsed */}
//               <div className="bg-white rounded-lg shadow-sm">
//                 <div className="p-4 flex justify-between items-center cursor-pointer">
//                   <h3 className="font-medium">
//                     আমি কিভাবে মুক্ত ডিজিটাল সেবা নিতে পারবো এবাং কিভাবে এটা কাজ
//                     করবে?
//                   </h3>
//                   <ChevronRight className="h-5 w-5 text-gray-500" />
//                 </div>
//               </div>

//               {/* Fourth FAQ - Collapsed */}
//               <div className="bg-white rounded-lg shadow-sm">
//                 <div className="p-4 flex justify-between items-center cursor-pointer">
//                   <h3 className="font-medium">
//                     আমি কিভাবে মুক্ত ডিজিটাল সেবা নিতে পারবো এবাং কিভাবে এটা কাজ
//                     করবে?
//                   </h3>
//                   <ChevronRight className="h-5 w-5 text-gray-500" />
//                 </div>
//               </div>
//             </div>

//             {/* Statistics Section */}
//             <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
//               {/* Statistic 1 - Blue */}
//               <div className="text-center">
//                 <p className="text-blue-500 text-2xl font-bold">500+</p>
//                 <p className="text-sm text-gray-600">সার্ভিস ব্যবহারকারী</p>
//               </div>

//               {/* Statistic 2 - Green */}
//               <div className="text-center">
//                 <p className="text-green-500 text-2xl font-bold">500+</p>
//                 <p className="text-sm text-gray-600">সার্ভিস ব্যবহারকারী</p>
//               </div>

//               {/* Statistic 3 - Purple */}
//               <div className="text-center">
//                 <p className="text-purple-500 text-2xl font-bold">500+</p>
//                 <p className="text-sm text-gray-600">সার্ভিস ব্যবহারকারী</p>
//               </div>

//               {/* Statistic 4 - Red */}
//               <div className="text-center">
//                 <p className="text-red-500 text-2xl font-bold">500+</p>
//                 <p className="text-sm text-gray-600">সার্ভিস ব্যবহারকারী</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Contact Form */}

//         <div className="max-w-6xl mx-auto px-4 py-16">
//       <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
//         {/* Left Column - Text and Illustration */}
//         <div className="w-full md:w-1/2 space-y-6">
//           <div>
//             <p className="text-blue-500 text-sm mb-2">যোগাযোগ</p>
//             <h2 className="text-2xl md:text-3xl font-bold mb-4">
//               সরাসরি আমাদের সাথে
//               <br />
//               যোগাযোগ করুন !
//             </h2>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               আমরা অনুসন্ধানমূলক তথ্য বা একটি বাস্তবায় প্রকল্প কথা আলোচনা করুন।
//               <br />
//               আমরা আপনার যোগাযোগ করার পরিকল্পনার জন্য নিচের ফর্মটি ব্যবহার
//               <br />
//               করুন।
//             </p>
//           </div>

        
//         </div>

//         {/* Right Column - Contact Form */}
//         <div className="w-full md:w-1/2">
//           <div className="bg-white rounded-lg shadow-md p-6">
//             {/* Colorful top border */}
//             <div className="flex h-1 mb-6">
//               <div className="w-1/4 bg-red-500"></div>
//               <div className="w-1/4 bg-orange-400"></div>
//               <div className="w-1/4 bg-yellow-400"></div>
//               <div className="w-1/4 bg-blue-500"></div>
//             </div>

//             <form className="space-y-4">
//               {/* Name Input */}
//               <div>
//                 <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
//                   <span className="text-gray-400 mr-2">👤</span>
//                   <input type="text" placeholder="আপনার নাম লিখুন" className="w-full outline-none text-sm" />
//                 </div>
//               </div>

//               {/* Email Input */}
//               <div>
//                 <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
//                   <span className="text-gray-400 mr-2">✉️</span>
//                   <input type="email" placeholder="আপনার ইমেইল লিখুন" className="w-full outline-none text-sm" />
//                 </div>
//               </div>

//               {/* Message Input */}
//               <div>
//                 <div className="flex items-start border border-gray-300 rounded-md px-3 py-2">
//                   <span className="text-gray-400 mr-2 mt-1">💬</span>
//                   <textarea
//                     placeholder="আপনার বার্তা লিখুন"
//                     rows={5}
//                     className="w-full outline-none text-sm resize-none"
//                   ></textarea>
//                 </div>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md flex items-center justify-center gap-2 transition-colors"
//               >
//                 <span>পাঠিয়ে দিন</span>
//                 <ArrowRight className="w-4 h-4" />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//       </div>
//     </div>
//   );
// }


import Image from "next/image"
import {
  Activity,
  ArrowRight,
  BookOpen,
  Building,
  ChevronDown,
  ChevronRight,
  FileText,
  Star,
  Users,
} from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden px-4 md:px-8 lg:px-16 py-8 md:py-12">
      {/* Hero section */}
      <div className="max-w-7xl mx-auto">
        {/* Tagline */}
        <p className="text-gray-600 mb-4 md:mb-6">"Discover, Review, Connect"</p>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          {/* Left column - Text content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              ReviewHub - Your trusted <br />
              source for <span className="text-purple-600">honest reviews.</span>
            </h1>
            <p className="text-gray-600 max-w-md">
              Join our community of reviewers and consumers to discover the best products, share your experiences, and
              make informed purchasing decisions.
            </p>
            <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full transition-all">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Right column - Cards */}
          <div className="w-full lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Purple card */}
            <div className="bg-purple-600 text-white p-6 rounded-xl col-span-1 md:col-span-2 md:max-w-sm">
              <div className="flex flex-col gap-4">
                <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-medium">Discover Trusted Reviews</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                    <p className="text-sm">Verified User Reviews</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                    <p className="text-sm">Premium Content Access</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Red card */}
            <div className="bg-red-400 text-white p-4 rounded-xl">
              <div className="flex flex-col gap-2">
                <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="text-white">⏱️</span>
                </div>
                <h3 className="text-sm font-medium">Timely & Relevant Reviews</h3>
              </div>
            </div>

            {/* Yellow card */}
            <div className="bg-yellow-400 text-white p-4 rounded-xl">
              <div className="flex flex-col gap-2">
                <div className="bg-white/20 w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="text-white">🔒</span>
                </div>
                <h3 className="text-sm font-medium">Secure & Trusted Platform</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services section */}
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        {/* Header section */}
        <div className="text-center mb-12">
          <p className="text-purple-600 font-medium mb-2">Our Services</p>
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Premium Features for Our Community</h1>
          <p className="text-gray-500 max-w-3xl mx-auto mb-2">
            Our comprehensive suite of features helps you discover, review, and connect with products and services that
            matter to you.
          </p>
          <p className="text-gray-500 max-w-3xl mx-auto">
            These tools are designed to enhance your experience and help you make informed purchasing decisions.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Product Reviews</h3>
            <p className="text-gray-500 mb-4">
              Read and write detailed reviews on a wide range of products across multiple categories.
            </p>
            <Link href="/reviews" className="text-purple-600 flex items-center text-sm font-medium">
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Community Engagement</h3>
            <p className="text-gray-500 mb-4">
              Connect with other users, vote on reviews, and participate in discussions about products.
            </p>
            <Link href="/community" className="text-purple-600 flex items-center text-sm font-medium">
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Activity className="w-6 h-6 text-green-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Premium Content</h3>
            <p className="text-gray-500 mb-4">
              Access in-depth expert reviews and exclusive content with our premium subscription.
            </p>
            <Link href="/premium" className="text-purple-600 flex items-center text-sm font-medium">
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6 text-yellow-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Category Exploration</h3>
            <p className="text-gray-500 mb-4">
              Browse reviews by categories like Gadgets, Clothing, Books, and more to find exactly what you're looking
              for.
            </p>
            <Link href="/categories" className="text-purple-600 flex items-center text-sm font-medium">
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
              <Building className="w-6 h-6 text-red-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Verified Purchases</h3>
            <p className="text-gray-500 mb-4">
              Identify reviews from verified purchasers to ensure you're getting authentic feedback.
            </p>
            <Link href="/verified" className="text-purple-600 flex items-center text-sm font-medium">
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-blue-500" />
            </div>
            <h3 className="font-bold text-lg mb-2">Review Analytics</h3>
            <p className="text-gray-500 mb-4">
              Track the performance of your reviews and see how they're helping others make decisions.
            </p>
            <Link href="/analytics" className="text-purple-600 flex items-center text-sm font-medium">
              Learn More <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* How it works section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Top section - CTA */}
        <div className="bg-gray-50 p-6 rounded-lg mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-2">
              <h2 className="text-xl font-bold">
                Enhance your shopping experience with <span className="text-purple-600">honest reviews</span>
              </h2>
              <p className="text-sm text-gray-600">
                Join thousands of users who make better purchasing decisions with our community-driven reviews.
                <br />
                Start today and never regret a purchase again.
              </p>
            </div>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-full flex items-center gap-2 transition-colors">
              <span>Get Started Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Main section - How it works */}
        <div className="mt-8">
          <h3 className="text-purple-600 uppercase text-sm font-medium mb-2">Our Process</h3>
          <h2 className="text-2xl font-bold mb-8">How Our Review Platform Works!</h2>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Left side - Illustration */}
            <div className="w-full md:w-2/5">
              <div className="relative h-64 md:h-80">
                <Image
                  src="/images/review.png"
                  alt="Product review illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Right side - Text content */}
            <div className="w-full md:w-3/5 space-y-4">
              <div className="border-l-4 border-purple-600 pl-4 py-1">
                <p className="text-sm text-gray-600">
                  Our platform connects consumers with honest, detailed reviews to help them make informed decisions.
                  <br />
                  Here's how it works.
                </p>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                Our review platform allows users to create accounts and share their experiences with products across
                various categories. Users can rate products on a scale of 1-5 stars, provide detailed reviews, and even
                include information about where they purchased the item. The community can then vote on these reviews
                and engage in discussions through comments.
              </p>

              <p className="text-gray-700 text-sm leading-relaxed">
                For those looking for more in-depth analysis, we offer premium reviews created by experts and
                experienced users. These premium reviews provide comprehensive insights and are available for a small
                fee. All content is moderated by our admin team to ensure it meets our community guidelines, providing
                you with a trustworthy platform for all your product research needs.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-50 py-12 px-4 mt-16 rounded-lg">
          <div className="max-w-3xl mx-auto">
            {/* FAQ Header */}
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>

            {/* FAQ Accordion */}
            <div className="space-y-4">
              {/* First FAQ - Expanded */}
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 flex justify-between items-center cursor-pointer">
                  <h3 className="font-medium">How do I create an account and start writing reviews?</h3>
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                </div>
                <div className="px-4 pb-4">
                  <p className="text-gray-600 text-sm">
                    Creating an account is simple! Click the "Sign Up" button in the top right corner, fill out the
                    registration form with your email and password, and verify your email address. Once registered, you
                    can navigate to any product page and click "Write a Review" to share your experience. Your review
                    will be submitted for moderation and published once approved.
                  </p>
                </div>
              </div>

              {/* Second FAQ - Collapsed */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 flex justify-between items-center cursor-pointer">
                  <h3 className="font-medium">What are premium reviews and how can I access them?</h3>
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                </div>
              </div>

              {/* Third FAQ - Collapsed */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 flex justify-between items-center cursor-pointer">
                  <h3 className="font-medium">How does the voting system work for reviews?</h3>
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                </div>
              </div>

              {/* Fourth FAQ - Collapsed */}
              <div className="bg-white rounded-lg shadow-sm">
                <div className="p-4 flex justify-between items-center cursor-pointer">
                  <h3 className="font-medium">How can I become an admin or moderator on the platform?</h3>
                  <ChevronRight className="h-5 w-5 text-gray-500" />
                </div>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Statistic 1 - Purple */}
              <div className="text-center">
                <p className="text-purple-600 text-2xl font-bold">10,000+</p>
                <p className="text-sm text-gray-600">Active Users</p>
              </div>

              {/* Statistic 2 - Green */}
              <div className="text-center">
                <p className="text-green-500 text-2xl font-bold">25,000+</p>
                <p className="text-sm text-gray-600">Product Reviews</p>
              </div>

              {/* Statistic 3 - Blue */}
              <div className="text-center">
                <p className="text-blue-500 text-2xl font-bold">500+</p>
                <p className="text-sm text-gray-600">Premium Reviews</p>
              </div>

              {/* Statistic 4 - Red */}
              <div className="text-center">
                <p className="text-red-500 text-2xl font-bold">50+</p>
                <p className="text-sm text-gray-600">Product Categories</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {/* Left Column - Text and Illustration */}
            <div className="w-full md:w-1/2 space-y-6">
              <div>
                <p className="text-purple-600 text-sm mb-2">Contact Us</p>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Get in Touch With
                  <br />
                  Our Team!
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Have questions about our platform or need assistance with your account?
                  <br />
                  Want to discuss potential partnerships or advertising opportunities?
                  <br />
                  Use the form below to reach out to us.
                </p>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full md:w-1/2">
              <div className="bg-white rounded-lg shadow-md p-6">
                {/* Colorful top border */}
                <div className="flex h-1 mb-6">
                  <div className="w-1/4 bg-red-500"></div>
                  <div className="w-1/4 bg-orange-400"></div>
                  <div className="w-1/4 bg-yellow-400"></div>
                  <div className="w-1/4 bg-purple-600"></div>
                </div>

                <form className="space-y-4">
                  {/* Name Input */}
                  <div>
                    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                      <span className="text-gray-400 mr-2">👤</span>
                      <input type="text" placeholder="Your Name" className="w-full outline-none text-sm" />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <div className="flex items-center border border-gray-300 rounded-md px-3 py-2">
                      <span className="text-gray-400 mr-2">✉️</span>
                      <input type="email" placeholder="Your Email" className="w-full outline-none text-sm" />
                    </div>
                  </div>

                  {/* Message Input */}
                  <div>
                    <div className="flex items-start border border-gray-300 rounded-md px-3 py-2">
                      <span className="text-gray-400 mr-2 mt-1">💬</span>
                      <textarea
                        placeholder="Your Message"
                        rows={5}
                        className="w-full outline-none text-sm resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-md flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
