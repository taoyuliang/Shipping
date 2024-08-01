<script setup>

import { reactive } from 'vue'
const url =
    'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
// do not use same name with ref
const form = reactive({
    numbers: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const onSubmit = () => {
    console.log('submit!')
}

</script>

<template>
    <div class="w-auto bg-slate-100 pt-4">
        <el-row>
            <el-col :span="12">

                <div class="text-center align-bottom mt-12">

                    <el-image style="width: 100px; height: 100px" :src="url" :zoom-rate="1.2" :max-scale="7"
                        :min-scale="0.2" :initial-index="4" fit="cover" />
                    <br>
                    <el-text>某某物流科技（北京）有限公司</el-text>
                </div>



            </el-col>

            <el-col :span="12">
                <el-row justify="center">
                    <el-space direction="vertical">
                        <div class="text-left">
                            <el-text>联系我们</el-text>
                            <br>
                            <el-text size="small">我们将尽快安排服务人员与您对接</el-text>
                            <el-form :model="form" label-width="auto" style="max-width: 600px">
                                <el-form-item label="">
                                    <el-radio-group v-model="form.resource">
                                        <el-radio value="Mobile">手机号</el-radio>
                                        <el-radio value="Wechat">微信</el-radio>
                                    </el-radio-group>
                                </el-form-item>
                                <el-form-item label="">
                                    <el-input v-model="form.numbers" placeholder="please type your numbers" />
                                </el-form-item>
                                <el-form-item>
                                    <el-button style="width: 100%;" type="primary" @click="onSubmit">提交</el-button>
                                </el-form-item>

                            </el-form>
                        </div>


                    </el-space>


                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped></style>