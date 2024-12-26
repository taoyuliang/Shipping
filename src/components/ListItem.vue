<script setup>
// import { FlDelete, AkArrowRightThick } from '@kalimahapps/vue-icons'
// import { useToast } from 'vue-toast-notification';
import { ref } from 'vue'
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
const rate = ref(5)
</script>

<template>
    <div class="mb-10">
        <el-row>
            <el-col :span="3">
                <el-row><el-text size="small">{{ itemObj.airline }}</el-text></el-row>
                <el-row><el-image style="width: 100px; height: 100px; margin-right: .5rem;"
                        :src="`https://assets.duffel.com/img/airlines/for-light-background/full-color-lockup/${itemObj.airline.slice(0, 2)}.svg`"
                        fit="fill" crossorigin="anonymous">
                        <template #error>
                            <LaFighterJetSolid />
                        </template>
                    </el-image>
                </el-row>
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
                <br>
                <el-text>{{ itemObj.schedule_date }}</el-text>
            </el-col>
            <el-col :span="12">
                <el-table :data="itemObj.ratesArr.slice(0, 4)" stripe size="small">
                    <el-table-column prop="ratio" label="货比" />
                    <el-table-column prop="type" label="类型" />
                    <el-table-column prop="r45" label="45+" />
                    <el-table-column prop="r100" label="100+" />
                    <el-table-column prop="r300" label="300+" />
                    <el-table-column prop="r500" label="500+" />
                    <el-table-column prop="r1000" label="1000+" />
                </el-table>
            </el-col>

            <el-col v-if="!showDeleteIcon" :span="3">
                <el-button type="primary" @click="() =>
                    ElMessage('TODO')
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
            <el-rate class="ml-1" size="small" :model-value="5" />
        </el-row>
    </div>
</template>

<style scoped></style>