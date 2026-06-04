<template>
  <div>

    <!-- Header -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-slate-900 tracking-tight">
        Messages
      </h1>

      <p class="text-slate-500 mt-2">
        Communicate directly with internship applicants and manage inquiries.
      </p>
    </div>

    <!-- Messages Container -->
    <div class="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">

      <div class="space-y-4">

        <!-- Message 1 -->
        <div
          class="border border-slate-100 rounded-xl p-5 hover:bg-slate-50 hover:border-slate-200 transition cursor-pointer"
        >
          <div class="flex gap-4">

            <div
              class="w-12 h-12 bg-teal-100 text-teal-700 font-bold rounded-full flex items-center justify-center shrink-0"
            >
              N
            </div>

            <div class="flex-1">
              <div class="flex justify-between items-center">
                <h3 class="font-semibold text-slate-800">
                  Noora Uwase
                </h3>

                <span class="text-xs text-slate-400">
                  10 mins ago
                </span>
              </div>

              <p class="text-slate-600 text-sm mt-2">
                Hello, I would like to know when internship interviews begin.
              </p>

              <div class="mt-3">
                <button
                  class="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm transition"
                >
                  Reply
                </button>
              </div>
            </div>

          </div>
        </div>

        <!-- Message 2 -->
        <div
          class="border border-slate-100 rounded-xl p-5 hover:bg-slate-50 hover:border-slate-200 transition cursor-pointer"
        >
          <div class="flex gap-4">

            <div
              class="w-12 h-12 bg-blue-100 text-blue-700 font-bold rounded-full flex items-center justify-center shrink-0"
            >
              E
            </div>

            <div class="flex-1">
              <div class="flex justify-between items-center">
                <h3 class="font-semibold text-slate-800">
                  Eric Niyonzima
                </h3>

                <span class="text-xs text-slate-400">
                  Yesterday
                </span>
              </div>

              <p class="text-slate-600 text-sm mt-2">
                Thank you for accepting my application. I am excited to join the internship program.
              </p>

              <div class="mt-3">
                <button
                  class="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm transition"
                >
                  Reply
                </button>
              </div>
            </div>

          </div>
        </div>

        <!-- Message 3 -->
        <div
          class="border border-slate-100 rounded-xl p-5 hover:bg-slate-50 hover:border-slate-200 transition cursor-pointer"
        >
          <div class="flex gap-4">

            <div
              class="w-12 h-12 bg-purple-100 text-purple-700 font-bold rounded-full flex items-center justify-center shrink-0"
            >
              A
            </div>

            <div class="flex-1">
              <div class="flex justify-between items-center">
                <h3 class="font-semibold text-slate-800">
                  Alice Mukamana
                </h3>

                <span class="text-xs text-slate-400">
                  2 days ago
                </span>
              </div>

              <p class="text-slate-600 text-sm mt-2">
                I have uploaded my report card. Kindly let me know if any additional documents are required.
              </p>

              <div class="mt-3">
                <button
                  class="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm transition"
                >
                  Reply
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>

  </div>
</template>