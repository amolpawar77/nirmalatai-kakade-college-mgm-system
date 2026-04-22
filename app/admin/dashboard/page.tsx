'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { 
  Users, 
  BookOpen, 
  FileText, 
  GraduationCap, 
  Settings,
  PlusCircle
} from 'lucide-react'
import AdminLayout from '@/components/AdminLayout'

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalStudents: 1240,
    totalStaff: 86,
    totalCourses: 12,
    totalBlogs: 45
  })
  const [isDemo, setIsDemo] = useState(false)

  const fetchStats = async (token: string) => {
    try {
      const res = await fetch('/api/dashboard/stats', {
        headers: { 'Authorization': `Bearer ${token}` }
      })
      if (res.ok) {
        const data = await res.json()
        setStats(data)
      }
    } catch (err) {
      console.warn('API unavailable, showing local stats')
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (token === 'DEMO_TOKEN') {
      Promise.resolve().then(() => {
        if (!isDemo) setIsDemo(true)
      })
    } else if (token) {
      Promise.resolve().then(() => fetchStats(token))
    }
  }, [isDemo])

  return (
    <AdminLayout>
        {isDemo && (
          <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl mb-8 flex items-center justify-between">
            <p className="text-amber-700 text-xs font-bold px-4">
              <span className="uppercase tracking-widest mr-2">[DEMO MODE]</span> 
              You are exploring the UI with sample data. Configure <code className="bg-white/50 px-1 rounded">MONGO_URI</code> to enable live data.
            </p>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-8 mb-16">
          {[
            { label: 'Total Students', value: stats.totalStudents, icon: GraduationCap, color: 'bg-blue-600' },
            { label: 'Faculty Staff', value: stats.totalStaff, icon: Users, color: 'bg-emerald-600' },
            { label: 'Active Courses', value: stats.totalCourses, icon: BookOpen, color: 'bg-amber-600' },
            { label: 'Published Blogs', value: stats.totalBlogs, icon: FileText, color: 'bg-purple-600' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-primary/5 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`w-12 h-12 ${stat.color} text-white rounded-2xl flex items-center justify-center shadow-lg`}>
                  <stat.icon size={20} strokeWidth={2.5} />
                </div>
                <div className="text-[10px] font-black text-slate-400 bg-slate-50 px-3 py-1 rounded-full uppercase tracking-widest">Real-time</div>
              </div>
              <div className="text-4xl font-display font-black text-primary tracking-tighter mb-1">{stat.value.toLocaleString()}</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-loose">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Recent Actions Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-[40px] border border-primary/5 shadow-sm">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Content Repository</h2>
              <button className="flex items-center gap-2 text-accent text-[10px] font-black uppercase tracking-widest">
                <PlusCircle size={14} /> Add Content
              </button>
            </div>
            <div className="space-y-6">
              {[
                { title: 'New Academic Session 2024-25 Opening', time: '2 hours ago' },
                { title: 'Annual Sports Meet - Announcement', time: 'Yesterday' },
                { title: 'Placement Drive: Tata Consultancy Services', time: '3 days ago' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-4 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className="w-14 h-14 bg-brand-bg rounded-xl flex items-center justify-center text-primary">
                    <FileText size={20} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-bold text-primary mb-1">{item.title}</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">{item.time}</div>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all cursor-pointer">
                      <Settings size={14} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 rounded-[40px] border border-primary/5 shadow-sm">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-primary">Recent Inquiries</h2>
              <div className="text-accent text-[10px] font-black uppercase tracking-widest">View All</div>
            </div>
            <div className="space-y-6">
              {[
                { name: 'Rajesh Kumar', topic: 'Admission Query', text: 'Interested in BSc Computer Science. Wanted to know about hostel facilities...' },
                { name: 'Snehal Patil', topic: 'Course Inquiry', text: 'Does the college provide part-time MBA courses for working professionals?' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 p-6 bg-slate-50 rounded-[24px]">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                    <Users size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-primary mb-1">{item.name} <span className="text-slate-300 font-medium ml-2">• {item.topic}</span></div>
                    <p className="text-xs text-slate-500 leading-relaxed mb-4">{item.text}</p>
                    <div className="flex gap-3">
                      <span className="text-[9px] font-black bg-white px-3 py-1 rounded-full text-primary shadow-sm uppercase tracking-widest">Reply</span>
                      <span className="text-[9px] font-black bg-white px-3 py-1 rounded-full text-primary shadow-sm uppercase tracking-widest">Mark read</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </AdminLayout>
  )
}
