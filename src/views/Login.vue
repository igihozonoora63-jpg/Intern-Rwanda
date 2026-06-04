<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router';

const router=useRouter();
const email=ref('');
const password=ref('');
const role= ref('');


const login = () => {


  if (email.value === "") {
    alert("Please enter your email");
    return;
  }

  if (!email.value.includes('@') || !email.value.includes('.')) {
    alert("Please enter a valid email address");
    return;
  }

  if (password.value === "") {
    alert("Please enter your password");
    return;
  }

  if (password.value.length < 6) {
    alert("Password must be at least 6 characters long");
    return;
  }

  if (role.value === "") {
    alert("Please select a role")
    return
  }

  if (role.value === 'student') {
    router.push('/studentdashboard')
  }

  if (role.value === 'company') {
    router.push('/companydashboard')
  }

}




</script>


<template>
  <div class="min-h-screen bg-slate-100">

    <!-- Main Container -->

    <div class="container mx-auto px-6 py-10">

      <div
        class="grid lg:grid-cols-2 gap-10 items-center"
      >

        <!-- LEFT SECTION -->

        <div
          class="bg-gradient-to-br from-teal-600 to-green-500
          rounded-3xl p-10 text-white shadow-xl"
        >

          <h1 class="text-5xl font-bold mb-6">
            Intern Rwanda
          </h1>

          <p class="text-xl leading-relaxed mb-8">
            Connecting TVET students with
            companies across Rwanda.
          </p>

          <div class="space-y-4">

            <div class="bg-white/10 p-4 rounded-xl">
              ✓ Verified Students
            </div>

            <div class="bg-white/10 p-4 rounded-xl">
              ✓ Trusted Companies
            </div>

            <div class="bg-white/10 p-4 rounded-xl">
              ✓ Real Internship Opportunities
            </div>

            <div class="bg-white/10 p-4 rounded-xl">
              ✓ Fast Application Process
            </div>

          </div>

        </div>

        <!-- RIGHT SECTION -->

        <div
          class="bg-white rounded-3xl shadow-xl p-10"
        >

          <h2
            class="text-3xl font-bold text-center text-teal-700"
          >
           Login
          </h2>

          <p
            class="text-center text-gray-500 mt-2 mb-8"
          >
            Join Rwanda's leading internship platform
          </p>

          <form
            @submit.prevent="login"
            class="space-y-4"
          >



            <!-- Email -->

            <input
              v-model="email"
              type="email"
              placeholder="Email Address"
              class="w-full p-3 border rounded-xl"
            />


            <!-- Roles -->


            
            <select
              v-model="role"
              class="w-full p-3 border rounded-xl"
            >
              <option value="">
                Select Role
              </option>

              <option value="student">
                Student
              </option>

              <option value="company">
                Company
              </option>

            </select>

            <!-- Password -->

            <input
              v-model="password"
              type="password"
              placeholder="Password"
              class="w-full p-3 border rounded-xl"
            />





            <!-- Register Button -->

            <button
              type="submit"
              class="
              w-full
              bg-teal-600
              text-white
              py-3
              rounded-xl
              font-semibold
              hover:bg-teal-700
              transition
              "
            >
              Login
            </button>

          </form>

          <p
            class="text-center text-gray-500 mt-6"
          >
           Don't have an account?

            <router-link
              to="/register"
              class="text-teal-600 font-semibold"
            >
              Sign up
            </router-link>

          </p>

        </div>

      </div>

    </div>

  </div>
</template>