<script setup>
import { reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()
const loginData = reactive({ user: '', pwd: '' })
const toSupplierEdit = () => router.push({ name: 'suppllierEdit', query: { user: loginData.user } })



// AdminJS API
// http://localhost:3000/admin/api/resources/supplier/actions/list?filters.name=alice
</script>

<template>
    <!--
// v0 by Vercel.
// https://v0.dev/t/MJ9kPa6k5r9
-->

    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
        <div class="rounded-lg border text-card-foreground w-full max-w-md mx-auto bg-white shadow-md" data-v0-t="card">
            <div class="flex flex-col space-y-1.5 p-6">
                <h3 class="whitespace-nowrap tracking-tight text-3xl font-bold text-center">供应商登陆</h3>
                <p class="text-sm text-center text-gray-500 mt-2">请输入您的账号信息.</p>
            </div>
            <div class="p-6 space-y-4">
                <div class="space-y-2">
                    <label
                        class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm text-gray-600"
                        for="user">
                        供应商
                    </label>
                    <input
                        class="flex h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-3 py-2 border border-gray-300 outline-none focus:border-indigo-500 rounded-md"
                        id="user" placeholder="name" required="" type="text" v-model="loginData.user" />
                </div>
                <div class="space-y-2">
                    <label
                        class="font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm text-gray-600"
                        for="password">
                        密码
                    </label>
                    <input
                        class="flex h-10 bg-background text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full px-3 py-2 border border-gray-300 outline-none focus:border-indigo-500 rounded-md"
                        id="password" placeholder="password" required="" type="password" v-model="loginData.pwd" />
                </div>
            </div>
            <div class="flex items-center p-6">
                <button @click="toSupplierEdit"
                    class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full py-2 px-4 text-center text-white bg-sky-600 rounded-md hover:bg-sky-700 focus:outline-none">
                    Sign in
                </button>
                <!-- <div class="flex justify-between items-center mt-4">
                    <a class="text-sm text-gray-600 hover:text-indigo-500" href="#">
                        Forgot Password?
                    </a>
                    <a class="text-sm text-indigo-600 hover:text-indigo-500" href="#">
                        Create Account
                    </a>
                </div> -->
            </div>
        </div>
    </div>
</template>

<style scoped></style>