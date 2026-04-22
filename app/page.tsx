'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  GraduationCap, 
  Users, 
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  ChevronDown,
  Menu, 
  X,
  BookOpen,
  Building2,
  CalendarCheck2,
  Target,
  Eye,
  Microscope,
  Library,
  ArrowLeft,
  ArrowRight,
  ClipboardList,
  History,
  Presentation,
  ShieldCheck,
  Zap
} from 'lucide-react';
import Image from 'next/image';

const PROGRAMS = [
  {
    title: 'B.Sc. Computer Science (BCS)',
    duration: '3 Years',
    intake: '80 Seats',
    description: 'Rigorous foundation in computer theory, algorithms, and advanced software engineering.',
    icon: Microscope,
  },
  {
    title: 'B.Sc. Computer Application (BCA)',
    duration: '3 Years',
    intake: '80 Seats',
    description: 'Professional course focused on industrial application development and system analysis.',
    icon: BookOpen,
  },
  {
    title: 'Bachelor of Arts (B.A.)',
    duration: '3 Years',
    intake: '120 Seats',
    description: 'Comprehensive study of literature, humanities, and social sciences accredited by SPPU.',
    icon: GraduationCap,
  },
  {
    title: 'Bachelor of Commerce (B.Com.)',
    duration: '3 Years',
    intake: '120 Seats',
    description: 'Developing expertise in global trade, accountancy, and modern business ethics.',
    icon: Award,
  },
  {
    title: 'Bachelor of Science (B.Sc.)',
    duration: '3 Years',
    intake: '120 Seats',
    description: 'Diverse scientific research and innovation across Physics, Chemistry, and Mathematics.',
    icon: Target,
  },
  {
    title: 'Master of Science (M.Sc.)',
    duration: '2 Years',
    intake: '40 Seats',
    description: 'Post-graduate focus on advanced research and laboratory innovation.',
    icon: Microscope,
  },
  {
    title: 'Master of Comp. App. (MCA)',
    duration: '2 Years',
    intake: '40 Seats',
    description: 'Professional management of information systems and large-scale software projects.',
    icon: Library,
  }
];

const MANAGEMENT = [
  {
    name: "Hon. Adv. Dr. Vidyadhar Kakade",
    role: "President",
    title: "The Friends of the Depressed League (FDL's)",
    img: "https://picsum.photos/seed/vidyadhar/400/400"
  },
  {
    name: "Hon. Principal Dr. Dukale P. A.",
    role: "Principal",
    title: "NKACS College, Shevgaon",
    img: "https://picsum.photos/seed/dukale/400/400"
  }
];

const TESTIMONIALS = [
  {
    name: "Akash Deshmukh",
    role: "Alumni (B.Sc CS)",
    content: "The faculty at Nirmalatai Kakade College provided the perfect blend of theory and practical knowledge. The hi-tech labs were a game-changer for my career.",
    image: "https://picsum.photos/seed/student1/200/200"
  },
  {
    name: "Snehal Patil",
    role: "Final Year Student (B.Com)",
    content: "I've had an amazing experience here. The campus environment is very supportive, and the library resources are exactly what a commerce student needs.",
    image: "https://picsum.photos/seed/student2/200/200"
  },
  {
    name: "Rahul Shinde",
    role: "M.Sc Chemistry Scholar",
    content: "Advanced research facilities and experienced mentors make this college stand out in the region. Truly a place for serious academic growth.",
    image: "https://picsum.photos/seed/student3/200/200"
  }
];

const GALLERY_IMAGES = [
  { src: "https://picsum.photos/seed/campus-main/800/600", title: "Main Campus Building" },
  { src: "https://picsum.photos/seed/comp-lab/800/600", title: "Computer Science Lab" },
  { src: "https://picsum.photos/seed/seminar-hall/800/600", title: "Auditorium" },
  { src: "https://picsum.photos/seed/chem-lab/800/600", title: "Chemistry Research Lab" },
  { src: "https://picsum.photos/seed/sports-ground/800/600", title: "Sports Complex" },
  { src: "https://picsum.photos/seed/lib-study/800/600", title: "Central Library" },
];

const HERO_SLIDES = [
  {
    title: "Building Academic Excellence.",
    subtitle: "Empowering the rural youth of Shevgaon with quality education and modern infrastructure since 2021.",
    image: "https://picsum.photos/seed/college-vibe-1/1920/1080",
    accent: "Arts, Commerce & Science College"
  },
  {
    title: "Innovation & Technology.",
    subtitle: "State-of-the-art Computer Science labs and advanced research facilities for the digital age.",
    image: "https://picsum.photos/seed/college-vibe-2/1920/1080",
    accent: "Advanced IT Department"
  },
  {
    title: "Holistic Development.",
    subtitle: "Nurturing sports, arts, and leadership qualities alongside academic rigor for all-round growth.",
    image: "https://picsum.photos/seed/college-vibe-3/1920/1080",
    accent: "Campus Life & Beyond"
  }
];

