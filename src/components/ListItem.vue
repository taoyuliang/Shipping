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
                <el-image style="width: 50px; height: 50px; margin-right: .5rem;"
                    src="/supplier_logos/hainan_ariline.png" fit="fill" />
                <el-text>海南航空</el-text>
            </el-col>
            <el-col :span="3">
                <el-text size="large">{{ itemObj.from }}</el-text>
                <span class="mr-2"></span>
                <el-icon size="large">
                    <AkArrowRightThick />
                </el-icon>
                <span class="mr-2"></span>

                <el-text size="large">{{ itemObj.to }}</el-text>
            </el-col>
            <el-col :span="3">
                <el-text>起效期: {{ itemObj.effective_date }} </el-text>
            </el-col>
            <el-col :span="12">
                <el-table :data="itemObj.arr" stripe size="small">
                    <el-table-column prop="ratio" label="货比" />
                    <el-table-column prop="r45" label="45+" />
                    <el-table-column prop="r100" label="100+" />
                    <el-table-column prop="r300" label="300+" />
                    <el-table-column prop="r500" label="500+" />
                    <el-table-column prop="r1000" label="1000+" />
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
                北京中港大方国际货运代理有限公司
            </el-text>
            <el-rate class="ml-1" size="small" />
        </el-row>
    </div>
</template>

<style scoped></style>