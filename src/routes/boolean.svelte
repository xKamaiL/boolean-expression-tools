<script lang="ts">
    import {browser} from '$app/env';
    import {onMount} from "svelte";

    let p
    let text = ""
    let previousText = text
    let copied = false

    function validator(node, value) {
        return {
            update(value) {
                if (value === "") {
                    text = ''
                    previousText = ''
                    return
                }
                if (['0', '1', ' ', '+', ''].indexOf(String(value[value.length - 1]),) == -1) {
                    text = previousText
                } else {
                    text = value
                    previousText = text
                }
            }
        }
    }


    let result
    let varName = ""

    onMount(() => {
        const params = (new URL(location)).searchParams;
        if (params.get('v') !== null) {
            varName = params.get('v')
        }
        if (params.get('e') !== null) {
            text = params.get('e')
        }
    })


    const convert = (str, varName) => {

        if (varName.trim().length == 0 || str == null) {
            return "Please enter variable name : " + varName
        }
        return `(${str.split(" ").filter(x => x !== "+")
            .map(x => {
                const maxLength = x.length - 1
                return x.split('').map((bit, i) => {
                    const n = Number(bit)
                    if (!n) {
                        return `not(${varName}(${maxLength - i}))`
                    }
                    return `${varName}(${maxLength - i})`
                }).join(" and ")
            })
            .join(") or (")})`
    }

    $: {

        result = convert(text, varName);
    }
    $: {
        if (browser && text != "" && varName != "") {
            const params = new URLSearchParams(location.search);
            params.set('v', varName);
            params.set('e', text);
            window.history.replaceState({}, '', `${location.pathname}?${params.toString()}`);
        }
    }

</script>

<div class="">
    <div class="bg-gray-200 p-2 rounded">
        แปลง "0001 + 0111 + 0110" เป็น vector boolean expression
    </div>

    <div class="mt-10">
        <div class="grid grid-cols-12 space-x-2">
            <div class="col-span-4">
                <input type="text" bind:value={varName} class="form-control" placeholder="var name EX: s"
                       maxlength="10"
                >
            </div>
            <div class="col-span-8">
                <input
                        type="text" class="form-control" bind:value={text} placeholder="0110 + 1111 + 0000"
                        use:validator={text}>
            </div>
        </div>
        <div class="mt-10 bg-gray-100 rounded p-4">
            <p bind:this={p} on:click={() => {
                console.log(p)
                var selection = window.getSelection();
                var txt = p
                var range = document.createRange();
                range.selectNodeContents(txt);
                selection.removeAllRanges();
                selection.addRange(range);
                navigator.clipboard.writeText(result)
                copied = true
                setTimeout(() => {copied = false},3000)
            } }>
                {result}
            </p>

        </div>
        {#if copied}
            <small class="text-red-500 text-right transition-all">Copied</small>
        {/if}

    </div>
</div>