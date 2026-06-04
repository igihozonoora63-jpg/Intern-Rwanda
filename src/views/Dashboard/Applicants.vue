<template>
  <div class="animate-fade-in-up">
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-slate-900 tracking-tight">Applicants</h1>
      <p class="text-slate-500 mt-1">Review student deployment tracks and request records access profiles.</p>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-slate-200/60 overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full border-collapse text-left">
          <thead class="bg-slate-50 border-b border-slate-200/80 text-slate-500 text-xs font-bold uppercase tracking-wider">
            <tr>
              <th class="p-4 pl-6">Student</th>
              <th class="p-4">School</th>
              <th class="p-4">Trade</th>
              <th class="p-4">Status</th>
              <th class="p-4 pr-6 text-right">Actions</th>
            </tr>
          </thead>

          <tbody class="divide-y divide-slate-100 text-sm text-slate-700">
            <tr class="hover:bg-slate-50/60 transition duration-200">
              <td class="p-4 pl-6 font-bold text-slate-900">Noora Igihozo</td>
              <td class="p-4 text-slate-600">SOS Technical High School</td>
              <td class="p-4">
                <span class="bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-md">Software Development</span>
              </td>
              <td class="p-4">
                <span class="inline-flex items-center gap-1.5 bg-amber-50 text-amber-700 text-xs font-bold px-2.5 py-1 rounded-full">
                  <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                  Pending
                </span>
              </td>
              <td class="p-4 pr-6 text-right">
                <div class="inline-flex gap-2 justify-end">
                  <button class="bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs font-bold px-3 py-2 rounded-xl transition shadow-sm">
                    Accept
                  </button>
                  <button class="bg-rose-50 text-rose-600 hover:bg-rose-100 active:scale-95 text-xs font-bold px-3 py-2 rounded-xl transition">
                    Decline
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