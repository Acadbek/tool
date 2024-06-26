"use strict";
/* __placeholder__ */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const radix_vue_1 = require("radix-vue");
const utils_1 = require("@/lib/utils");
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
let __VLS_typeProps;
const props = defineProps();
const emits = defineEmits();
const delegatedProps = (0, vue_1.computed)(() => {
    const { class: _, ...delegated } = props;
    return delegated;
});
const forwarded = (0, radix_vue_1.useForwardPropsEmits)(delegatedProps, emits);
const __VLS_fnComponent = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    emits: {},
});
let __VLS_functionalComponentProps;
const __VLS_modelEmitsType = {};
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    const __VLS_0 = {}
        .SliderRoot;
    ({}.SliderRoot);
    ({}.SliderRoot);
    __VLS_components.SliderRoot;
    __VLS_components.SliderRoot;
    // @ts-ignore
    [radix_vue_1.SliderRoot, radix_vue_1.SliderRoot,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ((__VLS_ctx.cn('relative flex w-full touch-none select-none items-center', props.class))) }, ...(__VLS_ctx.forwarded), }));
    const __VLS_2 = __VLS_1({ ...{ class: ((__VLS_ctx.cn('relative flex w-full touch-none select-none items-center', props.class))) }, ...(__VLS_ctx.forwarded), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ((__VLS_ctx.cn('relative flex w-full touch-none select-none items-center', props.class))) }, ...(__VLS_ctx.forwarded), }));
    __VLS_styleScopedClasses = ((0, utils_1.cn)('relative flex w-full touch-none select-none items-center', props.class));
    // @ts-ignore
    const __VLS_6 = {}
        .SliderTrack;
    ({}.SliderTrack);
    ({}.SliderTrack);
    __VLS_components.SliderTrack;
    __VLS_components.SliderTrack;
    // @ts-ignore
    [radix_vue_1.SliderTrack, radix_vue_1.SliderTrack,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("relative h-2 w-full grow overflow-hidden rounded-full bg-secondary") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("relative h-2 w-full grow overflow-hidden rounded-full bg-secondary") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ class: ("relative h-2 w-full grow overflow-hidden rounded-full bg-secondary") }, }));
    // @ts-ignore
    const __VLS_12 = {}
        .SliderRange;
    ({}.SliderRange);
    __VLS_components.SliderRange;
    // @ts-ignore
    [radix_vue_1.SliderRange,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ class: ("absolute h-full bg-primary") }, }));
    const __VLS_14 = __VLS_13({ ...{ class: ("absolute h-full bg-primary") }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ ...{ class: ("absolute h-full bg-primary") }, }));
    // @ts-ignore
    [utils_1.cn, forwarded,];
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    for (const [_, key] of __VLS_getVForSourceType((__VLS_ctx.modelValue))) {
        // @ts-ignore
        const __VLS_18 = {}
            .SliderThumb;
        ({}.SliderThumb);
        __VLS_components.SliderThumb;
        // @ts-ignore
        [radix_vue_1.SliderThumb,];
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ key: ((key)), ...{ class: ("block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50") }, }));
        const __VLS_20 = __VLS_19({ key: ((key)), ...{ class: ("block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50") }, }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ key: ((key)), ...{ class: ("block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50") }, }));
        // @ts-ignore
        [modelValue,];
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    }
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['h-2'];
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['grow'];
        __VLS_styleScopedClasses['overflow-hidden'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['bg-secondary'];
        __VLS_styleScopedClasses['absolute'];
        __VLS_styleScopedClasses['h-full'];
        __VLS_styleScopedClasses['bg-primary'];
        __VLS_styleScopedClasses['block'];
        __VLS_styleScopedClasses['h-5'];
        __VLS_styleScopedClasses['w-5'];
        __VLS_styleScopedClasses['rounded-full'];
        __VLS_styleScopedClasses['border-2'];
        __VLS_styleScopedClasses['border-primary'];
        __VLS_styleScopedClasses['bg-background'];
        __VLS_styleScopedClasses['ring-offset-background'];
        __VLS_styleScopedClasses['transition-colors'];
        __VLS_styleScopedClasses['focus-visible:outline-none'];
        __VLS_styleScopedClasses['focus-visible:ring-2'];
        __VLS_styleScopedClasses['focus-visible:ring-ring'];
        __VLS_styleScopedClasses['focus-visible:ring-offset-2'];
        __VLS_styleScopedClasses['disabled:pointer-events-none'];
        __VLS_styleScopedClasses['disabled:opacity-50'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                SliderRange: radix_vue_1.SliderRange,
                SliderRoot: radix_vue_1.SliderRoot,
                SliderThumb: radix_vue_1.SliderThumb,
                SliderTrack: radix_vue_1.SliderTrack,
                cn: utils_1.cn,
                forwarded: forwarded,
            };
        },
        props: {},
        emits: {},
    });
}
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {};
    },
    props: {},
    emits: {},
});
;
