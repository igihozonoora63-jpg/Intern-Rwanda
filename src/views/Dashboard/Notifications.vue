<!-- Notifications.vue -->
<template>
  <div>
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-slate-900 tracking-tight">Notifications</h1>
      <p class="text-slate-500 mt-1">Updates concerning your submitted internship tracks and institutional records.</p>
    </div>

    <div class="space-y-3 max-w-2xl">
      <div class="bg-white p-4 rounded-xl border border-slate-200/60 shadow-sm flex items-center gap-3 text-slate-700 text-sm">
        <span class="text-slate-400">🔍</span> <span>BK Group reviewed your application.</span>
      </div>

      <div class="bg-white p-4 rounded-xl border border-emerald-100 bg-emerald-50/10 shadow-sm flex items-center gap-3 text-emerald-900 text-sm">
        <span class="text-emerald-500">🎉</span> <span>MTN Rwanda accepted your application.</span>
      </div>

      <div class="bg-white p-4 rounded-xl border border-blue-100 bg-blue-50/10 shadow-sm flex items-center gap-3 text-blue-900 text-sm">
        <span class="text-blue-500">📄</span> <span>Upload your report card for verification.</span>
      </div>
    </div>
  </div>
</template>