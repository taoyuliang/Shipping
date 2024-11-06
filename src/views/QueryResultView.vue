<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { reactive } from 'vue'
import data from '../assets/data.json'
import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid' // use id instead which is also unique in TABLE 's_routes'

const loading = ref(true)
const options = data.iata
const formInline = reactive({
    from: '',
    to: '',
    carrier: '',
})
const fetchedData = ref([])
const onSubmit = async () => {
    try {
        loading.value = true
        const response = await axios.get(`/api/admin/s_routes?from=${formInline.from}&to=${formInline.to}`)
        fetchedData.value = response.data
    } catch (error) {
        console.error('Error fetching job', error)
    } finally {
        loading.value = false
    }
}

const router = useRouter()
const route = useRoute()
console.log(route)
onMounted(async () => {
    try {
        const response = await axios.get(`/api/admin/s_routes?from=${route.query.from}&to=${route.query.to}`)
        fetchedData.value = response.data
    } catch (error) {
        console.error('Error fetching job', error)
    } finally {
        loading.value = false
    }
})

formInline.from = route.query.from
formInline.to = route.query.to

</script>

<template>
    <el-affix position="top" :offset="0">
        <Header />
    </el-affix>
    <div class="common-layout h-screen">
        <el-container>
            <!-- <el-header>
                <Header />
            </el-header> -->
            <el-main style="padding-left: 10rem;padding-right: 10rem;">

                <el-form :inline="true" :model="formInline" class="demo-form-inline my-20">
                    <el-form-item label="始发港">
                        <el-select v-model="formInline.from" filterable placeholder="From Location" clearable>
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="目的港">
                        <el-select v-model="formInline.to" filterable placeholder="To Location" clearable>
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>
                    <!-- <el-form-item label="承运人">
                        <el-select v-model="formInline.carrier" placeholder="carrier" clearable>
                            <el-option label="海南航空" value="海南航空" />
                            <el-option label="东方航空" value="东方航空" />
                        </el-select>
                    </el-form-item> -->

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
                <el-text size="large">推荐航线</el-text>
                <el-divider />
                <div v-loading="loading">
                    <ListItem v-for="i in fetchedData" :itemObj="i" :iKey="i.id" />
                </div>
            </el-main>
        </el-container>
    </div>
    <el-affix position="bottom" :offset="0">
        <Footer />
    </el-affix>
</template>

<style scoped>
.demo-form-inline .el-input {
    --el-input-width: 220px;
}

.demo-form-inline .el-select {
    --el-select-width: 220px;
}
</style>