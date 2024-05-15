import React from 'react';
import { FormEvent, useEffect, useState } from 'react';

const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const allNumbers = '1234567890';
const allSymbols = '!@#$%^&*()_+';

const Coupon = () => {
  const [size, setSize] = useState(8);
  const [prefix, setPrefix] = useState('');
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const [coupon, setCoupon] = useState('');

  const copyText = async (coupon) => {
    await window.navigator.clipboard.writeText(coupon);
    setIsCopied(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!includeNumbers && !includeCharacters && !includeSymbols)
      return alert('Please Select One At Least');

    let result = prefix || '';
    const loopLength = size - result.length;

    for (let i = 0; i < loopLength; i++) {
      let entireString = '';
      if (includeCharacters) entireString += allLetters;
      if (includeNumbers) entireString += allNumbers;
      if (includeSymbols) entireString += allSymbols;

      const randomNum = ~~(Math.random() * entireString.length);
      result += entireString[randomNum];
    }

    setCoupon(result);
  };

  useEffect(() => {
    setIsCopied(false);
  }, [coupon]);

  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-100">
      <main className="bg-white rounded-lg shadow-md p-8 w-96">
        <h1 className="text-2xl font-bold mb-4">Coupon</h1>
        <form className="space-y-4" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Text to include"
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            maxLength={size}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />

          <input
            type="number"
            placeholder="Coupon Length"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            min={8}
            max={25}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          />

          <fieldset className="space-y-2">
            <legend className="text-lg font-medium">Include</legend>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={includeNumbers}
                onChange={() => setIncludeNumbers((prev) => !prev)}
                className="form-checkbox rounded text-blue-500 h-5 w-5"
              />
              <span className="ml-2">Numbers</span>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={includeCharacters}
                onChange={() => setIncludeCharacters((prev) => !prev)}
                className="form-checkbox rounded text-blue-500 h-5 w-5"
              />
              <span className="ml-2">Characters</span>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                checked={includeSymbols}
                onChange={() => setIncludeSymbols((prev) => !prev)}
                className="form-checkbox rounded text-blue-500 h-5 w-5"
              />
              <span className="ml-2">Symbols</span>
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Generate
          </button>
        </form>

        {coupon && (
          <code className="block bg-gray-100 rounded-lg p-4 mt-4 relative">
            {coupon}{' '}
            <span
              className="text-blue-500 absolute right-4 cursor-pointer"
              onClick={() => copyText(coupon)}
            >
              {isCopied ? 'Copied' : 'Copy'}
            </span>
          </code>
        )}
      </main>
    </div>
  );
};

export default Coupon;
