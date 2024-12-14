<script setup>
// import { FlDelete, AkArrowRightThick } from '@kalimahapps/vue-icons'
// import { useToast } from 'vue-toast-notification';
import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
let showDeleteIcon = route.path == '/queryResult' ? false : true
const emit = defineEmits(['deleteItem'])
defineProps({
    itemObj: Object,
    iKey: Number,
})
// const toast = useToast()
// window.confirm("Are you sure...")
const removeItem = (iKey) => emit('deleteItem', iKey)

</script>

<template>
    <div class="mb-10">
        <el-row>
            <el-col :span="3">
                <!-- <el-image style="width: 50px; height: 50px; margin-right: .5rem;" src="" :alt="itemObj.airline"
                    fit="fill" /> -->
                <el-text size="small">{{ itemObj.airline }}</el-text>
            </el-col>
            <el-col :span="3">
                <el-text size="large">{{ itemObj.from }}</el-text>
                <span class="mr-2"></span>
                <el-icon size="large">
                    <MdFlightTakeoff />
                </el-icon>
                <el-text>{{ itemObj.stop }}</el-text>
                <el-icon size="large">
                    <MdRoundFlightLand />
                </el-icon>
                <span class="mr-2"></span>

                <el-text size="large">{{ itemObj.to }}</el-text>
            </el-col>
            <el-col :span="3">
                <el-text>起效期: {{ itemObj.effective_date.split("T")[0] }}</el-text>
            </el-col>
            <el-col :span="12">
                <el-table :data="itemObj.ratesArr.slice(0, 4)" stripe size="small">
                    <el-table-column prop="ratio" label="货比" />
                    <el-table-column prop="type" label="类型" />
                    <el-table-column prop="45" label="45+" />
                    <el-table-column prop="100" label="100+" />
                    <el-table-column prop="300" label="300+" />
                    <el-table-column prop="500" label="500+" />
                    <el-table-column prop="1000" label="1000+" />
                </el-table>
            </el-col>

            <el-col v-if="!showDeleteIcon" :span="3">
                <el-button type="primary" @click="() =>
                    ElMessage('TODO.')
                    ">详情</el-button>
            </el-col>
            <el-col v-if="showDeleteIcon" :span="3">
                <el-icon @click="removeItem(iKey)">
                    <FlDelete />
                </el-icon>
            </el-col>
        </el-row>
        <el-row class="bg-orange-100">
            <el-text size="small">
                <el-icon>
                    <ElementPlus />
                </el-icon>
                <!-- 北京中港大方国际货运代理有限公司 -->
            </el-text>
            <el-rate class="ml-1" size="small" model-value="5" />
        </el-row>
    </div>
</template>

<style scoped></style>