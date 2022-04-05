<template>
    <div>
        Home
        Bienvenido/a, {{ $auth.user[0].firstName }}
    </div>
</template>

<script>
    export default {
        middleware: 'auth',
        name: 'HomePage'
    }
</script>

<style lang="scss" scoped>

</style>