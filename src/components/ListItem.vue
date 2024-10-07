<script setup>
// import { FlDelete, AkArrowRightThick } from '@kalimahapps/vue-icons';
import { ElMessage } from 'element-plus'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
let showDeleteIcon = route.path == '/queryResult' ? false : true
const emit = defineEmits(['deleteItem'])
defineProps({
    itemObj: Object,
    iKey: String,
})

const removeItem = (iKey) => emit('deleteItem', iKey)

</script>

<template>
    <div class="mb-10">
        <el-row>
            <el-col :span="3">
                <el-image style="width: 50px; height: 50px; margin-right: .5rem;" src="" :alt="itemObj.route[0]"
                    fit="fill" />
                <el-text>海南航空</el-text>
            </el-col>
            <el-col :span="3">
                <el-text size="large">{{ itemObj.route[2] }}</el-text>
                <span class="mr-2"></span>
                <el-icon size="large">
                    <AkArrowRightThick />
                </el-icon>
                <span class="mr-2"></span>

                <el-text size="large">{{ itemObj.route[5] }}</el-text>
            </el-col>
            <el-col :span="3">
                <el-text>起效期: 2024-09-25</el-text>
            </el-col>
            <el-col :span="12">
                <el-table :data="itemObj.ratesArr" stripe size="small">
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
        <el-row style="background-color: lightgray;">
            <el-text size="small">
                <el-icon>
                    <ElementPlus />
                </el-icon>
                <!-- 北京中港大方国际货运代理有限公司 -->
            </el-text>
            <el-rate class="ml-1" size="small" />
        </el-row>
    </div>
</template>

<style scoped></style>