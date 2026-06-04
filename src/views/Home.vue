<script setup>
import {
  GraduationCap,
  FileText,
  ShieldCheck,
  Bell,
} from "lucide-vue-next";
</script>

<template>
  <div class="min-h-screen bg-[#eef4f3] font-poppins">

    

    <!-- HERO SECTION -->

    <section
      class="max-w-7xl mx-auto px-20 py-10 grid lg:grid-cols-2 gap-20 items-center"
    >
      <!-- LEFT SIDE -->

      <div>

        <h1
          class="text-[85px] leading-[90px] font-extrabold text-slate-900"
        >
          Land your
          <br />

          first

          <span class="text-teal-700">
            real-world
          </span>

          <br />

          internship.
        </h1>

        <p
          class="mt-8 text-2xl text-slate-600 leading-relaxed max-w-xl"
        >
          Intern Rwanda connects students from technical
          schools with companies hiring for hands-on
          internships — in your trade, on your terms.
        </p>

        <div class="mt-10">

         <router-link to="/register"> <button
            class="bg-teal-700 hover:bg-teal-800 transition text-white px-10 py-4 rounded-2xl text-lg font-semibold flex items-center gap-3"
          >
            <GraduationCap :size="20" />

            I'm a student
          </button>
        </router-link>
          <br>
          <router-link to="/register"><button
            class="bg-teal-700 hover:bg-teal-800 transition text-white px-10 py-4 rounded-2xl text-lg font-semibold flex items-center gap-3"
          >
            <FileText :size="20" />

            I'm a company
          </button>
          </router-link>
          <br>

          <router-link to="/about"><button class="bg-teal-600 hover:bg-teal-800 transition text-white px-10 py-4 rounded-2xl text-lg font-semibolf flex items-center gap-g font-bold">
            Learn More
          </button></router-link>
        </div>

      </div>

      <!-- RIGHT CARD -->

      <div
        class="bg-white rounded-[30px] p-10 shadow-xl border border-gray-100"
      >

        <!-- ITEM -->

        <div class="flex gap-5 mb-10">

          <div
            class="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center"
          >
            <GraduationCap
              :size="24"
              class="text-teal-700"
            />
          </div>

          <div>
            <h3 class="font-bold text-xl text-slate-900">
              Verified TVET students
            </h3>

            <p class="text-slate-500 mt-1">
              Schools confirm enrollment &
              trade.
            </p>
          </div>

        </div>

        <!-- ITEM -->

        <div class="flex gap-5 mb-10">

          <div
            class="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center"
          >
            <FileText
              :size="24"
              class="text-teal-700"
            />
          </div>

          <div>
            <h3 class="font-bold text-xl text-slate-900">
              Report cards on demand
            </h3>

            <p class="text-slate-500 mt-1">
              Share academic records securely.
            </p>
          </div>

        </div>

        <!-- ITEM -->

        <div class="flex gap-5 mb-10">

          <div
            class="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center"
          >
            <ShieldCheck
              :size="24"
              class="text-teal-700"
            />
          </div>

          <div>
            <h3 class="font-bold text-xl text-slate-900">
              Trusted companies
            </h3>

            <p class="text-slate-500 mt-1">
              Vetted employers across Rwanda.
            </p>
          </div>

        </div>

        <!-- ITEM -->

        <div class="flex gap-5">

          <div
            class="w-14 h-14 rounded-2xl bg-teal-50 flex items-center justify-center"
          >
            <Bell
              :size="24"
              class="text-teal-700"
            />
          </div>

          <div>
            <h3 class="font-bold text-xl text-slate-900">
              Real-time updates
            </h3>

            <p class="text-slate-500 mt-1">
              Get notified at every step.
            </p>
          </div>

        </div>

      </div>

    </section>

    <!-- How it works section -->
       <div class="flex flex-wrap justify-center gap-6 py-10">

    <!-- Register Box -->
    <section class="w-64 bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl hover:-translate-y-2 transition duration-300">
        <h2 class="text-2xl font-extrabold text-teal-500 text-center mb-2">
            Register
        </h2>
        <p class="text-gray-600 text-center text-sm">
           Students share name, email, school and trade. Companies create a company profile.
        </p>
        <br>
        <router-link to="/register">
        <button
          class="bg-teal-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-800 transition items-center"
        >
          Get started 
        </button>
    </router-link>
    </section>

    <!-- Apply Box -->
    <section class="w-64 bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl hover:-translate-y-2 transition duration-300">
        <h2 class="text-2xl font-extrabold text-teal-500 text-center mb-2">
            Apply or post
        </h2>
        <p class="text-gray-600 text-center text-sm">
            Students browse internships and apply. Companies post role and verify applications
        </p>
    </section>

    <!-- Get Hired Box -->
    <section class="w-64 bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl hover:-translate-y-2 transition duration-300">
        <h2 class="text-2xl font-extrabold text-teal-500 text-center mb-2">
            Verify & hire
        </h2>
        <p class="text-gray-600 text-center text-sm">
           Comapnies requesr report cards,verify with schools then accept and contact students.
        </p>
    </section>

</div>


     </div>
  
</template>