<!-- Applicants.vue -->
<template>
  <div>
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-slate-900 tracking-tight">Applicants</h1>
      <p class="text-slate-500 mt-1">Review student deployment tracks and request records access profiles.</p>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full border-collapse text-left">
          <thead class="bg-slate-50 border-b border-slate-200/80">
            <tr>
              <th class="p-4 pl-6 text-xs font-bold uppercase tracking-wider text-slate-500">Student</th>
              <th class="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">School</th>
              <th class="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">Trade</th>
              <th class="p-4 text-xs font-bold uppercase tracking-wider text-slate-500">Status</th>
              <th class="p-4 pr-6 text-right text-xs font-bold uppercase tracking-wider text-slate-500">Actions</th>
            </tr>
          </thead>

          <tbody class="divide-y divide-slate-100 text-sm">
            <tr class="hover:bg-slate-50/60 transition">
              <td class="p-4 pl-6 font-semibold text-slate-900">Noora Uwase</td>
              <td class="p-4 text-slate-600">SOS Technical High School</td>
              <td class="p-4 text-slate-600">
                <span class="bg-slate-100 text-slate-800 text-xs font-medium px-2 py-0.5 rounded-md">Software Development</span>
              </td>
              <td class="p-4">
                <span class="inline-flex items-center gap-1.5 bg-yellow-50 text-yellow-700 text-xs font-semibold px-2.5 py-1 rounded-full">
                  <span class="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>
                  Pending
                </span>
              </td>
              <td class="p-4 pr-6 text-right">
                <div class="inline-flex gap-2 justify-end">
                  <button class="bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition shadow-sm">
                    Accept
                  </button>
                  <button class="bg-red-500 hover:bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition shadow-sm">
                    Reject
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>