'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { 
  Users, 
  BookOpen, 
  FileText, 
  GraduationCap, 
  LogOut, 
  Bell,
  Search,
  LayoutDashboard,
  Briefcase
} from 'lucide-react'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [adminUser, setAdminUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const userStr = localStorage.getItem('adminUser')
    const token = localStorage.getItem('adminToken')

    if (!userStr || !token) {
      window.location.href = '/admin/login'
      return
    }

    try {
      const parsed = JSON.parse(userStr)
      Promise.resolve().then(() => {
        setAdminUser(parsed)
        setIsLoading(false)
      })
    } catch (e) {
      window.location.href = '/admin/login'
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminUser')
    window.location.href = '/admin/login'
  }

  if (isLoading) return null

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans">
      {/* Sidebar */}
      <aside className="w-72 bg-primary text-white p-8 flex flex-col h-screen fixed top-0 left-0 overflow-y-auto">
        <div className="flex items-center gap-4 mb-16">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center text-primary font-black">NK</div>
          <div>
            <div className="text-xs font-black uppercase tracking-widest text-accent/80">Control Panel</div>
            <div className="text-lg font-display font-bold text-white tracking-tighter">Admin Portal</div>
          </div>
        </div>

        <nav className="flex-1 space-y-6">
          {[
            { label: 'Dashboard', icon: LayoutDashboard, href: '/admin/dashboard' },
            { label: 'Staff Management', icon: Users, href: '/admin/staff' },
            { label: 'Student Management', icon: GraduationCap, href: '/admin/students' },
            { label: 'Blog & News', icon: FileText, href: '/admin/blogs' },
            { label: 'Academic Courses', icon: BookOpen, href: '/admin/courses' },
            { label: 'Placement Cell', icon: Briefcase, href: '/admin/placements' },
            { label: 'Inquiries', icon: Bell, href: '/admin/inquiries' },
          ].map((item, i) => (
            <a 
              key={i} 
              href={item.href}
              className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all ${window.location.pathname === item.href ? 'bg-white/10 text-accent' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
            >
              <item.icon size={18} strokeWidth={2.5} />
              {item.label}
            </a>
          ))}
        </nav>

        <div className="pt-8 border-t border-white/5 mt-auto">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-4 px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest text-red-400 hover:bg-red-500/10 transition-all font-sans"
          >
            <LogOut size={18} strokeWidth={2.5} />
            Secure Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-72 p-12">
        <header className="flex justify-between items-center mb-16">
          <div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1 italic">
              Institution Command System
            </p>
            <h1 className="text-4xl font-display font-black text-primary tracking-tighter uppercase">
              Management <span className="text-accent italic font-serif normal-case tracking-normal">Console</span>.
            </h1>
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={16} />
              <input 
                placeholder="Global Search..." 
                className="bg-white border-none rounded-xl py-3 pl-12 pr-6 text-xs font-bold text-primary outline-none focus:ring-2 focus:ring-primary/5 shadow-sm min-w-[280px]"
              />
            </div>
            <button className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-slate-400 shadow-sm border border-slate-100 relative">
              <Bell size={20} />
              <div className="absolute top-3 right-3 w-2 h-2 bg-accent rounded-full border-2 border-white" />
            </button>
            <div className="flex items-center gap-4 pl-4 border-l border-slate-200">
               <div className="text-right">
                  <div className="text-xs font-black text-primary uppercase tracking-tighter">{adminUser?.name}</div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{adminUser?.role}</div>
               </div>
               <div className="w-12 h-12 bg-brand-bg rounded-xl border border-primary/5 flex items-center justify-center overflow-hidden">
                  <div className="text-primary font-black text-xs">{adminUser?.name?.charAt(0)}</div>
               </div>
            </div>
          </div>
        </header>

        {children}
      </main>
    </div>
  )
}
