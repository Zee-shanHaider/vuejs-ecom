<template>
    <Teleport to='body' >
        <Transition name="modal-outer">
            <div v-show="modalActive" class="absolute top-0 flex justify-center bg-opacity-30 left-0 bg-black w-full h-screen">
                <Transition name="modal-inner">
                    <div v-if="modalActive" class="text-black m-auto px-6 py-8 border-black rounded-md w-1/2 items-center justify-between bg-white flex ">
                        <div class="h-full">
                            <img class="object-cover h-90 w-90" src="@/assets/images/app-login-security-4897468-4077880.png" alt="Login">
                        </div>
                        <div class="flex flex-col w-full">
                            <h2 class="text-center text-lg font-semibold">
                                {{title}}
                            </h2>
                            <slot/>
                        </div>
                    </div>
                </Transition>
            </div>
        </Transition>
    </Teleport>
</template>

<script setup lang="ts">
    defineProps({
        title: {
            default: "Login",
            type: String,
        },
        modalActive: {
            default: true,
            type: Boolean
        },
        imagePath: {
            default: '',
            type: String,
        }
    })

</script>

<style lang="css" scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
    transition: opacity 0.4s ease-in;
}

.modal-outer-enter-from,
.modal-outer-leave-to {
    opacity: 0;
}

.modal-inner-enter-active,
.modal-inner-leave-active {
    transition: opacity 0.4s ease-out;
}

.modal-inner-enter-from {
    transform: scale(0.8);
    opacity: 0;
}

.modal-inner-leave-to {
    opacity: 0;
    transition: 0.4s;
}
</style>