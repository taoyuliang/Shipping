<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { reactive } from 'vue'
import data from '../assets/data.json'
import axios from 'axios'
// import { v4 as uuidv4 } from 'uuid' // use id instead which is also unique in TABLE 's_routes'

const loading = ref(true)
const D2D = data.D2D
const items = ref([])

const radio = ref(0)

const router = useRouter()
const route = useRoute()

const radioChange = (v) => {
    switch (v) {
        case 1:
            items.value = D2D.filter((el) => el.continent == "美洲")
            break;
        case 2:
            items.value = D2D.filter((el) => el.continent == "欧洲")
            break;
        case 3:
            items.value = D2D.filter((el) => el.continent == "大洋洲")
            break;
        case 4:
            items.value = D2D.filter((el) => el.continent == "非洲")
            break;
        case 5:
            items.value = D2D.filter((el) => el.continent == "亚洲")
            break;
        default:
            items.value = D2D // for no match
    }
}

onMounted(async () => {
    try {
        items.value = D2D
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
            <el-aside width="200px" class="px-12 py-12">
                <el-row>
                    <el-radio-group v-model="radio" @change="radioChange" size="large">
                        <el-col :span="24"><el-radio :value="0">所有</el-radio> </el-col>
                        <el-col :span="24"><el-radio :value="1">美洲</el-radio> </el-col>
                        <el-col :span="24"><el-radio :value="2">欧洲</el-radio></el-col>
                        <el-col :span="24"><el-radio :value="3">大洋洲</el-radio></el-col>
                        <el-col :span="24"><el-radio :value="4">非洲</el-radio></el-col>
                        <el-col :span="24"><el-radio :value="5">亚洲</el-radio></el-col>
                    </el-radio-group>
                </el-row>
            </el-aside>
            <el-main>
                <el-row :gutter="20">
                    <el-col v-for="i in items" :span="6">
                        <div class="statistic-card">
                            <el-card style="max-width: auto">
                                <template #header><span class="fi" :class="'fi-' + i.code.toLowerCase()"></span> {{
                                    i.continent }} -
                                    {{
                                        i.country
                                    }}</template>

                                <!-- <span class="fi fi-gr fis"></span> small icon -->
                                <!-- <img src="" style="width: 100%" /> -->
                                <p class="text item">Handling: {{ i.handling }}</p>
                                <p class="text item">Import Terminal Fee: {{ i.terminal }}</p>
                                <p class="text item">D/O: {{ i.do }}</p>
                                <p class="text item">Warehouse Fee: {{ i.warehouse }}</p>
                                <p class="text item">Customs Clearance: {{ i.cc }}</p>
                                <p class="text item">Customs Ops Charges: {{ i.coc }}</p>
                                <p class="text item">Dilivery: at cost(需提供具体地址和邮编)</p>
                                <template #footer>以上报价不含税费、待时费、堆存费、查验费、人工费等任何特殊费用，若产生实报实销</template>
                            </el-card>
                        </div>
                    </el-col>
                </el-row>
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