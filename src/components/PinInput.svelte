<script lang="ts">
    import {IOType,} from "../libs";
    import type {IPinItem} from "../libs"

    export let p: IPinItem
    let val = ''
    const clearValue = () => {
        val = ''
    }
</script>

<div class="form-group">
    <label for="hex1">{p.to.toUpperCase()} :</label>
    <input type="text" id="hex1" bind:value={val} placeholder="-" class="form-input text-center"/>
    <select class="py-2.5">
        <option>Std Logic</option>
        <option>Vector downto</option>
        <option>Vector to</option>
    </select>
    <button type="button" on:click={clearValue}>X</button>
</div>