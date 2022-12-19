import { defineStore } from 'pinia';
import json from './data.json';

export const useListingStore = defineStore('listing', {
    state: () => {
        return {
            jobListings: json,
            filter: [],
        };
    },
    getters: {
        filteredListings(state) {
            if (!state.filter.length) return state.jobListings;
            return state.jobListings.filter((listing) =>
                state.filter.every((element) =>
                    [
                        listing.role,
                        listing.level,
                        ...listing.languages,
                        ...listing.tools,
                    ].includes(element)
                )
            );
        },
    },
    actions: {
        addFilter(filterTerm) {
            if (this.filter.includes(filterTerm)) return;
            this.filter.push(filterTerm);
        },
        removeFilter(index) {
            this.filter.splice(index, 1);
        },
        removeAllFilter() {
            this.filter = [];
        },
    },
});