const NAV_ITEMS = [
  { name: 'Home', href: '#' },
  { 
    name: 'About Us', 
    submenu: [
      { name: 'College History & Wiki', href: '#vision' },
      { name: 'Mission & Vision', href: '#vision' },
      { name: 'Principal Desk', href: '#principal' },
      { name: 'Board of Management', href: '#leadership' },
    ]
  },
  { 
    name: 'Academics', 
    submenu: [
      { name: 'Arts Dept & Syllabus', href: '#programs' },
      { name: 'Commerce & Economy', href: '#programs' },
      { name: 'Science & Innovation', href: '#programs' },
      { name: 'Post-Graduation (PG)', href: '#programs' },
    ]
  },
  { 
    name: 'Admissions', 
    submenu: [
      { name: 'Admission Portal 2024', href: '#admission-portal' },
      { name: 'Eligibility Criteria', href: '#admission-portal' },
      { name: 'Mandatory Documents', href: '#admission-portal' },
      { name: 'Fee & Scholarships', href: '#admission-portal' },
    ]
  },
  { 
    name: 'Facilities', 
    submenu: [
      { name: 'Digital Library', href: '#facilities' },
      { name: 'Hi-Tech Labs', href: '#facilities' },
      { name: 'Sports Infrastructure', href: '#resources' },
      { name: 'Hostel & Mess', href: '#facilities' },
    ]
  },
  { 
    name: 'Students', 
    submenu: [
      { name: 'Examination Cell', href: '#students-cell' },
      { name: 'Live Results', href: '#students-cell' },
      { name: 'Event Calendar', href: '#students-cell' },
      { name: 'Alumni Network', href: '#contact' },
    ]
  }
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = React.useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-secondary/10 selection:text-secondary">
      {/* Refined Navigation Container */}
      <header className="fixed top-0 w-full z-50">
        {/* Minimalist Top Utility Bar */}
        <div className="hidden lg:block bg-primary text-white/70 py-2 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-[9px] font-bold tracking-[0.2em] uppercase">
            <div className="flex gap-8">
              <span className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer">
                <Phone size={10} className="text-secondary" /> +91 02429-221799
              </span>
              <span className="flex items-center gap-2 hover:text-accent transition-colors cursor-pointer lowercase tracking-normal">
                <Mail size={10} className="text-secondary" /> nirmalataicollege21@gmail.com
              </span>
            </div>
            <div className="flex gap-6">
              {['NIRF', 'Gallery', 'Feedback', 'Contact'].map((l) => (
                <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Main Sticky Navbar */}
        <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between h-24 items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <GraduationCap size={24} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-xl tracking-tight text-primary leading-none uppercase">
                    NKACS Shevgaon
                  </span>
                  <span className="text-[10px] font-black text-secondary uppercase tracking-[0.2em] mt-1.5 opacity-80">
                    Art&apos;s, Comm. & Sci. College
                  </span>
                </div>
              </div>

              {/* Desktop Nav */}
              <div className="hidden lg:flex items-center gap-10">
                {NAV_ITEMS.map((item) => (
                  <div 
                    key={item.name}
                    className="group relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <a 
                      href={item.href || '#'} 
                      className="flex items-center gap-1.5 text-[10px] font-black text-primary/70 uppercase tracking-[0.2em] py-8 group-hover:text-accent transition-colors"
                    >
                      {item.name}
                      {item.submenu && <ChevronDown size={10} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                    </a>

                    {/* Refined Dropdown Menu */}
                    <AnimatePresence>
                      {item.submenu && activeDropdown === item.name && (
                        <motion.div 
                          initial={{ opacity: 0, y: 10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.98 }}
                          className="absolute top-full left-[-20%] w-[280px] bg-white shadow-[0_30px_60px_-15px_rgba(11,60,93,0.15)] rounded-2xl border border-slate-100 p-6 pt-8 overflow-hidden"
                        >
                          <div className="absolute top-0 left-0 w-full h-[3px] bg-accent" />
                          <div className="text-[8px] font-black uppercase tracking-[0.3em] text-secondary mb-5 px-3">Quick Navigation</div>
                          <div className="space-y-1">
                            {item.submenu.map((sub) => (
                              <a 
                                key={sub.name} 
                                href={sub.href} 
                                className="group flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-all"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <span className="text-[10px] font-black text-primary/80 uppercase tracking-wider group-hover:text-accent transition-colors">
                                  {sub.name}
                                </span>
                                <ChevronRight size={12} className="text-secondary opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
                              </a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                <div className="w-[1px] h-6 bg-slate-200" />
                
                <a 
                  href="#admission-portal" 
                  className="bg-accent text-white px-7 py-3.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] hover:bg-primary transition-all shadow-xl shadow-accent/20 active:scale-95"
                >
                  Admission 2024
                </a>
              </div>

              {/* Mobile Nav Toggle */}
              <button 
                className="lg:hidden p-2 text-primary hover:bg-slate-100 rounded-xl transition-colors" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-white border-t border-slate-50 overflow-hidden"
              >
                <div className="p-6 space-y-2">
                  {NAV_ITEMS.map((item) => (
                    <div key={item.name} className="space-y-1">
                      <div 
                        className="flex justify-between items-center py-4 px-4 rounded-2xl active:bg-slate-50 transition-colors"
                        onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
                      >
                        <span className="text-[11px] font-black text-primary uppercase tracking-[0.2em]">{item.name}</span>
                        {item.submenu && <ChevronDown size={14} className={`text-slate-400 transition-transform duration-300 ${mobileExpanded === item.name ? 'rotate-180' : ''}`} />}
                      </div>
                      
                      <AnimatePresence>
                        {item.submenu && mobileExpanded === item.name && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-slate-50/50 rounded-2xl"
                          >
                            <div className="pl-6 pr-4 py-4 space-y-4">
                              {item.submenu.map((sub) => (
                                <a 
                                  key={sub.name} 
                                  href={sub.href} 
                                  className="block text-[10px] font-bold text-secondary uppercase tracking-widest hover:text-accent transition-colors"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {sub.name}
                                </a>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                  <div className="pt-8 px-4">
                    <button className="w-full py-5 bg-accent text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] shadow-xl shadow-accent/20">
                      Admission Portal 2024
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      {/* Hero Section - Optimized for Mobile Scale */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.05, opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1] }}
            className="absolute inset-0"
          >
            <Image 
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].title}
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary via-primary/60 to-transparent" />
          </motion.div>
        </AnimatePresence>

        <div className="max-w-7xl mx-auto px-6 h-full flex items-center pt-48 lg:pt-32 pb-32 lg:pb-24 relative z-10">
          <div className="max-w-4xl w-full">
            <motion.div
              key={`content-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-accent/20 backdrop-blur-2xl border border-accent/20 rounded-full mb-8">
                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">
                  {HERO_SLIDES[currentSlide].accent}
                </span>
              </div>
              
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[100px] font-black text-white leading-[0.85] mb-6 lg:mb-8 tracking-tighter uppercase">
                {HERO_SLIDES[currentSlide].title.split(" ").map((word, i) => (
                  <span key={i} className="block last:text-accent last:italic last:font-serif last:normal-case last:tracking-normal overflow-hidden pb-1 lg:pb-2">
                    <motion.span
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.1 * i }}
                      className="inline-block"
                    >
                      {word}
                    </motion.span>
                  </span>
                ))}
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-white/70 font-medium leading-relaxed max-w-lg mb-12">
                {HERO_SLIDES[currentSlide].subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-5 items-stretch sm:items-center">
                <button className="px-10 py-5 bg-accent text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-secondary transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95 group">
                  Institutional Prospectus 
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                
                <button className="px-10 py-5 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.3em] hover:bg-white/20 transition-all flex items-center justify-center">
                  Virtual Campus Tour
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Dynamic Navigation Indicators */}
        <div className="absolute bottom-16 left-6 lg:left-max-w-7xl mx-auto w-full px-6 flex justify-between items-end z-20 pointer-events-none">
          <div className="flex gap-4 pointer-events-auto">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1.5 transition-all duration-700 rounded-full ${currentSlide === i ? 'w-16 bg-accent' : 'w-4 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
          <div className="flex gap-3 pointer-events-auto">
            <button 
              onClick={() => setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)}
              className="w-14 h-14 border border-white/10 rounded-xl flex items-center justify-center text-white hover:bg-accent transition-all backdrop-blur-sm"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
              className="w-14 h-14 border border-white/10 rounded-xl flex items-center justify-center text-white hover:bg-accent transition-all backdrop-blur-sm"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-50 z-20">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-white" />
        </div>
      </section>


      {/* Impact Stats Overlay - Floating on Hero bottom */}
      <section className="relative z-20 -mt-24 max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[24px] p-10 lg:p-16 shadow-[0_30px_60px_-15px_rgba(11,60,93,0.1)] border border-slate-100 flex flex-wrap justify-between items-center gap-10">
          {[
            { label: "Talented Alumni", value: "12,500+", icon: Users },
            { label: "Expert Mentors", value: "140+", icon: Presentation },
            { label: "Digital Labs", value: "24/7", icon: Microscope },
            { label: "Success Rate", value: "94%", icon: ShieldCheck }
          ].map((stat, i) => (
            <div key={i} className="flex-1 min-w-[200px] group">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-brand-bg rounded-xl flex items-center justify-center text-primary group-hover:bg-accent group-hover:text-white transition-all duration-500">
                  <stat.icon size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-display font-black text-primary tracking-tighter mb-1">{stat.value}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Resources Dashboard - Bento Grid Style */}
      <section className="py-24 lg:py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-bg rounded-full mb-6">
              <div className="w-1 h-1 bg-accent rounded-full" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Institutional Framework</span>
            </div>
            <h2 className="text-4xl lg:text-7xl font-display font-black text-primary uppercase tracking-tighter leading-none mb-6">Global <span className="text-accent italic font-serif normal-case tracking-normal">Resources</span>.</h2>
            <p className="text-base lg:text-lg text-slate-400 font-medium max-w-xl mx-auto">Access our centralized ecosystem designed for academic growth and administrative efficiency.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-6 h-auto lg:h-[800px]">
            {/* Bento Card 1: Main CTA */}
            <div className="lg:col-span-2 lg:row-span-2 bg-primary rounded-[32px] p-10 lg:p-16 relative overflow-hidden group shadow-2xl shadow-primary/20">
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[150px] opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-accent rounded-2xl flex items-center justify-center text-white mb-10 shadow-2xl shadow-accent/30">
                  <Zap size={32} />
                </div>
                <div className="mt-auto">
                  <h3 className="text-3xl lg:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none mb-8">Admission <br/>Portal 2024.</h3>
                  <p className="text-base lg:text-lg text-white/60 font-medium mb-10 max-w-sm">Secure your future in Arts, Commerce, or Science. Online applications are now live for the academic cycle.</p>
                  <button className="w-full sm:w-max px-10 py-5 bg-white text-primary rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-accent hover:text-white transition-all flex items-center justify-center gap-3">
                    Start Application <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Exams */}
            <div className="lg:col-span-1 lg:row-span-1 bg-brand-bg rounded-[24px] p-8 lg:p-10 group hover:bg-secondary transition-all duration-700 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="flex justify-between items-start mb-12">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:bg-accent group-hover:text-white transition-all">
                  <ShieldCheck size={28} />
                </div>
                <ArrowRight className="text-slate-300 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </div>
              <h4 className="text-2xl font-display font-black text-primary group-hover:text-white uppercase tracking-tight mb-3 transition-colors">Exam Cell</h4>
              <p className="text-sm text-slate-400 group-hover:text-white/70 font-medium transition-colors">Real-time results and unified examination schedule updates.</p>
            </div>

            {/* Bento Card 3: Library */}
            <div className="lg:col-span-1 lg:row-span-1 bg-brand-bg rounded-[24px] p-8 lg:p-10 group hover:bg-secondary transition-all duration-700 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="flex justify-between items-start mb-12">
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:bg-accent group-hover:text-white transition-all">
                  <BookOpen size={28} />
                </div>
                <ArrowRight className="text-slate-300 group-hover:text-white group-hover:translate-x-2 transition-all" />
              </div>
              <h4 className="text-2xl font-display font-black text-primary group-hover:text-white uppercase tracking-tight mb-3 transition-colors">E-Library</h4>
              <p className="text-sm text-slate-400 group-hover:text-white/70 font-medium transition-colors">Instant digital access to over 10k+ international journals.</p>
            </div>

            {/* Bento Card 4: Social / Bulletins */}
            <div className="lg:col-span-2 lg:row-span-1 bg-brand-bg rounded-[24px] p-8 lg:p-12 flex flex-col sm:flex-row items-center gap-10 group hover:bg-slate-100 transition-colors">
              <div className="w-full sm:w-32 h-48 sm:h-32 relative rounded-2xl overflow-hidden shrink-0 shadow-xl">
                <Image src="https://picsum.photos/seed/bulletin/400/400" fill alt="Bulletins" className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <div className="text-[9px] font-black text-accent uppercase tracking-[0.3em] mb-3">Live Updates</div>
                <h4 className="text-3xl font-display font-black text-primary uppercase tracking-tight mb-4 leading-none">Institutional <br className="hidden sm:block" />Bulletins.</h4>
                <button className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-3 text-[10px] font-black uppercase tracking-widest text-primary hover:text-accent transition-colors">
                  View All Notices <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Principal's Desk Section */}
      <section id="principal" className="py-40 bg-brand-bg relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-1/3 h-full bg-primary/[0.01] -z-0" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="aspect-[3/4] relative rounded-[48px] overflow-hidden border-[16px] border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                  <Image src="https://picsum.photos/seed/principal-desk/800/1000" fill alt="Principal" className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-accent text-white p-10 rounded-3xl shadow-2xl">
                  <div className="text-3xl font-display font-black leading-none mb-2 underline decoration-white/30">Dr. Dukale P. A.</div>
                  <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Principal, NKACS College</div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-accent" />
                <h3 className="text-[11px] font-black uppercase tracking-[0.4em] text-accent">Leader&apos;s Message</h3>
              </div>
              <h2 className="font-display text-5xl lg:text-7xl font-black text-primary uppercase tracking-tighter mb-10 leading-[0.9]">
                From the <br/>
                <span className="text-secondary italic font-serif normal-case tracking-normal">Principal&apos;s Desk</span>.
              </h2>
              <div className="space-y-8 text-xl text-slate-500 font-medium leading-relaxed italic font-serif">
                <p>&quot;Education is not just about gathering facts; it&apos;s about training the mind to think. At NKACS, we strive to provide an environment where intellectual curiosity is nurtured and social responsibility is ingrained.&quot;</p>
                <p className="not-italic font-sans text-lg text-slate-500">I welcome all aspiring students to become part of our academic community where we focus on holistic growth and professional readiness.</p>
                <button className="flex items-center gap-4 py-6 px-10 bg-primary text-white rounded-xl text-xs font-black uppercase tracking-[0.2em] hover:bg-accent transition-all shadow-xl group">
                  Read Full Message <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Sections - Standardized Content */}
      <section id="vision" className="py-24 lg:py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 mb-24 lg:mb-40">
            {/* Vision Card */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[48px] p-12 lg:p-20 relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent rounded-full blur-[120px] opacity-10" />
              <div className="relative z-10">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-accent rounded-3xl flex items-center justify-center text-white mb-10 shadow-2xl shadow-accent/40 rotate-3">
                  <Eye size={32} />
                </div>
                <h3 className="text-3xl lg:text-5xl font-display font-black text-white uppercase tracking-tighter mb-8 italic">Our Vision</h3>
                <p className="text-lg lg:text-xl text-white/70 font-medium leading-relaxed">
                  To be a center of excellence in higher education, fostering intellectual development and moral integrity, aimed at uplifting rural communities through modern pedagogy and research.
                </p>
                <div className="mt-12 flex gap-4">
                  {[1, 2, 3].map((i) => <div key={i} className="w-10 lg:w-12 h-1.5 bg-white/10 rounded-full" />)}
                </div>
              </div>
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-brand-bg rounded-[48px] p-12 lg:p-20 border border-primary/5 hover:border-accent/20 transition-colors group shadow-xl"
            >
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary rounded-3xl flex items-center justify-center text-white mb-10 shadow-2xl shadow-primary/10 -rotate-3 group-hover:rotate-0 transition-transform">
                <Target size={32} />
              </div>
              <h3 className="text-3xl lg:text-5xl font-display font-black text-primary uppercase tracking-tighter mb-8 italic">Our Mission</h3>
              <ul className="space-y-6">
                {[
                  "Provide accessible and affordable quality education to students from social and economic backgrounds.",
                  "Empower students with vocational skills and technologically advanced learning modules.",
                  "Cultivate a spirit of research, social responsibility, and national contribution among youth."
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 group/li">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover/li:bg-accent transition-colors">
                      <ChevronRight size={14} className="text-accent group-hover/li:text-white" />
                    </div>
                    <p className="text-slate-500 font-bold uppercase text-[9px] lg:text-[10px] tracking-widest leading-loose">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Us & Legacy - Est. 2021 Update */}
      <section id="about" className="py-24 lg:py-40 bg-white relative overflow-hidden">
        {/* Subtle decorative background text */}
        <div className="absolute top-20 -right-20 pointer-events-none opacity-[0.02] select-none uppercase font-black text-[80px] lg:text-[180px] leading-none whitespace-nowrap tracking-tighter text-primary">
          HERITAGE
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:grid-cols-12 lg:gap-24 items-center">
            <div className="lg:col-span-7 space-y-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-bg text-secondary rounded-full text-[9px] font-black uppercase tracking-[0.3em]">
                Founding Legacy Since 2021
              </div>
              <h2 className="font-display text-6xl lg:text-[100px] font-black text-primary uppercase tracking-tighter leading-[0.8] mb-8">
                Crafting <br/>
                <span className="text-accent italic font-serif normal-case tracking-normal underline decoration-accent/10 underline-offset-[16px]">Future Leaders</span>.
              </h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-xl">
                Founded by <span className="text-primary font-black underline decoration-accent underline-offset-4">The Friends of the Depressed League (FDL&apos;s)</span>, NKACS Shevgaon was established to bridge the gap between rural potential and global opportunity.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-10 pt-6">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center text-secondary shadow-sm border border-slate-100 group">
                    <Award size={20} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-lg font-black text-primary uppercase tracking-tight">Accredited Excellence</h4>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">Affiliated with Savitribai Phule Pune University and recognized by Govt of MH.</p>
                </div>
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center text-secondary shadow-sm border border-slate-100 group">
                    <Target size={20} className="group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-lg font-black text-primary uppercase tracking-tight">Holistic Growth</h4>
                  <p className="text-sm text-slate-400 font-medium leading-relaxed">Beyond exams, we cultivate character, leadership, and professional ethics.</p>
                </div>
              </div>

              <div className="pt-10 flex flex-wrap gap-5">
                <button className="px-10 py-5 bg-primary text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-accent transition-all shadow-xl shadow-primary/10">Download Profile</button>
                <button className="px-10 py-5 border border-slate-200 text-primary rounded-xl font-black text-[10px] uppercase tracking-widest hover:border-primary transition-all">Institutional Wiki</button>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] relative rounded-[48px] overflow-hidden rotate-2 shadow-[0_50px_100px_-20px_rgba(11,60,93,0.15)] border-[16px] border-slate-50 group">
                <Image src="https://picsum.photos/seed/college-heritage/1000/1250" fill alt="College Heritage" className="object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-accent text-white p-12 rounded-[32px] shadow-3xl flex flex-col items-center">
                <div className="text-5xl font-display font-black leading-none mb-1">15+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80 text-center">Academic <br/>Departments</div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Courses Section */}
      <section id="programs" className="py-24 lg:py-40 bg-brand-bg relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-3xl">
              <div className="text-secondary font-display font-black text-xs uppercase tracking-[0.4em] mb-6">Course Catalog</div>
              <h2 className="font-display text-4xl lg:text-[80px] font-black text-primary uppercase tracking-tighter mb-8 leading-[0.9]">
                Academic <br className="hidden lg:block" />
                <span className="text-accent italic font-serif normal-case tracking-normal">Departments</span>.
              </h2>
              <p className="text-base lg:text-xl text-slate-500 font-medium leading-relaxed">
                Explore our diverse range of undergraduate and postgraduate programs in Arts, Commerce, Science, and Technology, all affiliated with SPPU.
              </p>
            </div>
            <div className="hidden lg:block pb-5">
              <div className="flex items-center gap-6 text-xs font-black text-primary uppercase tracking-[0.2em] bg-white border border-primary/5 px-8 py-4 rounded-full shadow-sm">
                <div className="relative">
                  <div className="w-3 h-3 bg-accent rounded-full animate-ping absolute" />
                  <div className="w-3 h-3 bg-accent rounded-full relative" />
                </div>
                Admissions are Open for 2024-25
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {PROGRAMS.map((program, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-[40px] p-12 border border-primary/[0.03] hover:border-accent/20 transition-all shadow-sm hover:shadow-2xl hover:shadow-primary/5 flex flex-col md:flex-row gap-10 items-start overflow-hidden"
              >
                {/* Decorative Pattern */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary/5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-3xl" />
                
                <div className="w-24 h-24 bg-brand-bg rounded-[24px] flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-inner">
                  <program.icon size={48} strokeWidth={1} />
                </div>
                
                <div className="flex-1 relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="font-display text-3xl font-black text-primary group-hover:text-accent transition-colors uppercase leading-tight tracking-tighter">
                      {program.title}
                    </h3>
                    {i === 0 && (
                      <div className="text-[10px] font-black bg-accent text-white px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg shadow-accent/20">
                        Popular
                      </div>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest bg-brand-bg px-4 py-2 rounded-xl">
                      <CalendarCheck2 size={12} /> {program.duration}
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-black text-primary uppercase tracking-widest bg-brand-bg px-4 py-2 rounded-xl">
                      <Users size={12} /> {program.intake}
                    </div>
                  </div>
                  
                  <p className="text-slate-500 leading-relaxed text-base font-medium mb-10">
                    {program.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <button className="flex items-center gap-3 font-black text-[11px] text-primary uppercase tracking-widest group/btn">
                      <span className="relative text-primary group-hover:text-accent">
                        Syllabus PDF
                        <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-accent transition-all group-hover/btn:w-full" />
                      </span>
                      <Award size={16} className="text-secondary" />
                    </button>
                    <BookOpen size={18} className="text-slate-200 group-hover:text-secondary/30 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Zeal College style USP */}
      <section className="py-40 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/texture/1920/1080')] opacity-[0.03] mix-blend-overlay" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-28">
            <h3 className="text-accent font-display font-black text-xs uppercase tracking-[0.5em] mb-6">Why NKACS?</h3>
            <h2 className="font-display text-6xl lg:text-[100px] font-black uppercase tracking-tighter leading-[0.8] mb-12 text-white">
              The Standard of <br/>
              <span className="text-accent italic font-serif normal-case tracking-normal">Excellence</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Quality Education", 
                text: "Ranked among the top colleges in the region for academic rigor and student success rates.",
                icon: GraduationCap 
              },
              { 
                title: "Digital Ecosystem", 
                text: "Fully digitized campus with smart classrooms, e-library, and high-speed campus-wide WiFi.",
                icon: Zap 
              },
              { 
                title: "Placement Hub", 
                text: "Strong industry ties ensuring our graduates are placed in leading corporate and govt sectors.",
                icon: ShieldCheck 
              }
            ].map((usp, i) => (
              <div key={i} className="p-12 bg-white/[0.03] border border-white/10 rounded-[32px] hover:bg-white/[0.08] transition-all group">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center text-white mb-10 shadow-3xl shadow-accent/20 group-hover:scale-110 transition-transform">
                  <usp.icon size={32} />
                </div>
                <h4 className="text-3xl font-display font-black mb-6 uppercase tracking-tight leading-none group-hover:text-accent transition-colors">{usp.title}</h4>
                <p className="text-white/60 font-medium leading-relaxed">{usp.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section - Visionary Board */}
      <section id="leadership" className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center mb-28">
          <div className="text-secondary font-display font-black text-xs uppercase tracking-[0.5em] mb-6">Governing Body</div>
          <h2 className="font-display text-5xl lg:text-[80px] font-black text-primary uppercase tracking-tighter mb-8 leading-[0.9] text-balance">
            Visionary <br/>Leadership.
          </h2>
          <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto italic font-serif">
            &quot;Dedicated to the pursuit of educational excellence and the strategic empowerment of the rural youth.&quot;
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {MANAGEMENT.map((leader, i) => (
            <div key={i} className="group text-center">
              <div className="aspect-[3/4] relative rounded-[32px] overflow-hidden mb-8 border-4 border-slate-50 group-hover:border-accent transition-all shadow-2xl scale-95 group-hover:scale-100 duration-700">
                <Image src={leader.img} alt={leader.name} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h4 className="font-display text-2xl font-black text-primary uppercase mb-1 leading-tight tracking-tighter">
                {leader.name}
              </h4>
              <div className="text-accent text-[10px] font-black uppercase tracking-widest mb-1">{leader.role}</div>
              <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest leading-loose">{leader.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Achievement Stats Section - Zeal style impact */}
      <section className="bg-brand-bg py-24 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">
            {[
              { label: "Total Graduates", value: "8500+", sub: "since 2008" },
              { label: "Expert Faculty", value: "120+", sub: "M.Phil / PhD Holders" },
              { label: "Research Papers", value: "450+", sub: "Published Globally" },
              { label: "Placement Rate", value: "94%", sub: "Top MNCs & Govt" }
            ].map((stat, i) => (
              <div key={i} className="text-center lg:border-r last:border-0 border-slate-200">
                <div className="text-4xl lg:text-5xl font-display font-black text-primary mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-[10px] font-black text-secondary uppercase tracking-widest mb-1">{stat.label}</div>
                <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section - Elevated Dark Visuals */}
      <section id="facilities" className="py-40 bg-primary text-white relative overflow-hidden">
        {/* Subtle Radial Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(28,110,140,0.1)_0%,transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-32 items-center">
            <div className="lg:w-5/12">
              <div className="w-16 h-1 bg-accent mb-10 rounded-full" />
              <h2 className="font-display text-5xl lg:text-[90px] font-black mb-12 uppercase leading-[0.8] tracking-tighter">
                Advanced <br/>
                <span className="text-accent italic font-serif normal-case tracking-normal">Ecosystems</span>.
              </h2>
              <p className="text-xl text-white/50 font-medium mb-16 leading-relaxed">Our infrastructure is designed to facilitate discovery, collaboration, and high-performance learning.</p>
              
              <div className="grid gap-4">
                {[
                  { icon: Microscope, title: "Precision Chemistry Labs", text: "Industrial-grade equipment for analytical synthesis." },
                  { icon: Library, title: "Knowledge Hub", text: "Hybrid library with access to world-class journals." },
                  { icon: Building2, title: "Digital Classrooms", text: "Interactive smart boards with campus WiFi." }
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileInView={{ x: [20, 0], opacity: [0, 1] }}
                    className="p-8 border border-white/5 rounded-2xl bg-white/[0.02] flex items-center gap-8 group hover:bg-white/[0.05] transition-all"
                  >
                    <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary group-hover:bg-accent group-hover:text-white transition-all">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-black text-sm uppercase tracking-widest mb-1">{item.title}</h4>
                      <p className="text-[11px] text-white/30 font-medium">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-7/12">
              <div className="grid grid-cols-2 gap-6 p-4 bg-white/[0.01] rounded-[64px] border border-white/5 hover:bg-white/[0.03] transition-colors duration-1000 group">
                <div className="space-y-6 pt-16">
                  <div className="aspect-[4/5] relative rounded-[40px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                    <Image src="https://picsum.photos/seed/college-lab1/600/800" fill alt="Facility" className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[4/5] relative rounded-[40px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                    <Image src="https://picsum.photos/seed/college-lab2/600/800" fill alt="Facility" className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="aspect-[4/5] relative rounded-[40px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                    <Image src="https://picsum.photos/seed/college-lab3/600/800" fill alt="Facility" className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="aspect-[4/5] relative rounded-[40px] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 shadow-2xl">
                    <Image src="https://picsum.photos/seed/college-lab4/600/800" fill alt="Facility" className="object-cover" referrerPolicy="no-referrer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Resource Hub Section */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="text-secondary font-display font-black text-xs uppercase tracking-[0.4em] mb-6">Resource Hub</div>
            <h2 className="font-display text-5xl lg:text-[80px] font-black text-primary uppercase tracking-tighter leading-[0.9]">
              Useful <br/>
              <span className="text-accent italic font-serif normal-case tracking-normal">Directives</span>.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Quick Access Links */}
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 ml-4">Institute Resources</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Infrastructure", "Language Lab", 
                  "Competitive Exams", "Sports Department", 
                  "Student Welfare", "Academic Results",
                  "Job Placements", "Alumni Association",
                  "Workshops", "Short Courses"
                ].map((link, idx) => (
                  <button key={idx} className="flex items-center gap-4 p-6 bg-brand-bg border border-primary/5 rounded-2xl hover:border-accent/20 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all text-left group">
                    <div className="w-2 h-2 bg-accent rounded-full opacity-20 group-hover:opacity-100 transition-opacity" />
                    <span className="text-xs font-black uppercase tracking-widest text-primary">{link}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Portal Links */}
            <div className="space-y-8">
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-8 ml-4">Student Portals</h4>
              <div className="space-y-4">
                {[
                  { label: "Student Enquiry Form", color: "bg-secondary" },
                  { label: "Admission Portal 2024", color: "bg-primary" },
                  { label: "Alumni Registration", color: "bg-secondary" },
                  { label: "Feedback & Grievance", color: "bg-slate-700" }
                ].map((portal, idx) => (
                  <button key={idx} className={`${portal.color} w-full p-8 rounded-[32px] flex items-center justify-between text-white group hover:scale-[1.02] transition-transform shadow-2xl`}>
                    <span className="text-sm font-black uppercase tracking-widest">{portal.label}</span>
                    <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Portal Section */}
      <section id="admission-portal" className="py-40 bg-primary text-white relative overflow-hidden">
        {/* Animated background shapes */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[100px]"
        />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-full mb-8">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">Registration Desk</span>
            </div>
            <h2 className="font-display text-6xl lg:text-[100px] font-black uppercase tracking-tighter leading-[0.85] mb-12">
              Join the <br/>
              <span className="text-accent italic font-serif normal-case tracking-normal">Academic Elite</span>.
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium">
              Start your journey with Nirmalatai Kakade College. Our admission process is transparent, inclusive, and entirely digital for your convenience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { icon: ClipboardList, title: "Online Application", text: "Complete our digital registration form with all required academic credentials.", action: "Start Application" },
              { icon: History, title: "Eligibility Check", text: "Verified based on SPPU and Govt of Maharashtra educational norms and criteria.", action: "Check Eligibility" },
              { icon: ShieldCheck, title: "Document Verification", text: "Instant status tracking for submitted marksheets, LC, and caste certificates.", action: "Upload Portal" }
            ].map((step, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[48px] group transition-all hover:bg-white/[0.07]"
              >
                <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white mb-10 shadow-xl group-hover:scale-110 transition-transform">
                  <step.icon size={32} />
                </div>
                <h4 className="text-2xl font-display font-black mb-6 uppercase tracking-tight">{step.title}</h4>
                <p className="text-white/40 font-medium leading-relaxed mb-10">{step.text}</p>
                <button className="flex items-center gap-3 text-[10px] font-black uppercase tracking-widest text-accent group/btn">
                  {step.action} <ChevronRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-secondary rounded-[48px] flex flex-col lg:flex-row items-center justify-between gap-10 shadow-3xl">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl font-display font-black mb-2 uppercase">Need personalized assistance?</h3>
              <p className="text-white/80 font-medium">Our admission counselors are available Monday to Saturday, 10 AM - 5 PM.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-10 py-5 bg-white text-primary rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-3">
                <Phone size={18} /> Help Desk: +91 02429-221799
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Students Section / Examination Cell - Bento Grid Refined */}
      <section id="students-cell" className="py-40 bg-brand-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-end mb-24">
            <div className="flex-1">
              <div className="text-secondary font-display font-black text-xs uppercase tracking-[0.5em] mb-6">Student Empower</div>
              <h2 className="font-display text-5xl lg:text-[100px] font-black text-primary uppercase tracking-tighter leading-[0.8] text-balance">
                The Student <br/>
                <span className="text-accent italic font-serif normal-case tracking-normal">Support Hive</span>.
              </h2>
            </div>
            <div className="lg:w-1/3 pb-5">
              <p className="text-lg text-slate-400 font-medium leading-relaxed">
                Dedicated resources for performance tracking, merit-based assistance, and community leadership through NSS.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Presentation, title: "Exam Schedule", sub: "Session 2024-25" },
              { icon: BookOpen, title: "Results Portal", sub: "Instant verification" },
              { icon: Users, title: "Scholarship Desk", sub: "Financial assistance" },
              { icon: History, title: "NSS Activities", sub: "Social service units" }
            ].map((cell, i) => (
              <div key={i} className="group p-10 bg-white border border-slate-100 rounded-[32px] hover:bg-primary hover:shadow-2xl transition-all cursor-pointer">
                <div className="w-14 h-14 bg-brand-bg rounded-xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all text-secondary">
                  <cell.icon size={28} />
                </div>
                <h4 className="text-xl font-black text-primary group-hover:text-white uppercase tracking-tight mb-2 transition-colors">{cell.title}</h4>
                <p className="text-[10px] font-black text-slate-400 group-hover:text-white/40 uppercase tracking-widest transition-colors">{cell.sub}</p>
                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight size={20} className="text-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Tour and Social Section - Now includes Gallery and Testimonials */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-secondary font-display font-black text-xs uppercase tracking-[0.4em] mb-4">Visual Journey</div>
            <h2 className="font-display text-4xl lg:text-6xl font-black text-primary uppercase tracking-tighter mb-6">
              Campus <span className="text-accent italic font-serif normal-case tracking-normal">Gallery</span>
            </h2>
            <div className="w-24 h-1.5 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {GALLERY_IMAGES.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
              >
                <Image 
                  src={img.src} 
                  alt={img.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-display font-black text-lg uppercase tracking-tight">{img.title}</p>
                    <div className="w-10 h-1 bg-accent mx-auto mt-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mb-32">
            <div className="text-center mb-20">
              <div className="text-secondary font-display font-black text-xs uppercase tracking-[0.4em] mb-4">Student Voices</div>
              <h2 className="font-display text-4xl lg:text-5xl font-black text-primary uppercase tracking-tighter">What Our <span className="text-accent italic font-serif normal-case tracking-normal">Students Say</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {TESTIMONIALS.map((t, idx) => (
                <div key={idx} className="bg-brand-bg p-10 rounded-[40px] border border-primary/5 shadow-sm hover:shadow-xl transition-shadow relative group">
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent text-white rounded-2xl flex items-center justify-center text-3xl font-serif">&quot;</div>
                  <p className="text-slate-500 font-medium italic mb-8 relative z-10 leading-relaxed">
                    {t.content}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md relative">
                      <Image src={t.image} alt={t.name} fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h4 className="font-display font-black text-primary text-sm uppercase tracking-tight">{t.name}</h4>
                      <p className="text-accent font-bold text-[10px] uppercase tracking-widest">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-32 bg-primary relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="text-accent font-display font-black text-xs uppercase tracking-[0.4em] mb-6">Contact Us</div>
              <h2 className="font-display text-5xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-10 leading-tight">
                Ready to <br/>
                <span className="text-accent italic font-serif normal-case tracking-normal">Start Your Journey?</span>
              </h2>
              <p className="text-xl text-white/60 font-medium mb-12 max-w-lg leading-relaxed">
                Have questions about admissions, courses, or campus life? Our team is here to help you every step of the way.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Call Us Directly</p>
                    <p className="text-white font-display font-black text-xl">+91 02429-221799</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-1">Email Our Office</p>
                    <p className="text-white font-display font-black text-xl">nirmalataicollege21@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[48px] p-12 lg:p-16 shadow-2xl relative">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 block ml-1">Full Name</label>
                    <input type="text" className="w-full bg-brand-bg border-none rounded-2xl px-6 py-4 text-primary font-bold focus:ring-2 focus:ring-accent outline-none" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 block ml-1">Email Address</label>
                    <input type="email" className="w-full bg-brand-bg border-none rounded-2xl px-6 py-4 text-primary font-bold focus:ring-2 focus:ring-accent outline-none" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 block ml-1">Interested Program</label>
                  <select className="w-full bg-brand-bg border-none rounded-2xl px-6 py-4 text-primary font-bold focus:ring-2 focus:ring-accent outline-none appearance-none">
                    <option>B.Sc Computer Science</option>
                    <option>B.Sc Computer Application (BCA)</option>
                    <option>M.Sc Computer Science</option>
                    <option>Bachelor of Arts (B.A)</option>
                    <option>Bachelor of Commerce (B.Com)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary/40 block ml-1">Message</label>
                  <textarea rows={4} className="w-full bg-brand-bg border-none rounded-2xl px-6 py-4 text-primary font-bold focus:ring-2 focus:ring-accent outline-none resize-none" placeholder="How can we help you?"></textarea>
                </div>
                <button className="w-full bg-accent text-white py-6 rounded-2xl font-display font-black uppercase tracking-[0.3em] hover:bg-secondary hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-accent/20">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Social and Campus Tour (Visual Footer) */}
      <section className="py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Social Connect */}
            <div>
              <div className="text-secondary font-display font-black text-xs uppercase tracking-[0.4em] mb-6">Stay Connected</div>
              <h2 className="font-display text-5xl lg:text-7xl font-black text-primary uppercase tracking-tighter mb-10 leading-tight">
                Academic <br/>
                <span className="text-accent italic font-serif normal-case tracking-normal">Social Network</span>.
              </h2>
              <p className="text-xl text-slate-500 font-medium mb-12 max-w-lg">
                Join our digital community to stay updated with campus life, event highlights, and student achievements.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {[
                  { label: 'Facebook', color: 'bg-[#1877F2]', icon: Facebook },
                  { label: 'Instagram', color: 'bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]', icon: Instagram },
                  { label: 'YouTube', color: 'bg-[#FF0000]', icon: Youtube },
                  { label: 'LinkedIn', color: 'bg-[#0A66C2]', icon: Linkedin },
                ].map((social) => (
                  <button key={social.label} className={`${social.color} px-8 py-4 rounded-xl text-white text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all flex items-center gap-3 shadow-lg shadow-black/10`}>
                    <social.icon size={16} />
                    {social.label}
                  </button>
                ))}
              </div>
            </div>

            {/* College Tour (Visual) */}
            <div className="relative group">
              <div className="aspect-video relative rounded-[48px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(11,60,93,0.3)] border-[12px] border-slate-50">
                <Image 
                  src="https://picsum.photos/seed/college-tour/1200/675" 
                  alt="College Campus Tour" 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                  <button className="w-24 h-24 bg-white text-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group/btn relative overflow-hidden">
                    <div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
                    <ChevronRight size={40} className="relative z-10 group-hover/btn:text-white transition-colors" />
                  </button>
                </div>
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-10 -right-10 bg-accent text-white p-10 rounded-3xl shadow-2xl z-20 hidden sm:block">
                <div className="text-4xl font-display font-black mb-1">LIVE</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Campus Tour 2024</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-white pt-40 pb-20 border-t border-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-20 mb-28">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary/20">
                  <GraduationCap size={32} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="font-display font-black text-xl tracking-tight text-primary uppercase leading-none">Nirmalatai Kakade</span>
                  <span className="text-[9px] font-black text-secondary uppercase tracking-[0.3em] mt-2">Arts, Comm. & Sci. College</span>
                </div>
              </div>
              <p className="text-slate-500 font-medium leading-relaxed mb-10 max-w-xs">
                A Unit of The Friends of the Depressed League, Shevgaon. Empowering rural youth since 2008.
              </p>
              <div className="flex gap-4">
                {[Users, Mail, Award].map((Icon, idx) => (
                  <div key={idx} className="w-12 h-12 border border-primary/10 rounded-xl flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all cursor-pointer">
                    <Icon size={20} />
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-16">
              <div>
                <h4 className="font-black text-primary text-[10px] uppercase tracking-[0.3em] mb-10">Reach Us</h4>
                <div className="space-y-10">
                  <div className="flex gap-6 group">
                    <div className="w-10 h-10 rounded-xl bg-brand-bg flex items-center justify-center text-secondary group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
                      <MapPin size={18} />
                    </div>
                    <p className="text-slate-500 text-sm leading-relaxed font-bold uppercase tracking-tight">
                      Sant Gadgebaba Chowk, Pathardi Road, Shevgaon <br/> Dist: Ahilyanagar, Pincode: 414502.
                    </p>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-10 h-10 rounded-xl bg-brand-bg flex items-center justify-center text-secondary group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
                      <Phone size={18} />
                    </div>
                    <p className="text-slate-500 text-sm font-bold uppercase">
                      +91 02429-221799
                    </p>
                  </div>
                  <div className="flex gap-6 group">
                    <div className="w-10 h-10 rounded-xl bg-brand-bg flex items-center justify-center text-secondary group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
                      <Mail size={18} />
                    </div>
                    <p className="text-primary text-sm font-black uppercase underline decoration-accent/20 underline-offset-8 group-hover:decoration-accent transition-all">
                      nirmalataicollege21@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-black text-primary text-[10px] uppercase tracking-[0.3em] mb-10">Associations</h4>
                <div className="grid grid-cols-2 gap-4">
                  {['UGC Approved', 'SPPU Affiliated', 'Govt of MH', 'NAAC Accredited'].map((item) => (
                    <div key={item} className="p-4 border border-primary/5 rounded-xl text-[9px] font-black uppercase text-slate-400 group hover:border-primary/20 hover:text-primary transition-all text-center">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <h4 className="font-black text-primary text-[10px] uppercase tracking-[0.3em] mb-10">Important Links</h4>
              <ul className="space-y-4">
                {['Annual Report', 'NAAC Cycle Certificates', 'NAAC Website', 'University Of Pune', 'RTI', 'RTI Act 2005'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs font-bold text-slate-500 uppercase tracking-tight hover:text-accent transition-colors flex items-center gap-2">
                      <ChevronRight size={12} className="text-accent" />
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-12 p-10 bg-primary rounded-[32px] shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-10 transition-opacity" />
                <div className="text-[9px] font-black uppercase tracking-[0.4em] text-accent mb-6 text-center">Digital Footprint</div>
                <div className="flex flex-col items-center gap-4">
                  <div className="flex gap-2">
                    {[1, 2, 8, 4, 5, 6].map((n, i) => (
                      <div key={i} className="w-10 h-14 bg-white/5 border border-white/10 text-white flex items-center justify-center font-display font-black text-2xl rounded-xl shadow-inner group-hover:border-accent/50 transition-colors">
                        {n}
                      </div>
                    ))}
                  </div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Total Verified Visitors</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-12 border-t border-primary/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="flex flex-col gap-2">
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                &copy; {new Date().getFullYear()} THE FRIENDS OF THE DEPRESSED LEAGUE (FDL&apos;s). ALL RIGHTS RESERVED.
              </p>
              <p className="text-[9px] font-bold text-slate-300 uppercase italic">Established 2021 with a vision for excellence in Shevgaon</p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link) => (
                <a key={link} href="#" className="text-slate-400 text-[10px] font-black uppercase tracking-widest hover:text-accent transition-colors">
                  {link}
                </a>
              ))}
              <a href="/admin/login" className="text-accent text-[10px] font-black uppercase tracking-[0.4em] hover:text-primary transition-all border-l border-primary/10 pl-6 lg:pl-10">
                Admin Portal
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
