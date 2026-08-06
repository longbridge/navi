<script setup lang="ts">
import { computed, ref, nextTick, useTemplateRef } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  PopoverRoot, PopoverTrigger, PopoverPortal, PopoverContent,
} from 'radix-vue'
import { Plus, Save, CopyPlus, Pencil, Trash2, ChevronsUpDown, Search, Check, ChartLine } from 'lucide-vue-next'
import type { ScriptItem } from '../composables/script-store'
import { isBuiltinId, getBuiltinScript, builtinIndicators, builtinStrategies, builtinChartTests, localize } from '../composables/builtin-scripts'
import type { BuiltinScript } from '../composables/builtin-scripts'

const { t, locale } = useI18n()

/** Title of a builtin script, localized to the current UI language. */
function builtinTitle(s: BuiltinScript): string {
  return localize(s.titleLocales, s.title, locale.value)
}
/** Short title of a builtin script (localized), or null. */
function builtinShort(s: BuiltinScript): string | null {
  return s.shortTitle ? localize(s.shortTitleLocales, s.shortTitle, locale.value) : null
}

const props = defineProps<{
  activeScriptId: string | null
  /** The effective chart tag for the current script (may be '__unsaved__'). */
  scriptTag: string
  dirty: boolean
  scripts: ScriptItem[]
  /** Set of script IDs (tags) currently added to the chart. */
  scriptsOnChart: Set<string>
}>()

const emit = defineEmits<{
  load: [id: string]
  new: []
  save: []
  'save-as': []
  rename: []
  delete: []
  'add-to-chart': []
}>()

const isBuiltin = computed(() => isBuiltinId(props.activeScriptId))

const activeScriptName = computed(() => {
  if (!props.activeScriptId) return t('toolbar.selectScript')
  const builtin = getBuiltinScript(props.activeScriptId)
  if (builtin) {
    const title = builtinTitle(builtin)
    const short = builtinShort(builtin)
    return short ? `${title} (${short})` : title
  }
  const user = props.scripts.find(s => s.id === props.activeScriptId)
  if (user) return user.name
  return t('toolbar.selectScript')
})

const scriptMenuOpen = ref(false)
const searchQuery = ref('')
const searchInputRef = ref<HTMLInputElement | null>(null)
const scrollContainerRef = ref<HTMLDivElement | null>(null)

function openMenu() {
  scriptMenuOpen.value = true
  searchQuery.value = ''
  nextTick(() => searchInputRef.value?.focus())
  setTimeout(() => {
    // Scroll to the currently-editing script (activeScriptId).
    const active = scrollContainerRef.value?.querySelector<HTMLElement>('[data-active="true"]')
    active?.scrollIntoView({ block: 'center' })
  }, 0)
}

function selectScript(id: string) {
  scriptMenuOpen.value = false
  emit('load', id)
}

const query = computed(() => searchQuery.value.trim().toLowerCase())

const filteredUserScripts = computed(() =>
  query.value
    ? props.scripts.filter(s => s.name.toLowerCase().includes(query.value))
    : props.scripts,
)

/** Match a builtin script against the query, across localized + default text. */
function matchesBuiltin(s: BuiltinScript): boolean {
  const q = query.value
  return (
    builtinTitle(s).toLowerCase().includes(q) ||
    s.title.toLowerCase().includes(q) ||
    (builtinShort(s)?.toLowerCase().includes(q) ?? false)
  )
}

const filteredIndicators = computed(() =>
  query.value ? builtinIndicators.filter(matchesBuiltin) : builtinIndicators,
)

const filteredStrategies = computed(() =>
  query.value ? builtinStrategies.filter(matchesBuiltin) : builtinStrategies,
)

const filteredChartTests = computed(() =>
  query.value
    ? builtinChartTests.filter(s =>
        s.title.toLowerCase().includes(query.value) ||
        (s.group?.toLowerCase().includes(query.value) ?? false),
      )
    : builtinChartTests,
)

const rootEl = useTemplateRef<HTMLElement>('rootEl')
defineExpose({ rootEl })

const filteredChartTestGroups = computed(() => {
  const map = new Map<string, typeof builtinChartTests>()
  for (const s of filteredChartTests.value) {
    const g = s.group ?? ''
    if (!map.has(g)) map.set(g, [])
    map.get(g)!.push(s)
  }
  return Array.from(map.entries()).map(([group, scripts]) => ({ group, scripts }))
})
</script>

