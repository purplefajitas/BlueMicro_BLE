C:\Users\pierre\AppData\Local\Arduino15\packages\adafruit\tools\arm-none-eabi-gcc\9-2019q4/bin/arm-none-eabi-gdb.exe -quiet --batch -ex "target extended-remote \\.\COM4" -ex "mon tpwr enable" -ex "mon swdp_scan" -ex "att 1" -ex "mon erase_mass" -ex "mon hard_srst" -ex detach -ex "echo \nUnlock+Erase complete!\n" -ex detach -ex quit 
