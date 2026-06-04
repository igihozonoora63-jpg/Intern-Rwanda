<!-- PostInternships.vue -->
<script setup>
import { ref } from 'vue';
import { Briefcase, MapPin, GraduationCap, Calendar, AlignLeft, PlusCircle } from 'lucide-vue-next';

const isPosting = ref(false);

const form = ref({
  title: '',
  location: '',
  trade: '',
  description: '',
  deadline: ''
});

const handlePostSubmit = async () => {
  isPosting.value = true;
  await new Promise(resolve => setTimeout(resolve, 1200));
  isPosting.value = false;
  
  // Clear layout input bounds
  form.value = { title: '', location: '', trade: '', description: '', deadline: '' };
  alert('Vacancy register broadcasted successfully across the integrated TVET stream.');
};
</script>

<template>
  <div class="space-y-6 animate-fade-in-up">
    <div>
      <h1 class="text-3xl font-black text-slate-900 tracking-tight">Post Internship</h1>
      <p class="text-slate-500 mt-1.5 text-sm sm:text-base">Publish available pipeline vacancies to seamlessly match with technical training networks.</p>
    </div>

    <div class="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-100/50 border border-slate-100 max-w-3xl">
      <form @submit.prevent="handlePostSubmit" class="space-y-5">
        
        <!-- Job Title -->
        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Internship Title</label>
          <div class="relative">
            <Briefcase :size="18" class="absolute left-4 top-3.5 text-slate-400" />
            <input v-model="form.title" required type="text" placeholder="e.g., Embedded Systems Junior Developer" class="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-600/10 focus:border-teal-600 focus:outline-none bg-slate-50/30 text-sm transition text-slate-800" />
          </div>
        </div>

        <!-- Grid Block Constraints -->
        <div class="grid md:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Location</label>
            <div class="relative">
              <MapPin :size="18" class="absolute left-4 top-3.5 text-slate-400" />
              <input v-model="form.location" required type="text" placeholder="e.g., Kigali, Rwanda" class="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-600/10 focus:border-teal-600 focus:outline-none bg-slate-50/30 text-sm transition text-slate-800" />
            </div>
          </div>
          <div>
            <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Trade Required</label>
            <div class="relative">
              <GraduationCap :size="18" class="absolute left-4 top-3.5 text-slate-400" />
              <input v-model="form.trade" required type="text" placeholder="e.g., Software Development" class="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-600/10 focus:border-teal-600 focus:outline-none bg-slate-50/30 text-sm transition text-slate-800" />
            </div>
          </div>
        </div>

        <!-- Description Workspace -->
        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Internship Description</label>
          <div class="relative">
            <AlignLeft :size="18" class="absolute left-4 top-3.5 text-slate-400" />
            <textarea v-model="form.description" required placeholder="Outline core project tasks, expected workflow guidelines, and specific technical tools..." rows="5" class="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-600/10 focus:border-teal-600 focus:outline-none bg-slate-50/30 text-sm transition text-slate-800 resize-none"></textarea>
          </div>
        </div>

        <!-- Target Deadline Selection -->
        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Application Deadline</label>
          <div class="relative">
            <Calendar :size="18" class="absolute left-4 top-3.5 text-slate-400" />
            <input v-model="form.deadline" required type="date" class="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-teal-600/10 focus:border-teal-600 focus:outline-none bg-slate-50/30 text-sm transition text-slate-800" />
          </div>
        </div>

        <!-- Execution Command Trigger -->
        <div class="pt-2">
          <button 
            type="submit" 
            :disabled="isPosting"
            class="bg-teal-700 hover:bg-teal-800 disabled:bg-teal-400 text-white font-semibold px-6 py-3.5 rounded-xl transition-all shadow-md shadow-teal-700/10 flex items-center justify-center gap-2 text-sm active:scale-[0.99]"
          >
            <svg v-if="isPosting" class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <PlusCircle v-else :size="16" />
            {{ isPosting ? 'Broadcasting Post...' : 'Broadcast Position' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>