<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
// import { v4 as uuidv4 } from 'uuid' // use id instead which is also unique in TABLE 's_routes'

const loading = ref(true)

const tableData = [
    {
        "source": "PVG上海浦东国际机场",
        "destination": "SZX深圳宝安国际机场",
        "min": 400,
        "L1": "1.1/KG",
        "L2": "1/KG",
        "L3": "1/KG",
        "ration": "1:167",
        "deliver": "100/BL",
        "bus": "周一,周二,周三,周四,周五,周六（节假日除外）        时效： 48小时 发车/到达 ： 14:00/+1天16：00"
    },
    {
        "source": "PVG上海浦东国际机场",
        "destination": "PEK北京首都国际机场",
        "min": 400,
        "L1": "1/KG",
        "L2": "0.8/KG",
        "L3": "0.8/KG",
        "ration": "1:167",
        "deliver": "100/BL",
        "bus": "周一,周二,周三,周四,周五,周六（节假日除外）       时效： 67小时 发车/到达 ： 14:00/+2天9:00"
    },
    {
        "source": "PVG上海浦东国际机场",
        "destination": "KMG昆明长水国际机场",
        "min": 550,
        "L1": "1.6/KG",
        "L2": "1.6/KG",
        "L3": "1.5/KG",
        "ration": "1:167",
        "deliver": "200/BL",
        "bus": "周一,周二,周三,周四,周五,周六（节假日除外）         时效： 86小时 发车/到达 ： 14:00/+3天9:00"
    },
    {
        "source": "PVG上海浦东国际机场",
        "destination": "WUH武汉天河国际机场",
        "min": 400,
        "L1": "1/KG",
        "L2": "0.9/KG",
        "L3": "0.9/KG",
        "ration": "1:167",
        "deliver": "100/BL",
        "bus": "周一,周二,周三,周四,周五,周六（节假日除外）        时效： 42小时 发车/到达 ： 14:00/+1天10:00"
    },
    {
        "source": "PVG上海浦东国际机场",
        "destination": "CGO 郑州新郑国际机场",
        "min": 400,
        "L1": "1/KG",
        "L2": "0.9/KG",
        "L3": "0.9/KG",
        "ration": "1:167",
        "deliver": "100/BL",
        "bus": "周一,周二,周三,周四,周五,周六（节假日除外）       时效： 20小时 发车/到达 ： 14:00/10:00"
    }
]

const router = useRouter()
const route = useRoute()

onMounted(async () => {
    try {

    } catch (error) {
        console.error('Error fetching job', error)
    } finally {
        loading.value = false
    }
})


</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-main>
                <el-table :data="tableData" stripe style="width: 100%">
                    <el-table-column prop="source" label="起始地" width="180" />
                    <el-table-column prop="destination" label="目的地" width="180" />
                    <el-table-column prop="min" label="最低费用" width="150" />
                    <el-table-column prop="L1" label="1-3000KG" width="150" />
                    <el-table-column prop="L2" label="3001-6000KG" width="150" />
                    <el-table-column prop="L3" label="6000KG+" width="150" />
                    <el-table-column prop="ration" label="计费标准" width="150" />
                    <el-table-column prop="deliver" label="派送费" width="150" />
                    <el-table-column prop="bus" label="班车" show-overflow-tooltip />
                </el-table>
            </el-main>
        </el-container>
    </div>
</template>

<style scoped>
.statistic-card {
    height: 100%;
    padding: 20px;
    border-radius: 4px;
    background-color: var(--el-bg-color-overlay);
}
</style>