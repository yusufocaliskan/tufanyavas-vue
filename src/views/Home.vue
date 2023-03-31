<template>
  <Disclosure as="nav" class="bg-white-800" v-slot="{ open }">
    <div class="border-b-2 border-gray-100 mx-auto px-20 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex flex-shrink-0 items-center">
            <img
              class="block h-5 w-auto lg:hidden"
              src="https://app.wavetraders.com/img/logo-wave.d0839793.svg"
              alt="Tufan Yavas"
            />
            <img
              class="hidden h-5 w-auto lg:block"
              src="https://app.wavetraders.com/img/logo-wave.d0839793.svg"
              alt="Tufan Yavas"
            />
          </div>
          <div class="hidden flex-auto sm:ml-6 sm:block">
            <div class="flex justify-center space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? ' pb-3 border-b-4 border-blue-500'
                    : 'text-gray-300 hover:text-black hover:border-b-4 hover:border-blue-500 ',
                  'px-3 py-2 text-sm font-medium',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
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
                >
                  <svg
                    aria-hidden="true"
                    id="theme-toggle-dark-icon"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                    ></path>
                  </svg>
                  <svg
                    aria-hidden="true"
                    id="theme-toggle-light-icon"
                    class="hidden w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Toggle dark mode</span>
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
                <span class="hidden lg:block md:block">Özgür Bulut</span>
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
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              >
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Your Profile</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    ]"
                    >Settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
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

  <div id="content" class="flex flex-wrap">
    <div
      class="left-content-side flex flex-wrap lg:w-2/3 md:w-2/3 xl:w-2/3 w-full h-screen bg-red-500"
    >
      <div class="main-content w-full overflow-y-auto bg-yellow-400">
        <!-- Sub Categories -->
        <div class="sub-categories flex w-full h-16 pt-2 sm:block bg-white">
          <div class="flex justify-center space-x-4">
            <a
              v-for="item in sub_categories"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current
                  ? ' pb-3 border-b-4 border-blue-500'
                  : 'text-gray-300 hover:text-black hover:border-b-4 hover:border-blue-500 ',
                'px-3 py-2 text-sm font-medium',
              ]"
              :aria-current="item.current ? 'page' : undefined"
              >{{ item.name }}</a
            >
          </div>
        </div>
        <div
          class="content-menu hidden lg:block lg:w-1/5 md:w-1/5 xl:w-1/5 h-screen overflow-y-auto bg-green-600"
        >
          <ul>
            <li><a href="#">ALL FAV</a></li>
          </ul>
        </div>
        <!-- content:menu -->
      </div>
      <!-- main:content -->
    </div>
    <div
      class="right-side lg:w-1/3 md:w-1/3 xl:w-1/3 w-full h-screen overflow-y-auto bg-blue-700"
    >
      RIGHT
    </div>
  </div>
</template>

<script setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Forex", href: "#", current: true },
  { name: "Crypto", href: "#", current: false },
  { name: "Elliot Wave School", href: "#", current: false },
];

const sub_categories = [
  { name: "Charts", href: "#", current: true },
  { name: "Video Analysis", href: "#", current: false },
];
</script>
