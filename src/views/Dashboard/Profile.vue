<!-- Profile.vue -->
<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-4xl font-extrabold text-gray-800 tracking-tight">
        Welcome Back, Noora 👋
      </h1>
      <p class="text-slate-500 mt-1">Here is a summary overview of your application status across Rwanda's technical sectors.</p>
    </div>

    <!-- Stats Counter Metrics Layout Row -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60">
        <h3 class="text-gray-500 font-medium text-sm">Applications</h3>
        <p class="text-3xl font-bold text-slate-800 mt-2">12</p>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60">
        <h3 class="text-gray-500 font-medium text-sm">Accepted</h3>
        <p class="text-3xl font-bold text-green-600 mt-2">3</p>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60">
        <h3 class="text-gray-500 font-medium text-sm">Pending</h3>
        <p class="text-3xl font-bold text-amber-600 mt-2">5</p>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60">
        <h3 class="text-gray-500 font-medium text-sm">Rejected</h3>
        <p class="text-3xl font-bold text-red-600 mt-2">4</p>
      </div>
    </div>

    <!-- Student Informational Sheet Card -->
    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 max-w-4xl">
      <h2 class="text-2xl font-bold text-slate-800 border-b border-slate-100 pb-4 mb-6">
        Student Profile
      </h2>

      <div class="grid md:grid-cols-2 gap-6 text-slate-700 text-sm md:text-base leading-relaxed">
        <div class="space-y-3">
          <p><strong class="text-slate-500 font-medium inline-block w-24">Name:</strong> Noora Uwase</p>
          <p><strong class="text-slate-500 font-medium inline-block w-24">School:</strong> SOS Technical High School</p>
          <p><strong class="text-slate-500 font-medium inline-block w-24">Trade:</strong> Software Development</p>
        </div>

        <div class="space-y-3">
          <p><strong class="text-slate-500 font-medium inline-block w-24">Email:</strong> noora@gmail.com</p>
          <p><strong class="text-slate-500 font-medium inline-block w-24">Level:</strong> L5</p>
          <p><strong class="text-slate-500 font-medium inline-block w-24">Phone:</strong> +250...</p>
        </div>
      </div>
    </div>
  </div>
</template>