<script setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({ // form = xx is reassigning,not allowd; form.region=xx is not reassigning,allowed
    numbers: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

// const onSubmit = () => {
//     console.log('submit!')
// }

</script>

<template>
    <div class="w-auto bg-slate-100">
        <el-row>
            <el-col :span="12">

                <div class="text-center align-bottom mt-12">

                    <!-- <el-image style="width: 100px; height: 100px" :src="url" :zoom-rate="1.2" :max-scale="7"
                        :min-scale="0.2" :initial-index="4" fit="cover" /> -->


                    <el-text>天天飞物流科技(上海)有限公司</el-text>
                    <br>
                    <el-text size="small">地址:上海市浦东新区机场镇远航路785号</el-text>
                    <br>
                    <el-text size="small">24小时竭诚为您服务！</el-text>
                    <br>
                    <br>
                </div>
            </el-col>
            <el-col :span="12">
                <el-row justify="center">
                    <el-space direction="vertical">
                        <div class="text-left">
                            <br>
                            <el-text>联系我们</el-text>
                            <br>
                            <el-text size="small">电话:021-38228651</el-text><br>
                            <el-text size="small">邮箱:info@ttfly.com.cn</el-text><br>
                            <el-text size="small">客服QQ1:704281955 客服QQ2:1165376918</el-text><br>
                            <!-- <el-form :model="form" label-width="auto" style="max-width: 600px">
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

                            </el-form> -->
                        </div>


                    </el-space>


                </el-row>
            </el-col>
        </el-row>
    </div>
</template>

<style scoped></style>