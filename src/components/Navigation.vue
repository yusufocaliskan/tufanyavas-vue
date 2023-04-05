<template>
  <Disclosure as="nav" class="bg-white dark:bg-[#34393e]" v-slot="{ open }">
    <div
      class="border-b-2 border-gray-100 dark:border-[#212326] mx-auto px-5 sm:px-6 lg:px-8"
    >
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <router-link to="/">
              <img
                class="block h-5 w-auto lg:hidden"
                src="https://app.wavetraders.com/img/logo-wave.d0839793.svg"
                alt="Tufan Yavas"
            /></router-link>
            <router-link to="/">
              <img
                class="hidden h-5 w-auto lg:block"
                src="https://app.wavetraders.com/img/logo-wave.d0839793.svg"
                alt="Tufan Yavas"
              />
            </router-link>
          </div>
          <div class="hidden flex-auto sm:ml-6 sm:block">
            <div class="flex justify-center space-x-4">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                exact-active-class="py-5 border-b-[3px] text-[#3583a7] border-[#3583a7] dark:text-[#51a4dc] dark:border-[#51a4dc] dark:text-[#51a4dc]"
                :to="item.href"
                class="py-5 px-10 text-sm font-medium text-black hover:text-[#3583a7] hover:border-b-[3px] hover:border-[#3583a7] dark:text-white"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</router-link
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div class="flex items-center space-x-5">
              <div>
                <button
                  id="theme-toggle"
                  data-tooltip-target="tooltip-toggle"
                  type="button"
                  class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                  @click.prevent="themeToggle()"
                >
                  <SunIcon v-if="isDark" />
                  <MoonIcon v-else />
                </button>
              </div>
              <!-- Dark-Light Mode switcher -->

              <MenuButton
                class="flex items-center space-x-3 rounded-full text-sm focus:outline-none"
              >
                <img
                  class="focus:ring-offset-gray-800 h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <span class="hidden lg:block md:block dark:text-white"
                  >Özgür Bulut</span
                >
              </MenuButton>
            </div>
            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="dark:bg-[#34393e] absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700 dark:text-white  dark:hover:bg-black',
                    ]"
                    >Your Profile</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700  dark:text-white dark:hover:bg-black',
                    ]"
                    >Settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700  dark:text-white  dark:hover:bg-black',
                    ]"
                    >Sign out</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

import { computed } from "vue";
import store from "../store/";
import MoonIcon from "./icons/MoonIcon.vue";
import SunIcon from "./icons/SunIcon.vue";

//When theme mode is changed.
const isDark = useDark();
const themeToggle = useToggle(isDark);

const navigation = computed(() => store.state.navigation);
const left_categories = computed(() => store.state.left_categories);
</script>
