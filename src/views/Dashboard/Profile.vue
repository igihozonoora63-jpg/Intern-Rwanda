<template>
  <div class="space-y-8 animate-fade-in-up">
    <div>
      <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight">
        Welcome Back, Noora 👋
      </h1>
      <p class="text-slate-500 mt-1">Here is a summary overview of your application status across Rwanda's technical sectors.</p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
        <h3 class="text-slate-400 font-semibold text-sm uppercase tracking-wider">Applications</h3>
        <p class="text-3xl font-black text-slate-800 mt-2">12</p>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
        <h3 class="text-slate-400 font-semibold text-sm uppercase tracking-wider">Accepted</h3>
        <p class="text-3xl font-black text-emerald-600 mt-2">3</p>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
        <h3 class="text-slate-400 font-semibold text-sm uppercase tracking-wider">Pending</h3>
        <p class="text-3xl font-black text-amber-500 mt-2">5</p>
      </div>

      <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
        <h3 class="text-slate-400 font-semibold text-sm uppercase tracking-wider">Rejected</h3>
        <p class="text-3xl font-black text-rose-600 mt-2">4</p>
      </div>
    </div>

    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 max-w-4xl transition-all duration-300 hover:shadow-md">
      <h2 class="text-2xl font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6">
        Student Profile
      </h2>

      <div class="grid md:grid-cols-2 gap-6 text-slate-700 text-sm md:text-base leading-relaxed">
        <div class="space-y-4">
          <p class="flex items-center"><strong class="text-slate-400 font-semibold inline-block w-28 uppercase tracking-wider text-xs">Name:</strong> <span class="text-slate-800 font-medium">Noora Uwase</span></p>
          <p class="flex items-center"><strong class="text-slate-400 font-semibold inline-block w-28 uppercase tracking-wider text-xs">School:</strong> <span class="text-slate-800 font-medium">SOS Technical High School</span></p>
          <p class="flex items-center"><strong class="text-slate-400 font-semibold inline-block w-28 uppercase tracking-wider text-xs">Trade:</strong> <span class="bg-teal-50 text-teal-700 px-2.5 py-1 rounded-md text-xs font-bold">Software Development</span></p>
        </div>
        <div class="space-y-4">
          <p class="flex items-center"><strong class="text-slate-400 font-semibold inline-block w-28 uppercase tracking-wider text-xs">Email:</strong> <span class="text-slate-800 font-medium">noora@sos.edu.rw</span></p>
          <p class="flex items-center"><strong class="text-slate-400 font-semibold inline-block w-28 uppercase tracking-wider text-xs">Phone:</strong> <span class="text-slate-800 font-medium">+250 788 123 456</span></p>
          <p class="flex items-center"><strong class="text-slate-400 font-semibold inline-block w-28 uppercase tracking-wider text-xs">Status:</strong> <span class="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold px-2.5 py-1 rounded-full">Available</span></p>
        </div>
      </div>
    </div>
  </div>
</template>