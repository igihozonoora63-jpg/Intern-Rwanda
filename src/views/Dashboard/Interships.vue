<script setup>
import { useRouter } from 'vue-router';
import { MapPin, Building2, Calendar, ArrowUpRight } from 'lucide-vue-next';
const router = useRouter();
</script>

<template>
  <div class="space-y-6 animate-fade-in-up">
    <div>
      <h1 class="text-3xl font-bold text-slate-900 tracking-tight">Available Internships</h1>
      <p class="text-slate-500 mt-1">Browse verified structural opportunities in your selected trade sector.</p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-between items-start gap-5 hover:shadow-md hover:border-slate-300 transition-all duration-300 group">
        <div class="w-full space-y-3">
          <div class="flex justify-between items-start">
            <div class="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 font-bold"><Building2 :size="20" /></div>
            <span class="bg-teal-50 text-teal-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">Software</span>
          </div>
          <div>
            <h2 class="font-bold text-xl text-slate-800 group-hover:text-teal-700 transition-colors">{{ flex || 'BK Group' }}</h2>
            <p class="text-slate-500 mt-1 text-sm font-medium">Software Development Intern</p>
          </div>
          <div class="flex items-center gap-3 text-xs text-slate-400 pt-1">
            <span class="flex items-center gap-1"><MapPin :size="12" /> Kigali</span>
            <span>•</span>
            <span class="flex items-center gap-1"><Calendar :size="12" /> 3 Months</span>
          </div>
        </div>
        <button
          @click="router.push('/apply')"
          class="bg-teal-700 hover:bg-teal-800 active:scale-[0.98] text-white text-sm font-semibold px-4 py-3 rounded-xl transition-all w-full text-center flex items-center justify-center gap-1 shadow-sm"
        >
          Apply Now <ArrowUpRight :size="14" />
        </button>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-between items-start gap-5 hover:shadow-md hover:border-slate-300 transition-all duration-300 group">
        <div class="w-full space-y-3">
          <div class="flex justify-between items-start">
            <div class="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 font-bold"><Building2 :size="20" /></div>
            <span class="bg-indigo-50 text-indigo-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">Design</span>
          </div>
          <div>
            <h2 class="font-bold text-xl text-slate-800 group-hover:text-indigo-700 transition-colors">MTN Rwanda</h2>
            <p class="text-slate-500 mt-1 text-sm font-medium">UI/UX Intern</p>
          </div>
          <div class="flex items-center gap-3 text-xs text-slate-400 pt-1">
            <span class="flex items-center gap-1"><MapPin :size="12" /> Nyarugenge</span>
            <span>•</span>
            <span class="flex items-center gap-1"><Calendar :size="12" /> 6 Months</span>
          </div>
        </div>
        <button 
          @click="router.push('/apply')"
          class="bg-teal-700 hover:bg-teal-800 active:scale-[0.98] text-white text-sm font-semibold px-4 py-3 rounded-xl transition-all w-full text-center flex items-center justify-center gap-1 shadow-sm"
        >
          Apply Now <ArrowUpRight :size="14" />
        </button>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-between items-start gap-5 hover:shadow-md hover:border-slate-300 transition-all duration-300 group">
        <div class="w-full space-y-3">
          <div class="flex justify-between items-start">
            <div class="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold"><Building2 :size="20" /></div>
            <span class="bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">Fintech</span>
          </div>
          <div>
            <h2 class="font-bold text-xl text-slate-800 group-hover:text-emerald-700 transition-colors">Irembo</h2>
            <p class="text-slate-500 mt-1 text-sm font-medium">Frontend Support Intern</p>
          </div>
          <div class="flex items-center gap-3 text-xs text-slate-400 pt-1">
            <span class="flex items-center gap-1"><MapPin :size="12" /> Remera</span>
            <span>•</span>
            <span class="flex items-center gap-1"><Calendar :size="12" /> 3 Months</span>
          </div>
        </div>
        <button 
          @click="router.push('/apply')"
          class="bg-teal-700 hover:bg-teal-800 active:scale-[0.98] text-white text-sm font-semibold px-4 py-3 rounded-xl transition-all w-full text-center flex items-center justify-center gap-1 shadow-sm"
        >
          Apply Now <ArrowUpRight :size="14" />
        </button>
      </div>
    </div>
  </div>
</template>