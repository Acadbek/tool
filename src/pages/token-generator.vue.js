"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@vueuse/core");
const vue_1 = require("vue");
const Toaster_vue_1 = __importDefault(require("@/components/ui/toast/Toaster.vue"));
const use_toast_1 = require("@/components/ui/toast/use-toast");
const Button_vue_1 = __importDefault(require("@/components/ui/button/Button.vue"));
const switch_1 = require("@/components/ui/switch");
const utils_1 = require("@/lib/utils");
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await Promise.resolve().then(() => __importStar(require('vue')));
const { toast } = (0, use_toast_1.useToast)();
(0, core_1.useTitle)('token generator');
const token = (0, vue_1.ref)('');
const withUpperCase = (0, vue_1.ref)(true);
const withLowerCase = (0, vue_1.ref)(true);
const withNumbers = (0, vue_1.ref)(true);
const withSymbols = (0, vue_1.ref)(true);
const length = (0, vue_1.ref)([36]);
const { text, copy, copied, isSupported } = (0, core_1.useClipboard)({ token });
const numbers = '0123456789';
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const symbols = "`~!@#$%^&*()-_+={}[]|:;'<>,.?/";
const random = () => Math.random();
function generateToken() {
    let chars = [];
    if (withUpperCase.value) {
        chars.push(...uppercaseLetters.split(''));
    }
    if (withLowerCase.value) {
        chars.push(...lowercaseLetters.split(''));
    }
    if (withNumbers.value) {
        chars.push(...numbers.split(''));
    }
    if (withSymbols.value) {
        chars.push(...symbols.split(''));
    }
    // Fisher-Yates shuffle
    for (let i = chars.length - 1; i > 0; i--) {
        const j = Math.floor(random() * (i + 1));
        [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    token.value = chars.slice(0, length.value[0]).join('');
    return token;
}
(0, vue_1.watch)(length, prev => {
    generateToken();
});
const handleChange = (name) => {
    switch (name) {
        case 'withUpperCase':
            withUpperCase.value = !withUpperCase.value;
            break;
        case 'withLowerCase':
            withLowerCase.value = !withLowerCase.value;
            break;
        case 'withNumbers':
            withNumbers.value = !withNumbers.value;
            break;
        case 'withSymbols':
            withSymbols.value = !withSymbols.value;
            break;
        default:
            break;
    }
    generateToken();
};
const copyToken = () => {
    try {
        copy(token.value);
        toast({
            title: 'Copied',
            description: 'Friday, February 10, 2023 at 5:57 PM',
        });
    }
    catch (error) {
        toast({
            variant: 'destructive',
            title: 'Error',
            description: 'Friday, February 10, 2023 at 5:57 PM',
        });
    }
};
(0, vue_1.onMounted)(() => {
    generateToken();
});
const __VLS_fnComponent = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({});
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
    [Toaster_vue_1.default,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(Toaster_vue_1.default, new Toaster_vue_1.default({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(Toaster_vue_1.default, __VLS_1);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ flex: (true), "flex-col": (true), "items-center": (true), border: (true), "p-14": (true), "justify-center": (true), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col gap-8 mb-8 w-[500px]") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-6") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-4") }, });
    // @ts-ignore
    const __VLS_5 = {}
        .Switch;
    ({}.Switch);
    __VLS_components.Switch;
    // @ts-ignore
    [switch_1.Switch,];
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({ ...{ 'onUpdate:checked': {} }, checked: ((__VLS_ctx.withLowerCase)), }));
    const __VLS_7 = __VLS_6({ ...{ 'onUpdate:checked': {} }, checked: ((__VLS_ctx.withLowerCase)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    ({}({ ...{ 'onUpdate:checked': {} }, checked: ((__VLS_ctx.withLowerCase)), }));
    let __VLS_11;
    const __VLS_12 = {
        'onUpdate:checked': (() => __VLS_ctx.handleChange('withLowerCase'))
    };
    // @ts-ignore
    [withLowerCase, handleChange,];
    const __VLS_10 = __VLS_pickFunctionalComponentCtx(__VLS_5, __VLS_7);
    let __VLS_8;
    let __VLS_9;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-4") }, });
    // @ts-ignore
    const __VLS_13 = {}
        .Switch;
    ({}.Switch);
    __VLS_components.Switch;
    // @ts-ignore
    [switch_1.Switch,];
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({ ...{ 'onUpdate:checked': {} }, checked: ((__VLS_ctx.withUpperCase)), }));
    const __VLS_15 = __VLS_14({ ...{ 'onUpdate:checked': {} }, checked: ((__VLS_ctx.withUpperCase)), }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    ({}({ ...{ 'onUpdate:checked': {} }, checked: ((__VLS_ctx.withUpperCase)), }));
    let __VLS_19;
    const __VLS_20 = {
        'onUpdate:checked': (() => __VLS_ctx.handleChange('withUpperCase'))
    };
    // @ts-ignore
    [handleChange, withUpperCase,];
    const __VLS_18 = __VLS_pickFunctionalComponentCtx(__VLS_13, __VLS_15);
    let __VLS_16;
    let __VLS_17;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-4") }, });
    // @ts-ignore
    const __VLS_21 = {}
        .Switch;
    ({}.Switch);
    __VLS_components.Switch;
    // @ts-ignore
    [switch_1.Switch,];
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ ...{ 'onUpdate:checked': {} }, checked: ((__VLS_ctx.withNumbers)), }));
    const __VLS_23 = __VLS_22({ ...{ 'onUpdate:checked': {} }, checked: ((__VLS_ctx.withNumbers)), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    ({}({ ...{ 'onUpdate:checked': {} }, checked: ((__VLS_ctx.withNumbers)), }));
    let __VLS_27;
    const __VLS_28 = {
        'onUpdate:checked': (() => __VLS_ctx.handleChange('withNumbers'))
    };
    // @ts-ignore
    [handleChange, withNumbers,];
    const __VLS_26 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
    let __VLS_24;
    let __VLS_25;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center gap-4") }, });
    // @ts-ignore
    const __VLS_29 = {}
        .Switch;
    ({}.Switch);
    __VLS_components.Switch;
    // @ts-ignore
    [switch_1.Switch,];
    // @ts-ignore
    const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({ ...{ 'onUpdate:checked': {} }, checked: ((__VLS_ctx.withSymbols)), }));
    const __VLS_31 = __VLS_30({ ...{ 'onUpdate:checked': {} }, checked: ((__VLS_ctx.withSymbols)), }, ...__VLS_functionalComponentArgsRest(__VLS_30));
    ({}({ ...{ 'onUpdate:checked': {} }, checked: ((__VLS_ctx.withSymbols)), }));
    let __VLS_35;
    const __VLS_36 = {
        'onUpdate:checked': (() => __VLS_ctx.handleChange('withSymbols'))
    };
    // @ts-ignore
    [handleChange, withSymbols,];
    const __VLS_34 = __VLS_pickFunctionalComponentCtx(__VLS_29, __VLS_31);
    let __VLS_32;
    let __VLS_33;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    // @ts-ignore
    const __VLS_37 = {}
        .Slider;
    ({}.Slider);
    __VLS_components.Slider;
    // @ts-ignore
    [Slider,];
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({ w: ("400px"), mt4: (true), modelValue: ((__VLS_ctx.length)), max: ((92)), min: ((1)), step: ((1)), ...{ class: ((__VLS_ctx.cn(__VLS_ctx.$attrs.class ?? ''))) }, }));
    const __VLS_39 = __VLS_38({ w: ("400px"), mt4: (true), modelValue: ((__VLS_ctx.length)), max: ((92)), min: ((1)), step: ((1)), ...{ class: ((__VLS_ctx.cn(__VLS_ctx.$attrs.class ?? ''))) }, }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    ({}({ w: ("400px"), mt4: (true), modelValue: ((__VLS_ctx.length)), max: ((92)), min: ((1)), step: ((1)), ...{ class: ((__VLS_ctx.cn(__VLS_ctx.$attrs.class ?? ''))) }, }));
    __VLS_styleScopedClasses = ((0, utils_1.cn)($attrs.class ?? ''));
    // @ts-ignore
    [length, utils_1.cn, $attrs,];
    const __VLS_42 = __VLS_pickFunctionalComponentCtx(__VLS_37, __VLS_39);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ "mt-2": (true), text: ("14px"), "text-center": (true), });
    (__VLS_ctx.token.length);
    // @ts-ignore
    [token,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ "p-4": (true), ...{ class: ("w-[500px] h-28 rounded-md mt-10") }, "outline-none": (true), border: (true), "bg-transparent": (true), value: ((__VLS_ctx.token)), });
    // @ts-ignore
    [token,];
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ flex: (true), "gap-4": (true), "mt-4": (true), });
    // @ts-ignore
    [Button_vue_1.default, Button_vue_1.default,];
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(Button_vue_1.default, new Button_vue_1.default({ ...{ 'onClick': {} }, variant: ("outline"), }));
    const __VLS_44 = __VLS_43({ ...{ 'onClick': {} }, variant: ("outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ ...{ 'onClick': {} }, variant: ("outline"), }));
    let __VLS_48;
    const __VLS_49 = {
        onClick: (__VLS_ctx.generateToken)
    };
    // @ts-ignore
    [generateToken,];
    (__VLS_47.slots).default;
    const __VLS_47 = __VLS_pickFunctionalComponentCtx(Button_vue_1.default, __VLS_44);
    let __VLS_45;
    let __VLS_46;
    // @ts-ignore
    [Button_vue_1.default, Button_vue_1.default,];
    // @ts-ignore
    const __VLS_50 = __VLS_asFunctionalComponent(Button_vue_1.default, new Button_vue_1.default({ ...{ 'onClick': {} }, variant: ("outline"), }));
    const __VLS_51 = __VLS_50({ ...{ 'onClick': {} }, variant: ("outline"), }, ...__VLS_functionalComponentArgsRest(__VLS_50));
    ({}({ ...{ 'onClick': {} }, variant: ("outline"), }));
    let __VLS_55;
    const __VLS_56 = {
        onClick: (__VLS_ctx.copyToken)
    };
    // @ts-ignore
    [copyToken,];
    (__VLS_54.slots).default;
    const __VLS_54 = __VLS_pickFunctionalComponentCtx(Button_vue_1.default, __VLS_51);
    let __VLS_52;
    let __VLS_53;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['gap-8'];
        __VLS_styleScopedClasses['mb-8'];
        __VLS_styleScopedClasses['w-[500px]'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-6'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-8'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['gap-4'];
        __VLS_styleScopedClasses['w-[500px]'];
        __VLS_styleScopedClasses['h-28'];
        __VLS_styleScopedClasses['rounded-md'];
        __VLS_styleScopedClasses['mt-10'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Toaster: Toaster_vue_1.default,
                Button: Button_vue_1.default,
                Switch: switch_1.Switch,
                cn: utils_1.cn,
                token: token,
                withUpperCase: withUpperCase,
                withLowerCase: withLowerCase,
                withNumbers: withNumbers,
                withSymbols: withSymbols,
                length: length,
                generateToken: generateToken,
                handleChange: handleChange,
                copyToken: copyToken,
            };
        },
    });
}
exports.default = (await Promise.resolve().then(() => __importStar(require('vue')))).defineComponent({
    setup() {
        return {};
    },
});
;
