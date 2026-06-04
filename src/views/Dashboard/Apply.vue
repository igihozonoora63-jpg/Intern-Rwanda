<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

// Form state
const form = ref({
  fullName: '',
  email: '',
  phone: '',
  portfolioUrl: '',
  coverLetter: ''
});

const resume = ref(null);
const isSubmitting = ref(false);
const isSuccess = ref(false);

// Handle file input
const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    resume.value = file;
  }
};

// Handle form submission
const handleSubmit = async () => {
  isSubmitting.value = true;
  
  // Simulate API request timeout
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  isSubmitting.value = false;
  isSuccess.value = true;
  
  // Redirect back to the internship listings after a short delay
  setTimeout(() => {
    router.push('/');
  }, 2000);
};

const handleCancel = () => {
  router.back();
};
</script>

<template>
  <div class="max-w-2xl mx-auto space-y-6 py-4">
    <!-- Header -->
    <div>
      <h1 class="text-3xl font-bold text-slate-900 tracking-tight">Internship Application</h1>
      <p class="text-slate-500 mt-1">Please fill out the form below to submit your application.</p>
    </div>

    <!-- Success Message Banner -->
    <div v-if="isSuccess" class="bg-teal-50 border border-teal-200 text-teal-800 p-4 rounded-xl flex items-center gap-3 transition-all">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <div>
        <p class="font-semibold">Application Submitted Successfully!</p>
        <p class="text-sm text-teal-700/90 mt-0.5">Redirecting you back to the available opportunities...</p>
      </div>
    </div>

    <!-- Application Form Card -->
    <div class="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200/60">
      <form @submit.prevent="handleSubmit" class="space-y-5">
        
        <!-- Full Name -->
        <div>
          <label for="fullName" class="block text-sm font-semibold text-slate-700 mb-1.5">Full Name *</label>
          <input 
            v-model="form.fullName"
            id="fullName" 
            type="text" 
            required
            placeholder="John Doe"
            class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 text-slate-800 transition"
          />
        </div>

        <!-- Grid Container for Email and Phone -->
        <div class="grid sm:grid-cols-2 gap-4">
          <!-- Email Address -->
          <div>
            <label for="email" class="block text-sm font-semibold text-slate-700 mb-1.5">Email Address *</label>
            <input 
              v-model="form.email"
              id="email" 
              type="email" 
              required
              placeholder="you@example.com"
              class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 text-slate-800 transition"
            />
          </div>

          <!-- Phone Number -->
          <div>
            <label for="phone" class="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number *</label>
            <input 
              v-model="form.phone"
              id="phone" 
              type="tel" 
              required
              placeholder="+250 78X XXX XXX"
              class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 text-slate-800 transition"
            />
          </div>
        </div>

        <!-- Portfolio / Website Link -->
        <div>
          <label for="portfolio" class="block text-sm font-semibold text-slate-700 mb-1.5">Portfolio or GitHub URL</label>
          <input 
            v-model="form.portfolioUrl"
            id="portfolio" 
            type="url" 
            placeholder="https://github.com/yourusername"
            class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 text-slate-800 transition"
          />
        </div>

        <!-- Resume Upload -->
        <div>
          <label class="block text-sm font-semibold text-slate-700 mb-1.5">Upload CV/Resume *</label>
          <div class="border-2 border-dashed border-slate-200 hover:border-slate-300 rounded-xl p-4 transition text-center relative bg-slate-50/50">
            <input 
              type="file" 
              id="resume" 
              required
              accept=".pdf,.doc,.docx"
              @change="handleFileUpload"
              class="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div class="space-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto h-8 w-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <div class="text-sm text-slate-600">
                <span class="text-teal-600 font-semibold">Click to upload</span> or drag and drop
              </div>
              <p class="text-xs text-slate-400">PDF, DOC, or DOCX up to 5MB</p>
            </div>
          </div>
          <!-- Selected File Display -->
          <p v-if="resume" class="mt-2 text-xs font-medium text-teal-600 flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Selected file: {{ resume.name }}
          </p>
        </div>

        <!-- Cover Letter / Why do you want this role? -->
        <div>
          <label for="coverLetter" class="block text-sm font-semibold text-slate-700 mb-1.5">Cover Letter / Note to Hirer</label>
          <textarea 
            v-model="form.coverLetter"
            id="coverLetter" 
            rows="4" 
            placeholder="Briefly describe why you are a great fit for this structural or development internship..."
            class="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 text-slate-800 transition resize-none"
          ></textarea>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center justify-end gap-3 pt-2">
          <button 
            type="button" 
            @click="handleCancel"
            class="px-5 py-2.5 border border-slate-200 rounded-xl text-slate-600 text-sm font-semibold hover:bg-slate-50 transition"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            :disabled="isSubmitting || isSuccess"
            class="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 disabled:bg-teal-400 text-white text-sm font-semibold rounded-xl transition shadow-sm flex items-center justify-center min-w-[140px]"
          >
            <!-- Loading Spinner State -->
            <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ isSubmitting ? 'Submitting...' : 'Submit Application' }}
          </button>
        </div>
        
      </form>
    </div>
  </div>
</template>