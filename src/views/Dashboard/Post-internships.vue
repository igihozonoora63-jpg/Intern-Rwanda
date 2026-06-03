<template>
  <div>

    <h1 class="text-3xl font-bold mb-6">
      Post Internship
    </h1>

    <div class="bg-white p-8 rounded-2xl shadow">

      <form class="space-y-4">

        <input
          type="text"
          placeholder="Internship Title"
          class="w-full border p-3 rounded-xl"
        >

        <input
          type="text"
          placeholder="Location"
          class="w-full border p-3 rounded-xl"
        >

        <input
          type="text"
          placeholder="Trade Required"
          class="w-full border p-3 rounded-xl"
        >

        <textarea
          placeholder="Internship Description"
          rows="5"
          class="w-full border p-3 rounded-xl"
        ></textarea>

        <input
          type="date"
          class="w-full border p-3 rounded-xl"
        >

        <button
          class="bg-teal-600 text-white px-6 py-3 rounded-xl hover:bg-teal-700"
        >
          Post Internship
        </button>

      </form>

    </div>

  </div>
</template>