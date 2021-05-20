<template>
    <div>
        <svg class="icon">
            <use :xlink:href="'#'+name"/>
        </svg>
    </div>
</template>

<script lang = "ts">
    //功能：将一个目录里的任何以.svg结尾的所有文件统一全部引入到当前文件中
    let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
    try {importAll(require.context('../assets/icons', true, /\.svg$/));} catch (error) {console.log(error);}
    export default {
        props:['name'],
        name:"Icon",
    }
</script>

<style lang="scss" scoped>
    .icon{
        width:32px;
        height:32px;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>