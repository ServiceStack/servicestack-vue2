<template>
    <v-link v-if="show"
            :to="hashPrefix + item.href" @click="(e) => $emit('click',e)" :id="item.id"
            :class="[item.className, opt.navItemClass, activeCls, btnCls]">
        <i v-if="item.iconClass" :class="item.iconClass"></i>
        {{item.label}}
    </v-link>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { NavItem, NavOptions, NavDefaults, NavLinkDefaults, trimEnd, pick, activeClassNav, btnClasses } from '@servicestack/client';
import { NavBase, optionProps, sanitizeOptions, BootstrapBase, routePath } from '../core';

@Component
export class NavLinkButton extends BootstrapBase {
    @Prop({ default: '' }) href!: string;
    @Prop({ default: () => (null) }) item!: NavItem;
    @Prop({ default: () => (null) }) options!: NavOptions;
    @Prop({ default: '' }) id!: string;
    @Prop({ default: '' }) baseHref!: string;
    @Prop({ default: '' }) activePath!: string;
    @Prop({ default: '' }) navItemClass!: string;
    @Prop({ default: '' }) exact!: boolean;
    @Prop({ default: null }) click!: () => void;

    protected get opt() {
        return sanitizeOptions(Object.assign(NavLinkDefaults.forNavLink(this.options), optionProps(this.$props)));
    }

    protected get show() {
        return !(this.item == null || !NavDefaults.showNav(this.item, this.opt.attributes));
    }

    protected get useActivePath() {
        return this.activePath || this.opt.activePath || routePath(this) || '';
    }

    protected get hashPrefix() {
        return trimEnd(this.baseHref || this.opt.baseHref || '', '/');
    }

    protected get activeCls() {
        return activeClassNav(this.item, this.useActivePath);
    }

    protected get btnCls() {
        return btnClasses(this.bootstrapClasses);
    }
}
export default NavLinkButton;
</script>
