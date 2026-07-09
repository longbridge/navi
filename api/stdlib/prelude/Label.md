---
title: "Label"
---

<script setup>
import { ref } from 'vue'
const _s0 = ref(0)
const _s1 = ref(0)
</script>

# Label

Handle for a label drawing.

## Static Methods

### new {#new}

<OverloadTabs v-model="_s0" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Label.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">new</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(point</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> chart.Point, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, xloc</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Xloc </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Xloc.BarIndex, yloc</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Yloc </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Yloc.Price, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LabelStyle </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LabelStyle.Down, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Normal, textalign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign.Center, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_font_family</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily.Default, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_formatting</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> text.NONE)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Label</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Label.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">new</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(point</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> chart.Point, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, xloc</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Xloc </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Xloc.BarIndex, yloc</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Yloc </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Yloc.Price, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LabelStyle </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LabelStyle.Down, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, textalign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign.Center, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_font_family</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily.Default, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_formatting</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> text.NONE)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Label</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Label.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">new</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, y</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, xloc</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Xloc </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Xloc.BarIndex, yloc</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Yloc </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Yloc.Price, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LabelStyle </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LabelStyle.Down, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size.Normal, textalign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign.Center, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_font_family</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily.Default, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_formatting</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> text.NONE)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Label</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Label.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">new</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(x</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, y</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> float</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#032F62;--shiki-dark:#9ECBFF\"> \"\"</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, xloc</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Xloc </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Xloc.BarIndex, yloc</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Yloc </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Yloc.Price, </span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\">color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, style</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LabelStyle </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> LabelStyle.Down, text_color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> color</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> 0</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, textalign</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextHAlign.Center, tooltip</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> string</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> na</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_font_family</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> FontFamily.Default, force_overlay</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> bool</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> =</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> false</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">, text_formatting</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> const</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> TextFormat </span><span style=\"color:#D73A49;--shiki-dark:#F97583\">=</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> text.NONE)</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Label</span>"]' />

<div v-show="_s0 === 0">

Creates a label object on the chart.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/chart/Point">chart.Point</a></code> |  | The <a class="stdlib-ref" data-key="chart::Point" href="/api/stdlib/chart/Point">chart.Point</a> object specifying the position of the label. |
| `text` | <code>series&nbsp;string</code> | `""` | The text to display on the label. |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Xloc">Xloc</a></code> | `Xloc.BarIndex` | The x-location type: Xloc.BarIndex or Xloc.BarTime. |
| `yloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Yloc">Yloc</a></code> | `Yloc.Price` | The y-location type: Yloc.Price or Yloc.Price_range. |
| `color` | <code>series&nbsp;color</code> | `na` | The background color of the label. |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/LabelStyle">LabelStyle</a></code> | `LabelStyle.Down` | The style of the label. |
| `text_color` | <code>series&nbsp;color</code> | `na` | The color of the label text. |
| `size` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Size">Size</a></code> | `Size.Normal` | The size of the label as a named constant. |
| `textalign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Center` | The text alignment: TextHAlign.Center, TextHAlign.Left, or TextHAlign.Right. |
| `tooltip` | <code>series&nbsp;string</code> | `na` | The tooltip text when hovering over the label. |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | The font family for the label text. |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | If true, the label is rendered on the top. |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `text.NONE` | The text formatting options. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code>

</div>

<div v-show="_s0 === 1">

Creates a label object on the chart.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/chart/Point">chart.Point</a></code> |  | The <a class="stdlib-ref" data-key="chart::Point" href="/api/stdlib/chart/Point">chart.Point</a> object specifying the position of the label. |
| `text` | <code>series&nbsp;string</code> | `""` | The text to display on the label. |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Xloc">Xloc</a></code> | `Xloc.BarIndex` | The x-location type: Xloc.BarIndex or Xloc.BarTime. |
| `yloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Yloc">Yloc</a></code> | `Yloc.Price` | The y-location type: Yloc.Price or Yloc.Price_range. |
| `color` | <code>series&nbsp;color</code> | `na` | The background color of the label. |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/LabelStyle">LabelStyle</a></code> | `LabelStyle.Down` | The style of the label. |
| `text_color` | <code>series&nbsp;color</code> | `na` | The color of the label text. |
| `size` | <code>series&nbsp;int</code> | `0` | The size of the label as an integer value. |
| `textalign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Center` | The text alignment: TextHAlign.Center, TextHAlign.Left, or TextHAlign.Right. |
| `tooltip` | <code>series&nbsp;string</code> | `na` | The tooltip text when hovering over the label. |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | The font family for the label text. |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | If true, the label is rendered on the top. |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `text.NONE` | The text formatting options. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code>

</div>

<div v-show="_s0 === 2">

Creates a label object on the chart.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | <code>series&nbsp;int</code> |  | The x-coordinate (bar index or UNIX time). |
| `y` | <code>series&nbsp;float</code> |  | The y-coordinate (price). |
| `text` | <code>series&nbsp;string</code> | `""` | The text to display on the label. |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Xloc">Xloc</a></code> | `Xloc.BarIndex` | The x-location type: Xloc.BarIndex or Xloc.BarTime. |
| `yloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Yloc">Yloc</a></code> | `Yloc.Price` | The y-location type: Yloc.Price or Yloc.Price_range. |
| `color` | <code>series&nbsp;color</code> | `na` | The background color of the label. |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/LabelStyle">LabelStyle</a></code> | `LabelStyle.Down` | The style of the label. |
| `text_color` | <code>series&nbsp;color</code> | `na` | The color of the label text. |
| `size` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Size">Size</a></code> | `Size.Normal` | The size of the label as a named constant. |
| `textalign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Center` | The text alignment: TextHAlign.Center, TextHAlign.Left, or TextHAlign.Right. |
| `tooltip` | <code>series&nbsp;string</code> | `na` | The tooltip text when hovering over the label. |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | The font family for the label text. |
| `force_overlay` | <code>const&nbsp;bool</code> | `false` | If true, the label is rendered on the top. |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `text.NONE` | The text formatting options. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code>

</div>

<div v-show="_s0 === 3">

Creates a label object on the chart.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `x` | <code>series&nbsp;int</code> |  | The x-coordinate (bar index or UNIX time). |
| `y` | <code>series&nbsp;float</code> |  | The y-coordinate (price). |
| `text` | <code>series&nbsp;string</code> | `""` | The text to display on the label. |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Xloc">Xloc</a></code> | `Xloc.BarIndex` | The x-location type: Xloc.BarIndex or Xloc.BarTime. |
| `yloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Yloc">Yloc</a></code> | `Yloc.Price` | The y-location type: Yloc.Price or Yloc.Price_range. |
| `color` | <code>series&nbsp;color</code> | `na` | The background color of the label. |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/LabelStyle">LabelStyle</a></code> | `LabelStyle.Down` | The style of the label. |
| `text_color` | <code>series&nbsp;color</code> | `na` | The color of the label text. |
| `size` | <code>series&nbsp;int</code> | `0` | The size of the label as an integer value. |
| `textalign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> | `TextHAlign.Center` | The text alignment: TextHAlign.Center, TextHAlign.Left, or TextHAlign.Right. |
| `tooltip` | <code>series&nbsp;string</code> | `na` | The tooltip text when hovering over the label. |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/FontFamily">FontFamily</a></code> | `FontFamily.Default` | The font family for the label text. |
| `force_overlay` | <code>series&nbsp;bool</code> | `false` | If true, the label is rendered on the top. |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code> | `text.NONE` | The text formatting options. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code>

</div>

## Static Properties

### all {#all}

**Type:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Array">Array&lt;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a>&gt;</a></code>

Returns an array filled with all the current labels drawn by the script.

## Methods

### copy {#copy}

```navi
Label.copy(id: series Label): series Label
```

Creates a copy of the specified label and returns its id.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to copy. |

**Returns:** <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code>

---

### delete {#delete}

```navi
Label.delete(id: series Label)
```

Deletes the specified label from the chart.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to delete. |

---

### get_text {#get_text}

```navi
Label.get_text(id: series Label): series string
```

Returns text of this label.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to get the text from. |

**Returns:** <code>series&nbsp;string</code>

---

### get_x {#get_x}

```navi
Label.get_x(id: series Label): series int
```

Returns UNIX time or bar index (depending on the last xloc value set) of this label's position.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to get the x-coordinate from. |

**Returns:** <code>series&nbsp;int</code>

---

### get_y {#get_y}

```navi
Label.get_y(id: series Label): series float
```

Returns price of this label's position.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to get the y-coordinate from. |

**Returns:** <code>series&nbsp;float</code>

---

### set_color {#set_color}

```navi
Label.set_color(id: series Label, color: series color)
```

Sets color of this label.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to modify. |
| `color` | <code>series&nbsp;color</code> |  | The new background color. |

---

### set_point {#set_point}

```navi
Label.set_point(id: series Label, point: series chart.Point)
```

Sets the location of this label using a `chart.Point` object.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to modify. |
| `point` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/chart/Point">chart.Point</a></code> |  | The `chart.Point` object specifying the new position. |

---

### set_size {#set_size}

<OverloadTabs v-model="_s1" :labels='["<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Label.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">set_size</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Label, size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#005CC5;--shiki-dark:#79B8FF\"> int</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">)</span>","<span style=\"color:#24292E;--shiki-dark:#E1E4E8\">Label.</span><span style=\"color:#6F42C1;--shiki-dark:#B392F0\">set_size</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\">(id</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Label, size</span><span style=\"color:#D73A49;--shiki-dark:#F97583\">:</span><span style=\"color:#D73A49;--shiki-dark:#F97583\"> series</span><span style=\"color:#24292E;--shiki-dark:#E1E4E8\"> Size)</span>"]' />

<div v-show="_s1 === 0">

Sets arrow and text size of this label.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to modify. |
| `size` | <code>series&nbsp;int</code> |  | The new size as an integer value. |

</div>

<div v-show="_s1 === 1">

Sets arrow and text size of this label.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to modify. |
| `size` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Size">Size</a></code> |  | The new size as a named constant (Size.Tiny, Size.Small, Size.Normal, Size.Large, Size.Huge). |

</div>

---

### set_style {#set_style}

```navi
Label.set_style(id: series Label, style: series LabelStyle)
```

Sets style of this label.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to modify. |
| `style` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/LabelStyle">LabelStyle</a></code> |  | The new label style constant. |

---

### set_text {#set_text}

```navi
Label.set_text(id: series Label, text: series string)
```

Sets text of this label.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to modify. |
| `text` | <code>series&nbsp;string</code> |  | The new text to display. |

---

### set_text_font_family {#set_text_font_family}

```navi
Label.set_text_font_family(
    id: series Label,
    text_font_family: series FontFamily
  )
```

Sets font family of this label.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to modify. |
| `text_font_family` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/FontFamily">FontFamily</a></code> |  | The font family: FontFamily.Default or FontFamily.Monospace. |

---

### set_text_formatting {#set_text_formatting}

```navi
Label.set_text_formatting(id: series Label, text_formatting: const TextFormat)
```

Sets text formatting of this label.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to modify. |
| `text_formatting` | <code>const&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextFormat">TextFormat</a></code> |  | The text formatting options. |

---

### set_textalign {#set_textalign}

```navi
Label.set_textalign(id: series Label, textalign: series TextHAlign)
```

Sets text alignment of this label.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to modify. |
| `textalign` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/TextHAlign">TextHAlign</a></code> |  | The text alignment: TextHAlign.Center, TextHAlign.Left, or TextHAlign.Right. |

---

### set_textcolor {#set_textcolor}

```navi
Label.set_textcolor(id: series Label, text_color: series color)
```

Sets text color of this label.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to modify. |
| `text_color` | <code>series&nbsp;color</code> |  | The new text color. |

---

### set_tooltip {#set_tooltip}

```navi
Label.set_tooltip(id: series Label, tooltip: series string)
```

Sets tooltip text of this label.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to modify. |
| `tooltip` | <code>series&nbsp;string</code> |  | The new tooltip text. |

---

### set_x {#set_x}

```navi
Label.set_x(id: series Label, x: series int)
```

Sets UNIX time or bar index (depending on the last xloc value set) of this label's position.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to modify. |
| `x` | <code>series&nbsp;int</code> |  | The new x-coordinate (bar index or UNIX time). |

---

### set_xloc {#set_xloc}

```navi
Label.set_xloc(id: series Label, xloc: series Xloc)
```

Sets x location type of this label.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to modify. |
| `xloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Xloc">Xloc</a></code> |  | The x-location type: Xloc.BarIndex or Xloc.BarTime. |

---

### set_xy {#set_xy}

```navi
Label.set_xy(id: series Label, x: series int, y: series float)
```

Sets both x and y coordinates of this label's position.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to modify. |
| `x` | <code>series&nbsp;int</code> |  | The new x-coordinate (bar index or UNIX time). |
| `y` | <code>series&nbsp;float</code> |  | The new y-coordinate (price). |

---

### set_y {#set_y}

```navi
Label.set_y(id: series Label, y: series float)
```

Sets price of this label's position.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to modify. |
| `y` | <code>series&nbsp;float</code> |  | The new y-coordinate (price). |

---

### set_yloc {#set_yloc}

```navi
Label.set_yloc(id: series Label, yloc: series Yloc)
```

Sets y location type of this label.

**Parameters**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| `id` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Label">Label</a></code> |  | The label to modify. |
| `yloc` | <code>series&nbsp;<a class="stdlib-ref" href="/api/stdlib/prelude/Yloc">Yloc</a></code> |  | The y-location type: Yloc.Price or Yloc.Price_range. |
