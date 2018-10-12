<template>
<div>
    <div class="alert alert-light">
        <p> <strong>Target : <span> {{ target.name }} </span></strong>
        </p>
        <table class="table table-striped table-dark">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">UUID</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(c, index) in target.configurations" :key="index">
                    <td>{{ c.name }}</td>
                    <td>{{ c.uuid }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>

<script>
export default {
    name: 'Target',
    props: {
        target: {
            type: Object
        }
    }
}
</script>
