// Preview for "Handmade Jewelry" / Nadaura (facebook.com/profile.php?id=61581333184331, instagram.com/nadaura__bd)
// No WhatsApp number on the page, so orders go through Messenger.
// Product names and prices are SAMPLE values until the seller confirms real ones.

export const store = {
  name: "নাদাউরা",
  nameLatin: "Nadaura · Handmade Jewelry",
  tagline: "হাতে বানানো সুতার চুড়ি আর ম্যাক্রামে ব্রেসলেট — যেকোনো রঙে কাস্টমাইজ করা যায়।",
  about:
    "লক্ষ্মীপুর থেকে প্রতিটা চুড়ি আর ব্রেসলেট হাতে বানাই। আপনার জামার সাথে মিলিয়ে রঙ বেছে দিন, আমরা সেই রঙেই বানিয়ে দেব।",

  previewNote: "এটি একটি ডেমো। দামগুলো নমুনা — আপনার আসল দাম বসিয়ে দেওয়া হবে।",

  whatsapp: "",
  messengerUsername: "61581333184331",
  facebookUrl: "https://www.facebook.com/profile.php?id=61581333184331",
  phoneDisplay: "",
  address: "লক্ষ্মীপুর, চট্টগ্রাম",
  hours: "অর্ডার নেওয়া হয় প্রতিদিন",

  delivery: [
    { id: "near", label: "লক্ষ্মীপুর ও আশেপাশে", fee: 60, time: "১–২ দিন" },
    { id: "bd", label: "সারা দেশে", fee: 120, time: "৩–৫ দিন" },
  ],
  payment: ["ক্যাশ অন ডেলিভারি", "বিকাশ"],

  lang: "bn",
  builtBy: "Kazi Marzuk",
  builtByUrl: "https://wa.me/8801891966267",

  categories: [
    { id: "bangles", label: "সুতার চুড়ি" },
    { id: "bracelet", label: "ব্রেসলেট" },
  ],

  products: [
    {
      id: "n1",
      name: "মিক্স অ্যান্ড ম্যাচ সুতার চুড়ি (১২টি)",
      category: "bangles",
      price: 450,
      image: "photos/n1.jpg",
      sizes: ["2.4", "2.6", "2.8"],
      description: "দুই হাতের জন্য দুই রঙের সেট। নোটে পছন্দের রঙ লিখে দিন।",
      tag: "জনপ্রিয়",
    },
    {
      id: "n2",
      name: "রংধনু সুতার চুড়ি সেট (২৪টি)",
      category: "bangles",
      price: 850,
      image: "photos/n2.jpg",
      sizes: ["2.4", "2.6", "2.8"],
      description: "কমলা থেকে নীল পর্যন্ত ১২টি রঙ, প্রতিটা রঙে ২টি করে।",
    },
    {
      id: "n3",
      name: "প্যাস্টেল সুতার চুড়ি (১২টি)",
      category: "bangles",
      price: 450,
      image: "photos/n3.jpg",
      sizes: ["2.4", "2.6", "2.8"],
      description: "হালকা রঙের মিশেল, প্রতিদিন পরার জন্য।",
    },
    {
      id: "n4",
      name: "লাল ম্যাক্রামে ব্রেসলেট",
      category: "bracelet",
      price: 250,
      image: "photos/n4.jpg",
      description: "হাতে গিঁট দিয়ে বানানো, মাপ মতো টেনে ছোট-বড় করা যায়।",
      tag: "নতুন",
    },
  ],
};
