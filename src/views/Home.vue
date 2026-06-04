<script setup>
import { GraduationCap, FileText, ShieldCheck, Bell, ArrowRight } from "lucide-vue-next";
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-poppins overflow-hidden">
    <!-- Hero Section -->
    <section class="max-w-7xl mx-auto px-6 md:px-20 py-20 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center animate-fade-in-up">
      <div>
        <h1 class="text-5xl md:text-[70px] md:leading-[76px] font-extrabold text-slate-900 tracking-tight">
          Land your <br />
          first <span class="text-teal-700 relative inline-block">real-world<span class="absolute bottom-1 left-0 w-full h-2 bg-teal-100 -z-10"></span></span> <br />
          internship.
        </h1>

        <p class="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
          Intern Rwanda connects students from technical schools with companies hiring for hands-on internships — in your trade, on your terms.
        </p>

        <div class="mt-10 flex flex-col sm:flex-row gap-4">
          <router-link to="/register" class="w-full sm:w-auto">
            <button class="w-full bg-teal-700 hover:bg-teal-800 active:scale-[0.98] transition-all text-white px-8 py-4 rounded-xl text-md font-semibold flex items-center justify-center gap-3 shadow-lg shadow-teal-700/10">
              <GraduationCap :size="20" />
              I'm a student
            </button>
          </router-link>
          
          <router-link to="/register" class="w-full sm:w-auto">
            <button class="w-full bg-white hover:bg-slate-50 active:scale-[0.98] border border-slate-200 transition-all text-slate-800 px-8 py-4 rounded-xl text-md font-semibold flex items-center justify-center gap-3 shadow-sm">
              <FileText :size="20" class="text-teal-700" />
              I'm a company
            </button>
          </router-link>
        </div>

        <div class="mt-6">
          <router-link to="/about" class="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-semibold transition group">
            Learn more about our mission
            <ArrowRight :size="16" class="transform group-hover:translate-x-1.5 transition-transform" />
          </router-link>
        </div>
      </div>

      <!-- Features Right Grid Layout Panel -->
      <div class="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 space-y-8 relative">
        <div class="flex gap-5 group cursor-pointer">
          <div class="w-14 h-14 shrink-0 rounded-2xl bg-teal-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300 text-teal-700">
            <GraduationCap :size="24" />
          </div>
          <div>
            <h3 class="font-bold text-xl text-slate-900">Verified TVET students</h3>
            <p class="text-slate-500 mt-1">Schools confirm enrollment & your active trade details instantly.</p>
          </div>
        </div>

        <div class="flex gap-5 group cursor-pointer">
          <div class="w-14 h-14 shrink-0 rounded-2xl bg-teal-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300 text-teal-700">
            <FileText :size="24" />
          </div>
          <div>
            <h3 class="font-bold text-xl text-slate-900">Report cards on demand</h3>
            <p class="text-slate-500 mt-1">Share academic and performance records securely with employers.</p>
          </div>
        </div>

        <div class="flex gap-5 group cursor-pointer">
          <div class="w-14 h-14 shrink-0 rounded-2xl bg-teal-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300 text-teal-700">
            <ShieldCheck :size="24" />
          </div>
          <div>
            <h3 class="font-bold text-xl text-slate-900">Trusted companies</h3>
            <p class="text-slate-500 mt-1">Vetted and verified employers operating actively across Rwanda.</p>
          </div>
        </div>

        <div class="flex gap-5 group cursor-pointer">
          <div class="w-14 h-14 shrink-0 rounded-2xl bg-teal-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-teal-700 group-hover:text-white transition-all duration-300 text-teal-700">
            <Bell :size="24" />
          </div>
          <div>
            <h3 class="font-bold text-xl text-slate-900">Real-time updates</h3>
            <p class="text-slate-500 mt-1">Get automatically notified via platform at every milestone step.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Structural Mapping -->
    <section class="max-w-7xl mx-auto px-6 py-20 border-t border-slate-200/60">
      <h2 class="text-3xl font-bold text-center text-slate-900 mb-16">How It Works</h2>
      
      <div class="flex flex-wrap justify-center gap-8">
        <!-- Step 1 Card -->
        <div class="w-80 bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group opacity-0 animate-fade-in-up delay-100">
          <div>
            <div class="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2">Step 01</div>
            <h3 class="text-2xl font-bold text-slate-800 mb-3 group-hover:text-teal-700 transition-colors">Register</h3>
            <p class="text-slate-500 text-sm leading-relaxed">Students share name, email, school and trade. Companies generate an official firm profile.</p>
          </div>
          <router-link to="/register" class="mt-8 block">
            <button class="w-full bg-slate-50 group-hover:bg-teal-700 group-hover:text-white text-slate-700 py-3 rounded-xl font-semibold transition-all duration-300 text-sm">
              Get started
            </button>
          </router-link>
        </div>

        <!-- Step 2 Card -->
        <div class="w-80 bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fade-in-up delay-200">
          <div class="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2">Step 02</div>
          <h3 class="text-2xl font-bold text-slate-800 mb-3">Apply or Post</h3>
          <p class="text-slate-500 text-sm leading-relaxed">Students browse verified open roles and submit applications. Companies post roles and review intakes.</p>
        </div>

        <!-- Step 3 Card -->
        <div class="w-80 bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 opacity-0 animate-fade-in-up delay-300">
          <div class="text-xs font-bold uppercase tracking-widest text-teal-600 mb-2">Step 03</div>
          <h3 class="text-2xl font-bold text-slate-800 mb-3">Verify & Hire</h3>
          <p class="text-slate-500 text-sm leading-relaxed">Companies request secure report cards, confirm legitimacy with school registers, and sign contracts.</p>
        </div>
      </div>
    </section>
  </div>
</template>