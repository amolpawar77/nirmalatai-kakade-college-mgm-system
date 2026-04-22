'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react'
import { 
  Users, 
  Plus, 
  Mail, 
  Phone, 
  MapPin, 
  MoreVertical,
  CheckCircle2,
  Clock
} from 'lucide-react'
import AdminLayout from '@/components/AdminLayout'

const MOCK_STAFF = [
  { id: 1, name: 'Dr. Sanjay Deshmukh', role: 'Principal', dept: 'Administration', email: 'sanjay.d@nkacs.edu', status: 'Active' },
  { id: 2, name: 'Prof. Anjali Kulkarni', role: 'Head of Dept', dept: 'Computer Science', email: 'anjali.k@nkacs.edu', status: 'Active' },
  { id: 3, name: 'Dr. Robert Dsouza', role: 'Asst. Professor', dept: 'Physics', email: 'robert.d@nkacs.edu', status: 'On Leave' },
  { id: 4, name: 'Mrs. Geeta Patil', role: 'Senior Lecturer', dept: 'Mathematics', email: 'geeta.p@nkacs.edu', status: 'Active' },
]

export default function StaffManagement() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <AdminLayout>
      <div className="flex justify-between items-center mb-10">
        <div>
          <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-primary mb-2">Faculty Records</h2>
          <p className="text-slate-400 text-xs font-medium">Manage institutional staff profiles and attendance tracking.</p>
        </div>
        <button className="bg-primary text-white px-8 py-4 rounded-2xl flex items-center gap-3 text-[11px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-transform">
          <Plus size={18} />
          Register New Staff
        </button>
      </div>

      {/* Grid View */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {MOCK_STAFF.map((member, i) => (
          <motion.div 
            key={member.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="bg-white p-8 rounded-[40px] border border-primary/5 shadow-sm hover:shadow-xl transition-all relative group"
          >
            <div className="absolute top-8 right-8">
              <button className="w-10 h-10 rounded-xl hover:bg-slate-50 flex items-center justify-center text-slate-300">
                <MoreVertical size={20} />
              </button>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-24 h-24 bg-brand-bg rounded-[32px] flex items-center justify-center border border-primary/5 relative">
                <div className="text-2xl font-black text-primary">{member.name.charAt(0)}</div>
                <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-4 border-white flex items-center justify-center ${member.status === 'Active' ? 'bg-green-500' : 'bg-amber-500'}`}>
                  {member.status === 'Active' ? <CheckCircle2 size={12} className="text-white" /> : <Clock size={12} className="text-white" />}
                </div>
              </div>

              <div className="flex-1">
                <div className="mb-4">
                  <h3 className="text-lg font-display font-black text-primary tracking-tight">{member.name}</h3>
                  <p className="text-accent text-[10px] font-black uppercase tracking-widest leading-loose">{member.role} • {member.dept}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-3 text-slate-400">
                    <Mail size={14} className="text-slate-300" />
                    <span className="text-xs font-bold truncate max-w-[140px]">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <Phone size={14} className="text-slate-300" />
                    <span className="text-xs font-bold">+91 98765-43210</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-50 flex gap-4">
               <button className="flex-1 bg-slate-50 hover:bg-primary hover:text-white py-4 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">
                  Full Dossier
               </button>
               <button className="flex-1 bg-slate-50 hover:bg-primary hover:text-white py-4 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all">
                  Track Attendance
               </button>
            </div>
          </motion.div>
        ))}
      </div>
    </AdminLayout>
  )
}
