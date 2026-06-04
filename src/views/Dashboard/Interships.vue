<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();
</script>

<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-3xl font-bold text-slate-900 tracking-tight">Available Internships</h1>
      <p class="text-slate-500 mt-1">Browse verified structural opportunities in your selected trade sector.</p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- CARD 1 -->
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-between items-start gap-4">
        <div class="w-full">
          <h2 class="font-bold text-xl text-slate-800">BK Group</h2>
          <p class="text-slate-600 mt-1 text-sm">Software Development Intern</p>
        </div>
        <button
          @click="router.push('/apply')"
          class="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition shadow-sm w-full text-center"
        >
          Apply Now
        </button>
      </div>

      <!-- CARD 2 -->
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-between items-start gap-4">
        <div class="w-full">
          <h2 class="font-bold text-xl text-slate-800">MTN Rwanda</h2>
          <p class="text-slate-600 mt-1 text-sm">UI/UX Intern</p>
        </div>
        <button 
          @click="router.push('/apply')"
          class="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition shadow-sm w-full text-center"
        >
          Apply
        </button>
      </div>

      <!-- CARD 3 -->
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-between items-start gap-4">
        <div class="w-full">
          <h2 class="font-bold text-xl text-slate-800">Irembo</h2>
          <p class="text-slate-600 mt-1 text-sm">Frontend Developer Intern</p>
        </div>
        <button 
          @click="router.push('/apply')"
          class="bg-teal-600 hover:bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-xl transition shadow-sm w-full text-center"
        >
          Apply
        </button>
      </div>
    </div>
  </div>
</template>