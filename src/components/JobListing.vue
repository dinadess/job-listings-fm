<template>
    <div
        :class="[listing.featured ? 'featured-container' : 'listing-container']"
        class="listing bg-white px-4 md:px-8 py-5 md:py-6 shadow-lg shadow-dark-cyan-shadow rounded-md grid mb-10 md:mb-5 border-l-[5px]">
        <div
            class="absolute left-5 top-0 -translate-y-1/2 md:left-0 md:relative md:translate-y-0">
            <img
                :src="`src/assets/${listing.logo}`"
                :alt="`${listing.company} Logo`"
                class="w-7/12 md:w-full max-w-full h-auto" />
        </div>
        <div
            class="border-grayish-cyan-dark border-b md:border-0 w-full pb-4 md:pb-0 basis-[max-content]">
            <div class="mt-3 md:mt-0 mb-2">
                <strong class="text-dark-cyan text-sm md:text-base">{{
                    listing.company
                }}</strong>
                <span
                    v-if="listing.new"
                    class="new text-white text-xs bg-dark-cyan uppercase py-1 px-2 ml-4 rounded-2xl inline-block font-semibold">
                    New!
                </span>
                <span
                    v-if="listing.featured"
                    class="featured text-white text-xs bg-grayish-cyan-very-dark uppercase py-1 px-2 ml-2 rounded-2xl inline-block font-semibold">
                    Featured
                </span>
            </div>
            <div class="text-sm md:text-xl mb-1">
                <strong>{{ listing.position }}</strong>
            </div>
            <div
                class="listing-details flex flex-wrap gap-x-4 text-grayish-cyan-dark text-sm md:text-base">
                <p>{{ listing.postedAt }}</p>
                <p>{{ listing.contract }}</p>
                <p>{{ listing.location }}</p>
            </div>
        </div>
        <div class="ml-0 md:ml-auto">
            <ul class="flex flex-wrap gap-3">
                <li
                    v-for="language in [
                        listing.role,
                        listing.level,
                        ...listing.languages,
                        ...listing.tools,
                    ]"
                    :key="language">
                    <button
                        @click="click"
                        class="font-bold rounded-md transition-colors text-dark-cyan py-1 px-2 bg-grayish-cyan-light-bg hover:text-grayish-cyan hover:bg-dark-cyan">
                        {{ language }}
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import { useListingStore } from '@/stores/listing';
    const props = defineProps(['listing']);

    /** Store */
    const listingStore = useListingStore();

    const click = function (e) {
        listingStore.addFilter(e.target.innerHTML);
    };
</script>

<style></style>
