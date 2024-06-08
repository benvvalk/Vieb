/*
* Vieb - Vim Inspired Electron Browser
* Copyright (C) 2019-2024 Jelmer van Arnhem
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later verion.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
"use strict"

const {ipcRenderer} = require("electron")
const {readFile} = require("../util")

/**
 * Insert file contents into <textarea> for editing.
 * @param {string} path
 */
const loadFile = (path) => {
    const textarea = document.getElementById("textarea")
    if (textarea) {
        textarea.innerText = readFile(path) ?? ""
    }
}

ipcRenderer.on("load-file", (_, path) => loadFile(path))