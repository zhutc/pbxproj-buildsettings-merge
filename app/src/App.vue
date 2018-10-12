<template>
<div class="container">
    <h4 class="display-4">PBXProject BuildSettings Merge</h4>
    <p class="lead">Merge buildSettings from project.pbxproj </p>
    <div class="btn-group">
        <button type="button" :class="getBtnClass(0)" @click="infoClick">项目信息</button>
        <button type="button" :class="getBtnClass(1)" @click="mergeClick">配置合并</button>
        <button type="button" :class="getBtnClass(2)" @click="downloadClick">保存下载</button>
    </div>
    <p></p>
    <project v-for="(project, index) in projects" :key="index" :project="project" />

</div>
</template>

<script>
import Project from './components/Project.vue'
import {
    mapGetters
} from 'vuex'

export default {
    name: "app",
    components: {
        Project
    },
    data: function () {
        return {
            current: 0
        }
    },
    computed: {
        ...mapGetters({
            projects: 'getProjects'
        }),
    },
    methods: {
        getBtnClass: function (index) {
            if (index == this.current) {
                return 'btn btn-primary'
            } else {
                return 'btn btn-secondary'
            }
        },
        infoClick: function () {
            this.current = 0
            console.log('info')
        },
        mergeClick: function () {
            this.current = 1

        },
        downloadClick: function () {
            this.current = 2

        }
    }
};
</script>
