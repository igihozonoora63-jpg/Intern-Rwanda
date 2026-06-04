<!-- About.vue -->
<template>
  <div class="bg-slate-50 min-h-screen">
    <section class="max-w-5xl mx-auto py-24 px-6 text-center">
      <div class="animate-fade-in-up">
        <h1 class="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">
          About <span class="text-teal-700">Intern Rwanda</span>
        </h1>
        <p class="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Intern Rwanda connects TVET students with trusted companies across Rwanda to accelerate technical proficiency.
        </p>
      </div>

      <!-- Staggered Card Metrics Row Layout -->
      <div class="grid md:grid-cols-3 gap-8 mt-20 text-left">
        <!-- Card 1 -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up delay-100">
          <div class="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 font-bold text-xl mb-6">🎯</div>
          <h3 class="font-bold text-xl text-slate-900 mb-3">Our Mission</h3>
          <p class="text-slate-600 text-sm leading-relaxed">Bridge the gap between education and employment.</p>
        </div>

        <!-- Card 2 -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up delay-200">
          <div class="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 font-bold text-xl mb-6">👁️</div>
          <h3 class="font-bold text-xl text-slate-900 mb-3">Our Vision</h3>
          <p class="text-slate-600 text-sm leading-relaxed">Every TVET student gains practical industry experience.</p>
        </div>

        <!-- Card 3 -->
        <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up delay-300">
          <div class="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-700 font-bold text-xl mb-6">💎</div>
          <h3 class="font-bold text-xl text-slate-900 mb-3">Our Values</h3>
          <p class="text-slate-600 text-sm leading-relaxed">Integrity, innovation, transparency and sustainable industry growth.</p>
        </div>
      </div>
    </section>
  </div>
</template>