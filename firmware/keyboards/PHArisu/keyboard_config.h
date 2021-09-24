/*
Copyright 2018 <Pierre Constantineau>

3-Clause BSD License

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

*/
#ifndef KEYBOARD_CONFIG_H
#define KEYBOARD_CONFIG_H
#include "hardware_config.h"
#define KEYBOARD_SIDE SINGLE


#define DEVICE_NAME_R                        "ph_Arisu_R"                          /**< Name of device. Will be included in the advertising data. */
#define DEVICE_NAME_L                       "ph_Arisu_L"                          /**< Name of device. Will be included in the advertising data. */
#define DEVICE_NAME_M                        "PhArisu"                          /**< Name of device. Will be included in the advertising data. */

#define DEVICE_MODEL                        "ph_Arisu_v1"                          /**< Name of device. Will be included in the advertising data. */

#define MANUFACTURER_NAME                   "NightlyBoards"                      /**< Manufacturer. Will be passed to Device Information Service. */



#define KEYMAP( \
  K000, K010, K001, K011, K002, K012, K003,       K013, K004, K014, K005, K015, K006, K016, K007, K027, \
  K020, K030, K021, K031, K022, K032,       K023, K033, K024, K034, K025, K035, K026, K036,       K047, \
  K040, K050, K041, K051, K042, K052,       K043, K053, K044, K054, K045, K055,       K046,       K067, \
  K060, K070, K061, K071, K062, K072,       K063, K073, K064, K074, K065, K075,             K076,       \
  K080,       K081,       K082, K092,       K093,       K094,                         K086, K096, K087  \
){ \
 { K000,  K001,  K002,  K003,  K004,  K005,  K006,  K007 }, \
  { K010,  K011,  K012,  K013,  K014,  K015,  K016,  KC_NO }, \
  { K020,  K021,  K022,  K023,  K024,  K025,  K026,  K027 }, \
  { K030,  K031,  K032,  K033,  K034,  K035,  K036,  KC_NO }, \
  { K040,  K041,  K042,  K043,  K044,  K045,  K046,  K047 }, \
  { K050,  K051,  K052,  K053,  K054,  K055,  KC_NO, KC_NO }, \
  { K060,  K061,  K062,  K063,  K064,  K065,  KC_NO, K067 }, \
  { K070,  K071,  K072,  K073,  K074,  K075,  K076,  KC_NO }, \
  { K080,  K081,  K082,  KC_NO, KC_NO, KC_NO, K086,  K087 }, \
  { KC_NO, KC_NO, K092,  K093,  K094,  KC_NO, K096,  KC_NO }  \
}

#endif /* KEYBOARD_CONFIG_H */
