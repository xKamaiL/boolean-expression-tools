<script lang="ts">
    import PinInput from "../components/PinInput.svelte";
    import {pinList} from "../libs/constants";

    let content = `
hex0[0],Output,PIN_U21,4A,B4A_N0,PIN_U21,,,,,,,,,,,,,
`;


</script>

<div class="grid grid-cols-2 space-x-1 p-2 ">
    <div class="control">
        <div class="bg-gray-200 p-2 rounded rounded-b-none flex justify-between">
            <h2 class="text-lg text-black">Variables</h2>
        </div>
        <div class="p-2 mt-4">
            <form>
                <input type="text" class="form-control w-full">
            </form>

           
        </div>
    </div>

    <div class="result">
        <div class="bg-gray-200 p-2 rounded rounded-b-none flex justify-end">
            <div class="space-2">
                <button class="btn btn-dark px-2">Copy</button>
                <button class="btn btn-primary px-2">Download</button>
            </div>
        </div>
        <textarea rows="100" class="p-2 rounded rounded-t-none w-full h-full" bind:value={content}/>
    </div>
</div>
