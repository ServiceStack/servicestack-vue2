<template>
    <img :src="src" :style="styles" >
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { combinePaths } from '@servicestack/client';

@Component
export class SvgImage extends Vue {
    @Prop({ default: '' }) id!: string;
    @Prop({ default: '' }) fill!: string;
    @Prop({ default: '' }) width!: number;
    @Prop({ default: '' }) height!: number;
    @Prop({ default: '' }) baseUrl!: string;

    protected get src() {
        let svgSrc = `/metadata/svg/${this.id}.svg`;
        if (this.fill) {
            svgSrc += `?fill=` + encodeURIComponent(this.fill);
        }
        return this.baseUrl
            ? combinePaths(this.baseUrl, svgSrc)
            : svgSrc;
    }

    protected get styles() {
        const ret:any = {};
        if (this.width) {
            ret.width = this.width;
        }
        if (this.height) {
            ret.height = this.height;
        }
        return ret;
    }
}
export default SvgImage;
</script>
