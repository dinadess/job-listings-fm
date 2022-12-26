<template>
    <header
        class="max-[375px]:bg-header-mobile min-[376px]:bg-header-desktop h-40 w-full bg-dark-cyan bg-no-repeat bg-cover">
        <h1 class="text-white text-lg text-center pt-10 px-3">
            Welcome to this job listings!
        </h1>
        <p
            class="text-white text-center pt-1 px-3 max-w-md mx-auto text-sm md:text-base">
            <span class="bg-grayish-cyan-dark rounded-full py-1 px-2"
                >&quest;</span
            >
            Click on the tablets on the right-side of the listing on desktop or
            the bottom on mobile to add a filter.
        </p>
    </header>

    <main>
        <div class="filter-wrapper">
            <FilterForm v-if="listingStore.filter.length" />
        </div>
        <div class="wrapper">
            <ul class="listings" ref="listings">
                <li
                    v-for="listing in listingStore.filteredListings"
                    :key="listing.id">
                    <JobListing :listing="listing" />
                </li>
            </ul>
        </div>
    </main>

    <footer>
        <p class="text-center px-2">
            Challenge by
            <a
                href="https://www.frontendmentor.io?ref=challenge"
                target="_blank"
                class="underline"
                >Frontend Mentor</a
            >. Coded by
            <a
                href="https://www.frontendmentor.io/profile/dinadess"
                target="_blank"
                class="underline"
                >Oshyeld</a
            >.
        </p>
    </footer>
</template>

<script setup>
    import JobListing from '@/components/JobListing.vue';
    import FilterForm from '@/components/FilterForm.vue';
    import { useListingStore } from '@/stores/listing';

    import { useAutoAnimate } from '@formkit/auto-animate/vue';

    const listingStore = useListingStore();
    const [listings] = useAutoAnimate();
</script>

<style scoped>
    header {
        line-height: 1.5;
    }
</style>
