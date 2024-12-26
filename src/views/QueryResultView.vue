<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { reactive } from 'vue'
import data from '../assets/data.json'
import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid' // use id instead which is also unique in TABLE 's_routes'

const loading = ref(true)
const options = data.iata
const formInline = reactive({
    from: '',
    to: '',
    carrier: '',
})
let res = []
const fetchedData = ref([])
const total = ref(0)
const currentPage = ref(0)
watch(currentPage, (newVal, oldVal) => {
    fetchedData.value = res.slice((currentPage.value - 1) * 10, (currentPage.value - 1) * 10 + 10)
})

const onSubmit = async () => {
    try {
        loading.value = true
        let response
        if (formInline.from) {
            response = await axios.get(`/admin/s_routes?from=${formInline.from}&to=${formInline.to}`)
        } else {
            response = await axios.get(`/admin/s_routes?to=${formInline.to}`)

        }
        res = response.data
        total.value = response.data.length
        currentPage.value = 1
        fetchedData.value = res.slice(0, 10)
    } catch (error) {
        console.error('Error fetching job', error)
    } finally {
        loading.value = false
    }
}

const router = useRouter()
const route = useRoute()
onMounted(async () => {
    try {
        let response
        if (formInline.from) {
            response = await axios.get(`/admin/s_routes?from=${route.query.from}&to=${route.query.to}`)
        } else {
            response = await axios.get(`/admin/s_routes?to=${route.query.to}`)

        }
        res = response.data
        total.value = response.data.length
        fetchedData.value = res.slice(0, 10)
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
    <div class="common-layout h-screen">
        <el-container class="affix-container">
            <el-main style="padding-left: 10rem;padding-right: 10rem;">
                <!-- <el-affix :offset="120"> -->


                <el-form :inline="true" :model="formInline" class="demo-form-inline mt-2" size="large">
                    <el-form-item label="始发港">
                        <el-select v-model="formInline.from" filterable placeholder="可为空" clearable
                            :value-on-clear="null">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="目的港">
                        <el-select v-model="formInline.to" filterable placeholder="不可为空" clearable>
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

                    <el-form-item size="large" label="">
                        <el-text type="primary" tag="b">客服QQ1:704281955&nbsp;&nbsp;客服QQ2:1165376918</el-text>
                    </el-form-item>
                </el-form>
                <el-text size="large">推荐航线</el-text>
                <el-pagination layout="prev, pager, next" :page-size="10" :total="total"
                    v-model:current-page="currentPage" />

                <el-divider />
                <!-- </el-affix> -->
                <div v-loading="loading">
                    <el-scrollbar height="70vh">
                        <ListItem v-for="i in fetchedData" :itemObj="i" :iKey="i.id" />
                    </el-scrollbar>
                </div>

            </el-main>
            <!-- <el-affix target=".affix-container" :offset="80">

            </el-affix> -->
        </el-container>
    </div>
    <!-- <el-backtop :right="100" :bottom="100" /> -->
</template>

<style scoped>
.demo-form-inline .el-input {
    --el-input-width: 220px;
}

.demo-form-inline .el-select {
    --el-select-width: 220px;
}
</style>