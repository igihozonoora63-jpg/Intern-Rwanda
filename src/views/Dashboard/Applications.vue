<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-3xl font-bold text-slate-900 tracking-tight">My Applications</h1>
      <p class="text-slate-500 mt-1">Track pending reviews and responses for positions you requested.</p>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-x-auto">
      <table class="w-full text-left border-collapse min-w-[600px]">
        <thead>
          <tr class="bg-slate-50 border-b border-slate-200/80">
            <th class="text-xs font-bold uppercase tracking-wider text-slate-500 p-4 pl-6">Company</th>
            <th class="text-xs font-bold uppercase tracking-wider text-slate-500 p-4">Status</th>
            <th class="text-xs font-bold uppercase tracking-wider text-slate-500 p-4 pr-6">Date</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-100 text-sm">
          <tr class="hover:bg-slate-50/50 transition">
            <td class="p-4 pl-6 font-semibold text-slate-800">BK Group</td>
            <td class="p-4">
              <span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-yellow-50 text-yellow-600">Pending</span>
            </td>
            <td class="p-4 text-slate-500 pr-6">03 June 2026</td>
          </tr>
          <tr class="hover:bg-slate-50/50 transition">
            <td class="p-4 pl-6 font-semibold text-slate-800">MTN Rwanda</td>
            <td class="p-4">
              <span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-green-50 text-green-600">Accepted</span>
            </td>
            <td class="p-4 text-slate-500 pr-6">28 May 2026</td>
          </tr>
          <tr class="hover:bg-slate-50/50 transition">
            <td class="p-4 pl-6 font-semibold text-slate-800">Irembo</td>
            <td class="p-4">
              <span class="px-2.5 py-1 text-xs font-semibold rounded-full bg-red-50 text-red-600">Rejected</span>
            </td>
            <td class="p-4 text-slate-500 pr-6">22 May 2026</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>