import { AnimatedSection } from "@/components/shared/AnimatedSection";

const SOCIALS = [
  {
    name: "TikTok",
    handle: "@mautravel.premium",
    href: "https://www.tiktok.com/@mautravel.premium",
    color: "bg-black",
    icon: (
      <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.53V6.77a4.85 4.85 0 0 1-1.03-.08z"/>
      </svg>
    ),
    followers: "8K+ followers",
  },
  {
    name: "Instagram",
    handle: "@mautravel",
    href: "https://instagram.com/mautravel",
    color: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
    icon: (
      <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
      </svg>
    ),
    followers: "12K+ followers",
  },
  {
    name: "Facebook",
    handle: "MauTravel",
    href: "https://www.facebook.com/share/p/1D3SmHdtsT/",
    color: "bg-[#1877F2]",
    icon: (
      <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    followers: "5K+ likes",
  },
  {
    name: "YouTube",
    handle: "MauTravel",
    href: "https://youtube.com/@mautravel",
    color: "bg-[#FF0000]",
    icon: (
      <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    followers: "2K+ subscribers",
  },
];

export function SocialSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-xl">
        <AnimatedSection className="text-center mb-12">
          <p className="text-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Follow Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy">
            Follow Our Mauritius Journey
          </h2>
          <p className="mt-4 text-charcoal/60 max-w-xl mx-auto">
            Stay inspired with daily Mauritius content — travel tips, stunning scenery, and
            behind-the-scenes moments from island life.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SOCIALS.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className={`absolute inset-0 ${social.color} opacity-10 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl ${social.color} flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  {social.icon}
                </div>
                <h3 className="font-bold text-navy group-hover:text-white transition-colors text-sm">
                  {social.name}
                </h3>
                <p className="text-charcoal/60 group-hover:text-white/80 transition-colors text-xs mt-0.5">
                  {social.handle}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
