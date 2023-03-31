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
      class="left-content-side flex flex-wrap lg:w-2/3 md:w-2/3 xl:w-2/3 w-full h-screen"
    >
      <div class="main-content flex-row w-full overflow-y-auto">
        <!-- Sub Categories -->

        <div class="content-wrapper flex">
          <div
            class="content-menu hidden border-r-[1px] lg:block lg:w-1/5 h-screen overflow-y-auto bg-green-600"
          >
            <!-- Search-box -->
            <div class="flex">
              <form>
                <input
                  name="search-box"
                  placeholder="Search..."
                  class="p-4 outline-none border-b-[1px]"
                />
              </form>
            </div>
            <!--end: search-box -->

            <div class="left-content-menu flex overflow-y-auto">
              <ul class="flex flex-col w-50">
                <li
                  class="flex border-b-[1px] items-center text-sm bg-white hover:bg-[#3d88aa] hover:text-white"
                  v-for="item in left_categories"
                  :key="item.id"
                >
                  <svg
                    v-if="item.stared == false"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-5 h-5 cursor-pointer ml-3 text-gray-400"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>

                  <svg
                    v-if="item.stared == true"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5 text-[#3d88aa] cursor-pointer ml-3"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
                    />
                  </svg>

                  <a class="flex font-bold w-60 text-neutral-900 p-4" href="#">
                    {{ item.name }}</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="content-right p-5 w-full h-screen overflow-y-auto">
            <div class="post-section">
              <div class="post flex">
                <div class="post-left w-full">
                  <div class="post-title flex items-center">
                    <h1 class="text-xl font-bold">EURUSD</h1>

                    <div class="post-star flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 cursor-pointer ml-3 text-gray-400"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-5 h-5 cursor-pointer ml-3 text-[#3d88aa]"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    class="post-time pb-5 pt-2 text-sm flex flex-col text-gray-400"
                  >
                    <span>4 days ago</span>
                  </div>
                  <div class="post-body text-gray-700">
                    <div class="post-right flex w-full">
                      <div class="post-graphic-tabs">
                        <ul class="flex-wrap">
                          <li
                            class="w-[115px] border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
                          >
                            <div class="tab-left w-2/3 flex flex-col">
                              <span class="text-xs font-bold">4H</span>
                              <span class="text-xs font-thin text-gray-500"
                                >1d</span
                              >
                            </div>

                            <div class="tab-right w-1/3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 26 26"
                                class="mdl-js"
                              >
                                <g
                                  fill="none"
                                  fill-rule="evenodd"
                                  stroke="#353B40"
                                  stroke-width="2.028"
                                >
                                  <path
                                    d="M0 0L6.986 0 6.986 6.901"
                                    transform="translate(17 11)"
                                  />
                                  <path d="M0.241 4L15.127 20.227 24 11" />
                                </g>
                              </svg>
                            </div>
                          </li>

                          <li
                            class="w-[115px] border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
                          >
                            <div class="tab-left w-2/3 flex flex-col">
                              <span class="text-xs font-bold">4H</span>
                              <span class="text-xs font-thin text-gray-500"
                                >1d</span
                              >
                            </div>

                            <div class="tab-right w-1/3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                class="mdl-js"
                              >
                                <g
                                  fill="none"
                                  fill-rule="evenodd"
                                  stroke="#353B40"
                                  stroke-width="1.17"
                                >
                                  <path d="M10 4h4.03v3.981" />
                                  <path d="M.139 9.362h8.588l5.12-5.324" />
                                </g>
                              </svg>
                            </div>
                          </li>
                          <li
                            class="w-[115px] border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
                          >
                            <div class="tab-left w-2/3 flex flex-col">
                              <span class="text-xs font-bold">4H</span>
                              <span class="text-xs font-thin text-gray-500"
                                >1d</span
                              >
                            </div>

                            <div class="tab-right w-1/3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 15 15"
                                class="mdl-js"
                              >
                                <g
                                  fill="none"
                                  fill-rule="evenodd"
                                  stroke="#353B40"
                                  stroke-width="1.17"
                                >
                                  <path
                                    d="M0 0L4.03 0 4.03 3.981"
                                    transform="rotate(45 -.243 17.071)"
                                  />
                                  <path d="M15 7.788L0 7.788" />
                                </g>
                              </svg>
                            </div>
                          </li>
                          <li
                            class="w-[115px] border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
                          >
                            <div class="tab-left w-2/3 flex flex-col">
                              <span class="text-xs font-bold">4H</span>
                              <span class="text-xs font-thin text-gray-500"
                                >1d</span
                              >
                            </div>

                            <div class="tab-right w-1/3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                class="mdl-js"
                              >
                                <g
                                  fill="none"
                                  fill-rule="evenodd"
                                  stroke="#353B40"
                                  stroke-width="1.17"
                                >
                                  <path
                                    d="M0 0L4.03 0 4.03 3.981"
                                    transform="translate(8 3)"
                                  />
                                  <path d="M12.106 2.885L2.809 12.182" />
                                </g>
                              </svg>
                            </div>
                          </li>
                          <li
                            class="w-[115px] border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
                          >
                            <div class="tab-left w-2/3 flex flex-col">
                              <span class="text-xs font-bold">4H</span>
                              <span class="text-xs font-thin text-gray-500"
                                >1d</span
                              >
                            </div>

                            <div class="tab-right w-1/3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                class="mdl-js"
                              >
                                <g
                                  fill="none"
                                  fill-rule="evenodd"
                                  stroke="#353B40"
                                  stroke-width="1.17"
                                >
                                  <path
                                    d="M0.139 11.378L5.032 6.313 8.727 9.362 13.846 4.038"
                                  />
                                  <path
                                    d="M0 0L4.03 0 4.03 3.981"
                                    transform="translate(10 4)"
                                  />
                                </g>
                              </svg>
                            </div>
                          </li>
                          <li
                            class="w-[115px] border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
                          >
                            <div class="tab-left w-2/3 flex flex-col">
                              <span class="text-xs font-bold">4H</span>
                              <span class="text-xs font-thin text-gray-500"
                                >1d</span
                              >
                            </div>

                            <div class="tab-right w-1/3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="15px"
                                height="7px"
                                viewBox="0 0 15 7"
                                version="1.1"
                                class="mdl-js"
                              >
                                <g
                                  id="Page-1"
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    id="bias3"
                                    transform="translate(7.500000, 3.000000) scale(1, -1) translate(-7.500000, -3.000000) "
                                    stroke="#353B40"
                                    stroke-width="1.17"
                                  >
                                    <polyline
                                      id="Path"
                                      points="10 0 14.03 0 14.03 3.981"
                                    />
                                    <polyline
                                      id="Path"
                                      points="0.139 5.362 8.727 5.362 13.847 0.038"
                                    />
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </li>
                          <li
                            class="w-[115px] border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
                          >
                            <div class="tab-left w-2/3 flex flex-col">
                              <span class="text-xs font-bold">4H</span>
                              <span class="text-xs font-thin text-gray-500"
                                >1d</span
                              >
                            </div>

                            <div class="tab-right w-1/3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="16px"
                                height="9px"
                                viewBox="0 0 16 9"
                                version="1.1"
                                class="mdl-js"
                              >
                                <g
                                  id="Page-1"
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    id="bias2"
                                    transform="translate(8.500000, 4.000000) scale(1, -1) translate(-8.500000, -4.000000) translate(1.000000, 0.000000)"
                                    stroke="#353B40"
                                    stroke-width="1.17"
                                  >
                                    <polyline
                                      id="Path"
                                      points="0.139 7.378 5.032 2.313 8.727 5.362 13.846 0.038"
                                    />
                                    <polyline
                                      id="Path"
                                      points="10 0 14.03 0 14.03 3.981"
                                    />
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </li>
                          <li
                            class="w-[115px] border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
                          >
                            <div class="tab-left w-2/3 flex flex-col">
                              <span class="text-xs font-bold">4H</span>
                              <span class="text-xs font-thin text-gray-500"
                                >1d</span
                              >
                            </div>

                            <div class="tab-right w-1/3">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                width="16px"
                                height="12px"
                                viewBox="0 0 16 12"
                                version="1.1"
                                class="mdl-js"
                              >
                                <g
                                  id="Page-1"
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    id="bias4"
                                    transform="translate(8.500000, 6.000000) scale(1, -1) translate(-8.500000, -6.000000) translate(1.000000, 1.000000)"
                                    stroke="#353B40"
                                    stroke-width="1.17"
                                  >
                                    <polyline
                                      id="Path"
                                      points="10 4 14.03 4 14.03 7.981"
                                    />
                                    <polyline
                                      id="Path"
                                      points="0.139 0.308 8.727 9.669 13.847 4.346"
                                    />
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- content-wrapper-->
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
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  StarIcon,
} from "@heroicons/vue/24/outline";
import { StarIcon as SolidStartIcon } from "@vue-hero-icons/solid";

import { computed } from "vue";
import store from "../store/";

const navigation = computed(() => store.state.navigation);
const sub_categories = computed(() => store.state.sub_categories);
const left_categories = computed(() => store.state.left_categories);
</script>
