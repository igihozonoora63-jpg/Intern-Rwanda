<template>
  <div>
    
    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-slate-900 tracking-tight">
        Notifications
      </h1>

      <p class="text-slate-500 mt-2">
        Stay updated on student applications, verification requests, and internship activity.
      </p>
    </div>

    <!-- Notification Cards -->
    <div class="space-y-4 max-w-4xl">

      <!-- New Application -->
      <div
        class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition"
      >
        <div class="flex items-center gap-4">

          <div
            class="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-xl"
          >
            🎉
          </div>

          <div>
            <h3 class="font-semibold text-slate-800">
              New Application Received
            </h3>

            <p class="text-sm text-slate-500">
              Noora Uwase has applied for the Software Development Internship.
            </p>

            <span class="text-xs text-slate-400">
              5 minutes ago
            </span>
          </div>

        </div>
      </div>

      <!-- Verification -->
      <div
        class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition"
      >
        <div class="flex items-center gap-4">

          <div
            class="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl"
          >
            📄
          </div>

          <div>
            <h3 class="font-semibold text-slate-800">
              Verification Request Sent
            </h3>

            <p class="text-sm text-slate-500">
              A verification email was sent to SOS Technical High School.
            </p>

            <span class="text-xs text-slate-400">
              1 hour ago
            </span>
          </div>

        </div>
      </div>

      <!-- Verified -->
      <div
        class="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition"
      >
        <div class="flex items-center gap-4">

          <div
            class="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-xl"
          >
            ✅
          </div>

          <div>
            <h3 class="font-semibold text-slate-800">
              Student Verified
            </h3>

            <p class="text-sm text-slate-500">
              Enrollment verification has been approved by the school.
            </p>

            <span class="text-xs text-slate-400">
              Yesterday
            </span>
          </div>

        </div>
      </div>

      <!-- Deadline -->
      <div
        class="bg-white p-5 rounded-2xl border border-amber-100 shadow-sm hover:shadow-md transition"
      >
        <div class="flex items-center gap-4">

          <div
            class="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center text-xl"
          >
            📅
          </div>

          <div>
            <h3 class="font-semibold text-slate-800">
              Internship Deadline Reminder
            </h3>

            <p class="text-sm text-slate-500">
              The Software Development Internship closes in 3 days.
            </p>

            <span class="text-xs text-slate-400">
              Today
            </span>
          </div>

        </div>
      </div>

      <!-- Accepted Student -->
      <div
        class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition"
      >
        <div class="flex items-center gap-4">

          <div
            class="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xl"
          >
            👨‍🎓
          </div>

          <div>
            <h3 class="font-semibold text-slate-800">
              Student Accepted
            </h3>

            <p class="text-sm text-slate-500">
              Eric Niyonzima has been accepted for internship placement.
            </p>

            <span class="text-xs text-slate-400">
              2 days ago
            </span>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>