<script setup>
import { GraduationCap, FileText, ShieldCheck, Bell, ArrowRight } from "lucide-vue-next";
</script>

<template>
  <div class="min-h-screen bg-slate-50 font-poppins">
    <section class="max-w-7xl mx-auto px-6 md:px-20 py-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div>
        <h1 class="text-5xl md:text-[75px] md:leading-[80px] font-extrabold text-slate-900 tracking-tight">
          Land your <br />
          first <span class="text-teal-700">real-world</span> <br />
          internship.
        </h1>

        <p class="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
          Intern Rwanda connects students from technical schools with companies hiring for hands-on internships — in your trade, on your terms.
        </p>

        <div class="mt-10 flex flex-col sm:flex-row gap-4">
          <router-link to="/register" class="w-full sm:w-auto">
            <button class="w-full bg-teal-700 hover:bg-teal-800 transition text-white px-8 py-4 rounded-xl text-md font-semibold flex items-center justify-center gap-3 shadow-md">
              <GraduationCap :size="20" />
              I'm a student
            </button>
          </router-link>
          
          <router-link to="/register" class="w-full sm:w-auto">
            <button class="w-full bg-white hover:bg-slate-50 border border-slate-200 transition text-slate-800 px-8 py-4 rounded-xl text-md font-semibold flex items-center justify-center gap-3 shadow-sm">
              <FileText :size="20" class="text-teal-700" />
              I'm a company
            </button>
          </router-link>
        </div>

        <div class="mt-6">
          <router-link to="/about" class="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 font-semibold transition group">
            Learn more about our mission 
            <ArrowRight :size="16" class="transform group-hover:translate-x-1 transition" />
          </router-link>
        </div>
      </div>

      <div class="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100/80 space-y-8">
        <div class="flex gap-5">
          <div class="w-14 h-14 shrink-0 rounded-2xl bg-teal-50 flex items-center justify-center">
            <GraduationCap :size="24" class="text-teal-700" />
          </div>
          <div>
            <h3 class="font-bold text-xl text-slate-900">Verified TVET students</h3>
            <p class="text-slate-500 mt-1">Schools confirm enrollment & your active trade details instantly.</p>
          </div>
        </div>

        <div class="flex gap-5">
          <div class="w-14 h-14 shrink-0 rounded-2xl bg-teal-50 flex items-center justify-center">
            <FileText :size="24" class="text-teal-700" />
          </div>
          <div>
            <h3 class="font-bold text-xl text-slate-900">Report cards on demand</h3>
            <p class="text-slate-500 mt-1">Share academic and performance records securely with employers.</p>
          </div>
        </div>

        <div class="flex gap-5">
          <div class="w-14 h-14 shrink-0 rounded-2xl bg-teal-50 flex items-center justify-center">
            <ShieldCheck :size="24" class="text-teal-700" />
          </div>
          <div>
            <h3 class="font-bold text-xl text-slate-900">Trusted companies</h3>
            <p class="text-slate-500 mt-1">Vetted and verified employers operating actively across Rwanda.</p>
          </div>
        </div>

        <div class="flex gap-5">
          <div class="w-14 h-14 shrink-0 rounded-2xl bg-teal-50 flex items-center justify-center">
            <Bell :size="24" class="text-teal-700" />
          </div>
          <div>
            <h3 class="font-bold text-xl text-slate-900">Real-time updates</h3>
            <p class="text-slate-500 mt-1">Get automatically notified via platform at every milestone step.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-6 py-16 border-t border-slate-200/60">
      <h2 class="text-3xl font-bold text-center text-slate-900 mb-12">How It Works</h2>
      <div class="flex flex-wrap justify-center gap-8">
        <div class="w-72 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold text-teal-700 mb-3">1. Register</h3>
            <p class="text-slate-500 text-sm leading-relaxed">Students share name, email, school and trade. Companies generate an official firm profile.</p>
          </div>
          <router-link to="/register" class="mt-6">
            <button class="w-full bg-teal-700 text-white py-2.5 rounded-xl font-medium hover:bg-teal-800 transition text-sm">
              Get started
            </button>
          </router-link>
        </div>

        <div class="w-72 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <h3 class="text-xl font-bold text-teal-700 mb-3">2. Apply or Post</h3>
          <p class="text-slate-500 text-sm leading-relaxed">Students browse verified open roles and submit applications. Companies post roles and review intakes.</p>
        </div>

        <div class="w-72 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300">
          <h3 class="text-xl font-bold text-teal-700 mb-3">3. Verify & Hire</h3>
          <p class="text-slate-500 text-sm leading-relaxed">Companies request secure report cards, confirm legitimacy with school registers, and sign contracts.</p>
        </div>
      </div>
    </section>
  </div>
</template>