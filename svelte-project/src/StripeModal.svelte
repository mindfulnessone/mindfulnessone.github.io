<script>
    import {loadStripe} from '@stripe/stripe-js';

    export let useHash = false;

    let priceText = '20';

    let priceInput;

    let priceInputHover = false;

    let isRecurrent = false;

    let disclaimerMessage = '';

    let inputError = false;

    $: if (!priceText || !priceText.match(/^[0-9]*$/)) {
        inputError = true;
        disclaimerMessage = "Please input whole number bigger than zero.";
    } else {
        inputError = false;
        disclaimerMessage = "Your card will be charged " + price + ".00 CAD"
                + (isRecurrent ? ' and then billed ' + price + '.00 CAD each month' : '')
                + '.';
    }

    $: price = parseInt(priceText);

    $: if (price < 1) {
        inputError = true;
        disclaimerMessage = "Pleas input whole number bigger than zero.";
    }


    let isVisible = (window.location.hash === '#donate') && useHash;

    $: otherButtonPressed = price !== 5 && price !== 10 && price !== 20 && price !== 50 || otherButtonPressed;

    function showModal() {
        window.location.hash = '#donate';
        isVisible = true;
    }

    function hideModal() {
        window.location.hash = '';
        isVisible = false;
    }

    function setDonation(newPrice) {
        otherButtonPressed = false;
        priceText = newPrice;
    }

    function otherButton() {
        otherButtonPressed = true;
        priceInput.focus();
    }

    function setOther() {
        otherButtonPressed = true;
    }

    function setRecurring(recurring) {
        isRecurrent = recurring;
    }

    async function clickDonateButton() {
        if (isRecurrent) {
            await clickDonateButtonForReal({plan: 'plan_H1joqlfPdhtEeb', quantity: price});
        } else {
            await clickDonateButtonForReal({sku: 'sku_H1jmGgXLYfix4y', quantity: price});
        }
    }

    async function clickDonateButtonForReal(item) {
        const stripe = await loadStripe('pk_live_TsW6sy751tsXWBIPnzpTUZrI00HePBpp4m');

        stripe.redirectToCheckout({
            items: [
                item
            ],
            successUrl: 'https://www.mindfulness.one/success/',
            cancelUrl: 'https://www.mindfulness.one/#donate',
        }).then(function (result) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        });
    }

    function showInputBorder() {
        priceInputHover = true;
    }

    function hideInputBorder() {
        priceInputHover = false;
    }

    function focusInput() {
        priceInput.focus();
    }
</script>

<style>
    .modal {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.5);
        text-align: initial;
        color: black;
    }

    .modal-visible {
        display: block;
    }

    .modal-hidden {
        display: none;
    }

    .donate-link {
        cursor: pointer;
    }

    /* The Close Button */
    .close {
        color: #aaa;
        float: right;
        font-size: 40px;
        font-weight: bold;
        line-height: 20px;
    }

    p {
        color: black;
        margin: 0;
    }

    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }

    .active-button {
        background-color: coral;
    }

    .inactive-button {
        background-color: #bebebe;
    }

    .modal-content {
        display: flex;
        flex-direction: column;
    }

    .modal-header {
        text-align: center;
        font-size: 24px;
    }

    .modal-buttons {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: stretch;
        flex-wrap: wrap;
    }

    .price-button {
        flex: 1;
        margin: 5px;
        min-width: 100px;
    }

    .recurring-buttons {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .recurring-button {
        margin: 5px;
    }

    .price-input {
        margin: 5px 0 5px 5px;
        width: 100px;
        /* min-width: 0; */
        font-size: 50px;
        color: coral;
        text-align: right;
        border-color: white;
        padding-right: 0;
        box-shadow: none;

        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }

    .price-input:focus {
        padding-right: 5px;
    }

    .price-input-hover {
        border-color: #c4c4c4;
    }

    .price-label {
        display: inline-block;
        font-size: 50px;
        color: coral;
        /*line-height: 90px;*/
        margin: 5px 0 5px 0px;
    }

    .price-label-small {
        font-size: 30px;
        color: coral;
        /*line-height: 90px;*/
        margin: 5px 0 5px 0px;
    }

    .donate-button {
        margin: 10px 5px 5px 5px;
    }

    .input-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: baseline;
    }

    .disclaimer {
        color: #333;
        text-align: center;
        font-size: 14px;
    }

    .disclaimer-error {
        color: #FF0000;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
    }


    .disclaimer-container {
        min-height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 5px;
    }

    .donate-button-disabled {
        ;
    }
</style>

<a on:click={showModal} class="donate-link">Donate</a>
<div id="myModal" class="modal {isVisible ? 'modal-visible' : 'modal-hidden'}">
    <div class="modal-body">
        <span class="close" on:click={hideModal}>&times;</span>
        <h3 class="modal-header">How much would you like to donate?</h3>
        <div class="modal-content">


            <div class="modal-buttons">
                <button on:click={() => setDonation('5')}
                        class="{price === 5 && !otherButtonPressed ? 'active-button' : 'inactive-button'} price-button">
                    5
                </button>
                <button on:click={() => setDonation('10')}
                        class="{price === 10 && !otherButtonPressed ? 'active-button' : 'inactive-button'} price-button">
                    10
                </button>
                <button on:click={() => setDonation('20')}
                        class="{price === 20 && !otherButtonPressed ? 'active-button' : 'inactive-button'} price-button">
                    20
                </button>
                <button on:click={() => setDonation('50')}
                        class="{price === 50 && !otherButtonPressed ? 'active-button' : 'inactive-button'} price-button">
                    50
                </button>
                <button on:click={otherButton}
                        class="{otherButtonPressed ? 'active-button' : 'inactive-button'} price-button">
                    Other
                </button>
            </div>
            <div class="input-row">
                <input type="text"
                       bind:value={priceText}
                       bind:this={priceInput}
                       on:keydown={setOther}
                       class="price-input {priceInputHover ? 'price-input-hover' : ''}"
                       pattern="[0-9]*">
                <p class="price-label"
                   on:mouseenter={showInputBorder}
                   on:mouseleave={hideInputBorder}
                   on:click={focusInput}>
                    .00</p>
                <p class="price-label-small"
                   on:mouseenter={showInputBorder}
                   on:mouseleave={hideInputBorder}
                   on:click={focusInput}>
                    &nbsp;CAD</p>

            </div>
            <div class="recurring-buttons">
                <button on:click={() => setRecurring(false)}
                        class="{isRecurrent ? 'inactive-button' : 'active-button'} recurring-button">Donate once
                </button>
                <button on:click={() => setRecurring(true)}
                        class="{isRecurrent ? 'active-button' : 'inactive-button'} recurring-button">Donate every month
                </button>
            </div>
            <button disabled='{inputError}' on:click={clickDonateButton} class="{inputError ? 'donate-button-disabled' : ''} donate-button">Donate</button>
            <div class="disclaimer-container">
                <p class="{inputError ? 'disclaimer-error' : 'disclaimer'}">{disclaimerMessage}</p>
            </div>
        </div>
    </div>
</div>