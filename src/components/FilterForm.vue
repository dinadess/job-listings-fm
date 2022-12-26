<template>
    <div
        class="bg-white py-4 px-6 shadow-lg rounded-md flex justify-between items-center -mt-9">
        <ul class="flex flex-wrap gap-3">
            <li
                v-for="(item, index) in listingStore.filter"
                :key="index"
                class="flex">
                <span
                    class="text-dark-cyan bg-grayish-cyan-light-bg py-2 px-2 rounded-l-md"
                    >{{ item }}</span
                >
                <button
                    aria-label="Remove Filter"
                    @click="listingStore.removeFilter(index)">
                    <img
                        class="bg-dark-cyan py-1 px-2 rounded-r-md hover:bg-grayish-cyan-very-dark transition-colors h-full object-contain"
                        :src="`./assets/images/icon-remove.svg`"
                        alt="Remove Filter Icon" />
                </button>
            </li>
        </ul>
        <div>
            <button
                class="text-base text-grayish-cyan-dark hover:text-dark-cyan font-bold hover:underline"
                @click="listingStore.removeAllFilter">
                Clear
            </button>
        </div>
    </div>
</template>

<script setup>
    import { useListingStore } from '@/stores/listing';

    const listingStore = useListingStore();
</script>

<style></style>
