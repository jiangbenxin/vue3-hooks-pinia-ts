<template>
    <div>
        {{ x }} {{  y }}
    </div>
</template>
<script lang='ts' setup>
import useMove from "@/hooks/index"

const {  x, y } = useMove()
</script>