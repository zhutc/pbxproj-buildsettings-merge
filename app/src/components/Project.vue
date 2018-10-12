<template>
<div>
    <div class="alert alert-secondary" role="alert">
        <p> <strong>  当前工程 : {{project.name}}</strong>
        </p>
        <div>
            <target v-for="(t, index) in project.targets" :key="index" :target="t" />
        </div>
    </div>

</div>
</template>

<script>
import Target from './Target.vue'
export default {
    name: 'Project',
    components: {
        Target
    },
    props: {
        project: Object
    },
    methods: {

    },
    computed: {

    }
}
</script>
