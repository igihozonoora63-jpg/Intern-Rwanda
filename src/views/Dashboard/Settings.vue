<template>

<div>

<h1 class="text-3xl font-bold mb-6">
Account Settings
</h1>

<div class="bg-white p-8 rounded-2xl shadow">

<form class="space-y-4">

<input
type="text"
placeholder="Full Name"
class="w-full border p-3 rounded-xl"
/>

<input
type="email"
placeholder="Email Address"
class="w-full border p-3 rounded-xl"
/>

<input
type="tel"
placeholder="Phone Number"
class="w-full border p-3 rounded-xl"
/>

<input
type="password"
placeholder="Change Password"
class="w-full border p-3 rounded-xl"
/>

<select
class="w-full border p-3 rounded-xl"
>
<option>Light Mode</option>
<option>Dark Mode</option>
</select>

<button
class="bg-teal-600 text-white px-6 py-3 rounded-xl"
>
Save Changes
</button>

</form>

</div>

</div>

</template>