<template>
  <div ref="rootEl" class="flex min-h-11 shrink-0 items-center gap-2 border-b border-border bg-background px-3 py-1.5">
    <!-- Script selector -->
    <div class="flex flex-1 min-w-0 overflow-hidden items-center gap-1">
      <PopoverRoot v-model:open="scriptMenuOpen">
        <PopoverTrigger
          class="flex h-8 min-w-0 shrink items-center justify-between whitespace-nowrap rounded-md border px-2 text-xs font-medium ring-offset-background transition-all ease-out hover:bg-foreground/10 focus:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          :class="scriptMenuOpen
            ? 'grow border-input bg-background shadow-sm duration-200'
            : 'grow-0 border-transparent bg-transparent shadow-none duration-300'"
          @click="openMenu"
        >
          <span class="truncate">{{ activeScriptName }}</span>
          <ChevronsUpDown class="ml-1 size-3.5 shrink-0 text-muted-foreground" />
        </PopoverTrigger>
        <PopoverPortal>
          <PopoverContent
            :side-offset="4"
            align="start"
            :avoid-collisions="true"
            class="z-50 w-[var(--radix-popover-trigger-width)] min-w-[320px] max-w-[calc(100vw-2rem)] rounded-md border bg-popover text-popover-foreground shadow-md outline-none"
            @open-auto-focus.prevent
          >
            <!-- Search -->
            <div class="flex items-center border-b px-3 py-2 gap-2">
              <Search class="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
              <input
                ref="searchInputRef"
                v-model="searchQuery"
                :placeholder="t('toolbar.search')"
                class="flex-1 bg-transparent text-xs outline-none placeholder:text-muted-foreground"
              />
            </div>

            <div ref="scrollContainerRef" class="max-h-96 overflow-y-auto p-1">
              <!-- My Scripts -->
              <template v-if="filteredUserScripts.length > 0">
                <div class="px-2 py-1.5 text-xs font-semibold text-muted-foreground">{{ t('toolbar.myScripts') }}</div>
                <button
                  v-for="s in filteredUserScripts"
                  :key="s.id"
                  :data-active="s.id === activeScriptId"
                  class="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm outline-none transition-colors hover:bg-foreground/10 hover:text-foreground"
                  :class="s.id === activeScriptId ? 'bg-primary/10 text-primary font-medium' : ''"
                  @click="selectScript(s.id)"
                >
                  {{ s.name }}
                  <Check v-if="scriptsOnChart.has(s.id)" class="ml-auto h-3.5 w-3.5 shrink-0" />
                  <span v-else class="ml-auto w-3.5 shrink-0" />
                </button>
                <div class="-mx-1 my-1 h-px bg-border" />
              </template>

              <!-- Built-in examples -->
              <template v-if="filteredIndicators.length > 0 || filteredStrategies.length > 0">
                <div class="px-2 py-1.5 text-xs font-semibold text-muted-foreground">{{ t('toolbar.builtinExamples') }}</div>

                <!-- Indicators -->
                <template v-if="filteredIndicators.length > 0">
                  <div class="px-2 py-1 text-xs text-muted-foreground/70">{{ t('toolbar.indicators') }}</div>
                  <button
                    v-for="s in filteredIndicators"
                    :key="s.id"
                    :data-active="s.id === activeScriptId"
                    class="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm outline-none transition-colors hover:bg-foreground/10 hover:text-foreground"
                    :class="s.id === activeScriptId ? 'bg-primary/10 text-primary font-medium' : ''"
                    @click="selectScript(s.id)"
                  >
                    <span class="flex-1 min-w-0 truncate">{{ builtinTitle(s) }}</span>
                    <span v-if="s.shortTitle" class="shrink-0 text-xs text-muted-foreground">{{ builtinShort(s) }}</span>
                    <Check v-if="scriptsOnChart.has(s.id)" class="h-3.5 w-3.5 shrink-0" />
                    <span v-else class="w-3.5 shrink-0" />
                  </button>
                </template>

                <!-- Strategies -->
                <template v-if="filteredStrategies.length > 0">
                  <div class="px-2 py-1 text-xs text-muted-foreground/70 mt-1">{{ t('toolbar.strategies') }}</div>
                  <button
                    v-for="s in filteredStrategies"
                    :key="s.id"
                    :data-active="s.id === activeScriptId"
                    class="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm outline-none transition-colors hover:bg-foreground/10 hover:text-foreground"
                    :class="s.id === activeScriptId ? 'bg-primary/10 text-primary font-medium' : ''"
                    @click="selectScript(s.id)"
                  >
                    <span class="flex-1 min-w-0 truncate">{{ builtinTitle(s) }}</span>
                    <span v-if="s.shortTitle" class="shrink-0 text-xs text-muted-foreground">{{ builtinShort(s) }}</span>
                    <Check v-if="scriptsOnChart.has(s.id)" class="h-3.5 w-3.5 shrink-0" />
                    <span v-else class="w-3.5 shrink-0" />
                  </button>
                </template>
              </template>

              <!-- Chart Tests -->
              <template v-if="filteredChartTests.length > 0">
                <div class="-mx-1 my-1 h-px bg-border" />
                <div class="px-2 py-1.5 text-xs font-semibold text-muted-foreground">Chart Tests</div>
                <template v-for="{ group, scripts } in filteredChartTestGroups" :key="group">
                  <div class="px-2 py-1 text-xs text-muted-foreground/70 mt-1">{{ group }}</div>
                  <button
                    v-for="s in scripts"
                    :key="s.id"
                    :data-active="s.id === activeScriptId"
                    class="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-left text-sm outline-none transition-colors hover:bg-foreground/10 hover:text-foreground"
                    :class="s.id === activeScriptId ? 'bg-primary/10 text-primary font-medium' : ''"
                    @click="selectScript(s.id)"
                  >
                    <span class="flex-1 min-w-0 truncate">{{ builtinTitle(s) }}</span>
                    <Check v-if="scriptsOnChart.has(s.id)" class="h-3.5 w-3.5 shrink-0" />
                    <span v-else class="w-3.5 shrink-0" />
                  </button>
                </template>
              </template>

              <!-- No results -->
              <div
                v-if="filteredUserScripts.length === 0 && filteredIndicators.length === 0 && filteredStrategies.length === 0 && filteredChartTests.length === 0"
                class="px-2 py-4 text-center text-sm text-muted-foreground"
              >
                {{ t('toolbar.noResults') }}
              </div>
            </div>
          </PopoverContent>
        </PopoverPortal>
      </PopoverRoot>
      <span v-if="dirty" class="inline-block w-1.5 h-1.5 rounded-full bg-primary shrink-0" :title="t('toolbar.unsaved')" />
      <div
        v-if="!scriptsOnChart.has(scriptTag)"
        class="flex shrink-0 items-center overflow-hidden transition-all ease-out"
        :class="scriptMenuOpen ? 'max-w-0 opacity-0 translate-x-3 pointer-events-none duration-200' : 'max-w-[160px] opacity-100 translate-x-0 duration-300'"
      >
        <button
          class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-primary/10 px-2.5 text-xs font-medium text-primary transition-colors hover:bg-primary/15"
          :title="t('toolbar.addToChart')"
          @click="emit('add-to-chart')"
        >
          <ChartLine :size="13" />
          {{ t('toolbar.addToChart') }}
        </button>
      </div>
    </div>

    <!-- Script actions: collapse away while the script picker is open -->
    <div
      class="flex shrink-0 items-center gap-1 overflow-hidden transition-all ease-out"
      :class="scriptMenuOpen ? 'max-w-0 opacity-0 translate-x-3 pointer-events-none duration-200' : 'max-w-[240px] opacity-100 translate-x-0 duration-300'"
    >
      <div class="flex items-center gap-0.5" role="group" :aria-label="t('toolbar.fileActions')">
      <button
        class="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
        :title="t('toolbar.newScript')"
        @click="emit('new')"
      >
        <Plus :size="14" />
      </button>
      <button
        class="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
        :title="t('toolbar.save')"
        :disabled="!dirty"
        @click="emit('save')"
      >
        <Save :size="14" />
      </button>
      <button
        class="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground"
        :title="t('toolbar.saveAs')"
        @click="emit('save-as')"
      >
        <CopyPlus :size="14" />
      </button>
      </div>

      <span class="mx-0.5 h-5 w-px bg-border" aria-hidden="true" />

      <div class="flex items-center gap-0.5" role="group" :aria-label="t('toolbar.scriptActions')">
      <button
        class="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-foreground/10 hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
        :title="t('toolbar.rename')"
        :disabled="!activeScriptId || isBuiltin"
        @click="emit('rename')"
      >
        <Pencil :size="14" />
      </button>
      <button
        class="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive disabled:pointer-events-none disabled:opacity-40"
        :title="t('toolbar.delete')"
        :disabled="!activeScriptId || isBuiltin"
        @click="emit('delete')"
      >
        <Trash2 :size="14" />
      </button>
      </div>
    </div>
  </div>
</template>
