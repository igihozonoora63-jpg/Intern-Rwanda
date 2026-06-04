<!-- Post-internships.vue -->
<template>
  <div class="space-y-6">
    <div>
      <h1 class="text-3xl font-bold text-slate-900 tracking-tight">Post Internship</h1>
      <p class="text-slate-500 mt-1">Publish available positions to connect with technical school trainees.</p>
    </div>

    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-200/60 max-w-3xl">
      <form class="space-y-5">
        <div>
          <label class="block text-sm font-semibold text-slate-700 mb-1">Internship Title</label>
          <input type="text" placeholder="Internship Title" class="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 focus:outline-none bg-slate-50/50" />
        </div>

        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1">Location</label>
            <input type="text" placeholder="Location" class="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 focus:outline-none bg-slate-50/50" />
          </div>
          <div>
            <label class="block text-sm font-semibold text-slate-700 mb-1">Trade Required</label>
            <input type="text" placeholder="Trade Required" class="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 focus:outline-none bg-slate-50/50" />
          </div>
        </div>

        <div>
          <label class="block text-sm font-semibold text-slate-700 mb-1">Internship Description</label>
          <textarea placeholder="Internship Description" rows="5" class="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 focus:outline-none bg-slate-50/50"></textarea>
        </div>

        <div>
          <label class="block text-sm font-semibold text-slate-700 mb-1">Application Deadline</label>
          <input type="date" class="w-full border border-slate-200 p-3 rounded-xl focus:ring-2 focus:ring-teal-600/20 focus:border-teal-600 focus:outline-none bg-slate-50/50" />
        </div>

        <div class="pt-2">
          <button type="submit" class="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-sm">
            Post Internship
          </button>
        </div>
      </form>
    </div>
  </div>
</template>