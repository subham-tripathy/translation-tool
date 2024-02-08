"use client"
import React, { useEffect } from 'react'

const Translate = () => {
    useEffect(() => {
        const translateBTN = document.getElementById('translateBTN');
        const translatedTextArea = document.getElementById('translatedText');

        function translate(text, language) {
            fetch('http://localhost:5000/translate?msg=' + text + '&lang=' + language, { method: 'POST' }).then(res => res.json()).then((data) => {
                translatedTextArea.value = data.translatedText;
            })
        }

        translateBTN.addEventListener('click', () => {
            const originalText = document.getElementById('originalText').value;
            const language = document.getElementById('lang').value;
            translate(originalText, language);
        })

    })





    return (
        <div className='p-10 flex flex-col gap-14'>
            <div className='flex justify-between px-32'>
                <textarea rows={10} cols={50} name="originalText" id="originalText" className='border-2 rounded border-white shadow-md shadow-black p-2 dark:bg-slate-400 dark:text-black'></textarea>
                <textarea rows={10} cols={50} name="translatedText" id="translatedText" className='border-2 rounded border-white shadow-md shadow-black p-2 dark:bg-slate-400 dark:text-black'></textarea>
            </div>

            <div className='flex justify-center space-x-32'>
                <select name="lang" id="lang" className='text-black'>
                    <option value="hi">Hindi</option>
                </select>
                <button id='translateBTN' className='border-2 rounded border-white shadow-md shadow-black px-3 py-1 text-shadow-sm font-bold bg-gray-400'>Translate</button>
            </div>

        </div>
    )
}

export default Translate