<script setup>
import { ref, toValue, reactive } from 'vue'
import ListItem from '@/components/ListItem.vue'
import { v4 as uuidv4 } from 'uuid'
import { genFileId } from 'element-plus'
import Papa from 'papaparse'
// import { UseActiveElement } from '@vueuse/components'
// do not use same name with ref
const form = reactive({
    from: '',
    stop: '',
    to: '',
    ratio: '',
    effective_date: '',
    r45: '',
    r100: '',
    r300: '',
    r500: '',
    r1000: '',
    isContinue: false
})
const listItems = ref([])
const formRef = ref()
const onSubmit = (formEl) => {
    formEl.validate((valid) => {
        if (valid) {
            let addItem = {}
            addItem.uuid = uuidv4()
            addItem.from = form.from
            addItem.stop = form.stop
            addItem.to = form.to
            addItem.effective_date = new Date(form.effective_date)
            addItem.desc = form.desc
            addItem.arr = []
            addItem.arr.push({ ratio: form.ratio, r45: form.r45, r100: form.r100, r300: form.r300, r500: form.r500, r1000: form.r1000 })
            if (form.isContinue) {
                listItems.value[listItems.value.length - 1].arr.push({ ratio: form.ratio, r45: form.r45, r100: form.r100, r300: form.r300, r500: form.r500, r1000: form.r1000 })
            } else {
                listItems.value.push(addItem)
            }
        } else {
            console.log('error submit!')
        }
    })


}

const onDeleteItem = (iKey) => {
    const index = listItems.value.findIndex((val) => val.uuid == iKey)
    listItems.value.splice(index, 1)
}

const onReset = (formEl) => {
    formEl.resetFields()
}
const onSubmitDatabase = () => {
    // console.log(listItems.value)
    uploadRef.value.clearFiles()
    fetch('http://localhost:3000/admin/post_items', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            // "Accept": "application/json",
        },
        body: JSON.stringify({
            items: listItems.value,
        })
    })
        .then((res) => console.log(res.ok)) //true
}


const uploadRef = ref()
const fileList = ref([])

const handleChange = (uploadFile, uploadFiles) => {
    uploadFile.uid = genFileId()
    Papa.parse(uploadFile.raw, {
        header: true,
        newline: '\r',
        escapeChar: '"',
        complete: function (results) {
            listItems.value = results.data
        },
        transform: function (value, name) {
            // console.log(value, name)
            return name == 'arr' ? JSON.parse(value) : value
        }
    });

}
</script>

<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Header />
            </el-header>
            <h1 class="text-center text-2xl mt-6">供应商数据管理</h1>
            <!-- <UseActiveElement v-slot="{ element }">
                Active element is {{ element.dataset.id }}
                <input v-for="i in 6" :key="i" type="text" :data-id="i" class="!my-0 !min-w-0" :placeholder="`${i}`">
            </UseActiveElement> -->

            <el-container class="m-16">
                <el-aside width="250px">
                    <el-form ref="formRef" :model="form" label-width="6rem" style="max-width: 600px">
                        <el-text size="large" type="info">请输入航班信息：</el-text>
                        <el-divider />
                        <el-form-item label="起运港" prop="from" required>
                            <el-select v-model="form.from" placeholder="please select ..." :disabled="form.isContinue">
                                <el-option label="SHA" value="SHA" />
                                <el-option label="HKG" value="HKG" />
                            </el-select>
                        </el-form-item>

                        <el-form-item label="中转港" prop="stop">
                            <el-select v-model="form.stop" placeholder="please select ..." :disabled="form.isContinue">
                                <el-option label="SHA" value="SHA" />
                                <el-option label="HKG" value="HKG" />
                            </el-select>
                        </el-form-item>

                        <el-form-item label="目的港" prop="to" required>
                            <el-select v-model="form.to" placeholder="please select ..." :disabled="form.isContinue">
                                <el-option label="SHA" value="SHA" />
                                <el-option label="HKG" value="HKG" />
                            </el-select>
                        </el-form-item>

                        <el-form-item label="货比" prop="ratio" required>
                            <el-select v-model="form.ratio" placeholder="please select ...">
                                <el-option label="167" value="1:167" />
                                <el-option label="300" value="1:300" />
                                <el-option label="500" value="1:500" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="不同货比?" prop="isContinue">
                            <el-switch v-model="form.isContinue" />
                        </el-form-item>
                        <el-form-item label="45+" prop="r45" :rules="[{ type: 'number', message: 'must be a number' }]">
                            <el-input v-model.number="form.r45" />
                        </el-form-item>
                        <el-form-item label="100+" prop="r100"
                            :rules="[{ type: 'number', message: 'must be a number' }]">
                            <el-input v-model.number="form.r100" />
                        </el-form-item>
                        <el-form-item label="300+" prop="r300"
                            :rules="[{ type: 'number', message: 'must be a number' }]">
                            <el-input v-model.number="form.r300" />
                        </el-form-item>
                        <el-form-item label="500+" prop="r500"
                            :rules="[{ type: 'number', message: 'must be a number' }]">
                            <el-input v-model.number="form.r500" />
                        </el-form-item>
                        <el-form-item label="1000+" prop="r1000"
                            :rules="[{ type: 'number', message: 'must be a number' }]">
                            <el-input v-model.number="form.r1000" />
                        </el-form-item>
                        <el-form-item label="班期" prop="effective_date" required>
                            <el-date-picker v-model="form.effective_date" type="date" placeholder="Pick a date"
                                value-format="YYYY-MM-DD" :disabled="form.isContinue" />
                        </el-form-item>
                        <!-- <el-form-item label="备注" prop="desc">
                            <el-input v-model="form.desc" type="textarea" />
                        </el-form-item> -->
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit(formRef)">添加</el-button>
                            <el-button type="primary" @click="onReset(formRef)">重置</el-button>

                        </el-form-item>
                        <el-form-item>
                            <el-button type="success" style="width: 100%;" @click="onSubmitDatabase"> 上传 </el-button>
                        </el-form-item>
                    </el-form>
                </el-aside>
                <el-container style="padding: 3rem; margin-left: 2rem;">
                    <el-main>
                        <el-row>
                            <el-upload v-model:file-list="fileList" class="upload-demo" action="#" :limit="1"
                                ref="uploadRef" :auto-upload="false" :on-change="handleChange">
                                <el-button type="primary">文件上传</el-button>
                                <template #tip>
                                    <div class="el-upload__tip">
                                        ONLY csv file supported.
                                    </div>
                                </template>
                            </el-upload>
                        </el-row>
                        <ListItem v-for="i in listItems" :itemObj="i" :iKey="i.uuid" @delete-item="onDeleteItem" />
                    </el-main>
                    <el-footer>
                    </el-footer>
                </el-container>
            </el-container>
        </el-container>
        <Footer />
    </div>
</template>

<style scoped></style>