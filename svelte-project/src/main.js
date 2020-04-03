import StripeModal from './StripeModal.svelte';

new StripeModal({
    target: document.querySelector('#donate-button-menu'),
});

new StripeModal({
    target: document.querySelector('#donate-button-footer'),
    props: {
        useHash: true
    }
});
