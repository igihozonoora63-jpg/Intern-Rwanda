<!-- ApplicationForm.vue -->
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { User, Mail, Phone, Link2, UploadCloud, FileText, CheckCircle2, ArrowLeft, Send } from 'lucide-vue-next';

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
  <div class="max-w-2xl mx-auto space-y-6 py-8 px-4 animate-fade-in-up">
    <!-- Header -->
    <div>
      <h1 class="text-3xl font-black text-slate-900 tracking-tight">Internship Application</h1>
      <p class="text-slate-500 mt-1.5 text-sm sm:text-base">Please fill out the form below to submit your corporate training inquiry register.</p>
    </div>

    <!-- Success Message Banner -->
    <transition name="pop">
      <div v-if="isSuccess" class="bg-emerald-50 border border-emerald-200 text-emerald-900 p-5 rounded-2xl flex items-start gap-3.5 shadow-sm shadow-emerald-500/5">
        <CheckCircle2 class="h-5 w-5 text-emerald-600 shrink-0 mt-0.5 animate-bounce" />
        <div>
          <p class="font-bold">Application Dispatched Successfully!</p>
          <p class="text-sm text-emerald-700 mt-0.5">Your documentation is locked. Redirecting you back to the corporate tracking stream...</p>
        </div>
      </div>
    </transition>

    <!-- Application Form Card -->
    <div class="bg-white p-6 md:p-8 rounded-3xl shadow-xl shadow-slate-100/50 border border-slate-100 relative overflow-hidden">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        
        <!-- Full Name -->
        <div>
          <label for="fullName" class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Full Name *</label>
          <div class="relative">
            <User :size="18" class="absolute left-4 top-3.5 text-slate-400" />
            <input 
              v-model="form.fullName"
              id="fullName" 
              type="text" 
              required
              placeholder="John Doe"
              class="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600/10 focus:border-teal-600 text-slate-800 transition text-sm bg-slate-50/30"
            />
          </div>
        </div>

        <!-- Grid Container for Email and Phone -->
        <div class="grid sm:grid-cols-2 gap-4">
          <!-- Email Address -->
          <div>
            <label for="email" class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Email Address *</label>
            <div class="relative">
              <Mail :size="18" class="absolute left-4 top-3.5 text-slate-400" />
              <input 
                v-model="form.email"
                id="email" 
                type="email" 
                required
                placeholder="you@example.com"
                class="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600/10 focus:border-teal-600 text-slate-800 transition text-sm bg-slate-50/30"
              />
            </div>
          </div>

          <!-- Phone Number -->
          <div>
            <label for="phone" class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Phone Number *</label>
            <div class="relative">
              <Phone :size="18" class="absolute left-4 top-3.5 text-slate-400" />
              <input 
                v-model="form.phone"
                id="phone" 
                type="tel" 
                required
                placeholder="+250 78X XXX XXX"
                class="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600/10 focus:border-teal-600 text-slate-800 transition text-sm bg-slate-50/30"
              />
            </div>
          </div>
        </div>

        <!-- Portfolio / Website Link -->
        <div>
          <label for="portfolio" class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Portfolio or GitHub URL</label>
          <div class="relative">
            <Link2 :size="18" class="absolute left-4 top-3.5 text-slate-400" />
            <input 
              v-model="form.portfolioUrl"
              id="portfolio" 
              type="url" 
              placeholder="https://github.com/yourusername"
              class="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600/10 focus:border-teal-600 text-slate-800 transition text-sm bg-slate-50/30"
            />
          </div>
        </div>

        <!-- Resume Upload -->
        <div>
          <label class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Upload CV/Resume *</label>
          <div class="border-2 border-dashed border-slate-200 hover:border-teal-600/40 rounded-xl p-5 transition text-center relative bg-slate-50/50 group">
            <input 
              type="file" 
              id="resume" 
              required
              accept=".pdf,.doc,.docx"
              @change="handleFileUpload"
              class="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
            />
            <div class="space-y-2">
              <UploadCloud :size="32" class="mx-auto text-slate-400 group-hover:text-teal-600 transition-colors" />
              <div class="text-sm text-slate-600">
                <span class="text-teal-700 font-bold">Click to dispatch</span> or drag files here
              </div>
              <p class="text-xs text-slate-400">Secure validation for PDF, DOC, or DOCX formats up to 5MB</p>
            </div>
          </div>
          <!-- Selected File Display -->
          <transition name="pop">
            <div v-if="resume" class="mt-3 p-3 bg-teal-50/50 border border-teal-100 rounded-xl text-xs font-medium text-teal-700 flex items-center gap-2">
              <FileText :size="14" class="text-teal-600" />
              <span>Verified file attachment: <strong>{{ resume.name }}</strong></span>
            </div>
          </transition>
        </div>

        <!-- Cover Letter / Why do you want this role? -->
        <div>
          <label for="coverLetter" class="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">Cover Letter / Note to Hirer</label>
          <textarea 
            v-model="form.coverLetter"
            id="coverLetter" 
            rows="4" 
            placeholder="Briefly describe why you are a great fit for this specific technical or development track role..."
            class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-teal-600/10 focus:border-teal-600 text-slate-800 transition text-sm bg-slate-50/30 resize-none"
          ></textarea>
        </div>

        <!-- Action Buttons -->
        <div class="flex items-center justify-end gap-3 pt-2">
          <button 
            type="button" 
            @click="handleCancel"
            class="px-5 py-3 border border-slate-200 rounded-xl text-slate-600 text-sm font-semibold hover:bg-slate-50 active:scale-[0.99] transition flex items-center gap-1.5"
          >
            <ArrowLeft :size="16" /> Cancel
          </button>
          <button 
            type="submit" 
            :disabled="isSubmitting || isSuccess"
            class="px-6 py-3 bg-teal-700 hover:bg-teal-800 disabled:bg-teal-400 text-white text-sm font-semibold rounded-xl active:scale-[0.99] transition shadow-md shadow-teal-700/10 flex items-center justify-center min-w-[160px] gap-2"
          >
            <!-- Loading Spinner State -->
            <svg v-if="isSubmitting" class="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <Send v-else :size="16" />
            {{ isSubmitting ? 'Processing...' : 'Submit Register' }}
          </button>
        </div>
        
      </form>
    </div>
  </div>
</template>