'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react'
import { Lock, User, ArrowRight, ShieldCheck, Mail } from 'lucide-react'
import Image from 'next/image'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })

      const data = await res.json()

      if (res.ok) {
        localStorage.setItem('adminToken', data.token)
        localStorage.setItem('adminUser', JSON.stringify(data))
        window.location.href = '/admin/dashboard'
      } else {
        setError(data.message || 'Invalid credentials')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 font-sans">
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/edu/1920/1080?blur=10')] bg-cover bg-center opacity-[0.03] pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[480px] bg-white rounded-[40px] shadow-2xl shadow-primary/5 p-12 relative overflow-hidden border border-primary/5"
      >
        <div className="absolute top-0 right-0 p-8 opacity-[0.03]">
          <ShieldCheck size={120} strokeWidth={1} />
        </div>

        <div className="mb-12">
          <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-accent mb-8 shadow-xl shadow-primary/20">
            <Lock size={32} />
          </div>
          <h1 className="text-4xl font-display font-black text-primary tracking-tighter uppercase mb-4">
            Security <br/>
            <span className="text-accent italic font-serif lowercase tracking-normal">Gateway</span>.
          </h1>
          <p className="text-slate-500 font-medium leading-relaxed">
            Authorized access only. Please provide your institutional credentials to enter the control panel.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Admin Email</label>
            <div className="relative group">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors">
                <Mail size={18} />
              </div>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-[#F1F5F9] border-none rounded-2xl py-5 pl-14 pr-6 text-sm font-bold text-primary outline-none focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-slate-300"
                placeholder="admin@nkacs.edu"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Security Key</label>
            <div className="relative group">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-primary transition-colors">
                <Lock size={18} />
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-[#F1F5F9] border-none rounded-2xl py-5 pl-14 pr-6 text-sm font-bold text-primary outline-none focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-slate-300"
                placeholder="••••••••••••"
              />
            </div>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-red-50 text-red-500 text-[11px] font-bold px-4 py-2 rounded-xl flex items-center gap-2"
            >
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              {error}
            </motion.div>
          )}

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-primary hover:bg-secondary text-white py-6 rounded-2xl font-black text-[11px] uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 relative overflow-hidden group shadow-xl shadow-primary/20 disabled:opacity-50"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>
                Initiate Session
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          <button 
            type="button"
            onClick={() => {
              localStorage.setItem('adminToken', 'DEMO_TOKEN')
              localStorage.setItem('adminUser', JSON.stringify({ name: 'Demo Admin', email: 'demo@nkacs.edu', role: 'Super Admin' }))
              window.location.href = '/admin/dashboard'
            }}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-500 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] transition-all"
          >
            Explore with Demo Access
          </button>
        </form>

        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col items-center gap-4 text-center">
          <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-relaxed">
            Institutional Control System v2.0 <br/>
            NKACS Shevgaon
          </p>
          <div className="flex gap-4">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <div className="w-2 h-2 bg-slate-100 rounded-full" />
            <div className="w-2 h-2 bg-slate-100 rounded-full" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
