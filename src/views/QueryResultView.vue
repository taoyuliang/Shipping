<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ListItem from '@/components/ListItem.vue'

import { reactive } from 'vue'

const formInline = reactive({
    from: '',
    to: '',
    carrier: '',
})
const onSubmit = () => {
    console.log('submit!')
}


const router = useRouter()
const route = useRoute()
formInline.from = route.query.from
formInline.to = route.query.to

let dummyData = Array(20).fill({
    "uuid": "90436386-519c-4bc2-960f-1e727e86cfb6",
    "from": "SHA",
    "stop": "",
    "to": "HKG",
    "effective_date": "2024-07-20",
    "desc": "",
    "arr": [
        {
            "ratio": "1:167",
            "r45": "111",
            "r100": "22",
            "r300": "33",
            "r500": "44",
            "r1000": "555"
        }
    ]
})

</script>

<template>
    <div class="common-layout h-screen">
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-main style="padding-left: 10rem;padding-right: 10rem;">

                <el-form :inline="true" :model="formInline" class="demo-form-inline my-20">
                    <el-form-item label="始发港">
                        <el-select v-model="formInline.from" placeholder="From Location" clearable>
                            <el-option label="shanghai" value="shanghai" />
                            <el-option label="beijing" value="beijing" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="目的港">
                        <el-select v-model="formInline.to" placeholder="To Location" clearable>
                            <el-option label="shanghai" value="shanghai" />
                            <el-option label="beijing" value="beijing" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="承运人">
                        <el-select v-model="formInline.carrier" placeholder="carrier" clearable>
                            <el-option label="海南航空" value="海南航空" />
                            <el-option label="东方航空" value="东方航空" />
                        </el-select>
                    </el-form-item>

                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">查询</el-button>
                    </el-form-item>
                </el-form>
                <el-text size="large">推荐航线</el-text>
                <el-divider />
                <ListItem v-for="i in dummyData" :itemObj="i" />
            </el-main>

            <Footer />
        </el-container>
    </div>

</template>

<style scoped>
.demo-form-inline .el-input {
    --el-input-width: 220px;
}

.demo-form-inline .el-select {
    --el-select-width: 220px;
}
</style>