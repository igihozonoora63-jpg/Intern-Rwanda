
  <script setup>
import {
  GraduationCap,
  FileText,
  ShieldCheck,
  Bell,
} from "lucide-vue-next";
</script>
<template>

    <!-- NAVBAR -->
    <nav class="flex items-center justify-between px-20 py-5 bg-[#eef4f3]">

      <div class="flex items-center gap-3">

        <div
          class="w-12 h-12 rounded-xl bg-teal-600 flex items-center justify-center text-white"
        >
          <GraduationCap :size="24" />
        </div>

        <router-link to='/'><h1 class="text-3xl font-bold text-slate-900">
          Intern Rwanda
        </h1>
        </router-link>

      </div>

      <div class="flex items-center gap-8">

        <router-link to="/login">
          <button
            class="font-semibold text-slate-800 hover:text-teal-600 transition"
          >
            Sign in
          </button>
        </router-link>

        <router-link to="/register">
        <button
          class="bg-teal-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-800 transition"
        >
          Get started
        </button>
    </router-link>

      </div>
    </nav>
</template>