<script setup>
import { ref, unref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const to = ref('')
const from = ref('')
const toQueryResult = () => router.push({ name: 'queryResult', query: { to: unref(to), from: unref(from) } })
</script>

<template>
    <div class="common-layout h-screen">
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <el-main>
                <div class="mt-10">
                    <el-carousel :interval="2000" type="card" height="400px">
                        <el-carousel-item v-for="item in 6" :key="item">
                            <h3 text="2xl" justify="center">{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <!-- <el-form> -->
                <div class="mt-8 mb-44 justify-items-center">
                    <el-row>
                        <el-col :span="5" :offset="6">
                            <el-select v-model="from" placeholder="please select ..." class="input-with-select">
                                <el-option label="shanghai" value="shanghai" />
                                <el-option label="beijing" value="beijing" />
                            </el-select>
                        </el-col>

                        <MiSolidAirplane class="icon" />

                        <el-col :span="5">
                            <el-select v-model="to" placeholder="please select ..." class="input-with-select">
                                <el-option label="shanghai" value="shanghai" />
                                <el-option label="beijing" value="beijing" />
                            </el-select>
                        </el-col>

                        <el-col :span="2">
                            <el-button :icon="Search" @click="toQueryResult" />
                        </el-col>
                    </el-row>
                </div>
                <!-- </el-form> -->

            </el-main>
            <!-- <el-footer>

            </el-footer> -->
        </el-container>
        <Footer />
    </div>
</template>

<style scoped>
.icon {

    font-size: 1.3em;
    margin-right: 2em;
    margin-left: 2em;
}

.el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}


.input-with-select .el-input-group__apppend {
    background-color: var(--el-fill-color-blank);
}
</style>