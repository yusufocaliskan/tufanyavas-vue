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
          <div class="content-right p-10 w-full h-screen overflow-y-auto">
            <div class="post-section">
              <div class="post flex border-b-[1px] pb-10">
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
                        class="hidden w-5 h-5 cursor-pointer ml-3 text-[#3d88aa]"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>

                      <div class="title-arrow cursor-pointer relative ml-5">
                        <span
                          class="tab-information shadow-md z-50 hidden absolute text-xs text-gray-600 top-5 left-[-50px] rounded p-2 w-[180px] border-[1px] bg-white"
                          >Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed ac lacus auctor Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit.</span
                        >
                        <svg
                          data-v-2dc54a20=""
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 26 26"
                          class="mdl-js"
                        >
                          <g
                            data-v-2dc54a20=""
                            fill="none"
                            fill-rule="evenodd"
                            stroke="#353B40"
                            stroke-width="2.028"
                          >
                            <path
                              data-v-2dc54a20=""
                              d="M0 0L6.986 0 6.986 6.901"
                              transform="translate(17 11)"
                            ></path>
                            <path
                              data-v-2dc54a20=""
                              d="M0.241 4L15.127 20.227 24 11"
                            ></path>
                          </g>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div
                    class="post-time pb-5 pt-2 text-sm flex flex-col text-gray-400"
                  >
                    <span>4 days ago</span>
                  </div>
                  <div class="post-body text-gray-700">
                    <ul class="flex-wrap">
                      <li
                        class="w-[115px] cursor-pointer hover:bg-[#3d88aa] hover:text-white border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
                      >
                        <div class="tab-left w-2/3 flex flex-col">
                          <span class="text-xs font-bold">4H</span>
                          <span class="text-xs font-thin">1d</span>
                        </div>

                        <div class="tab-right w-1/3 relative">
                          <span
                            class="tab-information shadow-md z-50 hidden absolute text-xs text-gray-600 top-5 left-[-50px] rounded p-2 w-[180px] border-[1px] bg-white"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed ac lacus auctor Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit.</span
                          >
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
                        class="w-[115px] cursor-pointer hover:bg-[#3d88aa] hover:text-white border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
                      >
                        <div class="tab-left w-2/3 flex flex-col">
                          <span class="text-xs font-bold">4H</span>
                          <span class="text-xs font-thin">1d</span>
                        </div>

                        <div class="tab-right relative w-1/3">
                          <span
                            class="tab-information shadow-md z-50 hidden absolute text-xs text-gray-600 top-5 left-[-50px] rounded p-2 w-[180px] border-[1px] bg-white"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed ac lacus auctor Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit.</span
                          >
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
                        class="w-[115px] cursor-pointer hover:bg-[#3d88aa] hover:text-white border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
                      >
                        <div class="tab-left w-2/3 flex flex-col">
                          <span class="text-xs font-bold">4H</span>
                          <span class="text-xs font-thin">1d</span>
                        </div>

                        <div class="tab-right relative w-1/3">
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
                        class="w-[115px] cursor-pointer hover:bg-[#3d88aa] hover:text-white border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
                      >
                        <div class="tab-left w-2/3 flex flex-col">
                          <span class="text-xs font-bold">4H</span>
                          <span class="text-xs font-thin">1d</span>
                        </div>

                        <div class="tab-right relative w-1/3">
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
                        class="w-[115px] cursor-pointer hover:bg-[#3d88aa] hover:text-white border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
                      >
                        <div class="tab-left w-2/3 flex flex-col">
                          <span class="text-xs font-bold">4H</span>
                          <span class="text-xs font-thin">1d</span>
                        </div>

                        <div class="tab-right relative w-1/3">
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
                        class="w-[115px] cursor-pointer hover:bg-[#3d88aa] hover:text-white border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
                      >
                        <div class="tab-left w-2/3 flex flex-col">
                          <span class="text-xs font-bold">4H</span>
                          <span class="text-xs font-thin">1d</span>
                        </div>

                        <div class="tab-right relative w-1/3">
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
                        class="w-[115px] cursor-pointer hover:bg-[#3d88aa] hover:text-white border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
                      >
                        <div class="tab-left w-2/3 flex flex-col">
                          <span class="text-xs font-bold">4H</span>
                          <span class="text-xs font-thin">1d</span>
                        </div>

                        <div class="tab-right relative w-1/3">
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
                        class="w-[115px] cursor-pointer hover:bg-[#3d88aa] hover:text-white border-gray-100 items-center px-2 border-[1px] inline-flex h-[45px]"
                      >
                        <div class="tab-left w-2/3 flex flex-col">
                          <span class="text-xs font-bold">4H</span>
                          <span class="text-xs font-thin">1d</span>
                        </div>

                        <div class="tab-right relative w-1/3">
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

                    <div class="post-graphic">
                      <img src="../../public/eurusd.png" class="mt-10" />
                    </div>

                    <div
                      class="trading-notes flex-col p-5 mt-10 rounded border-[1px] bg-[rgba(57,118,159,0.1)]"
                    >
                      <div class="trading-note-body flex space-x-10 p-2">
                        <span class="note-time font-bold">11d</span>
                        <span class="note-text"
                          >Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed ac lacus auctor,</span
                        >
                      </div>
                      <div class="trading-note-body flex space-x-10 p-2">
                        <span class="note-time font-bold">11d</span>
                        <span class="note-text"
                          >Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed ac lacus auctor Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Sed ac lacus auctorLorem
                          ipsum dolor sit amet, consectetur adipiscing elit. Sed
                          ac lacus auctorLorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Sed ac lacus auctor Lorem ipsum dolor
                          sit amet, consectetur adipiscing elit. Sed ac lacus
                          auctorLorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Sed ac lacus auctor</span
                        >
                      </div>
                      <div class="trading-note-body flex space-x-10 p-2">
                        <span class="note-time font-bold">11d</span>
                        <span class="note-text"
                          >Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed ac lacus auctor Lorem ipsum dolor sit amet,
                          consectetur adipiscing elit. Sed ac lacus auctorLorem
                          ipsum dolor sit amet, consectetur adipiscing elit. Sed
                          ac lacus auctor,</span
                        >
                      </div>
                      <div class="more-updates flex justify-center mt-5">
                        <a class="text-[#3d88aa] font-semibold" href="#"
                          >Show Updates</a
                        >
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
      class="right-side lg:w-1/3 md:w-1/3 xl:w-1/3 w-full h-screen overflow-y-auto bg-[#f0f3f5]"
    >
      <div class="flex sm:block border-[1px] border-b-gray">
        <div class="flex space-x-4">
          <a
            class="flex justify-center w-1/2 items-center text-[#39769f] border-b-[3px] border-[#39769f] p-6 text-sm font-bold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="16"
              viewBox="0 0 14 16"
              class="mdl-js mr-1"
            >
              <path
                fill="#39769F"
                fill-rule="nonzero"
                d="M13.266 6.118a.67.67 0 0 0-.598-.357H6.412L7.996.711a.637.637 0 0 0-.413-.664.682.682 0 0 0-.778.203L.138 8.57a.619.619 0 0 0-.07.673.67.67 0 0 0 .6.358h6.255l-1.584 5.05a.637.637 0 0 0 .413.664.686.686 0 0 0 .778-.204l6.666-8.32a.62.62 0 0 0 .07-.673z"
              />
            </svg>
            Intraday Updates
          </a>
        </div>
      </div>
      <!-- Intraday-Header -->

      <div class="intraday-body flex flex-col">
        <div class="intraday-post p-5 border-b-[1px] border-gray-200">
          <div class="flex post-header items-center">
            <div class="flex w-4/5 space-x-3 items-center">
              <h1 class="font-bold">USDNOK</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                class="mdl-js"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    stroke="#32B5B5"
                    stroke-width="1.2"
                    d="M0 0H19.2V19.2H0z"
                  />
                  <text
                    fill="#32B5B5"
                    font-family="CircularStd-Bold, Circular Std"
                    font-size="9.874"
                    font-weight="bold"
                  >
                    <tspan x="3.661" y="13.474">FX</tspan>
                  </text>
                </g>
              </svg>
            </div>
            <div class="w-1/5">
              <span class="flex text-sm text-gray-500 intraday-post-time"
                >4 days ago</span
              >
            </div>
          </div>
          <div class="intraday-post-body flex mt-3">
            <div class="flex w-2/3 text-sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                dolor vitae elit bibendum lacinia. Morbi blandit, lacus sit amet
                mollis bibendum, odio mauris aliquet lorem, eget lacinia ipsum
                lacus eu sapien. Pellentesque habitant morbi.
              </p>
            </div>
            <div class="flex w-1/3 text-sm">
              <div
                class="intraday-graphic relative flex w-[80px] h-[70px] cursor-pointer border-[1px] border-gray-200 rounded over"
              >
                <img
                  src="https://wavetraders-production.s3.eu-west-1.amazonaws.com/ba3f0i67pf77isqrln738niizco6?response-content-disposition=inline%3B%20filename%3D%22sbOILdaily.png%22%3B%20filename%2A%3DUTF-8%27%27sbOILdaily.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVWVWJYUVMQLQQOO2%2F20230401%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20230401T111709Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=ea0fa5c8c69cb91152ae704c969c3638e3134cb26c1fc98fbf25e0b02dce49c7"
                  class="w-[80px] h-[70px]"
                />
                <span
                  class="text-[#3583a7] text-xs font-bold absolute top-1 left-1"
                  >ZLD</span
                >
                <span
                  class="text-[#3583a7] text-xs font-bold absolute bottom-1 left-1"
                  >21h</span
                >
                <span class="absolute right-1 bottom-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    class="mdl-js"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path fill="#3583A7" d="M0 0h14v14H0z" />
                      <g stroke="#FFF">
                        <path d="M7 3.5v7M3.5 7h7" />
                      </g>
                    </g></svg
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div class="intraday-post p-5 border-b-[1px] border-gray-200">
          <div class="flex post-header items-center">
            <div class="flex w-4/5 space-x-3 items-center">
              <h1 class="font-bold">USDNOK</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                class="mdl-js"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    stroke="#32B5B5"
                    stroke-width="1.2"
                    d="M0 0H19.2V19.2H0z"
                  />
                  <text
                    fill="#32B5B5"
                    font-family="CircularStd-Bold, Circular Std"
                    font-size="9.874"
                    font-weight="bold"
                  >
                    <tspan x="3.661" y="13.474">FX</tspan>
                  </text>
                </g>
              </svg>
            </div>
            <div class="w-1/5">
              <span class="flex text-sm text-gray-500 intraday-post-time"
                >4 days ago</span
              >
            </div>
          </div>
          <div class="intraday-post-body flex mt-3">
            <div class="flex w-2/3 text-sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                dolor vitae elit bibendum lacinia. Morbi blandit, lacus sit amet
                mollis bibendum, odio mauris aliquet lorem, eget lacinia ipsum
                lacus eu sapien. Pellentesque habitant morbi.
              </p>
            </div>
            <div class="flex w-1/3 text-sm">
              <div
                class="intraday-graphic relative flex w-[80px] h-[70px] cursor-pointer border-[1px] border-gray-200 rounded over"
              >
                <img
                  src="https://wavetraders-production.s3.eu-west-1.amazonaws.com/ba3f0i67pf77isqrln738niizco6?response-content-disposition=inline%3B%20filename%3D%22sbOILdaily.png%22%3B%20filename%2A%3DUTF-8%27%27sbOILdaily.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVWVWJYUVMQLQQOO2%2F20230401%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20230401T111709Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=ea0fa5c8c69cb91152ae704c969c3638e3134cb26c1fc98fbf25e0b02dce49c7"
                  class="w-[80px] h-[70px]"
                />
                <span
                  class="text-[#3583a7] text-xs font-bold absolute top-1 left-1"
                  >ZLD</span
                >
                <span
                  class="text-[#3583a7] text-xs font-bold absolute bottom-1 left-1"
                  >21h</span
                >
                <span class="absolute right-1 bottom-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    class="mdl-js"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path fill="#3583A7" d="M0 0h14v14H0z" />
                      <g stroke="#FFF">
                        <path d="M7 3.5v7M3.5 7h7" />
                      </g>
                    </g></svg
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div class="intraday-post p-5 border-b-[1px] border-gray-200">
          <div class="flex post-header items-center">
            <div class="flex w-4/5 space-x-3 items-center">
              <h1 class="font-bold">USDNOK</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                class="mdl-js"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    stroke="#32B5B5"
                    stroke-width="1.2"
                    d="M0 0H19.2V19.2H0z"
                  />
                  <text
                    fill="#32B5B5"
                    font-family="CircularStd-Bold, Circular Std"
                    font-size="9.874"
                    font-weight="bold"
                  >
                    <tspan x="3.661" y="13.474">FX</tspan>
                  </text>
                </g>
              </svg>
            </div>
            <div class="w-1/5">
              <span class="flex text-sm text-gray-500 intraday-post-time"
                >4 days ago</span
              >
            </div>
          </div>
          <div class="intraday-post-body flex mt-3">
            <div class="flex w-2/3 text-sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                dolor vitae elit bibendum lacinia. Morbi blandit, lacus sit amet
                mollis bibendum, odio mauris aliquet lorem, eget lacinia ipsum
                lacus eu sapien. Pellentesque habitant morbi.
              </p>
            </div>
            <div class="flex w-1/3 text-sm">
              <div
                class="intraday-graphic relative flex w-[80px] h-[70px] cursor-pointer border-[1px] border-gray-200 rounded over"
              >
                <img
                  src="https://wavetraders-production.s3.eu-west-1.amazonaws.com/ba3f0i67pf77isqrln738niizco6?response-content-disposition=inline%3B%20filename%3D%22sbOILdaily.png%22%3B%20filename%2A%3DUTF-8%27%27sbOILdaily.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVWVWJYUVMQLQQOO2%2F20230401%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20230401T111709Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=ea0fa5c8c69cb91152ae704c969c3638e3134cb26c1fc98fbf25e0b02dce49c7"
                  class="w-[80px] h-[70px]"
                />
                <span
                  class="text-[#3583a7] text-xs font-bold absolute top-1 left-1"
                  >ZLD</span
                >
                <span
                  class="text-[#3583a7] text-xs font-bold absolute bottom-1 left-1"
                  >21h</span
                >
                <span class="absolute right-1 bottom-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    class="mdl-js"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path fill="#3583A7" d="M0 0h14v14H0z" />
                      <g stroke="#FFF">
                        <path d="M7 3.5v7M3.5 7h7" />
                      </g>
                    </g></svg
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div class="intraday-post p-5 border-b-[1px] border-gray-200">
          <div class="flex post-header items-center">
            <div class="flex w-4/5 space-x-3 items-center">
              <h1 class="font-bold">USDNOK</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                class="mdl-js"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    stroke="#32B5B5"
                    stroke-width="1.2"
                    d="M0 0H19.2V19.2H0z"
                  />
                  <text
                    fill="#32B5B5"
                    font-family="CircularStd-Bold, Circular Std"
                    font-size="9.874"
                    font-weight="bold"
                  >
                    <tspan x="3.661" y="13.474">FX</tspan>
                  </text>
                </g>
              </svg>
            </div>
            <div class="w-1/5">
              <span class="flex text-sm text-gray-500 intraday-post-time"
                >4 days ago</span
              >
            </div>
          </div>
          <div class="intraday-post-body flex mt-3">
            <div class="flex w-2/3 text-sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                dolor vitae elit bibendum lacinia. Morbi blandit, lacus sit amet
                mollis bibendum, odio mauris aliquet lorem, eget lacinia ipsum
                lacus eu sapien. Pellentesque habitant morbi.
              </p>
            </div>
            <div class="flex w-1/3 text-sm">
              <div
                class="intraday-graphic relative flex w-[80px] h-[70px] cursor-pointer border-[1px] border-gray-200 rounded over"
              >
                <img
                  src="https://wavetraders-production.s3.eu-west-1.amazonaws.com/ba3f0i67pf77isqrln738niizco6?response-content-disposition=inline%3B%20filename%3D%22sbOILdaily.png%22%3B%20filename%2A%3DUTF-8%27%27sbOILdaily.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVWVWJYUVMQLQQOO2%2F20230401%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20230401T111709Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=ea0fa5c8c69cb91152ae704c969c3638e3134cb26c1fc98fbf25e0b02dce49c7"
                  class="w-[80px] h-[70px]"
                />
                <span
                  class="text-[#3583a7] text-xs font-bold absolute top-1 left-1"
                  >ZLD</span
                >
                <span
                  class="text-[#3583a7] text-xs font-bold absolute bottom-1 left-1"
                  >21h</span
                >
                <span class="absolute right-1 bottom-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    class="mdl-js"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path fill="#3583A7" d="M0 0h14v14H0z" />
                      <g stroke="#FFF">
                        <path d="M7 3.5v7M3.5 7h7" />
                      </g>
                    </g></svg
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div class="intraday-post p-5 border-b-[1px] border-gray-200">
          <div class="flex post-header items-center">
            <div class="flex w-4/5 space-x-3 items-center">
              <h1 class="font-bold">USDNOK</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="19"
                viewBox="0 0 19 19"
                class="mdl-js"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    stroke="#32B5B5"
                    stroke-width="1.2"
                    d="M0 0H19.2V19.2H0z"
                  />
                  <text
                    fill="#32B5B5"
                    font-family="CircularStd-Bold, Circular Std"
                    font-size="9.874"
                    font-weight="bold"
                  >
                    <tspan x="3.661" y="13.474">FX</tspan>
                  </text>
                </g>
              </svg>
            </div>
            <div class="w-1/5">
              <span class="flex text-sm text-gray-500 intraday-post-time"
                >4 days ago</span
              >
            </div>
          </div>
          <div class="intraday-post-body flex mt-3">
            <div class="flex w-2/3 text-sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
                dolor vitae elit bibendum lacinia. Morbi blandit, lacus sit amet
                mollis bibendum, odio mauris aliquet lorem, eget lacinia ipsum
                lacus eu sapien. Pellentesque habitant morbi.
              </p>
            </div>
            <div class="flex w-1/3 text-sm">
              <div
                class="intraday-graphic relative flex w-[80px] h-[70px] cursor-pointer border-[1px] border-gray-200 rounded over"
              >
                <img
                  src="https://wavetraders-production.s3.eu-west-1.amazonaws.com/ba3f0i67pf77isqrln738niizco6?response-content-disposition=inline%3B%20filename%3D%22sbOILdaily.png%22%3B%20filename%2A%3DUTF-8%27%27sbOILdaily.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVWVWJYUVMQLQQOO2%2F20230401%2Feu-west-1%2Fs3%2Faws4_request&X-Amz-Date=20230401T111709Z&X-Amz-Expires=300&X-Amz-SignedHeaders=host&X-Amz-Signature=ea0fa5c8c69cb91152ae704c969c3638e3134cb26c1fc98fbf25e0b02dce49c7"
                  class="w-[80px] h-[70px]"
                />
                <span
                  class="text-[#3583a7] text-xs font-bold absolute top-1 left-1"
                  >ZLD</span
                >
                <span
                  class="text-[#3583a7] text-xs font-bold absolute bottom-1 left-1"
                  >21h</span
                >
                <span class="absolute right-1 bottom-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    class="mdl-js"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path fill="#3583A7" d="M0 0h14v14H0z" />
                      <g stroke="#FFF">
                        <path d="M7 3.5v7M3.5 7h7" />
                      </g>
                    </g></svg
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Intraday Updates -->
  </div>
</template>
<style scoped>
.tab-right:hover .hidden,
.title-arrow:hover .hidden {
  display: block;
}
</style>

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
import Fobbex from "../store/fobbex.json";

import { computed } from "vue";
import store from "../store/";

const navigation = computed(() => store.state.navigation);
const sub_categories = computed(() => store.state.sub_categories);
const left_categories = computed(() => store.state.left_categories);
</script>
