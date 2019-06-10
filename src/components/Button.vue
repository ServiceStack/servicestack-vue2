<template>
    <button v-bind="attrs" @click="(e) => $emit('click',e)" :class="['btn', btnCls]">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { NavOptions, LinkButtonDefaults, trimEnd, pick, activeClass, btnClasses } from '@servicestack/client';
import { BootstrapBase, optionProps, sanitizeOptions } from '../core';

@Component
export class Button extends BootstrapBase {
    @Prop({ default: () => (null) }) options!: NavOptions;
    @Prop({ default: '' }) id: string;
    @Prop({ default: '' }) name: string;
    @Prop({ default: '' }) type: string;
    @Prop({ default: '' }) value: string;
    @Prop({ default: false }) disabled: boolean;
    @Prop({ default: null }) click!: () => void;

    protected get attrs() {
        return pick(this.$props, ['id', 'type', 'name', 'autofocus', 'disabled', 'value']);
    }

    protected get btnCls() {
        return btnClasses(this.bootstrapClasses);
    }
}
export default Button;
</script>
