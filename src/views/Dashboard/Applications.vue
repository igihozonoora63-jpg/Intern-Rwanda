<template>
  <div class="space-y-6 animate-fade-in-up">
    <div>
      <h1 class="text-3xl font-bold text-slate-900 tracking-tight">My Applications</h1>
      <p class="text-slate-500 mt-1">Track pending reviews and responses for positions you requested.</p>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr class="bg-slate-50 border-b border-slate-200/80 text-slate-400 text-xs font-bold uppercase tracking-wider">
              <th class="p-4 pl-6">Company</th>
              <th class="p-4">Status</th>
              <th class="p-4 pr-6">Date</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 text-sm text-slate-700">
            <tr class="hover:bg-slate-50/50 transition duration-200">
              <td class="p-4 pl-6 font-bold text-slate-800">BK Group</td>
              <td class="p-4">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-700">Pending</span>
              </td>
              <td class="p-4 text-slate-500 pr-6">03 June 2026</td>
            </tr>
            <tr class="hover:bg-slate-50/50 transition duration-200">
              <td class="p-4 pl-6 font-bold text-slate-800">MTN Rwanda</td>
              <td class="p-4">
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700">Accepted</span>
              </td>
              <td class="p-4 text-slate-500 pr-6">28 May 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>