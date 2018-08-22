<template>
    <div>
        <div class="mb-3">
            <input type="number" v-model="offset">
            <input type="text" v-model="theme">
        </div>
        <div>
            <Button :theme="theme" :offset="offset"></Button>
            <Button :theme="theme" :offset="offset"></Button>
            <Button :theme="theme" :offset="offset"></Button>
        </div>
    </div>
</template>

<script>

import Button from './Button.vue';

export default {
    components: {Button},
    data: function() {
        return {
            theme: 'success',
            offset: 2
        }
    }
}
</script>